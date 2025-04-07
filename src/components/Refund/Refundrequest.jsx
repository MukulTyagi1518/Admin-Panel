import React, { useState } from "react";
import { FaEdit, FaEye, FaTrash, FaPlus, FaMinus } from "react-icons/fa";

const RefundRequestTable = () => {
    const refundRequests = [
        {
            id: 1,
            orderCode: "20220420-07435544",
            sellerName: "Filon Asset Store",
            productImage: "https://via.placeholder.com/50", // Replace with actual image URL
            productName: "Berne Men's Heritage Thermal-Lined Full-Zip Hooded Sweatshirt",
            price: "$12.150",
            sellerApproval: "Pending",
            refundStatus: "Non-Paid",
        },
    ];

    const [expandedRows, setExpandedRows] = useState({});

    const toggleRow = (id) => {
        setExpandedRows((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
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
                                <th className="px-4 py-2 text-left border">Refund Status</th>
                                <th className="px-4 py-2 text-left border">Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {refundRequests.map((request, index) => (
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
                                        <span className="px-1 py-0.5 text-white bg-blue-500 rounded text-xs">
                                            {request.sellerApproval}
                                        </span>
                                    </td>
                                    <td className="px-3 py-2 border text-center">
                                        <span className="px-1 py-0.5 bg-yellow-400 text-black rounded text-xs">
                                            {request.refundStatus}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 border-none flex space-x-2">
                                        <button className="bg-green-100 p-2 rounded-full">
                                            <FaEye className="text-green-500" />
                                        </button>
                                        <button className="bg-red-100 p-2 rounded-full">
                                            <FaEdit className="text-red-500" />
                                        </button>
                                        <button className="bg-blue-100 p-2 rounded-full">
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
                        <div key={request.id} className="border-b py-3">
                            <div className="flex items-center px-4 py-2 space-x-4">
                                <button
                                    onClick={() => toggleRow(request.id)}
                                    className="bg-gray-200 p-2 rounded-full"
                                >
                                    {expandedRows[request.id] ? <FaMinus /> : <FaPlus />}
                                </button>
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={request.productImage}
                                        alt={request.productName}
                                        className="w-12 h-12 object-cover"
                                    />
                                    <span className="text-blue-500 hover:underline">{request.productName}</span>
                                </div>
                            </div>

                            {/* Expanded Details */}
                            {expandedRows[request.id] && (
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

                                        <span className="font-semibold">Refund Status:</span>
                                        <span className="px-2 py-1 bg-yellow-400 text-black rounded text-xs text-center">
                                            {request.refundStatus}
                                        </span>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex space-x-3 mt-4">
                                        <button className="bg-green-100 p-2 rounded-full">
                                            <FaEye className="text-green-500" />
                                        </button>
                                        <button className="bg-red-100 p-2 rounded-full">
                                            <FaEdit className="text-red-500" />
                                        </button>
                                        <button className="bg-blue-100 p-2 rounded-full">
                                            <FaTrash className="text-blue-500" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default RefundRequestTable;
