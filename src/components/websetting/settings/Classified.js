



// import React, { useState } from "react";
// import Button from "./Button"; // Reusable button

// const Classified = () => {
//   const [largeBanner, setLargeBanner] = useState(null);
//   const [smallBanner, setSmallBanner] = useState(null);

//   const handleFileChange = (event, setBanner) => {
//     const file = event.target.files[0];
//     if (file) {
//       setBanner({ file, url: URL.createObjectURL(file) });
//     }
//   };

//   const removeImage = (setBanner) => {
//     setBanner(null);
//   };

//   const handleSave = async () => {
//     if (!largeBanner || !smallBanner) {
//       alert("Please upload both large and small banners.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("largeBanner", largeBanner.file);
//     formData.append("smallBanner", smallBanner.file);

//     try {
//       const response = await fetch("https://e-commerce-backend-1-0.onrender.com/api/classifieds/create", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         alert("Banners uploaded successfully!");
//       } else {
//         alert("Error uploading banners.");
//       }
//     } catch (error) {
//       console.error("Error during save operation:", error);
//       alert("Error uploading banners.");
//     }
//   };

//   return (
//     <div className="p-6 space-y-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
//           <h3 className="text-lg font-semibold mb-2">
//             Large Banner (Will be shown on large devices)
//           </h3>
//           <p className="text-gray-500 text-sm mb-2">
//             Minimum dimensions required: 1370px width X 242px height.
//           </p>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => handleFileChange(e, setLargeBanner)}
//             className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
//           />
//           {largeBanner && (
//             <div className="flex items-center justify-between mt-3 bg-gray-50 p-2 rounded-lg">
//               <img
//                 src={largeBanner.url}
//                 alt="Uploaded Large Banner"
//                 className="h-20 w-20 rounded-md object-cover"
//               />
//               <Button
//                 onClick={() => removeImage(setLargeBanner)}
//                 className="bg-red-500 hover:bg-red-600 rounded-full p-2"
//               >
//                 ✕
//               </Button>
//             </div>
//           )}
//         </div>

//         <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
//           <h3 className="text-lg font-semibold mb-2">
//             Small Banner (Will be shown on small devices)
//           </h3>
//           <p className="text-gray-500 text-sm mb-2">
//             Minimum dimensions required: 400px width X 200px height.
//           </p>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => handleFileChange(e, setSmallBanner)}
//             className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
//           />
//           {smallBanner && (
//             <div className="flex items-center justify-between mt-3 bg-gray-50 p-2 rounded-lg">
//               <img
//                 src={smallBanner.url}
//                 alt="Uploaded Small Banner"
//                 className="h-20 w-20 rounded-md object-cover"
//               />
//               <Button
//                 onClick={() => removeImage(setSmallBanner)}
//                 className="bg-red-500 hover:bg-red-600 rounded-full p-2"
//               >
//                 ✕
//               </Button>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="flex justify-end pt-20   ">
//         <Button onClick={handleSave} className="bg-green-500 text-white py-2 px-6 rounded-md ">
//           Save 
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Classified;
import React, { useState } from "react";
import Button from "./Button"; // Reusable button component

const Classified = () => {
  const [largeBanner, setLargeBanner] = useState(null);
  const [smallBanner, setSmallBanner] = useState(null);

  const handleFileChange = (event, setBanner) => {
    const file = event.target.files[0];
    if (file) {
      setBanner({ file, url: URL.createObjectURL(file) });
    }
  };

  const removeImage = (setBanner) => {
    setBanner(null);
  };

  const handleSave = async () => {
    if (!largeBanner || !smallBanner) {
      alert("Please upload both large and small banners.");
      return;
    }

    const formData = new FormData();
    formData.append("largeBanner", largeBanner.file);
    formData.append("smallBanner", smallBanner.file);

    try {
      const response = await fetch("https://e-commerce-backend-1-0.onrender.com/api/classifieds/create", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Banners uploaded successfully!");
      } else {
        alert("Error uploading banners.");
      }
    } catch (error) {
      console.error("Error during save operation:", error);
      alert("Error uploading banners.");
    }
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">Classified Banner Upload</h2>
        <p className="text-sm text-gray-500 mt-2">
          Upload your banners for large and small devices to display them in the classifieds section.
        </p>
      </div>

      {/* Banner Upload Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Large Banner Upload */}
        <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Large Banner</h3>
          <p className="text-sm text-gray-500 mb-4">Minimum dimensions: 1370px width X 242px height.</p>
          
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, setLargeBanner)}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
          />
          
          {largeBanner && (
            <div className="mt-4 flex items-center justify-between bg-gray-50 p-3 rounded-lg">
              <img
                src={largeBanner.url}
                alt="Uploaded Large Banner"
                className="h-20 w-20 rounded-md object-cover"
              />
              <Button
                onClick={() => removeImage(setLargeBanner)}
                className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2"
              >
                ✕
              </Button>
            </div>
          )}
        </div>

        {/* Small Banner Upload */}
        <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Small Banner</h3>
          <p className="text-sm text-gray-500 mb-4">Minimum dimensions: 400px width X 200px height.</p>
          
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, setSmallBanner)}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
          />
          
          {smallBanner && (
            <div className="mt-4 flex items-center justify-between bg-gray-50 p-3 rounded-lg">
              <img
                src={smallBanner.url}
                alt="Uploaded Small Banner"
                className="h-20 w-20 rounded-md object-cover"
              />
              <Button
                onClick={() => removeImage(setSmallBanner)}
                className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2"
              >
                ✕
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end mt-10">
        <Button 
          onClick={handleSave} 
          className="bg-green-500 text-white py-3 px-8 rounded-md shadow-md hover:bg-green-600 transition-all"
        >
          Save Banners
        </Button>
      </div>
    </div>
  );
};

export default Classified;
