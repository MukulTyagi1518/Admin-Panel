import React, { useState } from 'react';

function SystemSettingsForm() {

    const [useWatermark, setUseWatermark] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <div className="border border-gray-300 rounded p-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">System Settings</h2>
        <div className="border-b border-gray-300 mb-4" />

        <form className="space-y-5">
          {/* Text Inputs */}
          {[
            { id: "systemName", label: "System Name", value: "Active eCommerce CMS" },
            { id: "frontendWebsiteName", label: "Frontend Website Name", value: "Active eCommerce" },
            { id: "siteMotto", label: "Site Motto", value: "Demo of Active eCommerce CMS" }
          ].map(field => (
            <div key={field.id} className="flex flex-col md:flex-row md:items-center">
              <label htmlFor={field.id} className="md:w-48 mb-1 md:mb-0 text-gray-700">
                {field.label}
              </label>
              <input
                id={field.id}
                type="text"
                defaultValue={field.value}
                className="border border-gray-300 rounded px-3 py-2 w-full md:w-auto"
              />
            </div>
          ))}

          {/* File Inputs */}
          {[
            { id: "siteIcon", label: "Site Icon", note: "Minimum dimensions required: 32px width X 32px height." },
            {
              id: "systemLogoWhite",
              label: "System Logo - White",
              note: "Will be used in admin panel side menu. Minimum dimensions required: 189px width X 31px height."
            },
            {
              id: "systemLogoBlack",
              label: "System Logo - Black",
              note: "Will be used in Admin login page, Seller login page & Delivery Boy login page. Minimum dimensions required: 189px width X 31px height."
            }
          ].map(field => (
            <div key={field.id} className="flex flex-col md:flex-row md:items-start">
              <label htmlFor={field.id} className="md:w-48 mb-1 text-gray-700">
                {field.label}
              </label>
              <div className="w-full">
                <div className="flex items-center border border-gray-300 rounded px-3 py-2 bg-gray-100 w-full">
                  <span className="bg-gray-300 text-gray-700 text-sm px-3 py-1 rounded mr-3">Browse</span>
                  <input id={field.id} type="file" className="hidden" />
                  <span className="text-sm text-gray-600">Choose file</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">{field.note}</p>
              </div>
            </div>
          ))}

          {/* Dropdowns */}
          {[
            { id: "systemTimezone", label: "System Timezone", options: ["(GMT) UTC","(GMT) London"] },
            { id: "uploadedImageFormat", label: "Uploaded image format", options: ["Default","PNG","JPG"] },
          ].map(select => (
            <div key={select.id} className="flex flex-col md:flex-row md:items-center">
              <label htmlFor={select.id} className="md:w-48 mb-1 md:mb-0 text-gray-700">
                {select.label}
              </label>
              <select
                id={select.id}
                className="border border-gray-300 rounded px-3 py-2 w-full md:w-auto"
              >
                {select.options.map(opt => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
          ))}

          {/* Update Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded"
            >
              Update
            </button>
          </div>
        </form>
      </div>
      <div className="border mt-5 border-gray-300 rounded p-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">General Settings</h2>
        <div className="border-b border-gray-300 mb-4" />

        <form className="space-y-5">
          {/* Text Inputs */}
          {[
            { id: "systemName", label: "Website Base Color", value: "#D42D2A" },
            { id: "frontendWebsiteName", label: "Website Base Hover Color", value: "#D62400" },
            { id: "siteMotto", label: "Website Secondary Base Color", value: "#FFBA00" },
            { id: "systemName", label: "Website Secondary Base Hover Color", value: "#FBE8E5" }
           
          ].map(field => (
            <div key={field.id} className="flex flex-col md:flex-row md:items-center">
              <label htmlFor={field.id} className="md:w-48 mb-1 md:mb-0 text-gray-700">
                {field.label}
              </label>
              <input
                id={field.id}
                type="text"
                defaultValue={field.value}
                className="border border-gray-300 rounded px-3 py-2 w-full md:w-auto"
              />
            </div>
          ))}

          {/* File Inputs */}
          {[
            { id: "siteIcon", label: "Flash Deal Page Banner - Large", note: "Will be shown in large device. Minimum dimensions required: 1370px width X 242px height." },
            {
              id: "systemLogoWhite",
              label: "Flash Deal Page Banner - Small",
              note: "Will be shown in small device. Minimum dimensions required: 400px width X 184px height."
            }
            
          ].map(field => (
            <div key={field.id} className="flex flex-col md:flex-row md:items-start">
              <label htmlFor={field.id} className="md:w-48 mb-1 text-gray-700">
                {field.label}
              </label>
              <div className="w-full">
                <div className="flex items-center border border-gray-300 rounded px-3 py-2 bg-gray-100 w-full">
                  <span className="bg-gray-300 text-gray-700 text-sm px-3 py-1 rounded mr-3">Browse</span>
                  <input id={field.id} type="file" className="hidden" />
                  <span className="text-sm text-gray-600">Choose file</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">{field.note}</p>
              </div>
            </div>
          ))}

          {/* Update Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded"
            >
              Update
            </button>
          </div>
        </form>
      </div>
      <div className="border mt-5 border-gray-300 rounded p-4 max-w-4xl mx-auto"> 
  <h2 className="text-2xl font-semibold mb-4">Image Watermark</h2>
  <div className="border-b border-gray-300 mb-4" />

  <form className="space-y-5">
    {/* Toggle Switch */}
    <div className="flex items-center justify-between">
      <label className="text-gray-700">Use Image Watermark (During Upload)</label>
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            checked={useWatermark}
            onChange={() => setUseWatermark(!useWatermark)}
          />
          <div className={`block bg-gray-600 w-14 h-8 rounded-full ${useWatermark ? 'bg-green-400' : ''}`}></div>
          <div className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${useWatermark ? 'transform translate-x-6' : ''}`}></div>
        </div>
      </label>
    </div>

    {/* Watermark Type */}
    <div className="flex flex-col md:flex-row md:items-center">
      <label htmlFor="watermarkType" className="md:w-48 mb-1 md:mb-0 text-gray-700">
        Watermark Type
      </label>
      <select
        id="watermarkType"
        className="border border-gray-300 rounded px-3 py-2 w-full md:w-auto"
      >
        <option>Image</option>
        {/* Add more options as needed */}
      </select>
    </div>

    {/* Watermark Image */}
    <div className="flex flex-col md:flex-row md:items-start">
      <label htmlFor="watermarkImage" className="md:w-48 mb-1 text-gray-700">
        Watermark Image
      </label>
      <div className="w-full">
        <div className="flex items-center border border-gray-300 rounded px-3 py-2 bg-gray-100 w-full">
          <span className="bg-gray-300 text-gray-700 text-sm px-3 py-1 rounded mr-3">Browse</span>
          <input id="watermarkImage" type="file" className="hidden" />
          <span className="text-sm text-gray-600">Choose file</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">Do not use "svg" image.</p>
      </div>
    </div>

    {/* Watermark Position */}
    <div className="flex flex-col md:flex-row md:items-center">
      <label htmlFor="watermarkPosition" className="md:w-48 mb-1 md:mb-0 text-gray-700">
        Watermark Position
      </label>
      <select
        id="watermarkPosition"
        className="border border-gray-300 rounded px-3 py-2 w-full md:w-auto"
      >
        <option>Center</option>
        {/* Add more options as needed */}
      </select>
    </div>

    {/* Update Button */}
    <div className="flex justify-end">
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded"
      >
        Update
      </button>
    </div>
  </form>
</div>

    </div>
  );
}

export default SystemSettingsForm;