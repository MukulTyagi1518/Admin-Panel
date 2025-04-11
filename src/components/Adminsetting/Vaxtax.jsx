import React, { useEffect, useState } from "react";
import { Plus, Minus, X } from "lucide-react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DeleteConfirmation from "../DeleteConfirmation";
import { AdminSettingsService } from "../../services/adminSettingServices";


const TaxTable = () => {
    const [expandedRow, setExpandedRow] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [newTaxName, setNewTaxName] = useState("");
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [attributeToDeleteId, setAttributeToDeleteId] = useState(null);

    const [taxData, setTaxData] = useState([
    ]);

    console.log(taxData)

    const [fetchVatTaxes, setFetchVatTaxes] = useState(false)

    useEffect(() => {
        AdminSettingsService.getVatTax(setTaxData, fetchVatTaxes, setFetchVatTaxes);
    }, [fetchVatTaxes])

    const navigate = useNavigate();

    const handleEdit = (id, name, status) => {
        navigate(`/Edittax/${id}/${name}/${status}`);
    };


    const toggleStatus = (id,name, status) => {
        // setTaxData((prev) =>
        //     prev.map((tax) =>
        //         tax.id === id ? { ...tax, status: !tax.status } : tax
        //     )
        // );
        AdminSettingsService.updateVatTax(name, status)
        setFetchVatTaxes(true)

        console.log(name, status)
    };

    const handleSave = () => {
        if (newTaxName.trim() !== "") {
            setTaxData((prev) => [
                ...prev,
                { id: prev.length + 1, type: newTaxName, status: true },
            ]);

            AdminSettingsService.createVatTax(newTaxName)
            setNewTaxName("");
            setShowModal(false);
        }
    };
    const openDeleteConfirmation = (name) => {
        setAttributeToDeleteId(name);
        setShowDeleteConfirmation(true);
    };

    const closeDeleteConfirmation = () => {
        setAttributeToDeleteId(null);
        setShowDeleteConfirmation(false);
    };

    const handleDelete = (name) => {
        // In a real application, you would make an API call here to delete the attribute
        AdminSettingsService.deleteVatTax(name)
        setFetchVatTaxes(true)
        // console.log(name);

        // After successful deletion, you would likely update the 'attributes' state
        closeDeleteConfirmation();
    };


    return (
        <div className="p-4 mt-5">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">All Taxes</h2>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md" onClick={() => setShowModal(true)}>
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
                        {taxData.map((tax, index) => (
                            <tr key={tax.id} className="text-center">
                                <td className="p-3 border">{index + 1}</td>
                                <td className="p-3 border">{tax.name}</td>
                                <td className="p-3 border">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={tax.status}
                                            onChange={() => toggleStatus(tax.name, tax.status)}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 rounded-full peer peer-checked:bg-green-500 relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
                                    </label>
                                </td>
                                <td className="p-3 border space-x-2">
                                    <div className="flex justify-left space-x-2 mt-3">

                                        <button className="bg-blue-100 p-2 rounded-full" onClick={() => handleEdit(tax._id, tax.name, tax.status)}><FaEdit className="text-blue-500" /></button>
                                        <button className="bg-red-100 p-2 rounded-full"><FaTrash className="text-red-500" onClick={() => openDeleteConfirmation(tax.name)} /></button>

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
                            <p className="font-semibold">{tax.id}. {tax.type}</p>
                            <button
                                onClick={() => setExpandedRow(expandedRow === tax.id ? null : tax.id)}
                            >
                                {expandedRow === tax.id ? <Minus size={20} /> : <Plus size={20} />}
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

                                    <button className="bg-blue-100 p-2 rounded-full" onClick={() => handleEdit(tax.id)}><FaEdit className="text-blue-500" /></button>
                                    <button className="bg-red-100 p-2 rounded-full"><FaTrash className="text-red-500" onClick={() => openDeleteConfirmation(tax.id)} /></button>

                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {showModal && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center px-4">
                    <div className="bg-white w-full max-w-lg rounded-lg shadow-lg relative">
                        {/* Header */}
                        <div className="flex justify-between items-center p-6 border-b">
                            <h2 className="text-xl font-semibold">Add New Tax</h2>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-gray-500 hover:text-gray-800"
                            >
                                <X />
                            </button>
                        </div>

                        {/* Form */}
                        <div className="p-6">
                            <div className="flex items-center mb-6">
                                <label className="w-32 text-gray-700 text-sm font-medium">Tax Name</label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={newTaxName}
                                    onChange={(e) => setNewTaxName(e.target.value)}
                                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none "
                                />
                            </div>

                            {/* Buttons */}
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

            {/* Render the Delete Confirmation Modal */}
            {showDeleteConfirmation && (
                <DeleteConfirmation
                    isOpen={showDeleteConfirmation}
                    onConfirm={() => { handleDelete(attributeToDeleteId) }}
                    onCancel={closeDeleteConfirmation}

                />
            )}
        </div>
    );
};

export default TaxTable;
