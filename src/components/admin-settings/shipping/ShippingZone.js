

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import Switch from '../../Switch'; // Ensure this is a working toggle component
import { useNavigate } from 'react-router-dom';

const ShippingZone = () => {
  const [zones, setZones] = useState([]);
  const navigate = useNavigate();

  // Fetch zones from API
  useEffect(() => {
    const fetchZones = async () => {
      try {
        const res = await axios.get('https://e-commerce-backend-1-0.onrender.com/api/shippingZone/getAll');
        if (res.data.success) {
          // Ensure all zones have a default status of true if not set in the database
          const updatedZones = res.data.data.map(zone => ({
            ...zone,
            status: zone.status ?? true, // Set default status to true if not available
          }));
          setZones(updatedZones);
        }
      } catch (err) {
        console.error('Error fetching zones:', err.message);
      }
    };

    fetchZones();
  }, []);

  // Handle Status Change
  const handleStatusChange = async (id) => {
    const zoneToUpdate = zones.find(zone => zone._id === id);
    const newStatus = !zoneToUpdate.status;

    try {
      const res = await axios.patch(`https://e-commerce-backend-1-0.onrender.com/api/shippingZone/update/${id}`, {
        name: zoneToUpdate.name, // Retain other fields
        country: zoneToUpdate.country, // Retain other fields
        status: newStatus
      });

      if (res.data.success) {
        setZones(zones.map(zone =>
          zone._id === id ? { ...zone, status: newStatus } : zone
        ));
      }
    } catch (err) {
      console.error('Failed to update zone status:', err.message);
    }
  };

  const handlereview = () => {
    navigate(`/admin-settings/shipping/zones/create`);
  };

  const handleEdit = (id) => {
    navigate(`/admin-settings/shipping/zones/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/shipping-zones/${id}`);
      setZones(zones.filter(zone => zone._id !== id));
    } catch (err) {
      console.error('Error deleting zone:', err.message);
    }
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
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">#</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase">Options</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {zones.map((zone, index) => (
                <tr key={zone._id}>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">{zone.name}</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-500">
                    <Switch isChecked={zone.status} onToggle={() => handleStatusChange(zone._id)} />
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-500 mr-2" onClick={() => handleEdit(zone._id)}>
                      <FiEdit />
                    </button>
                    <button className="text-red-500" onClick={() => handleDelete(zone._id)}>
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
              {zones.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-sm text-gray-400">
                    No shipping zones found.
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

export default ShippingZone;