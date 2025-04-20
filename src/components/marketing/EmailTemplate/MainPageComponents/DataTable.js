export const DataTable = ({ columns, data, loading, emptyMessage }) => {
  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  if (!data || data.length === 0) {
    return <p className="text-center text-gray-600">{emptyMessage || "No data found."}</p>;
  }

  const primaryKey = columns[0]?.key || "Item";

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      {/* Desktop Table View */}
      <div className="hidden md:block">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="px-4 py-2 text-left">
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b">
                {columns.map((column) => (
                  <td key={column.key} className="px-4 py-2 text-left">
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Dropdown View */}
      <div className="md:hidden space-y-4">
        {data.map((row, rowIndex) => (
          <details key={rowIndex} className="border rounded-lg p-3">
            <summary className="cursor-pointer font-medium">
              {columns.find(col => col.key === primaryKey)?.title}:{" "}
              {row[primaryKey]}
            </summary>
            <div className="mt-2 space-y-1">
              {columns.map((column) => (
                <div key={column.key} className="flex justify-between text-sm text-gray-700">
                  <span className="font-medium">{column.title}:</span>
                  <span>{column.render ? column.render(row) : row[column.key]}</span>
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};
