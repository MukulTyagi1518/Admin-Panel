// import React, { useState } from "react";
// import { PlusCircle, X, ChevronDown, ChevronUp } from "lucide-react";

// // Reusable BrandItem Component
// const BrandItem = ({ brand, onRemove }) => {
//   return (
//     <div className="flex items-center gap-3 p-2 hover:bg-sky-500 hover:text-white rounded-lg  transition-colors">
//       <span className="flex-1">{brand}</span>
//       <button
//         onClick={onRemove}
//         className="text-red-500 hover:text-red-700 transition-colors"
//         aria-label={`Remove ${brand}`}
//       >
//         <X size={20} />
//       </button>
//     </div>
//   );
// };

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
//   const [brands, setBrands] = useState([
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
//   ]);
//   const [newBrand, setNewBrand] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const [error, setError] = useState("");

//   const addBrand = () => {
//     if (!newBrand.trim()) {
//       setError("Brand name cannot be empty.");
//       return;
//     }
//     if (brands.includes(newBrand)) {
//       setError("Brand already exists.");
//       return;
//     }
//     if (brands.length >= 12) {
//       setError("Maximum of 12 brands allowed.");
//       return;
//     }
//     setBrands([...brands, newBrand]);
//     setNewBrand("");
//     setError("");
//   };

//   const removeBrand = (index) => {
//     setBrands(brands.filter((_, i) => i !== index));
//   };

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const saveBrands = () => {
//     alert("Brands saved: " + brands);
//   };

//   return (
//     <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6">
//         Top Brands (Max 12)
//       </h2>
//       <div className="relative">
//         <button
//           onClick={toggleDropdown}
//           className="w-full p-2 border border-gray-300 rounded-lg flex justify-between items-center hover:bg-gray-100 transition-colors"
//           aria-label={isOpen ? "Close brand dropdown" : "Open brand dropdown"}
//         >
//           Select Brand
//           {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//         </button>
//         {isOpen && (
//           <div className="absolute w-full bg-white border border-gray-300 rounded-lg mt-3 max-h-40 overflow-auto shadow-lg z-10">
//             {brands.map((brand, index) => (
//               <BrandItem
//                 key={index}
//                 brand={brand}
//                 onRemove={() => {
//                   removeBrand(index);
//                   setIsOpen(false); // Close dropdown after removal
//                 }}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//       <div className="flex gap-2 mt-4">
//         <InputField
//           value={newBrand}
//           onChange={(e) => setNewBrand(e.target.value)}
//           placeholder="Add a brand"
//         />
//         <button
//           onClick={addBrand}
//           className="p-2 text-white bg-sky-500 rounded-lg hover:bg-sky-600 transition-colors"
//           aria-label="Add brand"
//         >
//           <PlusCircle size={20} />
//         </button>
//       </div>
//       {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//       <button
//         onClick={saveBrands}
//         className="w-40 p-2 mt-4 text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors"
//       >
//         Save
//       </button>
//     </div>
//   );
// };

// export default BrandDropdown;



import React, { useState } from "react";
import { PlusCircle, X, ChevronDown, ChevronUp } from "lucide-react";

// Reusable BrandItem Component
const BrandItem = ({ brand, onRemove }) => (
  <div className="flex items-center gap-3 p-2 hover:bg-sky-500 hover:text-white rounded-lg transition-colors">
    <span className="flex-1">{brand}</span>
    <button
      onClick={onRemove}
      className="text-red-500 hover:text-red-700 transition-colors"
      aria-label={`Remove ${brand}`}
    >
      <X size={20} />
    </button>
  </div>
);

// Reusable InputField Component
const InputField = ({ value, onChange, placeholder }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
  />
);

const BrandDropdown = () => {
  const allBrands = [
    "Ford",
    "Chevrolet",
    "Audi",
    "Hyundai",
    "Nissan",
    "BMW",
    "Mercedes-Benz",
    "Toyota",
    "Suzuki",
    "Mitsubishi",
    "Honda",
    "Volvo",
  ];

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [newBrand, setNewBrand] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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
      const response = await fetch("http://localhost:5000/api/topbrands/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ brands: selectedBrands }),
      });

      if (!response.ok) throw new Error("Failed to save brands");
      const result = await response.json();
      console.log("Saved:", result);
      alert("Brands saved successfully!");
    } catch (err) {
      console.error("Error saving brands:", err);
      alert("Failed to save brands.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Brands (Max 12)</h2>

      {/* Dropdown for selecting from predefined brands */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="w-full p-2 border border-gray-300 rounded-lg flex justify-between items-center hover:bg-gray-100 transition-colors"
        >
          Select Brand
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {isOpen && (
          <div className="absolute w-full bg-white border border-gray-300 rounded-lg mt-3 max-h-40 overflow-auto shadow-lg z-10">
            {allBrands
              .filter((brand) => !selectedBrands.includes(brand))
              .map((brand, index) => (
                <div
                  key={index}
                  className="p-2 cursor-pointer hover:bg-blue-500 hover:text-white rounded-md transition"
                  onClick={() => handleSelectBrand(brand)}
                >
                  {brand}
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Add custom brand */}
      <div className="flex gap-2 mt-4">
        <InputField
          value={newBrand}
          onChange={(e) => setNewBrand(e.target.value)}
          placeholder="Add custom brand"
        />
        <button
          onClick={addCustomBrand}
          className="p-2 text-white bg-sky-500 rounded-lg hover:bg-sky-600 transition-colors"
        >
          <PlusCircle size={20} />
        </button>
      </div>

      {/* Selected Brands */}
      <div className="mt-4">
        {selectedBrands.map((brand, index) => (
          <BrandItem key={index} brand={brand} onRemove={() => removeBrand(index)} />
        ))}
      </div>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <button
        onClick={saveBrands}
        disabled={loading}
        className="w-40 p-2 mt-4 text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save"}
      </button>
    </div>
  );
};

export default BrandDropdown;
