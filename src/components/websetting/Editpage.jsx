// import React, { useState, useEffect } from "react";
// import {
//   FaBold, FaItalic, FaUnderline, FaListUl, FaListOl,
//   FaUndo, FaRedo, FaLink, FaImage, FaVideo, FaTable, FaCode
// } from "react-icons/fa";
// import { MdFormatColorText, MdOutlineFormatClear } from "react-icons/md";
// import { useParams } from "react-router-dom";

// export default function AddNewPageForm() {
//   const { id } = useParams();

//   const [form, setForm] = useState({
//     title: "",
//     slug: "",
//     content: "",
//     metaTitle: "",
//     metaDescription: "",
//     metaKeywords: "",
//   });
//   const [fileName, setFileName] = useState("Choose file");
//   const [metaImage, setMetaImage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false); // Loading state

//   // Fetch existing page data if editing
//   useEffect(() => {
//     async function fetchPage() {
//       try {
//         const res = await fetch(`http://localhost:5000/api/websetpage/websetpage/${id}`);
//         console.log('API response:', res); // Log the response object
//         if (!res.ok) {
//           throw new Error("Failed to fetch page data");
//         }
//         const data = await res.json();
//         console.log('Fetched data:', data); // Log the actual data
//         setForm({
//           title: data.title || "",
//           slug: data.slug || "",
//           content: data.content || "",
//           metaTitle: data.metaTitle || "",
//           metaDescription: data.metaDescription || "",
//           metaKeywords: data.metaKeywords || "",
//         });
//         setFileName(data.metaImageName || "Choose file");
//       } catch (error) {
//         console.error("Error fetching page data:", error);
//         alert("Failed to load page data. Please try again.");
//       }
//     }
//     if (id) fetchPage();
//   }, [id]);
  

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setMetaImage(file);
//     setFileName(file ? file.name : "Choose file");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Validation: Ensure title and slug are not empty
//     if (!form.title || form.title.trim() === "") {
//       alert("Title is required.");
//       return;
//     }
//     if (!form.slug || form.slug.trim() === "") {
//       alert("Slug is required.");
//       return;
//     }
    
//     try {
//       setIsLoading(true); // Set loading state
//       const formData = new FormData();
//       Object.entries(form).forEach(([key, value]) => {
//         formData.append(key, value);
//       });
      
//       // Append metaImage with correct name format (for backend compatibility)
//       if (metaImage) {
//         formData.append("seo[metaImage]", metaImage);
//       }
  
//       const res = await fetch(`http://localhost:5000/api/websetpage/${id}`, {
//         method: "PUT",
//         body: formData,
//       });
  
//       if (!res.ok) {
//         throw new Error("Failed to update page");
//       }
  
//       const data = await res.json();
//       if (data.success) {
//         alert("Page updated successfully!");
//       } else {
//         alert("Error: " + data.message || "Unknown error");
//       }
//     } catch (error) {
//       console.error("Error updating page:", error);
//       alert(`An error occurred: ${error.message}`);
//     } finally {
//       setIsLoading(false); // Reset loading state
//     }
//   };

//   return (
//     <div className="p-4 max-w-6xl mx-auto">
//       <h2 className="text-2xl font-semibold mb-4">Edit New Page</h2>
//       <div className="bg-white shadow rounded-lg p-6">
//         <h3 className="text-lg font-medium mb-4">Page Content</h3>

//         <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
//           {/* Title */}
//           <div className="flex flex-col md:flex-row md:items-center gap-3">
//             <label className="md:w-1/4 font-medium text-sm text-gray-700">Title <span className="text-red-500">*</span></label>
//             <input name="title" value={form.title} onChange={handleChange} type="text" placeholder="Title" className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none" />
//           </div>

//           {/* Slug */}
//           <div className="flex flex-col md:flex-row md:items-center gap-3">
//             <label className="md:w-1/4 font-medium text-sm text-gray-700">Link <span className="text-red-500">*</span></label>
//             <div className="flex w-full md:w-3/4">
//               <span className="flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 text-gray-600 rounded-l">
//                 https://demo.activeitzone.com/ecommerce/
//               </span>
//               <input name="slug" value={form.slug} onChange={handleChange} type="text" placeholder="Slug" className="flex-1 border border-gray-300 rounded-r px-3 py-2 focus:outline-none " />
//             </div>
//           </div>

//           {/* Content */}
//           <div className="flex flex-col md:flex-row gap-3">
//             <label className="md:w-1/4 font-medium text-sm text-gray-700">Add Content <span className="text-red-500">*</span></label>
//             <div className="w-full md:w-3/4 border border-gray-300 rounded">
//               {/* Toolbar */}
//               <div className="flex flex-wrap items-center gap-2 p-2 border-b border-gray-200 bg-gray-50">
//                 {[FaBold, FaItalic, FaUnderline, FaListUl, FaListOl, MdOutlineFormatClear, MdFormatColorText, FaTable, FaLink, FaImage, FaVideo, FaCode, FaUndo, FaRedo].map((Icon, idx) => (
//                   <button key={idx} type="button" className="p-2 text-gray-600 hover:bg-gray-200 rounded">
//                     <Icon size={16} />
//                   </button>
//                 ))}
//               </div>
//               <textarea name="content" value={form.content} onChange={handleChange} rows="10" placeholder="Content.." className="w-full p-3 focus:outline-none resize-none"></textarea>
//             </div>
//           </div>

//           <h3 className="text-lg font-medium mb-4">SEO</h3>

//           {/* Meta Title */}
//           <div className="flex flex-col md:flex-row md:items-center gap-3">
//             <label className="md:w-1/4 font-medium text-sm text-gray-700">Meta Title</label>
//             <input name="metaTitle" value={form.metaTitle} onChange={handleChange} type="text" placeholder="Meta Title" className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none " />
//           </div>

//           {/* Meta Description */}
//           <div className="flex flex-col md:flex-row md:items-center gap-3">
//             <label className="md:w-1/4 font-medium text-sm text-gray-700">Meta Description</label>
//             <textarea name="metaDescription" value={form.metaDescription} onChange={handleChange} placeholder="Description" className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none" />
//           </div>

//           {/* Keywords */}
//           <div className="flex flex-col md:flex-row md:items-center gap-3">
//             <label className="md:w-1/4 font-medium text-sm text-gray-700">Keywords</label>
//             <textarea name="metaKeywords" value={form.metaKeywords} onChange={handleChange} placeholder="Keywords,Keywords" className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none" />
//           </div>

//           {/* Meta Image */}
//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
//             <label htmlFor="metaImage" className="w-full sm:w-40 text-gray-700 font-medium">Meta Image</label>
//             <div className="relative w-full sm:flex-1">
//               <input type="file" id="metaImage" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer z-10 w-full h-full" />
//               <div className="flex border rounded overflow-hidden w-full h-[42px]">
//                 <div className="bg-gray-200 text-gray-700 px-5 py-2 text-sm flex items-center whitespace-nowrap">Browse</div>
//                 <div className="px-4 py-2 text-sm text-gray-600 bg-white w-full truncate flex items-center">{fileName}</div>
//               </div>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-end">
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
//             >
//               {isLoading ? "Saving..." : "Save"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import {
  FaBold, FaItalic, FaUnderline, FaListUl, FaListOl,
  FaUndo, FaRedo, FaLink, FaImage, FaVideo, FaTable, FaCode
} from "react-icons/fa";
import { MdFormatColorText, MdOutlineFormatClear } from "react-icons/md";
import { useParams } from "react-router-dom";

export default function AddNewPageForm() {
  const { id } = useParams();

  const [form, setForm] = useState({
    title: "",
    slug: "",
    content: "",
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
  });
  const [fileName, setFileName] = useState("Choose file");
  const [metaImage, setMetaImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // Fetch existing page data if editing
  useEffect(() => {
    async function fetchPage() {
      try {
        const res = await fetch(`http://localhost:5000/api/websetpage/websetpage/${id}`);
        console.log('API response:', res); // Log the response object
        if (!res.ok) {
          throw new Error("Failed to fetch page data");
        }
        const data = await res.json();
        console.log('Fetched data:', data); // Log the actual data
        setForm({
          title: data.title || "",
          slug: data.slug || "",
          content: data.content || "",
          metaTitle: data.metaTitle || "",
          metaDescription: data.metaDescription || "",
          metaKeywords: data.metaKeywords || "",
        });
        setFileName(data.metaImageName || "Choose file");
      } catch (error) {
        console.error("Error fetching page data:", error);
        alert("Failed to load page data. Please try again.");
      }
    }
    if (id) fetchPage();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setMetaImage(file);
    setFileName(file ? file.name : "Choose file");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation: Ensure title and slug are not empty
    if (!form.title || form.title.trim() === "") {
      alert("Title is required.");
      return;
    }
    if (!form.slug || form.slug.trim() === "") {
      alert("Slug is required.");
      return;
    }
    
    try {
      setIsLoading(true); // Set loading state
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });
      
      // Append metaImage with correct name format (for backend compatibility)
      if (metaImage) {
        formData.append("seo[metaImage]", metaImage);
      }
  
      const res = await fetch(`http://localhost:5000/api/websetpage/${id}`, {
        method: "PUT",
        body: formData,
      });
  
      if (!res.ok) {
        throw new Error("Failed to update page");
      }
  
      const data = await res.json();
      if (data.success) {
        alert("Page updated successfully!");
      } else {
        alert("Error: " + data.message || "Unknown error");
      }
    } catch (error) {
      console.error("Error updating page:", error);
      alert(`An error occurred: ${error.message}`);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Edit New Page</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium mb-4">Page Content</h3>

        <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
          {/* Title */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">Title <span className="text-red-500">*</span></label>
            <input name="title" value={form.title} onChange={handleChange} type="text" placeholder="Title" className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none" />
          </div>

          {/* Slug */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">Link <span className="text-red-500">*</span></label>
            <div className="flex w-full md:w-3/4">
              <span className="flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 text-gray-600 rounded-l">
                https://demo.activeitzone.com/ecommerce/
              </span>
              <input name="slug" value={form.slug} onChange={handleChange} type="text" placeholder="Slug" className="flex-1 border border-gray-300 rounded-r px-3 py-2 focus:outline-none " />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col md:flex-row gap-3">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">Add Content <span className="text-red-500">*</span></label>
            <div className="w-full md:w-3/4 border border-gray-300 rounded">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center gap-2 p-2 border-b border-gray-200 bg-gray-50">
                {[FaBold, FaItalic, FaUnderline, FaListUl, FaListOl, MdOutlineFormatClear, MdFormatColorText, FaTable, FaLink, FaImage, FaVideo, FaCode, FaUndo, FaRedo].map((Icon, idx) => (
                  <button key={idx} type="button" className="p-2 text-gray-600 hover:bg-gray-200 rounded">
                    <Icon size={16} />
                  </button>
                ))}
              </div>
              <textarea name="content" value={form.content} onChange={handleChange} rows="10" placeholder="Content.." className="w-full p-3 focus:outline-none resize-none"></textarea>
            </div>
          </div>

          <h3 className="text-lg font-medium mb-4">SEO</h3>

          {/* Meta Title */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">Meta Title</label>
            <input name="metaTitle" value={form.metaTitle} onChange={handleChange} type="text" placeholder="Meta Title" className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none " />
          </div>

          {/* Meta Description */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">Meta Description</label>
            <textarea name="metaDescription" value={form.metaDescription} onChange={handleChange} placeholder="Description" className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none" />
          </div>

          {/* Keywords */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">Keywords</label>
            <textarea name="metaKeywords" value={form.metaKeywords} onChange={handleChange} placeholder="Keywords,Keywords" className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none" />
          </div>

          {/* Meta Image */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
            <label htmlFor="metaImage" className="w-full sm:w-40 text-gray-700 font-medium">Meta Image</label>
            <div className="relative w-full sm:flex-1">
              <input type="file" id="metaImage" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer z-10 w-full h-full" />
              <div className="flex border rounded overflow-hidden w-full h-[42px]">
                <div className="bg-gray-200 text-gray-700 px-5 py-2 text-sm flex items-center whitespace-nowrap">Browse</div>
                <div className="px-4 py-2 text-sm text-gray-600 bg-white w-full truncate flex items-center">{fileName}</div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              {isLoading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
