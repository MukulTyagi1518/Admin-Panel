// import React from "react";
// import "./Contact.css";

// const Contact = () => {
//   return (
//     <div className="contacts-container">
//       <h3 className="title">Contacts</h3>
//       <table className="contacts-table">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Query</th>
//             <th>Reply</th>
//             <th>Status</th>
//             <th>Options</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td colSpan="8" className="no-data">
//               <div className="not-found">
//                 <span className="sad-face"></span>
//                 <p>Nothing found</p>
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Contact;




import React, { useEffect, useState } from "react";
import "./Contact.css";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  // 🔹 Fetch all contacts
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get("https://e-commerce-backend-1-0.onrender.com/api/contacts/getall");
        setContacts(res.data.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  // 🔸 Handle reply (PUT)
  const handleReply = async (id) => {
    const reply = prompt("Enter your reply:");
    if (!reply || reply.trim() === "") {
      return alert("Reply cannot be empty.");
    }

    try {
      const res = await axios.put(`https://e-commerce-backend-1-0.onrender.com/api/contacts/update/${id}`, { reply });
      const updatedList = contacts.map((c) => (c._id === id ? res.data.data : c));
      setContacts(updatedList);
      alert("Reply sent!");
    } catch (error) {
      console.error("Error replying:", error);
      alert("Failed to send reply.");
    }
  };

  // 🔸 Handle delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;

    try {
      await axios.delete(`https://e-commerce-backend-1-0.onrender.com/api/contacts/delete/${id}`);
      setContacts(contacts.filter((c) => c._id !== id));
      alert("Contact deleted.");
    } catch (error) {
      console.error("Error deleting:", error);
      alert("Failed to delete contact.");
    }
  };

  return (
    <div className="contacts-container">
      <h3 className="title">Contacts</h3>
      <table className="contacts-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Query</th>
            <th>Reply</th>
            <th>Status</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length === 0 ? (
            <tr>
              <td colSpan="8" className="no-data">
                <div className="not-found">
                  <span className="sad-face">😔</span>
                  <p>Nothing found</p>
                </div>
              </td>
            </tr>
          ) : (
            contacts.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.query}</td>
                <td>{item.reply || "—"}</td>
                <td>
                  <span className={`status ${item.status === "replied" ? "replied" : "not-replied"}`}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <button onClick={() => handleReply(item._id)} title="Reply">
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDelete(item._id)} title="Delete" className="delete-btn">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Contact;