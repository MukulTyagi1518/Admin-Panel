import { Edit } from "lucide-react"
import "./preOrderNotification.scss"
import Switch from "../../Switch"

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

                                    <th className="pstat">Type</th>
                                    <th className="ehea">Default Text</th>

                                    <th className="vstat">Status</th>
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
                                            <div className="toggle-item flex flex-row gap-[.3cm]">

                                                {/* <label className="switch">
                                                    <input
                                                        type="checkbox"
                                                    />
                                                    <span className="slider"></span>
                                                   
                                                </label> */}
                                                 <Switch/>
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