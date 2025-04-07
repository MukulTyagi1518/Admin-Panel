// // import React from "react";
// // import "./Roles.css";
// // import { FaEdit, FaTrash } from "react-icons/fa";
// // import { useNavigate } from "react-router-dom";

// // const roles = [
// //   { id: 1, name: "Customer Service Representatives" },
// //   { id: 2, name: "Product Manager" },
// //   { id: 3, name: "PPC Manager" },
// //   { id: 4, name: "Category Manager" },
// //   { id: 5, name: "Order Clerks" },
// //   { id: 6, name: "Ecommerce Manager" },
// // ];


  
// // const Roles = () => {
// //     const navigate = useNavigate();
    
// // const handlereview = (e) => {
// //     e.preventDefault();
// //     navigate("/staffs/rolecreate");
// //   };
// //   const handlereviewedit = (e) => {
// //     e.preventDefault();
// //     navigate("/staffs/edit");
// //   };
// //   return (
// //     <div className="role-container">
// //       <div className="header">
// //         <h2>All Roles</h2>
// //         <button className="add-role-btn" onClick={handlereview}>Add New Role</button>
// //       </div>

// //       <table className="role-table">
// //         <thead>
// //           <tr>
// //             <th>#</th>
// //             <th>Name</th>
// //             <th className="options-header">Options</th> {/* Centered Header */}
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {roles.map((role) => (
// //             <tr key={role.id}>
// //               <td>{role.id}</td>
// //               <td>{role.name}</td>
// //               <td className="actions  ">
// //                 <FaEdit className="edit-icon" onClick={handlereviewedit} />
// //                 <FaTrash className="delete-icon" />
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default Roles;





// import React, { useEffect, useState } from "react";
// import "./Roles.css";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Roles = () => {
//   const navigate = useNavigate();
//   const [roles, setRoles] = useState([]); // Default to an empty array

//   useEffect(() => {
//     const fetchRoles = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/role");

//         // 👇 Log the response to verify structure
//         console.log("Fetched roles:", response.data);

//         // ✅ Check if response contains 'roles' array or is directly an array
//         if (Array.isArray(response.data)) {
//           setRoles(response.data);
//         } else if (Array.isArray(response.data.roles)) {
//           setRoles(response.data.roles);
//         } else {
//           console.warn("Unexpected roles response format");
//         }
//       } catch (error) {
//         console.error("Error fetching roles:", error);
//       }
//     };

//     fetchRoles();
//   }, []);

//   const handleAddRole = (e) => {
//     e.preventDefault();
//     navigate("/staffs/rolecreate");
//   };

//   const handleEditRole = (id) => {
//     navigate(`/staffs/edit/${id}`);
//   };

//   return (
//     <div className="role-container">
//       <div className="header">
//         <h2>All Roles</h2>
//         <button className="add-role-btn" onClick={handleAddRole}>
//           Add New Role
//         </button>
//       </div>

//       <table className="role-table">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th className="options-header">Options</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Array.isArray(roles) && roles.map((role, index) => (
//             <tr key={role._id || index}>
//               <td>{index + 1}</td>
//               <td>{role.name}</td>
//               <td className="actions">
//                 <FaEdit className="edit-icon" onClick={() => handleEditRole(role._id)} />
//                 <FaTrash className="delete-icon" />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Roles;




import React, { useEffect, useState } from "react";
import "./Roles.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Roles = () => {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);

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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Roles;
