import React, { useState } from 'react';


function CitiesEdit() {
  const [name, setName] = useState('Sud se dixons gflle');
  const [state, setState] = useState('Andaman and Nicobar Islands');
  const [cost, setCost] = useState('0');
  const [activeTab, setActiveTab] = useState('English');
  

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">City Information</h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex border-b border-gray-200 mb-4">
          <button 
            className={`px-4 py-2 ${activeTab === 'English' ? 'border-b-2 border-blue-500' : 'text-gray-500'}`}
            onClick={() => handleTabClick('English')}
          >
            <span role="img" aria-label="English">🇬🇧</span> English
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'Bangla' ? 'border-b-2 border-blue-500' : 'text-gray-500'}`}
            onClick={() => handleTabClick('Bangla')}
          >
            <span role="img" aria-label="Bangla">🇧🇩</span> Bangla
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'Arabic' ? 'border-b-2 border-blue-500' : 'text-gray-500'}`}
            onClick={() => handleTabClick('Arabic')}
          >
            <span role="img" aria-label="Arabic">🇦🇪</span> Arabic
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'French' ? 'border-b-2 border-blue-500' : 'text-gray-500'}`}
            onClick={() => handleTabClick('French')}
          >
            <span role="img" aria-label="French">🇫🇷</span> French
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input 
            className="shadow appearance-none border rounded **w-96** py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">State</label>
          <select 
            className="shadow appearance-none border rounded **w-96** py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option>Andaman and Nicobar Islands</option>
            {/* Add more state options as needed */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Cost</label>
          <input 
            className="shadow appearance-none border rounded **w-96** py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number" 
            value={cost} 
            onChange={(e) => setCost(e.target.value)} 
          />
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Update
        </button>
      </div>
    </div>
  );
}

export default CitiesEdit;