export const DataTable = ({ columns, data, loading, emptyMessage }) => {
    if (loading) {
      return <p className="text-center text-gray-600">Loading...</p>;
    }
  
    if (!data || data.length === 0) {
      return <p className="text-center text-gray-600">{emptyMessage || "No data found."}</p>;
    }
  
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="px-4 py-2">
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b">
                {columns.map((column) => (
                  <td key={column.key} className="px-4 py-2">
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };