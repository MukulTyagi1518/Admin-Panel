import React, { useState } from "react";
import { useProductContext } from "../../productContex";
import "./Productprice.css";

const ProductForm = () => {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedAttribute, setSelectedAttribute] = useState("");
  const [selectedSleeve, setSelectedSleeve] = useState("");
  const [productsData,setProductsData]=useProductContext()
    const [quantity, setQuantity] = useState(1);
    const [stockVisibility, setStockVisibility] = useState({
      showQuantity: true,
      showTextOnly: false,
      hideStock: false,
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleToggle = (key) => {
      setStockVisibility((prev) => ({
        showQuantity: key === "showQuantity" ? !prev.showQuantity : false,
        showTextOnly: key === "showTextOnly" ? !prev.showTextOnly : false,
        hideStock: key === "hideStock" ? !prev.hideStock : false,
      }));
    };

  return (
    <div className="product-container">
      <div className="product-box">
        <h3 className="section-title">Product price + stock</h3>
        <div className="divider"></div>
        {/* Colors Dropdown (Hidden by default) */}
        <div className="form-group">
          <label className="label-box">Colors</label>
          {showColors && (
            <select
              className="dropdown"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              <option value="">Select Color</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
            </select>
          )}
          <label className="switch">
            <input
              type="checkbox"
              onChange={() => setShowColors(!showColors)}
            />
            <span className="slider round"></span>
          </label>
        </div>

        {/* Attributes Dropdown */}
        <div className="form-group">
          <label className="label-box">Attributes</label>
          <select
            className="dropdown"
            value={selectedAttribute}
            onChange={(e) => setSelectedAttribute(e.target.value)}
            placeholder="Select"
          >
            <option value="">Size</option>
            <option value="short">Fabric</option>
            <option value="long">Sleeve</option>
            <option value="">Wheel</option>
            <option value="short">Liter</option>
          
          </select>
        </div>

        {/* Description under Attributes Dropdown */}
        <p className="description-text">
          Choose the attributes of this product and then input values of each attribute
        </p>

        {/* Unit Price Input */}
        <div className="form-group">
          <label className="label-unit">Unit price <span className="required">*</span></label>
          <input type="text" className="unit-input" placeholder="0" name="unit-input" value={formData.unitPrice} onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label className="label-unit">Discount Date Range<span className="required">*</span></label>
          <input type="date" className="unit-input" placeholder="0" />
        </div>

        {/* Discount Section */}
        <div className="form-row">
          <label className="form-label">Discount <span className="required">*</span></label>
          <div className="form-row-row">
          <input type="text" className="form-input" placeholder="0" />
          <select className="form-dropdown-flat">
            <option value="flat">Flat</option>
            <option value="percentage">Percentage</option>
          </select>
          </div>
       </div>

        {/* Set Point */}
           <div className="form-group">
          <label className="label-unit">Set Point</label>
             <input type="text" className="unit-input" placeholder="0" />
        </div>

        {/* External Link */}
        <div className="form-row">
          <label className="form-label">External Link</label>
          <input type="text" className="form-input-link" placeholder="External link" />
        </div>
        <p className="form-small-text">Leave blank if not using an external link.</p>

        {/* External Link Button Text */}
        <div className="form-row">
          <label className="form-label">External Link Button Text</label>
          <input type="text" className="form-input-link" placeholder="Button text" />
        </div>
        <p className="form-small-text">Leave blank if not using an external link.</p>
         <br />
        {/* Variants Table */}
        <table className="variant-table">
          <thead>
            <tr>
              <th>Variant</th>
              <th>Price</th>
              <th>SKU</th>
              <th>Quantity</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Amethyst</td>
              <td><input type="text" className="table-input" placeholder="0" /></td>
              <td><input type="text" className="table-input" placeholder="SKU" /></td>
              <td><input type="text" className="table-input" placeholder="10" /></td>
              <td>
                <button className="btn-upload">Upload</button>
              </td>
            </tr>
            <tr>
              <td>Bisque</td>
              <td><input type="text" className="table-input" placeholder="0" /></td>
              <td><input type="text" className="table-input" placeholder="SKU" /></td>
              <td><input type="text" className="table-input" placeholder="10" /></td>
              <td>
                <button type="file" className="btn-upload">Upload</button>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
      <div className="stock-box">
        <h3 className="stock-heading">Low Stock Quantity Warning</h3>
        <div className="divider"></div>
        <div className="stock-row">
          <label className="stock-label">Quantity</label>
          <input
            type="number"
            className="stock-input"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
          />
        </div>
        <br />
        <h3 className="stock-heading">Stock Visibility State</h3>
        <div className="divider"></div>
        <div className="toggle-group">
          <div className="toggle-item">
            <span>Show Stock Quantity</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={stockVisibility.showQuantity}
                onChange={() => handleToggle("showQuantity")}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="toggle-item">
            <span>Show Stock With Text Only</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={stockVisibility.showTextOnly}
                onChange={() => handleToggle("showTextOnly")}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="toggle-item">
            <span>Hide Stock</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={stockVisibility.hideStock}
                onChange={() => handleToggle("hideStock")}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="button-group">
        <button className="btn btn-gray">Save & Unpublish</button>
        <button className="btn btn-green">Save & Publish</button>
      </div>
      </div>
    </div>
      </div>
  
  );
};

export default ProductForm;
