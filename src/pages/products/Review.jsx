import { Ban, ChevronDownIcon, Eye, Trash, Trash2 } from "lucide-react"
import "./Review.css"
import { useNavigate } from "react-router-dom"; 

export default function PreOrderReviews() {
  
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        navigate("/products/Addreview"); 
      };

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
        <div className="productQueriesBox ma10">
            <div className="product-table">
               <p className="customersText">
                        Preorder Queries
                    </p>
                    <button type="button" onClick={handleSubmit} className="submit-btn">
                                               +Add custom Review
                    </button>
            </div>
           
            <div className="allCustomersLowerBox productQueries">
                
                {/* <div className="allCustomersLowerHeader"> */}
                 
                   <div className="flex justify-end items-center gap-4 p-4 bg-white shadow-md rounded-lg">
      {/* Dropdown: All */}
      <select className="border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none">
        <option>All</option>
      </select>

      {/* Dropdown: Filter by Rating */}
      <select className="border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none">
        <option>Filter by Rating</option>
      </select>

      {/* Input Box */}
      <input
        type="text"
        placeholder="Type Product Name & Hit"
        className="border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none w-64"
      />
    </div>
                {/* </div> */}
               
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