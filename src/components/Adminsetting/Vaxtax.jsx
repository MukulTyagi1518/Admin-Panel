import React, { useState, useEffect } from "react";
import { Plus, Minus, X } from "lucide-react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TaxTable = () => {
    const [expandedRow, setExpandedRow] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [newTaxName, setNewTaxName] = useState("");
    const [taxData, setTaxData] = useState([]);

    const navigate = useNavigate();

    // GET API call to fetch all tax data
    useEffect(() => {
        const fetchTaxes = async () => {
            try {
                const response = await axios.get("https://e-commerce-backend-1-0.onrender.com/api/vatTax/getAll");
                if (response.data && response.data.data) {
                    const formattedData = response.data.data.map((item, index) => ({
                        id: item._id,
                        name: item.name,
                        status: item.status,
                        index: index + 1,
                    }));
                    setTaxData(formattedData);
                }
            } catch (error) {
                console.error("Error fetching tax data:", error);
            }
        };

        fetchTaxes();
    }, []);

    const handleEdit = (id) => {
        navigate(`/Edittax/${id}`);
    };

    const toggleStatus = (id) => {
        setTaxData((prev) =>
            prev.map((tax) =>
                tax.id === id ? { ...tax, status: !tax.status } : tax
            )
        );
    };

    const handleSave = async () => {
        if (newTaxName.trim() !== "") {
            try {
                const response = await axios.post("https://e-commerce-backend-1-0.onrender.com/api/vatTax/create", {
                    name: newTaxName,
                    status: true,
                });

                const newTax = response.data.data;

                if (newTax && newTax._id && newTax.name) {
                    setTaxData((prev) => [
                        ...prev,
                        {
                            id: newTax._id,
                            name: newTax.name,
                            status: newTax.status,
                            index: prev.length + 1,
                        },
                    ]);
                    setNewTaxName("");
                    setShowModal(false);
                } else {
                    console.error("Error: Invalid data returned from server.");
                }
            } catch (error) {
                console.error("Error saving tax:", error);
            }
        } else {
            console.error("Error: Tax name cannot be empty.");
        }
    };
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this tax?")) {
            try {
                await axios.delete(`https://e-commerce-backend-1-0.onrender.com/api/vatTax/delete/${id}`);
                setTaxData((prev) => prev.filter((tax) => tax.id !== id));
            } catch (error) {
                console.error("Error deleting tax:", error);
            }
        }
    };

    return (
        <div className="p-4 mt-5">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">All Taxes</h2>
                <button
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md"
                    onClick={() => setShowModal(true)}
                >
                    Add New Tax
                </button>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block bg-white shadow rounded-lg">
                <table className="w-full text-sm text-left border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 border">#</th>
                            <th className="p-3 border">Tax Type</th>
                            <th className="p-3 border">Status</th>
                            <th className="p-3 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {taxData.map((tax) => (
                            <tr key={tax.id} className="text-center">
                                <td className="p-3 border">{tax.index}</td>
                                <td className="p-3 border">{tax.name}</td>
                                <td className="p-3 border">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={tax.status}
                                            onChange={() => toggleStatus(tax.id)}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 rounded-full peer peer-checked:bg-green-500 relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
                                    </label>
                                </td>
                                <td className="p-3 border space-x-2">
                                    <div className="flex justify-left space-x-2 mt-3">
                                        <button
                                            className="bg-blue-100 p-2 rounded-full"
                                            onClick={() => handleEdit(tax.id)}
                                        >
                                            <FaEdit className="text-blue-500" />
                                        </button>
                                        <button
                                            className="bg-red-100 p-2 rounded-full"
                                            onClick={() => handleDelete(tax.id)}
                                        >
                                            <FaTrash className="text-red-500" />
                                        </button>

                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile View */}
            <div className="md:hidden space-y-4">
                {taxData.map((tax) => (
                    <div key={tax.id} className="border rounded-lg p-4 shadow">
                        <div className="flex justify-between items-center">
                            <p className="font-semibold">
                                {tax.index}. {tax.name}
                            </p>
                            <button
                                onClick={() =>
                                    setExpandedRow(
                                        expandedRow === tax.id ? null : tax.id
                                    )
                                }
                            >
                                {expandedRow === tax.id ? (
                                    <Minus size={20} />
                                ) : (
                                    <Plus size={20} />
                                )}
                            </button>
                        </div>
                        {expandedRow === tax.id && (
                            <div className="mt-3 space-y-2">
                                <div className="flex justify-between">
                                    <span>Status:</span>
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={tax.status}
                                            onChange={() => toggleStatus(tax.id)}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 rounded-full peer peer-checked:bg-green-500 relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
                                    </label>
                                </div>
                                <div className="flex justify-left space-x-2 mt-3">
                                    <button
                                        className="bg-blue-100 p-2 rounded-full"
                                        onClick={() => handleEdit(tax.id)}
                                    >
                                        <FaEdit className="text-blue-500" />
                                    </button>
                                    <button className="bg-red-100 p-2 rounded-full">
                                        <FaTrash className="text-red-500" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center px-4">
                    <div className="bg-white w-full max-w-lg rounded-lg shadow-lg relative">
                        <div className="flex justify-between items-center p-6 border-b">
                            <h2 className="text-xl font-semibold">Add New Tax</h2>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-gray-500 hover:text-gray-800"
                            >
                                <X />
                            </button>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-6">
                                <label className="w-32 text-gray-700 text-sm font-medium">
                                    Tax Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={newTaxName}
                                    onChange={(e) => setNewTaxName(e.target.value)}
                                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                                />
                            </div>
                            <div className="flex justify-end gap-3 mt-8">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="text-gray-600 hover:underline"
                                >
                                    Close
                                </button>
                                <button
                                    onClick={handleSave}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md font-medium"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaxTable;