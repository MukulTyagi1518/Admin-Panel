

import { useState } from "react";
import axios from "axios";

export default function Seo() {
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("Choose file");

  const handleFileChangefile = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile ? selectedFile.name : "Choose file");
  };

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("metaTitle", metaTitle);
    formData.append("metaDescription", metaDescription);
    formData.append("keywords", keywords);
    if (file) {
      formData.append("metaImage", file);
    }

    try {
      const res = await axios.post(
        "https://e-commerce-backend-1-0.onrender.com/api/global-seo", // Update to your actual route
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("SEO updated:", res.data);
      alert("Global SEO updated successfully!");
    } catch (error) {
      console.error("Error updating SEO:", error);
      alert("Failed to update SEO. Check console for errors.");
    }
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl mt-6 p-6 mb-10 ml-4 mr-4">
      <h2 className="text-lg font-semibold mb-4">Global SEO</h2>
      <div className="border-b border-gray-300 mb-4"></div>

      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <label className="md:w-1/4 font-medium text-sm text-gray-700">
          Meta Title
        </label>
        <input
          type="text"
          value={metaTitle}
          onChange={(e) => setMetaTitle(e.target.value)}
          placeholder="Active eCommerce CMS"
          className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none "
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
        <label className="md:w-1/4 font-medium text-sm text-gray-700">
          Meta Description
        </label>
        <textarea
          value={metaDescription}
          onChange={(e) => setMetaDescription(e.target.value)}
          placeholder="Active eCommerce CMS"
          className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none "
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
        <label className="md:w-1/4 font-medium text-sm text-gray-700">
          Keywords
        </label>
        <textarea
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="Keyword1, Keyword2"
          className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none "
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
        <label className="md:w-1/4 font-medium text-sm text-gray-700">
          Site Icon
        </label>
        <div className="relative w-full sm:flex-1">
          <input
            type="file"
            id="metaImage"
            onChange={handleFileChangefile}
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
          <p className="text-xs text-gray-500 mt-1">
            Minimum dimensions required: 32px width X 32px height.
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
