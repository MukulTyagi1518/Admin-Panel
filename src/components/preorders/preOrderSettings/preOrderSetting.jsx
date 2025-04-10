// import { useState } from "react";
// import "./preOrderSetting.scss";
// import { X } from "lucide-react";

// export default function PreOrderSetting() { 
//     const [file, setFile] = useState({ name: "Choose file", src: "" });

//     const handleFileChange = (event) => {
//         const selectedFile = event.target.files[0];
//         if (selectedFile) {
//             setFile({
//                 name: selectedFile.name,
//                 src: URL.createObjectURL(selectedFile), // Create a preview URL
//             });
//         } else {
//             setFile({ name: "Choose file", src: "" });
//         }
//     };

//     return (
//         <div className="PreOrderSetting ma10">
//             {/* First Section */}
//             <div className="preOrderSettingBox">
//                 <div className="preOrderBoxHead">
//                     <p className="preOrderBoxHeadText">PreOrder Seller Commission</p>
//                 </div>
//                 <div className="preOrderBoxLower">
//                     <div className="productBoxLowerdiv">
//                         <p className="productBoxLowerText">PreOrder Product for Seller</p>
//                         <label className="switch">
//                             <input
//                                 type="checkbox"
//                             />
//                             <span className="slider"></span>
//                         </label>
//                         {/* <input type="checkbox" className="preProductSettingToggle" /> */}
//                     </div>
//                     <div className="productBoxLowerdiv">
//                         <p className="productBoxLowerText">PreOrder Seller Commission</p>
//                         <div className="PreProductInputDiv">
//                             <input type="number" className="dicountInp" />
//                             <p className="percentDiscount">%</p>
//                         </div>
//                     </div>
//                     <div className="updateButtonBox">
//                         <button className="updatePreOrderSetting">Update</button>
//                     </div>
//                 </div>
//             </div>

//             {/* Second Section */}
//             <div className="preOrderSettingBox">
//                 <div className="preOrderBoxHead">
//                     <p className="preOrderBoxHeadText">PreOrder Settings</p>
//                 </div>
//                 <div className="preOrderBoxLower">
//                     <div className="productBoxLowerdiv">
//                         <p className="productBoxLowerText">Image for Product Marketing</p>
//                         <div className="PreProductInputDiv">
//                             <label className="file-label">
//                                 Browse
//                                 <input type="file" className="file-input" onChange={handleFileChange} />
//                             </label>
//                             <span className="file-name">{file.name}</span>
//                         </div>
//                     </div>
//                     <div className="productBoxLowerdiv">
//                         <p className="productBoxLowerText">Product Flat Rate Shipping</p>
//                         <div className="PreProductInputDiv">
//                             <input type="number" className="rateInput" />
//                         </div>
//                     </div>
//                     <div className="updateButtonBox">
//                         <button className="updatePreOrderSetting">Update</button>
//                     </div>
//                 </div>
//             </div>

            
//             <div className="preOrderSettingBox">
//                 <div className="preOrderBoxHead">
//                     <p className="preOrderBoxHeadText">PreOrder Instructions</p>
//                 </div>
//                 <div className="preOrderBoxLower">
//                     <div className="productBoxLowerdiv editorBox">
//                         <p className="productBoxLowerText">Preorder Request Instructions</p>
//                         <textarea name="" className="editor-container" id=""></textarea>
//                     </div>
//                     <div className="updateButtonBox">
//                         <button className="updatePreOrderSetting">Update</button>
//                     </div>
//                 </div>
//             </div>

//             <div className="preOrderSettingBox">
//                 <div className="preOrderBoxHead">
//                     <p className="preOrderBoxHeadText">Payment Instructions</p>
//                 </div>
//                 <div className="preOrderBoxLower">
//                     <div className="productBoxLowerdiv">
//                         <p className="productBoxLowerText">Image For Payment QR Code</p>
//                         <div className="PreProductInputDiv">
//                             <label className="file-label">
//                                 Browse
//                                 <input type="file" className="file-input" onChange={handleFileChange} />
//                             </label>
//                             <span className="file-name">{file.name}</span>
//                         </div>
//                     </div>
//                     <div className="productBoxLowerdiv">
//                         <div className="productBoxLowerText"></div>
//                         <div className="qrcode">
//                             <img src={file.src} alt="" className="qrcodeimg" />
//                             {
//                                 file.src ? <div onClick={() => {
//                                     setFile({
//                                         name: '',
//                                         src: ""
//                                     })
//                                 }} className="crossImg">
//                                     <X size={18} color="blue" />
//                                 </div> : null
//                             }
//                         </div>
//                     </div>
//                     <div className="productBoxLowerdiv editorBox">
//                         <p className="productBoxLowerText">Payment Instructions</p>
//                         <textarea name="" className="editor-container" id=""></textarea>
//                     </div>
//                     <div className="updateButtonBox">
//                         <button className="updatePreOrderSetting">Update</button>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// }



import { useEffect, useState } from "react";
import axios from "axios";
import { X } from "lucide-react";
import "./preOrderSetting.scss";

export default function PreOrderSetting() {
    const [preOrderId, setPreOrderId] = useState(null);

    const [commission, setCommission] = useState({ amount: "", status: true });
    const [flatRate, setFlatRate] = useState("");
    const [marketingImage, setMarketingImage] = useState({ name: "Choose file", src: "", file: null });
    const [preorderInstructions, setPreorderInstructions] = useState("");
    const [paymentInstructions, setPaymentInstructions] = useState("");
    const [qrCode, setQrCode] = useState({ name: "Choose file", src: "", file: null });

    // Fetch settings on mount
    useEffect(() => {
        const fetchSettings = async () => {
            const res = await axios.get("http://localhost:5000/api/preorder-setting");
            if (res.data && res.data.length > 0) {
                const data = res.data[0];
                setPreOrderId(data._id);
                setCommission({ amount: data.sellerCommission?.amount || "", status: data.sellerCommission?.status === "active" });
                setFlatRate(data.flatRateShipping || "");
                setMarketingImage({ name: "Choose file", src: data.marketingImage || "", file: null });
                setPreorderInstructions(data.preorderInstructions || "");
                setPaymentInstructions(data.paymentInstructions || "");
                setQrCode({ name: "Choose file", src: data.paymentQRCode || "", file: null });
            }
        };
        fetchSettings();
    }, []);

    const handleUpdate = async (field, payload, files = null) => {
        if (!preOrderId) return alert("Settings ID not found!");

        const formData = new FormData();
        if (files) {
            for (const key in files) {
                formData.append(key, files[key]);
            }
        }

        for (const key in payload) {
            formData.append(key, payload[key]);
        }

        try {
            await axios.put(`http://localhost:5000/api/preorder-setting/${preOrderId}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            alert(`${field} updated successfully`);
        } catch (err) {
            console.error(err);
            alert(`Failed to update ${field}`);
        }
    };

    return (
        <div className="PreOrderSetting ma10">

            {/* Seller Commission */}
            <div className="preOrderSettingBox">
                <div className="preOrderBoxHead">
                    <p className="preOrderBoxHeadText">PreOrder Seller Commission</p>
                </div>
                <div className="preOrderBoxLower">
                    <div className="productBoxLowerdiv">
                        <p className="productBoxLowerText">PreOrder Product for Seller</p>
                        <label className="switch-set">
                            <input
                                type="checkbox"
                                checked={commission.status}
                                onChange={(e) => setCommission({ ...commission, status: e.target.checked })}
                            />
                            <span className="slider-set"></span>
                        </label>
                    </div>
                    <div className="productBoxLowerdiv">
                        <p className="productBoxLowerText">PreOrder Seller Commission</p>
                        <div className="PreProductInputDiv">
                            <input
                                type="number"
                                className="dicountInp"
                                value={commission.amount}
                                onChange={(e) => setCommission({ ...commission, amount: e.target.value })}
                            />
                            <p className="percentDiscount">%</p>
                        </div>
                    </div>
                    <div className="updateButtonBox">
                        <button
                            className="updatePreOrderSetting"
                            onClick={() =>
                                handleUpdate("Seller Commission", {
                                    sellerCommissionAmount: commission.amount,
                                    sellerCommissionStatus: commission.status ? "active" : "inactive",
                                })
                            }
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>

            {/* Marketing Image and Flat Rate */}
            <div className="preOrderSettingBox">
                <div className="preOrderBoxHead">
                    <p className="preOrderBoxHeadText">PreOrder Settings</p>
                </div>
                <div className="preOrderBoxLower">
                    <div className="productBoxLowerdiv">
                        <p className="productBoxLowerText">Image for Product Marketing</p>
                        <div className="PreProductInputDiv">
                            <label className="file-label">
                                Browse
                                <input
                                    type="file"
                                    className="file-input"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        setMarketingImage({
                                            name: file.name,
                                            src: URL.createObjectURL(file),
                                            file,
                                        });
                                    }}
                                />
                            </label>
                            <span className="file-name">{marketingImage.name}</span>
                        </div>
                    </div>
                    <div className="productBoxLowerdiv">
                        <p className="productBoxLowerText">Product Flat Rate Shipping</p>
                        <div className="PreProductInputDiv">
                            <input
                                type="number"
                                className="rateInput"
                                value={flatRate}
                                onChange={(e) => setFlatRate(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="updateButtonBox">
                        <button
                            className="updatePreOrderSetting"
                            onClick={() =>
                                handleUpdate("Marketing & Shipping", { flatRateShipping: flatRate }, {
                                    marketingImage: marketingImage.file,
                                })
                            }
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>

            {/* PreOrder Instructions */}
            <div className="preOrderSettingBox">
                <div className="preOrderBoxHead">
                    <p className="preOrderBoxHeadText">PreOrder Instructions</p>
                </div>
                <div className="preOrderBoxLower">
                    <div className="productBoxLowerdiv editorBox">
                        <p className="productBoxLowerText">Preorder Request Instructions</p>
                        <textarea
                            className="editor-container"
                            value={preorderInstructions}
                            onChange={(e) => setPreorderInstructions(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="updateButtonBox">
                        <button
                            className="updatePreOrderSetting"
                            onClick={() => handleUpdate("PreOrder Instructions", { preorderInstructions })}
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>

            {/* Payment Instructions and QR */}
            <div className="preOrderSettingBox">
                <div className="preOrderBoxHead">
                    <p className="preOrderBoxHeadText">Payment Instructions</p>
                </div>
                <div className="preOrderBoxLower">
                    <div className="productBoxLowerdiv">
                        <p className="productBoxLowerText">Image For Payment QR Code</p>
                        <div className="PreProductInputDiv">
                            <label className="file-label">
                                Browse
                                <input
                                    type="file"
                                    className="file-input"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        setQrCode({
                                            name: file.name,
                                            src: URL.createObjectURL(file),
                                            file,
                                        });
                                    }}
                                />
                            </label>
                            <span className="file-name">{qrCode.name}</span>
                        </div>
                    </div>
                    <div className="productBoxLowerdiv">
                        <div className="productBoxLowerText"></div>
                        <div className="qrcode">
                            {qrCode.src && <img src={qrCode.src} alt="" className="qrcodeimg" />}
                            {qrCode.src && (
                                <div
                                    onClick={() => setQrCode({ name: "Choose file", src: "", file: null })}
                                    className="crossImg"
                                >
                                    <X size={18} color="blue" />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="productBoxLowerdiv editorBox">
                        <p className="productBoxLowerText">Payment Instructions</p>
                        <textarea
                            className="editor-container"
                            value={paymentInstructions}
                            onChange={(e) => setPaymentInstructions(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="updateButtonBox">
                        <button
                            className="updatePreOrderSetting"
                            onClick={() =>
                                handleUpdate("Payment", { paymentInstructions }, {
                                    paymentQRCode: qrCode.file,
                                })
                            }
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}