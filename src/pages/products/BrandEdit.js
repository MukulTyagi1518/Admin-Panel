import React, { useState } from "react";

const BrandEdit = () => {
  const [activeTab, setActiveTab] = useState("English");
  const [logo, setLogo] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleLogoChange = (e) => {
    setLogo(e.target.files[0]);
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <div className="w-full text-center mb-4  ">
        <h2 className="text-2xl font-bold items-center ">Brand Information</h2>
      </div>
      <div className="w-full md:w-2/4  items-center bg-white p-5">
        <div className="flex border-b border-gray-200">
          {["English", "Bangla", "Arabic", "French"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 ${
                activeTab === tab ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-4">
          <div className="mb-4">
            <label className="block font-medium mb-2">Name</label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full" 
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Logo (120x90)</label>
            <input
              type="file"
              className="border border-gray-300 p-2"
              onChange={handleLogoChange}
            />
            {logo && (
              <div className="mt-2">
                <img
                  src={URL.createObjectURL(logo)}
                  alt="Logo"
                  className="max-w-[120px] max-h-[90px]"
                />
                <p className="text-sm text-gray-500">
                  {logo.name} ({logo.size} KB)
                </p>
                <p className="text-sm text-gray-500">
                  Minimum dimensions required: 120px width x 90px height
                </p>
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Meta Title</label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Meta Description</label>
            <textarea
              className="border border-gray-300 p-2 w-full"
              style={{ height: "150px" }} 
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Slug</label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandEdit;