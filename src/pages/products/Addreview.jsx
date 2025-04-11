import React, { useState, useEffect } from "react";
import "./Addreview.css";
import apiInstance from "../../utils/axios"; // Import axios for API calls

import { DataTable } from "../../components/marketing/EmailTemplate/MainPageComponents/DataTable";

const CustomReviewForm = () => {
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState("");
  const [categories, setCategories] = useState([]); // State for categories
  const [products, setProducts] = useState([]); // State for products
  const [rating, setRating] = useState(0);
  const [dateType, setDateType] = useState("system");
  const [customDate, setCustomDate] = useState("");
  const [fileName, setFileName] = useState("Choose file");
  const [comment, setComment] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [image, setImage] = useState(null); // State for storing the uploaded image

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await apiInstance.get("/categories/Get-all-categories");
        console.log("Categories API Response:", response.data); // Debugging log
        if (response.data && Array.isArray(response.data)) {
          setCategories(response.data); // Ensure the response is an array
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await apiInstance.get("/products/");
        console.log("Products API Response:", response.data); // Debugging log
        setProducts(response.data.data); // Assuming the API returns products in `data.data`
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchCategories();
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((prod) => {
    // If the category is empty, include all products
    if (!category) return true;

    // Check if the product's category matches the selected category
    return prod.category && prod.category.some((cat) => cat._id === category);
  });

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

  const handleSendReviews = async () => {
    try {
      const formData = new FormData();
      reviews.forEach((review, index) => {
        formData.append(`customReviewerName[${index}]`, review.reviewerName);
        formData.append(`category[${index}]`, review.category);
        formData.append(`product[${index}]`, review.product);
        formData.append(`rating[${index}]`, review.rating);
        formData.append(`date[${index}]`, review.date);
        formData.append(`comment[${index}]`, review.comment);
        if (review.image) {
          formData.append(`customReviewerImage[${index}]`, review.image);
        }
      });

      const response = await apiInstance.post("productreviews/create-bulk", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert(`${response.data.message}`);
      setReviews([]); // Clear the reviews after successful submission
    } catch (error) {
      console.error("Error sending reviews:", error);
      alert("Failed to send reviews. Please try again.");
    }
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
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>

        <label className="form-label">Product *</label>
        <select
          className="form-select"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
        >
          <option value="">Select Product</option>
          {filteredProducts.map((prod) => (
            <option key={prod._id} value={prod._id}>
              {prod.name}
            </option>
          ))}
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
        <div className="date-selection-new">
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