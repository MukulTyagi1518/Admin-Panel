import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './AddNewBrand.css';

export default function AddNewColor() {
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
                <h2>Add New Color</h2>
                <button className="back-btn" onClick={() => navigate("/products/colour")}>Back</button>
            </div>
            <form onSubmit={handleSubmit} className="brand-form">
                <label>Color Name:</label>
                <input
                    type="text"
                    placeholder="Enter color name"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    required
                />

                <label>Color :</label>
                <input
                    type="text"
                    placeholder="Enter color "
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    required
                />
              

                <div className="button-container">
        <button type="submit" className="submit-btn">Save</button>
    </div>
            </form>
        </div>
    );
}
