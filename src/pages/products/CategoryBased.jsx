import React, { useState } from "react";
import "./CategoryBased.css";
import { GiLargeDress, GiClothes } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { useCategoryContext } from "../../categoryContext"; // Adjust import path as needed
import api from "../../utils/axios"



const CategoryDiscountTable = () => {
  const { categoryData, setCategoryData } = useCategoryContext();

  // Initialize discounts state from context or create default
  // const [discounts, setDiscounts] = useState(
  //   categories.reduce((acc, category) => {
  //     acc[category.id] = {
  //       discount: categoryData.discount || 0,
  //       sellerProduct: categoryData.sallerProduct || false,
  //       startDate: categoryData.discountDateRange.from.split('T')[0] || "",
  //       endDate: categoryData.discountDateRange.to.split('T')[0] || ""
  //     };
  //     return acc;
  //   }, {})
  // );

  // const handleDiscountChange = (id, value) => {
  //   const updatedDiscounts = {
  //     ...discounts,
  //     [id]: { ...discounts[id], discount: value },
  //   };
  //   setDiscounts(updatedDiscounts);
  //   updateContext(updatedDiscounts[id]);
  // };

  // const handleToggle = (id) => {
  //   const updatedDiscounts = {
  //     ...discounts,
  //     [id]: { ...discounts[id], sellerProduct: !discounts[id].sellerProduct },
  //   };
  //   setDiscounts(updatedDiscounts);
  //   updateContext(updatedDiscounts[id]);
  // };

  // const handleStartDateChange = (id, value) => {
  //   const updatedDiscounts = {
  //     ...discounts,
  //     [id]: { ...discounts[id], startDate: value },
  //   };
  //   setDiscounts(updatedDiscounts);
  //   updateContext(updatedDiscounts[id]);
  // };

  // const handleEndDateChange = (id, value) => {
  //   const updatedDiscounts = {
  //     ...discounts,
  //     [id]: { ...discounts[id], endDate: value },
  //   };
  //   setDiscounts(updatedDiscounts);
  //   updateContext(updatedDiscounts[id]);
  // };

  // const updateContext = (discountData) => {
  //   setCategoryData(prev => ({
  //     ...prev,
  //     discount: discountData.discount,
  //     sallerProduct: discountData.sellerProduct,
  //     discountDateRange: {
  //       from: `${discountData.startDate}T00:00:00.000Z`,
  //       to: `${discountData.endDate}T00:00:00.000Z`
  //     }
  //   }));
  // };

  // const handleSetDiscount = (id) => {

  //   console.log("Setting discount for category:", id, discounts[id]);
  //   alert(`Discount settings saved for ${categories.find(c => c.id === id).name}`);
  // };

  const changeDiscount = (id, e) => {
    setCategoryData(prevData =>
      prevData.map(category =>
        category._id === id
          ? { ...category, discount: e.target.value }
          : category
      )
    );
  };

  const changeStartDate = (id, e) => {
    setCategoryData(prevData =>
      prevData.map(category =>
        category._id === id
          ? {
            ...category, discountDateRange: {
              ...category.discountDateRange,
              from: e.target.value
            }
          }
          : category
      )
    );
  }

  const changeEndDate = (id, e) => {
    setCategoryData(prevData =>
      prevData.map(category =>
        category._id === id
          ? {
            ...category, discountDateRange: {
              ...category.discountDateRange,
              to: e.target.value
            }
          }
          : category
      )
    );
  }

  const changeSellerData = (id, val) => {
    setCategoryData(prevData =>
      prevData.map(category =>
        category._id === id
          ? { ...category, sallerProduct: val }
          : category
      )
    );
  };

  const handleSetDiscount = async (id) => {
    categoryData.map(async (c) => {
      if (c._id == id) {
        await api.put(`categories/category-based-discount/${id}`, {
          discount: c.discount,
          discountDateRange: c.discountDateRange,
          sallerProduct: c.sallerProduct

        })
        alert("Category discount updated")
      }
     

    })
  }




  return (
    <div className="container-category">
      <h2 className="category-title">Set Category Wise Product Discount</h2>
      <div className="divider"></div>
      <div className="search-bar">
        <h5>Category</h5>
        <input type="text" placeholder="Type name & Enter" />
      </div>
      <div className="table-container">
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
            {/* {categories.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td className="icon">{category.icon}</td>
                <td className="category-name">{category.name}</td>
                <td>{category.parentCategory}</td>
                <td>
                  <div className="discount-input-container">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={discounts[category.id]?.discount || 0}
                      onChange={(e) => handleDiscountChange(category.id, e.target.value)}
                      className="discount-input"
                    />
                  </div>
                </td>
                <td>
                  <div className="date-range-container">
                    <input
                      type="date"
                      value={discounts[category.id]?.startDate || ""}
                      onChange={(e) => handleStartDateChange(category.id, e.target.value)}
                      className="date-input"
                      placeholder="Start date"
                    />
                    <span className="date-range-separator">to</span>
                    <input
                      type="date"
                      value={discounts[category.id]?.endDate || ""}
                      onChange={(e) => handleEndDateChange(category.id, e.target.value)}
                      className="date-input"
                      placeholder="End date"
                      min={discounts[category.id]?.startDate}
                    />
                  </div>
                </td>
                <td>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={discounts[category.id]?.sellerProduct || false}
                      onChange={() => handleToggle(category.id)}
                    />
                    <span className="slider round"></span>
                  </label>
                </td>
                <td>
                  <button 
                    className="set-button"
                    onClick={() => handleSetDiscount(category.id)}
                  >
                    Set
                  </button>
                </td>
              </tr>
            ))} */}

            {
              categoryData && categoryData.map((c, i) => (
                <tr key={i + 1}>
                  <td>{i + 1} </td>
                  <td>
                    <img className="w-[1.5cm] " src={c.icon} alt="" />
                  </td>
                  <td>
                    {c.name}
                  </td>
                  <td>
                    {c.parentCategory}
                  </td>
                  <td>
                    <div className="discount-input-container">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={c.discount}
                        // onChange={(e) => handleDiscountChange(category.id, e.target.value)}
                        onChange={(e) => { changeDiscount(c._id, e) }}
                        className="discount-input"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="date-range-container">
                      <input
                        type="date"
                        value={
                          new Date(c.discountDateRange.from).toISOString().slice(0, 10)
                          || ""
                        }
                        // onChange={(e) => handleStartDateChange(category.id, e.target.value)}
                        onChange={(e) => { changeStartDate(c._id, e) }}
                        className="date-input"
                        placeholder="Start date"
                      />
                      <span className="date-range-separator">to</span>
                      <input
                        type="date"
                        value={
                          new Date(c.discountDateRange.to).toISOString().slice(0, 10)
                          || ""
                        }
                        // onChange={(e) => handleEndDateChange(category.id, e.target.value)}
                        onChange={(e) => { changeEndDate(c._id, e) }}
                        className="date-input"
                        placeholder="End date"
                      // min={discounts[category.id]?.startDate}
                      />
                    </div>
                  </td>
                  <td>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={c.sallerProduct}
                        // onChange={() => handleToggle(category.id)}
                        onChange={() => {
                          changeSellerData(c._id, !c.sallerProduct)
                        }}
                      />
                      <span className="slider round"></span>
                    </label>
                  </td>
                  <td>
                    <button
                      className="set-button"
                      // onClick={() => handleSetDiscount(category.id)}

                      onClick={() => { handleSetDiscount(c._id) }}
                    >
                      Set
                    </button>
                  </td>

                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryDiscountTable;