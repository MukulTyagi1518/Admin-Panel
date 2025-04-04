// import React from "react";
// import "./Roles.css";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const roles = [
//   { id: 1, name: "Customer Service Representatives" },
//   { id: 2, name: "Product Manager" },
//   { id: 3, name: "PPC Manager" },
//   { id: 4, name: "Category Manager" },
//   { id: 5, name: "Order Clerks" },
//   { id: 6, name: "Ecommerce Manager" },
// ];


  
// const Roles = () => {
//     const navigate = useNavigate();
    
// const handlereview = (e) => {
//     e.preventDefault();
//     navigate("/staffs/rolecreate");
//   };
//   const handlereviewedit = (e) => {
//     e.preventDefault();
//     navigate("/staffs/edit");
//   };
//   return (
//     <div className="role-container">
//       <div className="header">
//         <h2>All Roles</h2>
//         <button className="add-role-btn" onClick={handlereview}>Add New Role</button>
//       </div>

//       <table className="role-table">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th className="options-header">Options</th> {/* Centered Header */}
//           </tr>
//         </thead>
//         <tbody>
//           {roles.map((role) => (
//             <tr key={role.id}>
//               <td>{role.id}</td>
//               <td>{role.name}</td>
//               <td className="actions  ">
//                 <FaEdit className="edit-icon" onClick={handlereviewedit} />
//                 <FaTrash className="delete-icon" onClick={handleConfirmDelete} />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Roles;




import React, { useState } from "react";
import "./Roles.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const roles = [
  { id: 1, name: "Customer Service Representatives" },
  { id: 2, name: "Product Manager" },
  { id: 3, name: "PPC Manager" },
  { id: 4, name: "Category Manager" },
  { id: 5, name: "Order Clerks" },
  { id: 6, name: "Ecommerce Manager" },
];

const Roles = () => {
  const navigate = useNavigate();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [roleToDelete, setRoleToDelete] = useState(null);

  const handleAddRole = () => {
    navigate("/staffs/rolecreate");
  };

  const handleEditRole = () => {
    navigate("/staffs/edit");
  };

  const handleDeleteClick = (roleId) => {
    setRoleToDelete(roleId);
    setShowDeleteConfirmation(true);
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
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.id}</td>
              <td>{role.name}</td>
              <td className="actions">
                <FaEdit className="edit-icon" onClick={handleEditRole} />
                <FaTrash
                  className="delete-icon"
                  onClick={() => handleDeleteClick(role.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showDeleteConfirmation && (
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
    </div>
  );
};

export default Roles;