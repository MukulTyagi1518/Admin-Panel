
// import React from "react";
// import InfoBox from "./InfoBox";
// import Button from "./Button";
// import useImageUpload from "./useImageUploadGroup";
// import ImageUploadGroup from "./ImageUpload";

// function PreorderBanner1() {
//   const {
//     imageGroups,
//     handleImageUpload,
//     removeImage,
//     addNewGroup,
//     removeGroup,
//   } = useImageUpload([{ images: [] }], 3); // Max 3 groups

//   const handleSave = async () => {
//     try {
//       const formData = new FormData();

//       imageGroups.forEach((group) => {
//         group.images.forEach((img) => {
//           formData.append("images", img.file); 
//         });
//       });

//       const response = await fetch(
//         "https://e-commerce-backend-1-0.onrender.com/api/preorderbanner/create",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const result = await response.json();
//       if (response.ok) {
//         alert("Banners saved successfully!");
//         console.log("Server response:", result);
//       } else {
//         alert(result.message || "Failed to save banners.");
//       }
//     } catch (error) {
//       console.error("Error saving banners:", error);
//       alert("Something went wrong while saving banners!");
//     }
//   };

//   return (
//     <>
//       <InfoBox
//         title="Banner & Links (Max 3)"
//         description="Minimum dimensions required: 436px width X 436px height."
//       />
//       <div className="p-4 max-w-2xl mx-auto bg-gray-50 rounded-lg shadow-sm border border-gray-200">
//         {imageGroups.map((group, groupIndex) => (
//           <ImageUploadGroup
//             key={groupIndex}
//             group={group}
//             groupIndex={groupIndex}
//             onImageUpload={handleImageUpload}
//             onRemoveImage={removeImage}
//             onRemoveGroup={removeGroup}
//           />
//         ))}

//         <div className="flex justify-center mt-4 space-x-3">
//           <Button
//             onClick={addNewGroup}
//             className="bg-blue-500 hover:bg-blue-600 focus:ring-blue-400"
//           >
//             Add New 
//           </Button>
//           <Button
//             onClick={handleSave}
//             className="bg-green-500 hover:bg-green-600 focus:ring-green-400"
//           >
//             Save
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default PreorderBanner1;


import React from "react";
import InfoBox from "./InfoBox";
import Button from "./Button";
import useImageUpload from "./useImageUploadGroup";
import ImageUploadGroup from "./ImageUpload";
import { CheckCircle, XCircle } from "lucide-react"; // Adding icons for visual feedback

function PreorderBanner1() {
  const {
    imageGroups,
    handleImageUpload,
    removeImage,
    addNewGroup,
    removeGroup,
  } = useImageUpload([{ images: [] }], 3); // Max 3 groups

  const handleSave = async () => {
    try {
      const formData = new FormData();

      imageGroups.forEach((group) => {
        group.images.forEach((img) => {
          formData.append("images", img.file);
        });
      });

      const response = await fetch(
        "https://e-commerce-backend-1-0.onrender.com/api/preorderbanner/create",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      if (response.ok) {
        alert("Banners saved successfully!");
        console.log("Server response:", result);
      } else {
        alert(result.message || "Failed to save banners.");
      }
    } catch (error) {
      console.error("Error saving banners:", error);
      alert("Something went wrong while saving banners!");
    }
  };

  return (
    <div className="flex flex-col items-center py-8 space-y-6 bg-gray-100 min-h-screen">
      {/* Info Box Section */}
      <div className="text-center p-4 bg-white shadow-lg rounded-xl w-full max-w-2xl">
        <InfoBox
          title="Banner & Links (Max 3)"
          description="Minimum dimensions required: 436px width X 436px height."
        />
      </div>

      {/* Image Upload Section */}
      <div className="p-8 bg-white shadow-2xl rounded-3xl w-full max-w-2xl border border-gray-200">
        {/* Image Groups */}
        {imageGroups.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="mb-8 bg-gray-50 p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="relative">
              <ImageUploadGroup
                group={group}
                groupIndex={groupIndex}
                onImageUpload={handleImageUpload}
                onRemoveImage={removeImage}
                onRemoveGroup={removeGroup}
              />
              {/* Remove Group Button */}
              <button
                onClick={() => removeGroup(groupIndex)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-700 focus:outline-none transform transition-all duration-200 hover:scale-110"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}

        {/* Add New Group and Save Buttons */}
        <div className="flex justify-between space-x-6">
          <Button
            onClick={addNewGroup}
            className="flex items-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-full text-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          >
            <span>Add New Group</span>
          </Button>

          <Button
            onClick={handleSave}
            className="flex items-center space-x-2 bg-green-600 text-white py-2 px-4 rounded-full text-lg shadow-md hover:bg-green-700 hover:scale-105 transition-all duration-300"
          >
            <CheckCircle className="w-6 h-6" />
            <span>Save</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PreorderBanner1;
