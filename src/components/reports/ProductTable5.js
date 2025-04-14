import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Pagination from '../Pagination';
import { Plus, Minus } from 'lucide-react';


const ProductTable5 = ({ columns, data, currentPage, itemsPerPage, onPageChange, showPagination = true }) => {
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
            {columns.map((column, index) => (
              <th
                key={index}
                className={`py-3 px-4 text-left text-sm font-medium text-gray-500 ${
                  column.header === 'Number Searches' ? 'hidden lg:table-cell' : ''
                }`}
              >
                {column.header}
              </th>
            ))}
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
                    <button onClick={() => toggleRow(absoluteIndex)} className="text-gray-600 lg:hidden">
                      {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
                    </button>
                  </td>
                  {columns.map((column, colIndex) => (
                    <td
                      key={colIndex}
                      className={`py-3 px-4 text-sm text-gray-700 ${
                        column.header === 'Number Searches' ? 'hidden lg:table-cell' : ''
                      }`}
                    >
                      {column.accessor(item, absoluteIndex)}
                    </td>
                  ))}
                </tr>
                {isExpanded && (
                  <tr className="lg:hidden bg-gray-50">
                    <td></td>
                    <td colSpan={columns.length} className="py-2 px-4 text-sm text-gray-600">
                      <strong>Number Searches:</strong> {item.search}
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

ProductTable5.propTypes = {
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

export default ProductTable5;
