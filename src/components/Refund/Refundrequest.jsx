// import React, { useState } from "react";
// import { FaEdit, FaEye, FaTrash, FaPlus, FaMinus } from "react-icons/fa";

// const RefundRequestTable = () => {
//     const refundRequests = [
//         {
//             id: 1,
//             orderCode: "20220420-07435544",
//             sellerName: "Filon Asset Store",
//             productImage: "https://via.placeholder.com/50", // Replace with actual image URL
//             productName: "Berne Men's Heritage Thermal-Lined Full-Zip Hooded Sweatshirt",
//             price: "$12.150",
//             sellerApproval: "Pending",
//             refundStatus: "Non-Paid",
//         },
//     ];

//     const [expandedRows, setExpandedRows] = useState({});

//     const toggleRow = (id) => {
//         setExpandedRows((prev) => ({
//             ...prev,
//             [id]: !prev[id],
//         }));
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <div className="bg-white rounded-lg overflow-hidden">
//                 <h2 className="text-xl font-semibold px-4 py-3 border-b">Refund Request All</h2>

//                 {/* Desktop Table */}
//                 <div className="hidden md:block overflow-x-auto">
//                     <table className="min-w-full w-full bg-white border border-gray-200">
//                         <thead>
//                             <tr className="bg-gray-100">
//                                 <th className="px-4 py-2 text-left border">#</th>
//                                 <th className="px-4 py-2 text-left border">Order Code</th>
//                                 <th className="px-4 py-2 text-left border">Seller Name</th>
//                                 <th className="px-4 py-2 text-left border">Product</th>
//                                 <th className="px-4 py-2 text-left border">Price</th>
//                                 <th className="px-4 py-2 text-left border">Seller Approval</th>
//                                 <th className="px-4 py-2 text-left border">Refund Status</th>
//                                 <th className="px-4 py-2 text-left border">Options</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {refundRequests.map((request, index) => (
//                                 <tr key={request.id} className="border-t">
//                                     <td className="px-4 py-3 border">{index + 1}</td>
//                                     <td className="px-4 py-3 border">{request.orderCode}</td>
//                                     <td className="px-4 py-3 border">{request.sellerName}</td>
//                                     <td className="px-4 py-3 flex items-center space-x-3">
//                                         <img src={request.productImage} alt={request.productName} className="w-10 h-10 object-cover" />
//                                         <span className="text-blue-500 hover:underline">{request.productName}</span>
//                                     </td>
//                                     <td className="px-3 py-3 border">{request.price}</td>
//                                     <td className="px-4 py-2 border text-center">
//                                         <span className="px-1 py-0.5 text-white bg-blue-500 rounded text-xs">
//                                             {request.sellerApproval}
//                                         </span>
//                                     </td>
//                                     <td className="px-3 py-2 border text-center">
//                                         <span className="px-1 py-0.5 bg-yellow-400 text-black rounded text-xs">
//                                             {request.refundStatus}
//                                         </span>
//                                     </td>
//                                     <td className="px-4 py-3 border-none flex space-x-2">
//                                         <button className="bg-green-100 p-2 rounded-full">
//                                             <FaEye className="text-green-500" />
//                                         </button>
//                                         <button className="bg-red-100 p-2 rounded-full">
//                                             <FaEdit className="text-red-500" />
//                                         </button>
//                                         <button className="bg-blue-100 p-2 rounded-full">
//                                             <FaTrash className="text-blue-500" />
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>


//                 {/* Mobile View */}
//                 <div className="block md:hidden">
//                     {refundRequests.map((request) => (
//                         <div key={request.id} className="border-b py-3">
//                             <div className="flex items-center px-4 py-2 space-x-4">
//                                 <button
//                                     onClick={() => toggleRow(request.id)}
//                                     className="bg-gray-200 p-2 rounded-full"
//                                 >
//                                     {expandedRows[request.id] ? <FaMinus /> : <FaPlus />}
//                                 </button>
//                                 <div className="flex items-center space-x-4">
//                                     <img
//                                         src={request.productImage}
//                                         alt={request.productName}
//                                         className="w-12 h-12 object-cover"
//                                     />
//                                     <span className="text-blue-500 hover:underline">{request.productName}</span>
//                                 </div>
//                             </div>

//                             {/* Expanded Details */}
//                             {expandedRows[request.id] && (
//                                 <div className="bg-gray-100 p-4 rounded-md mt-3">
//                                     <div className="grid grid-cols-2 gap-y-3">
//                                         <span className="font-semibold">Order Code:</span>
//                                         <span>{request.orderCode}</span>

//                                         <span className="font-semibold">Seller Name:</span>
//                                         <span>{request.sellerName}</span>

//                                         <span className="font-semibold">Price:</span>
//                                         <span>{request.price}</span>

//                                         <span className="font-semibold">Seller Approval:</span>
//                                         <span className="px-2 py-1 text-white bg-blue-500 rounded text-xs text-center">
//                                             {request.sellerApproval}
//                                         </span>

//                                         <span className="font-semibold">Refund Status:</span>
//                                         <span className="px-2 py-1 bg-yellow-400 text-black rounded text-xs text-center">
//                                             {request.refundStatus}
//                                         </span>
//                                     </div>

//                                     {/* Action Buttons */}
//                                     <div className="flex space-x-3 mt-4">
//                                         <button className="bg-green-100 p-2 rounded-full">
//                                             <FaEye className="text-green-500" />
//                                         </button>
//                                         <button className="bg-red-100 p-2 rounded-full">
//                                             <FaEdit className="text-red-500" />
//                                         </button>
//                                         <button className="bg-blue-100 p-2 rounded-full">
//                                             <FaTrash className="text-blue-500" />
//                                         </button>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>


//             </div>
//         </div>
//     );
// };

// export default RefundRequestTable;


// import React, { useState, useEffect } from "react";
// import { FaEdit, FaEye, FaTrash, FaPlus, FaMinus } from "react-icons/fa";

// const RefundRequestTable = () => {
//     const [refundRequests, setRefundRequests] = useState([]);
//     const [expandedRows, setExpandedRows] = useState({});

//     // Fetch refund requests from API
//     const fetchRefundRequests = async () => {
//         try {
//             const res = await fetch("http://localhost:5000/api/refund");
//             const data = await res.json();
//             setRefundRequests(data);
//         } catch (error) {
//             console.error("Error fetching refund requests:", error);
//         }
//     };

//     useEffect(() => {
//         fetchRefundRequests();
//     }, []);

//     const toggleRow = (id) => {
//         setExpandedRows((prev) => ({
//             ...prev,
//             [id]: !prev[id],
//         }));
//     };

//     const handleApproveReject = async (id) => {
//         const action = window.confirm("Approve this refund request? Click Cancel to Reject.");
//         const status = action ? "approve" : "reject";

//         try {
//             const res = await fetch(`http://localhost:5000/api/refund/${status}/${id}`, {
//                 method: "PUT",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             });

//             const result = await res.json();
//             if (res.ok) {
//                 alert(`Request ${status}d successfully!`);
//                 fetchRefundRequests(); // Refresh data
//             } else {
//                 alert(result.message || "Something went wrong!");
//             }
//         } catch (error) {
//             console.error(error);
//             alert("Failed to update status.");
//         }
//     };


//     return (
//         <div className="container mx-auto p-4">
//             <div className="bg-white rounded-lg overflow-hidden">
//                 <h2 className="text-xl font-semibold px-4 py-3 border-b">Refund Request All</h2>

//                 {/* Desktop Table */}
//                 <div className="hidden md:block overflow-x-auto">
//                     <table className="min-w-full w-full bg-white border border-gray-200">
//                         <thead>
//                             <tr className="bg-gray-100">
//                                 <th className="px-4 py-2 text-left border">#</th>
//                                 <th className="px-4 py-2 text-left border">Order Code</th>
//                                 <th className="px-4 py-2 text-left border">Seller Name</th>
//                                 <th className="px-4 py-2 text-left border">Product</th>
//                                 <th className="px-4 py-2 text-left border">Price</th>
//                                 <th className="px-4 py-2 text-left border">Seller Approval</th>
//                                 <th className="px-4 py-2 text-left border">Refund Status</th>
//                                 <th className="px-4 py-2 text-left border">Options</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {refundRequests.map((request, index) => (
//                                 <tr key={request._id} className="border-t">
//                                     <td className="px-4 py-3 border">{index + 1}</td>
//                                     <td className="px-4 py-3 border">{request.orderCode}</td>
//                                     <td className="px-4 py-3 border">{request.sellerName}</td>
//                                     <td className="px-4 py-3 flex items-center space-x-3">
//                                         <img src={request.productImage} alt={request.productName} className="w-10 h-10 object-cover" />
//                                         <span className="text-blue-500 hover:underline">{request.productName}</span>
//                                     </td>
//                                     <td className="px-3 py-3 border">{request.price}</td>
//                                     <td className="px-4 py-2 border text-center">
//                                         <span className="px-1 py-0.5 text-white bg-blue-500 rounded text-xs">
//                                             {request.sellerApproval}
//                                         </span>
//                                     </td>
//                                     <td className="px-3 py-2 border text-center">
//                                         <span className="px-1 py-0.5 bg-yellow-400 text-black rounded text-xs">
//                                             {request.refundStatus}
//                                         </span>
//                                     </td>
//                                     <td className="px-4 py-3 border-none flex space-x-2">
//                                         <button className="bg-green-100 p-2 rounded-full">
//                                             <FaEye className="text-green-500" />
//                                         </button>
//                                         <button className="bg-red-100 p-2 rounded-full" onClick={() => handleApproveReject(request._id)}>
//                                             <FaEdit className="text-red-500" />
//                                         </button>
//                                         <button className="bg-blue-100 p-2 rounded-full">
//                                             <FaTrash className="text-blue-500" />
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>

//                 {/* Mobile View */}
//                 <div className="block md:hidden">
//                     {refundRequests.map((request) => (
//                         <div key={request._id} className="border-b py-3">
//                             <div className="flex items-center px-4 py-2 space-x-4">
//                                 <button onClick={() => toggleRow(request._id)} className="bg-gray-200 p-2 rounded-full">
//                                     {expandedRows[request._id] ? <FaMinus /> : <FaPlus />}
//                                 </button>
//                                 <div className="flex items-center space-x-4">
//                                     <img src={request.productImage} alt={request.productName} className="w-12 h-12 object-cover" />
//                                     <span className="text-blue-500 hover:underline">{request.productName}</span>
//                                 </div>
//                             </div>

//                             {expandedRows[request._id] && (
//                                 <div className="bg-gray-100 p-4 rounded-md mt-3">
//                                     <div className="grid grid-cols-2 gap-y-3">
//                                         <span className="font-semibold">Order Code:</span>
//                                         <span>{request.orderCode}</span>

//                                         <span className="font-semibold">Seller Name:</span>
//                                         <span>{request.sellerName}</span>

//                                         <span className="font-semibold">Price:</span>
//                                         <span>{request.price}</span>

//                                         <span className="font-semibold">Seller Approval:</span>
//                                         <span className="px-2 py-1 text-white bg-blue-500 rounded text-xs text-center">
//                                             {request.sellerApproval}
//                                         </span>

//                                         <span className="font-semibold">Refund Status:</span>
//                                         <span className="px-2 py-1 bg-yellow-400 text-black rounded text-xs text-center">
//                                             {request.refundStatus}
//                                         </span>
//                                     </div>

//                                     <div className="flex space-x-3 mt-4">
//                                         <button className="bg-green-100 p-2 rounded-full">
//                                             <FaEye className="text-green-500" />
//                                         </button>
//                                         <button className="bg-red-100 p-2 rounded-full" onClick={() => handleApproveReject(request._id)}>
//                                             <FaEdit className="text-red-500" />
//                                         </button>
//                                         <button className="bg-blue-100 p-2 rounded-full">
//                                             <FaTrash className="text-blue-500" />
//                                         </button>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RefundRequestTable;

import React, { useState, useEffect } from "react";
import { FaEdit, FaEye, FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { RiRefund2Fill } from "react-icons/ri";

const RefundRequestTable = () => {
    const [refundRequests, setRefundRequests] = useState([]);
    const [expandedRows, setExpandedRows] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [refundAmount, setRefundAmount] = useState("");
    const [refundReason, setRefundReason] = useState("");

    const fetchRefundRequests = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/refund");
            const data = await res.json();
            setRefundRequests(data);
        } catch (error) {
            console.error("Error fetching refund requests:", error);
        }
    };

    useEffect(() => {
        fetchRefundRequests();
    }, []);

    console.log(refundRequests)

    const toggleRow = (id) => {
        setExpandedRows((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const openModal = (request) => {
        setSelectedRequest(request);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedRequest(null);
        setRefundAmount("");
        setRefundReason("");
    };

    const handleRefundApproval = () => {
        console.log("Refund Approved:", {
            orderId: selectedRequest.id,
            amount: refundAmount,
            reason: refundReason,
        });
        closeModal();

    }
    const handleApprove = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/api/refund/approve/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const result = await res.json();
            if (res.ok) {
                alert("Refund request approved successfully!");
                fetchRefundRequests();
            } else {
                alert(result.message || "Something went wrong!");
            }
        } catch (error) {
            console.error(error);
            alert("Failed to approve request.");
        }
    };

    const handleReject = async (id) => {
        const reason = prompt("Enter rejection reason:");
        if (!reason) return alert("Rejection reason is required.");

        try {
            const res = await fetch(`http://localhost:5000/api/refund/reject/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ reason }),
            });

            const result = await res.json();
            if (res.ok) {
                alert("Refund request rejected successfully!");
                fetchRefundRequests();
            } else {
                alert(result.message || "Something went wrong!");
            }
        } catch (error) {
            console.error(error);
            alert("Failed to reject request.");
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white rounded-lg overflow-hidden">
                <h2 className="text-xl font-semibold px-4 py-3 border-b">Refund Request All</h2>

                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="min-w-full w-full bg-white border border-gray-200">
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
                                <th className="px-4 py-2 text-left border">Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {refundRequests.map((request, index) => (
                                <tr key={request._id} className="border-t">
                                    <td className="px-4 py-3 border">{index + 1}</td>
                                    <td className="px-4 py-3 border">{request.orderCode}</td>
                                    <td className="px-4 py-3 border">{request.sellerName}</td>
                                    <td className="px-4 py-3 flex items-center space-x-3">
                                        <img src={request.productImage} alt={request.productName} className="w-10 h-10 object-cover" />
                                        <span className="text-blue-500 hover:underline">{request.productName}</span>
                                    </td>
                                    <td className="px-3 py-3 border">{request.price}</td>
                                    <td className="px-4 py-2 border text-center">
                                        <span className="px-1 py-0.5 text-white bg-blue-500 rounded text-xs">
                                            {request.sellerApproval}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2 border text-center">
                                        <span className={`px-2 py-1 rounded text-xs text-white ${request.adminApproval === "Approved" ? "bg-green-500" : request.adminApproval === "Rejected" ? "bg-red-500" : "bg-gray-400"}`}>
                                            {request.adminApproval}
                                        </span>
                                        {/* Conditionally render reason */}
                                        {request.rejectReason && request.rejectReason !== "No reason provided" && (
                                            <p className="text-xs text-gray-500 mt-1">Reason: {request.rejectReason}</p>
                                        )}
                                    </td>
                                    <td className="px-3 py-2 border text-center">
                                        <span className="px-1 py-0.5 bg-yellow-400 text-black rounded text-xs">
                                            {request.refundStatus}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 border-none flex space-x-2">
                                        <button onClick={() => openModal(request)} className="bg-green-100 p-2 rounded-full">
                                            <RiRefund2Fill className="text-green-500" />
                                        </button>
                                        <button className="bg-red-100 p-2 rounded-full" onClick={() => handleApprove(request._id)}>
                                            <FaEdit className="text-red-500" />
                                        </button>
                                        <button className="bg-blue-100 p-2 rounded-full" onClick={() => handleReject(request._id)}>
                                            <FaTrash className="text-blue-500" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile View */}
                <div className="block md:hidden">
                    {refundRequests.map((request) => (
                        <div key={request._id} className="border-b py-3">
                            <div className="flex items-center px-4 py-2 space-x-4">
                                <button onClick={() => toggleRow(request._id)} className="bg-gray-200 p-2 rounded-full">
                                    {expandedRows[request._id] ? <FaMinus /> : <FaPlus />}
                                </button>
                                <div className="flex items-center space-x-4">
                                    <img src={request.productImage} alt={request.productName} className="w-12 h-12 object-cover" />
                                    <span className="text-blue-500 hover:underline">{request.productName}</span>
                                </div>
                            </div>

                            {expandedRows[request._id] && (
                                <div className="bg-gray-100 p-4 rounded-md mt-3">
                                    <div className="grid grid-cols-2 gap-y-3">
                                        <span className="font-semibold">Order Code:</span>
                                        <span>{request.orderCode}</span>

                                        <span className="font-semibold">Seller Name:</span>
                                        <span>{request.sellerName}</span>

                                        <span className="font-semibold">Price:</span>
                                        <span>{request.price}</span>

                                        <span className="font-semibold">Seller Approval:</span>
                                        <span className="px-2 py-1 text-white bg-blue-500 rounded text-xs text-center">
                                            {request.sellerApproval}
                                        </span>

                                        <span className="font-semibold">Admin Approval:</span>
                                        <span className={`px-2 py-1 rounded text-xs text-white ${request.adminApproval === "Approved" ? "bg-green-500" : request.adminApproval === "Rejected" ? "bg-red-500" : "bg-gray-400"}`}>
                                            {request.adminApproval}
                                        </span>

                                        {request.rejectReason && request.rejectReason !== "No reason provided" && (
                                            <>
                                                <span className="font-semibold">Reason:</span>
                                                <span className="text-sm text-gray-700">{request.rejectReason}</span>
                                            </>
                                        )}

                                        <span className="font-semibold">Refund Status:</span>
                                        <span className="px-2 py-1 bg-yellow-400 text-black rounded text-xs text-center">
                                            {request.refundStatus}
                                        </span>
                                    </div>

                                    <div className="flex space-x-3 mt-4">
                                        <button onClick={() => openModal(request)} className="bg-green-100 p-2 rounded-full">
                                            <RiRefund2Fill className="text-green-500" />
                                        </button>
                                        <button className="bg-red-100 p-2 rounded-full" onClick={() => handleApprove(request._id)}>
                                            <FaEdit className="text-red-500" />
                                        </button>
                                        <button className="bg-blue-100 p-2 rounded-full" onClick={() => handleReject(request._id)}>
                                            <FaTrash className="text-blue-500" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {isModalOpen && selectedRequest && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                            <h3 className="text-lg font-semibold">Approve Refund Request</h3>
                            <p className="mt-2 text-gray-600">Order Code: {selectedRequest.orderCode}</p>

                            {/* <div className="mt-4">
                                <label className="block text-sm font-medium text-gray-700">Refund Amount</label>
                                <input
                                    type="text"
                                    className="w-full mt-1 p-2 border rounded-md"
                                    value={refundAmount}
                                    onChange={(e) => setRefundAmount(e.target.value)}
                                />
                            </div> */}

                            <div className="mt-4">
                                <label className="block text-sm font-medium text-gray-700">Reason</label>
                                <textarea
                                    className="w-full mt-1 p-2 border rounded-md"
                                    rows="3"
                                    value={refundReason}
                                    onChange={(e) => setRefundReason(e.target.value)}
                                />
                            </div>

                            <div className="flex justify-end space-x-4 mt-4">
                                <button
                                    onClick={closeModal}
                                    className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleRefundApproval}
                                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                                >
                                    Approve
                                </button>
                            </div>
                        </div>
                    </div>
                )}


            </div>
        </div>
    );
};

export default RefundRequestTable;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaEdit, FaEye, FaTrash, FaPlus, FaMinus } from "react-icons/fa";

// const RefundRequestTable = () => {
//     const [refundRequests, setRefundRequests] = useState([]);
//     const [expandedRows, setExpandedRows] = useState({});

//     const toggleRow = (id) => {
//         setExpandedRows((prev) => ({
//             ...prev,
//             [id]: !prev[id],
//         }));
//     };

//     // 🔥 Fetch refund requests from API
//     useEffect(() => {
//         const fetchRefundRequests = async () => {
//             try {
//                 const response = await axios.get("http://localhost:5000/api/refund"); // 👈 Update this URL as per your backend
//                 setRefundRequests(response.data); // 👈 Make sure response.data is an array
//             } catch (error) {
//                 console.error("Failed to fetch refund requests:", error);
//             }
//         };

//         fetchRefundRequests();
//     }, []);

//     return (
//         <div className="container mx-auto p-4">
//             <div className="bg-white rounded-lg overflow-hidden">
//                 <h2 className="text-xl font-semibold px-4 py-3 border-b">Refund Request All</h2>

//                 {/* Desktop Table */}
//                 <div className="hidden md:block overflow-x-auto">
//                     <table className="min-w-full w-full bg-white border border-gray-200">
//                         <thead>
//                             <tr className="bg-gray-100">
//                                 <th className="px-4 py-2 text-left border">#</th>
//                                 <th className="px-4 py-2 text-left border">Order Code</th>
//                                 <th className="px-4 py-2 text-left border">Seller Name</th>
//                                 <th className="px-4 py-2 text-left border">Product</th>
//                                 <th className="px-4 py-2 text-left border">Price</th>
//                                 <th className="px-4 py-2 text-left border">Seller Approval</th>
//                                 <th className="px-4 py-2 text-left border">Refund Status</th>
//                                 <th className="px-4 py-2 text-left border">Options</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {refundRequests.map((request, index) => (
//                                 <tr key={request.id} className="border-t">
//                                     <td className="px-4 py-3 border">{index + 1}</td>
//                                     <td className="px-4 py-3 border">{request.orderCode}</td>
//                                     <td className="px-4 py-3 border">{request.sellerName}</td>
//                                     <td className="px-4 py-3 flex items-center space-x-3">
//                                         <img
//                                             src={request.productImage || "https://via.placeholder.com/50"}
//                                             alt={request.productName}
//                                             className="w-10 h-10 object-cover"
//                                         />
//                                         <span className="text-blue-500 hover:underline">{request.productName}</span>
//                                     </td>
//                                     <td className="px-3 py-3 border">{request.price}</td>
//                                     <td className="px-4 py-2 border text-center">
//                                         <span className="px-1 py-0.5 text-white bg-blue-500 rounded text-xs">
//                                             {request.sellerApproval}
//                                         </span>
//                                     </td>
//                                     <td className="px-3 py-2 border text-center">
//                                         <span className="px-1 py-0.5 bg-yellow-400 text-black rounded text-xs">
//                                             {request.refundStatus}
//                                         </span>
//                                     </td>
//                                     <td className="px-4 py-3 border-none flex space-x-2">
//                                         <button className="bg-green-100 p-2 rounded-full">
//                                             <FaEye className="text-green-500" />
//                                         </button>
//                                         <button className="bg-red-100 p-2 rounded-full">
//                                             <FaEdit className="text-red-500" />
//                                         </button>
//                                         <button className="bg-blue-100 p-2 rounded-full">
//                                             <FaTrash className="text-blue-500" />
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>

//                 {/* Mobile View */}
//                 <div className="block md:hidden">
//                     {refundRequests.map((request) => (
//                         <div key={request.id} className="border-b py-3">
//                             <div className="flex items-center px-4 py-2 space-x-4">
//                                 <button
//                                     onClick={() => toggleRow(request.id)}
//                                     className="bg-gray-200 p-2 rounded-full"
//                                 >
//                                     {expandedRows[request.id] ? <FaMinus /> : <FaPlus />}
//                                 </button>
//                                 <div className="flex items-center space-x-4">
//                                     <img
//                                         src={request.productImage || "https://via.placeholder.com/50"}
//                                         alt={request.productName}
//                                         className="w-12 h-12 object-cover"
//                                     />
//                                     <span className="text-blue-500 hover:underline">{request.productName}</span>
//                                 </div>
//                             </div>

//                             {/* Expanded Details */}
//                             {expandedRows[request.id] && (
//                                 <div className="bg-gray-100 p-4 rounded-md mt-3">
//                                     <div className="grid grid-cols-2 gap-y-3">
//                                         <span className="font-semibold">Order Code:</span>
//                                         <span>{request.orderCode}</span>

//                                         <span className="font-semibold">Seller Name:</span>
//                                         <span>{request.sellerName}</span>

//                                         <span className="font-semibold">Price:</span>
//                                         <span>{request.price}</span>

//                                         <span className="font-semibold">Seller Approval:</span>
//                                         <span className="px-2 py-1 text-white bg-blue-500 rounded text-xs text-center">
//                                             {request.sellerApproval}
//                                         </span>

//                                         <span className="font-semibold">Refund Status:</span>
//                                         <span className="px-2 py-1 bg-yellow-400 text-black rounded text-xs text-center">
//                                             {request.refundStatus}
//                                         </span>
//                                     </div>

//                                     {/* Action Buttons */}
//                                     <div className="flex space-x-3 mt-4">
//                                         <button className="bg-green-100 p-2 rounded-full">
//                                             <FaEye className="text-green-500" />
//                                         </button>
//                                         <button className="bg-red-100 p-2 rounded-full">
//                                             <FaEdit className="text-red-500" />
//                                         </button>
//                                         <button className="bg-blue-100 p-2 rounded-full">
//                                             <FaTrash className="text-blue-500" />
//                                         </button>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RefundRequestTable;
