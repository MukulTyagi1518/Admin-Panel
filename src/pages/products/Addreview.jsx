import React, { useState } from "react";
import "./Addreview.css";
import { DataTable } from "../../components/marketing/EmailTemplate/MainPageComponents/DataTable";

const CustomReviewForm = () => {
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState("");
  const [rating, setRating] = useState(0);
  const [dateType, setDateType] = useState("system");
  const [customDate, setCustomDate] = useState("");
  const [fileName, setFileName] = useState("Choose file");
  const [comment, setComment] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [image, setImage] = useState(null); // State for storing the uploaded image

  const [reviews, setReviews] = useState([]);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
      setImage(URL.createObjectURL(event.target.files[0])); // Store the image URL
    } else {
      setFileName("Choose file");
      setImage(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      reviewerName,
      category,
      product,
      rating,
      date:
        dateType === "system"
          ? new Date().toISOString().split("T")[0]
          : customDate,
      comment,
      image, // Add the image to the review object
    };

    setReviews([...reviews, newReview]);

    // Reset form
    setReviewerName("");
    setCategory("");
    setProduct("");
    setRating(0);
    setDateType("system");
    setCustomDate("");
    setComment("");
    setFileName("Choose file");
    setImage(null); // Reset the image
  };

  const handleSendReviews = () => {
    alert("Sending review!");
    setReviews([]);
  };

  const columns = [
    { key: "reviewerName", title: "Reviewer Name" },
    { key: "category", title: "Category" },
    { key: "product", title: "Product" },
    { key: "rating", title: "Rating" },
    { key: "date", title: "Date" },
    { key: "comment", title: "Comment" },
    {
      key: "image",
      title: "image",
      render: (review) =>
        review.image ? (
          <img
            src={review.image}
            alt="Review"
            className="h-10 w-10 object-cover rounded"
          />
        ) : (
          "No image"
        ),
    },
  ];

  return (
    <div className="custom-review-container">
      <h2 className="form-title">Add New Custom Review</h2>

      <form className="custom-review-form" onSubmit={handleSubmit}>
        <label className="form-label">Custom Reviewer Name *</label>
        <input
          type="text"
          className="form-input"
          placeholder="Enter reviewer name"
          value={reviewerName}
          onChange={(e) => setReviewerName(e.target.value)}
          required
        />

        <label className="form-label">Custom Reviewer Image</label>
        <div className="file-upload-container">
          <label className="file-upload-label">
            <span className="file-upload-button">Browse</span>
            <span className="file-upload-text">{fileName}</span>
            <input
              type="file"
              className="file-upload-input"
              onChange={handleFileChange}
              accept="image/*"
            />
          </label>
        </div>

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

        <label className="form-label">Comment *</label>
        <textarea
          className="form-input"
          rows="4"
          placeholder="Your review"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>

        <button type="submit" className="submit-btn">
          Add Review
        </button>
      </form>

      <h3 style={{ marginTop: "30px" }}>Review Table</h3>
      <DataTable columns={columns} data={reviews} loading={false} />

      <button
        className="submit-btn"
        onClick={handleSendReviews}
        style={{ marginTop: "20px" }}
      >
        Send Reviews
      </button>
    </div>
  );
};

export default CustomReviewForm;