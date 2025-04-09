import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateZone = () => {
  const [zoneName, setZoneName] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const countries = ['India', 'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France', 'Japan', 'China', 'Brazil']; // Example countries
  const navigate = useNavigate();
  const handleZoneNameChange = (event) => {
    setZoneName(event.target.value);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Zone Name:', zoneName);
    console.log('Selected Country:', selectedCountry);
    // Implement your submit logic here
  };

  const handleBack = () => {
    // Implement your back navigation logic here
    navigate(`/admin-settings/shipping/zones`);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8 lg:p-10 ">
      <div className="bg-white rounded-md shadow-md p-4 md:p-6 lg:p-8 max-w-xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Add New Zone</h2>
          <button
            onClick={handleBack}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm md:text-base"
          >
            Back
          </button>
        </div>

        {/* Zone Information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Zone Information</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Zone Name */}
            <div>
              <label htmlFor="zoneName" className="block text-gray-600 text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="zoneName"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Zone Name"
                value={zoneName}
                onChange={handleZoneNameChange}
              />
            </div>

            {/* Select Country */}
            <div>
              <label htmlFor="country" className="block text-gray-600 text-sm font-medium mb-1">
                Select Country
              </label>
              <div className="relative">
                <select
                  id="country"
                  className=" p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md appearance-none pr-10"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  <option value="" disabled>
                    Nothing selected
                  </option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm md:text-base"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateZone;