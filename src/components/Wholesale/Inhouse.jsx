import React, { useState, useEffect  } from "react";
import "./Inhouse.css";
// import { FaEye, FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import Switch from "../Switch";
import DeleteConfirmation from "../DeleteConfirmation";
// import ViewExpandData from "../ViewExpandData";
import { Edit, Eye, EyeIcon, Trash } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const InhouseProduct = () => {
  const [products, setProducts] = useState([
    // ... (आपका उत्पाद डेटा) ...
    {
      id: 1,
      name: "Acer Nitro 50 N50-620 - UA91 Gaming Desktop",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_2CbogDKB0QPLB2m-rRnMC_e3U9mxkCA-A&s",

      info: { sale: 16, price: "$559.990", rating: 5 },
      stock: "Low",
      deal: true,
      published: true,
      featured: false,
    },
    {
      id: 2,
      name: "Lenovo V30a Business All-in-One Desktop",
      image:
        "https://p1-ofp.static.pub/fes/cms/2022/09/26/qk8uzm6ql6ofjomb78nkvxug1v2uto368400.png",

      info: { sale: 9, price: "$579.000", rating: 5 },
      stock: "Low",
      deal: false,
      published: true,
      featured: true,
    },
    {
      id: 3,
      name: "Acer Chromebook Spin 314 Convertible Laptop",
      image:
        "https://images-cdn.ubuy.co.in/665e08180f42d314230e8f57-acer-chromebook-spin-314-convertible.jpg",

      info: { sale: 10, price: "$309.990", rating: 5 },
      stock: "Low",
      deal: true,
      published: true,
      featured: false,
    },
    {
      id: 4,
      name: "StarTech.com USB 3.0 to Dual HDMI Adapter",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGUcY0ATlqDiHE2LJrJZeYQKz7bGGbi7hy9A&s",
      info: { sale: 1, price: "$53.810", rating: 0 },
      stock: "99",
      deal: false,
      published: true,
      featured: true,
    },
    {
      id: 5,
      name: "StarTech.com USB 3.0 to Dual HDMI Adapter",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGUcY0ATlqDiHE2LJrJZeYQKz7bGGbi7hy9A&s",

      info: { sale: 1, price: "$53.810", rating: 0 },
      stock: "99",
      deal: false,
      published: true,
      featured: true,
    },
    {
      id: 6,
      name: "StarTech.com USB 3.0 to Dual HDMI Adapter",
      image: "https://m.media-amazon.com/images/I/61RfxRks6HL.jpg",

      info: { sale: 1, price: "$53.810", rating: 0 },
      stock: "99",
      deal: false,
      published: true,
      featured: true,
    },
    {
      id: 7,
      name: "Acer Chromebook Spin 314 Convertible Laptop",
      image:
        "https://images-cdn.ubuy.co.in/665e08180f42d314230e8f57-acer-chromebook-spin-314-convertible.jpg",

      info: { sale: 10, price: "$309.990", rating: 5 },
      stock: " Low",
      deal: true,
      published: true,
      featured: false,
    },
    {
      id: 8,
      name: "StarTech.com USB 3.0 to Dual HDMI Adapter",
      image: "https://m.media-amazon.com/images/I/61RfxRks6HL.jpg",

      info: { sale: 1, price: "$53.810", rating: 0 },
      stock: "99",
      deal: false,
      published: true,
      featured: true,
    },
  ]);
  // const [sellers] = useState([
  //   "Mostafizar Rahman",
  //   "Thanh Quoc Phu ...",
  //   "ABC Fashion",
  //   "omran alzouabi",
  //   "Chaman",
  // ]);

  // const [ setExpandedId] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [userData, setUserData] = useState([]);

  // const [expandedRow, setExpandedRow] = useState(null);

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [attributeToDeleteId, setAttributeToDeleteId] = useState(null);

  // const handleExpandRow = (id) => {
  //   setExpandedRow(expandedRow === id ? null : id);
  // };

  // const [ setSelectedSeller] = useState("All Sellers");
  // const [isSellerDropdownOpen, setIsSellerDropdownOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Adjust as needed
  //const totalPages = Math.ceil(products.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
 // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // const getPageNumbers = () => {
  //   const pages = [];
  //   const totalVisiblePages = 5; // Adjust as needed

  //   if (totalPages <= totalVisiblePages) {
  //     for (let i = 1; i <= totalPages; i++) {
  //       pages.push(i);
  //     }
  //   } else {
  //     let startPage = Math.max(1, currentPage - 2);
  //     let endPage = Math.min(totalPages, currentPage + 2);

  //     if (currentPage <= 3) {
  //       endPage = 5;
  //     }
  //     if (currentPage >= totalPages - 2) {
  //       startPage = totalPages - 4;
  //     }

  //     for (let i = startPage; i <= endPage; i++) {
  //       pages.push(i);
  //     }

  //     if (startPage > 1) {
  //       pages.unshift("...");
  //       pages.unshift(1);
  //     }
  //     if (endPage < totalPages) {
  //       pages.push("...");
  //       pages.push(totalPages);
  //     }
  //   }
  //   return pages;
  // };

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://e-commerce-backend-1-0.onrender.com/api/wholesaleProduct/getall`);
        if (response.data.success) {
          const products = response.data.data.map((item, index) => ({
            id: index + 1,
            prodId: item._id,
            productName: item.productName,
            thumbnailImage: item.thumbnailImage,
            productOwner: "Admin", // Replace with actual owner if available
            info: {
              NumofSale: "0 times", // Default/fallback
              BasePrice: `$${item.unitPrice.toFixed(2)}`,
              Rating: "0", // Placeholder
            },
            totalstock:
              item.quantity < item.lowStockWarning ? "Low" : "In Stock",
            todaysdeal: item.flashDeal?.isActive || false,
            published: true, // Placeholder if API doesn’t provide it
            featured: false, // Placeholder
          }));
          setUserData(products);
        }
      } catch (err) {
        console.error("Failed to fetch wholesale products:", err);
      }
    };

    fetchData();
  }, []);

  const handleToggleChange = async (prodId, field) => {
    const product = userData.find((u) => u.prodId === prodId);
    if (!product) return;

    const newValue = !product[field];

    // Optimistically update UI
    setUserData((prevUser) =>
      prevUser.map((user) =>
        user.prodId === prodId ? { ...user, [field]: newValue } : user
      )
    );

    try {
      await axios.put(`https://e-commerce-backend-1-0.onrender.com/api/wholesaleProduct/update/${prodId}`, {
        flashDealIsActive: newValue.toString(), // Ensure string "true"/"false"
      });
    } catch (err) {
      console.error("Failed to update flash deal status:", err);
    }
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

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      // Append editable fields from editingUser
      for (const key in editingUser) {
        formData.append(key, editingUser[key]);
      }

      const { data } = await axios.put(
        `https://e-commerce-backend-1-0.onrender.com/api/wholesaleProduct/update/${editingUser.prodId}`, // <-- use prodId
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Product updated successfully:", data.message);

      // Update local userData state with updated product
      setUserData((prev) =>
        prev.map((u) =>
          u.prodId === editingUser.prodId
            ? {
                ...u,
                ...editingUser,
                // Optional: update calculated fields like totalstock again
                totalstock:
                  editingUser.quantity < editingUser.lowStockWarning
                    ? "Low"
                    : "In Stock",
                todaysdeal: editingUser.flashDealIsActive || false,
              }
            : u
        )
      );

      setEditingUser(null);
    } catch (error) {
      console.error(
        "Failed to update product:",
        error.response?.data?.message || error.message
      );
    }
  };

  const openDeleteConfirmation = (prodId) => {
    setAttributeToDeleteId(prodId);
    setShowDeleteConfirmation(true);
  };

  const closeDeleteConfirmation = () => {
    setAttributeToDeleteId(null);
    setShowDeleteConfirmation(false);
  };

  const handleDelete = async (prodId) => {
    try {
      const { data } = await axios.delete(
        `https://e-commerce-backend-1-0.onrender.com/api/wholesaleProduct/delete/${prodId}`
      );
      console.log(data.message);
      setUserData((prev) => prev.filter((item) => item.prodId !== prodId));
    } catch (error) {
      console.error(
        "Delete failed:",
        error.response?.data?.message || error.message
      );
    } finally {
      closeDeleteConfirmation();
    }
  };

  const handleSortChange = (sortType) => {
    const sortedProducts = [...products];

    switch (sortType) {
      case "rating-high":
        sortedProducts.sort((a, b) => b.info.rating - a.info.rating);
        break;
      case "rating-low":
        sortedProducts.sort((a, b) => a.info.rating - b.info.rating);
        break;
      case "sale-high":
        sortedProducts.sort((a, b) => b.info.sale - a.info.sale);
        break;
      case "sale-low":
        sortedProducts.sort((a, b) => a.info.sale - b.info.sale);
        break;
      default:
        return;
    }

    setProducts(sortedProducts);
  };

  // const toggleSellerDropdown = () => {
  //   setIsSellerDropdownOpen(!isSellerDropdownOpen);
  // };

  // const selectSeller = (seller) => {
  //   setSelectedSeller(seller);
  //   setIsSellerDropdownOpen(false);
  // };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/wholesale/add");
  };

  return (
    <div className="product-container4">
      <div className="header">
        <div className="text-[20px]">All wholesale products</div>
        <button className="add-btn" onClick={handleSubmit}>Add New wholesale product</button>
      </div>
      <div className="filter-options">
        <select className="filter-dropdown">
          <option value="">Bulk Action</option>
          <option value="">Delete Section </option>
        </select>
        {/* <select className="filter-dropdown">
                    <option value="">All Sellers</option>
                    
                </select> */}

        {/* <select className="filter-dropdown">
                    <option value="">Sort By</option>
                    
                </select> */}
        <select
          className="filter-dropdown"
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="rating-high">Rating (High - Low)</option>
          <option value="rating-low">Rating (Low - High)</option>
          <option value="sale-high">Num of Sale (High - Low)</option>
          <option value="sale-low">Num of Sale (Low - High)</option>
          <option value="sale-high">Num of Sale (High - Low)</option>
          <option value="sale-low">Num of Sale (Low - High)</option>
        </select>
        <input
          type="text"
          className="filter-input"
          placeholder="Type & Enter"
        />
      </div>
      <div className="product-table4">
        <table>
          <thead>
            <tr>
              <th className="lg:hidden"></th>
              <th>
                <input type="checkbox" />
              </th>

              <th className="name">Name</th>
              <th className="hide-on-small">Info</th>
              <th className="hide-on-small">Total Stock</th>
              <th className="hide-on-small">Today's Deal</th>
              <th className="hide-on-small">Published</th>
              <th className="hide-on-small">Featured</th>
              <th className="hide-on-small">Options</th>
            </tr>
          </thead>

          <tbody>
            {userData.map((user) => (
              <>
                <tr key={user.id}>
                  <td>
                    <div
                      className={`plus-icon ${user.expanded ? "rotate" : ""}`}
                      onClick={() =>
                        setProducts((prevProducts) =>
                          prevProducts.map((p) =>
                            p.id === user.id
                              ? { ...p, expanded: !p.expanded }
                              : p
                          )
                        )
                      }
                    >
                      <EyeIcon size={18} color="blue" />
                    </div>
                  </td>

                  <td>
                    <input type="checkbox" />
                    {/* <div
                      className={`plus-icon ${product.expanded ? "rotate" : ""}`}
                      onClick={() =>
                        setProducts((prevProducts) =>
                          prevProducts.map((p) =>
                            p.id === product.id ? { ...p, expanded: !p.expanded } : p
                          )
                        )
                      }

                    >
                     
                      +
                    </div> */}
                  </td>
                  <td className="product-name">
                    <img
                      src={user.thumbnailImage}
                      alt={user.productName}
                      className="product-img"
                    />
                    <span className="mr-5">{user.productName}</span>
                  </td>
                  <td className="hide-on-small">
                    <div>Num of Sale: {user.info.NumofSale} times</div>
                    <div>Base Price: {user.info.BasePrice}</div>
                    <div>Rating: {user.info.Rating}</div>
                  </td>
                  <td className="hide-on-small">{user.totalstock}</td>
                  <td className="hide-on-small">
                    <Switch
                      value={user.todaysdeal}
                      onChangeFunc={() =>
                        handleToggleChange(user.prodId, "todaysdeal")
                      }
                    />
                  </td>
                  <td className="hide-on-small">
                    <Switch
                      value={user.published}
                      onChangeFunc={() =>
                        handleToggleChange(user.prodId, "published")
                      }
                    />
                  </td>
                  <td className="hide-on-small">
                    <Switch
                      value={user.featured}
                      onChangeFunc={() =>
                        handleToggleChange(user.prodId, "featured")
                      }
                    />
                  </td>
                  <td className="hide-on-small">
                    {/* <button className="btn4 view-btn4"><FaEye /></button>
                    <button className="btn4 edit-btn4"><FaEdit /></button>
                    <button className="btn4 delete-btn6"><FaTrash onClick={() => openDeleteConfirmation(product.id)} /></button> */}
                    <div className=" btn4 view-btn4 p-[.2cm] bg-blue-100 w-fit rounded-[50%] cursor-pointer">
                      <Eye size={15} color="blue" />
                    </div>
                    <div className=" btn4 edit-btn4 p-[.2cm] bg-[#fff4e0] w-fit rounded-[50%] cursor-pointer">
                      <Edit
                        size={15}
                        color="orange"
                        onClick={() => setEditingUser(user)}
                      />
                    </div>

                    <div className="btn4 delete-btn4 p-[.2cm] bg-red-100 w-fit rounded-[50%] cursor-pointer">
                      <Trash
                        size={15}
                        color="red"
                        onClick={() => openDeleteConfirmation(user.prodId)}
                      />
                    </div>
                  </td>
                </tr>
                {user.expanded && (
                  <tr className="row-details mt-0">
                    <td colSpan="9">
                      <div className="details-container">
                        <div>Added By: {user.productOwner}</div>
                        <div>
                          Info: Sale {user.info.NumofSale} times, Price{" "}
                          {user.info.BasePrice}, Rating {user.info.Rating}
                        </div>
                        <div className="total">
                          Total Stock: {user.totalstock}
                        </div>
                        <div>
                          Today's Deal:{" "}
                          <Switch
                            value={user.todaysdeal}
                            onChangeFunc={() =>
                              setProducts((prevProducts) =>
                                prevProducts.map((p) =>
                                  p.id === user.id
                                    ? { ...p, todaysdeal: !p.deal }
                                    : p
                                )
                              )
                            }
                          />
                        </div>
                        <div>
                          Published:{" "}
                          <Switch
                            value={user.published}
                            onChangeFunc={() =>
                              setProducts((prevProducts) =>
                                prevProducts.map((p) =>
                                  p.id === user.id
                                    ? { ...p, published: !p.published }
                                    : p
                                )
                              )
                            }
                          />
                        </div>
                        <div>
                          Featured:{" "}
                          <Switch
                            value={user.featured}
                            onChangeFunc={() =>
                              setProducts((prevProducts) =>
                                prevProducts.map((p) =>
                                  p.id === user.id
                                    ? { ...p, featured: !p.featured }
                                    : p
                                )
                              )
                            }
                          />
                        </div>
                        <div>
                          Options:
                          {/* <button className="btn4 view-btn4"><FaEye /></button>
                          <button className="btn4 edit-btn4"><FaEdit /></button>
                          <button className="btn4 delete-btn6"><FaTrash onClick={() => openDeleteConfirmation(product.id)} /></button> */}
                          <div className=" btn4 view-btn4 p-[.2cm] bg-blue-100 w-fit rounded-[50%] cursor-pointer">
                            <Eye size={15} color="blue" />
                          </div>
                          <div className=" btn4 edit-btn4 p-[.2cm] bg-[#fff4e0] w-fit rounded-[50%] cursor-pointer">
                            <Edit
                              size={15}
                              color="orange"
                              onClick={() => setEditingUser(user)}
                            />
                          </div>
                          <div className="btn4 delete-btn4 p-[.2cm] bg-red-100 w-fit rounded-[50%] cursor-pointer">
                            <Trash
                              size={15}
                              color="red"
                              onClick={() =>
                                openDeleteConfirmation(user.prodId)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
      {editingUser && (
        <div className="edit-modal">
          <form className="edit-form" onSubmit={handleEditSubmit}>
            <h2>Edit Product</h2>
            <input
              type="text"
              value={editingUser.productName}
              onChange={(e) => handleEditChange("productName", e.target.value)}
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
              onChange={(e) =>
                handleEditChange("info.BasePrice", e.target.value)
              }
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
              <button type="button" onClick={() => setEditingUser(null)}>
                Cancel
              </button>
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
};

export default InhouseProduct;