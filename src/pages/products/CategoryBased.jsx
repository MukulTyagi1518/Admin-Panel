import React, { useState } from "react";
import "./CategoryBased.css";
import { GiLargeDress } from "react-icons/gi";
import { GiClothes } from "react-icons/gi";
import { FaTools } from "react-icons/fa";

const categories = [
  {
    id: 1,
    icon: <GiLargeDress />,
    name: "Women Clothing & Fashion",
    parentCategory: "—",
  },
  {
    id: 2,
    icon: <GiClothes />,
    name: "Men Clothing & Fashion",
    parentCategory: "—",
  },
  {
    id: 3,
    icon: <FaTools />,
    name: "Home Improvement & Tools",
    parentCategory: "—",
  },
  {
    id: 4,
    icon: "—",
    name: "Official Equipment",
    parentCategory: "Computer & Accessories",
  },
  {
    id: 5,
    icon: "—",
    name: "Wedding & Engagement",
    parentCategory: "Jewelry & Watches",
  },
  {
    id: 6,
    icon: "—",
    name: "Men’s Watch",
    parentCategory: "Jewelry & Watches",
  },
  {
    id: 7,
    icon: "—",
    name: "Official Equipment",
    parentCategory: "Computer & Accessories",
  },
  {
    id: 8,
    icon: "—",
    name: "Women shoe",
    parentCategory: "Hot Categories",
  },
  {
    id: 9,
    icon: "—",
    name: "Men sleep & lounge",
    parentCategory: "Underwear & Loungewear Accessories",
  },
  {
    id: 10,
    icon: "—",
    name: "Mens swimwear",
    parentCategory: "Swimming",
  },
 
];

const CategoryDiscountTable = () => {
  const [discounts, setDiscounts] = useState(
    categories.reduce((acc, category) => {
      acc[category.id] = { discount: 0, sellerProduct: false, date: "" };
      return acc;
    }, {})
  );

  const handleDiscountChange = (id, value) => {
    setDiscounts((prev) => ({
      ...prev,
      [id]: { ...prev[id], discount: value },
    }));
  };

  const handleToggle = (id) => {
    setDiscounts((prev) => ({
      ...prev,
      [id]: { ...prev[id], sellerProduct: !prev[id].sellerProduct },
    }));
  };

  const handleDateChange = (id, value) => {
    setDiscounts((prev) => ({
      ...prev,
      [id]: { ...prev[id], date: value },
    }));
  };

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
            {categories.map((category) => (
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
                                value={discounts[category.id].discount}
                                onChange={(e) => handleDiscountChange(category.id, e.target.value)}
                                className="discount-input"
                            />
                        </div>
                    </td>
                <td>
                  <input
                    type="date"
                    value={discounts[category.id].date}
                    onChange={(e) => handleDateChange(category.id, e.target.value)}
                    className="date-input"
                  />
                </td>
                <td>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={discounts[category.id].sellerProduct}
                      onChange={() => handleToggle(category.id)}
                    />
                    <span className="slider round"></span>
                  </label>
                </td>
                <td>
                  <button className="set-button">Set</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryDiscountTable;
