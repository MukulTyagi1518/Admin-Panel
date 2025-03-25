import { Ban, ChevronDownIcon, Eye, Trash, Trash2 } from "lucide-react"
import "./preOrderReviews.scss"

export default function PreOrderReviews() {
    const users = [
        {
            id: 1,
            prodName: "Hummer EV 2025 | Experience unmatched power and innovation with the 2025 Hummer EV, the ultimate blend of rugged performance.",
            productOwner: "Sahil Kalkal",
            rating: 5,
            review: 15,
        },
        {
            id: 2,
            prodName: "Hummer EV 2025 | Experience unmatched power and innovation with the 2025 Hummer EV, the ultimate blend of rugged performance.",
            productOwner: "Sahil Kalkal",
            rating: 5,
            review: 15,
        },
        {
            id: 3,
            prodName: "Hummer EV 2025 | Experience unmatched power and innovation with the 2025 Hummer EV, the ultimate blend of rugged performance.",
            productOwner: "Sahil Kalkal",
            rating: 5,
            review: 15,
        },
        {
            id: 4,
            prodName: "Hummer EV 2025 | Experience unmatched power and innovation with the 2025 Hummer EV, the ultimate blend of rugged performance.",
            productOwner: "Sahil Kalkal",
            rating: 5,
            review: 15,
        }
    ]

    return (
        <div className="productQueriesBox">
            <div className="allCustomersLowerBox productQueries">
                <div className="allCustomersLowerHeader">
                    <p className="customersText">
                        Preorder Queries
                    </p>

                </div>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>

                                <th >Product Owner</th>
                                <th >Rating</th>

                                <th >Reviews</th>

                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td className="prodNameQuery" >{user.prodName}</td>
                                    <td>{user.productOwner}</td>
                                    <td >{user.rating}</td>
                                    <td >{user.review}</td>

                                    <td>
                                        <div className="actions">
                                            <div className="action">
                                                <Eye color="blue" size={18} />
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
    )
}