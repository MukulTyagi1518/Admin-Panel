import { useState } from "react";
import { useCategoryContext } from "../../categoryContext";
import api from "../../utils/axios"

const CategoryEdit = () => {
  const { categoryData, setCategoryData } = useCategoryContext();

  const categoryTypes = ['Main Category', 'Sub Category'];
  const parentCategories = ['Electronics', 'Clothing', 'Home & Garden', 'None'];
  const attributeOptions = ['Size', 'Fabric', 'Sleeve', 'Wheel', 'Liter'];

  // const changeName = (id, e) => {
  //   setCategoryData(prevData =>
  //     prevData.map(category =>
  //       category._id === id
  //         ? { ...category, name: e.target.value }
  //         : category
  //     )
  //   );
  // };
  // const changeType = (id, e) => {
  //   setCategoryData(prevData =>
  //     prevData.map(category =>
  //       category._id === id
  //         ? { ...category, type: e.target.value }
  //         : category
  //     )
  //   );
  // };

 

  // const handleSubmit = (e) => {
  //   categoryData.map(async(c)=>{
  //     if(c._id==id){
  //       await api.put(``,{
  //         name:c.name,
  //         type:c.type,


  //       })
  //     }
  //   })
  // };

  return (
    <div className="max-w-4xl mx-auto m-6 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Category Information
      </h1>

      <form className="space-y-6">
        {/* Name */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"

            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Type */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Type <span className="text-red-500">*</span>
          </label>
          <select
            id="type"
            name="type"
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
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Parent Category
          </label>
          <select
            id="parentCategory"
            name="parentCategory"

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
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Ordering Number
          </label>
          <input
            type="number"
            id="orderingNumber"
            name="orderingNumber"

            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Banner */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
          >
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Icon */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
          >
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        
        </div>

        {/* Cover Image */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
          >
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
        </div>

        {/* Meta Title */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Meta Title
          </label>
          <input
            type="text"
            id="metaTitle"
            name="metaTitle"
           
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Meta Description */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Meta Description
          </label>
          <textarea
            id="metaDescription"
            name="metaDescription"
            
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Slug
          </label>
          <input
            type="text"
            id="slug"
            name="slug"
           
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div> */}
        {/* Filtering Attributes */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Filtering Attributes
          </label>
          <select
            multiple
            id="filteringAttributes"
            name="filteringAttributes"
           
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-auto"
          >
            {attributeOptions.map((attr) => (
              <option key={attr} value={attr}>
                {attr}
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-500 mt-1">
            Hold Ctrl/Cmd to select multiple options
          </p>
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
