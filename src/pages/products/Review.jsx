import React, { useEffect } from "react";
import { Eye, Trash } from "lucide-react";
import "./Review.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import apiInstance from "../../utils/axios";

export default function PreOrderReviews() {
  const navigate = useNavigate();
  const [expandedRows, setExpandedRows] = useState([]);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [roleToDelete, setRoleToDelete] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await apiInstance.get("/productreviews");
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/products/Addreview");
  };

  const handlereview = (e) => {
    e.preventDefault();
    navigate("/products/ReviewDetail");
  };
  const handleDeleteClick = (roleId) => {
    setRoleToDelete(roleId);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    // Implement your delete logic here
    console.log(`Deleting role with ID: ${roleToDelete}`);
    setShowDeleteConfirmation(false);
    setRoleToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
    setRoleToDelete(null);
  };

  const handleRowToggle = (id) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  return (
    <div className="productQueriesBox ma10">
      <div className="product-table">
        <p className="customersText">Preorder Queries</p>
        <button type="button" onClick={handleSubmit} className="submit-btn">
          + Add custom Review
        </button>
      </div>

      <div className="filter-container mt-3">
        <select className="filter-dropdown">
          <option>All</option>
        </select>
        <select className="filter-dropdown">
          <option>Filter by Rating</option>
        </select>
        <input type="text" placeholder="Type Product Name & Hit" className="filter-input" />
      </div>
      <div className="allCustomersLowerBox productQueries">
        {/* Filter Section */}


        {/* Table Section */}
        <div className="table-container">
          <table>
            <thead>
              <tr>
                {/* <th className="hide-on-mobile"></th> */}
                <th className="">#</th>
                <th>Product Name</th>
                <th className="responsive-hide">Reviewer Name</th>
                <th className="responsive-hide">Rating</th>
                <th className="responsive-hide">Comment</th>
                <th className="responsive-hide">Image</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <React.Fragment key={review._id}>
                  <tr>
                    <td onClick={() => handleRowToggle(review._id)} className="plus-icon">
                      {expandedRows.includes(review._id) ? "-" : "+"}
                    </td>
                    <td className="hide-on-mobile">{review._id}</td>
                    <td className="prodNameQuery">{review.product}</td>
                    <td className="responsive-hide">{review.customReviewerName}</td>
                    <td className="responsive-hide">{review.rating}</td>
                    <td className="responsive-hide">{review.comment || "N/A"}</td>
                    <td className="responsive-hide">
                      {review.customReviewerImage ? (
                        <img
                          src={review.customReviewerImage}
                          alt="Reviewer"
                          className="h-10 w-10 object-cover rounded"
                        />
                      ) : (
                        "No image"
                      )}
                    </td>
                    <td>
                      <div className="flex flex-row gap-[.3cm]">
                        <div className="action eye-action">
                          <Eye color="blue" size={18} onClick={handlereview} />
                        </div>
                        <div className="action">
                          <Trash color="blue" size={18} onClick={() => handleDeleteClick(review._id)} />
                        </div>
                      </div>
                    </td>
                  </tr>
                  {expandedRows.includes(review._id) && (
                    <tr className="expanded-content">
                      <td colSpan="7">
                        <table style={{ width: "100%" }}>
                          <tbody>
                            <tr>
                              <td>Reviewer Name</td>
                              <td>{review.customReviewerName}</td>
                            </tr>
                            <tr>
                              <td>Rating</td>
                              <td>{review.rating}</td>
                            </tr>
                            <tr>
                              <td>Comment</td>
                              <td>{review.comment || "N/A"}</td>
                            </tr>
                            <tr>
                              <td>Review Images</td>
                              <td>{review.reviewImages?.length || 0}</td>
                            </tr>
                            <tr>
                              <td>Reviewer Image</td>
                              <td>
                                {review.customReviewerImage ? (
                                  <img
                                    src={review.customReviewerImage}
                                    alt="Reviewer"
                                    className="h-10 w-10 object-cover rounded"
                                  />
                                ) : (
                                  "No image"
                                )}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
          {showDeleteConfirmation && (
        <div className="delete-confirmation-overlay">
          <div className="delete-confirmation-dialog">
            <div className="dialog-header">
              <h2>Delete Confirmation</h2>
              <button
                className="close-dialog-btn"
                onClick={cancelDelete}
              >
                X
              </button>
            </div>
            <div className="dialog-content">
              <p>Are you sure to delete this?</p>
            </div>
            <div className="dialog-actions">
              <button className="cancel-btn" onClick={cancelDelete}>
                Cancel
              </button>
              <button className="delete-btn" onClick={confirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
        </div>
      </div>
    </div>
  );
}
