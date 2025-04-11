// import React, { useState } from "react";

// const ShippingConfiguration = () => {
//   const [selectedShippingMethod, setSelectedShippingMethod] = useState("");

//   const handleShippingMethodChange = (event) => {
//     setSelectedShippingMethod(event.target.value);
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Shipping Method Section */}
//         <div className="bg-white p-6 rounded-md shadow-md border w-full">
//           <h2 className=" font-semibold text-gray-800 pb-2 border-b border-blue-500 mb-4">
//             Select Shipping Method
//           </h2>
//           <div className="space-y-4">
//             {[
//               "Product Wise Shipping Cost",
//               // "Flat Rate Shipping Cost",
//               "Seller Wise Flat Shipping Cost",
//               "Area Wise Flat Shipping Cost",
//               "Carrier Wise Shipping Cost",
//             ].map((method, index) => (
//               <label
//                 key={index}
//                 className="flex items-center space-x-3 text-gray-700 text-sm "
//               >
//                 <input
//                   type="radio"
//                   name="shipping"
//                   value={method}
//                   checked={selectedShippingMethod === method}
//                   onChange={handleShippingMethodChange}
//                   className="h-5 w-5 text-blue-600 accent-blue-500"
//                 />
//                 <span>{method}</span>
//               </label>
//             ))}
//           </div>
//           <div className="mt-6 flex justify-end"> {/* Added flex and justify-end */}
//             <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded">
//               Save
//             </button>
//           </div>
//         </div>

//         {/* Notes Section */}
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h3 className="font-semibold mb-3">Note</h3>
//           <ul className="list-disc pl-5 text-gray-700 space-y-2">
//             <li>1. Product Wise Shipping Cost calculation: Shipping cost is calculate by addition of each product shipping cost.</li>
//             <li>2. Flat Rate Shipping Cost calculation: How many products a customer purchase, doesn't matter. Shipping cost is fixed.</li>
//             <li>3. Seller Wise Flat Shipping Cost calculation: Fixed rate for each seller. If customers purchase 2 product from two seller shipping cost is calculated by addition of each seller flat shipping cost.</li>
//             <li>4. Area Wise Flat Shipping Cost calculation: Fixed rate for each area. If customers purchase multiple products from one seller shipping cost is calculated by the customer shipping area. To configure area wise shipping cost go to Shipping Cities.</li>
//             <li>5. Carrier Based Shipping Cost calculation: Shipping cost calculate in addition with carrier. In each carrier you can set free shipping cost or can set weight range or price range shipping cost. To configure carrier based shipping cost go to Shipping Carriers.</li>
//           </ul>
//         </div>

//         {/* Flat Rate Cost Section */}
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h3 className="font-semibold mb-3">Flat Rate Cost</h3>
//           <input type="text" className="w-full border p-2 rounded-md" defaultValue="5" />
//           <div className="mt-4 flex justify-end"> {/* Added flex and justify-end */}
//             <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">Save</button>
//           </div>
//         </div>

//         {/* Flat Rate Cost Note */}
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h3 className="font-semibold mb-3">Note</h3>
//           <p className="text-gray-700">Flat rate shipping cost is applicable if Flat rate shipping is enabled.</p>
//         </div>

//         {/* Admin Shipping Cost Section */}
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h3 className="font-semibold mb-3">Shipping Cost for Admin Products</h3>
//           <input type="text" className="w-full border p-2 rounded-md" defaultValue="10" />
//           <div className="mt-4 flex justify-end"> {/* Added flex and justify-end */}
//             <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">Save</button>
//           </div>
//         </div>

//         {/* Admin Shipping Cost Note */}
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h3 className="font-semibold mb-3">Note</h3>
//           <p className="text-gray-700">Shipping cost for admin is applicable if Seller wise shipping cost is enabled.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShippingConfiguration;


import React, { useState } from "react";
import axios from "axios";

const ShippingConfiguration = () => {
  const [selectedShippingMethod, setSelectedShippingMethod] = useState("");
  const [flatRateCost, setFlatRateCost] = useState(5);
  const [adminProductsCost, setAdminProductsCost] = useState(10);

  const handleShippingMethodChange = (event) => {
    setSelectedShippingMethod(event.target.value);
  };

  // Handle save API call
  const handleSaveShippingMethod = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/shippingConfiguration/create", {
        shippingMethods: selectedShippingMethod,
        flatRateCost,
        adminProductsCost,
      });

      if (response.data.success) {
        alert("Shipping Configuration saved successfully!");
      }
    } catch (error) {
      console.error("Error saving shipping configuration", error);
      alert("Failed to save shipping configuration.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Shipping Method Section */}
        <div className="bg-white p-6 rounded-md shadow-md border w-full">
          <h2 className="font-semibold text-gray-800 pb-2 border-b border-blue-500 mb-4">
            Select Shipping Method
          </h2>
          <div className="space-y-4">
            {[
              "Product Wise Shipping Cost",
              // "Flat Rate Shipping Cost",
              "Seller Wise Flat Shipping Cost",
              "Area Wise Flat Shipping Cost",
              "Carrier Wise Shipping Cost",
            ].map((method, index) => (
              <label key={index} className="flex items-center space-x-3 text-gray-700 text-sm ">
                <input
                  type="radio"
                  name="shipping"
                  value={method}
                  checked={selectedShippingMethod === method}
                  onChange={handleShippingMethodChange}
                  className="h-5 w-5 text-blue-600 accent-blue-500"
                />
                <span>{method}</span>
              </label>
            ))}
          </div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleSaveShippingMethod}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
            >
              Save
            </button>
          </div>
        </div>

        {/* Notes Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-3">Note</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>1. Product Wise Shipping Cost calculation: Shipping cost is calculate by addition of each product shipping cost.</li>
            <li>2. Flat Rate Shipping Cost calculation: How many products a customer purchase, doesn't matter. Shipping cost is fixed.</li>
            <li>3. Seller Wise Flat Shipping Cost calculation: Fixed rate for each seller. If customers purchase 2 product from two seller shipping cost is calculated by addition of each seller flat shipping cost.</li>
            <li>4. Area Wise Flat Shipping Cost calculation: Fixed rate for each area. If customers purchase multiple products from one seller shipping cost is calculated by the customer shipping area. To configure area wise shipping cost go to Shipping Cities.</li>
            <li>5. Carrier Based Shipping Cost calculation: Shipping cost calculate in addition with carrier. In each carrier you can set free shipping cost or can set weight range or price range shipping cost. To configure carrier based shipping cost go to Shipping Carriers.</li>
          </ul>
        </div>

        {/* Flat Rate Cost Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-3">Flat Rate Cost</h3>
          <input
            type="text"
            className="w-full border p-2 rounded-md"
            value={flatRateCost}
            onChange={(e) => setFlatRateCost(e.target.value)}
          />
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleSaveShippingMethod}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>
          </div>
        </div>

        {/* Flat Rate Cost Note */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-3">Note</h3>
          <p className="text-gray-700">Flat rate shipping cost is applicable if Flat rate shipping is enabled.</p>
        </div>

        {/* Admin Shipping Cost Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-3">Shipping Cost for Admin Products</h3>
          <input
            type="text"
            className="w-full border p-2 rounded-md"
            value={adminProductsCost}
            onChange={(e) => setAdminProductsCost(e.target.value)}
          />
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleSaveShippingMethod}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>
          </div>
        </div>

        {/* Admin Shipping Cost Note */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-3">Note</h3>
          <p className="text-gray-700">Shipping cost for admin is applicable if Seller wise shipping cost is enabled.</p>
        </div>
      </div>
    </div>
  );
};

export default ShippingConfiguration;
