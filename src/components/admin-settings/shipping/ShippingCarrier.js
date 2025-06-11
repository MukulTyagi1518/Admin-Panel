


import React, { useState, useEffect } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import Switch from '../../Switch'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ShippingCarrier = () => {
  const [carriers, setCarriers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCarriers();
  }, []);

  const fetchCarriers = async () => {
    try {
      const res = await axios.get("https://e-commerce-backend-1-0.onrender.com/api/carrier"); // Replace with your actual API endpoint
      setCarriers(res.data.data); // Assuming { success: true, data: [...] }
    } catch (err) {
      console.error("Error fetching carriers:", err);
    }
  };

  const handleStatusChange = (id) => {
    setCarriers(carriers.map(carrier =>
      carrier._id === id ? { ...carrier, status: !carrier.status } : carrier
    ));
  };

  const handleEdit = (id) => {
    navigate(`/admin-settings/shipping/carrier/edit/${id}`);
  };

  

  const handleAddCarrier = () => {
    navigate(`/admin-settings/shipping/carrier/create`);
  };
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this carrier?")) return;
  
    try {
      const res = await axios.delete(`https://e-commerce-backend-1-0.onrender.com/api/carrier/${id}`);
      if (res.status === 200) {
        setCarriers(carriers.filter(carrier => carrier._id !== id));
        console.log("Deleted Successfully");
      }
    } catch (error) {
      console.error("Error deleting carrier:", error);
    }
  };
  

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="bg-white rounded-md shadow-md overflow-hidden">
        <div className="px-4 py-3 sm:px-6 flex justify-between items-center border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Carriers</h2>
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleAddCarrier}
          >
            Add New Carrier
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Logo</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transit Time</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Options</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {carriers.map((carrier, index) => (
                <tr key={carrier._id}>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">
                    {carrier.logo ? (
                      <img src={carrier.logo} alt={carrier.carrierName} className="h-8" />
                    ) : (
                      <span className="text-gray-400 italic">No logo</span>
                    )}
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">{carrier.carrierName}</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-500">{carrier.transitTime} days</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-500">
                    <Switch isChecked={carrier.status ?? true} onToggle={() => handleStatusChange(carrier._id)} />
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-500 mr-2" onClick={() => handleEdit(carrier._id)}>
                      <FiEdit />
                    </button>
                    <button className="text-red-500" onClick={()=>handleDelete(carrier._id)}>
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
              {carriers.length === 0 && (
                <tr>
                  <td colSpan="6" className="px-3 py-6 text-center text-sm text-gray-500">
                    No carriers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShippingCarrier;
