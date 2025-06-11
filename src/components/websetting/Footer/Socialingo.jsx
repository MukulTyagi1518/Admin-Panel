



import React, { useState } from 'react';
import axios from 'axios';

export const Socialingo = () => {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    try {
      setLoading(true);
      const response = await axios.post('https://e-commerce-backend-1-0.onrender.com/api/footercontact', {
        contactAddress: address,
        contactPhone: phone,
        contactEmail: email,
      });
      alert('Contact info updated successfully!');
    } catch (error) {
      console.error('Error updating contact info:', error);
      alert('Failed to update contact info.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="bg-gray-50 rounded-lg shadow border border-gray-200 p-4 sm:p-6 mr-4">
        <h3 className="text-base font-semibold text-gray-800 mb-4">
          Contact Info Widget
        </h3>
        <div className="border-b border-gray-300 mb-4"></div>

        <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
          <label className="md:w-1/4 font-medium text-sm text-gray-700">
            Contact address (Translatable)
          </label>
          <input
            type="text"
            placeholder="Demo Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
          <label className="md:w-1/4 font-medium text-sm text-gray-700">
            Contact phone
          </label>
          <input
            type="text"
            placeholder="123456789"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
          <label className="md:w-1/4 font-medium text-sm text-gray-700">
            Contact email
          </label>
          <input
            type="text"
            placeholder="demo.example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />
        </div>

        <div className="text-right mt-3">
          <button
            onClick={handleUpdate}
            disabled={loading}
            className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-6 rounded shadow-sm disabled:opacity-60"
          >
            {loading ? 'Updating...' : 'Update'}
          </button>
        </div>
      </div>
    </div>
  );
};