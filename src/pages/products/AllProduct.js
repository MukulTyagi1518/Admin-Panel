import React, { useState } from "react";
import "./allProduct.css";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useProductContext } from "../../productContex";
import Switch from "../../components/Switch";
import { useNavigate } from "react-router-dom";

const AllProduct = () => {


  const { allProducts, setAllProducts } = useProductContext();


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
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/editinhouse`);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Adjust as needed
  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allProducts.slice(indexOfFirstItem, indexOfLastItem);

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
    setAllProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, [field]: !product[field] } : product
      )
    );
  };

  const handleSortChange = (sortType) => {
    const sortedProducts = [...allProducts];

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

    setAllProducts(sortedProducts);
  };

  const toggleSellerDropdown = () => {
    setIsSellerDropdownOpen(!isSellerDropdownOpen);
  };

  const selectSeller = (seller) => {
    setSelectedSeller(seller);
    setIsSellerDropdownOpen(false);
  };

  return (
    <div className="product-container1">
      <div className="header">
        <div>All allProducts</div>
        <button className="add-btn" onClick={() => navigate("/products/create")}>Add New product</button>
      </div>
      <div className="filter-options">
        <select className="filter-dropdown">
          <option value="">Bulk Action</option>
          {/* ... (विकल्प) ... */}
        </select>
        {/* <select className="filter-dropdown">
                    <option value="">All Sellers</option>
                    
                </select> */}
        <div className="seller-dropdown">
          <div
            className="seller-dropdown-header"
            onClick={toggleSellerDropdown}
          >
            {selectedSeller}
            <span
              className={`arrow ${isSellerDropdownOpen ? "up" : "down"}`}
            ></span>
          </div>
          {isSellerDropdownOpen && (
            <div className="seller-dropdown-list">
              {sellers.map((seller) => (
                <div
                  key={seller}
                  className="seller-dropdown-item"
                  onClick={() => selectSeller(seller)}
                >
                  {seller}
                </div>
              ))}
            </div>
          )}
        </div>
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
      <div className="product-table1">
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" className="check25" />
              </th>
              {/* <th class="d-table-cell d-lg-none"></th> */}
              <th>Name</th>
              <th>Added By</th>
              <th>Info</th>
              <th>Total Stock</th>
              <th>Today's Deal</th>
              <th>Published</th>
              <th>Featured</th>
              <th>Options</th>
            </tr>
          </thead>

          <tbody>
            {allProducts && allProducts.map((product) => (
              <>
                {/* Main Row with Plus Icon */}
                <tr key={product.id}>
                  <td>
                    <div
                      className={`plus-icon ${product.expanded ? "rotate" : ""
                        }`}
                      onClick={() =>
                        setAllProducts((prevProducts) =>
                          prevProducts.map((p) =>
                            p.id === product.id
                              ? { ...p, expanded: !p.expanded }
                              : p
                          )
                        )
                      }
                    >
                      +
                    </div>
                  </td>

                  <td className="product-name">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-img"
                    />
                    <span>{product.name}</span>
                  </td>
                  <td className="hide-on-small">{product.addedBy}</td>
                  <td className="hide-on-small">
                    <div>Num of Sale:  times</div>
                    <div>Base Price:</div>
                    <div>Rating: </div>
                  </td>
                  <td className="hide-on-small">{product.stock}</td>
                  <td className="hide-on-small">
                    {/* <label className="switch">
                      <input
                        type="checkbox"
                        checked={product.deal}
                        onChange={() => handleToggleChange(product.id, "deal")}
                      />
                      <span className="slider"></span>
                    </label> */}
                    <Switch />
                  </td>
                  <td className="hide-on-small">
                    {/* <label className="switch">
                      <input
                        type="checkbox"
                        checked={product.published}
                        onChange={() =>
                          handleToggleChange(product.id, "published")
                        }
                      />
                      <span className="slider"></span>
                    </label> */}
                    <Switch />
                  </td>
                  <td className="hide-on-small">
                    {/* <label className="switch">
                      <input
                        type="checkbox"
                        checked={product.featured}
                        onChange={() =>
                          handleToggleChange(product.id, "featured")
                        }
                      />
                      <span className="slider"></span>
                    </label> */}
                    <Switch />
                  </td>
                  <td className="hide-on-small ">
                    <button className="btn view-btn1">
                      <FaEye />
                    </button>
                    <button className="btn edit-btn1">
                      <FaEdit onClick={() => handleEdit(product.id)} />
                    </button>
                    <button className="btn delete-btn1">
                      <FaTrash />
                    </button>
                  </td>
                </tr>

              
                {product.expanded && (
                  <tr className="row-details mt-0">
                    <td colSpan="9">
                      <div className="details-container">
                        <div>Added By: {product.addedBy}</div>
                        <div>
                          Info: Sale {product.info.sale} times, Price{" "}
                          {product.info.price}, Rating {product.info.rating}
                        </div>
                        <div>Total Stock: {product.stock}</div>

                        <div>
                          Today's Deal:
                          <label className="switch">
                            {/* <input
                              type="checkbox"
                              checked={product.deal}
                              onChange={() =>
                                handleToggleChange(product.id, "deal")
                              }
                            />
                            <span className="slider"></span> */}
                            <Switch />
                          </label>

                        </div>

                        <div>
                          Published:
                          <label className="switch">
                            {/* <input
                              type="checkbox"
                              checked={product.published}
                              onChange={() =>
                                handleToggleChange(product.id, "published")
                              }
                            />
                            <span className="slider"></span> */}
                            <Switch />
                          </label>

                        </div>

                        <div>
                          Featured:
                          <label className="switch">
                            {/* <input
                              type="checkbox"
                              checked={product.featured}
                              onChange={() =>
                                handleToggleChange(product.id, "featured")
                              }
                            />
                            <span className="slider"></span> */}
                            <Switch />
                          </label>

                        </div>

                        <div>
                          Options:
                          <button className="btn1 view-btn1">
                            <FaEye />
                          </button>
                          <button className="btn1 edit-btn1">
                            <FaEdit />
                          </button>
                          <button className="btn1 delete-btn1">
                            <FaTrash />
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
    </div>
  );
};

export default AllProduct;
