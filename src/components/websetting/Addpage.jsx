

import React, { useState, useEffect } from "react";
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
import axios from "axios";

export default function AddNewPageForm() {
  const [fileName, setFileName] = useState("Choose file");
  const [metaImage, setMetaImage] = useState(null);

  const [title, setTitle] = useState("");
  const [baseUrl, setBaseUrl] = useState("https://demo.activeitzone.com/ecommerce/");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [keywords, setKeywords] = useState("");

  useEffect(() => {
    if (title) {
      setSlug(
        title
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-")
          .trim()
      );
    }
  }, [title]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setMetaImage(file);
    } else {
      setFileName("Choose file");
      setMetaImage(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !slug || !content) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("slug", slug);
      formData.append("link", baseUrl + slug);
      formData.append("content", content);
      formData.append("seo[title]", metaTitle); // ✅ matches schema

      formData.append("seo[metaDescription]", metaDescription);

      keywords
        .split(",")
        .map((kw) => kw.trim())
        .filter(Boolean)
        .forEach((kw) => {
          formData.append("seo[keywords][]", kw);
        });

      if (metaImage) {
        formData.append("seo[metaImage]", metaImage);
      }

      const response = await axios.post("http://localhost:5000/api/websetpage/websetpage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Page created successfully!");
      console.log("Response:", response.data);

      // Reset form
      setTitle("");
      setSlug("");
      setContent("");
      setMetaTitle("");
      setMetaDescription("");
      setKeywords("");
      setMetaImage(null);
      setFileName("Choose file");

    } catch (error) {
      console.error("Error creating page:", error);
      const msg = error?.response?.data?.message || "Something went wrong!";
      alert(msg);
    }
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Add New Page</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Title */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
            />
          </div>

          {/* URL */}
          <div className="flex flex-col md:flex-row md:items-start gap-3">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">
              Link <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col w-full md:w-3/4 space-y-2">
              <div className="flex flex-col md:flex-row gap-2">
                <input
                  type="text"
                  value={baseUrl}
                  onChange={(e) => setBaseUrl(e.target.value)}
                  className="w-full md:w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none"
                  placeholder="Enter base URL"
                />
                <input
                  type="text"
                  placeholder="Slug"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full md:w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none"
                />
              </div>
              <span className="text-sm text-gray-500">
                Full Link: {baseUrl}
                {slug}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col md:flex-row gap-3">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">
              Add Content <span className="text-red-500">*</span>
            </label>
            <div className="w-full md:w-3/4 border border-gray-300 rounded">
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
                placeholder="Write your content here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-3 focus:outline-none resize-y"
              ></textarea>
            </div>
          </div>

          <h3 className="text-lg font-medium mb-4">SEO</h3>

          {/* Meta Title */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">Meta Title</label>
            <input
              type="text"
              placeholder="Meta title"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
            />
          </div>

          {/* Meta Description */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">Meta Description</label>
            <textarea
              placeholder="Meta description"
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none resize-y"
            />
          </div>

          {/* Keywords */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">Keywords</label>
            <textarea
              placeholder="keyword1, keyword2"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none resize-y"
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
              Save Page
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}



