import React from "react";
import "./Seo.css";

const SeoMetaForm = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">SEO Meta Tags</h2>
      <div className="divider"></div>

      <div className="form-group">
        <label>Meta Title</label>
        <div className="input-container">
          <input type="text" className="text-input" placeholder="Meta Title" />
        </div>
      </div>

      <div className="form-group">
        <label>Description</label>
        <div className="input-container">
          <textarea className="text-input" placeholder="Description" rows="4"></textarea>
        </div>
      </div>

      <div className="form-group">
        <label>Meta Image</label>
        <div className="input-container">
          <div className="custom-file-input">
            <button className="browse-btn">Browse</button>
            <span className="file-name">Choose file</span>
            <input type="file" className="file-input" />
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

export default SeoMetaForm;