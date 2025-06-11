import React, { useState, useEffect } from "react";
import "./AllStaff.css";
import { FaPlus, FaEdit, FaTrash, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AllStaff = () => {
  const [expandedRows, setExpandedRows] = useState({});
  const [staffsData, setStaffsData] = useState([]);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [roleToDelete, setRoleToDelete] = useState(null);
  const navigate = useNavigate();


  //  GET API - Fetch staff data
  useEffect(() => {
    const fetchStaffs = async () => {
      try {
        const response = await axios.get("https://e-commerce-backend-1-0.onrender.com/api/staff/staff");
        setStaffsData(response.data);
      } catch (error) {
        console.error("Failed to fetch staff data:", error);
      }
    };

    fetchStaffs();
  }, []);

  //  Toggle row expansion for mobile view
  const toggleRow = (id) => {
    setExpandedRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Navigate to Add Staff page
  const handleAddStaff = () => {
    navigate("/staffs/create");
  };

  // Navigate to Edit Staff page
  const handleEditStaff = (staffId) => {
    if (staffId) {
      navigate(`/staffs/editInfo/${staffId}`);
    } else {
      console.warn("Missing staff ID for edit.");
    }
  };

  // Delete staff and update UI
  const handleDeleteStaff = async (staffId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this staff?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://e-commerce-backend-1-0.onrender.com/api/staff/${staffId}`);
      setStaffsData((prev) => prev.filter((staff) => staff._id !== staffId));
    } catch (error) {
      console.error("Failed to delete staff:", error);
      alert("Delete failed. Please try again.");
    }
  };
  const confirmDelete = () => {
    // Implement your delete logic here
    console.log(`Deleting role with ID: ${roleToDelete}`);
    setShowDeleteConfirmation(false);
    setRoleToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
    setRoleToDelete(null);
  };

  return (
    <div className="all-staffs-container">
      <h1 className="staff">All Staffs</h1>
      <button className="add-new-staffs-button mb-5" onClick={handleAddStaff}>
        Add New Staffs
      </button>

      <table className="staffs-table">
        <thead>
          <tr>
            <th></th>
            <th className="hide-on-responsive">#</th>
            <th>Name</th>
            <th className="hide-on-responsive">Email</th>
            <th className="hide-on-responsive">Phone</th>
            <th className="hide-on-responsive">Role</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {staffsData.map((staff, index) => (
            <React.Fragment key={staff._id || index}>
              <tr>
                <td>
                  <button className="responsive-expand-button" onClick={() => toggleRow(staff._id || index)}>
                    {expandedRows[staff._id || index] ? <FaMinus /> : <FaPlus />}
                  </button>
                </td>
                <td className="hide-on-responsive">{index + 1}</td>
                <td>{staff.name}</td>
                <td className="hide-on-responsive">{staff.email}</td>
                <td className="hide-on-responsive">{staff.phone}</td>
                <td className="hide-on-responsive">{staff.role}</td>
                <td>
                  <div className="options-container">
                    <FaEdit className="edit-icon" onClick={() => handleEditStaff(staff._id)} />
                    <FaTrash className="delete-icon" onClick={() => handleDeleteStaff(staff._id)} />
                  </div>
                </td>
              </tr>

              {/* Responsive row */}
              {expandedRows[staff._id || index] && (
                <tr className="expanded-row">
                  <td colSpan="7">
                    <table className="expanded-table">
                      <tbody>
                        <tr>
                          <th>Email</th>
                          <td>{staff.email}</td>
                        </tr>
                        <tr>
                          <th>Phone</th>
                          <td>{staff.phone}</td>
                        </tr>
                        <tr>
                          <th>Role</th>
                          <td>{staff.role}</td>
                        </tr>
                      </tbody>
                    </table>
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

export default AllStaff;