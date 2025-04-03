import { Ban, ChevronDownIcon, ShieldAlert, ShieldCheck, Trash2, UserPlus } from "lucide-react";
import "./allCustomers.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import CreateNewCustomer from "./CreateNewCustomer";
import { useNavigate } from "react-router-dom";
import apiInstance from "../../../utils/axios"
import { useCustomerContext } from "../../../context/customerContext";

export default function AllCustomers() {
  const navigate = useNavigate();
  const { customers, setCustomers, setFetchCustomers } = useCustomerContext()
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);




  const handleBlockUser = async (userId) => {
    try {
      await apiInstance.patch(`/user1/block/${userId}`);
      setFetchCustomers(true)
      alert("Customer Blocked")
    } catch (error) {
      console.error("Error blocking user:", error);
    }
  };
  const handleUnblockUser = async (userId) => {
    try {
      await apiInstance.patch(`/user1/unblock/${userId}`);
      setFetchCustomers(true)
      alert("Customer Unblocked")
    } catch (error) {
      console.error("Error unblocking user:", error);
    }
  };

  const deleteCustomer = async (id) => {
    try {
      await apiInstance.delete(`/user1/${id}`);
      setFetchCustomers(true)
      alert("Customer Deleted")
    } catch (error) {
      console.log(error)
    }
  }

  const handleVerifyToggle = async (id, verificationStatus) => {
    try {
      if (verificationStatus) {
        await apiInstance.patch(`/user1/unverify/${id}`);
        alert("Customer Unverified")
        setFetchCustomers(true)
      }
      else {
        await apiInstance.patch(`/user1/verify/${id}`);
        alert("Customer Verified")
        setFetchCustomers(true)
      }
    }
    catch (err) {
      console.log(err)
    }
  }

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
            <div className="lower-menu">
              <div className="bulkButtonBox">
                <div className="bulkButton">
                  <p className="bulkText">Bulk Action</p>
                  <ChevronDownIcon size={18} />
                </div>
              </div>
              <div className="bulkButtonBox">
                <div className="bulkButton">
                  <p className="bulkText">Filter by verification status</p>
                  <ChevronDownIcon size={18} color="grey" />
                </div>
              </div>
              <input
                type="text"
                placeholder="Type email to search"
                className="searchInput"
              />
            </div>
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
                  {customers.map((user) => (
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
                          {
                            user.isVerified ? "Verified" : "Not verified"
                          }
                        </span>
                      </td>
                      <td>
                        <td>
                          <div className="actions">

                            {
                              user.isVerified ?
                                <div
                                  className="action"
                                  onClick={() => handleVerifyToggle(user._id, user.isVerified)}
                                >
                                  <ShieldCheck
                                    color="blue"
                                    size={18}
                                    className="cursor-pointer"
                                    title="Unblock User"
                                  />
                                </div>
                                : <div
                                  className="action"
                                  onClick={() => handleVerifyToggle(user._id, user.isVerified)}
                                >
                                  <ShieldAlert
                                    color="blue"
                                    size={18}
                                    className="cursor-pointer"
                                    title="Unblock User"
                                  />
                                </div>
                            }

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
                              <Trash2 color="blue" onClick={() => {
                                deleteCustomer(user._id)
                              }} size={18} />
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
