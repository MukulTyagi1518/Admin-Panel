// // export default function Linkedwidget({ fileName, handleFileChangefile, handleUpdate }) {
// //     return (

// //         <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10 ml-4 mr-4">
// //             <h2 className="text-lg font-semibold mb-4">General Settings</h2>
// //             <div className="border-b border-gray-300 mb-4"></div>

// //             <div className="flex flex-col md:flex-row md:items-center gap-3">
// //                 <label className="md:w-1/4 font-medium text-sm text-gray-700">
// //                     Website Base Color <span></span>
// //                 </label>
// //                 <input
// //                     type="text"
// //                     placeholder="#D42D2A"
// //                     className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none "
// //                 />

// //             </div>


// //             <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
// //                 <label className="md:w-1/4 font-medium text-sm text-gray-700">
// //                     Website Base Hover Color<span></span>
// //                 </label>
// //                 <input
// //                     type="text"
// //                     placeholder="#D62400"
// //                     className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none "
// //                 />
// //             </div>
// //             <div className="flex flex-col md:flex-row md:items-center gap-3  mt-4">
// //                 <label className="md:w-1/4 font-medium text-sm text-gray-700">
// //                     Website Secondary Base Color<span></span>
// //                 </label>
// //                 <input
// //                     type="text"
// //                     placeholder="#FFBA00"
// //                     className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none "
// //                 />
// //             </div>
// //             <div className="flex flex-col md:flex-row md:items-center gap-3  mt-4">
// //                 <label className="md:w-1/4 font-medium text-sm text-gray-700">
// //                     Website Secondary Base Hover Color<span></span>
// //                 </label>
// //                 <input
// //                     type="text"
// //                     placeholder="#FBE8E5"
// //                     className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none "
// //                 />

// //             </div>

// //             <div className="flex flex-col md:flex-row md:items-center gap-3  mt-4">
// //                 <label className="md:w-1/4 font-medium text-sm text-gray-700">
// //                     Flash Deal Page Banner - Large<span></span>
// //                 </label>

// //                 <div className="relative w-full sm:flex-1">
// //                     <input
// //                         type="file"
// //                         id="metaImage"
// //                         onChange={handleFileChangefile}
// //                         className="absolute inset-0 opacity-0 cursor-pointer z-10 w-full h-full"
// //                     />
// //                     <div className="flex border rounded overflow-hidden w-full h-[42px]">
// //                         <div className="bg-gray-200 text-gray-700 px-5 py-2 text-sm flex items-center whitespace-nowrap">
// //                             Browse
// //                         </div>
// //                         <div className="px-4 py-2 text-sm text-gray-600 bg-white w-full truncate flex items-center">
// //                             {fileName}
// //                         </div>
// //                     </div>

// //                     <p className="text-xs text-gray-500 mt-1">
// //                         Will be shown in large device. Minimum dimensions required: 1370px width X 242px height.
// //                     </p>
// //                 </div>
// //             </div>

// //             <div className="flex flex-col md:flex-row md:items-center gap-3  mt-4">
// //                 <label className="md:w-1/4 font-medium text-sm text-gray-700">
// //                     Flash Deal Page Banner - Small<span></span>
// //                 </label>

// //                 <div className="relative w-full sm:flex-1">
// //                     <input
// //                         type="file"
// //                         id="metaImage"
// //                         onChange={handleFileChangefile}
// //                         className="absolute inset-0 opacity-0 cursor-pointer z-10 w-full h-full"
// //                     />
// //                     <div className="flex border rounded overflow-hidden w-full h-[42px]">
// //                         <div className="bg-gray-200 text-gray-700 px-5 py-2 text-sm flex items-center whitespace-nowrap">
// //                             Browse
// //                         </div>
// //                         <div className="px-4 py-2 text-sm text-gray-600 bg-white w-full truncate flex items-center">
// //                             {fileName}
// //                         </div>
// //                     </div>

// //                     <p className="text-xs text-gray-500 mt-1">
// //                         Will be shown in small device. Minimum dimensions required: 400px width X 184px height.
// //                     </p>
// //                 </div>
// //             </div>

// //             <div className="text-right mt-3">
// //                 <button
// //                     onClick={handleUpdate}
// //                     className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-6 rounded shadow-sm"
// //                 >
// //                     Update
// //                 </button>
// //             </div>
// //         </div>

// //     )
// // }


// import React, { useState } from "react";
// import axios from "axios";
// import "./GeneralSetting.scss";

// const GeneralSetting = () => {
//   const [websiteBaseColor, setWebsiteBaseColor] = useState("");
//   const [websiteBaseHoverColor, setWebsiteBaseHoverColor] = useState("");
//   const [flashDealPageBannerLarge, setFlashDealPageBannerLarge] = useState(null);
//   const [flashDealPageBannerSmall, setFlashDealPageBannerSmall] = useState(null);
//   const [productPageBannerLarge, setProductPageBannerLarge] = useState(null);
//   const [productPageBannerSmall, setProductPageBannerSmall] = useState(null);

//   const handleSubmit = async () => {
//     console.log("Submitting form data...");

//     const formData = new FormData();
//     formData.append("websiteBaseColor", websiteBaseColor);
//     formData.append("websiteBaseHoverColor", websiteBaseHoverColor);
//     if (flashDealPageBannerLarge) {
//       formData.append("flashDealPageBannerLarge", flashDealPageBannerLarge);
//     }
//     if (flashDealPageBannerSmall) {
//       formData.append("flashDealPageBannerSmall", flashDealPageBannerSmall);
//     }
//     if (productPageBannerLarge) {
//       formData.append("productPageBannerLarge", productPageBannerLarge);
//     }
//     if (productPageBannerSmall) {
//       formData.append("productPageBannerSmall", productPageBannerSmall);
//     }

//     try {
//       const res = await axios.post(
//         "https://e-commerce-backend-1-0.onrender.com/api/generalsetting",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log("Response from server:", res.data);
//       alert("Settings saved successfully!");
//     } catch (err) {
//       console.error("Error saving settings:", err.response?.data || err.message);
//       alert("Something went wrong while saving settings.");
//     }
//   };

//   return (
//     <div className="general-setting-container">
//       <h2>General Settings</h2>

//       <div className="form-group">
//         <label>Website Base Color:</label>
//         <input
//           type="text"
//           value={websiteBaseColor}
//           onChange={(e) => setWebsiteBaseColor(e.target.value)}
//           placeholder="#000000"
//         />
//       </div>

//       <div className="form-group">
//         <label>Website Base Hover Color:</label>
//         <input
//           type="text"
//           value={websiteBaseHoverColor}
//           onChange={(e) => setWebsiteBaseHoverColor(e.target.value)}
//           placeholder="#ff0000"
//         />
//       </div>

//       <div className="form-group">
//         <label>Flash Deal Page Banner (Large):</label>
//         <input
//           type="file"
//           onChange={(e) => setFlashDealPageBannerLarge(e.target.files[0])}
//         />
//       </div>

//       <div className="form-group">
//         <label>Flash Deal Page Banner (Small):</label>
//         <input
//           type="file"
//           onChange={(e) => setFlashDealPageBannerSmall(e.target.files[0])}
//         />
//       </div>

//       <div className="form-group">
//         <label>Product Page Banner (Large):</label>
//         <input
//           type="file"
//           onChange={(e) => setProductPageBannerLarge(e.target.files[0])}
//         />
//       </div>

//       <div className="form-group">
//         <label>Product Page Banner (Small):</label>
//         <input
//           type="file"
//           onChange={(e) => setProductPageBannerSmall(e.target.files[0])}
//         />
//       </div>

//       <button className="save-button" onClick={handleSubmit}>
//         Save Settings
//       </button>
//     </div>
//   );
// };

// export default GeneralSetting;

