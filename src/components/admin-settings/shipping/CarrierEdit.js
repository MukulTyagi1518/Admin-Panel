







import React, { useState } from "react";

import { useNavigate } from 'react-router-dom';
import Switch from "../../Switch";

const CarrierEdit = () => {
    const navigate = useNavigate();
    const [freeShipping, setFreeShipping] = useState(false);

    const handleBack = () => {
        navigate(`/admin-settings/shipping/carrier`);
    };

    const handleFreeShippingToggle = (isEnabled) => {
        setFreeShipping(isEnabled);
    };
    

    return (
        <section className="p-6 max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Carrier Informations</h2>
                <button className="px-4 py-2 text-white bg-blue-500  hover:bg-indigo-700 rounded hover:bg-gray-400" onClick={handleBack}>
                    Back
                </button>
            </div>

            <div className="bg-white shadow rounded-xl p-6">
                <h3 className="text-lg font-medium mb-4">Carrier Information</h3>

                <div className="gap-4">
                    <div>
                        <label className="block mb-1 font-medium">Carrier Name *</label>
                        <input type="text" className="w-full border rounded p-2 mt-2" placeholder="FedEx" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium mt-3">Transit Time *</label>
                        <input type="text" className="w-full border rounded p-2 mt-2" placeholder="20" />
                    </div>
                    <div className="">
                        <label className="block mb-1 font-medium mt-3">Logo *</label>
                        <input type="file" className="w-full border rounded p-2 mt-2" />
                    </div>
                </div>

                <div className="flex items-center mt-4 ">
                    <label className="font-medium">Free Shipping?</label>
                    <div className="ml-2">
                        {/* <Switch onToggle={handleFreeShippingToggle} /> */}
                        <Switch
        value={freeShipping}
        onChangeFunc={(e) => setFreeShipping(e.target.checked)}
      />
                    </div>
                </div>

                <div className="mt-4">
                    <label className="block mb-1 font-medium">Billing Type *</label>
                    <select className="w-full border rounded p-2">
                        <option>According to Weight</option>
                        <option>According to Price</option>
                    </select>
                </div>
            </div>

            {!freeShipping && (
                <div className="bg-white shadow rounded-xl p-6 mt-8">
                    <h3 className="text-lg font-medium mb-4">Weight based carrier price range</h3>

                    <div className="gap-4">
                        <div className="bg-gray-200 p-4 rounded flex items-center gap-2">
                            <span>Will be applied when the weight is</span>
                            <span className="font-bold">&gt;=</span>
                            <input type="number" className="w-20 border rounded p-1" placeholder="0.00" />
                            <span>kg</span>
                        </div>
                        <div className="bg-gray-200 p-4 rounded flex items-center gap-2 mt-4">
                            <span>Will be applied when the weight is</span>
                            <span className="font-bold">&lt;</span>
                            <input type="number" className="w-20 border rounded p-1" placeholder="0.00" />
                            <span>kg</span>
                        </div>
                    </div>

                    <div className="gap-4 mt-4">
                        {[
                            "Asia",
                            "Europe",
                            "Africa",
                            "Costa Rica Area"
                        ].map((region) => (
                            <div key={region} className="flex items-center gap-2">
                                <label className="w-40 ml-5">{region}</label>
                                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                <span>$</span>
                                <input
                                    type="number"
                                    placeholder="cost"
                                    className="border px-2 py-1 rounded w-32 mt-3"
                                />
                            </div>
                        ))}
                    </div>

                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Add new range
                    </button>
                </div>
            )}

            <div className="flex justify-end mt-6">
                <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Update Carrier Informations
                </button>
            </div>
        </section>
    );
};

export default CarrierEdit;