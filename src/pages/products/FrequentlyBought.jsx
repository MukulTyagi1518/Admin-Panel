import React, { useState } from "react";
import "./FrequentlyBought.css";
import { IoClose } from "react-icons/io5";

const FrequentlyBought = () => {
  const [selectedOption, setSelectedOption] = useState("product");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Categories with Subcategories
  const categories = [
    {
      label: "Women Clothing & Fashion",
      options: [
        { label: "Hot Categories", value: "hot_categories" },
        { label: "Party Dress", value: "party_dress" },
        { label: "Beauty & Health", value: "beauty_health" },
        { label: "Women Shoe", value: "women_shoe" },
      ],
    },
  ];

  // Open Modal
  const openModal = () => setShowModal(true);

  // Close Modal
  const closeModal = () => setShowModal(false);

  return (
    <div className="frequently-container">
      <h2 className="section-title">Frequently Bought</h2>

      {/* Radio Buttons */}
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="option"
            value="product"
            checked={selectedOption === "product"}
            onChange={() => setSelectedOption("product")}
          />
          Select Product
        </label>

        <label>
          <input
            type="radio"
            name="option"
            value="category"
            checked={selectedOption === "category"}
            onChange={() => setSelectedOption("category")}
          />
          Select Category
        </label>
      </div>

      {/* Category Dropdown */}
      {selectedOption === "category" && (
        <div className="category-dropdown">
          <label>Category</label>
          <select
            className="dropdown"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Choose Category</option>
            {categories.map((group, index) => (
              <optgroup key={index} label={group.label}>
                {group.options.map((option, i) => (
                  <option key={i} value={option.value}>
                    -- {option.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
      )}

      {/* Add More Button - Only Show for Product Selection */}
      {selectedOption === "product" && (
        <div className="category-dropdown-add">
           <button className="add-more-btn" onClick={openModal}>
          + Add More
        </button>
        </div>
       
      )}

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}><IoClose /></button>
            <h3>Add Products</h3>
            <select
              className="dropdown"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((group, index) => (
                <optgroup key={index} label={group.label}>
                  {group.options.map((option, i) => (
                    <option key={i} value={option.value}>
                      -- {option.label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <input type="text" className="search-input" placeholder="Search by Product Name" />
            <div className="modal-actions">
              <button className="btn btn-add" onClick={closeModal}>
                Add
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Buttons */}
      <div className="button-group">
        <button className="btn btn-unpublish">Save & Unpublish</button>
        <button className="btn btn-publish">Save & Publish</button>
      </div>
    </div>
  );
};

export default FrequentlyBought;
