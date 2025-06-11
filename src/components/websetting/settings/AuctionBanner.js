// import React from "react";
// import ImageUpload from "./ImageUpload";
// import InfoBox from "./InfoBox";
// import Button from "./Button";
// import ImageUploadGroup from "./useImageUploadGroup";

// function AuctionBanner() {
//   const { imageGroups, handleImageUpload, removeImage } = ImageUpload([
//     { images: [] },
//   ]);

//   const handleSave = () => {
//     console.log("Saved data:", imageGroups);
//     alert("Data saved successfully!");
//   };

//   return (
//     <>
//       <InfoBox
//         title="Auction Banner"
//         description="Minimum dimensions required: 435px width X 485px height."
//       />
//       <div className="p-4 max-w-2xl mx-auto bg-gray-50 rounded-lg shadow-sm border border-gray-200">
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

// export default AuctionBanner;


import React from "react";
import useImageUpload from "./useImageUploadGroup"; // Custom hook for image uploads
import ImageUploadGroup from "./ImageUpload"; // Image upload UI component
import InfoBox from "./InfoBox"; // Info message box
import Button from "./Button"; // Reusable button component

function AuctionBanner() {
  const { imageGroups, handleImageUpload, removeImage } = useImageUpload([
    { images: [] },
  ]);

  const handleSave = async () => {
    const formData = new FormData();

    // Get the first image from the first image group
    const firstImage = imageGroups[0]?.images[0]?.file;
    if (!firstImage) {
      alert("Please upload an image first.");
      return;
    }

    // ✅ Make sure the field name is exactly "image" as required by multer.single("image")
    formData.append("image", firstImage);

    try {
      const response = await fetch("https://e-commerce-backend-1-0.onrender.com/api/Auctionbanner/create", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Banner saved:", result);
        alert("Auction Banner saved successfully!");
      } else {
        console.error("Save error:", response.statusText);
        alert("Error saving banner.");
      }
    } catch (error) {
      console.error("Save failed:", error);
      alert("Error saving banner.");
    }
  };

  return (
    <>
      <InfoBox
        title="Auction Banner"
        description="Minimum dimensions required: 435px width X 485px height."
      />
      <div className="p-4 max-w-2xl mx-auto bg-gray-50 rounded-lg shadow-sm border border-gray-200">
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

export default AuctionBanner;

