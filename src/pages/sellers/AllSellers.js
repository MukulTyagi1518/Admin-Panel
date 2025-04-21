



import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllSellers.css"; // Import CSS file
import { FaPlus, FaMinus, FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ViewExpandData from "../../components/ViewExpandData";

const AllSellers = () => {
    const [sellers, setSellers] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [expandedRows, setExpandedRows] = useState({});
    const [approvals, setApprovals] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSellers = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/sellers");
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
            await axios.put(`http://localhost:5000/api/sellers/${id}/approval`, { approval: updatedStatus });
            setApprovals((prev) => ({ ...prev, [id]: updatedStatus }));
        } catch (error) {
            console.error("Error updating approval status:", error);
        }
    };

    const handleReview = (e) => {
        e.preventDefault();
        navigate("/sellers/create");
    };

    const toggleDropdown = (id) => {
        setDropdownOpen(dropdownOpen === id ? null : id);
    };

    return (
        <div className="container4">
            <div className="header-container">
                <h2 className="header-title">All Sellers</h2>
                <button className="add-seller-btn" onClick={handleReview}>Add New Seller</button>
            </div>

            <div className="filters-container">
                <div className="filters-left">
                    <span>Sellers</span>
                    <select className="filter-dropdown">
                        <option>Bulk Action</option>
                        <option>Delete</option>
                    </select>
                </div>
                <div className="filters-right">
                    <select className="filter-dropdown">
                        <option>Filter by Verification</option>
                    </select>
                    <select className="filter-dropdown">
                        <option>Filter by Approval</option>
                    </select>
                    <input type="text" className="filter-input" placeholder="Type name or email & Enter" />
                </div>
            </div>

            <table className="seller-table">
                <thead>
                    <tr>
                        <th className="hide-on-large"></th>
                        <th><input type="checkbox" /></th>
                        <th>Name</th>
                        <th className="hide-on-small">Phone</th>
                        <th className="hide-on-small">Email</th>
                        <th className="hide-on-small">Verification</th>
                        <th className="hide-on-small">Approval</th>
                        <th className="hide-on-small">Products</th>
                        <th className="hide-on-small">Due</th>
                        <th className="hide-on-small">Email Verification</th>
                        <th className="hide-on-small">Status</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {sellers.map((seller) => (
                        <React.Fragment key={seller._id}>
                            <tr>
                                <td className="hide-on-large">
                                    {/* <button className="toggle-btn" onClick={() => toggleRow(seller._id)}>
                                        {expandedRows[seller._id] ? <FaMinus /> : <FaPlus />}
                                    </button> */}
                                     <ViewExpandData
                    isExpanded={expandedRows[seller._id]}
                    toggleExpanded={() => toggleRow(seller._id)}
                  />
                                </td>
                                <td><input type="checkbox" /></td>
                                <td className="seller-info">
                                    <img src={seller.image} alt={seller.name} className="seller-img" />
                                    {seller.name}
                                </td>
                                <td className="hide-on-small">{seller.phone}</td>
                                <td className="hide-on-small">{seller.email}</td>
                                <td className="hide-on-small">{seller.verification}</td>
                                <td className="hide-on-small">
                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            checked={approvals[seller._id]}
                                            onChange={() => toggleApproval(seller._id)}
                                        />
                                        <span className="slider round"></span>
                                    </label>
                                </td>
                                <td className="hide-on-small">{seller.products}</td>
                                <td className="hide-on-small">{seller.due}</td>
                                <td className="hide-on-small">{seller.emailVerification}</td>
                                <td className="hide-on-small">{seller.status}</td>
                                <td>
                                    <div style={{ position: "relative" }}>
                                        <button className="btn btn-primary btn-sm" onClick={() => toggleDropdown(seller._id)}>
                                            <FaEllipsisV />
                                        </button>
                                        {dropdownOpen === seller._id && (
                                            <div className="dropdown-menu">
                                                <div>Profile</div>
                                                <div>Log in as this Seller</div>
                                                <div>Go to Payment</div>
                                                <div>Payment History</div>
                                                <div>Set Commission</div>
                                                <div>Edit</div>
                                                <div>Ban this seller</div>
                                                <div>Delete</div>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>

                            {/*  Expandable Row */}
                            {expandedRows[seller._id] && (
                                <tr className="expanded-row">
                                    <td colSpan="12">
                                        <div className="expanded-content">
                                            <p><strong> Name:</strong> {seller.name}</p>
                                            <p><strong>status:</strong> {seller.status}</p>
                                            <p><strong>Address:</strong> {seller.address}</p>
                                            <p><strong>Phone Number:</strong> {seller.phoneNumber}</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllSellers;
