import React, { useState } from "react";

const BanSellerModal = ({ sellerId, onClose, onBan }) => {
    const [banReason, setBanReason] = useState("");
    const [isBanning, setIsBanning] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleReasonChange = (event) => {
        setBanReason(event.target.value);
        setErrorMessage("");
    };

    const handleBanConfirmation = () => {
        if (!banReason.trim()) {
            setErrorMessage("Please provide a reason for banning the seller.");
            return;
        }

        setIsBanning(true);
        // Simulate the banning process (no API call)
        setTimeout(() => {
            setIsBanning(false);
            onBan(sellerId, banReason); // Call the onBan function in the parent
            onClose(); // Close the modal
        }, 1000);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
                <h3 className="text-xl font-semibold mb-4">Ban This Seller</h3>
                <p className="mb-4 text-gray-700">Are you sure you want to ban seller with ID: <strong className="font-bold">{sellerId}</strong>?</p>
                <div className="mb-4">
                    <label htmlFor="banReason" className="block text-gray-700 text-sm font-bold mb-2">
                        Reason for Ban (Optional)
                    </label>
                    <textarea
                        id="banReason"
                        value={banReason}
                        onChange={handleReasonChange}
                        rows="3"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter ban reason"
                    />
                </div>
                {errorMessage && <p className="text-red-500 text-sm italic mb-2">{errorMessage}</p>}
                <div className="flex justify-end gap-2">
                    <button
                        onClick={handleBanConfirmation}
                        disabled={isBanning}
                        className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isBanning ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {isBanning ? 'Banning...' : 'Ban Seller'}
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

export default BanSellerModal;