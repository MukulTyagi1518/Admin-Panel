import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './AddNewBrand.css';

export default function AddNewBrand() {
    const [brandName, setBrandName] = useState("");
    const [brandLogo, setBrandLogo] = useState(null);
    const [fileName, setFileName] = useState("Choose file");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Brand Added:", brandName, brandLogo);
        navigate("/");
    };

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setBrandLogo(e.target.files[0]);
            setFileName(e.target.files[0].name);
        } else {
            setFileName("Choose file");
            setBrandLogo(null);
        }
    };

    return (
        <div className="brand-form-container">
            <div className="form-header">
                <h2>Add New Brand</h2>
                <button className="back-btn" onClick={() => navigate("/products/brand")}>Back</button>
            </div>
            <form onSubmit={handleSubmit} className="brand-form">
                <label>Brand Name:</label>
                <input
                    type="text"
                    placeholder="Enter brand name"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    required
                />

                <label>Brand Logo:</label>
                <input type="file" onChange={handleFileChange} required />
                <p className="file-name">{fileName}</p>

                <div className="button-container">
        <button type="submit" className="submit-btn">Save</button>
    </div>
            </form>
        </div>
    );
}
