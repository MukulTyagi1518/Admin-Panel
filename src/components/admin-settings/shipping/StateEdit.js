// import React from 'react';

// const StateEdit = () => {
//     return (
//         <div className="min-h-screen bg-gray-100 p-4">
//             <div className="w-full max-w-3xl mx-auto">
//                 <h1 className="text-2xl font-bold mb-4 mt-5">State Information</h1>
//                 <div className="bg-white rounded-lg shadow-md p-8 mt-5">
//                     <h1 className="text-2xl font-bold mb-6 mt-4">Edit State</h1>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//                             Name
//                         </label>
//                         <input
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             id="name"
//                             type="text"
//                             value="Andaman and Nicobar Islands"
//                             readOnly
//                         />
//                     </div>
//                     <div className="mb-6">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
//                             Country
//                         </label>
//                         <select
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             id="country"
//                             value="India"
//                             readOnly
//                         >
//                             <option>India</option>
//                             <option>India</option>
//                             <option>United States</option>
//                             <option>Canada</option>
//                             <option>Australia</option>
//                             <option>United Kingdom</option>
//                             <option>Germany</option>
//                             <option>France</option>
//                             <option>Japan</option>
//                             <option>China</option>
//                             <option>Brazil</option>
//                             <option>Russia</option>
                            
//                         </select>
//                     </div>
//                     <div className="flex ">
//                         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//                             Update
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default StateEdit;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const StateEdit = () => {
  const { id } = useParams();  // Get the id from the route
  const navigate = useNavigate();  // To navigate after successful update
  
  // State to hold form data
  const [stateData, setStateData] = useState({
    name: '',
    country: '',
    status: 'active'  // assuming you have a status field
  });
  
  // Loading state
  const [loading, setLoading] = useState(true);

  // Fetch state data when the component mounts
  useEffect(() => {
    const fetchStateData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/shippingState/${id}`);
        const data = await response.json();
        if (data.success) {
          setStateData({
            name: data.data.name,
            country: data.data.country,
            status: data.data.status,
          });
        }
      } catch (err) {
        console.error('Error fetching state data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStateData();
  }, [id]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStateData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id) {
        alert('ID is missing');
        return;
    }
    try {
        const response = await fetch(`http://localhost:5000/api/shippingState/update/${id}`, {
            method: 'PATCH',  // Use PATCH instead of PUT
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(stateData),
        });

        const result = await response.json();
        if (result.success) {
            alert('State updated successfully');
            navigate('/admin-settings/shipping/state');
        } else {
            alert('Failed to update state');
        }
    } catch (err) {
        console.error('Error updating state:', err);
    }
};


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 mt-5">State Information</h1>
        <div className="bg-white rounded-lg shadow-md p-8 mt-5">
          <h1 className="text-2xl font-bold mb-6 mt-4">Edit State</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                value={stateData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                Country
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="country"
                name="country"
                value={stateData.country}
                onChange={handleChange}
                required
              >
                <option>India</option>
                <option>United States</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>United Kingdom</option>
                <option>Germany</option>
                <option>France</option>
                <option>Japan</option>
                <option>China</option>
                <option>Brazil</option>
                <option>Russia</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                Status
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="status"
                name="status"
                value={stateData.status}
                onChange={handleChange}
                required
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div className="flex">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StateEdit;
