



import React, { useEffect, useState } from "react";
import ProductTable from "./ProductTable";
import Dropdown from "../Dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

function CommissionHistory() {
  const [commissionHistory, setCommissionHistory] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const itemsPerPage = 10;

  // Toggle dropdown
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setOpenDropdown(null);
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const dropdowns = {
    bulk: {
      label: selectedOption || "Choose seller",
      options: ["Mark as Delivered", "Mark as Pending", "Delete Selected"],
    },
  };

  // API Call to fetch data
  useEffect(() => {
    const fetchCommissionHistory = async () => {
      try {
        const res = await axios.get("https://e-commerce-backend-1-0.onrender.com/api/commisionhistory"); // Update with your actual API route
        setCommissionHistory(res.data.data || []);
      } catch (err) {
        console.error("Error fetching commission history:", err);
      }
    };

    fetchCommissionHistory();
  }, []);

  const filteredData = commissionHistory.filter((item) => {
    if (!startDate || !endDate) return true;
    const itemDate = new Date(item.createdAt);
    return itemDate >= startDate && itemDate <= endDate;
  });

  const columns = [
    {
      header: "#",
      accessor: (_, index) => index + 1,
    },
    {
      header: "Order Code",
      accessor: (item) => item.orderCode,
    },
    {
      header: "Admin Commission (INR)",
      accessor: (item) => `₹${item.adminCommission.toLocaleString("en-IN")}`,
    },
    {
      header: "Seller Earning (INR)",
      accessor: (item) => `₹${item.sellerEarning.toLocaleString("en-IN")}`,
    },
    
    {
      header: "Created At",
      accessor: (item) =>
        new Date(item.createdAt).toLocaleDateString("en-GB"),
    },
  ];

  return (
    <>
      {/* <h1 className="text-xl font-bold text-gray-800 m-5">
        Commission History Report
      </h1> */}
      <h1 className="text-xl font-bold text-gray-800 m-8 text-center ">
      Commission History Report
      </h1>
      <div className="bg-white p-3 shadow-lg rounded-lg mb-6 mx-4 md:mx-10 lg:mx-20 xl:mx-40">
        <div className="flex flex-col mb-3 md:flex-row md:items-center md:justify-between border-b">
          <h1 className="text-base text-gray-800 m-5">Commission History</h1>
          <div className="flex flex-wrap gap-4 items-center">
            {Object.entries(dropdowns).map(([key, { label, options }]) => (
              <Dropdown
                key={key}
                label={label}
                options={options}
                isOpen={openDropdown === key}
                onToggle={() => toggleDropdown(key)}
                onSelect={handleSelectOption}
              />
            ))}

            <div className="flex items-center space-x-2">
              <DatePicker
                selectsRange
                startDate={startDate}
                endDate={endDate}
                onChange={handleDateChange}
                isClearable
                placeholderText="Select date range"
                className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              className="px-6 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600"
              onClick={() => setCurrentPage(1)} // reset to first page on filter
            >
              Filter
            </button>
          </div>
        </div>

        <ProductTable
          columns={columns}
          data={filteredData}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default CommissionHistory;
