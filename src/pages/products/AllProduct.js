import React, { useState } from "react";
import "./allProduct.css";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useProductContext } from "../../productContex";
import Switch from "../../components/Switch";
import { useNavigate } from "react-router-dom";
import { DataTable } from "../../components/marketing/EmailTemplate/MainPageComponents/DataTable";

const AllProduct = () => {
  const { allProducts, setAllProducts } = useProductContext();
  const navigate = useNavigate();

  // Sellers data
  const [sellers] = useState([
    "Mostafizar Rahman",
    "Thanh Quoc Phu ...",
    "ABC Fashion",
    "omran alzouabi",
    "Chaman",
  ]);

  // Filter states
  const [selectedSeller, setSelectedSeller] = useState("All Sellers");
  const [isSellerDropdownOpen, setIsSellerDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [bulkAction, setBulkAction] = useState("");

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Selection state
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isAllSelected, setIsAllSelected] = useState(false);

  // Filter products based on all criteria
  const filteredProducts = allProducts.filter((product) => {
    // Seller filter
    const matchesSeller =
      selectedSeller === "All Sellers" || product.addedBy === selectedSeller;

    // Search term filter
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.addedBy.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSeller && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "rating-high":
        return (b.info?.rating || 0) - (a.info?.rating || 0);
      case "rating-low":
        return (a.info?.rating || 0) - (b.info?.rating || 0);
      case "sale-high":
        return (b.info?.sale || 0) - (a.info?.sale || 0);
      case "sale-low":
        return (a.info?.sale || 0) - (b.info?.sale || 0);
      default:
        return 0;
    }
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);

const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
const [attributeToDeleteId, setAttributeToDeleteId] = useState(null);
  // Handle bulk actions
  const handleBulkAction = () => {
    if (!bulkAction || selectedProducts.length === 0) return;

    const updatedProducts = [...allProducts];

    switch (bulkAction) {
      case "delete":
        // Filter out selected products
        const remainingProducts = allProducts.filter(
          (product) => !selectedProducts.includes(product.id)
        );
        setAllProducts(remainingProducts);
        break;
      case "publish":
        updatedProducts.forEach((product) => {
          if (selectedProducts.includes(product.id)) {
            product.published = true;
          }
        });
        setAllProducts(updatedProducts);
        break;
      case "unpublish":
        updatedProducts.forEach((product) => {
          if (selectedProducts.includes(product.id)) {
            product.published = false;
          }
        });
        setAllProducts(updatedProducts);
        break;
      default:
        break;
    }

    // Reset selections after action
    setSelectedProducts([]);
    setIsAllSelected(false);
    setBulkAction("");
  };

  // Handle select all checkbox
  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    setIsAllSelected(isChecked);
    
    if (isChecked) {
      // Select all products on current page
      const currentPageIds = currentItems.map(product => product.id);
      setSelectedProducts(currentPageIds);
    } else {
      // Clear all selections
      setSelectedProducts([]);
    }
  };

  // Handle individual checkbox selection
  const handleSelectProduct = (productId) => {
    setSelectedProducts(prev => {
      if (prev.includes(productId)) {
        // Remove if already selected
        setIsAllSelected(false);
        return prev.filter(id => id !== productId);
      } else {
        // Add to selection
        const newSelection = [...prev, productId];
        // Check if all current page items are now selected
        if (newSelection.length === currentItems.length) {
          setIsAllSelected(true);
        }
        return newSelection;
      }
    });
  };

  // Check if a product is selected
  const isProductSelected = (productId) => {
    return selectedProducts.includes(productId);
  };

  // Check if all products on current page are selected
  const isAllPageSelected = () => {
    if (currentItems.length === 0) return false;
    return currentItems.every(product => 
      selectedProducts.includes(product.id)
    );
  };

  // Handle search
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearchTerm(e.target.value);
      setCurrentPage(1);
      // Reset selections when search changes
      setSelectedProducts([]);
      setIsAllSelected(false);
    }
  };

  // Handle sort change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(1);
    // Reset selections when sort changes
    setSelectedProducts([]);
    setIsAllSelected(false);
  };

  // Toggle seller dropdown
  const toggleSellerDropdown = () => {
    setIsSellerDropdownOpen(!isSellerDropdownOpen);
  };

  // Select seller
  const selectSeller = (seller) => {
    setSelectedSeller(seller);
    setIsSellerDropdownOpen(false);
    setCurrentPage(1);
    // Reset selections when filter changes
    setSelectedProducts([]);
    setIsAllSelected(false);
  };

  // Handle toggle changes
  const handleToggleChange = (id, field) => {
    setAllProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, [field]: !product[field] } : product
      )
    );
  };

  // Handle edit
  const handleEdit = (id) => {
    navigate(`/editinhouse`);
  };

  // Generate columns for DataTable
  const columns = [
    {
      key: "select",
      title: (
        <input
          type="checkbox"
          checked={isAllPageSelected()}
          onChange={handleSelectAll}
        />
      ),
      render: (product) => (
        <input
          type="checkbox"
          checked={isProductSelected(product.id)}
          onChange={() => handleSelectProduct(product.id)}
        />
      ),
    },
    {
      key: "name",
      title: "Name",
      render: (product) => (
        <div className="product-name">
          <img
            src={product.image}
            alt={product.name}
            className="product-img"
          />
          <span>{product.name}</span>
        </div>
      ),
    },
    { key: "addedBy", title: "Added By" },
    {
      key: "info",
      title: "Info",
      render: (product) => (
        <div>
          <div>Num of Sale: {product.info?.sale || 0} times</div>
          <div>Base Price: ${product.info?.price || "N/A"}</div>
          <div>Rating: {product.info?.rating || "N/A"}</div>
        </div>
      ),
    },
    { key: "stock", title: "Total Stock" },
    {
      key: "deal",
      title: "Today's Deal",
      render: (product) => (
        <Switch
          checked={product.deal}
          onChange={() => handleToggleChange(product.id, "deal")}
        />
      ),
    },
    {
      key: "published",
      title: "Published",
      render: (product) => (
        <Switch
          checked={product.published}
          onChange={() => handleToggleChange(product.id, "published")}
        />
      ),
    },
    {
      key: "featured",
      title: "Featured",
      render: (product) => (
        <Switch
          checked={product.featured}
          onChange={() => handleToggleChange(product.id, "featured")}
        />
      ),
    },
    {
      key: "options",
      title: "Options",
      render: (product) => (
        <div className="actions">
          <button className="btn view-btn1">
            <FaEye />
          </button>
          <button 
            className="btn edit-btn1"
            onClick={() => handleEdit(product.id)}
          >
            <FaEdit />
          </button>
          <button className="btn delete-btn1">
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  
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
    <div className="product-container1">
      <div className="header">
        <div>All allProducts</div>
        <button className="add-btn" onClick={() => navigate("/products/create")}>Add New product</button>
      </div>

      {/* Filter Options */}
      <div className="filter-options">
        {/* Bulk Action Dropdown */}
        <select
          className="filter-dropdown"
          value={bulkAction}
          onChange={(e) => setBulkAction(e.target.value)}
        >
          <option value="">Bulk Action</option>
          <option value="delete">Delete</option>
          <option value="publish">Publish</option>
          <option value="unpublish">Unpublish</option>
        </select>

        {/* Apply Bulk Action Button */}
        <button
          className="apply-bulk-btn"
          onClick={handleBulkAction}
          disabled={!bulkAction || selectedProducts.length === 0}
        >
          Apply
        </button>

        {/* Seller Dropdown */}
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
              <div
                className="seller-dropdown-item"
                onClick={() => selectSeller("All Sellers")}
              >
                All Sellers
              </div>
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

        {/* Sort Dropdown */}
        <select
          className="filter-dropdown"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="">Sort By</option>
          <option value="rating-high">Rating (High - Low)</option>
          <option value="rating-low">Rating (Low - High)</option>
          <option value="sale-high">Num of Sale (High - Low)</option>
          <option value="sale-low">Num of Sale (Low - High)</option>
        </select>

        {/* Search Input */}
        <input
          type="text"
          className="filter-input"
          placeholder="Type & Enter"
          onKeyPress={handleSearch}
        />
      </div>

      {/* Products Table */}
      <DataTable
        columns={columns}
        data={currentItems}
        loading={false}
        emptyMessage="No products found."
      />

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              className={`page-item ${currentPage === page ? "active" : ""}`}
              onClick={() => {
                setCurrentPage(page);
                // Reset "select all" when changing pages
                setIsAllSelected(false);
              }}
            >
              {page}
            </button>
          )
        )}
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

export default AllProduct;