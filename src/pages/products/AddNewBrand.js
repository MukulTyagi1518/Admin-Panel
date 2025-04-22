import React, { useState } from "react";
import apiInstance from "../../utils/axios"; 
import './AddNewBrand.css';

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
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg mt-7">
            <div className="text-center mb-6">
                <p className="text-2xl font-semibold">Add New Brand</p>
            </div>
            <form onSubmit={handleCreateBrand}>
                <div className="space-y-6">
                    {/* Brand Name and Meta Title */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Brand Name</label>
                            <input
                                type="text"
                                placeholder="Enter brand name"
                                name="name"
                                value={formData.name}
                                onChange={handleDataChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Meta Title</label>
                            <input
                                type="text"
                                placeholder="Enter meta title"
                                name="metaTitle"
                                value={formData.metaTitle}
                                onChange={handleDataChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Logo Upload */}
                    <label className="block text-sm font-medium text-gray-700"> Logo Upload</label>
                    <div className="PreProductInputDiv">
                            <label className="file-label">
                                Browse
                                <input
                                    type="file"
                                    className="file-input"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        setFileName({
                                            name: file.name,
                                            src: URL.createObjectURL(file),
                                            file,
                                        });
                                    }}
                                />
                            </label>
                            <span className="file-name">{formData.name}</span>
                        </div>

                    {/* Meta Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Meta Description</label>
                        <textarea
                            placeholder="Enter meta description"
                            name="metaDescription"
                            value={formData.metaDescription}
                            onChange={handleDataChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Save Button */}
                    <div className="flex justify-end mt-8">
                        <button 
                            type="submit"
                            className="py-3 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Save Brand
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
