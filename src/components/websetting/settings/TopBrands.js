


// import React, { useState } from "react";
// import { PlusCircle, X, ChevronDown, ChevronUp } from "lucide-react";

// // Reusable BrandItem Component
// const BrandItem = ({ brand, onRemove }) => (
//   <div className="flex items-center gap-3 p-2 hover:bg-sky-500 hover:text-white rounded-lg transition-colors">
//     <span className="flex-1">{brand}</span>
//     <button
//       onClick={onRemove}
//       className="text-red-500 hover:text-red-700 transition-colors"
//       aria-label={`Remove ${brand}`}
//     >
//       <X size={20} />
//     </button>
//   </div>
// );

// // Reusable InputField Component
// const InputField = ({ value, onChange, placeholder }) => (
//   <input
//     type="text"
//     value={value}
//     onChange={onChange}
//     placeholder={placeholder}
//     className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
//   />
// );

// const BrandDropdown = () => {
//   const allBrands = [
//     "Ford",
//     "Chevrolet",
//     "Audi",
//     "Hyundai",
//     "Nissan",
//     "BMW",
//     "Mercedes-Benz",
//     "Toyota",
//     "Suzuki",
//     "Mitsubishi",
//     "Honda",
//     "Volvo",
//   ];

//   const [selectedBrands, setSelectedBrands] = useState([]);
//   const [newBrand, setNewBrand] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSelectBrand = (brand) => {
//     if (selectedBrands.length >= 12) {
//       setError("Maximum of 12 brands allowed.");
//       return;
//     }
//     if (!selectedBrands.includes(brand)) {
//       setSelectedBrands([...selectedBrands, brand]);
//       setError("");
//     }
//     setIsOpen(false);
//   };

//   const addCustomBrand = () => {
//     const trimmed = newBrand.trim();
//     if (!trimmed) {
//       setError("Brand name cannot be empty.");
//       return;
//     }
//     if (selectedBrands.includes(trimmed)) {
//       setError("Brand already selected.");
//       return;
//     }
//     if (selectedBrands.length >= 12) {
//       setError("Maximum of 12 brands allowed.");
//       return;
//     }
//     setSelectedBrands([...selectedBrands, trimmed]);
//     setNewBrand("");
//     setError("");
//   };

//   const removeBrand = (index) => {
//     setSelectedBrands(selectedBrands.filter((_, i) => i !== index));
//   };

//   const saveBrands = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch("https://e-commerce-backend-1-0.onrender.com/api/topbrands/create", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ brands: selectedBrands }),
//       });

//       if (!response.ok) throw new Error("Failed to save brands");
//       const result = await response.json();
//       console.log("Saved:", result);
//       alert("Brands saved successfully!");
//     } catch (err) {
//       console.error("Error saving brands:", err);
//       alert("Failed to save brands.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Brands (Max 12)</h2>

//       {/* Dropdown for selecting from predefined brands */}
//       <div className="relative">
//         <button
//           onClick={toggleDropdown}
//           className="w-full p-2 border border-gray-300 rounded-lg flex justify-between items-center hover:bg-gray-100 transition-colors"
//         >
//           Select Brand
//           {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//         </button>

//         {isOpen && (
//           <div className="absolute w-full bg-white border border-gray-300 rounded-lg mt-3 max-h-40 overflow-auto shadow-lg z-10">
//             {allBrands
//               .filter((brand) => !selectedBrands.includes(brand))
//               .map((brand, index) => (
//                 <div
//                   key={index}
//                   className="p-2 cursor-pointer hover:bg-blue-500 hover:text-white rounded-md transition"
//                   onClick={() => handleSelectBrand(brand)}
//                 >
//                   {brand}
//                 </div>
//               ))}
//           </div>
//         )}
//       </div>

//       {/* Add custom brand */}
//       <div className="flex gap-2 mt-4">
//         <InputField
//           value={newBrand}
//           onChange={(e) => setNewBrand(e.target.value)}
//           placeholder="Add custom brand"
//         />
//         <button
//           onClick={addCustomBrand}
//           className="p-2 text-white bg-sky-500 rounded-lg hover:bg-sky-600 transition-colors"
//         >
//           <PlusCircle size={20} />
//         </button>
//       </div>

//       {/* Selected Brands */}
//       <div className="mt-4">
//         {selectedBrands.map((brand, index) => (
//           <BrandItem key={index} brand={brand} onRemove={() => removeBrand(index)} />
//         ))}
//       </div>

//       {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

//       <button
//         onClick={saveBrands}
//         disabled={loading}
//         className="w-40 p-2 mt-4 text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50"
//       >
//         {loading ? "Saving..." : "Save"}
//       </button>
//     </div>
//   );
// };

// export default BrandDropdown;


import React, { useState } from "react";
import { PlusCircle, X, ChevronDown, ChevronUp } from "lucide-react";

// Brand item component
const BrandItem = ({ brand, onRemove }) => (
  <div className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-lg hover:bg-sky-500 hover:text-white transition">
    <span className="text-base">{brand}</span>
    <button
      onClick={onRemove}
      className="text-red-500 hover:text-white"
      aria-label={`Remove ${brand}`}
    >
      <X size={18} />
    </button>
  </div>
);

// Input field component
const InputField = ({ value, onChange, placeholder }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
  />
);

const BrandDropdown = () => {
  const allBrands = [
    "Ford", "Chevrolet", "Audi", "Hyundai", "Nissan", "BMW",
    "Mercedes-Benz", "Toyota", "Suzuki", "Mitsubishi", "Honda", "Volvo"
  ];

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [newBrand, setNewBrand] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectBrand = (brand) => {
    if (selectedBrands.length >= 12) {
      setError("Maximum of 12 brands allowed.");
      return;
    }
    if (!selectedBrands.includes(brand)) {
      setSelectedBrands([...selectedBrands, brand]);
      setError("");
    }
    setIsOpen(false);
  };

  const addCustomBrand = () => {
    const trimmed = newBrand.trim();
    if (!trimmed) {
      setError("Brand name cannot be empty.");
      return;
    }
    if (selectedBrands.includes(trimmed)) {
      setError("Brand already selected.");
      return;
    }
    if (selectedBrands.length >= 12) {
      setError("Maximum of 12 brands allowed.");
      return;
    }
    setSelectedBrands([...selectedBrands, trimmed]);
    setNewBrand("");
    setError("");
  };

  const removeBrand = (index) => {
    setSelectedBrands(selectedBrands.filter((_, i) => i !== index));
  };

  const saveBrands = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://e-commerce-backend-1-0.onrender.com/api/topbrands/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ brands: selectedBrands }),
      });

      if (!response.ok) throw new Error("Failed to save brands");
      const result = await response.json();
      alert("Brands saved successfully!");
      console.log("Saved:", result);
    } catch (err) {
      console.error(err);
      alert("Failed to save brands.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-8 my-10 bg-white rounded-2xl shadow-xl border border-gray-200">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Top Brands (Max 12)</h2>

      {/* Dropdown */}
      <div className="relative mb-5">
        <button
          onClick={toggleDropdown}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg flex justify-between items-center text-base hover:bg-gray-100 transition"
        >
          Select Brand
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {isOpen && (
          <div className="absolute w-full bg-white border border-gray-300 rounded-lg mt-2 max-h-48 overflow-auto shadow-md z-20">
            {allBrands
              .filter((brand) => !selectedBrands.includes(brand))
              .map((brand, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectBrand(brand)}
                  className="px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white transition"
                >
                  {brand}
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Add Custom Brand */}
      <div className="flex gap-3 items-center mb-5">
        <InputField
          value={newBrand}
          onChange={(e) => setNewBrand(e.target.value)}
          placeholder="Add custom brand"
        />
        <button
          onClick={addCustomBrand}
          className="p-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition"
        >
          <PlusCircle size={20} />
        </button>
      </div>

      {/* Selected Brands */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        {selectedBrands.map((brand, index) => (
          <BrandItem key={index} brand={brand} onRemove={() => removeBrand(index)} />
        ))}
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Save Button */}
      <button
        onClick={saveBrands}
        disabled={loading}
        className="w-full sm:w-48 px-4 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save Brands"}
      </button>
    </div>
  );
};

export default BrandDropdown;
