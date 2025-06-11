
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllSellers.css"; // Import CSS file
import { FaPlus, FaMinus, FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ViewExpandData from "../../components/ViewExpandData";
import Switch from "../../components/Switch";
import SetCommissionModal from "./SetCommissionModal";
import EditSellerModal from "./EditSellerModal";
import DeleteConfirmation from "../../components/DeleteConfirmation";
import BanSellerModal from "./BanSellerModal";



const AllSellers = () => {
    const [sellers, setSellers] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [expandedRows, setExpandedRows] = useState({});
    const [approvals, setApprovals] = useState({});
    const [isSetCommissionModalOpen, setIsSetCommissionModalOpen] = useState(false);
    const [selectedSellerId, setSelectedSellerId] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedSellerForEdit, setSelectedSellerForEdit] = useState(null);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [attributeToDeleteId, setAttributeToDeleteId] = useState(null);
    const [isBanModalOpen, setIsBanModalOpen] = useState(false);
    const [sellerToBan, setSellerToBan] = useState(null);



    const navigate = useNavigate();

    useEffect(() => {
        const fetchSellers = async () => {
            try {
                const response = await axios.get("https://e-commerce-backend-1-0.onrender.com/api/sellers");
                setSellers(response.data);

                const initialApprovals = response.data.reduce(
                    (acc, seller) => ({ ...acc, [seller._id]: seller.approval }),
                    {}
                );
                setApprovals(initialApprovals);
            } catch (error) {
                console.error("Error fetching sellers:", error);
            }
        };

        fetchSellers();
    }, []);

    //  Expand / Collapse Row
    const toggleRow = (id) => {
        setExpandedRows((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const toggleApproval = async (id) => {
        try {
            const updatedStatus = !approvals[id];
            await axios.put(`https://e-commerce-backend-1-0.onrender.com/api/sellers/${id}/approval`, { approval: updatedStatus });
            setApprovals((prev) => ({ ...prev, [id]: updatedStatus }));
        } catch (error) {
            console.error("Error updating approval status:", error);
        }
    };

    const handleReview = (e) => {
        e.preventDefault();
        navigate("/sellers/create");
    };


    const openDeleteConfirmation = (id) => {
        setAttributeToDeleteId(id);
        setShowDeleteConfirmation(true);
    };

    const closeDeleteConfirmation = () => {
        setAttributeToDeleteId(null);
        setShowDeleteConfirmation(false);
    };

    const handleDelete = (id) => {
        // In a real application, you would make an API call here to delete the attribute
        console.log(`Deleting attribute with ID: ${id}`);
        // After successful deletion, you would likely update the 'attributes' state
        closeDeleteConfirmation();
    };



    // const toggleDropdown = (id) => {
    //     setDropdownOpen(dropdownOpen === id ? null : id);
    // };

    const openSetCommissionModal = (sellerId) => {
        setSelectedSellerId(sellerId);
        setIsSetCommissionModalOpen(true);
        setDropdownOpen(null); // Close the dropdown when modal opens
    };

    const closeSetCommissionModal = () => {
        setIsSetCommissionModalOpen(false);
        setSelectedSellerId(null);
    };


    const openEditModal = (sellerId) => {
        setSelectedSellerForEdit(sellerId);
        setIsEditModalOpen(true);
        setDropdownOpen(null); // Close the dropdown
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
        setSelectedSellerForEdit(null);
    };



    const openBanModal = (sellerId) => {
        setSellerToBan(sellerId);
        setIsBanModalOpen(true);
        setDropdownOpen(null);
    };

    const closeBanModal = () => {
        setIsBanModalOpen(false);
        setSellerToBan(null);
    };

    const handleBanSeller = (sellerId, banReason) => {
        console.log(`Seller ${sellerId} will be banned with reason: ${banReason}`);
        // Update the local state to reflect the ban
        setSellers(prevSellers =>
            prevSellers.map(seller =>
                seller._id === sellerId ? { ...seller, status: 'Banned' } : seller
            )
        );
        // In a real application, you would likely make an API call here
        // to update the backend.
    };


    const toggleDropdown = (id) => {
        setDropdownOpen(dropdownOpen === id ? null : id);
    };


    return (
        
<div className="container4 overflow-x-auto border rounded border-gray-300 ">
    <div className="header-container flex justify-between items-center mb-4">
        <h2 className="header-title text-xl font-semibold">All Sellers</h2>
        <button className="add-seller-btn bg-[#8a3ffc] text-gray-100  rounded-[20px]  font-[500] py-2 px-4 " onClick={handleReview}> + Add New Seller</button>
    </div>

    <div className="filters-container flex justify-between mb-4">
        <div className="filters-left flex items-center">
            <span className="mr-2">Sellers</span>
            <select className="filter-dropdown border rounded py-1 px-2">
                <option>Bulk Action</option>
                <option>Delete</option>
            </select>
        </div>
        <div className="filters-right flex items-center">
            <select className="filter-dropdown border rounded py-1 px-2 mr-2">
                <option>Filter by Verification</option>
            </select>
            <select className="filter-dropdown border rounded py-1 px-2 mr-2">
                <option>Filter by Approval</option>
            </select>
            <input type="text" className="filter-input border rounded py-1 px-2" placeholder="Type name or email & Enter" />
        </div>
    </div>
    <div className="overflow-x-auto">
        {/* <table className="seller-table min-w-full leading-normal border rounded"> */}
        <table className="seller-table leading-normal border rounded">

            <thead>
                <tr>
                    <th className="md:table-cell lg:hidden pl-4 pr-2"></th> {/* Expand/Collapse for small screens */}
                    <th className="px-2 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        <input type="checkbox" />
                    </th>
                    <th className="px-2 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Name
                    </th>
                    <th className="px-2 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden md:table-cell lg:table-cell">
                        Phone
                    </th>
                    <th className="px-2 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden md:table-cell lg:table-cell">
                        Email
                    </th>
                    <th className="px-2 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden md:table-cell lg:table-cell">
                        Verification
                    </th>
                    <th className="px-2 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden md:table-cell lg:table-cell">
                        Approval
                    </th>
                    <th className="px-2 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden md:table-cell lg:table-cell">
                        Products
                    </th>
                    <th className="px-2 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden md:table-cell lg:table-cell">
                        Due
                    </th>
                    <th className="px-2 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden md:table-cell lg:table-cell">
                        Email Verification
                    </th>
                    <th className="px-2 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden md:table-cell lg:table-cell">
                        Status
                    </th>
                    <th className="px-2 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Options
                    </th>
                </tr>
            </thead>
            <tbody>
                {sellers.map((seller) => (
                    <React.Fragment key={seller._id}>
                        <tr>
                            <td className="md:table-cell lg:hidden pl-4 pr-2">
                                <ViewExpandData
                                    isExpanded={expandedRows[seller._id]}
                                    toggleExpanded={() => toggleRow(seller._id)}
                                />
                            </td>
                            <td className="px-2 py-3 border-b border-gray-200">
                                <input type="checkbox" />
                            </td>
                            <td className="px-2 py-3 border-b border-gray-200 whitespace-nowrap break-words"> {/* Added break-words */}
                                <div className="flex items-center">
                                    <div className="mr-2">
                                        <img className="w-6 h-6 rounded-full" src={seller.image} alt={seller.name} />
                                    </div>
                                    <div className="text-sm text-gray-900">{seller.name}</div>
                                </div>
                            </td>
                            <td className="px-2 py-3 border-b border-gray-200 whitespace-nowrap hidden md:table-cell lg:table-cell">
                                <div className="text-sm text-gray-900">{seller.phone}</div>
                            </td>
                            {/* <td className="px-2 py-3 border-b border-gray-200 whitespace-nowrap break-words hidden md:table-cell lg:table-cell"> 
                                <div className="text-sm text-gray-900">{seller.email}</div>
                            </td> */}
                            <td className="px-2 py-3 border-b border-gray-200 whitespace-nowrap break-words max-w-[150px]">
    <div className="text-sm text-gray-900 truncate">{seller.email}</div>
</td>

                            <td className="px-2 py-3 border-b border-gray-200 whitespace-nowrap hidden md:table-cell lg:table-cell">
                                <div className="text-sm text-gray-900">{seller.verification}</div>
                            </td>
                            <td className="px-2 py-3 border-b border-gray-200 whitespace-nowrap hidden md:table-cell lg:table-cell">
                                <Switch
                                    value={approvals[seller._id]}
                                    onChangeFunc={(isChecked) => toggleApproval(seller._id, isChecked)} // Ensure isChecked is passed
                                />
                            </td>
                            <td className="px-2 py-3 border-b border-gray-200 whitespace-nowrap hidden md:table-cell lg:table-cell">
                                <div className="text-sm text-gray-900">{seller.products}</div>
                            </td>
                            <td className="px-2 py-3 border-b border-gray-200 whitespace-nowrap hidden md:table-cell lg:table-cell">
                                <div className="text-sm text-gray-900">{seller.due}</div>
                            </td>
                            <td className="px-2 py-3 border-b border-gray-200 whitespace-nowrap break-words hidden md:table-cell lg:table-cell"> {/* Added break-words */}
                                <div className="text-sm text-gray-900">{seller.emailVerification}</div>
                            </td>
                            <td className="px-2 py-3 border-b border-gray-200 whitespace-nowrap hidden md:table-cell lg:table-cell">
                                <div className="text-sm text-gray-900">{seller.status}</div>
                            </td>
                            <td className="px-2 py-3 border-b border-gray-200 whitespace-nowrap">
                                <div className="relative">
                                    <button className="options-btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" onClick={() => toggleDropdown(seller._id)}>
                                        <FaEllipsisV />
                                    </button>
                                    {dropdownOpen === seller._id && (
                                        <div className="dropdown-menu absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                                            <div className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => { /* Handle Profile action */ toggleDropdown(null); }}>Profile</div>
                                            <div className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => { /* Handle Log in as this Seller action */ toggleDropdown(null); }}>Log in as this Seller</div>
                                            <div className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => { /* Handle Go to Payment action */ toggleDropdown(null); }}>Go to Payment</div>
                                            <div className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => { /* Handle Payment History action */ toggleDropdown(null); }}>Payment History</div>
                                            <div className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => { openSetCommissionModal(seller._id); toggleDropdown(null); }}>Set Commission</div>
                                            <div className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => { openEditModal(seller._id); toggleDropdown(null); }}>Edit</div>
                                            <div className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => { openBanModal(seller._id); toggleDropdown(null); }}>Ban this seller</div>
                                            <div className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => { openDeleteConfirmation(seller._id); toggleDropdown(null); }}>Delete</div>
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>

                        {/* Expandable Row for small screens */}
                        <tr className={`expanded-row ${expandedRows[seller._id] ? '' : 'hidden'} lg:hidden`}>
                            <td colSpan="12" className="p-4">
                                <div className="expanded-content grid grid-cols-1 gap-2">
                                    <p><strong>Name:</strong> {seller.name}</p>
                                    <p><strong>Phone:</strong> {seller.phone}</p>
                                    <p><strong>Email:</strong> {seller.email}</p>
                                    <p><strong>Verification:</strong> {seller.verification}</p>
                                    <p><strong>Approval:</strong> <Switch value={approvals[seller._id]} onChangeFunc={(isChecked) => toggleApproval(seller._id, isChecked)} /></p>
                                    <p><strong>Products:</strong> {seller.products}</p>
                                    <p><strong>Due:</strong> {seller.due}</p>
                                    <p><strong>Email Verification:</strong> {seller.emailVerification}</p>
                                    <p><strong>Status:</strong> {seller.status}</p>
                                    <p><strong>Address:</strong> {seller.address}</p>
                                    <p><strong>Phone Number:</strong> {seller.phoneNumber}</p>
                                </div>
                            </td>
                        </tr>
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    </div>
    {isSetCommissionModalOpen && (
        <SetCommissionModal
            sellerId={selectedSellerId}
            onClose={closeSetCommissionModal}
        />
    )}

    {isEditModalOpen && (
        <EditSellerModal
            sellerId={selectedSellerForEdit}
            onClose={closeEditModal}
        />
    )}

    {showDeleteConfirmation && (
        <DeleteConfirmation
            isOpen={showDeleteConfirmation}
            onConfirm={() => handleDelete(attributeToDeleteId)}
            onCancel={closeDeleteConfirmation}
        />
    )}

    {isBanModalOpen && sellerToBan && (
        <BanSellerModal
            sellerId={sellerToBan}
            onClose={closeBanModal}
            onBan={handleBanSeller}
        />
    )}
</div>
    );
};

export default AllSellers;










