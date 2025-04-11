// import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { FaPlus, FaMinus } from 'react-icons/fa';
// import Pagination from '../Pagination';

// const ProductTable = ({
//   columns,
//   data,
//   currentPage,
//   itemsPerPage,
//   onPageChange,
//   showPagination = true,
// }) => {
//   const [expandedRows, setExpandedRows] = useState([]);
//   const [isMobileView, setIsMobileView] = useState(false);

//   // Handle screen resize
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobileView(window.innerWidth < 1400);
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const toggleRow = (rowIndex) => {
//     if (expandedRows.includes(rowIndex)) {
//       setExpandedRows(expandedRows.filter((index) => index !== rowIndex));
//     } else {
//       setExpandedRows([...expandedRows, rowIndex]);
//     }
//   };

//   const visibleColumnHeaders = ['#', 'Order Code', 'Created At'];
//   const getVisibleColumns = () => {
//     if (!isMobileView) return columns;
//     return columns.filter((col) => visibleColumnHeaders.includes(col.header));
//   };

//   const getHiddenColumns = () => {
//     if (!isMobileView) return [];
//     return columns.filter((col) => !visibleColumnHeaders.includes(col.header));
//   };

//   // Pagination logic
//   const totalPages = Math.ceil(data.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

//   return (
//     <div className="overflow-x-auto mt-5">
//       <table className="min-w-full bg-white">
//         <thead>
//           <tr className="w-full border-b">
//             {isMobileView && (
//               <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
//                 +
//               </th>
//             )}
//             {getVisibleColumns().map((column, index) => (
//               <th
//                 key={index}
//                 className="py-3 px-4 text-left text-sm font-medium text-gray-500"
//               >
//                 {column.header}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {currentItems.map((item, rowIndex) => {
//             const actualIndex = indexOfFirstItem + rowIndex;
//             return (
//               <>
//                 <tr key={rowIndex} className="border-b hover:bg-gray-50">
//                   {isMobileView && (
//                     <td
//                       className="py-3 px-4 text-sm text-gray-700 cursor-pointer"
//                       onClick={() => toggleRow(actualIndex)}
//                     >
//                       {expandedRows.includes(actualIndex) ? (
//                        "-"
//                       ) : (
//                        "+"
//                       )}
//                     </td>
//                   )}
//                   {getVisibleColumns().map((column, colIndex) => (
//                     <td
//                       key={colIndex}
//                       className="py-3 px-4 text-sm text-gray-700"
//                     >
//                       {column.accessor(item, actualIndex)}
//                     </td>
//                   ))}
//                 </tr>

//                 {/* Expanded row */}
//                 {isMobileView && expandedRows.includes(actualIndex) && (
//                   <tr className="bg-gray-50">
//                     <td colSpan={getVisibleColumns().length + 1}>
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 text-sm text-gray-700">
//                         {getHiddenColumns().map((column, colIndex) => (
//                           <div key={colIndex}>
//                             <strong>{column.header}:</strong>{' '}
//                             {column.accessor(item, actualIndex)}
//                           </div>
//                         ))}
//                       </div>
//                     </td>
//                   </tr>
//                 )}
//               </>
//             );
//           })}
//         </tbody>

//       </table>

//       {showPagination && data.length > itemsPerPage && (
//         <div className="flex justify-between items-center mt-6">
//           <div className="text-sm text-gray-500">
//             Showing {indexOfFirstItem + 1} to{' '}
//             {Math.min(indexOfLastItem, data.length)} of {data.length} entries
//           </div>
//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={onPageChange}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// ProductTable.propTypes = {
//   columns: PropTypes.arrayOf(
//     PropTypes.shape({
//       header: PropTypes.string.isRequired,
//       accessor: PropTypes.func.isRequired,
//     })
//   ).isRequired,
//   data: PropTypes.array.isRequired,
//   currentPage: PropTypes.number.isRequired,
//   itemsPerPage: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
//   showPagination: PropTypes.bool,
  
// };

// export default ProductTable;



import { useState } from "react";
import PropTypes from "prop-types";
import Pagination from "../Pagination";
import React from "react";
import ViewExpandData from "../ViewExpandData";

const ProductTable = ({
  columns,
  data,
  currentPage,
  itemsPerPage,
  onPageChange,
  showPagination = true,
  isMobileView,
}) => {
  const [expandedRows, setExpandedRows] = useState([]);

  const toggleRow = (rowIndex) => {
    setExpandedRows((prev) =>
      prev.includes(rowIndex)
        ? prev.filter((i) => i !== rowIndex)
        : [...prev, rowIndex]
    );
  };

  // Mobile view: Show only these columns
  const visibleColumnHeaders = ["#", "Num of Sale"];
  const getVisibleColumns = () =>
    isMobileView
      ? columns.filter((col) => visibleColumnHeaders.includes(col.header))
      : columns;

  const getHiddenColumns = () =>
    isMobileView
      ? columns.filter((col) => !visibleColumnHeaders.includes(col.header))
      : [];

  // Pagination logic
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="overflow-x-auto mt-5">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="w-full border-b">
            {isMobileView && (
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 w-10">
                {/* Toggle Column */}
              </th>
            )}
            {getVisibleColumns().map((column, index) => (
              <th
                key={index}
                className="py-3 px-4 text-left text-sm font-medium text-gray-500"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, rowIndex) => {
            const actualIndex = indexOfFirstItem + rowIndex;
            const isExpanded = expandedRows.includes(actualIndex);
            return (
              <React.Fragment key={actualIndex}>
                <tr className="border-b hover:bg-gray-50">
                  {isMobileView && (
                    <td
                      className="py-3 px-4 text-sm text-gray-700 cursor-pointer font-bold"
                      
                    >
                       <ViewExpandData
                        isExpanded={isExpanded}
                        toggleExpanded={() => toggleRow(actualIndex)}
                      />
                    </td>
                  )}
                  {getVisibleColumns().map((column, colIndex) => (
                    <td
                      key={colIndex}
                      className="py-3 px-4 text-sm text-gray-700"
                    >
                      {column.accessor(item, actualIndex)}
                    </td>
                  ))}
                </tr>

                {/* Expanded row only for hidden columns in mobile */}
                {isMobileView && isExpanded && (
                  <tr className="bg-gray-50">
                    <td colSpan={getVisibleColumns().length + 1}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 text-sm text-gray-700">
                        {getHiddenColumns().map((column, colIndex) => (
                          <div key={colIndex}>
                            <strong>{column.header}:</strong>{" "}
                            {column.accessor(item, actualIndex)}
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>

      {showPagination && data.length > itemsPerPage && (
        <div className="flex justify-between items-center mt-6 px-4">
          <div className="text-sm text-gray-500">
            Showing {indexOfFirstItem + 1} to{" "}
            {Math.min(indexOfLastItem, data.length)} of {data.length} entries
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </div>
  );
};

ProductTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      accessor: PropTypes.func.isRequired,
    })
  ).isRequired,
  data: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  showPagination: PropTypes.bool,
  isMobileView: PropTypes.bool.isRequired,
};

export default ProductTable;
