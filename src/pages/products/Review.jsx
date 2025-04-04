import React from "react";
import { Eye, Trash } from "lucide-react";
import "./Review.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PreOrderReviews() {
  const navigate = useNavigate();
  const [expandedRows, setExpandedRows] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/products/Addreview");
  };

  const handlereview = (e) => {
    e.preventDefault();
    navigate("/products/ReviewDetail");
  };

  const users = [
    { id: 1, prodName: "Hummer EV 2025", productOwner: "Sahil Kalkal", rating: 5, review: 15 },
    { id: 2, prodName: "Tesla Model X", productOwner: "Aman Gupta", rating: 4, review: 10 },
    { id: 3, prodName: "BMW iX", productOwner: "Rohit Sharma", rating: 5, review: 8 },
    { id: 4, prodName: "Audi e-Tron", productOwner: "Neha Verma", rating: 4.5, review: 12 },
  ];

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
                <th className="responsive-hide">Product Owner</th>
                <th className="responsive-hide">Rating</th>
                <th className="responsive-hide">Reviews</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <React.Fragment key={user.id}>
                  <tr>
                    <td onClick={() => handleRowToggle(user.id)} className="plus-icon">
                      {expandedRows.includes(user.id) ? "-" : "+"}
                    </td>
                    <td className="hide-on-mobile ">{user.id}</td>
                    <td className="prodNameQuery">{user.prodName}</td>
                    <td className="responsive-hide">{user.productOwner}</td>
                    <td className="responsive-hide">{user.rating}</td>
                    <td className="responsive-hide">{user.review}</td>
                    <td>
                      <div className="flex flex-row gap-[.3cm]">
                        <div className="action eye-action">
                          <Eye color="blue" size={18} onClick={handlereview} />
                        </div>
                        <div className="action">
                          <Trash color="blue" size={18} />
                        </div>
                      </div>
                    </td>
                  </tr>
                  {/* {expandedRows.includes(user.id) && (
                    <tr className="expanded-row">
                      <td colSpan="6">
                        <div className="expanded-content">
                          <p>
                            <strong>Product Owner:</strong> {user.productOwner}
                          </p>
                          <p>
                            <strong>Rating:</strong> {user.rating}
                          </p>
                          <p>
                            <strong>Reviews:</strong> {user.review}
                          </p>
                        </div>
                      </td>
                    </tr>
                  )} */}
                  {expandedRows.includes(user.id) && (
                    <tr className="expanded-content">
                      <td colSpan="6">
                        <table style={{ width: "100%" }}>
                          <tbody>
                            <tr>
                              <td>Product Owner</td>
                              <td>{user.productOwner}</td>
                            </tr>
                            <tr>
                              <td>Rating</td>
                              <td>{user.rating}</td>
                            </tr>
                            <tr>
                              <td>Reviews</td>
                              <td>{user.review}</td>
                            </tr>
                            <tr>
                              <td>Custom Reviews</td>
                              <td>0</td> {/* Default 0 or dynamic value */}
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
        </div>
      </div>
    </div>
  );
}
