import { useState } from "react";
import "./preOrderSetting.scss";
import { X } from "lucide-react";

export default function PreOrderSetting() {
    const [file, setFile] = useState({ name: "Choose file", src: "" });

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile({
                name: selectedFile.name,
                src: URL.createObjectURL(selectedFile), // Create a preview URL
            });
        } else {
            setFile({ name: "Choose file", src: "" });
        }
    };

    return (
        <div className="PreOrderSetting ma10">
            {/* First Section */}
            <div className="preOrderSettingBox">
                <div className="preOrderBoxHead">
                    <p className="preOrderBoxHeadText">PreOrder Seller Commission</p>
                </div>
                <div className="preOrderBoxLower">
                    <div className="productBoxLowerdiv">
                        <p className="productBoxLowerText">PreOrder Product for Seller</p>
                        <label className="switch">
                            <input
                                type="checkbox"
                            />
                            <span className="slider"></span>
                        </label>
                        {/* <input type="checkbox" className="preProductSettingToggle" /> */}
                    </div>
                    <div className="productBoxLowerdiv">
                        <p className="productBoxLowerText">PreOrder Seller Commission</p>
                        <div className="PreProductInputDiv">
                            <input type="number" className="dicountInp" />
                            <p className="percentDiscount">%</p>
                        </div>
                    </div>
                    <div className="updateButtonBox">
                        <button className="updatePreOrderSetting">Update</button>
                    </div>
                </div>
            </div>

            {/* Second Section */}
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
                                <input type="file" className="file-input" onChange={handleFileChange} />
                            </label>
                            <span className="file-name">{file.name}</span>
                        </div>
                    </div>
                    <div className="productBoxLowerdiv">
                        <p className="productBoxLowerText">Product Flat Rate Shipping</p>
                        <div className="PreProductInputDiv">
                            <input type="number" className="rateInput" />
                        </div>
                    </div>
                    <div className="updateButtonBox">
                        <button className="updatePreOrderSetting">Update</button>
                    </div>
                </div>
            </div>

            
            <div className="preOrderSettingBox">
                <div className="preOrderBoxHead">
                    <p className="preOrderBoxHeadText">PreOrder Instructions</p>
                </div>
                <div className="preOrderBoxLower">
                    <div className="productBoxLowerdiv editorBox">
                        <p className="productBoxLowerText">Preorder Request Instructions</p>
                        <textarea name="" className="editor-container" id=""></textarea>
                    </div>
                    <div className="updateButtonBox">
                        <button className="updatePreOrderSetting">Update</button>
                    </div>
                </div>
            </div>

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
                                <input type="file" className="file-input" onChange={handleFileChange} />
                            </label>
                            <span className="file-name">{file.name}</span>
                        </div>
                    </div>
                    <div className="productBoxLowerdiv">
                        <div className="productBoxLowerText"></div>
                        <div className="qrcode">
                            <img src={file.src} alt="" className="qrcodeimg" />
                            {
                                file.src ? <div onClick={() => {
                                    setFile({
                                        name: '',
                                        src: ""
                                    })
                                }} className="crossImg">
                                    <X size={18} color="blue" />
                                </div> : null
                            }
                        </div>
                    </div>
                    <div className="productBoxLowerdiv editorBox">
                        <p className="productBoxLowerText">Payment Instructions</p>
                        <textarea name="" className="editor-container" id=""></textarea>
                    </div>
                    <div className="updateButtonBox">
                        <button className="updatePreOrderSetting">Update</button>
                    </div>
                </div>
            </div>

        </div>
    );
}
