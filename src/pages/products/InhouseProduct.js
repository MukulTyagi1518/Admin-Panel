// import React, { useState } from "react";
// import "./InhouseProduct.css";
// import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
// import Switch from "../../components/Switch";
// import { useNavigate } from "react-router-dom";
// import FilterComponent from "../../components/FilterComponent";
// import ViewExpandData from "../../components/ViewExpandData";
// import DeleteConfirmation from "../../components/DeleteConfirmation";
// import { Edit, Eye, EyeIcon, Trash } from "lucide-react";

// const InhouseProduct = () => {
//   const navigate = useNavigate();
//   const handleEdit = (id) => {
//     navigate(`/editinhouse`);
//   };
//   const [filters, setFilters] = useState({
//     stock: "All",
//     price: "All",
//   });

//   const [selectedProducts, setSelectedProducts] = useState([]);
//   // const [expandedRow, setExpandedRow] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//   const [attributeToDeleteId, setAttributeToDeleteId] = useState(null);

//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       name: "Acer Nitro 50 N50-620 - UA91 Gaming Desktop",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_2CbogDKB0QPLB2m-rRnMC_e3U9mxkCA-A&s",
//       addedBy: "Filon Asset Store",
//       info: { sale: 16, price: "$559.990", rating: 5 },
//       stock: "Low",
//       deal: true,
//       published: true,
//       featured: false,
//     },
//     {
//       id: 2,
//       name: "Lenovo V30a Business All-in-One Desktop",
//       image:
//         "https://p1-ofp.static.pub/fes/cms/2022/09/26/qk8uzm6ql6ofjomb78nkvxug1v2uto368400.png",
//       addedBy: "Filon Asset Store",
//       info: { sale: 9, price: "$579.000", rating: 5 },
//       stock: "Low",
//       deal: false,
//       published: true,
//       featured: true,
//     },
//     {
//       id: 3,
//       name: "Acer Chromebook Spin 314 Convertible Laptop",
//       image:
//         "https://images-cdn.ubuy.co.in/665e08180f42d314230e8f57-acer-chromebook-spin-314-convertible.jpg",
//       addedBy: "Filon Asset Store",
//       info: { sale: 10, price: "$309.990", rating: 5 },
//       stock: "0 Low",
//       deal: true,
//       published: true,
//       featured: false,
//     },
//     {
//       id: 4,
//       name: "StarTech.com USB 3.0 to Dual HDMI Adapter",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGUcY0ATlqDiHE2LJrJZeYQKz7bGGbi7hy9A&s",
//       addedBy: "Filon Asset Store",
//       info: { sale: 1, price: "$53.810", rating: 0 },
//       stock: "99",
//       deal: false,
//       published: true,
//       featured: true,
//     },
//     {
//       id: 5,
//       name: "StarTech.com USB 3.0 to Dual HDMI Adapter",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGUcY0ATlqDiHE2LJrJZeYQKz7bGGbi7hy9A&s",
//       addedBy: "Filon Asset Store",
//       info: { sale: 1, price: "$53.810", rating: 0 },
//       stock: "99",
//       deal: false,
//       published: true,
//       featured: true,
//     },
//     {
//       id: 6,
//       name: "StarTech.com USB 3.0 to Dual HDMI Adapter",
//       image: "https://m.media-amazon.com/images/I/61RfxRks6HL.jpg",
//       addedBy: "Filon Asset Store",
//       info: { sale: 1, price: "$53.810", rating: 0 },
//       stock: "99",
//       deal: false,
//       published: true,
//       featured: true,
//     },
//     {
//       id: 7,
//       name: "Acer Chromebook Spin 314 Convertible Laptop",
//       image:
//         "https://images-cdn.ubuy.co.in/665e08180f42d314230e8f57-acer-chromebook-spin-314-convertible.jpg",
//       addedBy: "Filon Asset Store",
//       info: { sale: 10, price: "$309.990", rating: 5 },
//       stock: "0 Low",
//       deal: true,
//       published: true,
//       featured: false,
//     },
//     {
//       id: 8,
//       name: "StarTech.com USB 3.0 to Dual HDMI Adapter",
//       image: "https://m.media-amazon.com/images/I/61RfxRks6HL.jpg",
//       addedBy: "Filon Asset Store",
//       info: { sale: 1, price: "$53.810", rating: 0 },
//       stock: "99",
//       deal: false,
//       published: true,
//       featured: true,
//     },
//   ]);


//   const [isExpanded, setIsExpanded] = useState(false);
//   const toggleExpanded = () => setIsExpanded(prev => !prev);
//   const handleBulkAction = (action) => {
//     if (action === "Delete Selected") {
//       setProducts((prevProducts) =>
//         prevProducts.filter((product) => !selectedProducts.includes(product.id))
//       );
//       setSelectedProducts([]);
//     }
//   };
//   // Handle "Select All" checkbox
//   const handleSelectAll = (isChecked) => {
//     if (isChecked) {
//       setSelectedProducts(products.map((product) => product.id)); // Select all product IDs
//     } else {
//       setSelectedProducts([]); // Deselect all
//     }
//   };
//   const handleSearch = (term) => {
//     setSearchTerm(term.toLowerCase());
//   };
//   // Handle individual checkbox
//   const handleSelectProduct = (id) => {
//     setSelectedProducts(
//       (prevSelected) =>
//         prevSelected.includes(id)
//           ? prevSelected.filter((productId) => productId !== id) // Deselect if already selected
//           : [...prevSelected, id] // Add to selected if not already selected
//     );
//   };


//   const openDeleteConfirmation = (id) => {
//     setAttributeToDeleteId(id);
//     setShowDeleteConfirmation(true);
//   };

//   const closeDeleteConfirmation = () => {
//     setAttributeToDeleteId(null);
//     setShowDeleteConfirmation(false);
//   };

//   const handleDelete = (id) => {
//     // In a real application, you would make an API call here to delete the attribute
//     console.log(`Deleting attribute with ID: ${id}`);
//     // After successful deletion, you would likely update the 'attributes' state
//     closeDeleteConfirmation();
//   };

//   const filteredProducts = products.filter((product) => {
//     // Search filter
//     const matchesSearch =
//       product.name.toLowerCase().includes(searchTerm) ||
//       product.addedBy.toLowerCase().includes(searchTerm);

//     // Stock filter
//     const matchesStock =
//       filters.stock === "All" || product.stock === filters.stock;

//     // Price filter
//     const matchesPrice =
//       filters.price === "All" ||
//       (filters.price === "High" && parseFloat(product.info.price.replace("$", "")) >= 550) ||
//       (filters.price === "Low" && parseFloat(product.info.price.replace("$", "")) < 550);

//     return matchesSearch && matchesStock && matchesPrice;
//   });

//   return (
//     <div className="product-container2">
//       <div className="header">
//         <div>All Products</div>
//         <button
//           className="add-btn"
//           onClick={() => navigate("/products/create")}
//         >
//           Add New product
//         </button>
//       </div>
//       <div className="filter-options">
//         <FilterComponent
//           title="All Products"
//           filterConfig={{
//             price: {
//               label: "Sort By Price",
//               options: ["All", "High", "Low"],
//             },
//             stock: {
//               label: "Sort By Stock",
//               options: ["All", "High", "Low"],
//             },
//             bulk: {
//               label: "Bulk Action",
//               options: ["Delete Selected"],
//               disabled: selectedProducts.length === 0,
//             },
//           }}
//           currentFilters={products}
//           onFilterChange={(filterType, value) => {
//             setFilters((prev) => ({ ...prev, [filterType]: value }));
//           }}
//           onSearch={handleSearch}
//           onBulkAction={handleBulkAction}
//           selectedItems={selectedProducts}
//           totalItems={products.length}
//         />
//       </div>
//       <div className="product-table2">
//         <table>
//           <thead>
//             <tr>
//               <th className="lg:hidden"></th>
//               <th>
//                 <input
//                   type="checkbox"
//                   className="check25"
//                   checked={
//                     products.length > 0 &&
//                     selectedProducts.length === products.length
//                   }
//                   onChange={(e) => handleSelectAll(e.target.checked)}
//                 />{" "}
//               </th>

//               <th>Name</th>
//               <th>Added By</th>
//               <th>Info</th>
//               <th>Total Stock</th>
//               <th>Today's Deal</th>
//               <th>Published</th>
//               <th>Featured</th>
//               <th>Options</th>
//             </tr>
//           </thead>

//           <tbody>
//             {filteredProducts.map((product) => (
//               <>
//                 {/* Main Row with Plus Icon */}
//                 <tr key={product.id}>
//                   <td>
//                     <div
//                       className={`plus-icon ${product.expanded ? "" : ""
//                         }`}
//                       onClick={() =>
//                         setProducts((prevProducts) =>
//                           prevProducts.map((p) =>
//                             p.id === product.id
//                               ? { ...p, expanded: !p.expanded }
//                               : p
//                           )
//                         )
//                       }

//                     >

//                       {/* <ViewExpandData  isExpanded={isExpanded} toggleExpanded={toggleExpanded} /> */
//                       }
//                       <EyeIcon size={18} color="blue" />





//                     </div>

//                   </td>
//                   <td>

//                     <input
//                       type="checkbox"
//                       checked={selectedProducts.includes(product.id)}
//                       onChange={() => handleSelectProduct(product.id)}
//                     />
//                     {/* <div
//                       className={`plus-icon ${product.expanded ? "rotate" : ""
//                         }`}
//                       onClick={() =>
//                         setProducts((prevProducts) =>
//                           prevProducts.map((p) =>
//                             p.id === product.id
//                               ? { ...p, expanded: !p.expanded }
//                               : p
//                           )
//                         )
//                       }
//                     >
                      
//                       +
                     
//                     </div> */}
//                   </td>



//                   <td className="product-name  ">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="product-img"
//                     />
//                     <span className="mr-5">{product.name}</span>
//                   </td>

//                   <td className="hide-on-small ">{product.addedBy}</td>
//                   <td className="hide-on-small">
//                     <div>Num of Sale: {product.info.sale} times</div>
//                     <div>Base Price: {product.info.price}</div>
//                     <div>Rating: {product.info.rating}</div>
//                   </td>
//                   <td className="hide-on-small">{product.stock}</td>
//                   <td className="hide-on-small">
//                     <label className="switch">

//                       <Switch
//                         value={product.deal}
//                         onChangeFunc={() =>
//                           setProducts((prevProducts) =>
//                             prevProducts.map((p) =>
//                               p.id === product.id ? { ...p, deal: !p.deal } : p
//                             )
//                           )
//                         }
//                       />
//                       {" "}
//                     </label>
//                   </td>
//                   <td className="hide-on-small">
//                     <label className="switch">

//                       <Switch
//                         value={product.published}
//                         onChangeFunc={() =>
//                           setProducts((prevProducts) =>
//                             prevProducts.map((p) =>
//                               p.id === product.id
//                                 ? { ...p, published: !p.published }
//                                 : p
//                             )
//                           )
//                         }
//                       />
//                       {" "}
//                     </label>
//                   </td>
//                   <td className="hide-on-small">
//                     <label className="switch">

//                       <Switch
//                         value={product.featured}
//                         onChangeFunc={() =>
//                           setProducts((prevProducts) =>
//                             prevProducts.map((p) =>
//                               p.id === product.id
//                                 ? { ...p, featured: !p.featured }
//                                 : p
//                             )
//                           )
//                         }
//                       />
//                       {" "}
//                     </label>
//                   </td>
//                   <td className="hide-on-small ">
//                     {/* <button className="btn3 view-btn3 p-[.1cm] bg-green-200 text-green-800 rounded-[50%]">
//                       <FaEye />
//                     </button>
//                     <button className="btn3 edit-btn3 p-[.1cm] bg-yellow-200 text-yellow-800 rounded-[50%]">
//                       <FaEdit onClick={() => handleEdit(product.id)} />
//                     </button>
//                     <button className="btn3 delete-btn3 p-[.1cm] bg-red-200 text-red-800 rounded-[50%]">
//                       <FaTrash   onClick={() => openDeleteConfirmation(product.id)}/>
//                     </button> */}
//                     <div className=" btn3 view-btn3 p-[.1cm] bg-blue-100 w-fit rounded-[50%] cursor-pointer">
//                       <Eye size={15} color="blue" />
//                     </div>
//                     <div className=" btn3 edit-btn3 p-[.1cm] bg-[#fff4e0] w-fit rounded-[50%] cursor-pointer"  onClick={() => navigate("/editinhouse")}>
//                       <Edit size={15} color="orange" />
//                     </div>

//                     <div className="btn3 delete-btn3 p-[.1cm] bg-red-100 w-fit rounded-[50%] cursor-pointer">
//                       <Trash size={15} color="red" />
//                     </div>

//                   </td>
//                 </tr>

//                 {product.expanded && (
//                   <tr className="row-details mt-0">
//                     <td colSpan="9">
//                       <div className="details-container">
//                         <div>Added By: {product.addedBy}</div>
//                         <div>
//                           Info: Sale {product.info.sale} times, Price{" "}
//                           {product.info.price}, Rating {product.info.rating}
//                         </div>
//                         <div>Total Stock: {product.stock}</div>

//                         <div>
//                           Today's Deal:
//                           <label className="switch">

//                             <Switch
//                               value={product.deal}
//                               onChangeFunc={() =>
//                                 setProducts((prevProducts) =>
//                                   prevProducts.map((p) =>
//                                     p.id === product.id
//                                       ? { ...p, deal: !p.deal }
//                                       : p
//                                   )
//                                 )
//                               }
//                             />
//                             {" "}
//                           </label>
//                         </div>

//                         <div>
//                           Published:
//                           <label className="switch">

//                             <Switch
//                               value={product.published}
//                               onChangeFunc={() =>
//                                 setProducts((prevProducts) =>
//                                   prevProducts.map((p) =>
//                                     p.id === product.id
//                                       ? { ...p, published: !p.published }
//                                       : p
//                                   )
//                                 )
//                               }
//                             />
//                             {" "}
//                           </label>
//                         </div>

//                         <div>
//                           Featured:
//                           <label className="switch">

//                             <Switch
//                               value={product.featured}
//                               onChangeFunc={() =>
//                                 setProducts((prevProducts) =>
//                                   prevProducts.map((p) =>
//                                     p.id === product.id
//                                       ? { ...p, featured: !p.featured }
//                                       : p
//                                   )
//                                 )
//                               }
//                             />
//                             {" "}
//                           </label>
//                         </div>

//                         <div>
//                           Options:
//                           {/* <button className="btn3 view-btn3">
//                             <FaEye />
//                           </button>
//                           <button className="btn3 edit-btn3">
//                             <FaEdit onClick={() => handleEdit(product.id)} />
//                           </button>
//                           <button className="btn3 delete-btn3">
//                             <FaTrash  onClick={() => openDeleteConfirmation(product.id)} />
//                           </button> */}
//                           <div className=" btn3 view-btn3 p-[.2cm] bg-blue-100 w-fit rounded-[50%] cursor-pointer">
//                             <Eye size={15} color="blue" />
//                           </div>
//                           <div
//                             className="btn3 edit-btn3 p-[.2cm] bg-[#fff4e0] w-fit rounded-[50%] cursor-pointer"
//                             onClick={() => navigate("/editinhouse")}
//                           >
//                             <Edit size={15} color="orange" />
//                           </div>


//                           <div className="btn3 delete-btn3 p-[.2cm] bg-red-100 w-fit rounded-[50%] cursor-pointer">
//                             <Trash size={15} color="red" />
//                           </div>
//                         </div>
//                       </div>
//                     </td>
//                   </tr>
//                 )}
//               </>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {showDeleteConfirmation && (
//         <DeleteConfirmation
//           isOpen={showDeleteConfirmation}
//           onConfirm={() => handleDelete(attributeToDeleteId)}
//           onCancel={closeDeleteConfirmation}

//         />
//       )}
//     </div>
//   );
// };

// export default InhouseProduct;


import { Edit, Trash } from "lucide-react";
import "./InhouseProduct.css";
import { useNavigate } from "react-router-dom";
import { MdOutlineSettings } from "react-icons/md";
import { useState, useEffect } from "react";
import DeleteConfirmation from "../../components/DeleteConfirmation";
import Switch from "../../../src/components/Switch";
import ViewExpandData from "../../components/ViewExpandData";
import FilterComponent from "../../components/FilterComponent";
// import axios from "../../utils/axios";
import axios from "axios";
export default function PreOrderReviews() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/products/create");
  };

  const [expandedId, setExpandedId] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [attributeToDeleteId, setAttributeToDeleteId] = useState(null);
  const [userData, setUserData] = useState([]);
const [filters, setFilters] = useState({
    stock: "All",
    price: "All",
  });

  const [selectedProducts, setSelectedProducts] = useState([]);
  // const [expandedRow, setExpandedRow] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");


  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Acer Nitro 50 N50-620 - UA91 Gaming Desktop",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_2CbogDKB0QPLB2m-rRnMC_e3U9mxkCA-A&s",
      addedBy: "Filon Asset Store",
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
      addedBy: "Filon Asset Store",
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
      addedBy: "Filon Asset Store",
      info: { sale: 10, price: "$309.990", rating: 5 },
      stock: "0 Low",
      deal: true,
      published: true,
      featured: false,
    },
    {
      id: 4,
      name: "StarTech.com USB 3.0 to Dual HDMI Adapter",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGUcY0ATlqDiHE2LJrJZeYQKz7bGGbi7hy9A&s",
      addedBy: "Filon Asset Store",
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
      addedBy: "Filon Asset Store",
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
      addedBy: "Filon Asset Store",
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
      addedBy: "Filon Asset Store",
      info: { sale: 10, price: "$309.990", rating: 5 },
      stock: "0 Low",
      deal: true,
      published: true,
      featured: false,
    },
    {
      id: 8,
      name: "StarTech.com USB 3.0 to Dual HDMI Adapter",
      image: "https://m.media-amazon.com/images/I/61RfxRks6HL.jpg",
      addedBy: "Filon Asset Store",
      info: { sale: 1, price: "$53.810", rating: 0 },
      stock: "99",
      deal: false,
      published: true,
      featured: true,
    },
  ]);


  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(prev => !prev);
  const handleBulkAction = (action) => {
    if (action === "Delete Selected") {
      setProducts((prevProducts) =>
        prevProducts.filter((product) => !selectedProducts.includes(product.id))
      );
      setSelectedProducts([]);
    }
  };
  // Handle "Select All" checkbox
  const handleSelectAll = (isChecked) => {
    if (isChecked) {
      setSelectedProducts(products.map((product) => product.id)); // Select all product IDs
    } else {
      setSelectedProducts([]); // Deselect all
    }
  };
  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };
  // Handle individual checkbox
  const handleSelectProduct = (id) => {
    setSelectedProducts(
      (prevSelected) =>
        prevSelected.includes(id)
          ? prevSelected.filter((productId) => productId !== id) // Deselect if already selected
          : [...prevSelected, id] // Add to selected if not already selected
    );
  };


  
 

  const filteredProducts = products.filter((product) => {
    // Search filter
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) ||
      product.addedBy.toLowerCase().includes(searchTerm);

    // Stock filter
    const matchesStock =
      filters.stock === "All" || product.stock === filters.stock;

    // Price filter
    const matchesPrice =
      filters.price === "All" ||
      (filters.price === "High" && parseFloat(product.info.price.replace("$", "")) >= 550) ||
      (filters.price === "Low" && parseFloat(product.info.price.replace("$", "")) < 550);

    return matchesSearch && matchesStock && matchesPrice;
  });
  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://e-commerce-backend-1-0.onrender.com/api/products/getall`);
        if (response.data.success) {
          const products = response.data.data.map((item, index) => ({
            id: index + 1,
            prodId: item._id,
            productName: item.productName,
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
      await axios.put(`https://e-commerce-backend-1-0.onrender.com/api/products/update/${prodId}`, {
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
        `https://e-commerce-backend-1-0.onrender.com/api/products/update/${editingUser.prodId}`, // <-- use prodId
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

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

  const toggleMobileView = (id) => {
    setExpandedId(expandedId === id ? null : id);
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
        `https://e-commerce-backend-1-0.onrender.com/api/products/delete/${prodId}`
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

  return (
    <div className="productQueriesBox ma10">
      <div className="header">
              <div>All Products</div>
              <button
                className="add-btn"
                onClick={() => navigate("/products/create")}
              >
                Add New product
              </button>
            </div>
            <div className="filter-options">
              <FilterComponent
                title="All Products"
                filterConfig={{
                  price: {
                    label: "Sort By Price",
                    options: ["All", "High", "Low"],
                  },
                  stock: {
                    label: "Sort By Stock",
                    options: ["All", "High", "Low"],
                  },
                  bulk: {
                    label: "Bulk Action",
                    options: ["Delete Selected"],
                    disabled: selectedProducts.length === 0,
                  },
                }}
                currentFilters={products}
                onFilterChange={(filterType, value) => {
                  setFilters((prev) => ({ ...prev, [filterType]: value }));
                }}
                onSearch={handleSearch}
                onBulkAction={handleBulkAction}
                selectedItems={selectedProducts}
                totalItems={products.length}
              />
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
                <td className="prodNameQuery">{user.productName}</td>
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
                      onChangeFunc={() =>
                        handleToggleChange(user.prodId, "todaysdeal")
                      }
                    />
                  </label>
                </td>
                <td>
                  <label className="switch">
                    <Switch
                      value={user.published}
                      onChangeFunc={() =>
                        handleToggleChange(user.prodId, "published")
                      }
                    />
                  </label>
                </td>
                <td>
                  <label className="switch">
                    <Switch
                      value={user.featured}
                      onChangeFunc={() =>
                        handleToggleChange(user.prodId, "featured")
                      }
                    />
                  </label>
                  {/* <Switch/>  */}
                </td>
                <td>
                  <div className="actions">
                    <div className="action">
                      <MdOutlineSettings color="blue" size={18} />
                    </div>
                    <div className="action">
                      <Edit
                        color="blue"
                        size={18}
                        onClick={() => setEditingUser(user)}
                      />
                    </div>
                    <div className="action">
                      <Trash
                        color="blue"
                        size={18}
                        onClick={() => openDeleteConfirmation(user.prodId)}
                      />
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
                  <span className="font-medium text-gray-800 text-sm">
                    {user.productName}
                  </span>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedId === user.id && (
                <div className="mt-4 space-y-2 text-sm  w-full">
                  <div className="flex">
                    <span className="font-medium text-gray-600 mr-2">
                      Added By:
                    </span>
                    <span>{user.productOwner}</span>
                  </div>
                  <div className="flex ">
                    <span className="font-medium text-gray-600 mr-2">
                      Num of Sale:
                    </span>
                    <span>{user.info.NumofSale}</span>
                  </div>
                  <div className="flex ">
                    <span className="font-medium text-gray-600 mr-2">
                      Base Price:
                    </span>
                    <span>{user.info.BasePrice}</span>
                  </div>
                  <div className="flex ">
                    <span className="font-medium text-gray-600 mr-2">
                      Rating:
                    </span>
                    <span>{user.info.Rating}</span>
                  </div>
                  <div className="flex ">
                    <span className="font-medium text-gray-600">
                      Total Stock:
                    </span>
                    <span>{user.totalstock}</span>
                  </div>

                  {/* Toggle Switches */}
                  <div className="flex items-center">
                    <span className="font-medium text-gray-600">
                      Today's Deal:
                    </span>

                    <label className="inline-flex items-center cursor-pointer  ml-3">
                      <Switch
                        value={user.todaysdeal}
                        onChangeFunc={() =>
                          handleToggleChange(user.id, "todaysdeal")
                        }
                      />
                    </label>
                  </div>

                  <div className="flex items-center">
                    <span className="font-medium text-gray-600">
                      Published:
                    </span>
                    <label className="inline-flex items-center cursor-pointer  ml-3">
                      <Switch
                        value={user.published}
                        onChangeFunc={() =>
                          handleToggleChange(user.id, "published")
                        }
                      />
                    </label>
                  </div>

                  <div className="flex items-center">
                    <span className="font-medium text-gray-600">Featured:</span>
                    <label className="inline-flex items-center cursor-pointer  ml-3">
                      <Switch
                        value={user.featured}
                        onChangeFunc={() =>
                          handleToggleChange(user.id, "featured")
                        }
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
      {/* Delete Confirmation */}
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