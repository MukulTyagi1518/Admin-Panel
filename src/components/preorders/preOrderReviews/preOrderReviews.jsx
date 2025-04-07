



import { Ban, ChevronDownIcon, Eye, Trash, Trash2, Plus } from "lucide-react";
import "./preOrderReviews.scss";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

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
    ];

    const [expandedRows, setExpandedRows] = useState([]);
    const navigate = useNavigate();

    const toggleRow = (id) => {
        if (expandedRows.includes(id)) {
            setExpandedRows(expandedRows.filter((rowId) => rowId !== id));
        } else {
            setExpandedRows([...expandedRows, id]);
        }
    };

    const handlereview = (e) => {
        e.preventDefault();
        navigate("/preorder/reviews/ReviewDetails");
      };
    return (
        <div className="productQueriesBox ma10">
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
                                <th className="responsive-visible"></th> {/* Plus Icon */}
                                <th className="responsive-hidden">#</th>
                                <th>Product Name</th>
                                <th className="responsive-hidden">Product Owner</th>
                                <th className="responsive-hidden">Rating</th>
                                <th className="responsive-hidden">Reviews</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <React.Fragment key={user.id}>
                                    <tr>
                                        <td className="responsive-visible">
                                            <Plus onClick={() => toggleRow(user.id)} size={18} color="blue" style={{ cursor: 'pointer' }} />
                                        </td>
                                        <td className="responsive-hidden">{user.id}</td>
                                        <td className="prodNameQuery">{user.prodName}</td>
                                        <td className="responsive-hidden">{user.productOwner}</td>
                                        <td className="responsive-hidden">{user.rating}</td>
                                        <td className="responsive-hidden">{user.review}</td>
                                        <td>
                                            <div className="actions">
                                                <div className="action" title="View">
                                                    <Eye color="blue" size={18}   onClick={handlereview}/>
                                                </div>
                                                {/* Add other action icons here if needed */}
                                            </div>
                                        </td>
                                    </tr>
                                    {expandedRows.includes(user.id) && (
                                        <tr className="expanded-row">
                                            <td colSpan="7">
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                    <p><b>#</b>: {user.id}</p>
                                                    <p><b>Product Owner</b>: {user.productOwner}</p>
                                                    <p><b>Rating</b>: {user.rating}</p>
                                                    <p><b>Reviews</b>: {user.review}</p>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}