import React, { useState } from "react";
import "./Product.css";

const ProductMediaForm = () => {
  const [videoProvider, setVideoProvider] = useState("Youtube");

  return (
   
    <div className="form-container">
      <h2 className="form-title">Product Files & Media</h2>
      <div className="divider"></div>

      <div className="form-group">
        <label>Gallery Images</label>
        <div className="input-container">
          <div className="custom-file-input">
            <button className="browse-btn">Browse</button>
            <span className="file-name">No file chosen</span>
          </div>
          <p className="description">
            These images are visible in the product details page gallery. Minimum dimensions required: 900px width X 900px height.
          </p>
        </div>
      </div>

      <div className="form-group">
        <label>Thumbnail Image</label>
        <div className="input-container">
          <div className="custom-file-input">
            <button className="browse-btn">Browse</button>
            <span className="file-name">No file chosen</span>
          </div>
          <p className="description">
            This image is visible in all product boxes. Minimum dimensions required: 195px width X 195px height.
          </p>
        </div>
      </div>

      <div className="form-group">
        <label>Video Provider</label>
        <div className="input-container">
          <select className="dropdown" value={videoProvider} onChange={(e) => setVideoProvider(e.target.value)}>
            <option value="Youtube">Youtube</option>
            <option value="Vimeo">Vimeo</option>
            <option value="Dailymotion">Dailymotion</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label>Video Link</label>
        <div className="input-container">
          <input type="text" placeholder="Video Link" className="text-input" />
          <p className="description">
            Use a proper link without extra parameters. Don't use short share links or embedded iframe code.
          </p>
        </div>
      </div>

      <div className="form-group">
        <label>PDF Specification</label>
        <div className="input-container">
          <div className="custom-file-input">
            <button className="browse-btn">Browse</button>
            <span className="file-name">No file chosen</span>
          </div>
        </div>
      </div>

      <div className="button-group">
        <button className="btn btn-gray">Save & Unpublish</button>
        <button className="btn btn-green">Save & Publish</button>
      </div>
    </div>
  );
};

export default ProductMediaForm;
