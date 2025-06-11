



import { useState } from "react";
import axios from "axios";

export default function FooterInfoWidget({ fileName, handleFileChangefile, handleUpdate }) {
  const [formData, setFormData] = useState({
    systemName: '',
    frontendWebsiteName: '',
    siteMotto: '',
    systemTimezone: '',
    uploadedImageFormat: '',
  });

  const [files, setFiles] = useState({
    siteIcon: null,
    systemLogoWhite: null,
    systemLogoBlack: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      setFiles({ ...files, [key]: file });
    }
  };

  const handleSubmit = async () => {
    try {
      const form = new FormData();
      form.append("systemName", formData.systemName);
      form.append("frontendWebsiteName", formData.frontendWebsiteName);
      form.append("siteMotto", formData.siteMotto);
      form.append("systemTimezone", formData.systemTimezone);

      if (files.siteIcon) form.append("siteIcon", files.siteIcon);
      if (files.systemLogoWhite) form.append("systemLogoWhite", files.systemLogoWhite);
      if (files.systemLogoBlack) form.append("systemLogoBlack", files.systemLogoBlack);

      const res = await axios.post("https://e-commerce-backend-1-0.onrender.com/api/systemsetting", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Settings updated successfully!");
      console.log("Saved:", res.data);
    } catch (error) {
      console.error("Failed to save settings:", error);
      alert("Error saving system settings.");
    }
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6">
        {/** System Name */}
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <label className="md:w-1/4 font-medium text-sm text-gray-700">System Name</label>
          <input
            name="systemName"
            type="text"
            value={formData.systemName}
            onChange={handleChange}
            placeholder="Active eCommerce CMS"
            className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />
        </div>

        {/** Frontend Website Name */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
          <label className="md:w-1/4 font-medium text-sm text-gray-700">Frontend Website Name</label>
          <input
            name="frontendWebsiteName"
            type="text"
            value={formData.frontendWebsiteName}
            onChange={handleChange}
            placeholder="Active eCommerce CMS"
            className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />
        </div>

        {/** Site Motto */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
          <label className="md:w-1/4 font-medium text-sm text-gray-700">Site Motto</label>
          <input
            name="siteMotto"
            type="text"
            value={formData.siteMotto}
            onChange={handleChange}
            placeholder="Active eCommerce CMS"
            className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />
        </div>

        {/** File Uploads */}
        {[
          { key: "siteIcon", label: "Site Icon", note: "Minimum: 32x32px" },
          { key: "systemLogoWhite", label: "System Logo - White", note: "Minimum: 189x31px" },
          { key: "systemLogoBlack", label: "System Logo - Black", note: "Minimum: 189x31px" }
        ].map(({ key, label, note }) => (
          <div key={key} className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">{label}</label>
            <div className="relative w-full sm:flex-1">
              <input
                type="file"
                onChange={(e) => handleFileChange(e, key)}
                className="absolute inset-0 opacity-0 cursor-pointer z-10 w-full h-full"
              />
              <div className="flex border rounded overflow-hidden w-full h-[42px]">
                <div className="bg-gray-200 text-gray-700 px-5 py-2 text-sm flex items-center">Browse</div>
                <div className="px-4 py-2 text-sm text-gray-600 bg-white w-full truncate flex items-center">
                  {files[key]?.name || "No file chosen"}
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">{note}</p>
            </div>
          </div>
        ))}

        {/** Timezone Select */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
          <label className="md:w-1/4 font-medium text-sm text-gray-700">System Timezone</label>
          <select
            name="systemTimezone"
            value={formData.systemTimezone}
            onChange={handleChange}
            className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
          >
            <option value="" disabled>Timezone</option>
            <option value="UTC">(GMT) UTC</option>
            <option value="Europe/London">(GMT+1:00) London</option>
          </select>
        </div>

        {/** Submit Button */}
        <div className="text-right mt-6">
          <button
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-6 rounded shadow-sm"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
