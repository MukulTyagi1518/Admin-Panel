import React, { useState } from 'react';
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';
import Switch from '../../Switch';
import { useNavigate } from 'react-router-dom';
import DeleteConfirmation from '../../DeleteConfirmation';

const statesData = [
  { id: 1, name: 'Andaman and Nicobar Islands', country: 'India', areaWiseCost: '$0.00', showHide: true },
  { id: 2, name: 'Andhra Pradesh', country: 'India', areaWiseCost: '$0.00', showHide: true },
  { id: 3, name: 'Arunachal Pradesh', country: 'India', areaWiseCost: '$0.00', showHide: true },
  { id: 4, name: 'Assam', country: 'India', areaWiseCost: '$0.00', showHide: true },
  { id: 5, name: 'Bihar', country: 'India', areaWiseCost: '$0.00', showHide: true },
  { id: 6, name: 'Chandigarh', country: 'India', areaWiseCost: '$0.00', showHide: true },
  { id: 7, name: 'Chhattisgarh', country: 'India', areaWiseCost: '$0.00', showHide: true },
  { id: 8, name: 'Dadra and Nagar Haveli', country: 'India', areaWiseCost: '$0.00', showHide: true },
  { id: 9, name: 'Daman and Diu', country: 'India', areaWiseCost: '$0.00', showHide: true },
  { id: 10, name: 'Delhi', country: 'India', areaWiseCost: '$0.00', showHide: true },
];

const ShippingCities = () => {
  const [states, setStates] = useState(statesData);
  const [newState, setNewState] = useState({ name: '', state: statesData[0]?.name || '', cost: '' });
  const navigate = useNavigate();
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const [expandedRows, setExpandedRows] = useState({});
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [attributeToDeleteId, setAttributeToDeleteId] = useState(null);
    

  const handleToggle = (id) => {
    setStates(states.map(state =>
      state.id === id ? { ...state, showHide: !state.showHide } : state
    ));
  };

  const handleAddState = () => {
    const selectedStateObject = statesData.find(s => s.name === newState.state);
    setStates([...states, { ...newState, id: states.length + 1, showHide: true, areaWiseCost: `$${newState.cost}`, country: selectedStateObject?.country || 'India' }]);
    setNewState({ name: '', state: statesData[0]?.name || '', cost: '' });
    setIsStateDropdownOpen(false);
  };

  const handlereview = (id) => {
    navigate(`/admin-settings/shipping/cities/edit/${id}`);
  };

  
  const toggleStateDropdown = () => {
    setIsStateDropdownOpen(!isStateDropdownOpen);
  };

  const selectState = (stateName) => {
    setNewState({ ...newState, state: stateName });
    setIsStateDropdownOpen(false);
  };

  const toggleRow = (id) => {
    setExpandedRows(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // const handleDeleteClick = (roleId) => {
  //   setRoleToDelete(roleId);
  //   setShowDeleteConfirmation(true);
  // };

  const openDeleteConfirmation = (id) => {
    setAttributeToDeleteId(id);
    setShowDeleteConfirmation(true);
  };
  
  const closeDeleteConfirmation = () => {
    setAttributeToDeleteId(null);
    setShowDeleteConfirmation(false);
  };
  
  const handleDelete = (id) => {
    // In a real application, you would make an API call here to delete the attribute
    console.log(`Deleting attribute with ID: ${id}`);
    // After successful deletion, you would likely update the 'attributes' state
    closeDeleteConfirmation();
  };

  return (
    <div className="p-4 bg-white mt-2 ml-2 mr-2 md:p-6 md:mt-4 md:ml-3 md:mr-3">
      <h1 className="text-xl font-bold mb-3 md:text-2xl md:mb-4">All Cities</h1>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1 overflow-x-auto">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-3 md:mb-4 ">
            <input type="text" placeholder="Type city name & Enter" className="border p-2 rounded w-full sm:w-auto" />
            <select className="border p-2 rounded w-full sm:w-auto">
              <option>Select State</option>
              {statesData.map(state => (
                <option key={state.id}>{state.name}</option>
              ))}
            </select>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">Filter</button>
          </div>
          <table className="min-w-full bg-white border-collapse">
            <thead>
              <tr>
                <th className="p-2 text-left md:hidden w-8"></th> {/* Plus Icon Column */}
                <th className="p-2 text-left hidden md:table-cell">#</th>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">State</th>
                <th className="p-2 text-left sm:table-cell hidden">Area Wise Shipping Cost</th> {/* Hide on very small screens */}
                <th className="p-2 text-left">Show/Hide</th>
                <th className="p-2 text-left hidden md:table-cell">Options</th>
              </tr>
            </thead>
            <tbody>
              {states.map(state => (
                <React.Fragment key={state.id}>
                  <tr className="md:table-row">
                    <td className="p-2 text-center md:hidden">
                      <button onClick={() => toggleRow(state.id)}>
                        <FiPlus />
                      </button>
                    </td>
                    <td className="p-2 hidden md:table-cell">{state.id}</td>
                    <td className="p-2">{state.name}</td>
                    <td className="p-2">{state.name}</td>
                    <td className="p-2 sm:table-cell hidden">{state.areaWiseCost}</td> {/* Hide on very small screens */}
                    <td className="p-2">
                      <Switch isChecked={state.showHide} onToggle={() => handleToggle(state.id)} />
                    </td>
                    <td className="p-2 hidden md:table-cell">
                      <button className="text-blue-500 mr-2">
                        <FiEdit onClick={() => handlereview(state.id)} />
                      </button>
                      <button className="text-red-500">
                        <FiTrash2 onClick={() => openDeleteConfirmation(state.id)} />
                      </button>
                    </td>
                    
                  </tr>
                  
                  {expandedRows[state.id] && (
                    <tr className="md:hidden">
                      <td colSpan="6" className="p-2 bg-gray-50">
                        <table className="w-full border-collapse">
                          <tbody>
                            <tr>
                              <td className="font-semibold p-2 border-b">#</td>
                              <td className="p-2 border-b">{state.id}</td>
                            </tr>
                            <tr className="sm:table-row">
                              <td className="font-semibold p-2 border-b">Area Wise Shipping Cost</td>
                              <td className="p-2 border-b">{state.areaWiseCost}</td>
                            </tr>
                            <tr>
                              <td className="font-semibold p-2">Options</td>
                              <td className="p-2">
                                <button className="text-blue-500 mr-2">
                                  <FiEdit onClick={() => handlereview(state.id)} />
                                </button>
                                <button className="text-red-500">
                                  <FiTrash2  onClick={() => openDeleteConfirmation(state.id)} />
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
        <div className="w-full md:w-1/3 p-4 bg-gray-100 rounded">
          <h2 className="text-xl font-bold mb-4">Add New city</h2>
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="border p-2 rounded w-full"
              value={newState.name}
              onChange={(e) => setNewState({ ...newState, name: e.target.value })}
            />
            <label htmlFor="state">State</label>
            <div className="relative">
              <div onClick={toggleStateDropdown} className="border p-2 rounded w-full cursor-pointer flex items-center justify-between">
                {newState.state}
                <svg
                  className={`w-4 h-4 ${isStateDropdownOpen ? 'transform rotate-180' : ''}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {isStateDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white border rounded shadow-md">
                  {statesData.map(state => (
                    <div
                      key={state.id}
                      onClick={() => selectState(state.name)}
                      className="px-4 py-2 text-gray-800 cursor-pointer hover:bg-blue-100"
                    >
                      {state.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <label htmlFor="cost">cost</label>
            <input
              type="text"
              id="cost"
              placeholder="cost"
              className="border p-2 rounded w-full"
              value={newState.cost}
              onChange={(e) => setNewState({ ...newState, cost: e.target.value })}
            />
            <div className="flex mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleAddState}
              >
                Save
              </button>
            </div>
          </div>
        </div>


      </div>
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

export default ShippingCities;
