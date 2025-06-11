

import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "../Dropdown"; // Make sure this exists and works
import ProductTable from "./ProductTable"; // Make sure this exists and supports expected props

function InhouseProductSale() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [productSales, setProductSales] = useState([]); // API data
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 10;

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setOpenDropdown(null);
  };

  const dropdowns = {
    bulk: {
      label: selectedOption || "Choose a category",
      options: ["Mark as Delivered", "Mark as Pending", "Delete Selected"],
    },
  };

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://e-commerce-backend-1-0.onrender.com/api/inhouse-sale-report");
        console.log("Fetched Data:", res.data.data);
        setProductSales(res.data.data || []);
      } catch (err) {
        console.error("Error fetching product sales:", err);
        setProductSales([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const columns = [
    {
      header: "#",
      accessor: (_, index) => (currentPage - 1) * itemsPerPage + index + 1,
    },
    {
      header: "Product Name",
      accessor: (item) => item.productName || "N/A",
    },
    {
      header: "Num of Sale",
      accessor: (item) => item.numOfSale ?? 0,
    },
  ];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {/* <h1 className="text-xl font-bold text-gray-800 m-5">
        Inhouse Product Sale Report
      </h1> */}
      <div>
      <h1 className="text-xl font-bold text-gray-800 m-8 text-center ">
        Inhouse Product Sale Report
      </h1>
      <div className="bg-white p-3 shadow-lg rounded-lg mb-6 mx-4 md:mx-10 lg:mx-20 xl:mx-40">
        <div className="flex flex-col mb-3 md:flex-row md:items-center border-b">
          <h1 className="text-base text-gray-800 m-5">Sort by category:</h1>
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
            <div className="flex">
              <button className="px-6 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600">
                Filter
              </button>
            </div>
          </div>
        </div>

        {loading ? (
          <p className="text-center text-gray-600 py-10">Loading...</p>
        ) : productSales.length === 0 ? (
          <p className="text-center text-red-500 py-10">No data found.</p>
        ) : (
          <ProductTable
            columns={columns}
            data={productSales}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
      </div>
    </>
  );
}

export default InhouseProductSale;
