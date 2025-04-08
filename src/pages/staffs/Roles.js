




import React, { useEffect, useState } from "react";
import "./Roles.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Roles = () => {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [roleToDelete, setRoleToDelete] = useState(null);

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/role");

      if (Array.isArray(response.data)) {
        setRoles(response.data);
      } else if (Array.isArray(response.data.roles)) {
        setRoles(response.data.roles);
      } else {
        console.warn("Unexpected roles response format");
      }
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };

  const handleAddRole = () => {
    navigate("/staffs/rolecreate");
  };

  const handleEditRole = (id) => {
    navigate(`/staffs/edit/${id}`);
  };

  const handleDeleteRole = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this role?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:5000/api/role/${id}`);
      alert("Role deleted successfully!");
      fetchRoles(); // Re-fetch roles after delete
    } catch (error) {
      console.error("Error deleting role:", error);
      alert("Failed to delete role.");
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
  }

  return (
    <div className="role-container">
      <div className="header">
        <h2>All Roles</h2>
        <button className="add-role-btn" onClick={handleAddRole}>
          Add New Role
        </button>
      </div>

      <table className="role-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th className="options-header">Options</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role, index) => (
            <tr key={role._id || index}>
              <td>{index + 1}</td>
              <td>{role.name}</td>
              <td className="actions">
                <FaEdit
                  className="edit-icon"
                  onClick={() => handleEditRole(role._id)}
                />
                <FaTrash
                  className="delete-icon"
                  onClick={() => handleDeleteRole(role._id)}
                />
              </td >
            </tr >
          ))}
        </tbody >
      </table >

  { showDeleteConfirmation && (
    <div className="delete-confirmation-overlay">
      <div className="delete-confirmation-dialog">
        <div className="dialog-header">
          <h2>Delete Confirmation</h2>
          <button
            className="close-dialog-btn"
            onClick={cancelDelete}
          >
            X
          </button>
        </div>
        <div className="dialog-content">
          <p>Are you sure to delete this?</p>
        </div>
        <div className="dialog-actions">
          <button className="cancel-btn" onClick={cancelDelete}>
            Cancel
          </button>
          <button className="delete-btn" onClick={confirmDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )}
    </div >
  );
};

export default Roles;