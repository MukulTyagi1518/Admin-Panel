import { Edit, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AttributeDetail() {
  const navigate = useNavigate();

//   const handleEdit = (id) => {
//     navigate(`//`); 
//   };

  const attributes = [
    { id: 1, value: '1 Ltr' },
    { id: 2, value: '2 Ltr' },
    { id: 3, value: '5 Ltr' },
    { id: 4, value: '10 Ltr' },
  ];

  return (
    <div className="mt-4 p-4 md:p-9 flex flex-col md:flex-row gap-3">
      {/* Attribute List Section */}
      <div className="md:w-7/12 rounded p-4">
        <h1 className="text-lg font-semibold mb-4">Attribute Detail</h1>
        <h3 className="text-lg font-semibold mb-4">Liter</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className=" border-gray-300 p-4 text-left ">#</th>
              <th className=" border-gray-300 p-2 text-left">Values</th>
              <th className=" border-gray-300 p-2 text-left">Options</th>
            </tr>
          </thead>
          <tbody>
            {attributes.map((n) => (
              <tr key={n.id}>
                <td className=" border-gray-300 p-4">{n.id}</td>
                <td className=" border-gray-300 p-2">{n.value || "N/A"}</td>
                <td className=" border-gray-300 p-2 ">
                  <div className="flex flex-row gap-1 md:gap-3 ">
                    <div className="cursor-pointer text-blue-500 ">
                      <Edit size={18}  />
                    </div>
                    <div className="cursor-pointer text-blue-500">
                      <Trash size={18} />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add New Attribute Value Section */}
      <div className="md:w-5/12 border rounded p-4 flex flex-col gap-4 mt-4">
        <div>
          <h2 className="text-lg font-semibold mb-4">Add New Attribute Value</h2>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Attribute Name</label>
          <input
            type="text"
            className="mt-1 p-2 border rounded w-full shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300"
            defaultValue="Liter"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Attribute Value</label>
          <input
            type="text"
            className="mt-1 p-2 border rounded w-full shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300"
            placeholder="Name"
          />
        </div>
        <div className="flex ">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}