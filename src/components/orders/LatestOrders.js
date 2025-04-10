import { Download, EyeIcon, Trash } from "lucide-react";
import React, { useState } from "react";
import OrderHeader from "./OrderHeader";
import Pagination from "../Pagination";
import { useMediaQuery } from 'react-responsive';
import { FaPlus, FaMinus } from 'react-icons/fa';

const LatestOrders = ({ customFilter, title = "Latest Orders" }) => {
  const [orders, setOrders] = useState([
    { id: 1, code: "ORD001", products: 2, customer: "John Doe", seller: "InHouse Order", amount: "$100.00", deliveryStatus: "Pending", paymentMethod: "Credit Card", paymentStatus: "Paid", refund: "No" },
    { id: 2, code: "ORD002", products: 3, customer: "Jane Smith", seller: "Seller", amount: "$150.00", deliveryStatus: "Shipping", paymentMethod: "PayPal", paymentStatus: "Paid", refund: "No" },
    { id: 3, code: "ORD003", products: 1, customer: "Alice Johnson", seller: "Seller", amount: "$50.00", deliveryStatus: "Completed", paymentMethod: "Credit Card", paymentStatus: "Paid", refund: "Yes" },
    { id: 4, code: "ORD004", products: 4, customer: "Bob Brown", seller: "Seller", amount: "$200.00", deliveryStatus: "Pending", paymentMethod: "Credit Card", paymentStatus: "Unpaid", refund: "No" },
    { id: 5, code: "ORD005", products: 2, customer: "Charlie Davis", seller: "InHouse Order", amount: "$120.00", deliveryStatus: "Shipping", paymentMethod: "PayPal", paymentStatus: "Paid", refund: "No" },
    { id: 6, code: "ORD006", products: 1, customer: "Eve White", seller: "Seller", amount: "$80.00", deliveryStatus: "Completed", paymentMethod: "Credit Card", paymentStatus: "Paid", refund: "Yes" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [roleToDelete, setRoleToDelete] = useState(null);

  const filteredOrders = customFilter
    ? customFilter(orders)
    : orders.filter(
        (order) =>
          order.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.seller.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.deliveryStatus.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.paymentStatus.toLowerCase().includes(searchTerm.toLowerCase())
      );
  const isBelow1400 = useMediaQuery({ maxWidth: 1400 });
  const [expandedOrders, setExpandedOrders] = useState([]);

  const toggleOrderExpansion = (orderId) => {
    if (expandedOrders.includes(orderId)) {
      setExpandedOrders(expandedOrders.filter(id => id !== orderId));
    } else {
      setExpandedOrders([...expandedOrders, orderId]);
    }
  };

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDeleteClick = (roleId) => {
    setRoleToDelete(roleId);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    console.log(`Deleting role with ID: ${roleToDelete}`);
    setShowDeleteConfirmation(false);
    setRoleToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
    setRoleToDelete(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "text-orange-500";
      case "Shipping":
        return "text-blue-500";
      case "Completed":
        return "text-green-500";
      case "Refund":
        return "text-yellow-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mx-auto">
      <OrderHeader />
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              {isBelow1400 && <th className="text-left py-3 px-4 text-sm font-medium text-gray-500"></th>}
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                <input type="checkbox" />
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Order Code</th>
              {!isBelow1400 && (
                <>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Num. of Products</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Customer</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Seller</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Amount</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Delivery Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Payment Method</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Payment Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Refund</th>
                </>
              )}
              {/* <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Refund</th> */}
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <React.Fragment key={order.id}>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  {isBelow1400 && (
                    <td className="py-3 px-4">
                      <button onClick={() => toggleOrderExpansion(order.id)}>
                        {expandedOrders.includes(order.id) ? <FaMinus /> : <FaPlus />}
                      </button>
                    </td>
                  )}
                  <td className="py-3 px-4">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">{order.code}</td>
                  {!isBelow1400 && (
                    <>
                      <td className="py-3 px-4 text-sm text-gray-500">{order.products}</td>
                      <td className="py-3 px-4 text-sm text-gray-700">{order.customer}</td>
                      <td className="py-3 px-4 text-sm text-gray-700">{order.seller}</td>
                      <td className="py-3 px-4 text-sm text-gray-700">{order.amount}</td>
                      <td className="py-3 px-4">
                        <span className={`text-sm font-medium ${getStatusColor(order.deliveryStatus)}`}>
                          {order.deliveryStatus}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">{order.paymentMethod}</td>
                      <td className="py-3 px-4 text-sm text-gray-700">{order.paymentStatus}</td>
                      <td className="py-3 px-4 text-sm text-gray-700">{order.refund}</td>
                    </>
                  )}
                  {/* <td className="py-3 px-4 text-sm text-gray-700">{order.refund}</td> */}
                  <td className="py-3 px-4">
                    <div className="flex space-x-1">
                      <Download className="text-green-400 hover:text-gray-500 cursor-pointer" />
                      <Trash className="text-red-400 hover:text-gray-500 cursor-pointer" onClick={() => handleDeleteClick(order.id)} />
                      <EyeIcon className="text-cyan-400 hover:text-gray-600 cursor-pointer" />
                    </div>
                  </td>
                </tr>
                {expandedOrders.includes(order.id) && isBelow1400 && (
                  <tr>
                    <td colSpan="10">
                      <table className="min-w-full bg-gray-100 p-4">
                        <tbody>
                          <tr>
                            <td className="py-2 px-4 font-semibold">Num. of Products</td>
                            <td className="py-2 px-4">{order.products}</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 font-semibold">Customer</td>
                            <td className="py-2 px-4">{order.customer}</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 font-semibold">Seller</td>
                            <td className="py-2 px-4">{order.seller}</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 font-semibold">Amount</td>
                            <td className="py-2 px-4">{order.amount}</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 font-semibold">Delivery Status</td>
                            <td className="py-2 px-4">
                              <span className={`font-medium ${getStatusColor(order.deliveryStatus)}`}>
                                {order.deliveryStatus}
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 font-semibold">Payment Method</td>
                            <td className="py-2 px-4">{order.paymentMethod}</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 font-semibold">Payment Status</td>
                            <td className="py-2 px-4">{order.paymentStatus}</td>
                          </tr>
                          <tr>
                             <td className="py-2 px-4 font-semibold">Refund</td>
                             <td className="py-2 px-4">{order.refund}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
        {showDeleteConfirmation && (
          <div className="delete-confirmation-overlay">
            <div className="delete-confirmation-dialog">
              <div className="dialog-header">
                <h2>Delete Confirmation</h2>
                <button
                  className="close-dialog-btn"
                  onClick={cancelDelete}
                >
                  X
                </button>
              </div>
              <div className="dialog-content">
                <p>Are you sure to delete this?</p>
              </div>
              <div className="dialog-actions">
                <button className="cancel-btn" onClick={cancelDelete}>
                  Cancel
                </button>
                <button className="delete-btn" onClick={confirmDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-between items-center mt-6">
        <div className="text-sm text-gray-500">
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredOrders.length)} of {filteredOrders.length} entries
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default LatestOrders;