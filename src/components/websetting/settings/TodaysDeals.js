// // import React from "react";
// // import BannerUpload from "./BannerUpload";


// // const TodaysDeals = () => {
// //   return (
// //    <>
// //     <div className="p-6 space-y-4">
// //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //           <BannerUpload
// //             title="Large Banner (Will be shown on large devices)"
// //             dimension="Minimum dimensions required: 1370px width X 242px height."
// //           />
// //           <BannerUpload
// //             title="Small Banner (Will be shown on small devices)"
// //             dimension="Minimum dimensions required: 400px width X 200px height."
// //           />
// //         </div>
// //       <div className="mt-4">
// //         <label className="block mb-2 font-medium">
// //           Products background color
// //         </label>
// //         <input
// //           type="text"
// //           placeholder="#FFBA00"
// //           className="border border-gray-300 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
// //         />
// //       </div>
// //       <div className="mt-4">
// //         <label className="block mb-2 font-medium">
// //           Today's Deal Banner Text Color
// //         </label>
// //         <div className="flex gap-4">
// //           <label className="flex items-center">
// //             <input
// //               type="radio"
// //               name="textColor"
// //               value="light"
// //               className="mr-2"
// //             />{" "}
// //             Light
// //           </label>
// //           <label className="flex items-center">
// //             <input
// //               type="radio"
// //               name="textColor"
// //               value="dark"
// //               className="mr-2"
// //             />{" "}
// //             Dark
// //           </label>
// //         </div>
// //       </div>
// //     </div>
// //    </>
// //   );
// // };

// // export default TodaysDeals;


// // import React, { useState } from "react";
// // import BannerUpload from "./BannerUpload";

// // const TodaysDeals = () => {
// //   const [backgroundColor, setBackgroundColor] = useState("#FFBA00");
// //   const [textColor, setTextColor] = useState("light");

// //   const handleSubmit = async () => {
// //     const data = {
// //       backgroundColor,
// //       textColor,
// //     };

// //     try {
// //       const response = await fetch("https://e-commerce-backend-1-0.onrender.com/api/todaydeal/createdeal", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(data),
// //       });

// //       const result = await response.json();
// //       if (response.ok) {
// //         alert("Today's Deal settings saved successfully!");
// //         console.log("Saved:", result);
// //       } else {
// //         alert("Failed to save settings.");
// //         console.error(result);
// //       }
// //     } catch (error) {
// //       console.error("Error:", error);
// //       alert("An error occurred while saving.");
// //     }
// //   };

// //   return (
// //     <div className="p-6 space-y-4">
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         <BannerUpload
// //           title="Large Banner (Will be shown on large devices)"
// //           dimension="Minimum dimensions required: 1370px width X 242px height."
// //         />
// //         <BannerUpload
// //           title="Small Banner (Will be shown on small devices)"
// //           dimension="Minimum dimensions required: 400px width X 200px height."
// //         />
// //       </div>

// //       <div className="mt-4">
// //         <label className="block mb-2 font-medium">Products background color</label>
// //         <input
// //           type="text"
// //           placeholder="#FFBA00"
// //           value={backgroundColor}
// //           onChange={(e) => setBackgroundColor(e.target.value)}
// //           className="border border-gray-300 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
// //         />
// //       </div>

// //       <div className="mt-4">
// //         <label className="block mb-2 font-medium">Today's Deal Banner Text Color</label>
// //         <div className="flex gap-4">
// //           <label className="flex items-center">
// //             <input
// //               type="radio"
// //               name="textColor"
// //               value="light"
// //               checked={textColor === "light"}
// //               onChange={() => setTextColor("light")}
// //               className="mr-2"
// //             />
// //             Light
// //           </label>
// //           <label className="flex items-center">
// //             <input
// //               type="radio"
// //               name="textColor"
// //               value="dark"
// //               checked={textColor === "dark"}
// //               onChange={() => setTextColor("dark")}
// //               className="mr-2"
// //             />
// //             Dark
// //           </label>
// //         </div>
// //       </div>

// //       <div className="mt-6">
// //         <button
// //           onClick={handleSubmit}
// //           className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
// //         >
// //           Save Settings
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TodaysDeals;

// // import React, { useState } from "react";
// // import BannerUpload from "./BannerUpload";

// // const TodaysDeals = () => {
// //   const [formState, setFormState] = useState({
// //     bgColor: "#FFBA00",
// //     textColor: "Light",
// //     largeBanner: null,
// //     smallBanner: null,
// //   });

// //   const handleImageChange = (name, file) => {
// //     setFormState((prev) => ({ ...prev, [name]: file }));
// //   };

// //   const handleSubmit = async () => {
// //     const formData = new FormData();
// //     formData.append("bgColor", formState.bgColor);
// //     formData.append("textColor", formState.textColor);
// //     if (formState.largeBanner) formData.append("largeBanner", formState.largeBanner);
// //     if (formState.smallBanner) formData.append("smallBanner", formState.smallBanner);

// //     try {
// //       const response = await fetch("https://e-commerce-backend-1-0.onrender.com/api/todaydeal/createdeal", {
// //         method: "POST",
// //         body: formData,
// //       });

// //       const result = await response.json();
// //       if (response.ok) {
// //         alert("Saved successfully!");
// //         console.log(result);
// //       } else {
// //         alert("Error saving: " + result.message);
// //       }
// //     } catch (err) {
// //       console.error("Error:", err);
// //       alert("Something went wrong.");
// //     }
// //   };

// //   return (
// //     <div className="p-6 space-y-4">
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         <BannerUpload
// //           title="Large Banner (Will be shown on large devices)"
// //           dimension="1370px width X 242px height"
// //           name="largeBanner"
// //           onImageChange={handleImageChange}
// //         />
// //         <BannerUpload
// //           title="Small Banner (Will be shown on small devices)"
// //           dimension="400px width X 200px height"
// //           name="smallBanner"
// //           onImageChange={handleImageChange}
// //         />
// //       </div>

// //       <div className="mt-4">
// //         <label className="block mb-2 font-medium">Products background color</label>
// //         <input
// //           type="text"
// //           value={formState.bgColor}
// //           onChange={(e) =>
// //             setFormState((prev) => ({ ...prev, bgColor: e.target.value }))
// //           }
// //           className="border border-gray-300 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
// //         />
// //       </div>

// //       <div className="mt-4">
// //         <label className="block mb-2 font-medium">Today's Deal Banner Text Color</label>
// //         <div className="flex gap-4">
// //           {["Light", "Dark"].map((option) => (
// //             <label key={option} className="flex items-center">
// //               {/* <input
// //                 type="radio"
// //                 name="textColor"
// //                 value={option}
// //                 checked={formState.textColor === option}
// //                 onChange={(e) =>
// //                   setFormState((prev) => ({ ...prev, textColor: e.target.value }))
// //                 }
// //                 className="mr-2"
// //               /> */}
// //               <input
// //                 type="radio"
// //                 name="textColor"
// //                 value={option}
// //                 checked={formState.textColor === option}
// //                 onChange={(e) =>
// //                   setFormState((prev) => ({ ...prev, textColor: e.target.value }))
// //                 }
// //                 className="mr-2 w-5 h-5"
// //               />
// //               {option}
// //             </label>
// //           ))}
// //         </div>
// //       </div>

// //       <div className="mt-6">
// //         <button
// //           onClick={handleSubmit}
// //           className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
// //         >
// //           Save Settings
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TodaysDeals;
// import React, { useState } from "react";
// import BannerUpload from "./BannerUpload";

// const TodaysDeals = () => {
//   const [formState, setFormState] = useState({
//     bgColor: "#FFBA00",
//     textColor: "Light",
//     largeBanner: null,
//     smallBanner: null,
//   });

//   const handleImageChange = (name, file) => {
//     setFormState((prev) => ({ ...prev, [name]: file }));
//   };

//   const handleSubmit = async () => {
//     const formData = new FormData();
//     formData.append("bgColor", formState.bgColor);
//     formData.append("textColor", formState.textColor);
//     if (formState.largeBanner) formData.append("largeBanner", formState.largeBanner);
//     if (formState.smallBanner) formData.append("smallBanner", formState.smallBanner);

//     try {
//       const response = await fetch("https://e-commerce-backend-1-0.onrender.com/api/todaydeal/createdeal", {
//         method: "POST",
//         body: formData,
//       });

//       const result = await response.json();
//       if (response.ok) {
//         alert("Saved successfully!");
//         console.log(result);
//       } else {
//         alert("Error saving: " + result.message);
//       }
//     } catch (err) {
//       console.error("Error:", err);
//       alert("Something went wrong.");
//     }
//   };

//   return (
//     <div className="p-8 max-w-3xl mx-auto bg-white rounded-lg shadow-lg space-y-6">
//       <h2 className="text-2xl font-semibold text-gray-800">Today's Deal Settings</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <BannerUpload
//           title="Large Banner (Shown on large devices)"
//           dimension="1370px width X 242px height"
//           name="largeBanner"
//           onImageChange={handleImageChange}
//         />
//         <BannerUpload
//           title="Small Banner (Shown on small devices)"
//           dimension="400px width X 200px height"
//           name="smallBanner"
//           onImageChange={handleImageChange}
//         />
//       </div>

//       <div className="mt-6">
//         <label className="block mb-2 text-lg font-medium text-gray-700">Products Background Color</label>
//         <input
//           type="text"
//           value={formState.bgColor}
//           onChange={(e) =>
//             setFormState((prev) => ({ ...prev, bgColor: e.target.value }))
//           }
//           className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//         />
//       </div>

//       <div className="mt-6">
//         <label className="block mb-2 text-lg font-medium text-gray-700">Today's Deal Banner Text Color</label>
//         <div className="flex space-x-6">
//           {["Light", "Dark"].map((option) => (
//             <label key={option} className="flex items-center space-x-2">
//               <input
//                 type="radio"
//                 name="textColor"
//                 value={option}
//                 checked={formState.textColor === option}
//                 onChange={(e) =>
//                   setFormState((prev) => ({ ...prev, textColor: e.target.value }))
//                 }
//                 className="w-5 h-5 border-gray-300 rounded-full checked:bg-blue-500 focus:ring-2 focus:ring-blue-500"
//               />
//               <span className="text-gray-800 font-medium">{option}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="mt-8 text-center">
//         <button
//           onClick={handleSubmit}
//           className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md transition-all focus:outline-none"
//         >
//           Save Settings
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TodaysDeals;
import React, { useState } from "react";
import BannerUpload from "./BannerUpload";

const TodaysDeals = () => {
  const [formState, setFormState] = useState({
    bgColor: "#FFBA00",
    textColor: "Light",
    largeBanner: null,
    smallBanner: null,
  });

  const handleImageChange = (name, file) => {
    setFormState((prev) => ({ ...prev, [name]: file }));
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("bgColor", formState.bgColor);
    formData.append("textColor", formState.textColor);
    if (formState.largeBanner) formData.append("largeBanner", formState.largeBanner);
    if (formState.smallBanner) formData.append("smallBanner", formState.smallBanner);

    try {
      const response = await fetch("https://e-commerce-backend-1-0.onrender.com/api/todaydeal/createdeal", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        alert("Saved successfully!");
        console.log(result);
      } else {
        alert("Error saving: " + result.message);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white rounded-lg shadow-lg space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Today's Deal Settings</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BannerUpload
          title="Large Banner (Shown on large devices)"
          dimension="1370px width X 242px height"
          name="largeBanner"
          onImageChange={handleImageChange}
        />
        <BannerUpload
          title="Small Banner (Shown on small devices)"
          dimension="400px width X 200px height"
          name="smallBanner"
          onImageChange={handleImageChange}
        />
      </div>

      <div className="mt-6">
        <label className="block mb-2 text-lg font-medium text-gray-700">Products Background Color</label>
        <input
          type="text"
          value={formState.bgColor}
          onChange={(e) =>
            setFormState((prev) => ({ ...prev, bgColor: e.target.value }))
          }
          className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
      </div>

      <div className="mt-6">
  <label className="block mb-2 text-lg font-medium text-gray-700">Today's Deal Banner Text Color</label>
  <div className="flex space-x-4">
    {["Light", "Dark"].map((option) => (
      <label
        key={option}
        className={`flex items-center cursor-pointer transition-all duration-300 transform ${formState.textColor === option ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"} rounded-full px-6 py-3 shadow-md hover:shadow-lg focus:outline-none`}
        onClick={() => setFormState((prev) => ({ ...prev, textColor: option }))}
      >
        <input
          type="radio"
          name="textColor"
          value={option}
          checked={formState.textColor === option}
          onChange={(e) =>
            setFormState((prev) => ({ ...prev, textColor: e.target.value }))
          }
          className="hidden"
        />
        <span className="text-lg font-medium">{option}</span>
      </label>
    ))}
  </div>
</div>


      <div className="mt-8 text-center">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md transition-all focus:outline-none"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default TodaysDeals;
