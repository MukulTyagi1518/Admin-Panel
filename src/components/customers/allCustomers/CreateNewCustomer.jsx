import axios from "axios";
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiInstance from "../../../utils/axios";
import { useCustomerContext } from "../../../context/customerContext";

const CreateNewCustomer = () => {
  const navigate = useNavigate();
  const { setFetchCustomers } = useCustomerContext()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });
  const [contactMethod, setContactMethod] = useState("phone");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiInstance.post("/user1/", formData);
      if (response.status === 201) {
        console.log("Customer added successfully:", response.data);
        setFetchCustomers(true)
        alert("New customer added.")
        navigate("/customers/all")
      }
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };


  const toggleContactMethod = () => {
    setContactMethod((prev) => (prev === "phone" ? "email" : "phone"));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Create New Customer
            </h1>
            <p className="text-gray-600 mt-2">
              Fill in the details below to add a new customer
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
          {/* Card Header */}
          <div className="px-6 py-4 border-b border-gray-200 ">
            <h2 className="text-xl font-semibold text-gray-800">
              Customer Information
            </h2>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-6">
            <div className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className="absolute -top-2 left-3 bg-white px-1 text-sm font-medium text-gray-600"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg "
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* {contactMethod === "email" ? (
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="absolute -top-2 left-3 bg-white px-1 text-sm font-medium text-gray-600"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg "
                    placeholder="john@example.com"
                    required
                  />
                </div>
              ) : (
                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="absolute -top-2 left-3 bg-white px-1 text-sm font-medium text-gray-600"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg "
                    placeholder="+91 987654321"
                    required
                  />
                </div>
              )} */}

              <div className="relative">
                <label
                  htmlFor="email"
                  className="absolute -top-2 left-3 bg-white px-1 text-sm font-medium text-gray-600"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg "
                  placeholder="john@example.com"
                  required
                />
              </div>


              <div className="relative">
                <label
                  htmlFor="phone"
                  className="absolute -top-2 left-3 bg-white px-1 text-sm font-medium text-gray-600"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg "
                  placeholder="+91 987654321"
                  required
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="email"
                  className="absolute -top-2 left-3 bg-white px-1 text-sm font-medium text-gray-600"
                >
                  Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg "
                  placeholder="john@example.com"
                  required
                />
              </div>


              {/* Contact Method Toggle */}
              {/* <div className="flex justify-end">
                <button
                  type="button"
                  onClick={toggleContactMethod}
                  className="text-sm px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200 text-gray-700"
                >
                  {contactMethod === "email"
                    ? "Use Phone Number Instead"
                    : "Use Email Instead"}
                </button>
              </div> */}
            </div>

            {/* Form Actions */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end space-x-3">
              <button
                onClick={() => navigate("/customers/all")}
                type="button"
                className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Save Customer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewCustomer;
