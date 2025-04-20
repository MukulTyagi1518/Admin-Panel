import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const dummyOrders = [
  {
    _id: "1",
    orderNumber: "ORD-1001",
    createdAt: "2023-05-15T10:00:00Z",
    status: "delivered",
    totalAmount: 120.5,
    items: ["Item 1", "Item 2"],
  },
  {
    _id: "2",
    orderNumber: "ORD-1002",
    createdAt: "2023-06-02T14:30:00Z",
    status: "cancelled",
    totalAmount: 75.0,
    items: ["Item 3"],
  },
  {
    _id: "3",
    orderNumber: "ORD-1003",
    createdAt: "2023-07-10T09:15:00Z",
    status: "pending",
    totalAmount: 200.0,
    items: ["Item 4", "Item 5", "Item 6"],
  },
];

const OrderHistoryModal = ({
  partnerId,
  partnerName,
  orders = dummyOrders,
  loading,
  onClose,
}) => {
  const navigate = useNavigate();
  const [expandedOrder, setExpandedOrder] = useState(null);
  const isMobile = window.innerWidth < 768;

  const handleOnClose = () => {
    navigate(`/delivery/all/`);
  };
  const toggleOrderExpand = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Order History for {partnerName}
          </h2>
          <button
            onClick={handleOnClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <FaTimes className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-medium mb-3">All Orders</h3>
              {isMobile ? (
                <div className="space-y-3">
                  {orders?.map((order) => (
                    <div key={order._id} className="border rounded-lg p-3">
                      <div 
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleOrderExpand(order._id)}
                      >
                        <div>
                          <p className="font-medium">#{order.orderNumber}</p>
                          <p className="text-sm text-gray-500">
                            {format(new Date(order.createdAt), "MMM dd, yyyy")}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <span className={`px-2 py-1 rounded-full text-xs mr-2 ${
                            order.status === "delivered" 
                              ? "bg-green-100 text-green-800" 
                              : order.status === "cancelled"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}>
                            {order.status}
                          </span>
                          {expandedOrder === order._id ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                      </div>
                      
                      {expandedOrder === order._id && (
                        <div className="mt-3 pt-3 border-t">
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-500">Amount:</span>
                            <span>${order.totalAmount?.toFixed(2) || "0.00"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Items:</span>
                            <span>{order.items?.length || 0}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Order #
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Items
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {orders?.map((order) => (
                      <tr key={order._id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          #{order.orderNumber || order._id.substring(0, 8)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {format(new Date(order.createdAt), "MMM dd, yyyy")}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              order.status === "delivered"
                                ? "bg-green-100 text-green-800"
                                : order.status === "cancelled"
                                ? "bg-red-100 text-red-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          ${order.totalAmount?.toFixed(2) || "0.00"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {order.items?.length || 0}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryModal;
