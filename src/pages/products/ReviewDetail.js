// import React, { useState } from 'react';
// import './ReviewDetail.css';

// function ReviewDetail() {
//   const [activeTab, setActiveTab] = useState('reviews'); // सक्रिय टैब का स्टेट

//   const handleTabClick = (tabName) => {
//     setActiveTab(tabName);
//   };

//   return (
//     <div className="review-detail-container">
//       <div className="review-header">
//         <h2>Detail Reviews</h2>
//         <button className="add-review-button">Add Custom Reviews</button>
//       </div>

//       <div className="product-review">
//         <div className="product-info">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_2CbogDKB0QPLB2m-rRnMC_e3U9mxkCA-A&s"
//             alt="Acer Nitro 50 N50-620-UA91 Gaming Desktop"
//             className="product-image"
//           />
//           <div className="product-name ml-2 mb-2">
//             Acer Nitro 50 N50-620-UA91 Gaming Desktop
//           </div>
//         </div>
//         <div className="rating ">
//           <span className="rating-label">RATING</span>
//           <div className="star-rating">

//             ★★★★★
//           </div>
//         </div>
//       </div>

//       <div className="review-tabs">
//         <button
//           className={`tab ${activeTab === 'reviews' ? 'active' : ''}`}
//           onClick={() => handleTabClick('reviews')}
//         >
//           reviews (1)
//         </button>
//         <button
//           className={`tab ${activeTab === 'customReviews' ? 'active' : ''}`}
//           onClick={() => handleTabClick('customReviews')}
//         >
//           Custom Reviews (0)
//         </button>

//         <select className="filter-dropdown">
//           <option>Filter by state</option>
//         </select>
//       </div>

//       {activeTab === 'reviews' && (
//         <div className="review-list">
//           <div className="review-item">
//             <div className="reviewer-info">
//               <span className="review-number">1</span>
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHETb8j9F4mCB9OVZFCMMfyqUpRwRRZJ8wyw&s"
//                 alt="Paul K. Jensen"
//                 className="reviewer-image"
//               />
//               <span className="reviewer-name">Paul K. Jensen</span>
//             </div>
//             <div className="review-details">
//               <span className="review-rating">5</span>
//               <p className="review-comment">
//                 This laptop has been a lifesaver! The performance is quick, especially with multitasking, and the display quality is stunning. Perfect for both work and play. Would highly recommend it to anyone looking for a reliable device!
//               </p>
//               <div className="review-images">
//                 <img src="https://www.designinfo.in/wp-content/uploads/2023/01/Apple-iPhone-14-Pro-Mobile-Phone-493177786-i-1-1200Wx1200H-485x485-optimized.jpeg" alt="Review 1" className="review-image" />
//                 <img src="https://image.storageservice.be/images/ez_prod/2750/501974/hires/iphone-13-128gb-midnight-1-1631715484.png@jpg?width=400&height=300" alt="Review 2" className="review-image ml-2" />
//                 <img src="https://www.elplace.com/39022-large_default/iphone-16-pro-63-128-go-8-go-ram-noir.jpg" alt="Review 3" className="review-image ml-2" />
//               </div>
//             </div>
//             <div className="review-published">
//               <span className="published-date">10 November, 2024</span>
//               <div className="toggle-switch">

//                 <div className="toggle-slider active"></div>
//               </div>
//             </div>
//           </div>

//         </div>
//       )}

//       {activeTab === 'customReviews' && (
//         <div className="custom-review-list">

//           <p></p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ReviewDetail;



import React, { useState } from "react";
import "./ReviewDetail.css";

function ReviewDetail() {
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
    <div className="review-detail-container">
      <div className="review-header">
        <h2>Detail Reviews</h2>
        <button className="add-review-button">Add Custom Reviews</button>
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

      <div className="review-tabs">
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

        {/* Filter by State */}
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

        {/* Filter by District */}
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
      </div>

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

export default ReviewDetail;