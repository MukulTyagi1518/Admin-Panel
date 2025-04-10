import React, { useState } from "react";
import "./Sellerwholesale.css";
import { FaEye, FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import Switch from "../Switch";
import DeleteConfirmation from "../DeleteConfirmation";

const InhouseProduct = () => {
  const [products, setProducts] = useState([


    {
      id: 1,
      name: "Lenovo V30a Business All-in-One Desktop",
      image: "https://p1-ofp.static.pub/fes/cms/2022/09/26/qk8uzm6ql6ofjomb78nkvxug1v2uto368400.png",

      info: { sale: 9, price: "$579.000", rating: 5 },
      stock: "Low",
      deal: false,
      published: true,
      featured: true,
    },
    {
      id: 2,
      name: "Acer Chromebook Spin 314 Convertible Laptop",
      image: "https://images-cdn.ubuy.co.in/665e08180f42d314230e8f57-acer-chromebook-spin-314-convertible.jpg",

      info: { sale: 10, price: "$309.990", rating: 5 },
      stock: "Low",
      deal: true,
      published: true,
      featured: false,
    },
    {
      id: 3,
      name: "StarTech.com USB 3.0 to Dual HDMI Adapter",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGUcY0ATlqDiHE2LJrJZeYQKz7bGGbi7hy9A&s",
      info: { sale: 1, price: "$53.810", rating: 0 },
      stock: "99",
      deal: false,
      published: true,
      featured: true,
    },
    {
      id: 4,
      name: "StarTech.com USB 3.0 to Dual HDMI Adapter",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGUcY0ATlqDiHE2LJrJZeYQKz7bGGbi7hy9A&s",

      info: { sale: 1, price: "$53.810", rating: 0 },
      stock: "99",
      deal: false,
      published: true,
      featured: true,
    },
    {
      id: 5,
      name: "StarTech.com USB 3.0 to Dual HDMI Adapter",
      image: "https://m.media-amazon.com/images/I/61RfxRks6HL.jpg",

      info: { sale: 1, price: "$53.810", rating: 0 },
      stock: "99",
      deal: false,
      published: true,
      featured: true,
    },
    {
      id: 6,
      name: "Acer Chromebook Spin 314 Convertible Laptop",
      image: "https://images-cdn.ubuy.co.in/665e08180f42d314230e8f57-acer-chromebook-spin-314-convertible.jpg",

      info: { sale: 10, price: "$309.990", rating: 5 },
      stock: " Low",
      deal: true,
      published: true,
      featured: false,
    },
    {
      id: 7,
      name: "StarTech.com USB 3.0 to Dual HDMI Adapter",
      image: "https://m.media-amazon.com/images/I/61RfxRks6HL.jpg",

      info: { sale: 1, price: "$53.810", rating: 0 },
      stock: "99",
      deal: false,
      published: true,
      approved: true,
      featured: true,
    },

  ]);
  const [sellers] = useState([
    "Mostafizar Rahman",
    "Thanh Quoc Phu ...",
    "ABC Fashion",
    "omran alzouabi",
    "Chaman",

  ]);









  const [expandedRow, setExpandedRow] = useState(null);


  const handleExpandRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };


  const [selectedSeller, setSelectedSeller] = useState("All Sellers");
  const [isSellerDropdownOpen, setIsSellerDropdownOpen] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [attributeToDeleteId, setAttributeToDeleteId] = useState(null);



  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Adjust as needed
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getPageNumbers = () => {
    const pages = [];
    const totalVisiblePages = 5; // Adjust as needed

    if (totalPages <= totalVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, currentPage + 2);

      if (currentPage <= 3) {
        endPage = 5;
      }
      if (currentPage >= totalPages - 2) {
        startPage = totalPages - 4;
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (startPage > 1) {
        pages.unshift("...");
        pages.unshift(1);
      }
      if (endPage < totalPages) {
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };


  const handleToggleChange = (id, field) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, [field]: !product[field] } : product
      )
    );
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


  const toggleSellerDropdown = () => {
    setIsSellerDropdownOpen(!isSellerDropdownOpen);
  };

  const selectSeller = (seller) => {
    setSelectedSeller(seller);
    setIsSellerDropdownOpen(false);
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
  };
  return (
    <div className="product-container5 mt-5">
      <div className="header">
        <div className="text-[25px]">All wholesale products</div>

      </div>
      <div className="filter-options">
        <select className="filter-dropdown">
          <option value="">Bulk Action</option>
          <option value="">Delete Section </option>
        </select>
        
        <select className="filter-dropdown">
          <option value="">All Seller</option>
          <option value="Sam">Sam</option>
          <option value="James">James</option>
          <option value="Robrt">Robert</option>

        </select>
        <select className="filter-dropdown" onChange={(e) => handleSortChange(e.target.value)}>
          <option value="">Sort By</option>
          <option value="rating-high">Rating (High - Low)</option>
          <option value="rating-low">Rating (Low - High)</option>
          <option value="sale-high">Num of Sale (High - Low)</option>
          <option value="sale-low">Num of Sale (Low - High)</option>
          <option value="sale-high">Num of Sale (High - Low)</option>
          <option value="sale-low">Num of Sale (Low - High)</option>
        </select>
        <input type="text" className="" placeholder="Type & Enter" />
      </div>
      <div className="product-table5">
        <table>
          <thead>
            <tr>
            
            <th className="lg:hidden"></th>
              <th>
                <input type="checkbox" />
              </th>

              <th className="name">Name</th>
              <th className="hide-on-small ">Info</th>
              <th className="hide-on-small">Total Stock</th>
              <th className="hide-on-small">Today's Deal</th>
              <th className="hide-on-small">Published</th>
              <th className="hide-on-small">Approved</th>
              <th className="hide-on-small">Featured</th>
              <th className="hide-on-small">Options</th>
            </tr>
          </thead>


          <tbody>
            {products.map((product) => (
              <>
                

                <tr key={product.id}>
 
                <td className="lg:hidden">
                <div
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
                    </div>

                  </td>

                  <td>
                    <input
                      type="checkbox"

                    />

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
                    <img src={product.image} alt={product.name} className="product-img" />
                    <span className="mr-3">{product.name}</span>
                  </td>


                  <td className="hide-on-small">
                    <div>Num of Sale: {product.info.sale} times</div>
                    <div>Base Price: {product.info.price}</div>
                    <div>Rating: {product.info.rating}</div>
                  </td>
                  <td className="hide-on-small">{product.stock}</td>
                  <td className="hide-on-small">
                  <label className="switch">
                    <Switch
                      value={product.deal}
                      onChangeFunc={() => handleToggleChange(product.id, "deal")}
                    />
                    </label>

                  </td>
                  <td className="hide-on-small">
                  <label className="switch">
                    <Switch
                      value={product.published}
                      onChangeFunc={() => handleToggleChange(product.id, "published")}
                    />
                    </label>

                  </td>
                  <td className="hide-on-small">
                  <label className="switch">
                    <Switch
                      value={product.approved}
                      onChangeFunc={() => handleToggleChange(product.id, "approved")}
                    />
                    </label>

                  </td>
                  <td className="hide-on-small">
                  <label className="switch">
                    <Switch
                      value={product.featured}
                      onChangeFunc={() => handleToggleChange(product.id, "featured")}
                    />
                    </label>

                  </td>
                  <td className="hide-on-small ">
                    <button className="btn5 view-btn5">
                      <FaEye />
                    </button>
                    <button className="btn5 edit-btn5">
                      <FaEdit />
                    </button>
                    <button className="btn5 delete-btn5">
                      <FaTrash onClick={() => openDeleteConfirmation(product.id)} />
                    </button>
                  </td>
                </tr>


                {product.expanded && (
                  <tr className="row-details mt-0">
                    <td colSpan="9">
                      <div className="details-container">
                        <div>Added By: {product.addedBy}</div>
                        <div>
                          Info:   Sale {product.info.sale} times, Price {product.info.price}, Rating {product.info.rating}
                        </div>
                        <div className="total">Total Stock: {product.stock}</div>

                        <div>
                          Today's Deal:

                          <Switch
                            value={product.deal}
                            onChangeFunc={() => handleToggleChange(product.id, "deal")}
                          />

                        </div>

                        <div>
                          Published:
                          <Switch
                            value={product.published}
                            onChangeFunc={() => handleToggleChange(product.id, "published")}
                          />
                        </div>

                        <div>
                     
                        Approved:
                          
                          <Switch
                            value={product.approved}
                            onChangeFunc={() => handleToggleChange(product.id, "approved")}
                          />
                          
                        </div>
                        <div>
                        Featured:
                          <Switch
                      value={product.featured}
                      onChangeFunc={() => handleToggleChange(product.id, "featured")}
                    />

                        </div>

                        <div>
                          Options:
                          <button className="btn5 view-btn5">
                            <FaEye />
                          </button>
                          <button className="btn5 edit-btn5">
                            <FaEdit />
                          </button>
                          <button className="btn5 delete-btn5">
                            {/* <div>Num of Sale: {product.info.sale} times</div> */}
                            <FaTrash onClick={() => openDeleteConfirmation(product.id)} />
                          </button>
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
















