// import React, { useState } from 'react';
// import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';
// import Switch from '../../Switch';
// import { useNavigate } from 'react-router-dom';
// import AddCity from './addcity'

// const statesData = [
//   { id: 1, name: 'Andaman and Nicobar Islands', country: 'India', areaWiseCost: '$0.00', showHide: true },
//   { id: 2, name: 'Andhra Pradesh', country: 'India', areaWiseCost: '$0.00', showHide: true },
//   { id: 3, name: 'Arunachal Pradesh', country: 'India', areaWiseCost: '$0.00', showHide: true },
//   { id: 4, name: 'Assam', country: 'India', areaWiseCost: '$0.00', showHide: true },
//   { id: 5, name: 'Bihar', country: 'India', areaWiseCost: '$0.00', showHide: true },
//   { id: 6, name: 'Chandigarh', country: 'India', areaWiseCost: '$0.00', showHide: true },
//   { id: 7, name: 'Chhattisgarh', country: 'India', areaWiseCost: '$0.00', showHide: true },
//   { id: 8, name: 'Dadra and Nagar Haveli', country: 'India', areaWiseCost: '$0.00', showHide: true },
//   { id: 9, name: 'Daman and Diu', country: 'India', areaWiseCost: '$0.00', showHide: true },
//   { id: 10, name: 'Delhi', country: 'India', areaWiseCost: '$0.00', showHide: true },
// ];

// const ShippingCities = () => {
//   const [states, setStates] = useState(statesData);
//   const [newState, setNewState] = useState({ name: '', state: statesData[0]?.name || '', cost: '' });
//   const navigate = useNavigate();
//   const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
//   const [expandedRows, setExpandedRows] = useState({});
//   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//     const [roleToDelete, setRoleToDelete] = useState(null);

//   const handleToggle = (id) => {
//     setStates(states.map(state =>
//       state.id === id ? { ...state, showHide: !state.showHide } : state
//     ));
//   };

//   const handleAddState = () => {
//     const selectedStateObject = statesData.find(s => s.name === newState.state);
//     setStates([...states, { ...newState, id: states.length + 1, showHide: true, areaWiseCost: `$${newState.cost}`, country: selectedStateObject?.country || 'India' }]);
//     setNewState({ name: '', state: statesData[0]?.name || '', cost: '' });
//     setIsStateDropdownOpen(false);
//   };

//   const handlereview = (id) => {
//     navigate(`/admin-settings/shipping/cities/edit/${id}`);
//   };

//   const handleDelete = (id) => {
//     setStates(states.filter(state => state.id !== id));
//   };

//   const toggleStateDropdown = () => {
//     setIsStateDropdownOpen(!isStateDropdownOpen);
//   };

//   const selectState = (stateName) => {
//     setNewState({ ...newState, state: stateName });
//     setIsStateDropdownOpen(false);
//   };

//   const toggleRow = (id) => {
//     setExpandedRows(prev => ({ ...prev, [id]: !prev[id] }));
//   };

//   const handleDeleteClick = (roleId) => {
//     setRoleToDelete(roleId);
//     setShowDeleteConfirmation(true);
//   };

//   const confirmDelete = () => {
//     // Implement your delete logic here
//     console.log(`Deleting role with ID: ${roleToDelete}`);
//     setShowDeleteConfirmation(false);
//     setRoleToDelete(null);
//   };

//   const cancelDelete = () => {
//     setShowDeleteConfirmation(false);
//     setRoleToDelete(null);
//   };

//   return (
//     <div className="p-4 bg-white mt-2 ml-2 mr-2 md:p-6 md:mt-4 md:ml-3 md:mr-3">
//       <h1 className="text-xl font-bold mb-3 md:text-2xl md:mb-4">All Cities</h1>
//       <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//         <div className="flex-1 overflow-x-auto">
//           <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-3 md:mb-4 ">
//             <input type="text" placeholder="Type city name & Enter" className="border p-2 rounded w-full sm:w-auto" />
//             <select className="border p-2 rounded w-full sm:w-auto">
//               <option>Select State</option>
//               {statesData.map(state => (
//                 <option key={state.id}>{state.name}</option>
//               ))}
//             </select>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">Filter</button>
//           </div>
//           <table className="min-w-full bg-white border-collapse">
//             <thead>
//               <tr>
//                 <th className="p-2 text-left md:hidden w-8"></th> {/* Plus Icon Column */}
//                 <th className="p-2 text-left hidden md:table-cell">#</th>
//                 <th className="p-2 text-left">Name</th>
//                 <th className="p-2 text-left">State</th>
//                 <th className="p-2 text-left sm:table-cell hidden">Area Wise Shipping Cost</th> {/* Hide on very small screens */}
//                 <th className="p-2 text-left">Show/Hide</th>
//                 <th className="p-2 text-left hidden md:table-cell">Options</th>
//               </tr>
//             </thead>
//             <tbody>
//               {states.map(state => (
//                 <React.Fragment key={state.id}>
//                   <tr className="md:table-row">
//                     <td className="p-2 text-center md:hidden">
//                       <button onClick={() => toggleRow(state.id)}>
//                         <FiPlus />
//                       </button>
//                     </td>
//                     <td className="p-2 hidden md:table-cell">{state.id}</td>
//                     <td className="p-2">{state.name}</td>
//                     <td className="p-2">{state.name}</td>
//                     <td className="p-2 sm:table-cell hidden">{state.areaWiseCost}</td> {/* Hide on very small screens */}
//                     <td className="p-2">
//                       <Switch isChecked={state.showHide} onToggle={() => handleToggle(state.id)} />
//                     </td>
//                     <td className="p-2 hidden md:table-cell">
//                       <button className="text-blue-500 mr-2">
//                         <FiEdit onClick={() => handlereview(state.id)} />
//                       </button>
//                       <button className="text-red-500">
//                         <FiTrash2 onClick={() => handleDeleteClick(state.id)}  />
//                       </button>
//                     </td>
                    
//                   </tr>
                  
//                   {expandedRows[state.id] && (
//                     <tr className="md:hidden">
//                       <td colSpan="6" className="p-2 bg-gray-50">
//                         <table className="w-full border-collapse">
//                           <tbody>
//                             <tr>
//                               <td className="font-semibold p-2 border-b">#</td>
//                               <td className="p-2 border-b">{state.id}</td>
//                             </tr>
//                             <tr className="sm:table-row">
//                               <td className="font-semibold p-2 border-b">Area Wise Shipping Cost</td>
//                               <td className="p-2 border-b">{state.areaWiseCost}</td>
//                             </tr>
//                             <tr>
//                               <td className="font-semibold p-2">Options</td>
//                               <td className="p-2">
//                                 <button className="text-blue-500 mr-2">
//                                   <FiEdit onClick={() => handlereview(state.id)} />
//                                 </button>
//                                 <button className="text-red-500">
//                                   <FiTrash2 />
//                                 </button>
//                               </td>
//                             </tr>
//                           </tbody>
//                         </table>
//                       </td>
//                     </tr>
//                   )}
//                 </React.Fragment>
//               ))}
//             </tbody>
//           </table>
//         </div>
//        <AddCity/>
//       </div>
//     </div>
//   );
// };

// export default ShippingCities;



// import React, { useState } from 'react';
// import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';
// import AddCity from './addcity';

// const ShippingCities = () => {
//   const [citiesData, setCitiesData] = useState([
//     { id: 1, name: 'New York', state: 'New York', cost: 10, show: true },
//     { id: 2, name: 'Los Angeles', state: 'California', cost: 12, show: false },
//     { id: 3, name: 'Chicago', state: 'Illinois', cost: 8, show: true }
//   ]);

//   const handleEdit = (cityId) => {
//     console.log('Edit city with ID:', cityId);
//   };

//   const handleDelete = (cityId) => {
//     console.log('Delete city with ID:', cityId);
//   };

//   const toggleShow = (cityId) => {
//     setCitiesData((prev) =>
//       prev.map((city) =>
//         city.id === cityId ? { ...city, show: !city.show } : city
//       )
//     );
//   };

//   return (
//     <div className="p-4 bg-white mt-2 ml-2 mr-2 md:p-6 md:mt-4 md:ml-3 md:mr-3">
//       <h1 className="text-xl font-bold mb-3 md:text-2xl md:mb-4">All Cities</h1>
//       <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//         <div className="flex-1 overflow-x-auto">
//           <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-3 md:mb-4">
//             <input type="text" placeholder="Type city name & Enter" className="border p-2 rounded w-full sm:w-auto" />
//             <select className="border p-2 rounded w-full sm:w-auto">
//               <option>Select State</option>
//             </select>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
//               Filter
//             </button>
//           </div>
//           <table className="min-w-full bg-white border-collapse">
//             <thead>
//               <tr>
//                 <th className="p-2 text-left md:hidden w-8"></th>
//                 <th className="p-2 text-left hidden md:table-cell">#</th>
//                 <th className="p-2 text-left">Name</th>
//                 <th className="p-2 text-left">State</th>
//                 <th className="p-2 text-left sm:table-cell hidden">Area Wise Shipping Cost</th>
//                 <th className="p-2 text-left">Show/Hide</th>
//                 <th className="p-2 text-left hidden md:table-cell">Options</th>
//               </tr>
//             </thead>
//             <tbody>
//               {citiesData.map((city, index) => (
//                 <tr key={city.id} className="border-t">
//                   <td className="p-2 text-left md:hidden w-8"></td>
//                   <td className="p-2 hidden md:table-cell">{index + 1}</td>
//                   <td className="p-2">{city.name}</td>
//                   <td className="p-2">{city.state}</td>
//                   <td className="p-2 sm:table-cell hidden">{city.cost} USD</td>
//                   <td className="p-2">
//                     <label className="inline-flex items-center cursor-pointer">
//                       <input
//                         type="checkbox"
//                         className="sr-only peer"
//                         checked={city.show}
//                         onChange={() => toggleShow(city.id)}
//                       />
//                       <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-green-500 relative transition-colors duration-300">
//                         <div className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${city.show ? 'translate-x-5' : ''}`}></div>
//                       </div>
//                       <span className="ml-2 text-sm text-gray-700">{city.show ? 'On' : 'Off'}</span>
//                     </label>
//                   </td>
//                   <td className="p-2 hidden md:table-cell space-x-2">
//                     <button
//                       className="text-blue-500 hover:text-blue-700"
//                       onClick={() => handleEdit(city.id)}
//                     >
//                       <FiEdit size={18} />
//                     </button>
//                     <button
//                       className="text-red-500 hover:text-red-700"
//                       onClick={() => handleDelete(city.id)}
//                     >
//                       <FiTrash2 size={18} />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
        
//          <AddCity />
//       </div>
//     </div>
//   );
// };

// export default ShippingCities;
// import React, { useState, useEffect } from 'react';
// import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';
// import AddCity from './addcity';

// const ShippingCities = () => {
//   const [citiesData, setCitiesData] = useState([]);

//   // Fetch cities data from the backend API
//   useEffect(() => {
//     const fetchCitiesData = async () => {
//       try {
//         const response = await fetch('https://e-commerce-backend-1-0.onrender.com/api/shippingCost/get');
//         const data = await response.json();
//         console.log(data); // Log to check the structure of the response
        
//         // Ensure the data is an array before updating state
//         if (Array.isArray(data.data)) {  // Ensuring the correct property 'data' is checked
//           setCitiesData(data.data);  // Setting citiesData to the 'data' property of the response
//         } else {
//           console.error('Fetched data is not an array:', data);
//         }
//       } catch (error) {
//         console.error('Error fetching cities:', error);
//       }
//     };

//     fetchCitiesData();
//   }, []); // Empty dependency array ensures it runs once on component mount

//   const handleEdit = (cityId) => {
//     console.log('Edit city with ID:', cityId);
//   };

//   const handleDelete = (cityId) => {
//     console.log('Delete city with ID:', cityId);
//   };

//   const toggleShow = (cityId) => {
//     setCitiesData((prev) =>
//       prev.map((city) =>
//         city._id === cityId ? { ...city, status: !city.status } : city
//       )
//     );
//   };

//   return (
//     <div className="p-4 bg-white mt-2 ml-2 mr-2 md:p-6 md:mt-4 md:ml-3 md:mr-3">
//       <h1 className="text-xl font-bold mb-3 md:text-2xl md:mb-4">All Cities</h1>
//       <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//         <div className="flex-1 overflow-x-auto">
//           <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-3 md:mb-4">
//             <input type="text" placeholder="Type city name & Enter" className="border p-2 rounded w-full sm:w-auto" />
//             <select className="border p-2 rounded w-full sm:w-auto">
//               <option>Select State</option>
//             </select>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
//               Filter
//             </button>
//           </div>
//           <table className="min-w-full bg-white border-collapse">
//             <thead>
//               <tr>
//                 <th className="p-2 text-left md:hidden w-8"></th>
//                 <th className="p-2 text-left hidden md:table-cell">#</th>
//                 <th className="p-2 text-left">Name</th>
//                 <th className="p-2 text-left">State</th>
//                 <th className="p-2 text-left sm:table-cell hidden">Area Wise Shipping Cost</th>
//                 <th className="p-2 text-left">Show/Hide</th>
//                 <th className="p-2 text-left hidden md:table-cell">Options</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Array.isArray(citiesData) && citiesData.length > 0 ? (
//                 citiesData.map((city, index) => (
//                   <tr key={city._id} className="border-t">
//                     <td className="p-2 text-left md:hidden w-8"></td>
//                     <td className="p-2 hidden md:table-cell">{index + 1}</td>
//                     <td className="p-2">{city.name}</td>
//                     <td className="p-2">{city.state}</td>
//                     <td className="p-2 sm:table-cell hidden">{city.cost} USD</td>
//                     <td className="p-2">
//                       <label className="inline-flex items-center cursor-pointer">
//                         <input
//                           type="checkbox"
//                           className="sr-only peer"
//                           checked={city.status}
//                           onChange={() => toggleShow(city._id)}
//                         />
//                         <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-green-500 relative transition-colors duration-300">
//                           <div className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${city.status ? 'translate-x-5' : ''}`}></div>
//                         </div>
//                         <span className="ml-2 text-sm text-gray-700">{city.status ? 'Active' : 'Inactive'}</span>
//                       </label>
//                     </td>
//                     <td className="p-2 hidden md:table-cell space-x-2">
//                       <button
//                         className="text-blue-500 hover:text-blue-700"
//                         onClick={() => handleEdit(city._id)}
//                       >
//                         <FiEdit size={18} />
//                       </button>
//                       <button
//                         className="text-red-500 hover:text-red-700"
//                         onClick={() => handleDelete(city._id)}
//                       >
//                         <FiTrash2 size={18} />
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="6" className="text-center p-2">No cities available</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         <AddCity />
//       </div>
//     </div>
//   );
// };

// export default ShippingCities;
import React, { useState, useEffect } from 'react';
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import AddCity from './addcity';

const ShippingCities = () => {
  const [citiesData, setCitiesData] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Fetch cities data from the backend API
  useEffect(() => {
    const fetchCitiesData = async () => {
      try {
        const response = await fetch('https://e-commerce-backend-1-0.onrender.com/api/shippingCost/get');
        const data = await response.json();
        console.log(data); // Log to check the structure of the response
        
        // Ensure the data is an array before updating state
        if (Array.isArray(data.data)) {  // Ensuring the correct property 'data' is checked
          setCitiesData(data.data);  // Setting citiesData to the 'data' property of the response
        } else {
          console.error('Fetched data is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    fetchCitiesData();
  }, []); // Empty dependency array ensures it runs once on component mount

  const handleEdit = (cityId) => {
    // Redirect to the edit page with the city's id
    navigate(`/admin-settings/shipping/cities/edit/${cityId}`);
  };

  const handleDelete = async (cityId) => {
    try {
      const response = await fetch(`https://e-commerce-backend-1-0.onrender.com/api/shippingCost/delete/${cityId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // On success, remove the deleted city from the state
        setCitiesData(citiesData.filter(city => city._id !== cityId));
      } else {
        console.error('Failed to delete city');
      }
    } catch (error) {
      console.error('Error deleting city:', error);
    }
  };

  const toggleShow = (cityId) => {
    setCitiesData((prev) =>
      prev.map((city) =>
        city._id === cityId ? { ...city, status: !city.status } : city
      )
    );
  };

  return (
    <div className="p-4 bg-white mt-2 ml-2 mr-2 md:p-6 md:mt-4 md:ml-3 md:mr-3">
      <h1 className="text-xl font-bold mb-3 md:text-2xl md:mb-4">All Cities</h1>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1 overflow-x-auto">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-3 md:mb-4">
            <input type="text" placeholder="Type city name & Enter" className="border p-2 rounded w-full sm:w-auto" />
            <select className="border p-2 rounded w-full sm:w-auto">
              <option>Select State</option>
            </select>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
              Filter
            </button>
          </div>
          <table className="min-w-full bg-white border-collapse">
            <thead>
              <tr>
                <th className="p-2 text-left md:hidden w-8"></th>
                <th className="p-2 text-left hidden md:table-cell">#</th>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">State</th>
                <th className="p-2 text-left sm:table-cell hidden">Area Wise Shipping Cost</th>
                <th className="p-2 text-left">Show/Hide</th>
                <th className="p-2 text-left hidden md:table-cell">Options</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(citiesData) && citiesData.length > 0 ? (
                citiesData.map((city, index) => (
                  <tr key={city._id} className="border-t">
                    <td className="p-2 text-left md:hidden w-8"></td>
                    <td className="p-2 hidden md:table-cell">{index + 1}</td>
                    <td className="p-2">{city.name}</td>
                    <td className="p-2">{city.state}</td>
                    <td className="p-2 sm:table-cell hidden">{city.cost} USD</td>
                    <td className="p-2">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={city.status}
                          onChange={() => toggleShow(city._id)}
                        />
                        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-green-500 relative transition-colors duration-300">
                          <div className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${city.status ? 'translate-x-5' : ''}`}></div>
                        </div>
                        <span className="ml-2 text-sm text-gray-700">{city.status ? 'Active' : 'Inactive'}</span>
                      </label>
                    </td>
                    <td className="p-2 hidden md:table-cell space-x-2">
                      <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => handleEdit(city._id)}
                      >
                        <FiEdit size={18} />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDelete(city._id)}
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center p-2">No cities available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <AddCity />
      </div>
    </div>
  );
};

export default ShippingCities;
