import React, { useState, useEffect } from "react";
import "./rating.css";
import { FaStar, FaRegStar } from "react-icons/fa";
import axios from "axios";

const Rating = () => {
  const [sellers, setSellers] = useState([]);
  const [expandedRows, setExpandedRows] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalSeller, setModalSeller] = useState(null);
  const [customFollowers, setCustomFollowers] = useState(0);

  useEffect(() => {
    axios
      .get("https://e-commerce-backend-1-0.onrender.com/api/seller-reviews")
      .then((response) => {
        const approvedSellers = response.data.filter((seller) => !seller.isBanned); // Filter non-banned sellers
        setSellers(approvedSellers);
      })
      .catch((error) => console.error("Error fetching sellers:", error));
  }, []);

  const toggleRow = (id) => {
    setExpandedRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const openModal = (seller) => {
    setModalSeller(seller);
    setCustomFollowers(seller.customFollowers || 0);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalSeller(null);
  };

  const handleSave = async () => {
    if (!modalSeller) return;

    try {
      const response = await axios.put(
        `https://e-commerce-backend-1-0.onrender.com/api/seller-reviews/update-custom-followers/${modalSeller._id}`, // Use _id
        { customFollowers: Number(customFollowers) } // Ensure it's a number
      );

      setSellers((prevSellers) =>
        prevSellers.map((seller) =>
          seller._id === modalSeller._id ? { ...seller, customFollowers: Number(customFollowers) } : seller
        )
      );

      console.log("Update successful:", response.data);
      closeModal();
    } catch (error) {
      console.error("Error updating followers:", error);
    }
  };

  return (
    <div className="container">
      <h3 className="table-title">Sellers Review & Followers</h3>
      <table className="seller-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Rating</th>
            <th>Followers</th>
            <th>Custom Followers</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map((seller) => (
            <tr key={seller._id}>
              <td>{seller._id}</td>
              <td>
                <div className="seller-info">
                  <img src={seller.image} alt={seller.name} className="seller-img" />
                  {seller.name}
                </div>
              </td>
              <td>{seller.phone || "N/A"}</td>
              <td>{seller.email}</td>
              <td>
                {[...Array(5)].map((_, index) =>
                  index < seller.rating ? <FaStar key={index} className="star filled" /> : <FaRegStar key={index} className="star" />
                )}
              </td>
              <td>{seller.followers}</td>
              <td>{seller.customFollowers}</td>
              <td>
                <button className="btn btn-primary btn-sm" onClick={() => openModal(seller)}>
                  Edit Custom Followers
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && modalSeller && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Edit Custom Followers for {modalSeller.name}</h2>
              <span className="close" onClick={closeModal}>
                &times;
              </span>
            </div>
            <div className="modal-body">
              <label htmlFor="customFollowers">Custom Followers:</label>
              <input
                type="number"
                id="customFollowers"
                value={customFollowers}
                onChange={(e) => setCustomFollowers(Number(e.target.value) || 0)}
              />
            </div>
            <div className="modal-footer">
              <button className="save-btn" onClick={handleSave}>Save</button>
              <button className="cancel-btn" onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rating;
