import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditSellerModal = ({ sellerId, onClose, initialSellerData }) => {
    const [sellerData, setSellerData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        // Add other fields as needed
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isSaving, setIsSaving] = useState(false);
    const navigate = useNavigate(); // To navigate after successful edit

    useEffect(() => {
        if (initialSellerData && sellerId === initialSellerData._id) {
            setSellerData(initialSellerData);
        } else {
            // Fallback if initial data isn't directly passed or doesn't match
            setSellerData({
                name: "",
                phone: "",
                email: "",
                address: "",
                // Initialize other fields as needed
            });
        }
    }, [sellerId, initialSellerData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSellerData(prevState => ({
            ...prevState,
            [name]: value,
        }));
        setErrorMessage("");
        setSuccessMessage("");
    };

    const handleSave = () => {
        setIsSaving(true);
        // Simulate API call (replace with your actual API call in the parent component)
        setTimeout(() => {
            setIsSaving(false);
            setSuccessMessage("Seller details updated successfully!");
            setErrorMessage("");
            onClose(sellerData); // Pass the updated data back to the parent
        }, 1000);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
                <h3 className="text-xl font-semibold mb-4">Edit Seller</h3>
                {errorMessage && <p className="text-red-500 text-sm italic mb-2">{errorMessage}</p>}
                {successMessage && <p className="text-green-500 text-sm italic mb-2">{successMessage}</p>}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={sellerData.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                        Phone
                    </label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={sellerData.phone}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={sellerData.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
                        Address
                    </label>
                    <textarea
                        id="address"
                        name="address"
                        value={sellerData.address}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                {/* Add more input fields for other seller details as needed */}
                <div className="flex justify-end gap-2">
                    <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isSaving ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {isSaving ? 'Saving...' : 'Save Changes'}
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditSellerModal;