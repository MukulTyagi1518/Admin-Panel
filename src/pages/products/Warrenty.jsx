import React, { useState } from "react";
import { useProductContext } from "../../productContex";
import "./warrenty.css";
import { Link } from "react-router-dom";
import Switch from "../../components/Switch";

const WarrantyConfig = () => {
  const { productData, setProductData } = useProductContext();
  const [warrantyEnabled, setWarrantyEnabled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [noteInput, setNoteInput] = useState("");

  const handleToggleWarranty = () => {
    setWarrantyEnabled(!warrantyEnabled);
    setProductData((prev) => ({
      ...prev,
      warranty: warrantyEnabled ? "" : productData.warranty,
    }));
  };

  const handleWarrantyChange = (e) => {
    setProductData((prev) => ({ ...prev, warranty: e.target.value }));
  };

  const handleSubmit = (isPublished) => {
    console.log("Saving Warranty Config:", productData);
    alert(isPublished ? "Saved & Published" : "Saved & Unpublished");
  };

  const handleNoteSave = () => {
    setProductData((prev) => ({ ...prev, warrantyNote: noteInput }));
    setShowModal(false);
  };

  return (
    <div className="warranty-container">
      <h2 className="section-title">Warranty</h2>
      <div className="divider"></div>

      {/* Toggle */}
      <div className="config-option">
        <span className="option-label">Warranty</span>
        <Switch value={warrantyEnabled} onChangeFunc={handleToggleWarranty} />
      </div>

      {warrantyEnabled && (
        <>
          {/* Dropdown */}
          <div className="warranty-dropdown">
            <select
              className="dropdown"
              value={productData.warranty || ""}
              onChange={handleWarrantyChange}
            >
              <option value="">Select Warranty</option>
              <option value="6 months">6 Months</option>
              <option value="1 year">1 Year</option>
              <option value="2 years">2 Years</option>
              <option value="4 years">4 Years</option>
              <option value="5 years">5 Years</option>
            </select>
          </div>

          {/* Warranty Note */}
          <h3 className="sub-title">Warranty Note</h3>
          <div className="warranty-note">
            <button className="add-note-btn" onClick={() => setShowModal(true)}>
              + Select Warranty Note
            </button>
            {productData.warrantyNote && (
              <p className="mt-2 text-gray-700 text-sm">Note: {productData.warrantyNote}</p>
            )}
          </div>
        </>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md">
            <h3 className="text-lg font-semibold mb-4">Enter Warranty Note</h3>
            <textarea
              rows={4}
              className="w-full border border-gray-300 p-2 rounded mb-4"
              placeholder="Enter note here..."
              value={noteInput}
              onChange={(e) => setNoteInput(e.target.value)}
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleNoteSave}
                className="px-4 py-2 bg-green-600 text-white hover:bg-green-700 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-4 mt-6 justify-end">
  <button
    className="bg-gray-200 text-gray-800 px-4 py-2 rounded shadow-md  hover:bg-gray-400 lg transition"
    onClick={() => handleSubmit(false)}
  >
    Save & Unpublish
  </button>
  <Link to="/products/create/frequently-bought">
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700 hover:shadow-lg transition"
      onClick={() => handleSubmit(true)}
    >
      Save & Publish
    </button>
  </Link>
</div>

    </div>
  );
};

export default WarrantyConfig;
