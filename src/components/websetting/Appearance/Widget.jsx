


import { useState } from "react";
import axios from "axios";

export default function Widget({ fileName, handleFileChangefile }) {
  const [formData, setFormData] = useState({
    websiteBaseColor: "",
    websiteBaseHoverColor: "",
    websiteSecondaryBaseColor: "",
    websiteSecondaryBaseHoverColor: "",
    flashDealPageBannerLarge: null,
    flashDealPageBannerSmall: null,
  });

  const [fileLargeName, setFileLargeName] = useState("");
  const [fileSmallName, setFileSmallName] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, [type]: file });
      if (type === "flashDealPageBannerLarge") {
        setFileLargeName(file.name);
      } else {
        setFileSmallName(file.name);
      }
    }
  };

  const handleUpdate = async () => {
    try {
      const form = new FormData();
      form.append("websiteBaseColor", formData.websiteBaseColor);
      form.append("websiteBaseHoverColor", formData.websiteBaseHoverColor);
      form.append("websiteSecondaryBaseColor", formData.websiteSecondaryBaseColor);
      form.append("websiteSecondaryBaseHoverColor", formData.websiteSecondaryBaseHoverColor);
      if (formData.flashDealPageBannerLarge) {
        form.append("flashDealPageBannerLarge", formData.flashDealPageBannerLarge);
      }
      if (formData.flashDealPageBannerSmall) {
        form.append("flashDealPageBannerSmall", formData.flashDealPageBannerSmall);
      }

      await axios.post("https://e-commerce-backend-1-0.onrender.com/api/generalsetting", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Settings updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update settings.");
    }
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10 ml-4 mr-4">
      <h2 className="text-lg font-semibold mb-4">General Settings</h2>
      <div className="border-b border-gray-300 mb-4"></div>

      {/* Input Fields */}
      {[
        { label: "Website Base Color", name: "websiteBaseColor", placeholder: "#D42D2A" },
        { label: "Website Base Hover Color", name: "websiteBaseHoverColor", placeholder: "#D62400" },
        { label: "Website Secondary Base Color", name: "websiteSecondaryBaseColor", placeholder: "#FFBA00" },
        { label: "Website Secondary Base Hover Color", name: "websiteSecondaryBaseHoverColor", placeholder: "#FBE8E5" },
      ].map(({ label, name, placeholder }) => (
        <div key={name} className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
          <label className="md:w-1/4 font-medium text-sm text-gray-700">{label}</label>
          <input
            type="text"
            name={name}
            placeholder={placeholder}
            value={formData[name]}
            onChange={handleChange}
            className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />
        </div>
      ))}

      {/* Flash Deal Banner Large */}
      <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
        <label className="md:w-1/4 font-medium text-sm text-gray-700">
          Flash Deal Page Banner - Large
        </label>
        <div className="relative w-full sm:flex-1">
          <input
            type="file"
            onChange={(e) => handleFileChange(e, "flashDealPageBannerLarge")}
            className="absolute inset-0 opacity-0 cursor-pointer z-10 w-full h-full"
          />
          <div className="flex border rounded overflow-hidden w-full h-[42px]">
            <div className="bg-gray-200 text-gray-700 px-5 py-2 text-sm flex items-center">
              Browse
            </div>
            <div className="px-4 py-2 text-sm text-gray-600 bg-white w-full truncate flex items-center">
              {fileLargeName || "No file chosen"}
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Minimum dimensions: 1370px width X 242px height.
          </p>
        </div>
      </div>

      {/* Flash Deal Banner Small */}
      <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
        <label className="md:w-1/4 font-medium text-sm text-gray-700">
          Flash Deal Page Banner - Small
        </label>
        <div className="relative w-full sm:flex-1">
          <input
            type="file"
            onChange={(e) => handleFileChange(e, "flashDealPageBannerSmall")}
            className="absolute inset-0 opacity-0 cursor-pointer z-10 w-full h-full"
          />
          <div className="flex border rounded overflow-hidden w-full h-[42px]">
            <div className="bg-gray-200 text-gray-700 px-5 py-2 text-sm flex items-center">
              Browse
            </div>
            <div className="px-4 py-2 text-sm text-gray-600 bg-white w-full truncate flex items-center">
              {fileSmallName || "No file chosen"}
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Minimum dimensions: 400px width X 184px height.
          </p>
        </div>
      </div>

      <div className="text-right mt-3">
        <button
          onClick={handleUpdate}
          className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-6 rounded shadow-sm"
        >
          Update
        </button>
      </div>
    </div>
  );
}
