import { Eye, Edit, EyeIcon, Edit2, ChevronDownIcon } from "lucide-react";
import { useEffect, useState } from "react";
import "./preOrderProducts.scss";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import DeleteConfirmation from "../../DeleteConfirmation";

const products = [
  {
    id: 0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrkL5wpayCQbg0c3pEHf9VsDXDUxseYZCDRQ&s",
    name: "Canon EOS 5D MarkII",
    category: "Computer & Accessories",
    type: "In-House",
    productCreated: "03.01.2025",
    // MinPurchaseQty: 1,
    refund: "Refundable",
    price: 500,
    prePaymentNeeded: false,
    discount: "5%",
    availability: "Available Now",
    preorder: 0,
    finalOrder: 1,
    publish: true,
    approval: "yes",
  },
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrkL5wpayCQbg0c3pEHf9VsDXDUxseYZCDRQ&s",
    name: "Canon EOS 5D MarkII",
    category: "Computer & Accessories",
    type: "In-House",
    productCreated: "03.01.2025",
    MinPurchaseQty: 1,
    refund: "Refundable",
    price: 500,
    prePaymentNeeded: false,
    discount: "5%",
    availability: "Not Available",
    preorder: 0,
    finalOrder: 1,
    publish: true,
    approval: "yes",
  },
];

export default function PreorderProducts() {
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const [loading, setLoading] = useState(true);
  const [uploadsRemaining, setUploadsRemaining] = useState(null);
  const [currentPackage, setCurrentPackage] = useState(null);
  const [expandedRows, setExpandedRows] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const [expandedId, setExpandedId] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [attributeToDeleteId, setAttributeToDeleteId] = useState(null);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setUploadsRemaining(353);
      setCurrentPackage("Platinum");
      setLoading(false);
    }, 1500); // Adjust the time to match your actual loading time
  }, []);

  const handleCheckboxChange = (user) => {
    let updatedSelected;
    if (selected.some((item) => item.id === user.id)) {
      // If already selected, remove from the array
      updatedSelected = selected.filter((item) => item.id !== user.id);
    } else {
      // Otherwise, add to the array
      updatedSelected = [...selected, user];
    }

    setSelected(updatedSelected);
    setSelectAll(updatedSelected.length === products.length);

    // Console logs
    console.log("Selected Users:", updatedSelected);
    console.log(
      "Select All Status:",
      updatedSelected.length === products.length
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://e-commerce-backend-1-0.onrender.com/api/products/");
        if (response.data.success) {
          const products = response.data.data.map((item, index) => ({
            id: index + 1,
            prodId: item._id,
            productName: item.productName,
            minPurchaseQty: item.minPurchaseQty,
            unitPrice: item.unitPrice,
            quantity: item.quantity,
            unit: item.unit,
            type: item.type,
            category: item.category,
            productCreated: item.createdAt,
            refund: item.refundable,
            availability: item.availability,
            prePaymentNeeded: item.prePaymentNeeded,
            discount: item.discount,
            approval: "Approved",
            productOwner: "Admin",
            lowStockWarning: item.lowStockQuantityWarning || 0,
            info: {
              NumofSale: "0 times",
              BasePrice: `$${item.unitPrice.toFixed(2)}`,
              Rating: "0",
            },
            totalstock:
              item.quantity < item.lowStockQuantityWarning ? "Low" : "In Stock",
            todaysdeal: item.flashDeal?.isActive || false,
            published: item.published,
            featured: item.featured,
            externalLink: item.externalLink,
            externalLinkButtonText: item.externalLinkButtonText,
            metaTitle: item.metaTitle,
            metaDescription: item.metaDescription,
            videoLink: item.videoLink,
            thumbnailImage: item.thumbnailImage,
          }));
          setUserData(products);
          console.log("Fetched products:", products);
        }
      } catch (err) {
        console.error("Failed to fetch wholesale products:", err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1200);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Simulate loading delay
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust the delay as needed
  }, []);

  const toggleExpand = (index) => {
    setExpandedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handlereview = (e) => {
    e.preventDefault();
    navigate("/products/create");
  };

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
      await axios.put(`https://e-commerce-backend-1-0.onrender.com/api/products/${prodId}`, {
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
      const cleanPayload = {
        productName: editingUser.productName,
        unitPrice: parseFloat(editingUser.unitPrice),
        quantity: parseInt(editingUser.quantity),
        lowStockQuantityWarning: parseInt(editingUser.lowStockWarning || 0),
        externalLink: editingUser.externalLink,
        externalLinkButtonText: editingUser.externalLinkButtonText,
        metaTitle: editingUser.metaTitle,
        metaDescription: editingUser.metaDescription,
        videoLink: editingUser.videoLink,
        featured: editingUser.featured,
        todaysDeal: editingUser.todaysdeal,
        published: editingUser.published,
        thumbnailImage: editingUser.thumbnailImage,
      };

      const formData = new FormData();
      for (const key in cleanPayload) {
        formData.append(key, cleanPayload[key]);
      }

      const { data } = await axios.put(
        `https://e-commerce-backend-1-0.onrender.com/api/products/update/${editingUser.prodId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Update UI
      setUserData((prev) =>
        prev.map((u) =>
          u.prodId === editingUser.prodId
            ? {
                ...u,
                ...editingUser,
                totalstock:
                  editingUser.quantity < editingUser.lowStockWarning
                    ? "Low"
                    : "In Stock",
                todaysdeal: editingUser.todaysdeal || false,
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
  const handleClick = () => {
    navigate("/preorder/addpreorder");
  };

  // Function to handle "Select All"
  const handleSelectAll = () => {
    if (selectAll) {
      setSelected([]); // Deselect all
      console.log("Deselecting All products");
    } else {
      setSelected(products); // Select all products
      console.log("Selecting All products:", products);
    }
    setSelectAll(!selectAll);
    console.log("Select All Checkbox:", !selectAll);
  };

  return (
    <div className="PreorderProducts ma10">
      <div className="preOrderProductsBox">
        <div className="preOrderProductsHeader">
          <p className="text-2xl md:text-2xl">Preorder Products</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
            {/* Remaining Uploads */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg p-6 flex flex-col items-center justify-center shadow-md">
              <div className="bg-white/20 p-3 rounded-full mb-3">
                {loading ? (
                  <Skeleton circle width={32} height={32} />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 0l-4 4m4-4l4 4"
                    />
                  </svg>
                )}
              </div>
              <div className="text-4xl font-bold">
                {loading ? <Skeleton width={60} /> : uploadsRemaining}
              </div>
              <div className="text-sm mt-1">
                {loading ? <Skeleton width={120} /> : "Remaining Uploads"}
              </div>
            </div>

            {/* Add New Product */}
            <div className="bg-white border border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-md transition">
              <button
                onClick={handleClick}
                className="bg-gray-100 p-4 rounded-full text-gray-600"
                disabled={loading}
              >
                {loading ? (
                  <Skeleton circle width={32} height={32} />
                ) : (
                  <Plus size={32} />
                )}
              </button>
              <div className="mt-2 text-sm font-medium text-gray-700">
                {loading ? <Skeleton width={140} /> : "Add New Product"}
              </div>
            </div>

            {/* Current Package */}
            <div className="bg-white rounded-lg p-6 border flex flex-col items-center justify-center shadow-sm">
              <div className="text-blue-600 text-3xl mb-2">
                {loading ? <Skeleton width={36} /> : "🌟"}
              </div>
              <div className="text-sm font-medium text-gray-700">
                {loading ? (
                  <>
                    Current Package:{" "}
                    <strong>
                      <Skeleton width={80} />
                    </strong>
                  </>
                ) : (
                  <>
                    Current Package: <strong>{currentPackage}</strong>
                  </>
                )}
              </div>
              <button
                className="mt-2 px-4 py-2 text-sm bg-white border border-gray-400 rounded-full hover:bg-gray-100"
                disabled={loading}
              >
                {loading ? <Skeleton width={120} /> : "Upgrade Package"}
              </button>
            </div>
          </div>
        </div>

        <div className="preOrderProductsLower">
          <div className="preOrderProductsLowerHead">
            <div className="poplh1">
              <div className="poph1menuleft">
                <p className="poph1menuitem popActive">
                  {loading ? (
                    <Skeleton width={150} />
                  ) : (
                    `Total Products (${products.length})`
                  )}
                </p>
                {/* Add skeletons for other menu items if needed */}
              </div>
              <div className="poph1menuright">
                <p className="poph1menuitem">
                  {loading ? <Skeleton width={100} /> : "Published (7)"}
                </p>
                <p className="poph1menuitem">
                  {loading ? <Skeleton width={120} /> : "Unpublished (3)"}
                </p>
                <p className="poph1menuitem">
                  {loading ? <Skeleton width={130} /> : "Discounted (5)"}
                </p>
              </div>
            </div>
            <div className="poplh2">
              <div className="lower-menu">
                <div className="bulkButtonBox">
                  <div className="bulkButton">
                    <p className="bulkText">
                      {loading ? <Skeleton width={80} /> : "Bulk Action"}
                    </p>
                    {loading ? (
                      <Skeleton width={18} height={18} />
                    ) : (
                      <ChevronDownIcon size={18} />
                    )}
                  </div>
                </div>
                <div className="bulkButtonBox">
                  <div className="bulkButton">
                    <p className="bulkText">
                      {loading ? <Skeleton width={70} /> : "Filter by"}
                    </p>
                    {loading ? (
                      <Skeleton width={18} height={18} />
                    ) : (
                      <ChevronDownIcon size={18} color="grey" />
                    )}
                  </div>
                </div>
                {loading ? (
                  <Skeleton width={200} height={35} className="searchInput" />
                ) : (
                  <input
                    type="text"
                    placeholder="Type email to search"
                    className="searchInput"
                    disabled={loading}
                  />
                )}
                {loading ? (
                  <Skeleton width={80} height={35} />
                ) : (
                  <button
                    className="bg-gray-200 text-gray-700 px-3 py-3 rounded-md text-sm"
                    disabled={loading}
                  >
                    Search
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>
                    {loading ? (
                      <Skeleton width={20} height={20} />
                    ) : (
                      <input
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                        disabled={loading}
                      />
                    )}
                  </th>
                  <th>{loading ? <Skeleton width={50} /> : "Image"}</th>
                  <th className="pstatH">
                    {loading ? <Skeleton width={120} /> : "Product Details"}
                  </th>
                  <th className="ehead">
                    {loading ? <Skeleton width={120} /> : "Product Details"}
                  </th>
                  <th className="vstath">
                    {loading ? <Skeleton width={100} /> : "Price Sett"}
                  </th>
                  <th>{loading ? <Skeleton width={80} /> : "Discount"}</th>
                  <th>{loading ? <Skeleton width={100} /> : "Availability"}</th>
                  <th>{loading ? <Skeleton width={80} /> : "Orders"}</th>
                  <th>{loading ? <Skeleton width={80} /> : "Status"}</th>
                  <th>{loading ? <Skeleton width={80} /> : "Approval"}</th>
                  <th>{loading ? <Skeleton width={80} /> : "Actions"}</th>
                </tr>
              </thead>
              <tbody>
                {loading
                  ? Array(5)
                      .fill(null)
                      .map((_, index) => (
                        <tr key={index}>
                          <td>
                            <Skeleton width={20} height={20} />
                          </td>
                          <td>
                            <Skeleton width={50} height={50} />
                          </td>
                          <td className="productDetails">
                            <Skeleton width={150} />
                            <Skeleton width={100} className="mt-1" />
                            <Skeleton width={120} className="mt-1" />
                            <Skeleton width={180} className="mt-1" />
                          </td>
                          <td className="quantityBox">
                            <Skeleton width={130} />
                            <Skeleton width={80} className="mt-1" />
                            <Skeleton width={100} className="mt-2" />
                            <Skeleton width={80} className="mt-1" />
                          </td>
                          <td className="priceBox">
                            <Skeleton width={60} />
                            <Skeleton width={100} className="mt-1" />
                            <Skeleton width={140} />
                            <Skeleton width={80} className="mt-1" />
                          </td>
                          <td className="discountBox">
                            <Skeleton width={60} />
                          </td>
                          <td className="availabilityBox">
                            <Skeleton width={80} />
                          </td>
                          <td className="ordersBox">
                            <Skeleton width={70} />
                            <Skeleton width={50} className="mt-1" />
                            <Skeleton width={70} className="mt-2" />
                            <Skeleton width={50} className="mt-1" />
                          </td>
                          <td>
                            <Skeleton width={80} height={30} />
                          </td>
                          <td className="productapproval">
                            <Skeleton width={80} />
                          </td>
                          <td>
                            <div className="preOrderActions">
                              <Skeleton circle width={20} height={20} />
                              <Skeleton
                                circle
                                width={20}
                                height={20}
                                className="ml-2"
                              />
                            </div>
                          </td>
                        </tr>
                      ))
                  : userData.map((product) => (
                      <tr key={product.id}>
                        <td>
                          <input
                            type="checkbox"
                            checked={selected.some(
                              (item) => item.id === product.id
                            )}
                            onChange={() => handleCheckboxChange(product)}
                            disabled={loading}
                          />
                        </td>
                        <td>
                          <img
                            src={product.thumbnailImage}
                            alt=""
                            className="prodImg"
                          />
                        </td>
                        <td className="productDetails">
                          <p className="prodName">{product.productName}</p>
                          <p className="catHead">Category</p>
                          <p className="prodCat">{product.category}</p>
                          <p className="manufacturer">{product.type}</p>
                          <p className="prodCat">
                            Product Created : {product.productCreated}
                          </p>
                        </td>
                        <td className="quantityBox">
                          <p className="minQtyHead">Min Purchase Quantity</p>
                          <p className="prodCat">{product.minPurchaseQty} pc</p>
                          <p className="minQtyHead rfhead">Refund</p>
                          <p className="prodCat">{product.refund}</p>
                        </td>
                        <td className="priceBox">
                          <p className="minQtyHead priceHead">Price</p>
                          <p className="price">{product.unitPrice} /{product.unit}</p>
                          <p className="minQtyHead prePaymentHead">
                            Pre Payment Needed
                          </p>
                          <p className="prePayment">
                            {product.prePaymentNeeded ? "Yes" : "No"}
                          </p>
                        </td>
                        <td className="discountBox">
                          <p className="discount">~{product.discount}</p>
                        </td>
                        <td className="availabilityBox">
                          <p className="availability">{product.availability}</p>
                        </td>
                        <td className="ordersBox">
                          <p className="minQtyHead preorder">Preorder</p>
                          <p className="prodCat preOrderNum">
                            {product.preorder}
                          </p>
                          <p className=" minQtyHead finalOrder">Final Order</p>
                          <p className="prodCat preOrderNum">
                            {product.finalOrder}
                          </p>
                        </td>
                        <td>
                          <div className="toggle-buttons-new">
                            <div className="toggle-item-new">
                              <span>Publish</span>
                              <label className="switch-new">
                                <input type="checkbox" />
                                <span className="slider-new"></span>
                              </label>
                            </div>
                          </div>
                        </td>
                        <td className="productapproval">
                          <p className="prodapproval">{product.approval}</p>
                        </td>
                        <td>
                          <div className="preOrderActions">
                            <div className="action">
                              <EyeIcon size={18} color="blue" />
                            </div>
                            <div className="action">
                              <Edit2 size={18} color="blue" />
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
  );
}
