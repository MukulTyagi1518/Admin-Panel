import React, { useState } from "react";
import { FaEye, FaPlus, FaMinus } from "react-icons/fa";


const RejectedRequests = () => {
  const requests = [
    {
      id: 1,
      orderCode: "20220420-07073292",
      sellerName: "Filon Asset Store",
      productImage: "https://via.placeholder.com/50", // Replace with actual image URL
      productName: "COOP by SwimWays Hydro Lacrosse, Blue, Outdoor Games For Adults & Kids",
      price: "$15.000",
      sellerApproval: "Pending",
      adminApproval: "Rejected",
    },
  ];

  const [expandedRows, setExpandedRows] = useState({});

  const toggleRow = (id) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleOpenModal = (request) => {
    setSelectedRequest(request);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedRequest(null);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg overflow-hidden">
        <h2 className="text-xl font-semibold px-4 py-3 border-b">Rejected Request</h2>

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
                <th className="px-4 py-2 text-left border">Reject Reason</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request, index) => (
                <tr key={request.id} className="border-t">
                  <td className="px-4 py-3 border">{index + 1}</td>
                  <td className="px-4 py-3 border">{request.orderCode}</td>
                  <td className="px-4 py-3 border">{request.sellerName}</td>
                  <td className="px-4 py-3 flex items-center space-x-3">
                    <img src={request.productImage} alt={request.productName} className="w-10 h-10 object-cover" />
                    <span className="text-blue-500 hover:underline">{request.productName}</span>
                  </td>
                  <td className="px-4 py-3 border">{request.price}</td>
                  <td className="px-4 py-2 border text-center">
                    <span className="px-2 py-1 text-white bg-blue-500 rounded text-xs">
                      {request.sellerApproval}
                    </span>
                  </td>
                  <td className="px-4 py-2 border text-center">
                    <span className="px-2 py-1 text-white bg-red-500 rounded text-xs">
                      {request.adminApproval}
                    </span>
                  </td>
                  <td className="px-4 py-3 border text-center">
                  <button
                      className="bg-blue-100 p-2 rounded-full"
                      onClick={() => handleOpenModal(request)}
                    >
                      <FaEye className="text-blue-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden">
          {requests.map((request) => (
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

                    <span className="font-semibold">Admin Approval:</span>
                    <span className="px-2 py-1 text-white bg-red-500 rounded text-xs text-center">
                      {request.adminApproval}
                    </span>
                  </div>

                          {/* Action Buttons */}
                          <div className="flex justify-start mt-4">
                    <button
                      className="bg-blue-100 p-2 rounded-full"
                      onClick={() => handleOpenModal(request)}
                    >
                      <FaEye className="text-blue-500" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
       
    </div>

    {modalOpen && selectedRequest && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-1/3 shadow-lg">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h3 className="text-lg font-semibold">Refund Request Reject Reason</h3>
              <button 
                className="text-gray-500 hover:text-gray-700 text-xl"
                onClick={handleCloseModal}
              >
                &times;
              </button>
            </div>
            <p className="text-gray-700 mb-4">{selectedRequest.rejectReason}Your refund request has been denied as it does not meet our refund policy criteria. For questions, feel free to contact support.</p>
            <div className="text-right">
              <button 
                className="bg-gray-300 px-4 py-2 rounded-md"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      </div>

      
      
  );
};

export default RejectedRequests;
