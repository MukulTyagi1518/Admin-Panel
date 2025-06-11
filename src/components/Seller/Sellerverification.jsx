



import React, { useState } from 'react';
import axios from 'axios';

export default function SellerForm() {
  const [formData, setFormData] = useState({
    name: '',
    shopName: '',
    email: '',
    licenseNo: '',
    fullAddress: '',
    phoneNumber: '',
    taxPapers: null // Changed to null for file input handling
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      // Handle file input
      setFormData({ ...formData, [name]: files[0] });
    } else {
      // Handle text input
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('shopName', formData.shopName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('licenseNo', formData.licenseNo);
    formDataToSend.append('fullAddress', formData.fullAddress);
    formDataToSend.append('phoneNumber', formData.phoneNumber);
    formDataToSend.append('taxPapers', formData.taxPapers); // Add file to FormData

    try {
      // Replace with your actual POST API endpoint
      const response = await axios.post('https://e-commerce-backend-1-0.onrender.com/api/seller-verification/create', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Form submitted successfully:', response.data);
      // Handle the success response (e.g., show a success message, redirect, etc.)
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle the error response (e.g., show an error message)
    }
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Seller Information</h2>

      <div className="bg-white shadow rounded-lg p-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
              required
            />
          </div>

          {/* Shop Name */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">
              Shop Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="shopName"
              value={formData.shopName}
              onChange={handleChange}
              placeholder="Shop Name"
              className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
              required
            />
          </div>

          {/* License No */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">
              License No <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="licenseNo"
              value={formData.licenseNo}
              onChange={handleChange}
              placeholder="License No"
              className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
              required
            />
          </div>

          {/* Full Address */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">
              Full Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullAddress"
              value={formData.fullAddress}
              onChange={handleChange}
              placeholder="Full Address"
              className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
  type="text"
  name="phoneNumber"  // Changed here to match the state key
  value={formData.phoneNumber}
  onChange={handleChange}
  placeholder="Phone Number"
  className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
  required
/>

          </div>

          {/* Tax Papers */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">
              Tax Papers <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="taxPapers"
              onChange={handleChange}
              className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
              required
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
