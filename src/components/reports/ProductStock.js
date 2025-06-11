



import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown";
import ProductTable from "./ProductTable";
import axios from "axios";

function ProductStock() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [productStock, setProductStock] = useState([]); // fetched data
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

  // Fetch product stock data from API
  useEffect(() => {
    const fetchProductStock = async () => {
      try {
        const response = await axios.get("https://e-commerce-backend-1-0.onrender.com/api/product-stock-report");
        const formattedData = response.data.map(item => ({
          productName: item.productName,
          productStock: item.stock,
        }));
        setProductStock(formattedData);
      } catch (error) {
        console.error("Error fetching product stock:", error);
      }
    };

    fetchProductStock();
  }, []);

  const columns = [
    {
      header: "Product Name",
      accessor: (item) => item.productName,
    },
    {
      header: "Stock",
      accessor: (item) => item.productStock,
    },
  ];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <h1 className="text-xl font-bold text-gray-800 m-5">
        Product wise stock report
      </h1>
      <div className="bg-white p-3 shadow-sm mb-6 mx-4 md:mx-10 lg:mx-20 xl:mx-40">
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

        <ProductTable
          columns={columns}
          data={productStock}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default ProductStock;
