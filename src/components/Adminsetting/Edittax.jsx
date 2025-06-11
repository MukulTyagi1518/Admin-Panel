



import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const TaxInfoForm = () => {
  const [taxName, setTaxName] = useState("");
  const { id } = useParams(); // Get the tax ID from the URL
  const navigate = useNavigate();

  // Fetch current tax data when the component mounts
  useEffect(() => {
    const fetchTaxData = async () => {
      try {
        const response = await axios.get(`https://e-commerce-backend-1-0.onrender.com/api/vatTax/${id}`);
        setTaxName(response.data.name); // Set the current tax name
      } catch (error) {
        console.error("Error fetching tax data:", error);
      }
    };

    fetchTaxData();
  }, [id]);

  // Handle saving the updated tax info
  const handleSave = async () => {
    if (taxName.trim() !== "") {
      try {
        const response = await axios.patch(
          `https://e-commerce-backend-1-0.onrender.com/api/vatTax/update/${id}`, 
          { name: taxName }  // Send the updated name to the backend
        );

        if (response.data.success) {
          navigate("/taxes"); // Redirect to the taxes list page after update
        } else {
          console.error("Failed to update tax.");
        }
      } catch (error) {
        console.error("Error updating tax:", error);
      }
    } else {
      console.error("Error: Tax name cannot be empty.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Page Heading */}
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Tax Information</h2>

      {/* Card Box */}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header with Divider */}
        <div className="border-b px-6 py-4">
          <h3 className="text-md font-semibold text-gray-800">Update Tax Info</h3>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {/* Label + Input Row */}
          <div className="flex flex-col sm:flex-row sm:items-center mb-6 gap-2">
            <label className="sm:w-24 text-sm text-gray-700 font-medium">Name</label>
            <input
              type="text"
              placeholder="Vat"
              value={taxName}
              onChange={(e) => setTaxName(e.target.value)}
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none"
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxInfoForm;