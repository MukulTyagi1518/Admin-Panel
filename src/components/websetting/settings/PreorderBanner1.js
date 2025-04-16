// import React from 'react';
// import ImageUpload from './ImageUpload';
// import ImageUploadGroup from "./useImageUploadGroup";

// // Main Component
// function PreorderBanner1() {
//   const {
//     imageGroups,
//     handleImageUpload,
//     removeImage,
//     addNewGroup,
//     removeGroup,
//   } = ImageUpload([{ images: [] }], 3);

//   const handleSave = () => {
//     console.log('Saved data:', imageGroups);
//     alert('Data saved successfully!');
//   };

//   return (
//     <div className="p-4 max-w-2xl mx-auto bg-gray-50 rounded-lg shadow-sm border border-gray-100">
//       <h4 className="text-sm font-medium text-gray-700 mb-1">Banner & Links (Max 3)</h4>
//       <p className="text-xs text-gray-500 mb-2">Minimum dimensions required: 1370px width X 360px height.</p>
      
//       {imageGroups.map((group, groupIndex) => (
//         <ImageUploadGroup
//           key={groupIndex}
//           group={group}
//           groupIndex={groupIndex}
//           onImageUpload={handleImageUpload}
//           onRemoveImage={removeImage}
//           onRemoveGroup={removeGroup}
//         />
//       ))}

//       <div className="flex justify-center mt-4 space-x-3">
//         <button
//           onClick={addNewGroup}
//           className="text-white bg-blue-500 hover:bg-blue-600 rounded-md py-1.5 px-4 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
//         >
//           Add New Group
//         </button>
//         <button
//           onClick={handleSave}
//           className="text-white bg-green-500 hover:bg-green-600 rounded-md py-1.5 px-4 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
//         >
//           Save
//         </button>
//       </div>
//     </div>
//   );
// }

// export default PreorderBanner1;
import React from "react";
import InfoBox from "./InfoBox";
import Button from "./Button";
import useImageUpload from "./useImageUploadGroup";
import ImageUploadGroup from "./ImageUpload";

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
        "http://localhost:5000/api/preorderbanner/create",
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
    <>
      <InfoBox
        title="Banner & Links (Max 3)"
        description="Minimum dimensions required: 436px width X 436px height."
      />
      <div className="p-4 max-w-2xl mx-auto bg-gray-50 rounded-lg shadow-sm border border-gray-200">
        {imageGroups.map((group, groupIndex) => (
          <ImageUploadGroup
            key={groupIndex}
            group={group}
            groupIndex={groupIndex}
            onImageUpload={handleImageUpload}
            onRemoveImage={removeImage}
            onRemoveGroup={removeGroup}
          />
        ))}

        <div className="flex justify-center mt-4 space-x-3">
          <Button
            onClick={addNewGroup}
            className="bg-blue-500 hover:bg-blue-600 focus:ring-blue-400"
          >
            Add New 
          </Button>
          <Button
            onClick={handleSave}
            className="bg-green-500 hover:bg-green-600 focus:ring-green-400"
          >
            Save
          </Button>
        </div>
      </div>
    </>
  );
}

export default PreorderBanner1;
