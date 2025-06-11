import React, { useState } from "react";
import "./CategoryBased.css";
import { useCategoryContext } from "../../categoryContext"; // Adjust import path as needed
import axios from "axios"
import Switch from "../../components/Switch";



const CategoryDiscountTable = () => {
  const { categoryData, setCategoryData } = useCategoryContext();
  const [searchTerm, setSearchTerm] = useState(""); // State to track the search term

  const changeDiscount = (id, e) => {
    setCategoryData((prevData) =>
      prevData.map((category) =>
        category._id === id
          ? { ...category, discount: e.target.value }
          : category
      )
    );
  };

  const changeStartDate = (id, e) => {
    setCategoryData((prevData) =>
      prevData.map((category) =>
        category._id === id
          ? {
              ...category,
              discountDateRange: {
                ...category.discountDateRange,
                from: e.target.value,
              },
            }
          : category
      )
    );
  };

  const changeEndDate = (id, e) => {
    setCategoryData((prevData) =>
      prevData.map((category) =>
        category._id === id
          ? {
              ...category,
              discountDateRange: {
                ...category.discountDateRange,
                to: e.target.value,
              },
            }
          : category
      )
    );
  };

  const changeSellerData = (id, val) => {
    setCategoryData((prevData) =>
      prevData.map((category) =>
        category._id === id ? { ...category, sallerProduct: val } : category
      )
    );
  };

  const handleSetDiscount = async (id) => {
    categoryData.map(async (c) => {
      if (c._id === id) {
        await axios.put(`https://e-commerce-backend-1-0.onrender.com/api/categories/category-based-discount/${id}`, {
          discount: c.discount,
          discountDateRange: c.discountDateRange,
          sallerProduct: c.sallerProduct,
        });
        alert("Category discount updated");
      }
    });
  };

  // Filter categories based on the search term
  const filteredCategories = categoryData.filter(
    (category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.parentCategory.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-category">
      <h2 className="category-title">Set Category Wise Product Discount</h2>
      {categoryData.length > 0 ? (
        <div className="search-bar">
          <p className="font-medium mx-2">Category</p>
          <input
            type="text"
            placeholder="Type name & Enter"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          />
        </div>
      ) : null}
      <div className="divider"></div>

      <div className="table-container">
        {filteredCategories.length > 0 ? (
          <table className="discount-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Icon</th>
                <th>Name</th>
                <th>Parent Category</th>
                <th>Discount</th>
                <th>Discount Date Range</th>
                <th>Seller Products</th>
                <th className="action">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredCategories.map((c, i) => (
                <tr key={i + 1}>
                  <td>{i + 1} </td>
                  <td>
                    <img className="w-[1.5cm]" src={c.icon} alt="" />
                  </td>
                  <td>{c.name}</td>
                  <td>{c.parentCategory}</td>
                  <td>
                    <div className="discount-input-container">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={c.discount}
                        onChange={(e) => {
                          changeDiscount(c._id, e);
                        }}
                        className="discount-input"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="date-range-container">
                      <input
                        type="date"
                        value={
                          new Date(c.discountDateRange.from)
                            .toISOString()
                            .slice(0, 10) || ""
                        }
                        onChange={(e) => {
                          changeStartDate(c._id, e);
                        }}
                        className="date-input"
                        placeholder="Start date"
                      />
                      <span className="date-range-separator">to</span>
                      <input
                        type="date"
                        value={
                          new Date(c.discountDateRange.to)
                            .toISOString()
                            .slice(0, 10) || ""
                        }
                        onChange={(e) => {
                          changeEndDate(c._id, e);
                        }}
                        className="date-input"
                        placeholder="End date"
                      />
                    </div>
                  </td>
                  <td>
                    {/* <label className="switch">
                      <input
                        type="checkbox"
                        checked={c.sallerProduct}
                        onChange={() => {
                          changeSellerData(c._id, !c.sallerProduct);
                        }}
                      />
                      <span className="slider round"></span>
                    </label> */}
                    <Switch className="pl-5"/>
                  </td>
                  <td>
                    <button
                      className="set-button"
                      onClick={() => {
                        handleSetDiscount(c._id);
                      }}
                    >
                      Set
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>
            <p className="p-[1cm] text-center">No category to display!!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryDiscountTable;
