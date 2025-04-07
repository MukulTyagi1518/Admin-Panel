import React, { useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import Switch from '../../Switch'; 
import fedexLogo from '../shipping/carrier.webp'; 
import { useNavigate } from 'react-router-dom';
// import upsLogo from './ups.png';   
// import dhlLogo from './dhl.png';     

const carriersData = [
  { id: 1, logo: {fedexLogo}, name: 'FedEx', transitTime: 20, status: true },
  { id: 2, logo: "", name: 'UPS', transitTime: 45, status: true },
  { id: 3, logo: "", name: 'DHL', transitTime: 15, status: true },
  { id: 4, logo: "", name: 'DHL', transitTime: 15, status: true },
  { id: 5, logo: "", name: 'DHL', transitTime: 15, status: true },
  { id: 6, logo: "", name: 'DHL', transitTime: 15, status: true },
];

const ShippingCarrier = () => {
  const [carriers, setCarriers] = useState(carriersData);

  const handleStatusChange = (id) => {
    setCarriers(carriers.map(carrier =>
      carrier.id === id ? { ...carrier, status: !carrier.status } : carrier
    ));
  };

  const handleEdit = (id) => {
    navigate(`/admin-settings/shipping/carrier/edit/${id}`);
    // Implement your edit logic here
  };

  const handleDelete = (id) => {
    console.log(`Delete carrier with ID: ${id}`);
    // Implement your delete logic here
    setCarriers(carriers.filter(carrier => carrier.id !== id));
  };
  const navigate = useNavigate();

  const handlereview = (id) => {
    navigate(`/admin-settings/shipping/carrier/create`);
  };
  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="bg-white rounded-md shadow-md overflow-hidden">
        <div className="px-4 py-3 sm:px-6 flex justify-between items-center border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Carriers</h2>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " onClick={handlereview}>
            Add New Carrier
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  #
                </th>
                <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Logo
                </th>
                <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transit Time
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
              {carriers.map(carrier => (
                <tr key={carrier.id}>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-500">
                    {carrier.id}
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">
                    <img src={carrier.logo} alt={carrier.name} className="h-8" />
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">
                    {carrier.name}
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-500">
                    {carrier.transitTime}
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-500">
                    <Switch isChecked={carrier.status} onToggle={() => handleStatusChange(carrier.id)} />
                  </td>
                  {/* <td className="px-3 py-3 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleEdit(carrier.id)}
                      className="text-indigo-600 hover:text-indigo-900 focus:outline-none mr-2"
                    >
                      <FiEdit className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(carrier.id)}
                      className="text-red-600 hover:text-red-900 focus:outline-none"
                    >
                      <FiTrash2 className="h-5 w-5" />
                    </button>
                  </td> */}
                  <td className="px-3 py-3 whitespace-nowrap text-right text-sm font-medium">
                                                          <button className="text-blue-500 mr-2">
                                                            <FiEdit onClick={() => handleEdit(carrier.id)} />
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

export default ShippingCarrier;