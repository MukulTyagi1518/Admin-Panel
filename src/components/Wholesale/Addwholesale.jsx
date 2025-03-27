import { Delete, Edit, Trash } from "lucide-react"
import "./Addwholesale.css"
import { MdOutlineSettings } from "react-icons/md"
import { useNavigate } from "react-router-dom";

export default function PreOrderFaq() {

    const navigate = useNavigate();

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
        <div className="PreOrderFaq ma10">
               <div className="product-table">
               <p className="customersText">
                        Add new wholesale product
                    </p>
            </div>
            <div className="preOrderFaqBox">
                <div className="procol">
                <div className="preOrderFaqLeft">
                    <div className="preOrderLeftUpper">
                        <p className="allFaq">All Colors</p>
                        {/* <input type="text" placeholder="Type to search...." className="searchFaq" /> */}
                    </div>
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
                </div>
                
                      

                <div className="prerow">
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
                            <p className="allFaq">Color  filter activation</p>
                        </div>

                        <div className="faqForm">
                            <div className="toggle-item">

                                <label className="switch">
                                    <input
                                        type="checkbox"
                                    />
                                    <span className="slider"></span>
                                </label>
                            </div>

                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}