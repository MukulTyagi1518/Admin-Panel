import React, { useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import Switch from '../../Switch'; // Assuming you have a Switch component
import { useNavigate } from 'react-router-dom';

const zonesData = [
  { id: 1, name: 'Costa Rica Area', status: true },
  { id: 2, name: 'Africa', status: true },
  { id: 3, name: 'Europe', status: true },
  { id: 4, name: 'Asia', status: true },
  { id: 5, name: 'Asia', status: true },
  { id: 6, name: 'Asia', status: true },
  { id: 7, name: 'Asia', status: true },
  { id: 8, name: 'Asia', status: true },
];


const ShippingZone = () => {
  const [zones, setZones] = useState(zonesData);
  const navigate = useNavigate();

  const handleStatusChange = (id) => {
    setZones(zones.map(zone =>
      zone.id === id ? { ...zone, status: !zone.status } : zone
    ));
  };
 

  const handlereview = (id) => {
    navigate(`/admin-settings/shipping/zones/create`);
  };
  const handleEdit = (id) => {
    navigate(`/admin-settings/shipping/zones/edit/${id}`);
    // Implement your edit logic here
  };

  const handleDelete = (id) => {
    console.log(`Delete zone with ID: ${id}`);
    // Implement your delete logic here
    setZones(zones.filter(zone => zone.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="bg-white rounded-md shadow-md overflow-hidden">
        <div className="px-4 py-3 sm:px-6 flex justify-between items-center border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Zones</h2>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handlereview}>
            Add New Zone
          </button>
        </div>
        <div className="overflow-x-auto mt-5 p-8">
          <table className="min-w-full divide-y divide-gray-200 p-4">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  #
                </th>
                <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Options
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {zones.map(zone => (
                <tr key={zone.id}>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-500">
                    {zone.id}
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">
                    {zone.name}
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-500">
                    <Switch isChecked={zone.status} onToggle={() => handleStatusChange(zone.id)} />
                  </td>
                  {/* <td className="px-3 py-3 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleEdit(zone.id)}
                      className="text-indigo-600 hover:text-indigo-900 focus:outline-none mr-2"
                    >
                      <FiEdit className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(zone.id)}
                      className="text-red-600 hover:text-red-900 focus:outline-none"
                    >
                      <FiTrash2 className="h-5 w-5" />
                    </button>
                  </td> */}
                  <td className="px-3 py-3 whitespace-nowrap text-right text-sm font-medium">
                                        <button className="text-blue-500 mr-2">
                                          <FiEdit  onClick={() => handleEdit(zone.id)}/>
                                        </button>
                                        <button className="text-red-500">
                                          <FiTrash2  />
                                        </button>
                                      </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShippingZone;