


// import React from 'react';
// import useImageUpload from './useImageUploadGroup'; // Custom hook
// import ImageUploadGroup from './ImageUpload'; // UI component

// function NewestPreorderProducts() {
//   const {
//     imageGroups,
//     handleImageUpload,
//     removeImage,
//   } = useImageUpload([{ images: [] }]);

//   const handleSave = async () => {
//     const formData = new FormData();

//     // Get the first image from the first group
//     const firstImage = imageGroups[0]?.images[0]?.file;
//     if (!firstImage) {
//       alert('Please upload a banner image first.');
//       return;
//     }

//     // ✅ Backend expects field name to be "image"
//     formData.append("image", firstImage);

//     try {
//       const response = await fetch("https://e-commerce-backend-1-0.onrender.com/api/newest-preorder/create", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log("Banner uploaded:", result);
//         alert("Newest Preorder Product banner saved successfully!");
//       } else {
//         console.error("Error:", response.statusText);
//         alert("Error saving banner.");
//       }
//     } catch (error) {
//       console.error("Upload failed:", error);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <>
//       <div className="p-4 max-w-2xl mx-auto bg-gray-50 rounded-lg shadow-sm border border-gray-100">
//         <h4 className="text-base font-medium text-gray-700 mb-1">Banner</h4>

//         {imageGroups.map((group, groupIndex) => (
//           <ImageUploadGroup
//             key={groupIndex}
//             group={group}
//             groupIndex={groupIndex}
//             onImageUpload={handleImageUpload}
//             onRemoveImage={removeImage}
//           />
//         ))}

//         <div className="flex justify-center mt-4 space-x-3">
//           <button
//             onClick={handleSave}
//             className="text-white bg-green-500 hover:bg-green-600 rounded-md py-1.5 px-4 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default NewestPreorderProducts;
import React from 'react';
import useImageUpload from './useImageUploadGroup'; // Custom hook for image uploads
import ImageUploadGroup from './ImageUpload'; // Image upload UI component

function NewestPreorderProducts() {
  const {
    imageGroups,
    handleImageUpload,
    removeImage,
  } = useImageUpload([{ images: [] }]);

  const handleSave = async () => {
    const formData = new FormData();

    // Get the first image from the first image group
    const firstImage = imageGroups[0]?.images[0]?.file;
    if (!firstImage) {
      alert('Please upload a banner image first.');
      return;
    }

    // ✅ Backend expects field name to be "image"
    formData.append('image', firstImage);

    try {
      const response = await fetch('https://e-commerce-backend-1-0.onrender.com/api/newest-preorder/create', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Banner uploaded:', result);
        alert('Newest Preorder Product banner saved successfully!');
      } else {
        console.error('Error:', response.statusText);
        alert('Error saving banner.');
      }
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="flex flex-col items-center py-8 bg-gray-50 min-h-screen">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h4 className="text-2xl font-medium text-gray-700">Newest Preorder Products</h4>
        <p className="text-sm text-gray-500 mt-2">
          Upload the banner image for your newest preorder products (Min: 435px width X 485px height).
        </p>
      </div>

      {/* Banner Upload Section */}
      <div className="p-8 bg-white rounded-xl shadow-xl w-full max-w-2xl border border-gray-200">
        {/* Image Groups */}
        {imageGroups.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="mb-8 bg-gray-50 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="relative">
              <ImageUploadGroup
                group={group}
                groupIndex={groupIndex}
                onImageUpload={handleImageUpload}
                onRemoveImage={removeImage}
              />
              {/* Remove Image Button */}
              <button
                onClick={() => removeImage(groupIndex)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-700 focus:outline-none transform transition-all duration-200 hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}

        {/* Save Button */}
        <div className="flex justify-center space-x-6">
          <button
            onClick={handleSave}
            className="flex items-center bg-green-600 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-green-700 hover:scale-105 transition-all duration-300"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewestPreorderProducts;
