// import React, { useState } from 'react';
// import { FiEdit } from 'react-icons/fi';
// import Switch from '../../Switch';
// import { useNavigate } from 'react-router-dom';

// const statesData = [
//   { id: 1, name: 'Andaman and Nicobar Islands', country: 'India', showHide: true },
//   { id: 2, name: 'Andhra Pradesh', country: 'India', showHide: true },
//   { id: 3, name: 'Arunachal Pradesh', country: 'India', showHide: true },
//   { id: 4, name: 'Assam', country: 'India', showHide: true },
//   { id: 5, name: 'Bihar', country: 'India', showHide: true },
//   { id: 6, name: 'Chandigarh', country: 'India', showHide: true },
//   { id: 7, name: 'Chhattisgarh', country: 'India', showHide: true },
//   { id: 8, name: 'Dadra and Nagar Haveli', country: 'India', showHide: true },
//   { id: 9, name: 'Daman and Diu', country: 'India', showHide: true },
//   { id: 10, name: 'Delhi', country: 'India', showHide: true },
// ];

// const ShippingState = () => {
//   const [states, setStates] = useState(statesData);
//   const [newState, setNewState] = useState({ name: '', country: 'Afghanistan' });
//  const navigate = useNavigate();
//   const handleToggle = (id) => {
//     setStates(states.map(state =>
//       state.id === id ? { ...state, showHide: !state.showHide } : state
//     ));
//   };

//   const handleAddState = () => {
//     setStates([...states, { ...newState, id: states.length + 1, showHide: true }]);
//     setNewState({ name: '', country: 'Afghanistan' });
//   };
//   const handlereview = (id) => {
//     navigate(`/admin-settings/shipping/state/edit/${id}`);
//   };
  
 

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">All States</h1>
//       <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//         <div className="flex-1">
//           <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 ">
//             <input type="text" placeholder="Type state name" className="border p-2 rounded" />
//             <select className="border p-2 rounded">
//               <option>Select Country</option>
//             </select>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Filter</button>
//           </div>
//           <table className="min-w-full bg-white border-collapse">
//             <thead>
//               <tr>
//                 <th className="p-2 text-left">#</th>
//                 <th className="p-2 text-left">Name</th>
//                 <th className="p-2 text-left">Country</th>
//                 <th className="p-2 text-left">Show/Hide</th>
//                 <th className="p-2 text-left">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {states.map(state => (
//                 <tr key={state.id}>
//                   <td className="p-2">{state.id}</td>
//                   <td className="p-2">{state.name}</td>
//                   <td className="p-2">{state.country}</td>
//                   <td className="p-2">
//                     <Switch />
//                   </td>
//                   <td className="p-2">
//                     <button className="text-blue-500">
//                       <FiEdit  onClick={() => handlereview(state.id)}/>
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="w-full md:w-1/3 p-4 bg-gray-100 rounded">
//           <h2 className="text-xl font-bold mb-4">Add New State</h2>
//           <div className="flex flex-col space-y-2">
//             <label htmlFor="name">Name</label> {/* Add label for Name */}
//             <input
//               type="text"
//               id="name"
//               placeholder="Name"
//               className="border p-2 rounded w-full"
//               value={newState.name}
//               onChange={(e) => setNewState({ ...newState, name: e.target.value })}
//             />
//             <label htmlFor="country">Country</label> {/* Add label for Country */}
//             <select
//               id="country"
//               className="border p-2 rounded w-full"
//               value={newState.country}
//               onChange={(e) => setNewState({ ...newState, country: e.target.value })}
//             >
//               <option>Afghanistan</option>
//               <option>India</option>
//             </select>
//             <div className="flex ">
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 onClick={handleAddState}
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShippingState;


import React, { useState, useEffect } from 'react';
import { FiEdit } from 'react-icons/fi';
import Switch from '../../Switch';
import { useNavigate } from 'react-router-dom';

const ShippingState = () => {
  const [states, setStates] = useState([]); // Initialize as an empty array
  const [newState, setNewState] = useState({ name: '', country: 'Afghanistan' });
  const navigate = useNavigate();

<<<<<<< HEAD
=======
  // Fetch states on component mount
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/shippingState/get");
  
        // Ensure the response is valid before parsing
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
  
        const data = await response.json();
        
        console.log("Fetched states data:", data); // Check the response structure in the console
  
        // Assuming the data is an array of states, update the state
        if (Array.isArray(data.data)) {
          setStates(data.data); // Assuming the states are inside a 'data' property
        } else {
          console.error("Invalid data format, expected an array", data);
        }
      } catch (err) {
        console.error("Error fetching states:", err.message);
      }
    };
  
    fetchStates();
  }, []);
  
  

  // Handle toggle for Show/Hide
>>>>>>> 3b2c6cfdfea26763bb9d5eb605760fadfe1ab1c2
  const handleToggle = (id) => {
    setStates(states.map(state =>
      state.id === id ? { ...state, showHide: !state.showHide } : state
    ));
  };

  // Add a new state
  const handleAddState = async () => {
    const stateData = { name: newState.name, country: newState.country };

    try {
      const response = await fetch("http://localhost:5000/api/shippingState/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(stateData),
      });

      if (response.ok) {
        const addedState = await response.json();
        setStates([...states, addedState]); // Add the new state to the list
        setNewState({ name: '', country: 'Afghanistan' }); // Reset the input fields
      } else {
        console.error("Error adding state");
      }
    } catch (err) {
      console.error("Error adding state:", err);
    }
  };

<<<<<<< HEAD
=======
  // Navigate to the review/edit page
>>>>>>> 3b2c6cfdfea26763bb9d5eb605760fadfe1ab1c2
  const handlereview = (id) => {
    navigate(`/admin-settings/shipping/state/edit/${id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All States</h1>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        {/* Table Section */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 ">
            <input type="text" placeholder="Type state name" className="border p-2 rounded" />
            <select className="border p-2 rounded">
              <option>Select Country</option>
            </select>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Filter</button>
          </div>
          <table className="min-w-full bg-white border-collapse">
            <thead>
              <tr>
                <th className="p-2 text-left">#</th>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Country</th>
                <th className="p-2 text-left">Show/Hide</th>
                <th className="p-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {states.map(state => (
                <tr key={state.id}>
                  <td className="p-2">{state.id}</td>
                  <td className="p-2">{state.name}</td>
                  <td className="p-2">{state.country}</td>
                  <td className="p-2">
<<<<<<< HEAD
  <Switch
    value={state.showHide}
    onChangeFunc={() => handleToggle(state.id)}
  />
</td>

=======
                    <Switch checked={state.showHide} onChange={() => handleToggle(state.id)} />
                  </td>
>>>>>>> 3b2c6cfdfea26763bb9d5eb605760fadfe1ab1c2
                  <td className="p-2">
                    <button className="text-blue-500">
                      <FiEdit onClick={() => handlereview(state.id)} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

<<<<<<< HEAD
        {/* Add New State Section (Responsive: Positioned below the table on smaller screens) */}
        <div className="w-full md:w-1/3 p-4 bg-gray-100 rounded mt-6 md:mt-0">
=======
        <div className="w-full md:w-1/3 p-4 bg-gray-100 rounded">
>>>>>>> 3b2c6cfdfea26763bb9d5eb605760fadfe1ab1c2
          <h2 className="text-xl font-bold mb-4">Add New State</h2>
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
            <label htmlFor="country">Country</label>
            <select
              id="country"
              className="border p-2 rounded w-full"
              value={newState.country}
              onChange={(e) => setNewState({ ...newState, country: e.target.value })}
            >
              <option>Afghanistan</option>
              <option>India</option>
            </select>
            <div className="flex">
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
    </div>
  );
};

export default ShippingState;
<<<<<<< HEAD
=======

>>>>>>> 3b2c6cfdfea26763bb9d5eb605760fadfe1ab1c2
