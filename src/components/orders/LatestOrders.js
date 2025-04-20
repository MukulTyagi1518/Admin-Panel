import { Download, Eye, Trash } from "lucide-react";
import React, { useState, useEffect } from "react";
import OrderHeader from "./OrderHeader";
import Pagination from "../Pagination";
import { useMediaQuery } from "react-responsive";
import { useOrdersContext } from "../../context/ordersContext";
import ViewExpandData from "../ViewExpandData";
import apiInstance from "../../utils/axios";

function LatestOrders({ customFilter = null, title = "Latest allOrders" }) {
  const { allOrders, setAllOrders } = useOrdersContext();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [roleToDelete, setRoleToDelete] = useState(null);
  const [filters, setFilters] = useState({
    DeliveryStatus: "All",
    payment: "All",
    date: "All",
    bulk: null,
  });

  const isBelow1400 = useMediaQuery({ maxWidth: 1400 });
  const [expandedOrders, setExpandedOrders] = useState([]);

  const [isAllSelected, setIsAllSelected] = useState(false); // State to track if all checkboxes are selected
  const [selectedOrders, setSelectedOrders] = useState([]); // State to track selected allOrders
  const ordersToFilter = customFilter ? customFilter(allOrders) : allOrders;

  // Filter allOrders based on search term and filters
  const filteredOrders = ordersToFilter.filter((order) => {
    // Search term filter
    const matchesSearch =
      order.code?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.seller?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.DeliveryStatus?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (order.PaymentStatus || order.paymentStatus)
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());

    // Delivery status filter
    const matchesDelivery =
      filters.DeliveryStatus === "All" ||
      order.DeliveryStatus === filters.DeliveryStatus;

    // Payment status filter
    const matchesPayment =
      filters.payment === "All" ||
      (order.PaymentStatus || order.paymentStatus) === filters.payment;

    // Date filter (simplified for demo)
    const matchesDate =
      filters.date === "All" ||
      (filters.date === "Today" &&
        order.date === new Date().toISOString().split("T")[0]) ||
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
    return (
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  const handleBulkAction = (action) => {
    // In a real app, you would update the server and then the local state
    // For demo, we'll just update the local state
    let updatedOrders = [...allOrders];

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
        setSelectedOrders([]); // Clear selected allOrders after deletion
        break;
      default:
        break;
    }

    setAllOrders(updatedOrders);
    setFilters((prev) => ({ ...prev, bulk: null })); // Reset bulk filter
  };

  const toggleOrderExpansion = (orderId) => {
    if (expandedOrders.includes(orderId)) {
      setExpandedOrders(expandedOrders.filter((id) => id !== orderId));
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

  const handleDelete = async (id) => {
    setRoleToDelete(id);
    setShowDeleteConfirmation(true);
    console.log(roleToDelete);
  };

  const confirmDelete = async () => {
    try {
      setIsLoading(true);
      await apiInstance.delete(`orders/delete/${roleToDelete}`);
      setAllOrders((prev) =>
        prev.filter((order) => order._id !== roleToDelete)
      );
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
    setFilters((prev) => ({ ...prev, [filterType]: value }));

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

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    const currentPageOrderIds = currentOrders.map((order) => order.id);

    if (isChecked) {
      // Add all current page orders to selection
      setSelectedOrders((prev) => {
        const newSelection = [...prev];
        currentPageOrderIds.forEach((id) => {
          if (!newSelection.includes(id)) {
            newSelection.push(id);
          }
        });
        return newSelection;
      });
    } else {
      // Remove all current page orders from selection
      setSelectedOrders((prev) =>
        prev.filter((id) => !currentPageOrderIds.includes(id))
      );
    }
  };

  const handleSelectOrder = (orderId) => {
    setSelectedOrders((prev) => {
      if (prev.includes(orderId)) {
        return prev.filter((id) => id !== orderId);
      } else {
        return [...prev, orderId];
      }
    });
  };

  useEffect(() => {
    // Update "Select All" checkbox state based on filtered rows
    const allFilteredSelected = filteredOrders.every((order) =>
      selectedOrders.includes(order.id)
    );
    setIsAllSelected(allFilteredSelected && filteredOrders.length > 0);
  }, [selectedOrders, filteredOrders]);

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
              {isBelow1400 && (
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500"></th>
              )}
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Order ID
              </th>

              {!isBelow1400 && (
                <>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    Items
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    Customer
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    Seller
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    Total
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    Delivery Status
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    Payment Method
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    Payment Status
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    Refund
                  </th>
                </>
              )}
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
  {currentOrders.map((order) => (
    <React.Fragment key={order._id}> {/* Changed from order.id to order._id */}
      <tr className="border-b border-gray-100 hover:bg-gray-50">
        {isBelow1400 && (
          <td className="py-3 px-4">
            <ViewExpandData
              isExpanded={expandedOrders.includes(order._id)}
              toggleExpanded={() => toggleOrderExpansion(order._id)}
            />
          </td>
        )}
        <td className="py-3 px-4">
          <input
            type="checkbox"
            checked={selectedOrders.includes(order._id)}
            onChange={() => handleSelectOrder(order._id)}
          />
        </td>
        <td className="py-3 px-4 text-sm text-gray-700">{order._id}</td>
        {!isBelow1400 && (
          <>
            <td className="py-3 px-4 text-sm text-gray-500">{order.items.length}</td>
            <td className="py-3 px-4 text-sm text-gray-700">
              {order.user?.firstName} {order.user?.lastName}
            </td>
            <td className="py-3 px-4 text-sm text-gray-700">
              {order.items[0]?.sellerName} {/* Assuming first item's seller */}
            </td>
            <td className="py-3 px-4 text-sm text-gray-700">
              ${order.items.reduce((sum, item) => sum + (item.priceSale * item.quantity), 0).toFixed(2)}
            </td>
            <td className="py-3 px-4">
              <span className={`text-sm font-medium ${getStatusColor(order.DeliveryStatus)}`}>
                {order.DeliveryStatus}
              </span>
            </td>
            <td className="py-3 px-4 text-sm text-gray-700">{order.paymentMethod}</td>
            <td className="py-3 px-4 text-sm text-gray-700">{order.PaymentStatus}</td>
            <td className="py-3 px-4 text-sm text-gray-700">{order.Refund}</td>
          </>
        )}
        <td className="py-3 px-4">
          <div className="flex items-center gap-[.2cm]">
            <div className="p-[.2cm] bg-blue-100 w-fit rounded-[50%] cursor-pointer">
              <Eye size={15} color="blue" />
            </div>
            <div className="p-[.2cm] bg-[#e8d8ff] w-fit rounded-[50%] cursor-pointer">
              <Download size={15} color="blueviolet" />
            </div>
            <div
              className="p-[.2cm] bg-red-100 w-fit rounded-[50%] cursor-pointer"
              onClick={() => handleDelete(order._id)}
            >
              <Trash size={15} color="red" />
            </div>
          </div>
        </td>
      </tr>
      {expandedOrders.includes(order._id) && isBelow1400 && (
        <tr>
          <td colSpan="10">
            <table className="min-w-full bg-gray-100 p-4">
              <tbody>
                <tr>
                  <td className="py-2 px-4 font-semibold">Items</td>
                  <td className="py-2 px-4">{order.items.length}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-semibold">Customer</td>
                  <td className="py-2 px-4">
                    {order.user?.firstName} {order.user?.lastName}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-semibold">Seller</td>
                  <td className="py-2 px-4">{order.items[0]?.sellerName}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-semibold">Total</td>
                  <td className="py-2 px-4">
                    ${order.items.reduce((sum, item) => sum + (item.priceSale * item.quantity), 0).toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-semibold">Delivery Status</td>
                  <td className="py-2 px-4">
                    <span className={`font-medium ${getStatusColor(order.DeliveryStatus)}`}>
                      {order.DeliveryStatus}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-semibold">Payment Method</td>
                  <td className="py-2 px-4">{order.paymentMethod}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-semibold">Payment Status</td>
                  <td className="py-2 px-4">{order.PaymentStatus}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-semibold">Refund</td>
                  <td className="py-2 px-4">{order.Refund}</td>
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
                <h2 className="text-xl font-bold text-gray-800">
                  Delete Confirmation
                </h2>
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
          Showing {indexOfFirstItem + 1} to{" "}
          {Math.min(indexOfLastItem, filteredOrders.length)} of{" "}
          {filteredOrders.length} entries
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default LatestOrders;
