import { Delete, Edit, Trash } from "lucide-react"
import "./Addwholesale.css"
import { MdOutlineSettings } from "react-icons/md"
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Switch from "../Switch";
import ProductCategory from "../ProductCategory";
// import { useProductContext } from "../../productContex";
// import Switch from "./Switch";
// import ProductCategory from "./ProductCategory";


export default function WholesaleCreate() {

    const [quantity, setQuantity] = React.useState(1);

    const [showQuantity, setShowQuantity] = useState(true);
    const [showTextOnly, setShowTextOnly] = useState(false);
    const [hideStock, setHideStock] = useState(false);

    const [status, setStatus] = useState(true);

 
    const [showModal, setShowModal] = useState(false);

    const [showShipping, setShowShipping] = useState(true);
    const [showRate, setShowRate] = useState(true);
    const [showMulitiply, setShowMulitiply] = useState(true);
    const [showStatus, setShowStatus] = useState(true);
    const [showFeatured, setShowFeatured] = useState(true);
    const [showDeal, setShowDeal] = useState(true);
    const [tax, setTax] = useState("");
    const [vat, setVat] = useState("");
    const [taxType, setTaxType] = useState("Flat");
    const [vatType, setVatType] = useState("Flat");

    const [flashTitle, setFlashTitle] = useState("");
    const [discount, setDiscount] = useState(0);
    const [discountType, setDiscountType] = useState("");
    const [shippingDays, setShippingDays] = useState("");

    const [selectedOption, setSelectedOption] = useState("product");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [productData, setProductData] = useState("");
    const navigate = useNavigate();

   
    const [showWarrantyModal, setShowWarrantyModal] = useState(false);
    const [warrantyNoteInput, setWarrantyNoteInput] = useState("");

  
    const [showProductModal, setShowProductModal] = useState(false);
    const [productName, setProductName] = useState("");
  

   

    const [videoProvider, setVideoProvider] = useState("Youtube");
    const [videoLink, setVideoLink] = useState("");

    const [wholesalePrices, setWholesalePrices] = useState([{ minQT: "", maxQT: "", price: "" }]);

    const addWholesalePrice = () => {
        setWholesalePrices([...wholesalePrices, { minQT: "", maxQT: "", price: "" }]);
    };

    const removeWholesalePrice = (index) => {
        const newPrices = [...wholesalePrices];
        newPrices.splice(index, 1);
        setWholesalePrices(newPrices);
    };

    const [description, setDescription] = useState("");

    const [fileName, setFileName] = useState("Choose file");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName("Choose file");
        }
    };

    const [isRefundable, setIsRefundable] = useState(false);


    const [metaImage, setMetaImage] = useState(null)
    // const { productData, setProductData } = useProductContext()

    console.log(productData)

    const [isWarranty, setIsWarranty] = useState(false);
    const [warrantyType, setWarrantyType] = useState("");
   
    const [shippingCost, setShippingCost] = useState(0); // Shipping cost state

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/wholesale/Addewholesale");
    };

    const faqs = [
        {
            id: 1,
            name: "MistyRose",

        },
        {
            id: 2,
            name: "Ivory",

        },
        {
            id: 3,
            name: "Silver",

        },
        {
            id: 4,
            name: "DarkGray",

        },
        {
            id: 5,
            name: "LightGrey",

        },
    ]
    return (
        <div className="PreOrderFaq-whole ">
            <div className="product-table">
                <p className="customersText mt-6 ml-6">
                    Add new wholesale product
                </p>
            </div>
            <div className="preOrderFaqBox-new">
                <div className="procol">
                    <div className="preOrderFaqLeft-new">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                        <div className="">
                            <p className="allFaq">Product Information</p>
                            {/* <input type="text" placeholder="Type to search...." className="searchFaq" /> */}
                        </div>
                        <br></br>
                        <div className="seo-divider"></div>
                        <div className="preOrderLeftLower">
                            <form className="addwhole-form">
                                {/* Product Name */}
                                <div className="addwhole-field">
                                    <label className="addwhole-label">
                                        Product Name <span className="required">*</span>
                                    </label>
                                    <input type="text" className="addwhole-input" placeholder="Product Name" />
                                </div>

                                {/* Brand */}
                                <div className="addwhole-field">
                                    <label className="addwhole-label">Brand</label>
                                    <select className="addwhole-input">
                                        <option>Select Brand</option>
                                    </select>
                                </div>

                                {/* Unit */}
                                <div className="addwhole-field">
                                    <label className="addwhole-label">
                                        Unit <span className="required">*</span>
                                    </label>
                                    <input type="text" className="addwhole-input" placeholder="Unit (e.g. KG, Pc etc)" />
                                </div>

                                {/* Minimum Purchase Qty */}
                                <div className="addwhole-field">
                                    <label className="addwhole-label">
                                        Minimum Purchase Qty <span className="required">*</span>
                                    </label>
                                    <input type="number" className="addwhole-input" placeholder="1" />
                                </div>

                                {/* Tags */}
                                <div className="addwhole-tags">
                                    <div className="addwhole-tags-field">
                                        <label className="addwhole-tags-label">
                                            Tags <span className="required">*</span>
                                        </label>
                                        <input type="text" className="addwhole-tags-input" placeholder="Type and hit enter to add a tag" />
                                    </div>
                                    <p className="addwhole-tags-helper">
                                        This is used for search. Input those words by which customers can find this product.
                                    </p>
                                </div>
                                {/* Barcode */}
                                <div className="addwhole-field">
                                    <label className="addwhole-label">Barcode</label>
                                    <input type="text" className="addwhole-input" placeholder="Barcode" />
                                </div>
                            </form>
                        </div>
                        </div>
                  


                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mt-4">
                        <h3 className="pro-heading">Product Images</h3>
                        <div className="seo-divider"></div>
                        {/* Gallery Images */}
                        <div className="pro-field">
                            <label className="pro-label">
                                Gallery Images <span className="pro-size">(600×600)</span>
                            </label>
                            <div className="pro-file-input">
                                <button className="pro-btn">Browse</button>
                                <input type="file" className="pro-input" />
                                <span className="pro-placeholder">Choose file</span>
                            </div>
                            <p className="pro-helper">
                                These images are visible in the product details page gallery. Use 600×600 size images.
                            </p>
                        </div>

                        {/* Thumbnail Image */}
                        <div className="pro-field">
                            <label className="pro-label">
                                Thumbnail Image <span className="pro-size">(300×300)</span>
                            </label>
                            <div className="pro-file-input">
                                <button className="pro-btn">Browse</button>
                                <input type="file" className="pro-input" />
                                <span className="pro-placeholder">Choose file</span>
                            </div>
                            <p className="pro-helper">
                                This image is visible in all product boxes. Use 300×300 size images. Keep some blank space
                                around the main object of your image as we had to crop some edges in different devices to
                                make it responsive.
                            </p>
                        </div>
                    </div>
                    {/* Product Videos  */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mt-4">
                        <h3 className="product-video-title">Product Videos</h3>
                        <div className="seo-divider"></div>

                        {/* Video Provider */}
                        <div className="video-input-row">
                            <label className="video-label">Video Provider</label>
                            <select
                                className="video-select"
                                value={videoProvider}
                                onChange={(e) => setVideoProvider(e.target.value)}
                            >
                                <option value="Youtube">Youtube</option>
                                <option value="Vimeo">Vimeo</option>
                                <option value="Dailymotion">Dailymotion</option>
                            </select>
                        </div>

                        {/* Video Link */}
                        <div className="video-input-group">
                            <div className="video-input-row">
                                <label className="video-label">Video Link</label>
                                <input
                                    type="text"
                                    className="video-input"
                                    placeholder="Video Link"
                                    value={videoLink}
                                    onChange={(e) => setVideoLink(e.target.value)}
                                />
                            </div>
                            <p className="video-helper-text">
                                Use proper link without extra parameters. Don't use short share link/embed iframe code.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mt-4">
                        <h3 className="product-price-title">Product price + stock</h3>
                        <div className="seo-divider"></div>
                        <div className="input-group">
                            <label>Unit price <span className="required">*</span></label>
                            <input type="number" placeholder="0" />
                        </div>

                        <div className="input-group">
                            <label>Set Point</label>
                            <input type="number" placeholder="0" />
                        </div>

                        <div className="input-group">
                            <label>Quantity <span className="required">*</span></label>
                            <input type="number" placeholder="0" />
                        </div>

                        <div className="input-group">
                            <label>SKU</label>
                            <input type="text" placeholder="SKU" />
                        </div>

                        <div className="wholesale-section">
                            <label>Wholesale Prices</label>
                            {wholesalePrices.map((price, index) => (
                                <div className="wholesale-row" key={index}>
                                    <input type="number" placeholder="Min QT" />
                                    <input type="number" placeholder="Max QT" />
                                    <input type="number" placeholder="Price per piece" />
                                    <button className="remove-btn" onClick={() => removeWholesalePrice(index)}><RxCross2 /></button>
                                </div>
                            ))}
                            <button className="add-btn" onClick={addWholesalePrice}>Add More</button>
                        </div>
                    </div>
                    {/* Description */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mt-4">
                        <h3 className="product-description-title">Product Description</h3>
                        <div className="seo-divider"></div>

                        <div className="description-group">
                            <label className="description-label">Description</label>
                            <textarea
                                className="description-textarea"
                                placeholder="Enter product description..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                    </div>

                    {/* PDF */}


                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mt-4">
                        <h3 className="pro-heading">Product Images</h3>
                        <div className="seo-divider"></div>

                        {/* Gallery Images */}
                        <div className="pro-field">
                            <label className="pro-label">
                                PDF Specification<span className="pro-size"></span>
                            </label>
                            <div className="pro-file-input">
                                <button className="pro-btn">Browse</button>
                                <input type="file" className="pro-input" />
                                <span className="pro-placeholder">Choose file</span>
                            </div>
                        </div>
                    </div>

                    

                    {/* SEO */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mt-4">
                        <h2 className="seo-title">SEO Meta Tags</h2>
                        <div className="seo-divider"></div>

                        {/* Meta Title */}
                        <div className="seo-group">
                            <label className="seo-label">Meta Title</label>
                            <div className="seo-input-wrapper">
                                <input
                                    type="text"
                                    className="seo-input"
                                    placeholder="Meta Title"
                                    value={productData.metaTitle}
                                    onChange={(e) =>
                                        setProductData((prev) => ({ ...prev, metaTitle: e.target.value }))
                                    }
                                />
                            </div>
                        </div>

                        {/* Meta Description */}
                        <div className="seo-group">
                            <label className="seo-label">Description</label>
                            <div className="seo-input-wrapper">
                                <textarea
                                    className="seo-textarea"
                                    placeholder="Description"
                                    rows="4"
                                    value={productData.metaDescription}
                                    onChange={(e) =>
                                        setProductData((prev) => ({
                                            ...prev,
                                            metaDescription: e.target.value,
                                        }))
                                    }
                                ></textarea>
                            </div>
                        </div>

                        {/* Meta Image */}
                        <div className="seo-group">
                            <label className="seo-label">Meta Image</label>
                            <div className="seo-input-wrapper">
                                <div className="seo-file-container">
                                    <label className="seo-file-btn">
                                        Browse
                                        <input
                                            type="file"
                                            className="seo-file-input"
                                            onChange={(e) => setMetaImage(e.target.files[0])}
                                            hidden
                                        />
                                    </label>
                                    <span className="seo-file-name">
                                        {metaImage ? metaImage.name : "No file chosen"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* refund */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mt-4">
        <h3 className="refund-title text-lg font-semibold">Refund</h3>
        <div className="seo-divider h-px bg-gray-200 my-4"></div>

        <div className="refund-option flex items-center justify-between">
          <span className="font-medium">Refundable?</span>
          <Switch
            value={isRefundable}
            onChangeFunc={() => setIsRefundable(!isRefundable)}
          />
        </div>

        {/* Refund Note */}
        {isRefundable && (
          <div className="refund-note mt-4">
            <label className="note-label block mb-1 font-medium">Refund Note</label>
            <div
              className="note-box p-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50"
              onClick={() => setShowModal(true)}
            >
              + Select Refund Note
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
            <h2 className="text-lg font-semibold mb-4">Select Refund Note</h2>

            {/* Form Fields */}
            <textarea
              className="w-full border border-gray-300 rounded-md p-2 mb-4"
              rows={4}
              placeholder="Write your refund note..."
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Save
              </button>
            </div>

            {/* Close icon (optional) */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
                    {/* warrenty */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mt-4">
  <h3 className="warranty-title text-lg font-semibold">Warranty</h3>
  <div className="seo-divider h-px bg-gray-200 my-4"></div>

  <div className="warranty-option flex items-center justify-between">
    <span className="font-medium">Warranty</span>
    <Switch
      value={isWarranty}
      onChangeFunc={() => setIsWarranty(!isWarranty)}
    />
  </div>

  {/* Conditional Warranty Inputs */}
  {isWarranty && (
    <>
      {/* Warranty Type Dropdown */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Warranty Type</label>
        <select
          value={warrantyType}
          onChange={(e) => setWarrantyType(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 bg-white focus:outline-none"
        >
          <option value="">Select Warranty</option>
          <option value="1 Year">1 Year</option>
          <option value="2 Years">2 Years</option>
          <option value="No Warranty">No Warranty</option>
        </select>
      </div>

      {/* Warranty Note Trigger */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Warranty Note</label>
        <div className="flex justify-center mt-4">
        <button
  onClick={() => setShowWarrantyModal(true)}
  className="note-box w-full p-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 text-center text-gray-700 font-medium"
>
  + Add
</button>

</div>



      </div>
    </>
  )}

  {/* Warranty Note Modal */}
  {showWarrantyModal && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
        <h4 className="text-lg font-semibold mb-4">Enter Warranty Note</h4>
        <textarea
          value={warrantyNoteInput}
          onChange={(e) => setWarrantyNoteInput(e.target.value)}
          rows={4}
          placeholder="Type your warranty note here..."
          className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={() => setShowWarrantyModal(false)}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setShowWarrantyModal(false);
              // Handle saving logic here
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save
          </button>
        </div>
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
          onClick={() => setShowWarrantyModal(false)}
        >
          ✕
        </button>
      </div>
    </div>
  )}
</div>

                    {/* Frequently */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Frequently Bought</h3>
            <div className="border-b border-gray-200 my-3"></div>

            {/* Radio Options */}
            <div className="flex flex-wrap gap-6 mt-3 text-sm font-medium text-gray-700">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="frequent"
                        value="product"
                        checked={selectedOption === "product"}
                        onChange={() => setSelectedOption("product")}
                        className="accent-blue-600 w-4 h-4"
                    />
                    <span className={selectedOption === "product" ? "font-semibold" : ""}>
                        Select Product
                    </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="frequent"
                        value="category"
                        checked={selectedOption === "category"}
                        onChange={() => setSelectedOption("category")}
                        className="accent-blue-600 w-4 h-4"
                    />
                    <span className={selectedOption === "category" ? " font-semibold" : ""}>
                        Select Category
                    </span>
                </label>
            </div>

            {/* Category Dropdown */}
            {selectedOption === "category" && (
                <div className="mt-5 flex flex-wrap items-center gap-3">
                    <label className="text-sm text-gray-700 font-medium">Category</label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                        <option value="">Select Category</option>
                        <option value="electronics">Electronics</option>
                        <option value="fashion">Fashion</option>
                        <option value="grocery">Grocery</option>
                        <option value="books">Books</option>
                    </select>
                </div>
            )}

            {/* Add More Box */}
            {selectedOption === "product" && (
                <div className="mt-6">
                    <div
                        onClick={() => setShowProductModal(true)}
                        className="w-full border border-dashed border-gray-300 rounded-md py-4 text-center text-gray-600 text-sm hover:bg-gray-50 cursor-pointer transition"
                    >
                        + Add More
                    </div>
                </div>
            )}

            {/* Add Product Modal */}
            {showProductModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
                        <h4 className="text-lg font-semibold mb-4">Add Product</h4>
                        <input
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            placeholder="Enter product name"
                            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="mt-4 flex justify-end space-x-2">
                            <button
                                onClick={() => setShowProductModal(false)}
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    // Handle saving the product
                                    setShowProductModal(false);
                                    setProductName("");
                                }}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Save
                            </button>
                        </div>
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={() => setShowProductModal(false)}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
                </div>
                </div>
                <div className="p-5 space-y-6">
      {/* Product Category */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 ">
        <div className="preOrderFaqRightHead">
          <p className="allFaq">Product category</p>
        </div>
        <ProductCategory />
      </div>

      {/* Shipping Configuration */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mt-4">
        <div className="preOrderFaqRightHead mb-4">
          <p className="allFaq">Shipping Configuration</p>
        </div>

        <div className="faqForm space-y-4">
          {/* Free Shipping */}
          <div className="flex items-center justify-between w-full">
            <label className="text-black w-fit font-normal">Free Shipping</label>
            <button
              onClick={() => setShowShipping(!showShipping)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                showShipping ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  showShipping ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Flat Rate */}
          <div className="flex items-center justify-between w-full">
            <label className="text-black font-normal">Flat Rate</label>
            <button
              onClick={() => setShowRate(!showRate)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                showRate ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  showRate ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Shipping Cost input */}
          {showRate && (
            <div className="flex items-center w-full gap-4">
              <label className="text-black font-normal w-1/3">Shipping cost</label>
              <input
                type="number"
                value={shippingCost}
                onChange={(e) => setShippingCost(e.target.value)}
                className="border p-2 rounded w-2/3"
              />
            </div>
          )}

          {/* Multiply Quantity */}
          <div className="flex items-center justify-between w-full">
            <label className="text-black font-normal">Is Product Quantity Multiply</label>
            <button
              onClick={() => setShowMulitiply(!showMulitiply)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                showMulitiply ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  showMulitiply ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Low Stock Quantity Warning */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mt-4">
        <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">Low Stock Quantity Warning</h2>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full px-4 py-2 pb-4 border border-gray-300 rounded-md focus:outline-none text-gray-700"
          />
        </div>
      </div>

      {/* Stock Visibility State */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mt-4">
        <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">Stock Visibility State</h2>
        <div className="space-y-4">
          {[
            { label: 'Show Stock Quantity', state: showQuantity, setter: setShowQuantity },
            { label: 'Show Stock With Text Only', state: showTextOnly, setter: setShowTextOnly },
            { label: 'Hide Stock', state: hideStock, setter: setHideStock },
          ].map(({ label, state, setter }) => (
            <div className="flex items-center justify-between" key={label}>
              <span className="text-gray-700">{label}</span>
              <button
                onClick={() => setter(!state)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  state ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    state ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cash On Delivery */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mt-4">
        <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">Cash On Delivery</h2>
        <div className="flex items-center justify-between">
          <span className="text-gray-700">Status</span>
          <button
            onClick={() => setShowStatus(!showStatus)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              showStatus ? 'bg-green-500' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                showStatus ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mt-4">
                        <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
                            Featured
                        </h2>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-700">Status</span>
                                <button
                                    onClick={() => setShowFeatured(!showFeatured)}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${showFeatured ? "bg-green-500" : "bg-gray-300"
                                        }`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${showFeatured ? "translate-x-6" : "translate-x-1"
                                            }`}
                                    />
                                </button>
                            </div>

                        </div>
                        
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mt-4">
                        <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
                            Todays Deal
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-700">Status</span>
                                <button
                                    onClick={() => setShowDeal(!showDeal)}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${showDeal ? "bg-green-500" : "bg-gray-300"
                                        }`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${showDeal ? "translate-x-6" : "translate-x-1"
                                            }`}
                                    />
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mt-4">
                        <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">Flash Deal</h2>

                        {/* Flash Title */}
                        <div className="mt-4">
                            <label className="block text-sm  font-normal text-gray-700 mb-1">Add To Flash</label>
                            <select
                                value={flashTitle}
                                onChange={(e) => setFlashTitle(e.target.value)}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-0 focus:border-transparent"
                            >
                                <option value="">Choose Flash Title</option>
                                <option value="flash1">End of Season</option>
                                <option value="flash2">Winter Sale</option>
                                <option value="flash2">Electronics</option>
                                <option value="flash2">Flash Deal</option>
                                <option value="flash2">Flash Sale</option>
                            </select>
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm font-normal text-gray-700 mb-1">Discount</label>
                            <input
                                type="number"
                                value={discount}
                                onChange={(e) => setDiscount(e.target.value)}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-0 focus:border-transparent"
                            />
                        </div>

                        {/* Discount Type Dropdown */}
                        <div className="mt-4">
                            <label className="block text-sm font-normal text-gray-700 mb-2">Discount Type</label>
                            <select
                                value={discountType}
                                onChange={(e) => setDiscountType(e.target.value)}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-0 focus:border-transparent"
                            >
                                <option value="">Choose Discount Type</option>
                                <option value="flat">Flat</option>
                                <option value="percent">Percent</option>
                            </select>
                       
                    </div>
                  
               </div>
               <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mt-4">
                        <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">Estimate Shipping Time</h2>

                        <div className="mt-4">
                            <label className="block text-sm font-normal text-gray-700 mb-1">Shipping Days</label>
                            <div className="flex rounded-md border border-gray-300 overflow-hidden">
                                <input
                                    type="number"
                                    placeholder="Shipping Days"
                                    value={shippingDays}
                                    onChange={(e) => setShippingDays(e.target.value)}
                                    className="w-full px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-0 focus:border-transparent"
                                />
                                <span className="inline-flex items-center px-4 text-sm text-gray-500 bg-gray-100 border-l border-gray-300">
                                    Days
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mt-4">
                        <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">Vat & TAX</h2>

                        {/* Tax Section */}
                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Tax</label>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <input
                                    type="number"
                                    placeholder="0"
                                    value={tax}
                                    onChange={(e) => setTax(e.target.value)}
                                    className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-0 focus:border-gray-300"
                                />
                                <select
                                    value={taxType}
                                    onChange={(e) => setTaxType(e.target.value)}
                                    className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-0 focus:border-gray-300"
                                >
                                    <option>Flat</option>
                                    <option>Percent</option>
                                </select>
                            </div>
                        </div>

                        {/* VAT Section */}
                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Vat</label>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <input
                                    type="number"
                                    placeholder="0"
                                    value={vat}
                                    onChange={(e) => setVat(e.target.value)}
                                    className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-0 focus:border-gray-300"
                                />
                                <select
                                    value={vatType}
                                    onChange={(e) => setVatType(e.target.value)}
                                    className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-0 focus:border-gray-300"
                                >
                                    <option>Flat</option>
                                    <option>Percent</option>
                                </select>
                            </div>
                        </div>
                        
                    </div>
                </div>
               </div>
               {/* <div className="button-group-new">
                      <button className="btn-btn-gray">Save & Unpublish</button>
                      <Link to='/products/create/add' >
                        <button className="btn-btn-green">Save & Publish</button>
                      </Link>
                    </div> */}
                    <div className="flex gap-4 mt-4 justify-end">
                      <button
                        className="bg-gray-200 text-gray-800 px-4 py-2 rounded shadow-md  hover:bg-gray-400 lg transition"
                        onClick={() => handleSubmit(false)}
                      >
                        Save & Unpublish
                      </button>
                      <Link to='/products/create/add' >
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