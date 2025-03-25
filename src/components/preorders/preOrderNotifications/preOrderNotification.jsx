import { Edit } from "lucide-react"
import "./preOrderNotification.scss"

export default function PreOrderNotification() {

    const notifications = [
        {
            id: 1,
            image: "https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/abViCqVpFQIIwjlRwrVvowHeMLPJ3i7h8VVnbFke.png",
            type: "Preorder Request",
            defaultText: "Your preorder [[order_code]] request has been placed."
        },
        {
            id: 2,
            image: "https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/abViCqVpFQIIwjlRwrVvowHeMLPJ3i7h8VVnbFke.png",
            type: "Preorder Request",
            defaultText: "Your preorder [[order_code]] request has been placed."
        },
        {
            id: 3,
            image: "https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/abViCqVpFQIIwjlRwrVvowHeMLPJ3i7h8VVnbFke.png",
            type: "Preorder Request",
            defaultText: "Your preorder [[order_code]] request has been placed."
        },
        {
            id: 4,
            image: "https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/abViCqVpFQIIwjlRwrVvowHeMLPJ3i7h8VVnbFke.png",
            type: "Preorder Request",
            defaultText: "Your preorder [[order_code]] request has been placed."
        }
    ]

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
                                    <th>
                                        #
                                    </th>
                                    <th>Image</th>

                                    <th className="pstatH">Type</th>
                                    <th className="ehead">Default Text</th>

                                    <th className="vstath">Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {notifications.map((n) => (
                                    <tr key={n.id}>
                                        <td>
                                            {n.id}
                                        </td>
                                        <td>
                                            <img src={n.image} alt="" className="nimg" />
                                        </td>
                                        <td>{n.type}</td>
                                        <td >{n.defaultText}</td>
                                        <td >
                                            <div className="toggle-item">

                                                <label className="switch">
                                                    <input
                                                        type="checkbox"
                                                    />
                                                    <span className="slider"></span>
                                                </label>
                                            </div>
                                        </td>

                                        <td>
                                            <div className="actions">
                                                <div className="action">
                                                    <Edit color="blue" size={18} />
                                                </div>

                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}