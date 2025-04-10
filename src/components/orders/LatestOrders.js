import { Download, EyeIcon, Trash } from "lucide-react";
import React, { useState, useEffect } from "react";
import OrderHeader from "./OrderHeader";
import Pagination from "../Pagination";
import { useMediaQuery } from 'react-responsive';
import { FaPlus, FaMinus } from 'react-icons/fa';

const LatestOrders = ({ customFilter, title = "Latest Orders" }) => {
  const [orders, setOrders] = useState([
    { id: 1, code: "ORD001", products: 2, customer: "John Doe", seller: "InHouse Order", amount: "$100.00", deliveryStatus: "Pending", paymentMethod: "Credit Card", paymentStatus: "Paid", refund: "No", date: "2023-05-15" },
    { id: 2, code: "ORD002", products: 3, customer: "Jane Smith", seller: "Seller", amount: "$150.00", deliveryStatus: "Shipping", paymentMethod: "PayPal", paymentStatus: "Paid", refund: "No", date: "2023-05-16" },
    { id: 3, code: "ORD003", products: 1, customer: "Alice Johnson", seller: "Seller", amount: "$50.00", deliveryStatus: "Completed", paymentMethod: "Credit Card", paymentStatus: "Paid", refund: "Yes", date: "2023-05-17" },
    { id: 4, code: "ORD004", products: 4, customer: "Bob Brown", seller: "Seller", amount: "$200.00", deliveryStatus: "Pending", paymentMethod: "Credit Card", paymentStatus: "Unpaid", refund: "No", date: "2023-05-18" },
    { id: 5, code: "ORD005", products: 2, customer: "Charlie Davis", seller: "InHouse Order", amount: "$120.00", deliveryStatus: "Shipping", paymentMethod: "PayPal", paymentStatus: "Paid", refund: "No", date: "2023-05-19" },
    { id: 6, code: "ORD006", products: 1, customer: "Eve White", seller: "Seller", amount: "$80.00", deliveryStatus: "Completed", paymentMethod: "Credit Card", paymentStatus: "Paid", refund: "Yes", date: "2023-05-20" },
  ]);
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [roleToDelete, setRoleToDelete] = useState(null);
  const [filters, setFilters] = useState({
    delivery: "All",
    payment: "All",
    date: "All",
    bulk: null
  });

  const isBelow1400 = useMediaQuery({ maxWidth: 1400 });
  const [expandedOrders, setExpandedOrders] = useState([]);

  const [isAllSelected, setIsAllSelected] = useState(false); // State to track if all checkboxes are selected
  const [selectedOrders, setSelectedOrders] = useState([]); // State to track selected orders

  // Filter orders based on search term and filters
  const filteredOrders = orders.filter(order => {
    // Search term filter
    const matchesSearch = 
      order.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.seller.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.deliveryStatus.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.paymentStatus.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Delivery status filter
    const matchesDelivery = filters.delivery === "All" || 
      order.deliveryStatus === filters.delivery;
    
    // Payment status filter
    const matchesPayment = filters.payment === "All" || 
      order.paymentStatus === filters.payment;
    
    // Date filter (simplified for demo)
    const matchesDate = filters.date === "All" || 
      (filters.date === "Today" && order.date === new Date().toISOString().split('T')[0]) ||
      (filters.date === "Last 7 Days" && isWithinLastNDays(order.date, 7)) ||
      (filters.date === "This Month" && isThisMonth(order.date));
    
    return matchesSearch && matchesDelivery && matchesPayment && matchesDate;
  });

  // Helper function for date filtering
  function isWithinLastNDays(dateString, days) {
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= days;
  }

  // Helper function for this month filtering
  function isThisMonth(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    return date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
  }

  const handleBulkAction = (action) => {
    // In a real app, you would update the server and then the local state
    // For demo, we'll just update the local state
    let updatedOrders = [...orders];
  
    switch (action) {
      case "Mark as Delivered":
        updatedOrders = updatedOrders.map((order) =>
          selectedOrders.includes(order.id)
            ? { ...order, deliveryStatus: "Completed" }
            : order
        );
        break;
      case "Mark as Pending":
        updatedOrders = updatedOrders.map((order) =>
          selectedOrders.includes(order.id)
            ? { ...order, deliveryStatus: "Pending" }
            : order
        );
        break;
      case "Delete Selected":
        updatedOrders = updatedOrders.filter(
          (order) => !selectedOrders.includes(order.id)
        );
        setSelectedOrders([]); // Clear selected orders after deletion
        break;
      default:
        break;
    }
  
    setOrders(updatedOrders);
    setFilters((prev) => ({ ...prev, bulk: null })); // Reset bulk filter
  };

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
  
  const handleDelete = (id) => {
    setRoleToDelete(id);
    setShowDeleteConfirmation(true);
  };
  
  const confirmDelete = async () => {
    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setOrders(orders.filter(order => order.id !== roleToDelete));
      setShowDeleteConfirmation(false);
      setRoleToDelete(null);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
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

  // Handle filter changes from OrderHeader
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
    
    // If it's a bulk action, perform it immediately
    if (filterType === "bulk" && value !== "Bulk Action") {
      handleBulkAction(value);
    }
    
    // Reset to page 1 when filters change
    setCurrentPage(1);
  };

  // Handle search from OrderHeader
  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleSelectAll = () => {
    if (isAllSelected) {
      // Unselect all
      setSelectedOrders([]);
    } else {
      // Select all
      setSelectedOrders(orders.map(order => order.id));
    }
    setIsAllSelected(!isAllSelected);
  };

  const handleSelectOrder = (id) => {
    if (selectedOrders.includes(id)) {
      // Unselect the order
      setSelectedOrders(selectedOrders.filter(orderId => orderId !== id));
    } else {
      // Select the order
      setSelectedOrders([...selectedOrders, id]);
    }
  };

  useEffect(() => {
    // Update the "Select All" checkbox state based on individual selections
    setIsAllSelected(selectedOrders.length === orders.length);
  }, [selectedOrders, orders]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mx-auto">
      <OrderHeader 
        onFilterChange={handleFilterChange} 
        onSearch={handleSearch}
        currentFilters={filters}
      />
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              {isBelow1400 && <th className="text-left py-3 px-4 text-sm font-medium text-gray-500"></th>}
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={handleSelectAll}
                />
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
                    <input
                      type="checkbox"
                      checked={selectedOrders.includes(order.id)}
                      onChange={() => handleSelectOrder(order.id)}
                    />
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
                    {/* <div className="flex space-x-1">
                      <Download className="text-green-400 hover:text-gray-500 cursor-pointer" />
                      <Trash className="text-red-400 hover:text-gray-500 cursor-pointer" onClick={() => handleDelete(order.id)} />
                      <EyeIcon className="text-cyan-400 hover:text-gray-600 cursor-pointer" />
                    </div> */}
                    <div className="flex items-center gap-[.2cm]">
                                        <div className="p-[.2cm] bg-blue-100 w-fit rounded-[50%] cursor-pointer">
                                            <Eye size={15} color="blue" />
                                        </div>
                                        <div className="p-[.2cm] bg-[#e8d8ff] w-fit rounded-[50%] cursor-pointer">
                                            <Download size={15} color="blueviolet" />
                                        </div>

                                        <div className="p-[.2cm] bg-red-100 w-fit rounded-[50%] cursor-pointer">
                                            <Trash size={15} color="red" onClick={() => handleDeleteClick(order.id)} />
                                        </div>
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
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Delete Confirmation</h2>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={cancelDelete}
                >
                  ×
                </button>
              </div>
              <div className="mb-6">
                <p>Are you sure you want to delete this order?</p>
              </div>
              <div className="flex justify-end space-x-3">
                <button 
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                  onClick={cancelDelete}
                >
                  Cancel
                </button>
                <button 
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  onClick={confirmDelete}
                >
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