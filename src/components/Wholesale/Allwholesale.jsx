import { Ban, ChevronDownIcon, Edit, Eye, Trash, Trash2 } from "lucide-react"
import "./Allwholesale.css"
import { useNavigate } from "react-router-dom"; 
import { MdOutlineSettings } from "react-icons/md";
import { useState } from "react";

export default function PreOrderReviews() {
  
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        navigate("/wholesale/Addwholesale"); 
      };

       const [user, setUser] = useState()

    
      const handleToggleChange = (id, field) => {
        setUser((prevUser) =>
            prevUser.map((user) =>
                user.id === id ? { ...user, [field]: !user[field] } : user
            )
        );
    };
    

      

    const users = [
        {
            id: 1,
            prodName: "Little Tikes Street Burner Ride-On with Motorcycle Styling, Adjustable Seat",
            productOwner: "Ketaki",
            info:{ 
                   NumofSale :" 0 times",
                   BasePrice: "$25.000",
                   Rating: "0",
                 },
            totalstock:"Low",     
            todaysdeal: true,
            published: true,
            featured: true,
           
        },
        {
            id: 2,
            prodName: "Mens Zip Up Hoodie Winter Fleece Lined Graphic Jacket Heavy Big And Tall Warm Coat Thermal Graphic Tie Dye Outwear",
            productOwner: "Ketaki",
            info:{ 
                   NumofSale :" 0 times",
                   BasePrice: "$25.000",
                   Rating: "0",
                 },
            totalstock:"Low",     
            todaysdeal: true,
            published: true,
            featured: true,
        },
        {
            id: 3,
            prodName: "Gillette Sensor3 Comfort Disposable Razors for Men, 12 Count",
            productOwner: "Ketaki",
            info:{ 
                   NumofSale :" 0 times",
                   BasePrice: "$25.000",
                   Rating: "0",
                 },
            totalstock:"4999",     
            todaysdeal: true,
            published: true,
            featured: true,
        },
        {
            id: 4,
            prodName: "Adidas Team Force Deodorant Body Spray For Men",
            productOwner: "Ketaki",
            info:{ 
                   NumofSale :" 0 times",
                   BasePrice: "$25.000",
                   Rating: "0",
                 },
            totalstock:"5000",     
            todaysdeal: true,
            published: true,
            featured: true,
        }
    ]

    return (
        <div className="productQueriesBox ma10">
            <div className="product-table">
               <p className="customersText">
                      All wholesale products

                    </p>
                    <button type="button" onClick={handleSubmit} className="submit-btn">
                                               +Add new wholesale product
                    </button>
            </div>
           
            <div className="allCustomersLowerBox productQueries">
                
                {/* <div className="allCustomersLowerHeader"> */}
                 
                   <div className="flex justify-end items-center gap-4 p-4 bg-white shadow-md rounded-lg">
      {/* Dropdown: All */}
      <select className="border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none">
        <option>Bulk Action</option>
      </select>

      {/* Dropdown: Filter by Rating */}
      <select className="border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none">
        <option>All Seller</option>
      </select>
         
      <select className="border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none">
        <option>Sort By</option>
        <option>Rating (High - Low)</option>
        <option>Rating (Low - High)</option>
        <option>Sort By</option>
        <option>Sort By</option>
      </select>
  
      {/* Input Box */}
      <input
        type="text"
        placeholder="Type & Enter"
        className="border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none w-64"
      />
    </div>
                {/* </div> */}
               
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>

                                <th >Added By</th>
                                <th>Info</th>
                                <th >Total Stock</th>

                                <th >Todays Deal</th>
                                <th>Published</th>
                                <th>Featured</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td className="prodNameQuery" >{user.prodName}</td>
                                    <td>{user.productOwner}</td>
                                    <td>
                                        {user.info && typeof user.info === "object" ? (
                                            <>
                                                <p>Num of Sale: {user.info?.NumofSale ?? "N/A"}</p>
                                                <p>Base Price: {user.info?.BasePrice ?? "N/A"}</p>
                                                <p>Rating: {user.info?.Rating ?? "N/A"}</p>
                                            </>
                                        ) : (
                                            <p>No Info Available</p>
                                        )}
                                    </td>
                                    <td >{user.totalstock}</td>

                                    <td className="hide-on-small">
                                        <label className="switch">
                                            <input
                                                type="checkbox"
                                                checked={user.deal}
                                                onChange={() => handleToggleChange(user.id, "deal")}
                                            />
                                            <span className="slider"></span>
                                        </label>
                                    </td>

                                   
                                    <td className="hide-on-small">
                                        <label className="switch">
                                            <input
                                                type="checkbox"
                                                checked={user.published}
                                                onChange={() => handleToggleChange(user.id, "published")}
                                            />
                                            <span className="slider"></span>
                                        </label>
                                    </td>
                                    <td className="hide-on-small">
                                        <label className="switch">

                                            <input
                                                type="checkbox"
                                                checked={user.featured}
                                                onChange={() => handleToggleChange(user.id, "featured")}
                                            />
                                            <span className="slider"></span>
                                        </label>
                                    </td>



                                    <td>
                                    <div className="actions">
                                                    <div className="action">
                                                        <MdOutlineSettings color="blue" size={18} />
                                                    </div>
                                                    <div className="action">
                                                        <Edit color="blue" size={18} />
                                                    </div>
                                                    <div className="action">
                                                        <Trash color="blue" size={18} />
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