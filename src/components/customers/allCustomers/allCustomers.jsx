import { Ban, ChevronDownIcon, Trash2 } from "lucide-react";
import "./allCustomers.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import CreateNewCustomer from "./CreateNewCustomer";
import { useNavigate } from "react-router-dom";

export default function AllCustomers() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/user1/");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const handleBlockUser = async (userId) => {
    try {
      await axios.patch(`http://localhost:5001/api/user1/block/${userId}`);
      fetchUsers(); 
    } catch (error) {
      console.error("Error blocking user:", error);
    }
  };
  const handleUnblockUser = async (userId) => {
    try {
      await axios.patch(`http://localhost:5001/api/user1/unblock/${userId}`);
      fetchUsers(); 
    } catch (error) {
      console.error("Error unblocking user:", error);
    }
  };

  const handleCheckboxChange = (user) => {
    let updatedSelected = selected.some((item) => item.id === user.id)
      ? selected.filter((item) => item.id !== user.id)
      : [...selected, user];
    setSelected(updatedSelected);
    setSelectAll(updatedSelected.length === users.length);
  };

  const handleSelectAll = () => {
    setSelected(selectAll ? [] : users);
    setSelectAll(!selectAll);
  };

  return (
    <div className="AllCustomers">
      {showCreateForm && <CreateNewCustomer onCustomerAdded={fetchUsers} />}
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
                  {users.map((user) => (
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
                            user.status === "Verified"
                              ? "badge badgeVerified"
                              : "badge"
                          }
                        >
                          {user.status}
                        </span>
                      </td>
                      <td>
                        <td>
                          <div className="actions">
                            {user.isBlocked ? (
                              <div
                                className="action"
                                onClick={() => handleUnblockUser(user.id)}
                              >
                                <Ban
                                  color="green"
                                  size={18}
                                  className="cursor-pointer"
                                  title="Unblock User"
                                />
                              </div>
                            ) : (
                              <div
                                className="action"
                                onClick={() => handleBlockUser(user.id)}
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
                              <Trash2 color="blue" size={18} />
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
