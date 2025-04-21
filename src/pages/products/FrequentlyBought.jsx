import React, { useState } from "react";
import "./FrequentlyBought.css";
import { IoClose } from "react-icons/io5";
import { useProductContext } from "../../productContex";
import axios from "axios"
import api from "../../utils/axios.js"
import { useNavigate } from "react-router-dom";

const FrequentlyBought = () => {
  const { productData, setProductData, setFetchProducts } = useProductContext();
  const [showModal, setShowModal] = useState(false);
  const [product, setproduct] = useState("");
  const navigate = useNavigate()

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

  const handleSelectionChange = (type) => {
    setProductData((prev) => ({
      ...prev,
      frequentlyBought: { ...prev.frequentlyBought, selectionType: type },
    }));
  };

  const handleCategoryChange = (e) => {
    setProductData((prev) => ({
      ...prev,
      frequentlyBought: {
        ...prev.frequentlyBought,
        categories: [
          ...(prev.frequentlyBought.categories || []), // Keep existing categories
          e.target.value, // Add the new category
        ],
      },
    }));
  };


  const handleAddProduct = () => {
    if (product) {
      setProductData((prev) => ({
        ...prev,
        frequentlyBought: {
          ...prev.frequentlyBought,
          products: [
            ...(prev.frequentlyBought.products || []),
            product,
          ],
        },
      }));
      setproduct(""); // Reset the selected product 
      setShowModal(false); // Close the modal
    }
  };
  const handleSubmit = async () => {
    console.log("Submitting:", productData);

    const formDataToSend = new FormData();

    // Append basic info
    formDataToSend.append("name", productData.name);
    formDataToSend.append("brand", productData.brand);
    formDataToSend.append("unit", productData.unit);
    formDataToSend.append("weight", productData.weight);
    formDataToSend.append("minPurchaseQty", productData.minPurchaseQty);
    formDataToSend.append("barcode", productData.barcode);
    formDataToSend.append("description", productData.description);
    formDataToSend.append("refundable", productData.refundable);
    formDataToSend.append("refundNote", productData.refundNote);
    formDataToSend.append("featured", productData.featured);
    formDataToSend.append("todaysDeal", productData.todaysDeal);
    formDataToSend.append("videoProvider", productData.videoProvider);
    formDataToSend.append("videoLink", productData.videoLink);
    formDataToSend.append("warranty", productData.warranty);

    // Append files
    if (productData.thumbnailImage) {
      formDataToSend.append("thumbnailImage", productData.thumbnailImage);
    }
    if (productData.pdfSpecification) {
      formDataToSend.append("pdfSpecification", productData.pdfSpecification);
    }

    // Append JSON fields as string
    formDataToSend.append("category", productData.category);
    formDataToSend.append("tags", productData.tags);
    formDataToSend.append("colors", productData.colors);
    formDataToSend.append("attributes", productData.attributes);

    // Append gallery images as files
    productData.galleryImages.forEach((file, index) => {
      formDataToSend.append(`galleryImages`, file);
    });

    // Append Price & Stock
    formDataToSend.append("unitPrice", productData.unitPrice);
    formDataToSend.append("discountDate", productData.discountDate);
    formDataToSend.append("discount", productData.discount);
    formDataToSend.append("discountType", productData.discountType);
    formDataToSend.append("setPoint", productData.setPoint);
    formDataToSend.append("quantity", productData.quantity);
    formDataToSend.append("sku", productData.sku);
    formDataToSend.append("externalLink", productData.externalLink);
    formDataToSend.append("externalLinkButtonText", productData.externalLinkButtonText);
    formDataToSend.append("lowStockQuantityWarning", productData.lowStockQuantityWarning);
    formDataToSend.append("showStockQuantity", productData.showStockQuantity);
    formDataToSend.append("showStockWithTextOnly", productData.showStockWithTextOnly);
    formDataToSend.append("hideStock", productData.hideStock);

    // Append SEO Meta
    formDataToSend.append("metaTitle", productData.metaTitle);
    formDataToSend.append("metaDescription", productData.metaDescription);
    formDataToSend.append("metaImage", productData.metaImage);

    // Append Shipping Configuration
    formDataToSend.append("shippingConfiguration", productData.shippingConfiguration)

    // Append Tax & VAT
    formDataToSend.append("tax", productData.tax);
    formDataToSend.append("vat", productData.vat);

    // Append Flash Deal
    formDataToSend.append("flashDeal", productData.flashDeal);

    // Append Frequently Bought
    formDataToSend.append("frequentlyBought", productData.frequentlyBought);


    try {
      await api.post("/products/store", formDataToSend)

      alert("Product added")
      navigate('/products/all')
      setFetchProducts(true)
    }
    catch (err) {
      console.log(err)
    }

  };
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
            checked={productData.frequentlyBought.selectionType === "product"}
            onChange={() => handleSelectionChange("product")}
          />
          Select Product
        </label>

        <label>
          <input
            type="radio"
            name="option"
            value="category"
            checked={productData.frequentlyBought.selectionType === "category"}
            onChange={() => handleSelectionChange("category")}
          />
          Select Category
        </label>
      </div>

      {/* Category Dropdown */}
      {productData.frequentlyBought.selectionType === "category" && (
        <div className="category-dropdown">
          <label>Category</label>
          <select
            className="dropdown"
            value={productData.frequentlyBought.category}
            onChange={handleCategoryChange}
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
      {/* Selected Products */}
      {productData.frequentlyBought.selectionType === "product" &&
        productData.frequentlyBought.products &&
        productData.frequentlyBought.products.length > 0 && (
          <div className="selected-products">
            <h3>Selected Products:</h3>
            <ul>
              {productData.frequentlyBought.products.map(
                (product, index) => (
                  <li key={index}>{product}</li>
                )
              )}
            </ul>
          </div>
        )}

      {/* Add More Button - Only for Product Selection */}
      {productData.frequentlyBought.selectionType === "product" && (
        <div className="category-dropdown-add">
          <button className="add-more-btn" onClick={() => setShowModal(true)}>
            + Add More
          </button>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowModal(false)}>
              <IoClose />
            </button>
            <h3>Add Products</h3>
            <select
              className="dropdown"
              value={product}
              onChange={(e) => setproduct(e.target.value)}
            >
              <option value="">Select Product</option>
              {categories.map((group, index) => (
                <optgroup key={index} label={group.label}>
                  {group.options.map((option, i) => (
                    <option key={i} value={option.label}>
                      -- {option.label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <input
              type="text"
              className="search-input"
              placeholder="Search by Product Name"
            />
            <div className="modal-actions">
              <button className="btn btn-add" onClick={handleAddProduct}>
                Add
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Buttons */}
      <div className="flex gap-4 mt-9 justify-end ">
  <button
    className="bg-gray-200 text-gray-800 px-4 py-2 rounded shadow-md  hover:bg-gray-400 lg transition"
    onClick={handleSubmit}
  >
    Save & Unpublish
  </button>
  <button
    className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700 hover:shadow-lg transition"
    onClick={handleSubmit}
  >
    Save & Publish
  </button>
</div>

    </div>
  );
};

export default FrequentlyBought;
