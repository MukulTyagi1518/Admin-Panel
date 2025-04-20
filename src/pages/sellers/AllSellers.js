import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllSellers.css";
import { FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ViewExpandData from "../../components/ViewExpandData";
import FilterComponent from "../../components/FilterComponent"; // Adjust path as needed

const AllSellers = () => {
  const [sellers, setSellers] = useState([]);
  const [filteredSellers, setFilteredSellers] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [expandedRows, setExpandedRows] = useState({});
  const [approvals, setApprovals] = useState({});
  const [selectedSellers, setSelectedSellers] = useState([]);
  const [filters, setFilters] = useState({
    verification: "All",
    approval: "All",
  });
  const [searchTerm, setSearchTerm] = useState("");
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

  // Filtering logic
  useEffect(() => {
    let filtered = [...sellers];

    // Filter by verification
    if (filters.verification !== "All") {
      filtered = filtered.filter(
        (seller) => seller.verification === filters.verification
      );
    }

    // Filter by approval
    if (filters.approval !== "All") {
      filtered = filtered.filter(
        (seller) =>
          (filters.approval === "Approved" && seller.approval) ||
          (filters.approval === "Pending" && !seller.approval)
      );
    }

    // Search by name or email
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter(
        (seller) =>
          seller.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          seller.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredSellers(filtered);
  }, [sellers, filters, searchTerm]);

  // Handlers for FilterComponent
  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };
;

  const toggleRow = (id) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleApproval = async (id) => {
    try {
      const updatedStatus = !approvals[id];
      await axios.put(`http://localhost:5000/api/sellers/${id}/approval`, {
        approval: updatedStatus,
      });
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

  const toggleSelectSeller = (id) => {
    setSelectedSellers((prev) =>
      prev.includes(id)
        ? prev.filter((sid) => sid !== id)
        : [...prev, id]
    );
  };

  // Filter options for FilterComponent
  const filterConfig = {
    verification: {
      label: "Verification",
      options: ["All", "Verified", "Unverified"],
    },
    approval: {
      label: "Approval",
      options: ["All", "Approved", "Pending"],
    },
  };

  return (
    <div className="container4">
      <div className="header-container">
        <h2 className="header-title">All Sellers</h2>
        <button className="add-seller-btn" onClick={handleReview}>
          Add New Seller
        </button>
      </div>

      {/* Replace old filters with FilterComponent */}
      <div className="filters-container">
        <FilterComponent
          title="Sellers"
          filterConfig={filterConfig}
          currentFilters={filters}
          onFilterChange={handleFilterChange}
          onSearch={handleSearch}
          selectedItems={selectedSellers}
          totalItems={filteredSellers.length}
        />
      </div>

      <table className="seller-table">
        <thead>
          <tr>
            <th className="hide-on-large"></th>
            <th>
              <input
                type="checkbox"
                checked={
                  filteredSellers.length > 0 &&
                  selectedSellers.length === filteredSellers.length
                }
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedSellers(filteredSellers.map((s) => s._id));
                  } else {
                    setSelectedSellers([]);
                  }
                }}
              />
            </th>
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
          {filteredSellers.map((seller) => (
            <React.Fragment key={seller._id}>
              <tr>
                <td className="hide-on-large">
                  <ViewExpandData
                    isExpanded={expandedRows[seller._id]}
                    toggleExpanded={() => toggleRow(seller._id)}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedSellers.includes(seller._id)}
                    onChange={() => toggleSelectSeller(seller._id)}
                  />
                </td>
                <td className="seller-info">
                  <img
                    src={seller.image}
                    alt={seller.name}
                    className="seller-img"
                  />
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
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => toggleDropdown(seller._id)}
                    >
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
              {expandedRows[seller._id] && (
                <tr className="expanded-row">
                  <td colSpan="12">
                    <div className="expanded-content">
                      <p>
                        <strong> Name:</strong> {seller.name}
                      </p>
                      <p>
                        <strong>status:</strong> {seller.status}
                      </p>
                      <p>
                        <strong>Address:</strong> {seller.address}
                      </p>
                      <p>
                        <strong>Phone Number:</strong> {seller.phoneNumber}
                      </p>
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
