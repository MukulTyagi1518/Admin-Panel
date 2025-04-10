import React, { useState } from "react";
import "./InhouseProduct.css";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import Switch from "../../components/Switch";
import { useNavigate } from "react-router-dom";
import FilterComponent from "../../components/FilterComponent";

const InhouseProduct = () => {
  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/editinhouse`);
  };
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

  // const handleExpandRow = (id) => {
  //   setExpandedRow(expandedRow === id ? null : id);
  // };

  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 5; // Adjust as needed
  // const totalPages = Math.ceil(products.length / itemsPerPage);

  // const currentItems = products.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage
  // );

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

  // const handleToggleChange = (id, field) => {
  //   setProducts((prevProducts) =>
  //     prevProducts.map((product) =>
  //       product.id === id ? { ...product, [field]: !product[field] } : product
  //     )
  //   );
  // };


  // const toggleSellerDropdown = () => {
  //   setIsSellerDropdownOpen(!isSellerDropdownOpen);
  // };

  // const selectSeller = (seller) => {
  //   setSelectedSeller(seller);
  //   setIsSellerDropdownOpen(false);
  // };

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

  return (
    <div className="product-container2">
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
      <div className="product-table2">
        <table>
          <thead>
            <tr>
              <th className="lg:hidden"></th>
              <th>
                <input
                  type="checkbox"
                  className="check25"
                  checked={
                    products.length > 0 &&
                    selectedProducts.length === products.length
                  }
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />{" "}
              </th>

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
            {filteredProducts.map((product) => (
              <>
                {/* Main Row with Plus Icon */}
                <tr key={product.id}>
                  <td>
                  <div
                      className={`plus-icon ${product.expanded ? "rotate" : ""
                        }`}
                      onClick={() =>
                        setProducts((prevProducts) =>
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
                  <td> 

                    <input
                      type="checkbox"
                      checked={selectedProducts.includes(product.id)}
                      onChange={() => handleSelectProduct(product.id)}
                    />
                    {/* <div
                      className={`plus-icon ${product.expanded ? "rotate" : ""
                        }`}
                      onClick={() =>
                        setProducts((prevProducts) =>
                          prevProducts.map((p) =>
                            p.id === product.id
                              ? { ...p, expanded: !p.expanded }
                              : p
                          )
                        )
                      }
                    >
                      
                      +
                     
                    </div> */}
                  </td>

                  

                  <td className="product-name  ">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-img"
                    />
                    <span className="mr-5">{product.name}</span>
                  </td>

                  <td className="hide-on-small ">{product.addedBy}</td>
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
                        onChangeFunc={() =>
                          setProducts((prevProducts) =>
                            prevProducts.map((p) =>
                              p.id === product.id ? { ...p, deal: !p.deal } : p
                            )
                          )
                        }
                      />
                      {" "}
                    </label>
                  </td>
                  <td className="hide-on-small">
                    <label className="switch">

                      <Switch
                        value={product.published}
                        onChangeFunc={() =>
                          setProducts((prevProducts) =>
                            prevProducts.map((p) =>
                              p.id === product.id
                                ? { ...p, published: !p.published }
                                : p
                            )
                          )
                        }
                      />
                      {" "}
                    </label>
                  </td>
                  <td className="hide-on-small">
                    <label className="switch">

                      <Switch
                        value={product.featured}
                        onChangeFunc={() =>
                          setProducts((prevProducts) =>
                            prevProducts.map((p) =>
                              p.id === product.id
                                ? { ...p, featured: !p.featured }
                                : p
                            )
                          )
                        }
                      />
                      {" "}
                    </label>
                  </td>
                  <td className="hide-on-small ">
                    <button className="btn3 view-btn3">
                      <FaEye />
                    </button>
                    <button className="btn3 edit-btn3">
                      <FaEdit onClick={() => handleEdit(product.id)} />
                    </button>
                    <button className="btn3 delete-btn3">
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

                            <Switch
                              value={product.deal}
                              onChangeFunc={() =>
                                setProducts((prevProducts) =>
                                  prevProducts.map((p) =>
                                    p.id === product.id
                                      ? { ...p, deal: !p.deal }
                                      : p
                                  )
                                )
                              }
                            />
                            {" "}
                          </label>
                        </div>

                        <div>
                          Published:
                          <label className="switch">

                            <Switch
                              value={product.published}
                              onChangeFunc={() =>
                                setProducts((prevProducts) =>
                                  prevProducts.map((p) =>
                                    p.id === product.id
                                      ? { ...p, published: !p.published }
                                      : p
                                  )
                                )
                              }
                            />
                            {" "}
                          </label>
                        </div>

                        <div>
                          Featured:
                          <label className="switch">

                            <Switch
                              value={product.featured}
                              onChangeFunc={() =>
                                setProducts((prevProducts) =>
                                  prevProducts.map((p) =>
                                    p.id === product.id
                                      ? { ...p, featured: !p.featured }
                                      : p
                                  )
                                )
                              }
                            />
                            {" "}
                          </label>
                        </div>

                        <div>
                          Options:
                          <button className="btn3 view-btn3">
                            <FaEye />
                          </button>
                          <button className="btn3 edit-btn3">
                            <FaEdit onClick={() => handleEdit(product.id)} />
                          </button>
                          <button className="btn3 delete-btn3">
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

export default InhouseProduct;
