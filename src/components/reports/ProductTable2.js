import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Pagination from "../Pagination";
import ViewExpandData from "../ViewExpandData";

const ProductTable2 = ({
  columns,
  data,
  currentPage,
  itemsPerPage,
  onPageChange,
  showPagination = true,
}) => {
  const [expandedRows, setExpandedRows] = useState([]);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1400);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1400);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleRow = (rowIndex) => {
    if (expandedRows.includes(rowIndex)) {
      setExpandedRows(expandedRows.filter((index) => index !== rowIndex));
    } else {
      setExpandedRows([...expandedRows, rowIndex]);
    }
  };

  const visibleColumnHeaders = ["#", "Order Code", "Admin Commission"];
  const getVisibleColumns = () => {
    if (!isMobileView) return columns;
    return columns.filter((col) => visibleColumnHeaders.includes(col.header));
  };

  const getHiddenColumns = () => {
    if (!isMobileView) return [];
    return columns.filter((col) => !visibleColumnHeaders.includes(col.header));
  };

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
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
                {/* Toggle icon header placeholder */}
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
            return (
              <>
                <tr key={rowIndex} className="border-b hover:bg-gray-50">
                  {isMobileView && (
                    <td
                      className="py-3 px-4 text-sm text-gray-700 cursor-pointer"
                      
                    >
                       <ViewExpandData
                        isExpanded={expandedRows.includes(actualIndex)}
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

                {isMobileView && expandedRows.includes(actualIndex) && (
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
              </>
            );
          })}
        </tbody>
      </table>

      {showPagination && data.length > itemsPerPage && (
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 px-4">
          <div className="text-sm text-gray-500 mb-2 sm:mb-0">
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

ProductTable2.propTypes = {
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
};

export default ProductTable2;
