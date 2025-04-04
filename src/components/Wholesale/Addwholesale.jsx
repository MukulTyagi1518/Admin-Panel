import { Delete, Edit, Trash } from "lucide-react"
import "./Addwholesale.css"
import { MdOutlineSettings } from "react-icons/md"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useProductContext } from "../../productContex";


export default function PreOrderFaq() {

    const navigate = useNavigate();

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
    const { productData, setProductData } = useProductContext()

    console.log(productData)

    const [isWarranty, setIsWarranty] = useState(false);
    const [warrantyType, setWarrantyType] = useState("");


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
        <div className="PreOrderFaq ">
            <div className="product-table">
                <p className="customersText">
                    Add new wholesale product
                </p>
            </div>
            <div className="preOrderFaqBox border border-black  ">
                <div className="procol">
                    <div className="preOrderFaqLeft-new">
                        <div className="preOrderLeftUpper-new">
                            <p className="allFaq">All Colors</p>
                            {/* <input type="text" placeholder="Type to search...." className="searchFaq" /> */}
                        </div>
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


                    <div className="pro-container">
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
                    <div className="product-video-container">
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

                    <div className="product-price-container">
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
                    <div className="product-description-container">
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

                    <div className="pro-container">
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
                    <div className="seo-container">
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
                    <div className="refund-container">
                        <h3 className="refund-title">Refund</h3>
                        <div className="seo-divider"></div>
                        <div className="refund-option">
                            <span>Refundable?</span>
                            <label className="toggle-switch">
                                <input
                                    type="checkbox"
                                    checked={isRefundable}
                                    onChange={() => setIsRefundable(!isRefundable)}
                                />
                                <span className="slider"></span>
                            </label>
                        </div>

                        {isRefundable && (
                            <div className="refund-note">
                                <label className="note-label">Refund Note</label>
                                <div className="note-box">+ Select Refund Note</div>
                            </div>
                        )}
                    </div>
                    {/* warrenty */}
                    <div className="warranty-container-new">
                        <h3 className="warranty-title">Warranty</h3>
                        <div className="seo-divider"></div>
                        <div className="warranty-option">
                            <span>Warranty</span>
                            <label className="toggle-switch">
                                <input
                                    type="checkbox"
                                    checked={isWarranty}
                                    onChange={() => setIsWarranty(!isWarranty)}
                                />
                                <span className="slider"></span>
                            </label>
                        </div>

                        {isWarranty && (
                            <>
                                <div className="warranty-select">
                                    <label>Warranty Type</label>
                                    <select
                                        value={warrantyType}
                                        onChange={(e) => setWarrantyType(e.target.value)}
                                    >
                                        <option value="">Select Warranty</option>
                                        <option value="1 Year">1 Year</option>
                                        <option value="2 Years">2 Years</option>
                                        <option value="No Warranty">No Warranty</option>
                                    </select>
                                </div>

                                <div className="warranty-note">
                                    <label className="note-label">Warranty Note</label>
                                    <div className="note-box">+ Select Warranty Note</div>
                                </div>
                            </>
                        )}
                    </div>
                    {/* Frequently */}
                </div>





                <div className="prerow border border-black  ">
                    <div className="preOrderFaqRight-new">

                        <div className="preOrderFaqRightHead">
                            <p className="allFaq">Add new Color</p>
                        </div>

                        <div className="faqForm">
                            <label>Name</label>
                            <input type="text" placeholder="Enter question" className="faqInp" />

                            <label>Color Code</label>
                            <input type="text" placeholder="Enter Code" className="faqInp" />

                            <div className="inpSubBox">
                                <input type="submit" value="Save" className="inpSub" />
                            </div>
                        </div>
                    </div>
                    <div className="preOrderFaqRight-new">
                        <div className="preOrderFaqRightHead">
                            <p className="allFaq">Shipping Configuration</p>
                        </div>

                        <div className="faqForm">
                            <div className=" flex items-center justify-between  w-full">
                                <label className="text-black w-fit font-medium ">Enable Shipping</label>
                                <div className="ml-auto ">
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                            </div>
                            <div className=" flex items-center justify-between w-full">
                                <label className="text-black font-medium">Enable Shipping</label>
                                <div className="ml-auto">
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                            </div>
                            <div className=" flex items-center justify-between w-full">
                                <label className="text-black font-medium">Enable Shipping</label>
                                <div className="ml-auto">
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>




            </div>
        </div>
    )
}