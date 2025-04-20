import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Dropdown from "../Dropdown";

const OrderHeader = ({ onFilterChange, onSearch, currentFilters }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleFilterSelect = (filterType, value) => {
    onFilterChange(filterType, value);
    setOpenDropdown(null);
  };

  const dropdowns = {
    bulk: {
      label: "Bulk Action",
      options: ["Mark as Delivered", "Mark as Pending", "Delete Selected"],
      currentValue: currentFilters.bulk || "Bulk Action"
    },
    DeliveryStatus: {
      label: "Filter by Delivery",
      options: ["All", "Pending", "Shipping", "Delivered"],
      currentValue: currentFilters.DeliveryStatus
    },
    payment: {
      label: "Filter by Payment",
      options: ["All", "Paid", "Not Paid", "Refunded"],
      currentValue: currentFilters.payment
    },
    date: {
      label: "Filter by Date",
      options: ["All", "Today", "Last 7 Days", "This Month"],
      currentValue: currentFilters.date
    },
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">All Orders</h1>

        <div className="flex flex-wrap gap-4 items-center">
          {Object.entries(dropdowns).map(([key, { label, options, currentValue }]) => (
            <Dropdown
              key={key}
              label={label}
              options={options}
              currentValue={currentValue}
              isOpen={openDropdown === key}
              onToggle={() => toggleDropdown(key)}
              onSelect={(value) => handleFilterSelect(key, value)}
            />
          ))}

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