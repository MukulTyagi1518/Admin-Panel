// import { Edit } from "lucide-react"
// import "./preOrderNotification.scss"

// export default function PreOrderNotification() {

//     const notifications = [
//         {
//             id: 1,
//             image: "https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/abViCqVpFQIIwjlRwrVvowHeMLPJ3i7h8VVnbFke.png",
//             type: "Preorder Request",
//             defaultText: "Your preorder [[order_code]] request has been placed."
//         },
//         {
//             id: 2,
//             image: "https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/abViCqVpFQIIwjlRwrVvowHeMLPJ3i7h8VVnbFke.png",
//             type: "Preorder Request",
//             defaultText: "Your preorder [[order_code]] request has been placed."
//         },
//         {
//             id: 3,
//             image: "https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/abViCqVpFQIIwjlRwrVvowHeMLPJ3i7h8VVnbFke.png",
//             type: "Preorder Request",
//             defaultText: "Your preorder [[order_code]] request has been placed."
//         },
//         {
//             id: 4,
//             image: "https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/abViCqVpFQIIwjlRwrVvowHeMLPJ3i7h8VVnbFke.png",
//             type: "Preorder Request",
//             defaultText: "Your preorder [[order_code]] request has been placed."
//         }
//     ]

//     return (
//         <div className="PreOrderNotification ma10">
//             <div className="preOrderNotificationBox">
//                 <div className="preOrderNotificationBoxHeader">
//                     <p className="notificationTypes">Notification Types</p>
//                     <div className="notificationMenu">
//                         <div className="notMLeft">
//                             <p className="notMItem activeNot">Customer</p>
//                             <p className="notMItem">Seller</p>
//                             <p className="notMItem">Admin</p>
//                         </div>

//                     </div>
//                 </div>
//                 <div className="preOrderNotificationLower">
//                     <div className="table-container">
//                         <table>
//                             <thead>
//                                 <tr>
//                                     <th>
//                                         #
//                                     </th>
//                                     <th>Image</th>

//                                     <th className="pstatH">Type</th>
//                                     <th className="ehead">Default Text</th>

//                                     <th className="vstath">Status</th>
//                                     <th>Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {notifications.map((n) => (
//                                     <tr key={n.id}>
//                                         <td>
//                                             {n.id}
//                                         </td>
//                                         <td>
//                                             <img src={n.image} alt="" className="nimg" />
//                                         </td>
//                                         <td>{n.type}</td>
//                                         <td >{n.defaultText}</td>
//                                         <td >
//                                             <div className="toggle-item">

//                                                 <label className="switch">
//                                                     <input
//                                                         type="checkbox"
//                                                     />
//                                                     <span className="slider"></span>
//                                                 </label>
//                                             </div>
//                                         </td>

//                                         <td>
//                                             <div className="actions">
//                                                 <div className="action">
//                                                     <Edit color="blue" size={18} />
//                                                 </div>

//                                             </div>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


import React, { useEffect, useState } from "react";
import { Edit } from "lucide-react";
import axios from "axios";
import "./preOrderNotification.scss";

export default function PreOrderNotification() {
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/preorder-notification");
      if (res.data?.data) {
        setNotifications(res.data.data);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleToggleStatus = async (id, currentStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/preorder-notification/${id}`, {
        status: currentStatus === "active" ? "inactive" : "active",
      });
      fetchNotifications(); // refetch after update
    } catch (err) {
      console.error("Status update error:", err);
    }
  };

  const handleEdit = async (id, currentDefaultText) => {
    const newText = prompt("Edit default text:", currentDefaultText);
    if (!newText || newText === currentDefaultText) return;

    try {
      await axios.put(`http://localhost:5000/api/preorder-notification/${id}`, {
        defaultText: newText,
      });
      fetchNotifications(); // refetch after update
    } catch (err) {
      console.error("Edit error:", err);
    }
  };

  return (
    <div className="PreOrderNotification ma10">
      <div className="preOrderNotificationBox">
        <div className="preOrderNotificationBoxHeader">
          <p className="notificationTypes">Notification Types</p>
          <div className="notificationMenu">
            <div className="notMLeft">
              <p className="notMItem activeNot">Customer</p>
              <p className="notMItem">Seller</p>
              <p className="notMItem">Admin</p>
            </div>
          </div>
        </div>

        <div className="preOrderNotificationLower">
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Type</th>
                  <th>Default Text</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {notifications.length > 0 ? (
                  notifications.map((n, i) => (
                    <tr key={n._id}>
                      <td>{i + 1}</td>
                      <td>{n.image ? <img src={n.image} alt="" className="nimg" /> : "No image"}</td>
                      <td>{n.name}</td>
                      <td>{n.defaultText}</td>
                      <td>
                        <label className="switch">
                          <input
                            type="checkbox"
                            checked={n.status === "active"}
                            onChange={() => handleToggleStatus(n._id, n.status)}
                          />
                          <span className="slider"></span>
                        </label>
                      </td>
                      <td>
                        <Edit
                          color="blue"
                          size={18}
                          className="cursor-pointer"
                          onClick={() => handleEdit(n._id, n.defaultText)}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" style={{ textAlign: "center" }}>
                      No notifications found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
