import {
  Ban,
  ChevronDownIcon,
  ShieldAlert,
  ShieldCheck,
  Trash2,
  UserPlus,
} from "lucide-react";
import "./allCustomers.css";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import CreateNewCustomer from "./CreateNewCustomer";
import { useNavigate } from "react-router-dom";
// import axios from "../../../utils/axios";
import { useCustomerContext } from "../../../context/customerContext";
import FilterComponent from "../../../components/FilterComponent"; // Import FilterComponent

export default function AllCustomers() {
  const navigate = useNavigate();
  const { customers: initialCustomers, setCustomers, setFetchCustomers } =
    useCustomerContext();
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Search term state
  const [filters, setFilters] = useState({
    verification: "All", // Filter state
  });
  const [customers, setCustomersState] = useState(initialCustomers); // Local state for customers
  const [filteredCustomers, setFilteredCustomers] = useState(initialCustomers);

  // Filter configuration for FilterComponent
  const filterConfig = {
    verification: {
      label: "Verification Status",
      options: ["All", "Verified", "Not verified"],
    },
  };

  // Function to handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  // Function to handle search input changes
  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  // useCallback to memoize the filter function
  const applyFilters = useCallback(() => {
    let filtered = [...initialCustomers];

    // Apply verification filter
    if (filters.verification !== "All") {
      filtered = filtered.filter((customer) => {
        const isVerified = customer.isVerified ? "Verified" : "Not verified";
        return isVerified === filters.verification;
      });
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter((customer) =>
        customer.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Update customers state with filtered results
    setFilteredCustomers(filtered);
  }, [filters, searchTerm, initialCustomers]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  useEffect(() => {
    setCustomersState(initialCustomers);
    setFilteredCustomers(initialCustomers);
  }, [initialCustomers]);

  const handleBlockUser = async (userId) => {
    try {
      await axios.patch(`https://e-commerce-backend-1-0.onrender.com/api/user1/block/${userId}`);
      setFetchCustomers(true);
      alert("Customer Blocked");
    } catch (error) {
      console.error("Error blocking user:", error);
    }
  };
  const handleUnblockUser = async (userId) => {
    try {
      await axios.patch(`https://e-commerce-backend-1-0.onrender.com/api/user1/unblock/${userId}`);
      setFetchCustomers(true);
      alert("Customer Unblocked");
    } catch (error) {
      console.error("Error unblocking user:", error);
    }
  };

  const deleteCustomer = async (id) => {
    try {
      await axios.delete(`https://e-commerce-backend-1-0.onrender.com/api/user1/${id}`);
      setFetchCustomers(true);
      alert("Customer Deleted");
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerifyToggle = async (id, verificationStatus) => {
    try {
      if (verificationStatus) {
        await axios.patch(`https://e-commerce-backend-1-0.onrender.com/api/user1/unverify/${id}`);
        alert("Customer Unverified");
        setFetchCustomers(true);
      } else {
        await axios.patch(`https://e-commerce-backend-1-0.onrender.com/api/user1/verify/${id}`);
        alert("Customer Verified");
        setFetchCustomers(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheckboxChange = (user) => {
    let updatedSelected = selected.some((item) => item.id === user.id)
      ? selected.filter((item) => item.id !== user.id)
      : [...selected, user];
    setSelected(updatedSelected);
    setSelectAll(updatedSelected.length === customers.length);
  };

  const handleSelectAll = () => {
    setSelected(selectAll ? [] : customers);
    setSelectAll(!selectAll);
  };

  const handleBulkAction = (action) => {
    // Implement bulk actions here, e.g., deleting selected customers
    if (action === "Delete Selected") {
      selected.forEach(async (customer) => {
        await deleteCustomer(customer._id);
      });
      setSelected([]); // Clear selected customers after deletion
      setFetchCustomers(true); // Refresh customer list
      alert("Selected customers deleted.");
    }
  };

  return (
    <div className="AllCustomers">
      {showCreateForm && <CreateNewCustomer />}
      <div className="allCustomersBox">
        <div className="allCustromersHeader">
          <p className="allCustomersHead">All Customers</p>
          <div className="allCustomersButtonBox">
            <button
              className="allCustomersButton"
              onClick={() => navigate("/customers/create")}
            >
              {showCreateForm ? "Close Form" : "Add New Customer"}
            </button>
          </div>
        </div>

        <div className="allCustomersLowerBox">
          <div className="allCustomersLowerHeader">
            <p className="customersText">Customers</p>
            {/* Integrate FilterComponent here */}
            <FilterComponent
              title="Customers"
              filterConfig={filterConfig}
              currentFilters={filters}
              onFilterChange={handleFilterChange}
              onSearch={handleSearch}
              onBulkAction={handleBulkAction} // Add bulk action handler
              selectedItems={selected.map((item) => item.id)} // Pass selected items
              totalItems={customers.length} // Pass total items
            />
          </div>
          <div className="allCustomersLower">
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                      />
                    </th>
                    <th>Name</th>
                    <th className="pstatH">Phone</th>
                    <th className="ehead">Email</th>
                    <th className="vstath">Verification Status</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCustomers.map((user) => (
                    <tr key={user.id}>
                      <td>
                        <input
                          type="checkbox"
                          checked={selected.some((item) => item.id === user.id)}
                          onChange={() => handleCheckboxChange(user)}
                        />
                      </td>
                      <td>{user.name}</td>
                      <td className="pstatH">{user.phone}</td>
                      <td className="ehead">{user.email}</td>
                      <td className="vstath">
                        <span
                          className={
                            user.isVerified
                              ? "badge badgeVerified"
                              : "badge"
                          }
                        >
                          {user.isVerified ? "Verified" : "Not verified"}
                        </span>
                      </td>
                      <td>
                        <td>
                          <div className="actions">
                            {user.isVerified ? (
                              <div
                                className="action"
                                onClick={() =>
                                  handleVerifyToggle(user._id, user.isVerified)
                                }
                              >
                                <ShieldCheck
                                  color="blue"
                                  size={18}
                                  className="cursor-pointer"
                                  title="Unblock User"
                                />
                              </div>
                            ) : (
                              <div
                                className="action"
                                onClick={() =>
                                  handleVerifyToggle(user._id, user.isVerified)
                                }
                              >
                                <ShieldAlert
                                  color="blue"
                                  size={18}
                                  className="cursor-pointer"
                                  title="Unblock User"
                                />
                              </div>
                            )}

                            {user.isBlocked ? (
                              <div
                                className="action"
                                onClick={() => handleUnblockUser(user._id)}
                              >
                                <UserPlus
                                  color="blue"
                                  size={18}
                                  className="cursor-pointer"
                                  title="Unblock User"
                                />
                              </div>
                            ) : (
                              <div
                                className="action"
                                onClick={() => handleBlockUser(user._id)}
                              >
                                <Ban
                                  color="red"
                                  size={18}
                                  className="cursor-pointer"
                                  title="Block User"
                                />
                              </div>
                            )}
                            <div className="action">
                              <Trash2
                                color="blue"
                                onClick={() => {
                                  deleteCustomer(user._id);
                                }}
                                size={18}
                              />
                            </div>
                          </div>
                        </td>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
