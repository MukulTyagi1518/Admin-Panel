import React, { useState } from "react";
import "./warrenty.css";

const WarrantyConfig = () => {
  const [warranty, setWarranty] = useState(false);
  const [selectedWarranty, setSelectedWarranty] = useState("");
  const [warrantyNote, setWarrantyNote] = useState("");

  return (
    <div className="warranty-container">
      <h2 className="section-title">Warranty</h2>
      <div className="divider"></div>

      {/* Toggle Switch */}
      <div className="config-option">
        <span className="option-label">Warranty</span>
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={warranty}
            onChange={() => setWarranty(!warranty)}
          />
          <span className="slider"></span>
        </label>
      </div>

      {/* Show form when Warranty is enabled */}
      {warranty && (
        <>
          {/* Warranty Dropdown */}
          <div className="warranty-dropdown">
            <select
              className="dropdown"
              value={selectedWarranty}
              onChange={(e) => setSelectedWarranty(e.target.value)}
            >
              <option value="">Select Warranty</option>
              <option value="6 months">6 Months</option>
              <option value="1 year">1 Year</option>
              <option value="2 years">2 Years</option>
              <option value="4 years">4 Years</option>
              <option value="5 years">5 Years</option>
            </select>
          </div>

          {/* Warranty Note Section */}
          <h3 className="sub-title">Warranty Note</h3>
          <div className="warranty-note">
            <button className="add-note-btn" onClick={() => setWarrantyNote("Sample Note")}>
              + Select Warranty Note
            </button>
          </div>
        </>
      )}

      {/* Buttons */}
      <div className="button-group">
        <button className="btn btn-unpublish">Save & Unpublish</button>
        <button className="btn btn-publish">Save & Publish</button>
      </div>
    </div>
  );
};

export default WarrantyConfig;
