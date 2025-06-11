// import React from "react";
// import "./Create.css";

// const Create = () => {
//   return (
//     <div className="add-seller-container">
//       <h1 className="add-seller-title">Add New Seller</h1>
//       <div className="form-container">
//         <h2 className="seller-info-title">Seller Information</h2>

//         <div className="form-group">
//           <label htmlFor="name">Name *</label>
//           <input type="text" id="name" placeholder="Name" />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Email *</label>
//           <input type="email" id="email" placeholder="Email" />
//         </div>

//         <div className="form-group">
//           <label htmlFor="shopName">Shop Name</label>
//           <input type="text" id="shopName" placeholder="Shop Name" />
//         </div>

//         <div className="form-group">
//           <label htmlFor="address">Address</label>
//           <input type="text" id="address" placeholder="Address" />
//         </div>

//        <div className="sav"> <button className="save-button">Save</button></div>
//       </div>
//     </div>
//   );
// };

// export default Create;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios instance
import "./Create.css";

const Create = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    shopName: "",
    address: "",
  });

  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate(); // For redirection

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("https://e-commerce-backend-1-0.onrender.com/api/sellers", formData);
      console.log("Seller added successfully:", response.data);

      // Redirect to All Sellers page
      navigate("/sellers/all");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-seller-container">
      <h1 className="add-seller-title">Add New Seller</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <h2 className="seller-info-title">Seller Information</h2>

        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input type="text" id="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="shopName">Shop Name</label>
          <input type="text" id="shopName" placeholder="Shop Name" value={formData.shopName} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" placeholder="Address" value={formData.address} onChange={handleChange} />
        </div>

        {error && <p className="error-message">{error}</p>}
        <div className="sav">
          <button type="submit" className="save-button" disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
