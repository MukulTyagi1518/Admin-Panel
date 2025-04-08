// AddNewBrand.js
import React, { useState } from "react";
import apiInstance from "../../utils/axios"; 
import './AddNewBrand.css'

export default function AddNewBrand({ onBrandAdded }) {
    const [fileName, setFileName] = useState("Choose file");
    const [formData, setFormData] = useState({
        name: "",
        metaTitle: "",
        metaDescription: "",
    });
    const [logo, setLogo] = useState(null);

    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
            setLogo(event.target.files[0]);
        } else {
            setFileName("Choose file");
            setLogo(null);
        }
    };

    const handleDataChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCreateBrand = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name.trim());
        formDataToSend.append("metaTitle", formData.metaTitle.trim());
        formDataToSend.append("metaDescription", formData.metaDescription.trim());

        if (logo) {
            formDataToSend.append("logo", logo);
        }

        try {
            await apiInstance.post("/brands/create", formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            alert("New Brand added");
            onBrandAdded(); // Notify parent to refresh data
        } catch (error) {
            console.error("Error creating brand:", error.response?.data || error);
            alert("Failed to add brand. Check console for details.");
        }
    };

    return (
        <div className="preOrderFaqRight">
            <div className="preOrderFaqRightHead">
                <p className="allFaq">Add new Brand</p>
            </div>
            <div className="faqForm">
                <label>Name</label>
                <input
                    type="text"
                    placeholder="Enter brand name"
                    name="name"
                    value={formData.name}
                    onChange={handleDataChange}
                    className="faqInp"
                />
                <div className="faqForm-warranty">
                    <label>Logo</label>
                    <div className="file-upload-container">
                        <label className="file-upload-label">
                            <span className="file-upload-button">Browse</span>
                            <span className="file-upload-text">{fileName}</span>
                            <input type="file" className="file-upload-input" onChange={handleFileChange} />
                        </label>
                        <p className="file-upload-info">Minimum dimensions required: 40px width × 40px height.</p>
                    </div>
                </div>
                <label>Meta Name</label>
                <input
                    type="text"
                    placeholder="Enter meta title"
                    name="metaTitle"
                    value={formData.metaTitle}
                    onChange={handleDataChange}
                    className="faqInp"
                />
                <label>Meta Description</label>
                <textarea
                    type="text"
                    placeholder="Enter meta description"
                    name="metaDescription"
                    value={formData.metaDescription}
                    onChange={handleDataChange}
                    className="faqTxt"
                />
                <div className="inpSubBox">
                    <input onClick={handleCreateBrand} type="submit" value="Save" className="inpSub" />
                </div>
            </div>
        </div>
    );
}