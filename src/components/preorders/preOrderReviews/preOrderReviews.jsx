// import { Ban, ChevronDownIcon, Eye, Trash, Trash2 } from "lucide-react"
// import "./preOrderReviews.scss"

// export default function PreOrderReviews() {
//     const users = [
//         {
//             id: 1,
//             prodName: "Hummer EV 2025 | Experience unmatched power and innovation with the 2025 Hummer EV, the ultimate blend of rugged performance.",
//             productOwner: "Sahil Kalkal",
//             rating: 5,
//             review: 15,
//         },
//         {
//             id: 2,
//             prodName: "Hummer EV 2025 | Experience unmatched power and innovation with the 2025 Hummer EV, the ultimate blend of rugged performance.",
//             productOwner: "Sahil Kalkal",
//             rating: 5,
//             review: 15,
//         },
//         {
//             id: 3,
//             prodName: "Hummer EV 2025 | Experience unmatched power and innovation with the 2025 Hummer EV, the ultimate blend of rugged performance.",
//             productOwner: "Sahil Kalkal",
//             rating: 5,
//             review: 15,
//         },
//         {
//             id: 4,
//             prodName: "Hummer EV 2025 | Experience unmatched power and innovation with the 2025 Hummer EV, the ultimate blend of rugged performance.",
//             productOwner: "Sahil Kalkal",
//             rating: 5,
//             review: 15,
//         }
//     ]

//     return (
//         <div className="productQueriesBox ma10">
//             <div className="allCustomersLowerBox productQueries">
//                 <div className="allCustomersLowerHeader">
//                     <p className="customersText">
//                         Preorder Queries
//                     </p>

//                 </div>
//                 <div className="table-container">
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>#</th>
//                                 <th>Product Name</th>

//                                 <th >Product Owner</th>
//                                 <th >Rating</th>

//                                 <th >Reviews</th>

//                                 <th>Options</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {users.map((user) => (
//                                 <tr key={user.id}>
//                                     <td>{user.id}</td>
//                                     <td className="prodNameQuery" >{user.prodName}</td>
//                                     <td>{user.productOwner}</td>
//                                     <td >{user.rating}</td>
//                                     <td >{user.review}</td>

//                                     <td>
//                                         <div className="actions">
//                                             <div className="action">
//                                                 <Eye color="blue" size={18} />
//                                             </div>

//                                         </div>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>

//             </div>
//         </div>
//     )
// }


import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import axios from "axios";
import "./preOrderReviews.scss";

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
