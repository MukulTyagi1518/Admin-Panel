import React, { useState } from "react";
import { useProductContext } from "../../productContex";
import "./Shipping.css";
import { type } from "@testing-library/user-event/dist/type";
import { Link } from "react-router-dom";
import Switch from "../../components/Switch";

const ShippingConfig = () => {
  const { productData, setProductData } = useProductContext();
  const [cashOnDelivery, setCashOnDelivery] = useState(false);
  const [freeShipping, setFreeShipping] = useState(false);
  const [flatRate, setFlatRate] = useState(false);
  const [productQuantityMultiply, setProductQuantityMultiply] = useState(false);
  const [shippingDays, setShippingDays] = useState("");



  const handleTogglecashOnDelivery = () => {
    setCashOnDelivery(!cashOnDelivery);
    setProductData((prev) => ({
      ...prev,
      shippingConfiguration: { ...prev.shippingConfiguration, cashOnDelivery: !cashOnDelivery },
    }));
  };
  const handleTogglefreeShiping = (key) => {
    setFreeShipping(!freeShipping);
    setProductData((prev) => ({
      ...prev,
      shippingConfiguration: { ...prev.shippingConfiguration, freeShipping: !freeShipping },
    }));
  };
  const handleToggleflatRate = () => {
    setFlatRate(!flatRate);
    setProductData((prev) => ({
      ...prev,
      shippingConfiguration: { ...prev.shippingConfiguration, flatRate: !flatRate },
    }));
  };
  const handleToggleproductQuantityMultiply = () => {
    setProductQuantityMultiply(!productQuantityMultiply);
    setProductData((prev) => ({
      ...prev,
      shippingConfiguration: { ...prev.shippingConfiguration, isProductQuantityMultiply: !productQuantityMultiply },
    }));
  };
  const handleInputChange = (e) => {
    setShippingDays(e.target.value);
    setProductData((prev) => ({
      ...prev,
      shippingConfiguration: {
        ...prev.shippingConfiguration,
        shippingDays: e.target.value,
      },
    }));
  }
  const handleSubmit = (isPublished) => {
    console.log("Shipping Details:", productData);
    // Here, you can implement API calls or state updates accordingly
    alert(isPublished ? "Saved & Published" : "Saved & Unpublished");
  };
  return (
    <div className="shipping-container">
      <h2 className="shipping-title">Shipping Configuration</h2>
      <div className="shipping-divider"></div>

      <div className="shipping-option-new">
        <span>Cash On Delivery</span>
        <label className="toggle-switch-new">
        <Switch
  className="custom-toggle"
  value={cashOnDelivery}
  onChangeFunc={() => setCashOnDelivery(!cashOnDelivery)}
/>

        </label>
      </div>

      <div className="shipping-option-new">
        <span>Free Shipping</span>
        <label className="toggle-switch-new">
        <Switch
  className="custom-toggle"
  value={productData.freeShipping}
  onChangeFunc={() =>
    setProductData((prev) => ({
      ...prev,
      freeShipping: !prev.freeShipping,
    }))
  }
/>

        </label>
      </div>

      <div className="shipping-option-new">
        <span>Flat Rate</span>
        <label className="toggle-switch-new">
        <Switch
  className="custom-toggle"
  value={flatRate}
  onChangeFunc={() => setFlatRate((prev) => !prev)}
/>

        </label>
      </div>

      <div className="shipping-option-new">
        <span>Is Product Quantity Multiply</span>
        <label className="toggle-switch-new">
        <Switch
  className="custom-toggle"
  value={productQuantityMultiply}
  onChangeFunc={() =>
    setProductQuantityMultiply((prev) => !prev)
  }
/>

        </label>
      </div>

      <h2 className="shipping-title">Estimate Shipping Time</h2>
      <div className="shipping-divider"></div>

      <div className="shipping-option-new">
        <span>Shipping Days</span>
        <div className="input-box">
          <input
            type="number"
            placeholder="Shipping Days"
            className="shipping-input"
            value={shippingDays}
            onChange={handleInputChange}
          />
          <span className="days-text">Days</span>
        </div>
      </div>

      <div className="button-group-ship">
        <button className="btn-btn-grey" onClick={() => handleSubmit(false)}>Save & Unpublish</button>
        <Link to='/products/create/warranty'>
          <button className="btn-btn-green" onClick={() => handleSubmit(true)}>Save & Publish</button>
        </Link>
      </div>
    </div>
  );
};

export default ShippingConfig;
