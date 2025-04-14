import { Edit, Trash } from "lucide-react";
import "./Allwholesale.css";
import { useNavigate } from "react-router-dom";
import { MdOutlineSettings } from "react-icons/md";
import { useState } from "react";
import DeleteConfirmation from "../DeleteConfirmation";
import Switch from "../Switch";
import ViewExpandData from "../ViewExpandData";

export default function PreOrderReviews() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/wholesale/Addwholesale");
  };

  const [expandedId, setExpandedId] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [attributeToDeleteId, setAttributeToDeleteId] = useState(null);
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

  const openDeleteConfirmation = (id) => {
    setAttributeToDeleteId(id);
    setShowDeleteConfirmation(true);
  };

  const closeDeleteConfirmation = () => {
    setAttributeToDeleteId(null);
    setShowDeleteConfirmation(false);
  };

  const handleDelete = (id) => {
    // In a real application, you would make an API call here to delete the attribute
    console.log(`Deleting attribute with ID: ${id}`);
    // After successful deletion, you would likely update the 'attributes' state
    closeDeleteConfirmation();
  }
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
                  <label className="switch">
                    {/* <input type="checkbox" checked={user.todaysdeal} onChange={() => handleToggleChange(user.id, "todaysdeal")} /><Switch/>
                                        <span className="slider"></span> */}
                    <Switch
                      value={user.todaysdeal}
                      onChangeFunc={() => handleToggleChange(user.id, "todaysdeal")}
                    />

                  </label>
                </td>
                <td>
                  <label className="switch">
                    <Switch
                      value={user.published}
                      onChangeFunc={() => handleToggleChange(user.id, "published")}
                    />

                  </label>
                </td>
                <td>
                  <label className="switch">
                    <Switch
                      value={user.featured}
                      onChangeFunc={() => handleToggleChange(user.id, "featured")}
                    />

                  </label>
                  {/* <Switch/>  */}
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
                      <Trash color="blue" size={18} onClick={() => openDeleteConfirmation(user.id)} />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>


        <div className="block md:hidden w-full px-4 py-2 font-semibold text-sm bg-gray-300 text-gray-600 rounded">
  <div className="flex gap-5">
    <span></span>
    <span className="ml-4">#</span>
    <span>Name</span>
  </div>
</div>
        {/* Mobile View */}
        <div className="block md:hidden w-full">
          {userData.map((user) => (
            <div key={user.id} className="border rounded-lg shadow-md mb-4 p-4">
              {/* Summary Row */}
              {/* <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleMobileView(user.id)}
                    className="text-xl font-bold text-gray-700"
                  >
                    {expandedId === user.id ? "−" : "+"}
                  </button>
                  <span className="font-semibold text-sm">{user.id}</span>
                  <span className="font-medium text-gray-800 text-sm">{user.prodName}</span>
                </div>
              </div> */}
              <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
    <ViewExpandData
      isExpanded={expandedId === user.id}
      toggleExpanded={() => toggleMobileView(user.id)}
    />
    <span className="text-sm">{user.id}</span>
    <span className="font-medium text-gray-800 text-sm">{user.prodName}</span>
  </div>

      </div>

              {/* Expanded Details */}
              {expandedId === user.id && (
                <div className="mt-4 space-y-2 text-sm  w-full">
                  <div className="flex">
                    <span className="font-medium text-gray-600 mr-2">Added By:</span>
                    <span>{user.productOwner}</span>
                  </div>
                  <div className="flex ">
                    <span className="font-medium text-gray-600 mr-2">Num of Sale:</span>
                    <span>{user.info.NumofSale}</span>
                  </div>
                  <div className="flex ">
                    <span className="font-medium text-gray-600 mr-2">Base Price:</span>
                    <span>{user.info.BasePrice}</span>
                  </div>
                  <div className="flex ">
                    <span className="font-medium text-gray-600 mr-2">Rating:</span>
                    <span>{user.info.Rating}</span>
                  </div>
                  <div className="flex ">
                    <span className="font-medium text-gray-600">Total Stock:</span>
                    <span>{user.totalstock}</span>
                  </div>

                  {/* Toggle Switches */}
                  <div className="flex items-center">
                    <span className="font-medium text-gray-600">Today's Deal:</span>

                    <label className="inline-flex items-center cursor-pointer  ml-3">
                      <Switch
                        value={user.todaysdeal}
                        onChangeFunc={() => handleToggleChange(user.id, "todaysdeal")}
                      />


                    </label>
                  </div>

                  <div className="flex items-center">
                    <span className="font-medium text-gray-600">Published:</span>
                    <label className="inline-flex items-center cursor-pointer  ml-3">
                      <Switch
                        value={user.published}
                        onChangeFunc={() => handleToggleChange(user.id, "published")}
                      />

                      
                    </label>
                  </div>

                  <div className="flex items-center">
                    <span className="font-medium text-gray-600">Featured:</span>
                    <label className="inline-flex items-center cursor-pointer  ml-3">
                      <Switch
                        value={user.featured}
                        onChangeFunc={() => handleToggleChange(user.id, "featured")}
                      />

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
      {showDeleteConfirmation && (
        <DeleteConfirmation
          isOpen={showDeleteConfirmation}
          onConfirm={() => handleDelete(attributeToDeleteId)}
          onCancel={closeDeleteConfirmation}

        />
      )}
    </div>
  );
}
