


// import React, { useState } from "react";
// import { Info } from "lucide-react";

// const HomeSlider = () => {
//   const [imageGroups, setImageGroups] = useState([{ images: [] }]);
//   const [isUploading, setIsUploading] = useState(false);

//   // Handle image selection
//   const handleImageUpload = (event, groupIndex) => {
//     const files = Array.from(event.target.files);
//     const newImages = files.map((file) => ({
//       file,
//       url: URL.createObjectURL(file),
//     }));

//     setImageGroups((prev) => {
//       const newGroups = [...prev];
//       newGroups[groupIndex] = {
//         ...newGroups[groupIndex],
//         images: newImages,
//       };
//       return newGroups;
//     });
//   };

//   // Remove all images from a group
//   const removeImage = (groupIndex) => {
//     setImageGroups((prev) => {
//       const newGroups = [...prev];
//       newGroups[groupIndex] = {
//         ...newGroups[groupIndex],
//         images: [],
//       };
//       return newGroups;
//     });
//   };

//   // Add new upload group
//   const addNewGroup = () => {
//     setImageGroups((prev) => [...prev, { images: [] }]);
//   };

//   // Remove entire group
//   const removeGroup = (groupIndex) => {
//     setImageGroups((prev) => prev.filter((_, i) => i !== groupIndex));
//   };

//   // Upload to backend
//   const handleSave = async () => {
//     try {
//       const formData = new FormData();

//       imageGroups.forEach((group) => {
//         group.images.forEach((img) => {
//           formData.append("images", img.file);
//         });
//       });

//       setIsUploading(true);

//       const response = await fetch("https://e-commerce-backend-1-0.onrender.com/api/homeslider/add", {
//         method: "POST",
//         body: formData,
//       });

//       const result = await response.json();
//       setIsUploading(false);

//       if (!response.ok) {
//         throw new Error(result.message || "Failed to upload images");
//       }

//       console.log("Saved data:", result);
//       alert("Images uploaded successfully!");
//       setImageGroups([{ images: [] }]); // Reset groups
//     } catch (error) {
//       setIsUploading(false);
//       console.error("Error saving data:", error);
//       alert("Failed to upload images");
//     }
//   };

//   return (
//     <>
//       {/* Info Section */}
//       <div className="p-4 max-w-2xl mx-auto">
//         <Info className="inline-block mr-2 text-blue-600" />
//         <h4 className="text-sm font-medium text-gray-700 mb-1">
//           Minimum dimensions required: 1100px width × 460px height.
//         </h4>
//         <p className="text-xs text-gray-500 mb-2">
//           We’ve limited banner height to maintain UI. We crop from both sides to make it responsive.
//           Keep this in mind when designing your banner.
//         </p>
//       </div>

//       {/* Upload Section */}
//       <div className="p-4 max-w-2xl mx-auto bg-gray-50 rounded-lg shadow-sm border border-gray-100">
//         {imageGroups.map((group, groupIndex) => (
//           <div key={groupIndex} className="mb-6 relative">
//             {groupIndex > 0 && (
//               <button
//                 onClick={() => removeGroup(groupIndex)}
//                 className="absolute top-0 right-0 text-white bg-red-500 hover:bg-red-600 rounded-full p-1.5"
//               >
//                 ✕
//               </button>
//             )}

//             <label className="block w-full">
//               <span className="block text-md font-semibold text-gray-700 mb-2">
//                 Upload Image{groupIndex + 1 > 1 ? "s" : ""}
//               </span>
//               <input
//                 type="file"
//                 accept="image/*"
//                 multiple
//                 onChange={(e) => handleImageUpload(e, groupIndex)}
//                 className="block w-full text-sm text-gray-500 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
//               />
//             </label>

//             {/* Image Preview */}
//             <div className="mt-3 space-y-3">
//               {group.images.length > 0 ? (
//                 group.images.map((image, imageIndex) => (
//                   <div
//                     key={imageIndex}
//                     className="flex items-center justify-between bg-white p-3 rounded-lg shadow-xs border border-gray-150 hover:border-blue-200"
//                   >
//                     <div className="flex items-center gap-3 flex-1">
//                       <img
//                         src={image.url}
//                         alt="Uploaded"
//                         className="h-12 w-12 rounded-md object-cover border border-gray-150"
//                       />
//                       <span className="text-sm text-gray-700">{image.file.name}</span>
//                     </div>
//                     <button
//                       onClick={() => removeImage(groupIndex)}
//                       className="text-white bg-red-500 hover:bg-red-600 rounded-full p-1.5 ml-2"
//                     >
//                       ✕
//                     </button>
//                   </div>
//                 ))
//               ) : (
//                 <div className="text-center text-gray-400 text-sm py-3 bg-white rounded-lg border border-gray-150">
//                   No images uploaded yet.
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}

//         {/* Buttons */}
//         <div className="flex justify-center mt-4 space-x-3">
//           <button
//             onClick={addNewGroup}
//             className="text-white bg-blue-500 hover:bg-blue-600 rounded-md py-1.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//           >
//             Add New Group
//           </button>
//           <button
//             onClick={handleSave}
//             className="text-white bg-green-500 hover:bg-green-600 rounded-md py-1.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
//             disabled={isUploading}
//           >
//             {isUploading ? "Uploading..." : "Save"}
//           </button>
//         </div>

//         {isUploading && (
//           <p className="text-center text-sm text-blue-600 mt-3">Uploading images to server...</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default HomeSlider;
import React, { useState } from "react";
import { Info } from "lucide-react";

const HomeSlider = () => {
  const [imageGroups, setImageGroups] = useState([{ images: [] }]);
  const [isUploading, setIsUploading] = useState(false);

  // Handle image selection
  const handleImageUpload = (event, groupIndex) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setImageGroups((prev) => {
      const newGroups = [...prev];
      newGroups[groupIndex] = {
        ...newGroups[groupIndex],
        images: newImages,
      };
      return newGroups;
    });
  };

  // Remove all images from a group
  const removeImage = (groupIndex) => {
    setImageGroups((prev) => {
      const newGroups = [...prev];
      newGroups[groupIndex] = {
        ...newGroups[groupIndex],
        images: [],
      };
      return newGroups;
    });
  };

  // Add new upload group
  const addNewGroup = () => {
    setImageGroups((prev) => [...prev, { images: [] }]);
  };

  // Remove entire group
  const removeGroup = (groupIndex) => {
    setImageGroups((prev) => prev.filter((_, i) => i !== groupIndex));
  };

  // Upload to backend
  const handleSave = async () => {
    try {
      const formData = new FormData();

      imageGroups.forEach((group) => {
        group.images.forEach((img) => {
          formData.append("images", img.file);
        });
      });

      setIsUploading(true);

      const response = await fetch("https://e-commerce-backend-1-0.onrender.com/api/homeslider/add", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      setIsUploading(false);

      if (!response.ok) {
        throw new Error(result.message || "Failed to upload images");
      }

      console.log("Saved data:", result);
      alert("Images uploaded successfully!");
      setImageGroups([{ images: [] }]); // Reset groups
    } catch (error) {
      setIsUploading(false);
      console.error("Error saving data:", error);
      alert("Failed to upload images");
    }
  };

  return (
    <>
      {/* Info Section */}
      <div className="p-6 max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-lg mb-6">
        <Info className="inline-block mr-2 text-blue-600" />
        <h4 className="text-sm font-semibold text-gray-700 mb-1">
          Minimum dimensions required: 1100px width × 460px height.
        </h4>
        <p className="text-xs text-gray-500 mb-2">
          We’ve limited banner height to maintain UI. We crop from both sides to make it responsive.
          Keep this in mind when designing your banner.
        </p>
      </div>

      {/* Upload Section */}
      <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md border border-gray-200">
        {imageGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-6 relative">
            {groupIndex > 0 && (
              <button
                onClick={() => removeGroup(groupIndex)}
                className="absolute top-0 right-0 text-white bg-red-500 hover:bg-red-600 rounded-full p-1.5 transition-all duration-300 transform hover:scale-110"
              >
                ✕
              </button>
            )}

            <label className="block w-full">
              <span className="block text-md font-semibold text-gray-700 mb-2">
                Upload Image{groupIndex + 1 > 1 ? "s" : ""}
              </span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => handleImageUpload(e, groupIndex)}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer transition-all duration-300"
              />
            </label>

            {/* Image Preview */}
            <div className="mt-3 space-y-3">
              {group.images.length > 0 ? (
                group.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm border border-gray-150 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <img
                        src={image.url}
                        alt="Uploaded"
                        className="h-16 w-16 rounded-md object-cover border border-gray-150"
                      />
                      <span className="text-sm text-gray-700">{image.file.name}</span>
                    </div>
                    <button
                      onClick={() => removeImage(groupIndex)}
                      className="text-white bg-red-500 hover:bg-red-600 rounded-full p-1.5 ml-2 transition-all duration-300 hover:scale-110"
                    >
                      ✕
                    </button>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-400 text-sm py-3 bg-white rounded-lg border border-gray-150">
                  No images uploaded yet.
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Buttons */}
        <div className="flex justify-center mt-4 space-x-3">
          <button
            onClick={addNewGroup}
            className="text-white bg-blue-500 hover:bg-blue-600 rounded-md py-1.5 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 transform hover:scale-105"
          >
            Add New Group
          </button>
          <button
            onClick={handleSave}
            className="text-white bg-green-500 hover:bg-green-600 rounded-md py-1.5 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 transform hover:scale-105"
            disabled={isUploading}
          >
            {isUploading ? (
              <div className="animate-spin h-5 w-5 border-4 border-t-4 border-green-300 border-solid rounded-full"></div>
            ) : (
              "Save"
            )}
          </button>
        </div>

        {isUploading && (
          <p className="text-center text-sm text-blue-600 mt-3">Uploading images to server...</p>
        )}
      </div>
    </>
  );
};

export default HomeSlider;

