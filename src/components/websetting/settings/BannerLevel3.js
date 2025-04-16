// import React from "react";
// import InfoBox from "./InfoBox"; // Reusable InfoBox component
// import Button from "./Button"; // Reusable Button component
// import ImageUpload from "./ImageUpload"; // Reusable hook for image upload logic
// import ImageUploadGroup from "./useImageUploadGroup";

// function BannerLevel3() {
//   // Use the ImageUpload hook with a maximum of 3 groups
//   const {
//     imageGroups,
//     handleImageUpload,
//     removeImage,
//     addNewGroup,
//     removeGroup,
//   } = ImageUpload([{ images: [] }], 3);

//   const handleSave = () => {
//     console.log("Saved data:", imageGroups);
//     alert("Data saved successfully!");
//   };

//   return (
//     <>
//       {/* Reusable InfoBox component */}
//       <InfoBox
//         title="Banner & Links (Max 3)"
//         description="Minimum dimensions required: 436px width X 436px height."
//       />

//       <div className="p-4 max-w-2xl mx-auto bg-gray-50 rounded-lg shadow-sm border border-gray-200">
//         {/* Map through imageGroups and render ImageUploadGroup for each group */}
//         {imageGroups.map((group, groupIndex) => (
//           <ImageUploadGroup
//             key={groupIndex}
//             group={group}
//             groupIndex={groupIndex}
//             onImageUpload={handleImageUpload}
//             onRemoveImage={removeImage}
//             onRemoveGroup={removeGroup} // Pass the removeGroup function
//           />
//         ))}

//         {/* Buttons for adding a new group and saving */}
//         <div className="flex justify-center mt-4 space-x-3">
//           {/* Reusable Button component for adding a new group */}
//           <Button
//             onClick={addNewGroup}
//             className="bg-blue-500 hover:bg-blue-600 focus:ring-blue-400"
//           >
//             Add New Group
//           </Button>

//           {/* Reusable Button component for saving */}
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

// export default BannerLevel3;


import React from "react";
import InfoBox from "./InfoBox";
import Button from "./Button";
import useImageUpload from "./useImageUploadGroup";
import ImageUploadGroup from "./ImageUpload";

function BannerLevel3() {
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
        "http://localhost:5000/api/banner3/create",
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
            Add New Group
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

export default BannerLevel3;
