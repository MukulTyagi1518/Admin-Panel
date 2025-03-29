import { useState } from "react";
import { useCategoryContext } from "../../categoryContext";
import api from "../../utils/axios";

const CategoryEdit = () => {
  const { categoryData, setCategoryData } = useCategoryContext();
  
  // Initialize form data with proper structure
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    parentCategory: "",
    orderingNumber: "",
    metaTitle: "",
    metaDescription: "",
    filteringAttributes: "",
    banner: null,
    icon: null,
    coverImage: null,
  });

  const [preview, setPreview] = useState({
    banner: null,
    icon: null,
    coverImage: null,
  });

  const categoryTypes = ["Main Category", "Sub Category"];
  const parentCategories = ["Electronics", "Clothing", "Home & Garden", "None"];
  const attributeOptions = ["Size", "Fabric", "Sleeve", "Wheel", "Liter"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    if (file) {
      setFormData(prev => ({
        ...prev,
        [name]: file,
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview({
          ...preview,
          [name]: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Create FormData for file uploads
      const data = new FormData();
      
      // Append all fields
      data.append('name', formData.name);
      data.append('type', formData.type);
      data.append('parentCategory', formData.parentCategory);
      data.append('orderingNumber', formData.orderingNumber);
      data.append('metaTitle', formData.metaTitle);
      data.append('metaDescription', formData.metaDescription);
      data.append('filteringAttributes', formData.filteringAttributes);

      
      // Append files if they exist
      if (formData.banner) data.append('banner', formData.banner);
      if (formData.icon) data.append('icon', formData.icon);
      if (formData.coverImage) data.append('coverImage', formData.coverImage);

      const response = await api.post("/categories/Create-new-category", data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log("Response:", response.data);
      alert("Category added successfully!");
      
      // Update context if needed
      setCategoryData(response.data);
      
      // Reset form
      setFormData({
        name: "",
        type: "",
        parentCategory: "",
        orderingNumber: "",
        metaTitle: "",
        metaDescription: "",
        filteringAttributes: "",
        banner: null,
        icon: null,
        coverImage: null,

      });
      
      setPreview({
        banner: null,
        icon: null,
        coverImage: null,
      });
      
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Failed to add category. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto m-5 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Category Information
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type <span className="text-red-500">*</span>
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Type</option>
            {categoryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Parent Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Parent Category
          </label>
          <select
            id="parentCategory"
            name="parentCategory"
            value={formData.parentCategory}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Parent Category</option>
            {parentCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Ordering Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ordering Number
          </label>
          <input
            type="number"
            id="orderingNumber"
            name="orderingNumber"
            value={formData.orderingNumber}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Banner */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Banner{" "}
            <span className="text-xs text-gray-500">
              (Minimum dimensions: 150px × 150px)
            </span>
          </label>
          <input
            type="file"
            id="banner"
            name="banner"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {preview.banner && (
            <div className="mt-2">
              <img
                src={preview.banner}
                alt="Banner preview"
                className="h-32 object-contain border rounded"
              />
            </div>
          )}
        </div>

        {/* Icon */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Icon{" "}
            <span className="text-xs text-gray-500">
              (Minimum dimensions: 16px × 16px)
            </span>
          </label>
          <input
            type="file"
            id="icon"
            name="icon"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {preview.icon && (
            <div className="mt-2">
              <img
                src={preview.icon}
                alt="Icon preview"
                className="h-16 object-contain border rounded"
              />
            </div>
          )}
        </div>

        {/* Cover Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Cover Image{" "}
            <span className="text-xs text-gray-500">
              (Minimum dimensions: 260px × 260px)
            </span>
          </label>
          <input
            type="file"
            id="coverImage"
            name="coverImage"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {preview.coverImage && (
            <div className="mt-2">
              <img
                src={preview.coverImage}
                alt="Cover preview"
                className="h-40 object-contain border rounded"
              />
            </div>
          )}
        </div>

        {/* Meta Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Meta Title
          </label>
          <input
            type="text"
            id="metaTitle"
            name="metaTitle"
            value={formData.metaTitle}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Meta Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Meta Description
          </label>
          <textarea
            id="metaDescription"
            name="metaDescription"
            value={formData.metaDescription}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Filtering Attributes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Filtering Attributes <span className="text-red-500">*</span>
          </label>
          <select
            id="filteringAttributes"
            name="filteringAttributes"
            value={formData.filteringAttributes}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Filtering Attributes</option>
            {attributeOptions.map((attr) => (
              <option key={attr} value={attr}>
                {attr}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Save Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryEdit;