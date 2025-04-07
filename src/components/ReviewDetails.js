


import React, { useState } from "react";
import "./ReviewDetails.css";

function ReviewDetails() {
  const [activeTab, setActiveTab] = useState("reviews");
  const [isPublished, setIsPublished] = useState(true); // Switch state
  const [selectedState, setSelectedState] = useState(""); // State filter
  const [selectedDistrict, setSelectedDistrict] = useState(""); // District filter

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // Toggle Switch Handler
  const togglePublished = () => {
    setIsPublished(!isPublished);
  };

  // States and Districts Data
  const states = [
    "Select State",
    "Andhra Pradesh",
    "Bihar",
    "Delhi",
    "Gujarat",
    "Karnataka",
    "Maharashtra",
    "Punjab",
    "Rajasthan",
    "Tamil Nadu",
    "Uttar Pradesh",
    "West Bengal",
  ];

  const districts = {
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur"],
    Bihar: ["Patna", "Gaya", "Bhagalpur"],
    Delhi: ["New Delhi", "North Delhi", "South Delhi"],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
    Karnataka: ["Bengaluru", "Mysuru", "Mangaluru"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Punjab: ["Amritsar", "Ludhiana", "Jalandhar"],
    Rajasthan: ["Jaipur", "Jodhpur", "Udaipur"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"],
    "West Bengal": ["Kolkata", "Darjeeling", "Siliguri"],
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedDistrict(""); // Reset district when state changes
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  return (
    <div className="review-detail-container p-5">
      <div className="review-header">
        <h2>Detail Reviews</h2>
        {/* <button className="add-review-button">Add Custom Reviews</button> */}
      </div>

      <div className="product-review">
        <div className="product-info">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_2CbogDKB0QPLB2m-rRnMC_e3U9mxkCA-A&s"
            alt="Acer Nitro 50 N50-620-UA91 Gaming Desktop"
            className="product-image"
          />
          <div className="product-name ml-2 mb-2">
            Acer Nitro 50 N50-620-UA91 Gaming Desktop
          </div>
        </div>
        <div className="rating">
          <span className="rating-label">RATING</span>
          <span className="fiv">5</span>
          <div className="star-rating">★★★★★</div>
        </div>
      </div>

      {/* <div className="review-tabs">
        <button
          className={`tab ${activeTab === "reviews" ? "active" : ""}`}
          onClick={() => handleTabClick("reviews")}
        >
          reviews (1)
        </button>
        <button
          className={`tab ${activeTab === "customReviews" ? "active" : ""}`}
          onClick={() => handleTabClick("customReviews")}
        >
          Custom Reviews (0)
        </button>

        <select
          className="filter-dropdown"
          value={selectedState}
          onChange={handleStateChange}
        >
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>

        
        <select
          className="filter-dropdown"
          value={selectedDistrict}
          onChange={handleDistrictChange}
          disabled={!selectedState || selectedState === "Select State"}
        >
          <option value="">Select District</option>
          {selectedState &&
            districts[selectedState]?.map((district, index) => (
              <option key={index} value={district}>
                {district}
              </option>
            ))}
        </select>
      </div> */}

      {activeTab === "reviews" && (
        <div className="review-list">
          <div className="review-header-row">
            <span className="header-cell">#</span>
            <span className="header-cell">CUSTOMER</span>
            <span className="header-cell">RATING</span>
            <span className="header-cell ml-4">COMMENT</span>
            <span className="header-cell pub">PUBLISHED</span>
          </div>
          <div className="review-item">
            <div className="reviewer-info">
              <span className="review-number ">1</span>
            </div>
            <div className="review-customer d-flex">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHETb8j9F4mCB9OVZFCMMfyqUpRwRRZJ8wyw&s"
                alt="Paul K. Jensen"
                className="reviewer-image "
              />
              <span className="reviewer-name">Paul K. Jensen</span>
            </div>
            <div>
              <span className="review-rating ml-4">5</span>
            </div>
            <div className="review-details ml-5 mt-5">
              <p className="review-comment ">
                This laptop has been a lifesaver! The performance is quick,
                especially with multitasking, and the display quality is
                stunning. Perfect for both work and play. Would highly recommend
                it to anyone looking for a reliable device!
              </p>
            </div>
            <div className="review-published">
              <span className="published-date">10 November, 2024</span>
              <div
                className={`toggle-switch ${isPublished ? "active" : ""}`}
                onClick={togglePublished}
              >
                <div className="toggle-slider"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "customReviews" && (
        <div className="review-list">
          <div className="review-header-row">
            <span className="header-cell">#</span>
            <span className="header-cell">CUSTOMER</span>
            <span className="header-cell">RATING</span>
            <span className="header-cell ml-4">COMMENT</span>
            <span className="header-cell pub">PUBLISHED</span>
            <span className="header-cell op">OPTIONS</span>
          </div>
          <div className="empty-state">
            <p className="empty-text">Nothing found</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewDetails;