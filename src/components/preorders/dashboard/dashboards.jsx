import { MoveRightIcon, Plus } from "lucide-react"
import "./dashboard.scss"

export default function PreOrderDashboard() {


    const notifications = [
        {
            id: 1,
            image: "https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/abViCqVpFQIIwjlRwrVvowHeMLPJ3i7h8VVnbFke.png",
            name: "Jessica Simpson Womens Setria Solid Slip- On Pumps Jessica Simpson Womens Setria Solid Slip - On Pumps",
            request: 1,
            prepayment: 0,
            finalOrder: 0,
            totalSOld: 0
        },
        {
            id: 2,
            image: "https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/abViCqVpFQIIwjlRwrVvowHeMLPJ3i7h8VVnbFke.png",
            name: "Jessica Simpson Womens Setria Solid Slip- On Pumps Jessica Simpson Womens Setria Solid Slip - On Pumps",
            request: 1,
            prepayment: 0,
            finalOrder: 0,
            totalSOld: 0
        },
        {
            id: 3,
            image: "https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/abViCqVpFQIIwjlRwrVvowHeMLPJ3i7h8VVnbFke.png",
            name: "Jessica Simpson Womens Setria Solid Slip- On Pumps Jessica Simpson Womens Setria Solid Slip - On Pumps",
            request: 1,
            prepayment: 0,
            finalOrder: 0,
            totalSOld: 0
        },

        {
            id: 4,
            image: "https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/abViCqVpFQIIwjlRwrVvowHeMLPJ3i7h8VVnbFke.png",
            name: "Jessica Simpson Womens Setria Solid Slip- On Pumps Jessica Simpson Womens Setria Solid Slip - On Pumps",
            request: 1,
            prepayment: 0,
            finalOrder: 0,
            totalSOld: 0
        },
        {
            id: 5,
            image: "https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/abViCqVpFQIIwjlRwrVvowHeMLPJ3i7h8VVnbFke.png",
            name: "Jessica Simpson Womens Setria Solid Slip- On Pumps Jessica Simpson Womens Setria Solid Slip - On Pumps",
            request: 1,
            prepayment: 0,
            finalOrder: 0,
            totalSOld: 0
        },
    ]



    return (
        <div className="PreOrderDashboard">
            <div className="PreOrderDashboardBox">
                <div className="preOrderDashboardFirst">
                    <div className="preOrderDashboardCard">
                        <p className="dashHead">
                            Total Preorder Products
                        </p>
                        <p className="dashSub">
                            Total product uploaded as preorder product
                        </p>
                        <p className="dashNum">
                            39
                        </p>
                        <div className="view-all-button">
                            <p className="viewDashText">
                                View all products
                            </p>
                            <MoveRightIcon size={18} />
                        </div>
                    </div>
                    <div className="preOrderDashboardCard yellowBorder">
                        <p className="dashHead">
                            Live Preorder Products
                        </p>
                        <p className="dashSub">
                            Preorder products currently available to order
                        </p>
                        <p className="dashNum">
                            39
                        </p>
                        <div className="view-all-button">
                            <p className="viewDashText">
                                View all live products
                            </p>
                            <MoveRightIcon size={18} />
                        </div>
                    </div>
                    <div className="preOrderDashboardCard yellowBack">

                        <div className="deBox">
                            <div className="view-all-button">
                                <p className="dashHead">
                                    Delayed Prepayment Orders
                                </p>
                                <MoveRightIcon size={18} />
                            </div>
                            <p className="detext">
                                3
                            </p>
                        </div>
                        <div className="deBox">
                            <div className="view-all-button">
                                <p className="dashHead">
                                    Delayed Final Orders
                                </p>
                                <MoveRightIcon size={18} />
                            </div>
                            <p className="detext">
                                1
                            </p>
                        </div>
                    </div>
                    <div className="preOrderDashboardCard grayBorder">
                        <Plus size={150} color="gray" />
                        <p className="addNewProduct">
                            Add new preorder product
                        </p>
                    </div>
                </div>

                <div className="preOrderDashboardStats">
                    <div className="salesStatsBox">
                        <div className="salesStatsLeft">
                            <div className="leftOneBox">
                                <p className="salesStatsHead">
                                    Sales Stats
                                </p>
                                <p className="saleStatsSub">
                                    All sales in pre order system
                                </p>
                            </div>
                            <div className="leftOneBox">
                                <p className="salesText">
                                    In-house preorder sales
                                </p>
                                <p className="salesDollar">
                                    $186,976.890
                                </p>
                            </div>
                            <div className="leftOneBox">
                                <p className="salesText">
                                    Sellers preorder sales
                                </p>
                                <p className="salesDollar">
                                    $186,976.890
                                </p>
                            </div>

                        </div>
                        <div className="salesStatsRight">

                        </div>
                    </div>

                    <div className="preOrderSalesStats rowspan2">

                        <div className="preOrderSalesLeft">
                            <div className="preorderStates">
                                <p className="preorderStatesHead">
                                    Preorder States
                                </p>
                                <p className="preOrderStatesSub">
                                    All states of the preorder system up-to final order. All the states here has multiple actions.
                                </p>
                            </div>
                        </div>
                        <div className="preOrderSalesRight">

                            <div className="preOrderRequests backGrayWhite">
                                <p className="preOrderRequestsHead">
                                    Preorder Requests
                                </p>
                                <p className="preOrderStatesSub">
                                    Customers applied for a preorder product
                                </p>
                                <p className="preOrderReqNum">
                                    15
                                </p>
                            </div>
                            <div className="preOrderRequests">
                                <p className="preOrderRequestsHead">
                                    Accepted Requests
                                </p>
                                <p className="preOrderStatesSub">
                                    Requests accepted & order profile created
                                </p>
                                <p className="preOrderReqNum">
                                    5
                                </p>
                            </div>
                            <div className="preOrderRequests">
                                <p className="preOrderRequestsHead">
                                    Confirmed Prepayments
                                </p>
                                <p className="preOrderStatesSub">
                                    Prepayments accepted by admin
                                </p>
                                <p className="preOrderReqNum">
                                    2
                                </p>
                            </div>
                            <div className="preOrderRequests">
                                <p className="preOrderRequestsHead">
                                    Final Preorders
                                </p>
                                <p className="preOrderStatesSub">
                                    Completed orders of preorder products
                                </p>
                                <p className="preOrderReqNum">
                                    12
                                </p>
                            </div>
                            <div className="preOrderRequests">
                                <p className="preOrderRequestsHead">
                                    Preorder Requests
                                </p>
                                <p className="preOrderStatesSub">
                                    Customers applied for a preorder product
                                </p>
                                <p className="preOrderReqNum">
                                    15
                                </p>
                            </div>


                        </div>
                    </div>

                    <div className="orderStatusBox">
                        <div className="orderStatusBoxHead">
                            <p className="oshead">
                                Ordr Status
                            </p>
                            <p className="ostext">
                                Order status represents the delivery and order status of your preorders.
                            </p>
                        </div>

                        <div className="orderStatusBoxLower">
                            <div className="orsbls">
                                <p className="inShip">
                                    In Shipping
                                </p>
                                <p className="inShip">
                                    0
                                </p>
                            </div>
                            <div className="orsbls noBack">
                                <p className="inShip">
                                    Delivered
                                </p>
                                <p className="inShip">
                                    24
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="preOrderNotificationBox ma10">
                    <div className="preOrderNotificationBoxHeader">
                        <p className="notificationTypes">Preorder Types</p>
                        <div className="notificationMenu">
                            <div className="notMLeft">
                                <p className="notMItem activeNot">All</p>
                                <p className="notMItem">In House</p>
                                <p className="notMItem">Sellers</p>
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
                                        <th>Product</th>

                                        <th >Request</th>
                                        <th >Prepayment</th>

                                        <th >Final Order</th>
                                        <th>Total Sold</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {notifications.map((n) => (
                                        <tr key={n.id}>
                                            <td>
                                                {n.id}
                                            </td>
                                            <td>
                                                <div className="pnamebox">
                                                    <p className="pnamepre">{n.name}</p>
                                                </div>
                                            </td>
                                            <td>{n.request}</td>
                                            <td >{n.prepayment}</td>
                                            <td>
                                                {n.finalOrder}
                                            </td>
                                            <td>
                                                {n.totalSOld}
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
    )
}