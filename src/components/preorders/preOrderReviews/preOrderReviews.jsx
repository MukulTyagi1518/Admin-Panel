



import { Ban, ChevronDownIcon, Eye, Trash, Trash2, Plus } from "lucide-react";
import "./preOrderReviews.scss";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function PreOrderReviews() {
  const [reviews, setReviews] = useState([]);
  const [visibleReviewId, setVisibleReviewId] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/preorder-reviews");
        if (Array.isArray(res.data)) {
          setReviews(res.data);
        } else {
          console.error("API returned non-array data:", res.data);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="productQueriesBox ma10">
      <div className="allCustomersLowerBox productQueries">
        <div className="allCustomersLowerHeader">
          <p className="customersText">Preorder Reviews</p>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Product Owner</th>
                <th>Rating</th>
                <th>Review</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {reviews.length > 0 ? (
                reviews.map((review, index) => (
                  <React.Fragment key={review._id}>
                    <tr>
                      <td>{index + 1}</td>
                      <td className="prodNameQuery">{review.productName}</td>
                      <td>{review.productOwner}</td>
                      <td>{review.rating}</td>
                      <td>{review.review}</td>
                      <td>
                        <div className="actions">
                          <div
                            className="action"
                            title="Toggle Review"
                            onClick={() =>
                              setVisibleReviewId(
                                visibleReviewId === review._id ? null : review._id
                              )
                            }
                          >
                            <Eye color="blue" size={18} />
                          </div>
                        </div>
                      </td>
                    </tr>

                    {visibleReviewId === review._id && (
                      <tr>
                        <td colSpan="6">
                          <div className="expanded-reviews">
                            <p className="reviewHeading">Detailed Review:</p>
                            <p>{review.review}</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center" }}>
                    No reviews found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
