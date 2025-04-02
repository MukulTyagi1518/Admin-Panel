import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Dropdown from "../Dropdown";

const OrderHeader = ({ onSearch }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Pass the search term to the parent component
  };

  const dropdowns = {
    bulk: {
      label: "Bulk Action",
      options: ["Mark as Delivered", "Mark as Pending", "Delete Selected"],
    },
    delivery: {
      label: "Filter by Delivery",
      options: ["All", "Pending", "Processing", "Delivered", "Cancelled"],
    },
    payment: {
      label: "Filter by Payment",
      options: ["All", "Paid", "Unpaid", "Refunded"],
    },
    date: {
      label: "Filter by Date",
      options: ["Today", "Last 7 Days", "This Month", "Last Month", "Custom Range"],
    },
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">All Orders</h1>

        <div className="flex flex-wrap gap-4 items-center">
          {Object.entries(dropdowns).map(([key, { label, options }]) => (
            <Dropdown
              key={key}
              label={label}
              options={options}
              isOpen={openDropdown === key}
              onToggle={() => toggleDropdown(key)}
            />
          ))}

          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search orders..."
              className="pl-10 pr-4 py-2 border rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHeader;