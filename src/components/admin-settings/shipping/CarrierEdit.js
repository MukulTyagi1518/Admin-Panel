

import React, { useEffect, useState } from "react";
import Switch from "../../Switch";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

const CarrierEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [carrierData, setCarrierData] = useState({
        carrierName: "",
        transitTime: "",
        billingType: "According to Weight",
        isFreeShipping: false,
        logo: null,
    });

    const [freeShipping, setFreeShipping] = useState(false);

    const handleBack = () => {
        navigate(`/admin-settings/shipping/carrier`);
    };

    const handleFreeShippingToggle = (isEnabled) => {
        setFreeShipping(isEnabled);
        setCarrierData(prev => ({ ...prev, isFreeShipping: isEnabled }));
    };
    

    const handleUpdate = async () => {
        try {
            const formData = new FormData();
            formData.append("carrierName", carrierData.carrierName);
            formData.append("transitTime", carrierData.transitTime);
            formData.append("billingType", carrierData.billingType);
            formData.append("isFreeShipping", carrierData.isFreeShipping);
            if (carrierData.logo) {
                formData.append("logo", carrierData.logo);
            }

            const res = await axios.put(
                `https://e-commerce-backend-1-0.onrender.com/api/carrier/${id}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (res.status === 200) {
                alert("Carrier updated successfully!");
                navigate("/admin-settings/shipping/carrier");
            }
        } catch (error) {
            console.error("Failed to update carrier:", error);
        }
    };

    const fetchCarrier = async () => {
        try {
            const res = await axios.get(`https://e-commerce-backend-1-0.onrender.com/api/carrier/${id}`);
            const data = res.data.data;

            setCarrierData({
                carrierName: data.carrierName || "",
                transitTime: data.transitTime || "",
                billingType: data.billingType || "According to Weight",
                isFreeShipping: data.isFreeShipping || false,
                logo: null,
            });

            setFreeShipping(data.isFreeShipping || false);
        } catch (err) {
            console.error("Error fetching carrier:", err);
        }
    };

    useEffect(() => {
        if (id) {
            fetchCarrier();
        }
    }, [id]);

    return (
        <section className="p-6 max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Carrier Informations</h2>
                <button
                    className="px-4 py-2 text-white bg-blue-500 hover:bg-indigo-700 rounded"
                    onClick={handleBack}
                >
                    Back
                </button>
            </div>

            <div className="bg-white shadow rounded-xl p-6">
                <h3 className="text-lg font-medium mb-4">Carrier Information</h3>

                <div className="gap-4">
                    <div>
                        <label className="block mb-1 font-medium">Carrier Name *</label>
                        <input
                            type="text"
                            className="w-full border rounded p-2 mt-2"
                            placeholder="FedEx"
                            value={carrierData.carrierName}
                            onChange={(e) =>
                                setCarrierData({ ...carrierData, carrierName: e.target.value })
                            }
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium mt-3">Transit Time *</label>
                        <input
                            type="text"
                            className="w-full border rounded p-2 mt-2"
                            placeholder="20"
                            value={carrierData.transitTime}
                            onChange={(e) =>
                                setCarrierData({ ...carrierData, transitTime: e.target.value })
                            }
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium mt-3">Logo *</label>
                        <input
                            type="file"
                            className="w-full border rounded p-2 mt-2"
                            onChange={(e) =>
                                setCarrierData({ ...carrierData, logo: e.target.files[0] })
                            }
                        />
                    </div>
                </div>

                <div className="flex items-center mt-4">
                    <label className="font-medium">Free Shipping?</label>
                    <div className="ml-2">
                        <Switch onToggle={handleFreeShippingToggle} isEnabled={freeShipping} />
                    </div>
                </div>

                <div className="mt-4">
                    <label className="block mb-1 font-medium">Billing Type *</label>
                    <select
                        className="w-full border rounded p-2"
                        value={carrierData.billingType}
                        onChange={(e) =>
                            setCarrierData({ ...carrierData, billingType: e.target.value })
                        }
                    >
                        <option>According to Weight</option>
                        <option>According to Price</option>
                    </select>
                </div>
            </div>

            {/* Additional settings for paid carriers can go here */}

            <div className="flex justify-end mt-6">
                <button
                    className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={handleUpdate}
                >
                    Update Carrier Informations
                </button>
            </div>
        </section>
    );
};

export default CarrierEdit;
