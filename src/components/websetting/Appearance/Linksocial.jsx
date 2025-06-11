// // export default function Linksocial({ fileName, handleFileChangefile,handleUpdate,setShowLinks,showLinks}){

// //     return(
// //         <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 ml-4 mr-4">
// //         <h2 className="text-lg font-semibold mb-4">Image Watermark</h2>
// //         <div className="border-b border-gray-300 mb-4"></div>

// //         {/* Toggle */}
// //         <div className="flex items-center justify-between mb-4">
// //             <label className="text-sm font-medium">Use Image Watermark (During Upload)</label>
// //             <div
// //                 onClick={() => setShowLinks(!showLinks)}
// //                 className={`w-11 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${showLinks ? "bg-green-500" : "bg-gray-300"
// //                     } transition-colors`}
// //             >
// //                 <div
// //                     className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${showLinks ? "translate-x-5" : "translate-x-0"
// //                         }`}
// //                 />
// //             </div>
// //         </div>

// //         <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
// //             <label className="md:w-1/4 font-medium text-sm text-gray-700">
// //                 Watermark Type<span></span>
// //             </label>

// //             <select
// //                 className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
// //                 defaultValue=""
// //             >
// //                 <option value="" disabled>Image</option>
// //                 <option value="top-left">Text</option>

// //             </select>
// //         </div>
// //         <div className="flex flex-col md:flex-row md:items-center gap-3  mt-4">
// //             <label className="md:w-1/4 font-medium text-sm text-gray-700">
// //                 Watermark Image<span></span>
// //             </label>

// //             <div className="relative w-full sm:flex-1">
// //                 <input
// //                     type="file"
// //                     id="metaImage"
// //                     onChange={handleFileChangefile}
// //                     className="absolute inset-0 opacity-0 cursor-pointer z-10 w-full h-full"
// //                 />
// //                 <div className="flex border rounded overflow-hidden w-full h-[42px]">
// //                     <div className="bg-gray-200 text-gray-700 px-5 py-2 text-sm flex items-center whitespace-nowrap">
// //                         Browse
// //                     </div>
// //                     <div className="px-4 py-2 text-sm text-gray-600 bg-white w-full truncate flex items-center">
// //                         {fileName}
// //                     </div>
// //                 </div>

// //                 <p className="text-xs text-gray-500 mt-1">
// //                     Do not use "svg" image.
// //                 </p>
// //             </div>
// //         </div>


// //         <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
// //             <label className="md:w-1/4 font-medium text-sm text-gray-700">
// //                 Watermark Position<span></span>
// //             </label>

// //             <select
// //                 className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
// //                 defaultValue=""
// //             >
// //                 <option value="" disabled>Center</option>
// //                 <option value="top-left">Top Left</option>
// //                 <option value="top-right">Top Right</option>
// //                 <option value="center">Center</option>
// //                 <option value="bottom-left">Bottom Left</option>

// //             </select>
// //         </div>
// //         <div className="text-right mt-3">
// //             <button
// //                 onClick={handleUpdate}
// //                 className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-6 rounded shadow-sm"
// //             >
// //                 Update
// //             </button>
// //         </div>
// //     </div>

// //     )
// // }


// import React, { useState } from "react";
// import axios from "axios";

// export default function Linksocial({ setShowLinks, showLinks }) {
//   const [file, setFile] = useState(null);
//   const [fileName, setFileName] = useState("No file selected");
//   const [watermarkType, setWatermarkType] = useState("image");
//   const [watermarkPosition, setWatermarkPosition] = useState("center");

//   const handleFileChange = (e) => {
//     const selected = e.target.files[0];
//     setFile(selected);
//     setFileName(selected ? selected.name : "No file selected");
//   };

//   const handleUpdate = async () => {
//     console.log("Updating watermark settings...");
  
//     try {
//       const formData = new FormData();
//       formData.append("useImageWatermark", showLinks.toString());
//       formData.append("watermarkType", watermarkType);
//       formData.append("watermarkPosition", watermarkPosition);
//       if (file) {
//         formData.append("watermarkImage", file);
//       }
  
//       const response = await axios.post(
//         "https://e-commerce-backend-1-0.onrender.com/api/imagewatermark",
//         formData
//       );
  
//       console.log("Response:", response.data);
//       alert("Watermark settings updated successfully!");
//     } catch (err) {
//       console.error("Error occurred during update:", err);
//       alert("Error updating watermark settings.");
//     }
//   };
  
//   return (
//     <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 ml-4 mr-4">
//       <h2 className="text-lg font-semibold mb-4">Image Watermark</h2>
//       <div className="border-b border-gray-300 mb-4"></div>

//       {/* Toggle */}
//       <div className="flex items-center justify-between mb-4">
//         <label className="text-sm font-medium">
//           Use Image Watermark (During Upload)
//         </label>
//         <div
//           onClick={() => setShowLinks(!showLinks)}
//           className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
//             showLinks ? "bg-green-500" : "bg-gray-300"
//           }`}
//         >
//           <div
//             className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
//               showLinks ? "translate-x-5" : "translate-x-0"
//             }`}
//           />
//         </div>
//       </div>

//       {/* Watermark Type */}
//       <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
//         <label className="md:w-1/4 font-medium text-sm text-gray-700">
//           Watermark Type
//         </label>
//         <select
//           className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
//           value={watermarkType}
//           onChange={(e) => setWatermarkType(e.target.value)}
//         >
//           <option value="image">Image</option>
//           <option value="text">Text</option>
//         </select>
//       </div>

//       {/* File Input */}
//       <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
//         <label className="md:w-1/4 font-medium text-sm text-gray-700">
//           Watermark Image
//         </label>
//         <div className="relative w-full sm:flex-1">
//           <input
//             type="file"
//             accept="image/*"
//             id="watermarkImage"
//             onChange={handleFileChange}
//             className="absolute inset-0 opacity-0 cursor-pointer z-10 w-full h-full"
//           />
//           <div className="flex border rounded overflow-hidden w-full h-[42px]">
//             <div className="bg-gray-200 text-gray-700 px-5 py-2 text-sm flex items-center">
//               Browse
//             </div>
//             <div className="px-4 py-2 text-sm text-gray-600 bg-white w-full truncate flex items-center">
//               {fileName}
//             </div>
//           </div>
//           <p className="text-xs text-gray-500 mt-1">
//             Recommended: JPG or PNG. Avoid SVG.
//           </p>
//         </div>
//       </div>

//       {/* Watermark Position */}
//       <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
//         <label className="md:w-1/4 font-medium text-sm text-gray-700">
//           Watermark Position
//         </label>
//         <select
//           className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
//           value={watermarkPosition}
//           onChange={(e) => setWatermarkPosition(e.target.value)}
//         >
//           <option value="top-left">Top Left</option>
//           <option value="top-right">Top Right</option>
//           <option value="center">Center</option>
//           <option value="bottom-left">Bottom Left</option>
//           <option value="bottom-right">Bottom Right</option>
//         </select>
//       </div>

//       {/* Submit Button */}
//       <div className="text-right mt-6">
//         <button
//           onClick={handleUpdate}
//           className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-sm rounded shadow-md"
//         >
//           Update
//         </button>
//       </div>
//     </div>
//   );
// }
