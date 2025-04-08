// import React, { useState } from "react";
// import { FaPlus, FaMinus } from "react-icons/fa";

// const ApprovedRequestTable = () => {
//   const approvedRequests = [
//     {
//       id: 1,
//       orderCode: "20220420-07073292",
//       sellerName: "Filon Asset Store",
//       productImage: "https://via.placeholder.com/50",
//       productName: "Berne Men's Heritage Thermal-Lined Full-Zip Hooded Sweatshirt",
//       price: "$12.150",
//       sellerApproval: "Pending",
//       adminApproval: "Approved",
//       refundStatus: "Paid",
//     },
//     {
//       id: 2,
//       orderCode: "20220420-07224759",
//       sellerName: "Filon Asset Store",
//       productImage: "https://via.placeholder.com/50",
//       productName: "Berne Men's Heritage Thermal-Lined Full-Zip Hooded Sweatshirt",
//       price: "$12.150",
//       sellerApproval: "Approved",
//       adminApproval: "Approved",
//       refundStatus: "Paid",
//     },
//   ];

//   const [expandedRow, setExpandedRow] = useState(null);

//   const toggleRow = (id) => {
//     setExpandedRow(expandedRow === id ? null : id);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="bg-white rounded-lg overflow-hidden">
//         <h2 className="text-xl font-semibold px-4 py-3 border-b">Approved Request</h2>
//         <div className="overflow-x-auto">
//           {/* Desktop View */}
//           <table className="min-w-full w-full bg-white border border-gray-200 hidden md:table">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="px-4 py-2 text-left border">#</th>
//                 <th className="px-4 py-2 text-left border">Order Code</th>
//                 <th className="px-4 py-2 text-left border">Seller Name</th>
//                 <th className="px-4 py-2 text-left border">Product</th>
//                 <th className="px-4 py-2 text-left border">Price</th>
//                 <th className="px-4 py-2 text-left border">Seller Approval</th>
//                 <th className="px-4 py-2 text-left border">Admin Approval</th>
//                 <th className="px-4 py-2 text-left border">Refund Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {approvedRequests.map((request, index) => (
//                 <tr key={request.id} className="border-t">
//                   <td className="px-4 py-3 border">{index + 1}</td>
//                   <td className="px-4 py-3 border">{request.orderCode}</td>
//                   <td className="px-4 py-3 border">{request.sellerName}</td>
//                   <td className="px-4 py-3 flex items-center space-x-3">
//                     <img src={request.productImage} alt={request.productName} className="w-10 h-10 object-cover" />
//                     <span className="text-blue-500 hover:underline">{request.productName}</span>
//                   </td>
//                   <td className="px-3 py-3 border">{request.price}</td>
//                   <td className="px-4 py-2 border text-center">
//                     <span className={`px-2 py-1 text-white rounded text-sm ${request.sellerApproval === 'Pending' ? 'bg-blue-500' : 'bg-green-500'}`}>{request.sellerApproval}</span>
//                   </td>
//                   <td className="px-4 py-2 border text-center">
//                     <span className="px-2 py-1 text-white bg-green-500 rounded text-sm">{request.adminApproval}</span>
//                   </td>
//                   <td className="px-4 py-2 border text-center">
//                     <span className="px-2 py-1 text-white bg-green-500 rounded text-sm">{request.refundStatus}</span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Mobile View */}
//           <div className="md:hidden">
//             {approvedRequests.map((request) => (
//               <div key={request.id} className="border-b py-2">
//                 <div className="flex items-center justify-between p-3">
//                   <button onClick={() => toggleRow(request.id)} className="text-gray-600 text-lg">
//                     {expandedRow === request.id ? <FaMinus /> : <FaPlus />}
//                   </button>
//                   <div className="flex items-center space-x-3">
//                     <img src={request.productImage} alt={request.productName} className="w-12 h-12 object-cover" />
//                     <span className="text-blue-500 font-semibold">{request.productName}</span>
//                   </div>
//                 </div>
//                 {expandedRow === request.id && (
//                   <div className="p-3 bg-gray-50">
//                     {[
//                       ["Order Code", request.orderCode],
//                       ["Seller Name", request.sellerName],
//                       ["Price", request.price],
//                       ["Seller Approval", request.sellerApproval],
//                       ["Admin Approval", request.adminApproval],
//                       ["Refund Status", request.refundStatus]
//                     ].map(([title, value], i) => (
//                       <div key={i} className="flex justify-between py-1">
//                         <span className="font-semibold">{title}:</span>
//                         <span>{value}</span>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApprovedRequestTable;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus, FaMinus } from "react-icons/fa";

const ApprovedRequestTable = () => {
  const [approvedRequests, setApprovedRequests] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const toggleRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  useEffect(() => {
    const fetchApprovedRequests = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/refund/refunds/approved"); // 🔁 Replace with actual endpoint
        console.log("API Response:", response.data); // ✅ Debugging
        setApprovedRequests(response.data); // If the API returns { data: [...] }, use response.data.data
      } catch (err) {
        console.error("Failed to fetch approved requests", err);
        setError("Failed to load approved requests.");
      } finally {
        setLoading(false);
      }
    };

    fetchApprovedRequests();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg overflow-hidden">
        <h2 className="text-xl font-semibold px-4 py-3 border-b">Approved Request</h2>

        {loading ? (
          <p className="p-4">Loading...</p>
        ) : error ? (
          <p className="p-4 text-red-600">{error}</p>
        ) : approvedRequests.length === 0 ? (
          <p className="p-4 text-gray-600">No approved requests found.</p>
        ) : (
          <div className="overflow-x-auto">
            {/* Desktop View */}
            <table className="min-w-full w-full bg-white border border-gray-200 hidden md:table">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left border">#</th>
                  <th className="px-4 py-2 text-left border">Order Code</th>
                  <th className="px-4 py-2 text-left border">Seller Name</th>
                  <th className="px-4 py-2 text-left border">Product</th>
                  <th className="px-4 py-2 text-left border">Price</th>
                  <th className="px-4 py-2 text-left border">Seller Approval</th>
                  <th className="px-4 py-2 text-left border">Admin Approval</th>
                  <th className="px-4 py-2 text-left border">Refund Status</th>
                </tr>
              </thead>
              <tbody>
                {approvedRequests.map((request, index) => (
                  <tr key={request.id} className="border-t">
                    <td className="px-4 py-3 border">{index + 1}</td>
                    <td className="px-4 py-3 border">{request.orderCode}</td>
                    <td className="px-4 py-3 border">{request.sellerName}</td>
                    <td className="px-4 py-3 flex items-center space-x-3">
                      <img src={request.productImage} alt={request.productName} className="w-10 h-10 object-cover" />
                      <span className="text-blue-500 hover:underline">{request.productName}</span>
                    </td>
                    <td className="px-3 py-3 border">{request.price}</td>
                    <td className="px-4 py-2 border text-center">
                      <span className={`px-2 py-1 text-white rounded text-sm ${request.sellerApproval === 'Pending' ? 'bg-blue-500' : 'bg-green-500'}`}>{request.sellerApproval}</span>
                    </td>
                    <td className="px-4 py-2 border text-center">
                      <span className="px-2 py-1 text-white bg-green-500 rounded text-sm">{request.adminApproval}</span>
                    </td>
                    <td className="px-4 py-2 border text-center">
                      <span className="px-2 py-1 text-white bg-green-500 rounded text-sm">{request.refundStatus}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Mobile View */}
            <div className="md:hidden">
              {approvedRequests.map((request) => (
                <div key={request.id} className="border-b py-2">
                  <div className="flex items-center justify-between p-3">
                    <button onClick={() => toggleRow(request.id)} className="text-gray-600 text-lg">
                      {expandedRow === request.id ? <FaMinus /> : <FaPlus />}
                    </button>
                    <div className="flex items-center space-x-3">
                      <img src={request.productImage} alt={request.productName} className="w-12 h-12 object-cover" />
                      <span className="text-blue-500 font-semibold">{request.productName}</span>
                    </div>
                  </div>
                  {expandedRow === request.id && (
                    <div className="p-3 bg-gray-50">
                      {[
                        ["Order Code", request.orderCode],
                        ["Seller Name", request.sellerName],
                        ["Price", request.price],
                        ["Seller Approval", request.sellerApproval],
                        ["Admin Approval", request.adminApproval],
                        ["Refund Status", request.refundStatus]
                      ].map(([title, value], i) => (
                        <div key={i} className="flex justify-between py-1">
                          <span className="font-semibold">{title}:</span>
                          <span>{value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApprovedRequestTable;
