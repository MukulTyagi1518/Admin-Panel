import { useState } from "react";
import "./Sellerverification.css";
import { RxCross2 } from "react-icons/rx";

export default function SellerVerificationForm() {
    const [fields, setFields] = useState([
        { id: 1, label: "Your Name", type: "text" },
        { id: 2, label: "Shop Name", type: "text" },
        { id: 3, label: "Email", type: "email" },
        { id: 4, label: "License No", type: "text" },
        { id: 5, label: "Full Address", type: "text" },
        { id: 6, label: "Phone Number", type: "tel" },
        { id: 7, label: "Tax Papers", type: "text" }
    ]);

    const availableFields = [
        { id: 8, label: "Text Input", type: "text" },
        { id: 9, label: "Select", type: "select" },
        { id: 10, label: "Multiple Select", type: "select" },
        { id: 11, label: "Radio", type: "select" },
        { id: 11, label: "File", type: "select" }
    ];

    const addField = (field) => {
        if (!fields.find(f => f.id === field.id)) {
            setFields([...fields, field.type === "select" ? { ...field, options: [] } : field]);
        }
    };

    const removeField = (id) => {
        setFields(fields.filter(field => field.id !== id));
    };

    const addOption = (id) => {
        setFields(fields.map(field => 
            field.id === id 
                ? { ...field, options: [...field.options, ""] } 
                : field
        ));
    };

    const removeOption = (fieldId, optionIndex) => {
        setFields(fields.map(field =>
            field.id === fieldId
                ? { ...field, options: field.options.filter((_, index) => index !== optionIndex) }
                : field
        ));
    };

    return (
        <div className="seller-form-container bg-white p-6 rounded-lg max-w-4xl mx-auto shadow-md flex flex-col md:flex-row gap-6">
            {/* Left Form */}
            <div className="flex-1">
                <h2 className="text-xl font-normal mb-4">Seller Verification Form</h2>
                <div className="form-fields space-y-4">
                    {fields.map(field => (
                        <div key={field.id} className="field-item flex flex-col bg-gray-200 p-3 rounded-md">
                            <div className="flex items-center">
                                <span className="text-sm font-semibold w-16">{field.type === "file" ? "File" : field.type === "select" ? "Select" : "Text"}</span>
                                <input 
                                    type={field.type === "select" ? "text" : field.type} 
                                    placeholder={field.label} 
                                    className="flex-1 px-3 py-2 border rounded-md focus:outline-none" 
                                />
                                <button 
                                    className="text-black-500 ml-3" 
                                    onClick={() => removeField(field.id)}
                                >
                                  <RxCross2 />
                                </button>
                            </div>

                            {field.type === "select" && (
                                <div className="mt-2">
                                    {field.options.map((option, index) => (
                                        <div key={index} className="flex items-center mt-2">
                                            <input 
                                                type="text" 
                                                className="px-3 py-2 border rounded-md flex-1" 
                                                placeholder={`Option ${index + 1}`} 
                                            />
                                            <button 
                                                className="text-black-500 ml-2"
                                                onClick={() => removeOption(field.id, index)}
                                            >
                                                <RxCross2 />
                                            </button>
                                        </div>
                                    ))}
                                    <button 
                                        className="bg-green-600 text-white px-4 py-2 mt-2 rounded-md self-center"
                                        onClick={() => addOption(field.id)}
                                    >
                                        Add option
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <button className="save-btn bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600">Save</button>
            </div>

            {/* Right Table */}
            <div className="available-fields p-4 bg-white rounded-md shadow-md w-64">
                <h3 className="text-lg font-normal mb-3">Add Fields</h3>
                <ul className="space-y-2">
                    {availableFields.map(field => (
                        <li 
                            key={field.id} 
                            className="cursor-pointer bg-gray-300 p-2 rounded-md hover:bg-gray-400"
                            onClick={() => addField(field)}
                        >
                            {field.label}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
