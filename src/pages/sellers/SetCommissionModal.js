import React, { useState, useEffect } from "react";
import axios from "axios";

const SetCommissionModal = ({ sellerId, onClose }) => {
    const [commissionRate, setCommissionRate] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [sellerDetails, setSellerDetails] = useState(null);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        const fetchSellerDetails = async () => {
            try {
                const response = await axios.get(`https://e-commerce-backend-1-0.onrender.com/api/sellers/${sellerId}`);
                setSellerDetails(response.data);
            } catch (error) {
                console.error("Error fetching seller details:", error);
                setErrorMessage("Failed to fetch seller details.");
            }
        };

        if (sellerId) {
            fetchSellerDetails();
        }
    }, [sellerId]);

    const handleInputChange = (event) => {
        setCommissionRate(event.target.value);
        setErrorMessage("");
        setSuccessMessage("");
    };

    const handleSaveCommission = async () => {
        if (!commissionRate) {
            setErrorMessage("Please enter a commission rate.");
            return;
        }

        const numericRate = parseFloat(commissionRate);
        if (isNaN(numericRate) || numericRate < 0 || numericRate > 100) {
            setErrorMessage("Please enter a valid commission rate between 0 and 100.");
            return;
        }

        setIsSaving(true);
        try {
            await axios.put(`https://e-commerce-backend-1-0.onrender.com/api/sellers/${sellerId}/commission`, {
                commissionRate: numericRate,
            });
            setSuccessMessage("Commission rate updated successfully!");
            setErrorMessage("");
            // Optionally, you can trigger a refresh of the sellers list in the parent component
            setTimeout(onClose, 1500); // Close after a short delay for feedback
        } catch (error) {
            console.error("Error updating commission rate:", error);
            setErrorMessage("Failed to update commission rate.");
            setSuccessMessage("");
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
                <h3 className="text-xl font-semibold mb-4">Set Commission</h3>
                {sellerDetails && (
                    <p className="mb-2">Seller: <strong className="font-bold">{sellerDetails.name}</strong></p>
                )}
                <div className="mb-4">
                    <label htmlFor="commissionRate" className="block text-gray-700 text-sm font-bold mb-2">
                        Commission Rate (%)
                    </label>
                    <input
                        type="number"
                        id="commissionRate"
                        value={commissionRate}
                        onChange={handleInputChange}
                        placeholder="Enter commission percentage"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                {errorMessage && <p className="text-red-500 text-sm italic mb-2">{errorMessage}</p>}
                {successMessage && <p className="text-green-500 text-sm italic mb-2">{successMessage}</p>}
                <div className="flex justify-end gap-2">
                    <button
                        onClick={handleSaveCommission}
                        disabled={isSaving}
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isSaving ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {isSaving ? 'Saving...' : 'Save Commission'}
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

export default SetCommissionModal;