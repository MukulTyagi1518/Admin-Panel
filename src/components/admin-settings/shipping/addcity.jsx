import React, { useState } from 'react';

const AddCity = ({ statesData = [] }) => {
  const [newState, setNewState] = useState({
    name: '',
    state: '',
    cost: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);

  const handleAddState = async () => {
    setMessage('');

    if (!newState.name || !newState.state || !newState.cost) {
      setMessage('Please fill in all fields.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('https://e-commerce-backend-1-0.onrender.com/api/shippingCost/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...newState,
          cost: parseFloat(newState.cost)
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setMessage('City added successfully!');
      setNewState({ name: '', state: '', cost: '' });
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:w-1/3 p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-bold mb-4">Add New City</h2>
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
          <input
            type="text"
            id="state"
            placeholder="Type or select state"
            className="border p-2 rounded w-full"
            value={newState.state}
            onChange={(e) => {
              setNewState({ ...newState, state: e.target.value });
              setIsStateDropdownOpen(true);
            }}
            onFocus={() => setIsStateDropdownOpen(true)}
            onBlur={() => setTimeout(() => setIsStateDropdownOpen(false), 100)}
          />

          {isStateDropdownOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white border rounded shadow-md max-h-60 overflow-y-auto">
              {statesData.length > 0 ? (
                statesData
                  .filter((state) =>
                    state.name.toLowerCase().includes(newState.state.toLowerCase())
                  )
                  .map((state) => (
                    <div
                      key={state._id || state.id}
                      onClick={() => {
                        setNewState({ ...newState, state: state.name });
                        setIsStateDropdownOpen(false);
                      }}
                      className="px-4 py-2 text-gray-800 cursor-pointer hover:bg-blue-100"
                    >
                      {state.name}
                    </div>
                  ))
              ) : (
                <div className="px-4 py-2 text-gray-800">No states available</div>
              )}
            </div>
          )}
        </div>

        <label htmlFor="cost">Cost</label>
        <input
          type="number"
          id="cost"
          placeholder="Cost"
          className="border p-2 rounded w-full"
          min="0"
          step="0.01"
          value={newState.cost}
          onChange={(e) => setNewState({ ...newState, cost: e.target.value })}
        />

        <div className="flex mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddState}
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save'}
          </button>
        </div>

        {message && (
          <div className="mt-2 text-sm text-center text-red-600">{message}</div>
        )}
      </div>
    </div>
  );
};

export default AddCity;
