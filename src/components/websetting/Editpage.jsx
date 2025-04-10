import React, { useState } from "react";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaListUl,
  FaListOl,
  FaUndo,
  FaRedo,
  FaLink,
  FaImage,
  FaVideo,
  FaTable,
  FaCode,
} from "react-icons/fa";
import { MdFormatColorText, MdOutlineFormatClear } from "react-icons/md";
import { useParams } from "react-router-dom";

export default function AddNewPageForm() {

    const { id } = useParams();

  const [fileName, setFileName] = useState('Choose file');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('Choose file');
    }
  };
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Edit New Page</h2>

      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium mb-4">Page Content</h3>

        <form className="space-y-6">
          {/* Title */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Title"
              className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
            />
          </div>

          {/* Link */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">
              Link <span className="text-red-500">*</span>
            </label>
            <div className="flex w-full md:w-3/4">
              <span className="flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 text-gray-600 rounded-l">
                https://demo.activeitzone.com/ecommerce/
              </span>
              <input
                type="text"
                placeholder="Slug"
                className="flex-1 border border-gray-300 rounded-r px-3 py-2 focus:outline-none "
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col md:flex-row gap-3">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">
              Add Content <span className="text-red-500">*</span>
            </label>
            <div className="w-full md:w-3/4 border border-gray-300 rounded">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center gap-2 p-2 border-b border-gray-200 bg-gray-50">
                {[FaBold, FaItalic, FaUnderline, FaListUl, FaListOl, MdOutlineFormatClear, MdFormatColorText, FaTable, FaLink, FaImage, FaVideo, FaCode, FaUndo, FaRedo].map((Icon, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="p-2 text-gray-600 hover:bg-gray-200 rounded"
                  >
                    <Icon size={16} />
                  </button>
                ))}
              </div>

              <textarea
                rows="10"
                placeholder="Content.."
                className="w-full p-3 focus:outline-none resize-none"
              ></textarea>
            </div>
          </div>
          <h3 className="text-lg font-medium mb-4">SEO</h3>
          {/* Title */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">
              Meta Title <span></span>
            </label>
            <input
              type="text"
              placeholder="Title"
              className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none "
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">
              Meta Description <span className=""></span>
            </label>
            <textarea
              type="text"
              placeholder="Description"
              className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">
             Keywords<span className=""></span>
            </label>
            <textarea
              type="text"
              placeholder="Keywords,Keywords"
              className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
            />
          </div>
           {/* Meta Image */}
           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
  <label htmlFor="metaImage" className="w-full sm:w-40 text-gray-700 font-medium">
    Meta Image
  </label>

  <div className="relative w-full sm:flex-1">
    <input
      type="file"
      id="metaImage"
      onChange={handleFileChange}
      className="absolute inset-0 opacity-0 cursor-pointer z-10 w-full h-full"
    />
    <div className="flex border rounded overflow-hidden w-full h-[42px]">
      <div className="bg-gray-200 text-gray-700 px-5 py-2 text-sm flex items-center whitespace-nowrap">
        Browse
      </div>
      <div className="px-4 py-2 text-sm text-gray-600 bg-white w-full truncate flex items-center">
        {fileName}
      </div>
    </div>
  </div>
</div>


        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded"
          >
            Update Page
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}
