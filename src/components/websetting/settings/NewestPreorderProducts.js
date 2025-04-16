// import React from 'react';
// import ImageUpload from './ImageUpload';
// import ImageUploadGroup from "./useImageUploadGroup";

// function NewestPreorderProducts() {
//   const {
//     imageGroups,
//     handleImageUpload,
//     removeImage,

//   } = ImageUpload([{ images: [] }]);

//   const handleSave = () => {
//     console.log('Saved data:', imageGroups);
//     alert('Data saved successfully!');
//   };

//   return (
//     <>
//     <div className="p-4 max-w-2xl mx-auto bg-gray-50 rounded-lg shadow-sm border border-gray-100">
//     <h4 className="text-base font-medium text-gray-700 mb-1">Banner</h4>
    
//     {imageGroups.map((group, groupIndex) => (
//       <ImageUploadGroup
//         key={groupIndex}
//         group={group}
//         groupIndex={groupIndex}
//         onImageUpload={handleImageUpload}
//         onRemoveImage={removeImage}
//       />
//     ))}

//     <div className="flex justify-center mt-4 space-x-3">
//       <button
//         onClick={handleSave}
//         className="text-white bg-green-500 hover:bg-green-600 rounded-md py-1.5 px-4 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
//       >
//         Save
//       </button>
//     </div>
//   </div>
// </>  );
// }

// export default NewestPreorderProducts;


import React from 'react';
import useImageUpload from './useImageUploadGroup'; // Custom hook
import ImageUploadGroup from './ImageUpload'; // UI component

function NewestPreorderProducts() {
  const {
    imageGroups,
    handleImageUpload,
    removeImage,
  } = useImageUpload([{ images: [] }]);

  const handleSave = async () => {
    const formData = new FormData();

    // Get the first image from the first group
    const firstImage = imageGroups[0]?.images[0]?.file;
    if (!firstImage) {
      alert('Please upload a banner image first.');
      return;
    }

    // ✅ Backend expects field name to be "image"
    formData.append("image", firstImage);

    try {
      const response = await fetch("http://localhost:5000/api/newest-preorder/create", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Banner uploaded:", result);
        alert("Newest Preorder Product banner saved successfully!");
      } else {
        console.error("Error:", response.statusText);
        alert("Error saving banner.");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <div className="p-4 max-w-2xl mx-auto bg-gray-50 rounded-lg shadow-sm border border-gray-100">
        <h4 className="text-base font-medium text-gray-700 mb-1">Banner</h4>

        {imageGroups.map((group, groupIndex) => (
          <ImageUploadGroup
            key={groupIndex}
            group={group}
            groupIndex={groupIndex}
            onImageUpload={handleImageUpload}
            onRemoveImage={removeImage}
          />
        ))}

        <div className="flex justify-center mt-4 space-x-3">
          <button
            onClick={handleSave}
            className="text-white bg-green-500 hover:bg-green-600 rounded-md py-1.5 px-4 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default NewestPreorderProducts;
