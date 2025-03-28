// import React, { useState } from "react";
// import "./Addreview.css";

// const CustomReviewForm = () => {
//   const [category, setCategory] = useState("");
//   const [product, setProduct] = useState("");
//   const [rating, setRating] = useState(0);
//   const [dateType, setDateType] = useState("system");
//   const [customDate, setCustomDate] = useState(""); // नया State for Custom Date
//   const [fileName, setFileName] = useState("Choose file");
//   // State to show/hide product details
//   const [showDetails, setShowDetails] = useState(false);


//   const handleFileChange = (event) => {
//     if (event.target.files.length > 0) {
//       setFileName(event.target.files[0].name);
//     } else {
//       setFileName("Choose file");
//     }
//   };

//   return (
//     <div className="custom-review-container">
//       <h2 className="form-title">Add New Custom Review</h2>

//       <form className="custom-review-form">
//         {/* Reviewer Name */}
//         <label className="form-label">Custom Reviewer Name *</label>
//         <input type="text" className="form-input" placeholder="Enter reviewer name" required />

//         {/* Reviewer Image Upload */}
//         <label className="form-label">Custom Reviewer Image</label>
//         <div className="file-upload-container">
//           <label className="file-upload-label">
//             <span className="file-upload-button">Browse</span>
//             <span className="file-upload-text">{fileName}</span>
//             <input type="file" className="file-upload-input" onChange={handleFileChange} />
//           </label>
          
//         </div>

//         <small className="info-text">
//           If you do not use a custom reviewer's image, it will show the default user image.
//         </small>

//         {/* Category Select */}
//         <label className="form-label">Category</label>
//         <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
//           <option value="">Select Category</option>
//           <option value="electronics">Electronics</option>
//           <option value="fashion">Fashion</option>
//           <option value="automobile">Automobile</option>
//         </select>

//         {/* Product Select */}
//         <label className="form-label">Product *</label>
//         <select className="form-select" value={product} onChange={(e) => setProduct(e.target.value)} required>
//           <option value="">Please Select Category First</option>
//           {category === "automobile" && <option value="hummer">Hummer EV 2025</option>}
//         </select>

//         <small className="info-text">Select Product for Custom Review</small>

//         {/* Rating */}
//         <label className="form-label">Rating *</label>
//         <div className="rating">
//           {[1, 2, 3, 4, 5].map((star) => (
//             <span key={star} className={`star ${star <= rating ? "selected" : ""}`} onClick={() => setRating(star)}>
//               ★
//             </span>
//           ))}
//         </div>

//         {/* Date Selection */}
//         <label className="form-label">Date *</label>
//         <div className="date-selection">
//           <label>
//             <input
//               type="radio"
//               value="system"
//               checked={dateType === "system"}
//               onChange={() => {
//                 setDateType("system");
//                 setCustomDate(""); // Reset Custom Date
//               }}
//             />
//             System Date
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="custom"
//               checked={dateType === "custom"}
//               onChange={() => setDateType("custom")}
//             />
//             Select
//           </label>
//         </div>

//         {/* अगर "Select" चुना गया है, तो Date Input दिखेगा */}
//         {dateType === "custom" && (
//           <input
//             type="date"
//             className="form-input"
//             value={customDate}
//             onChange={(e) => setCustomDate(e.target.value)}
//           />
//         )}

//         {/* Comment */}
//         <label className="form-label">Comment *</label>
//         <textarea className="form-input" rows="4" placeholder="Your review" required></textarea>

//         {/* Review Images */}
//         <label className="form-label">Review Images</label>
//         <div className="file-upload-container">
//           <label className="file-upload-label">
//             <span className="file-upload-button">Browse</span>
//             <span className="file-upload-text">{fileName}</span>
//             <input type="file" className="file-upload-input" onChange={handleFileChange} />
//           </label>
//           <p className="file-upload-info">These images are visible in product review page gallery. Upload square images.</p>
//         </div>

//         {/* Submit Button */}
//         <button type="submit" className="submit-btn">Submit Review</button>


        
//       </form>
//     </div>
//   );
// };

// export default CustomReviewForm;




import React, { useState } from "react";
import "./Addreview.css";

const CustomReviewForm = () => {
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState("");
  const [rating, setRating] = useState(0);
  const [dateType, setDateType] = useState("system");
  const [customDate, setCustomDate] = useState("");
  const [fileName, setFileName] = useState("Choose file");
  const [showDetails, setShowDetails] = useState(false);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName("Choose file");
    }
  };

  return (
    <div className="custom-review-container">
      <h2 className="form-title">Add New Custom Review</h2>

      <form className="custom-review-form">
        {/* Reviewer Name */}
        <label className="form-label">Custom Reviewer Name *</label>
        <input
          type="text"
          className="form-input"
          placeholder="Enter reviewer name"
          required
        />

        {/* Reviewer Image Upload */}
        <label className="form-label">Custom Reviewer Image</label>
        <div className="file-upload-container">
          <label className="file-upload-label">
            <span className="file-upload-button">Browse</span>
            <span className="file-upload-text">{fileName}</span>
            <input
              type="file"
              className="file-upload-input"
              onChange={handleFileChange}
            />
          </label>
        </div>

        <small className="info-text">
          If you do not use a custom reviewer's image, it will show the default
          user image.
        </small>

        {/* Category Select */}
        <label className="form-label">Category</label>
        <select
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="automobile">Automobile</option>
        </select>

        {/* Product Select */}
        <label className="form-label">Product *</label>
        <select
          className="form-select"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
        >
          <option value="">Please Select Category First</option>
          {category === "automobile" && (
            <option value="hummer">Hummer EV 2025</option>
          )}
        </select>

        <small className="info-text">Select Product for Custom Review</small>

        {/* Rating */}
        <label className="form-label">Rating *</label>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= rating ? "selected" : ""}`}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        {/* Date Selection */}
        <label className="form-label">Date *</label>
        <div className="date-selection">
          <label>
            <input
              type="radio"
              value="system"
              checked={dateType === "system"}
              onChange={() => {
                setDateType("system");
                setCustomDate("");
              }}
            />
            System Date
          </label>
          <label>
            <input
              type="radio"
              value="custom"
              checked={dateType === "custom"}
              onChange={() => setDateType("custom")}
            />
            Select
          </label>
        </div>

        {dateType === "custom" && (
          <input
            type="date"
            className="form-input"
            value={customDate}
            onChange={(e) => setCustomDate(e.target.value)}
          />
        )}

        {/* Plus Icon to Toggle Product Details */}
        <span
          className={`plus-icon ${showDetails ? "rotate" : ""}`}
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "➖" : "➕"}
        </span>

        {/* Product Details in Responsive */}
        <div className={`product-details ${showDetails ? "show" : ""}`}>
          <p>
            <strong>Product Owner:</strong> William C. Schroyer
          </p>
          <p>
            <strong>Rating:</strong> 4.5 / 5
          </p>
          <p>
            <strong>Reviews:</strong> 120 Reviews
          </p>
        </div>


        {/* Comment */}
        <label className="form-label">Comment *</label>
        <textarea
          className="form-input"
          rows="4"
          placeholder="Your review"
          required
        ></textarea>

        {/* Review Images */}
        <label className="form-label">Review Images</label>
        <div className="file-upload-container">
          <label className="file-upload-label">
            <span className="file-upload-button">Browse</span>
            <span className="file-upload-text">{fileName}</span>
            <input
              type="file"
              className="file-upload-input"
              onChange={handleFileChange}
            />
          </label>
          <p className="file-upload-info">
            These images are visible in the product review page gallery. Upload
            square images.
          </p>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default CustomReviewForm;
