import { useState } from 'react';
import PropTypes from 'prop-types';
import Pagination from '../Pagination';
import React from 'react';
import { Minus,Plus } from 'lucide-react';
import ViewExpandData from '../ViewExpandData';

const ProductTable3 = ({ columns, data, currentPage, itemsPerPage, onPageChange, showPagination = true }) => {
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const [expandedRows, setExpandedRows] = useState([]);

  const toggleRow = (index) => {
    setExpandedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="overflow-x-auto mt-5">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="border-b">
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 w-10"></th>
            {columns.map((column, index) => {
              const isHiddenColumn = column.header === 'Order Amount';
              return (
                <th
                  key={index}
                  className={`py-3 px-4 text-left text-sm font-medium text-gray-500 ${
                    isHiddenColumn ? 'hidden xl:table-cell' : ''
                  }`}
                >
                  {column.header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, rowIndex) => {
            const absoluteIndex = indexOfFirstItem + rowIndex;
            const isExpanded = expandedRows.includes(absoluteIndex);

            return (
              <React.Fragment key={rowIndex}>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    {/* <button onClick={() => toggleRow(absoluteIndex)} className="text-gray-600 xl:hidden">
                      {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
                    </button> */}
                    <ViewExpandData
                      isExpanded={isExpanded}
                      toggleExpanded={() => toggleRow(absoluteIndex)}
                    />
                  </td>
                  {columns.map((column, colIndex) => {
                    const isHiddenColumn = column.header === 'Order Amount';
                    return (
                      <td
                        key={colIndex}
                        className={`py-3 px-4 text-sm text-gray-700 ${
                          isHiddenColumn ? 'hidden xl:table-cell' : ''
                        }`}
                      >
                        {column.accessor(item, absoluteIndex)}
                      </td>
                    );
                  })}
                </tr>

                {/* Expanded row for small screens */}
                {isExpanded && (
                  <tr className="xl:hidden bg-gray-50">
                    <td></td>
                    <td colSpan={columns.length} className="py-2 px-4 text-sm text-gray-600">
                      <strong>Order Amount:</strong> {item.orderAmount}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>

      {showPagination && data.length > itemsPerPage && (
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 px-2">
          <div className="text-sm text-gray-500 mb-2 sm:mb-0">
            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, data.length)} of {data.length} entries
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </div>
      )}
    </div>
  );
};
export default ProductTable3;
