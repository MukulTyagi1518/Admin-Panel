import React, { useState } from "react";
import "./General.css";
import { useProductContext } from "../../productContex";

const General = () => {

  const [description, setDescription] = useState("");
  const [isRefundable, setIsRefundable] = useState(false);
  const [isFeatured, setIsFeatured] = useState(false);
  const [isTodaysDeal, setIsTodaysDeal] = useState(false);
  const [flashTitle, setFlashTitle] = useState("");
  const [discount, setDiscount] = useState(0);
  const [discountType, setDiscountType] = useState("");
  const [tax, setTax] = useState(0);
  const [taxType, setTaxType] = useState("flat");
  const [vat, setVat] = useState(0);
  const [vatType, setVatType] = useState("flat");
  const [content, setContent] = useState("");

  const { productData, setProductData } = useProductContext()

  console.log(productData)

  const handleChangeInputFields = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFormat = (command) => {
    document.execCommand(command, false, null);
  }
  return (
    <div className="container">
      {/* Left Side - Form */}
      <div className="form-container-general">
        <h2>Product Information</h2>
        <br />
        <div className="divider"></div>
        <form>
          <div className="form-group">
            <label>Product Name *</label>
            <input type="text" placeholder="Product Name" name="name" value={productData.name} onChange={handleChangeInputFields} />
          </div>

          <div className="form-group-brand">
            <label>Brand</label>
            <select name="brand" value={productData.brand} onChange={handleChangeInputFields} >
              <option>Asus</option>
              <option>Dell</option>
              <option>ROG</option>
              <option>Vivo</option>
            </select>
          </div>

          <div className="form-group">
            <label>Unit *</label>
            <input type="text" placeholder="Unit (e.g. KG, Pc etc)"  name="unit" value={productData.unit} onChange={handleChangeInputFields} />
          </div>

          <div className="form-group">
            <label>Weight (In Kg)</label>
            <input type="number" placeholder="0" name="weight" value={productData.weight} onChange={handleChangeInputFields}/>
          </div>

          <div className="form-group">
            <label>Minimum Purchase Qty *</label>
            <input type="number" placeholder="1" name="minPurchaseQty" value={productData.minPurchaseQty} onChange={handleChangeInputFields} />
          </div>

          <div className="form-group">
            <label>Tags</label>
            <input type="text" placeholder="Type and hit enter to add a tag" name="tags" value={productData.tags} onChange={handleChangeInputFields} />
          </div>

          <div className="form-group">
            <label>Barcode</label>
            <input type="text" placeholder="Barcode" name="barcode" value={productData.barcode} onChange={handleChangeInputFields} />
          </div>
        </form>
        {/* Full Width Section - Description, Refund, and Status */}

        {/* Description */}
        <div className="editor-container">
          <label className="editor-label">Description</label>
          <div className="edit">
            <div className="toolbar">
              <button onClick={() => handleFormat("bold")} title="Bold (CTRL+B)">
                <b>B</b>
              </button>
              <button onClick={() => handleFormat("underline")} title="Underline">
                <u>U</u>
              </button>
              <button onClick={() => handleFormat("italic")} title="Italic">
                <i>I</i>
              </button>
              <button onClick={() => handleFormat("insertUnorderedList")} title="Bullet List">
                ••
              </button>
              <button onClick={() => handleFormat("insertOrderedList")} title="Numbered List">
                1.
              </button>
              <button onClick={() => handleFormat("justifyLeft")} title="Align Left">
                ⬅
              </button>
              <button onClick={() => handleFormat("justifyCenter")} title="Align Center">
                ⬆
              </button>
              <button onClick={() => handleFormat("justifyRight")} title="Align Right">
                ➡
              </button>
              <button onClick={() => handleFormat("undo")} title="Undo">
                ↩
              </button>
              <button onClick={() => handleFormat("redo")} title="Redo">
                ↪
              </button>
            </div>
          </div>
          <div
            className="editor"
            name="description"
            value={productData.description}
            onChange={handleChangeInputFields}
            contentEditable
            onInput={(e) => setContent(e.target.innerHTML)}
          ></div>
        </div>

        <br />
        <div className="section">
          <h3>Refund</h3>

          <div className="divider"></div>
          <br />
          <div className="toggle-group">
            <div className="group">
              <label>Refundable?</label>
            </div>
            <div className="refund">
              <input
                name=" refundable"
                value={productData.refundable}
                // onChange={handleChangeInputFields}
                type="checkbox"
                id="refundToggle"
                className="custom-toggle"
                checked={isRefundable}
                onChange={() => setIsRefundable(!isRefundable)}
              />
              <label htmlFor="refundToggle" className="toggle-label"></label>
            </div>
          </div>


          {/* Refund Note Section - Appears Only When Toggle is ON */}
          {isRefundable && (
            <div className="refund-note">
              <label>Note (Add from preset)</label>
              <div className="refund-note-box">
                <span>+ Select Refund Note</span>
              </div>
            </div>
          )}
        </div>
        <br />
        {/* Status Section */}
        <div className="section">
          <h3>Status</h3>
          <div className="divider"></div>
          <div className="toggle-group">
            <label>Featured</label>
            <input
              name="featured"
              value={productData.featured}
              // onChange={handleChangeInputFields}
              type="checkbox"
              id="featuredToggle"
              className="custom-toggle"
              checked={isFeatured}
              onChange={() => setIsFeatured(!isFeatured)}
            />
            <label htmlFor="featuredToggle" className="toggle-label"></label>
            <p>If you enable this, this product will be granted as a featured product.</p>
          </div>
          <div className="toggle-group">
            <label>Today's Deal</label>
            <input
              name="todaysDeal"
              value={productData.todaysDeal}
              // onChange={handleChangeInputFields}
              type="checkbox"
              id="dealToggle"
              className="custom-toggle"
              checked={isTodaysDeal}
              onChange={() => setIsTodaysDeal(!isTodaysDeal)}
            />
            <label htmlFor="dealToggle" className="toggle-label"></label>
            <p>If you enable this, this product will be granted as a today's deal product.</p>
          </div>

          <br />
          <h3>
            Flash Deal <span >(If you want to select this product as a flash deal, you can use it)</span>
          </h3>

          <div className="divider"></div>
          <br />
          {/* Add to Flash */}
          <div className="input-group">
            <label>Add To Flash</label>
            <select name="flashDeal" value={flashTitle} onChange={(e) => setFlashTitle(e.target.value)}>
              <option value="">Choose Flash Title</option>
              <option value="flash_sale_1">Flash Sale 1</option>
              <option value="flash_sale_2">Flash Sale 2</option>
            </select>
          </div>

          {/* Discount */}
          <div className="input-group">
            <label>Discount</label>
            <input
              name="discount"
              
              type="number"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              min="0"
            />
          </div>

          {/* Discount Type */}
          <div className="input-group">
            <label>Discount Type</label>
            <select name="discountType" value={productData.discountType} onChange={(e) => setDiscountType(e.target.value)}>
              <option value="">Choose Discount Type</option>
              <option value="percentage">Percentage</option>
              <option value="fixed">Fixed Amount</option>
            </select>
          </div>
        </div>
        <h3 className="heading">Vat & TAX</h3>
        <div className="divider"></div>

        {/* Tax Row */}
        <div className="row">
          <label className="label">Tax</label>
          <div className="input-group-Dropdown">
            <input type="number" className="input" defaultValue="0" min="0" />
            <select name="tax" value={productData.tax} onChange={handleChangeInputFields} className="dropdown">
              <option>Flat</option>
              <option>Percentage</option>
            </select>
          </div>
        </div>

        {/* Vat Row */}
        <div className="row">
          <label className="label">Vat</label>
          <div className="row-drop">
            <div className="input-group-Dropdown">
              <input type="number" className="input" defaultValue="0" min="0" />
              <select name="vat"  value={productData.vat} onChange={handleChangeInputFields} className="dropdown">
                <option>Flat</option>
                <option>Percentage</option>
              </select>
            </div>
          </div>

        </div>

        <div className="button-group">
          <button className="btn btn-gray">Save & Unpublish</button>
          <button className="btn btn-green">Save & Publish</button>
        </div>
      </div>


      {/* Right Side - Table-like Category Section */}
      <div className="category-container">
        <h3>Product Category</h3>
        <div className="category-list">
          <ul>
            {/* <li>
              <input type="checkbox" /> Women Clothing & Fashion
            </li>
            <ul c lassName="sub-category">
              <li>
                <input type="checkbox" /> Hot Categories
              </li>
              <ul className="sub-category">
                <li>
                  <input type="checkbox" /> Party Dress
                </li>
                <li>
                  <input type="checkbox" /> Beauty & Health
                </li>
                <li>
                  <input type="checkbox" /> Women Shoe
                </li>
                <li>
                  <input type="checkbox" /> Sleeping Dress
                </li>
                <li>
                  <input type="checkbox" /> Casual Dress
                </li>
                <li>
                  <input type="checkbox" /> Hoodies & Sweatshirts
                </li>
                <li>
                  <input type="checkbox" /> Jackets
                </li>
                <li>
                  <input type="checkbox" /> T-shirts
                </li>
              </ul>
            </ul> */}
          </ul>

        </div>
      </div>

    </div>
  );
};

export default General;
