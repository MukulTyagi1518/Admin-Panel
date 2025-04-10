// import { Download, EyeIcon, Trash2Icon } from 'lucide-react';
// import React from 'react'

// function TableRow({ order }) {
//     return (
//       <>
//       <tr key={order.id} className="hover:bg-gray-50">
//         <td className="px-6 py-4">
//           <input type="checkbox" className="rounded" />
//         </td>
//         <td className="px-6 py-4">
//           <div className="flex items-center">
//             <img
//               src={order.product.image}
//               alt={order.product.name}
//               className="w-12 h-12 rounded-md mr-3"
//             />
//             <div>
//               <div className="font-medium">{order.product.name}</div>
//               <div className="text-sm text-gray-500">
//                 Qty: {order.product.quantity}
//               </div>
//             </div>
//           </div>
//         </td>
//         <td className="px-6 py-4">
//           <div className="text-blue-500">{order.id}</div>
//           <div className="text-sm text-gray-500">Created {order.createdAt}</div>
//         </td>
//         <td className="px-6 py-4">
//           <div>${order.price.toLocaleString()}</div>
//           <div className="text-sm text-gray-500">
//             ${order.prepayment.toLocaleString()}
//           </div>
//         </td>
//         <td className="px-6 py-4">{order.seller}</td>
//         <td className="px-6 py-4">
//           <div>{order.customer.name}</div>
//           <div className="text-sm text-gray-500">{order.customer.email}</div>
//         </td>
//         <td className="px-6 py-4">
//           <span className="px-2 py-1 text-sm rounded-full bg-gray-100">
//             {order.status}
//           </span>
//         </td>
//         <td className="px-6 py-4">
//           <span
//             className={`px-2 py-1 text-sm rounded-full ${
//               order.refundable ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
//             }`}
//           >
//             {order.refundable ? "Refundable" : "Non-Refundable"}
//           </span>
//         </td>
//         <td className="px-6 py-4">
//           <div className="flex gap-2">
//             <button className="p-1 hover:bg-gray-100 rounded">
//               <EyeIcon className="w-5 h-5" />
//             </button>
//             <button className="p-1 hover:bg-gray-100 rounded">
//               <Download className="w-5 h-5" />
//             </button>
//             <button className="p-1 hover:bg-gray-100 rounded">
//               <Trash2Icon className="w-5 h-5" />
//             </button>
//           </div>
//         </td>
//       </tr>
//       </>
//     );
//   }

// export default TableRow


import { useState } from "react";
import { Download, EyeIcon, Trash2Icon, Plus, Minus } from "lucide-react";
import React from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

function TableRow({ order }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Main visible row */}
      <tr className="hover:bg-gray-50">
      <td className="px-2 py-3 md:hidden">
          <button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <EyeIcon size={18} color="blue" />: <EyeIcon size={18} color="blue" />}
          </button>
        </td>
        <td className="px-2 py-3">
          <input type="checkbox" className="rounded" />
        </td>

        {/* Product */}
        <td className="px-2 py-3">
          <div className="flex items-center">
            <img
              src={order.product.image}
              alt={order.product.name}
              className="w-10 h-10 rounded-md mr-2"
            />
            <div>
              <div className="font-medium text-sm">{order.product.name}</div>
              <div className="text-xs text-gray-500">Qty: {order.product.quantity}</div>
            </div>
          </div>
        </td>

        {/* Refund */}
        {/* <td className="px-2 py-3">
          <span
            className={`px-2 py-1 text-xs rounded-full ${
              order.refundable ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {order.refundable ? "Refundable" : "Non-Refundable"}
          </span>
        </td> */}

        {/* Expand icon (only for small screens) */}
        {/* <td className="px-2 py-3 md:hidden">
          <button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <EyeIcon size={18} color="blue" />: <EyeIcon size={18} color="blue" />}
          </button>
        </td> */}

        {/* Hidden columns (only visible on md+) */}
        <td className="px-6 py-3 hidden md:table-cell">
          <div className="text-blue-500">{order.id}</div>
          <div className="text-sm text-gray-500">Created {order.createdAt}</div>
        </td>
        <td className="px-6 py-3 hidden md:table-cell">
          <div>${order.price.toLocaleString()}</div>
          <div className="text-sm text-gray-500">
            Prepay: ${order.prepayment.toLocaleString()}
          </div>
        </td>
        <td className="px-6 py-3 hidden md:table-cell">{order.seller}</td>
        <td className="px-6 py-3 hidden md:table-cell">
          <div>{order.customer.name}</div>
          <div className="text-sm text-gray-500">{order.customer.email}</div>
        </td>
        <td className="px-6 py-3 hidden md:table-cell">{order.status}</td>
        <td className="px-2 py-3">
          <span
            className={`px-2 py-1 text-xs rounded-full ${
              order.refundable ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {order.refundable ? "Refundable" : "Non-Refundable"}
          </span>
        </td>
        
        <td className="px-6 py-3 hidden md:table-cell">
        
          <div className="flex gap-2">
           
                                <button className="btn8 view-btn8">
                                  <FaEye />
                                </button>
                                <button className="btn8 edit-btn8">
                                  <FaEdit/>
                                </button>
                                <button className="btn8 delete-btn8">
                                  <FaTrash />
                                </button>
                            
          </div>
        </td>
      </tr>

      {/* <Download className="text-green-400 hover:text-gray-500 cursor-pointer" />
                      <Trash className="text-red-400 hover:text-gray-500 cursor-pointer" onClick={() => handleDelete(order.id)} />
                      <EyeIcon className="text-cyan-400 hover:text-gray-600 cursor-pointer" /> */}
      {/* Expanded details row */}
      {isExpanded && (
        <tr className="md:hidden bg-gray-50">
          <td colSpan="4" className="px-4 py-3 text-sm">
            <div className="grid gap-2">
              <div><strong>Preorder ID:</strong> {order.id}</div>
              <div><strong>Created:</strong> {order.createdAt}</div>
              <div><strong>Price:</strong> ${order.price.toLocaleString()}</div>
              <div><strong>Prepayment:</strong> ${order.prepayment.toLocaleString()}</div>
              <div><strong>Seller:</strong> {order.seller}</div>
              <div><strong>Customer:</strong> {order.customer.name} ({order.customer.email})</div>
              <div><strong>Status:</strong> {order.status}</div>
              <div className="flex gap-2 mt-2">
              <strong>Options:</strong> 
                <button className="p-1 hover:bg-gray-100 rounded">
                  <EyeIcon className="w-4 h-4" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Download className="w-4 h-4" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Trash2Icon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default TableRow;
