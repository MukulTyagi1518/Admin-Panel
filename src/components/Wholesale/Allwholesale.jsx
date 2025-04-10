import { Edit, Trash } from "lucide-react";
import "./Allwholesale.css";
import { useNavigate } from "react-router-dom";
import { MdOutlineSettings } from "react-icons/md";
import { useState } from "react";
import Switch from "../Switch";

export default function PreOrderReviews() {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/wholesale/add");
    };

    const [expandedId, setExpandedId] = useState(null);
    const [editingUser, setEditingUser] = useState(null);
    const [userData, setUserData] = useState([
        {
            id: 1,
            prodName: "Little Tikes Street Burner Ride-On",
            productOwner: "Ketaki",
            info: { NumofSale: "0 times", BasePrice: "$25.000", Rating: "0" },
            totalstock: "Low",
            todaysdeal: true,
            published: true,
            featured: true,
        },
        {
            id: 2,
            prodName: "Mens Zip Up Hoodie Winter Jacket",
            productOwner: "Ketaki",
            info: { NumofSale: "0 times", BasePrice: "$25.000", Rating: "0" },
            totalstock: "Low",
            todaysdeal: true,
            published: true,
            featured: true,
        },
    ]);

    const handleToggleChange = (id, field) => {
        setUserData((prevUser) =>
            prevUser.map((user) =>
                user.id === id ? { ...user, [field]: !user[field] } : user
            )
        );
    };

    const handleEditChange = (field, value) => {
        if (!editingUser) return;
        if (field.startsWith("info.")) {
            const subField = field.split(".")[1];
            setEditingUser((prev) => ({
                ...prev,
                info: { ...prev.info, [subField]: value },
            }));
        } else {
            setEditingUser((prev) => ({ ...prev, [field]: value }));
        }
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        setUserData((prev) =>
            prev.map((u) => (u.id === editingUser.id ? editingUser : u))
        );
        setEditingUser(null);
    };

    const toggleMobileView = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="productQueriesBox ma10">
            <div className="product-table">
                <p className="customersText">All wholesale products</p>
                <button type="button" onClick={handleSubmit} className="submit-btn">
                    +Add new wholesale product
                </button>
            </div>

            <div className="table-container">
                {/* Desktop Table */}
                <table className="desktop-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Added By</th>
                            <th>Info</th>
                            <th>Total Stock</th>
                            <th>Todays Deal</th>
                            <th>Published</th>
                            <th>Featured</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td className="prodNameQuery">{user.prodName}</td>
                                <td>{user.productOwner}</td>
                                <td>
                                    <p>Num of Sale: {user.info.NumofSale}</p>
                                    <p>Base Price: {user.info.BasePrice}</p>
                                    <p>Rating: {user.info.Rating}</p>
                                </td>
                                <td>{user.totalstock}</td>
                                <td>
                                    {/* <label className="switch"> */}
                                        {/* <input type="checkbox" checked={user.todaysdeal} onChange={() => handleToggleChange(user.id, "todaysdeal")} /> */}<Switch/>
                                        {/* <span className="slider"></span>
                                    </label> */}
                                </td>
                                <td>
                                    {/* <label className="switch"> */}
                                        {/* <input type="checkbox" checked={user.published} onChange={() => handleToggleChange(user.id, "published")} /> */}<Switch/> 
                                        {/* <span className="slider"></span>
                                    </label> */}
                                </td>
                                <td>
                                    {/* <label className="switch">
                                        <input type="checkbox" checked={user.featured} onChange={() => handleToggleChange(user.id, "featured")} />
                                        <span className="slider"></span>
                                    </label> */}<Switch/> 
                                </td>
                                <td>
                                    <div className="actions">
                                        <div className="action">
                                            <MdOutlineSettings color="blue" size={18} />
                                        </div>
                                        <div className="action" onClick={() => setEditingUser(user)}>
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

{/* Mobile View */}
<div className="block md:hidden w-full">
  {/* Header Row */}
  <div className="grid grid-cols-3 bg-gray-200 text-gray-700 font-semibold text-sm px-4 py-2 rounded-t-lg">
    <span></span>
    <span className="col-span-1">ID</span>
    <span className="col-span-1">Name</span>
  </div>

  {/* Product List */}
  {userData.map((user) => (
    <div key={user.id} className="border-t border-gray-300 shadow-sm px-4 py-3">
      {/* Summary Row */}
      <div className="grid grid-cols-3 items-center text-sm gap-2">
        <button
          onClick={() => toggleMobileView(user.id)}
          className="text-xl font-bold text-gray-700"
        >
          {expandedId === user.id ? "−" : "+"}
        </button>
        <span className="font-semibold">#{user.id}</span>
        <span className="text-gray-800">{user.prodName}</span>
      </div>

      {/* Expanded Details */}
      {expandedId === user.id && (
        <div className="mt-4 space-y-2 text-sm border-t border-gray-200 pt-3">
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Added By:</span>
            <span>{user.productOwner}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Num of Sale:</span>
            <span>{user.info.NumofSale}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Base Price:</span>
            <span>{user.info.BasePrice}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Rating:</span>
            <span>{user.info.Rating}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Total Stock:</span>
            <span>{user.totalstock}</span>
          </div>

          {/* Toggle Switches */}
          <div className="flex items-center">
            <span className="text-gray-600 font-medium">Today's Deal:</span>
            <label className="inline-flex items-center ml-auto">
              <Switch />
            </label>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600 font-medium">Published:</span>
            <label className="inline-flex items-center ml-auto">
              <Switch />
            </label>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600 font-medium">Featured:</span>
            <label className="inline-flex items-center ml-auto">
              <Switch />
            </label>
          </div>
        </div>
      )}
    </div>
  ))}
</div>



            </div>

            {/* Edit Modal */}
            {editingUser && (
                <div className="edit-modal">
                    <form className="edit-form" onSubmit={handleEditSubmit}>
                        <h2>Edit Product</h2>
                        <input
                            type="text"
                            value={editingUser.prodName}
                            onChange={(e) => handleEditChange("prodName", e.target.value)}
                            placeholder="Product Name"
                        />
                        <input
                            type="text"
                            value={editingUser.productOwner}
                            onChange={(e) => handleEditChange("productOwner", e.target.value)}
                            placeholder="Product Owner"
                        />
                        <input
                            type="text"
                            value={editingUser.info.BasePrice}
                            onChange={(e) => handleEditChange("info.BasePrice", e.target.value)}
                            placeholder="Base Price"
                        />
                        <input
                            type="text"
                            value={editingUser.totalstock}
                            onChange={(e) => handleEditChange("totalstock", e.target.value)}
                            placeholder="Total Stock"
                        />
                        <div className="form-buttons">
                            <button type="submit">Save</button>
                            <button type="button" onClick={() => setEditingUser(null)}>Cancel</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
