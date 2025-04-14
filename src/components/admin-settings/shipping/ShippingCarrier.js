import React, { useState } from 'react';
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';
import Switch from '../../Switch'; 
import fedexLogo from '../shipping/carrier.webp'; 
import { useNavigate } from 'react-router-dom';
import DeleteConfirmation from '../../DeleteConfirmation';

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
  const [expandedRows, setExpandedRows] = useState({});
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [attributeToDeleteId, setAttributeToDeleteId] = useState(null);
  const navigate = useNavigate();

  const handleStatusChange = (id) => {
    setCarriers(carriers.map(carrier =>
      carrier.id === id ? { ...carrier, status: !carrier.status } : carrier
    ));
  };

  const handleEdit = (id) => {
    navigate(`/admin-settings/shipping/carrier/edit/${id}`);
  };

  const openDeleteConfirmation = (id) => {
    setAttributeToDeleteId(id);
    setShowDeleteConfirmation(true);
  };

  const closeDeleteConfirmation = () => {
    setAttributeToDeleteId(null);
    setShowDeleteConfirmation(false);
  };

  const handleDelete = (id) => {
    console.log(`Deleting attribute with ID: ${id}`);
    closeDeleteConfirmation();
  };

  const toggleRow = (id) => {
    setExpandedRows(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="bg-white rounded-md shadow-md overflow-hidden">
        <div className="px-4 py-3 sm:px-6 flex justify-between items-center border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Carriers</h2>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " onClick={() => navigate('/admin-settings/shipping/carrier/create')}>
            Add New Carrier
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-2 text-center md:hidden">
                  {/* Plus Icon */}
                  <FiPlus />
                </th>
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
                <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                  Status
                </th>
                <th scope="col" className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                  Options
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {carriers.map(carrier => (
                <React.Fragment key={carrier.id}>
                  <tr>
                    <td className="p-2 text-center md:hidden">
                      <button onClick={() => toggleRow(carrier.id)}>
                        <FiPlus />
                      </button>
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-500">
                      {carrier.id}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">
                      <img src={carrier.logo || fedexLogo} alt={carrier.name} className="h-8" />
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">
                      {carrier.name}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-500">
                      {carrier.transitTime}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
                      <Switch value={carrier.status} onChangeFunc={() => handleStatusChange(carrier.id)} />
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-right text-sm font-medium hidden md:table-cell">
                      <button className="text-blue-500 mr-2">
                        <FiEdit onClick={() => handleEdit(carrier.id)} />
                      </button>
                      <button className="text-red-500">
                        <FiTrash2 onClick={() => openDeleteConfirmation(carrier.id)} />
                      </button>
                    </td>
                  </tr>

                  {/* Expanded row for small screens */}
                  {expandedRows[carrier.id] && (
                    <tr className="md:hidden">
                      <td colSpan="6" className="p-2 bg-gray-50">
                        <table className="w-full border-collapse">
                          <tbody>
                            <tr>
                              <td className="font-semibold border-b">Status</td>
                              <td>
                                <Switch value={carrier.status} onChangeFunc={() => handleStatusChange(carrier.id)} />
                              </td>
                            </tr>
                            <tr>
                              <td className="font-semibold border-b">Options</td>
                              <td>
                                <button className="text-blue-500 mr-2">
                                  <FiEdit onClick={() => handleEdit(carrier.id)} />
                                </button>
                                <button className="text-red-500">
                                  <FiTrash2 onClick={() => openDeleteConfirmation(carrier.id)} />
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Render the Delete Confirmation Modal */}
      {showDeleteConfirmation && (
        <DeleteConfirmation
          isOpen={showDeleteConfirmation}
          onConfirm={() => handleDelete(attributeToDeleteId)}
          onCancel={closeDeleteConfirmation}
        />
      )}
    </div>
  );
};

export default ShippingCarrier;
