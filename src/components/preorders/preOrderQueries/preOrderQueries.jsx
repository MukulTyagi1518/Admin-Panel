import { Ban, ChevronDownIcon, Eye, Trash, Trash2 } from "lucide-react"
import "./preOrderQueries.scss"

export default function PreOrderQueries() {
    const users = [
        {
            id: 1,
            name: "Sahil",
            prodName: "Hummer EV 2025 | Experience unmatched power and innovation with the 2025 Hummer EV, the ultimate blend of rugged performance.",
            question: "Suitable for entrepreneurs launching a new store, established businesses migrating to digital platform",
            reply: "You will get official warranty from Apple.",
            status: "Not Replied"
        },
        {
            id: 2,
            name: "Sahil",
            prodName: "Hummer EV 2025 | Experience unmatched power and innovation with the 2025 Hummer EV, the ultimate blend of rugged performance.",
            question: "Suitable for entrepreneurs launching a new store, established businesses migrating to digital platform",
            reply: "You will get official warranty from Apple.",
            status: "Not Replied"
        },
        {
            id: 3,
            name: "Sahil",
            prodName: "Hummer EV 2025 | Experience unmatched power and innovation with the 2025 Hummer EV, the ultimate blend of rugged performance.",
            question: "Suitable for entrepreneurs launching a new store, established businesses migrating to digital platform",
            reply: "You will get official warranty from Apple.",
            status: "Not Replied"
        },
        {
            id: 4,
            name: "Sahil",
            prodName: "Hummer EV 2025 | Experience unmatched power and innovation with the 2025 Hummer EV, the ultimate blend of rugged performance.",
            question: "Suitable for entrepreneurs launching a new store, established businesses migrating to digital platform",
            reply: "You will get official warranty from Apple.",
            status: "Not Replied"
        }
    ];

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
                                <th>Name</th>

                                <th >Product Name</th>
                                <th >Question</th>

                                <th >Reply</th>
                                <th>Status</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td className="prodNameQuery">{user.prodName}</td>
                                    <td className="prodNameQuery">{user.question}</td>
                                    <td className="prodNameQuery">{user.reply}</td>
                                    <td>
                                        <span className={user.status == "Verified" ? "badge badgeVerified" : "badge"}>{user.status}</span>
                                    </td>
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