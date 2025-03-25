import React, { useState } from "react";
import "./Shipping.css";

const ShippingConfig = () => {
  const [cashOnDelivery, setCashOnDelivery] = useState(true);
  const [freeShipping, setFreeShipping] = useState(true);
  const [flatRate, setFlatRate] = useState(false);
  const [productQuantityMultiply, setProductQuantityMultiply] = useState(false);
  const [shippingDays, setShippingDays] = useState("");

  return (
    <div className="shipping-container">
      <h2 className="shipping-title">Shipping Configuration</h2>
      <div className="shipping-divider"></div>

      <div className="shipping-option">
        <span>Cash On Delivery</span>
        <label className="toggle-switch">
          <input type="checkbox" checked={cashOnDelivery} onChange={() => setCashOnDelivery(!cashOnDelivery)} />
          <span className="toggle-slider"></span>
        </label>
      </div>

      <div className="shipping-option">
        <span>Free Shipping</span>
        <label className="toggle-switch">
          <input type="checkbox" checked={freeShipping} onChange={() => setFreeShipping(!freeShipping)} />
          <span className="toggle-slider"></span>
        </label>
      </div>

      <div className="shipping-option">
        <span>Flat Rate</span>
        <label className="toggle-switch">
          <input type="checkbox" checked={flatRate} onChange={() => setFlatRate(!flatRate)} />
          <span className="toggle-slider"></span>
        </label>
      </div>

      <div className="shipping-option">
        <span>Is Product Quantity Multiply</span>
        <label className="toggle-switch">
          <input type="checkbox" checked={productQuantityMultiply} onChange={() => setProductQuantityMultiply(!productQuantityMultiply)} />
          <span className="toggle-slider"></span>
        </label>
      </div>

      <h2 className="shipping-title">Estimate Shipping Time</h2>
      <div className="shipping-divider"></div>

          <div className="shipping-option">
              <span>Shipping Days</span>
              <div className="input-box">
                  <input
                      type="number"
                      placeholder="Shipping Days"
                      className="shipping-input"
                      value={shippingDays}
                      onChange={(e) => setShippingDays(e.target.value)}
                  />
                  <span className="days-text">Days</span>
              </div>
          </div>

      <div className="button-group">
        <button className="btn btn-unpublish">Save & Unpublish</button>
        <button className="btn btn-publish">Save & Publish</button>
      </div>
    </div>
  );
};

export default ShippingConfig;
