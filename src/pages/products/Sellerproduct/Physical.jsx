import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { HiOutlineDuplicate } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Switch from "../../../components/Switch";
import FilterComponent from "../../../components/FilterComponent";
import DeleteConfirmation from "../../../components/DeleteConfirmation";
import ViewExpandData from "../../../components/ViewExpandData";

const ProductTable = () => {
  const navigate = useNavigate();
  // const handleEdit = (id) => {
  //   navigate(`/editinhouse/${id}`); // Corrected navigation path
  // };
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [attributeToDeleteId, setAttributeToDeleteId] = useState(null);

  const [filters, setFilters] = useState({
    seller: "All",
    rating: "All",
    stock: "All",
    price: "All",
  });

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Acer Nitro 50 N50-620-UA91 Gaming Desktop",
      seller: "Filon Asset Store",
      image: "https://m.media-amazon.com/images/I/61nGyXI56mL.jpg",
      sales: 16,
      price: 559.99,
      rating: 5,
      stock: "Low",
      published: true,
      approved: true,
      featured: false,
      todayDeal: false,
      expanded: false,
    },
    {
      id: 2,
      name: "Lenovo V30a Business All-in-One Desktop",
      seller: "Filon Asset Store",
      image: "https://m.media-amazon.com/images/I/61nGyXI56mL.jpg",
      sales: 9,
      price: 579.0,
      rating: 4,
      stock: "High",
      published: true,
      approved: false,
      featured: false,
      todayDeal: false,
      expanded: false,
    },
  ]);

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


  const handleSelectAll = (isChecked) => {
    if (isChecked) {
      setSelectedProducts(products.map((product) => product.id));
    } else {
      setSelectedProducts([]);
    }
  };

  const handleSelectProduct = (id) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((productId) => productId !== id)
        : [...prevSelected, id]
    );
  };

  const handleBulkAction = (action) => {
    if (action === "delete" || action === "Delete Selected") {
      setProducts((prevProducts) =>
        prevProducts.filter((product) => !selectedProducts.includes(product.id))
      );
      setSelectedProducts([]);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredProducts = products.filter((product) => {
    // Search filter
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) ||
      product.seller.toLowerCase().includes(searchTerm);

    // Seller filter
    const matchesSeller =
      filters.seller === "All" || product.seller === filters.seller;

    // Rating filter
    const matchesRating =
      filters.rating === "All" ||
      (filters.rating === "High-Low" && product.rating >= 4) ||
      (filters.rating === "Low-High" && product.rating < 4);

    // Stock filter
    const matchesStock =
      filters.stock === "All" || product.stock === filters.stock;

    // Price filter
    const matchesPrice =
      filters.price === "All" ||
      (filters.price === "High-Low" && product.price >= 550) ||
      (filters.price === "Low-high" && product.price < 550);

    return matchesSearch && matchesSeller && matchesRating && matchesStock && matchesPrice;
  });

  const toggleProductStatus = (productId, field) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, [field]: !product[field] } : product
      )
    );
  };
  const toggleSwitch = (id, field) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, [field]: !product[field] } : product
      )
    );
  };
  const toggleExpand = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, expanded: !product.expanded } : product
      )
    );
  };
  const handleEdit = (id) => {
    navigate(`/editinhouse`);
  };
  return (
    <div className="p-4">
      <FilterComponent
        title="All Products"
        filterConfig={{
          seller: {
            label: "All seller",
            options: ["All", "Filon Asset Store", "Another Seller"],
          },
          rating: {
            label: "Sort By rating",
            options: ["All", "High-Low", "Low-High"],
          },
          stock: {
            label: "Sort By Stock",
            options: ["All", "High", "Low"],
          },
          price: {
            label: "Sort By Price",
            options: ["All", "High-low", "Low-high"],
          },
          bulk: {
            label: "Bulk Action",
            options: ["Delete Selected"],
            disabled: selectedProducts.length === 0,
          },
        }}
        currentFilters={filters}
        onFilterChange={(filterType, value) => {
          setFilters((prev) => ({ ...prev, [filterType]: value }));
        }}
        onSearch={handleSearch}
        onBulkAction={handleBulkAction}
        selectedItems={selectedProducts}
        totalItems={products.length}
      />

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full border-collapse hidden md:table">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">
                <input
                  type="checkbox"
                  checked={
                    products.length > 0 &&
                    selectedProducts.length === products.length
                  }
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
              </th>
              <th className="p-3 ">Name</th>
              <th className="p-3">Added By</th>
              <th className="p-3">Info</th>
              <th className="p-3">Total Stock</th>
              <th className="p-3">Today's Deal</th>
              <th className="p-3">Published</th>
              <th className="p-3">Approved</th>
              <th className="p-3">Featured</th>
              <th className="p-3">Options</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="p-3 border-0">
                    <input
                      type="checkbox"
                      checked={selectedProducts.includes(product.id)}
                      onChange={() => handleSelectProduct(product.id)}
                    />
                  </td>
                  <td className="flex items-center space-x-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 rounded"
                    />
                    <span>{product.name}</span>
                  </td>
                  <td className="p-3">{product.seller}</td>
                  <td className="p-3">
                    <p>
                      <strong>Sales:</strong> {product.sales} times
                    </p>
                    <p>
                      <strong>Price:</strong> ${product.price.toFixed(2)}
                    </p>
                    <p>
                      <strong>Rating:</strong> {product.rating}/5
                    </p>
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 text-white text-xs rounded-full ${product.stock === "High"
                          ? "bg-green-500"
                          : "bg-red-500"
                        }`}
                    >
                      {product.stock}
                    </span>
                  </td>
                  {["todayDeal", "published", "approved", "featured"].map(
                    (field) => (
                      <td className="p-3" key={field}>
                        <label className="switch">
                          <Switch
                            value={product[field]}
                            onChangeFunc={() => toggleProductStatus(product.id, field)}
                          />
                        </label>
                      </td>
                    )
                  )}
                  <td className="p-3 flex space-x-2">
                    <button
                      className="bg-green-100 p-2 rounded-full hover:bg-green-200 transition"
                      title="View"
                    >
                      <FaEye className="text-green-500" />
                    </button>
                    <button
                      className="bg-blue-100 p-2 rounded-full hover:bg-blue-200 transition"
                      title="Edit"
                      onClick={() => handleEdit(product.id)}
                    >
                      <FaEdit className="text-blue-500" />
                    </button>
                    <button
                      className="bg-red-100 p-2 rounded-full hover:bg-red-200 transition"
                      title="Delete"
                      onClick={() => {
                        setSelectedProducts([product.id]);
                        handleBulkAction("delete");
                      }}
                    >
                      <FaTrash className="text-red-500" onClick={() => openDeleteConfirmation(product.id)} />
                    </button>
                    <button
                      className="bg-yellow-100 p-2 rounded-full hover:bg-yellow-200 transition"
                      title="Duplicate"
                    >
                      <HiOutlineDuplicate className="text-yellow-500" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="p-4 text-center text-gray-500">
                  No products found matching your criteria
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="md:hidden">
          <div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg mb-2">

            <div className="flex items-center space-x-2">

              <input
                type="checkbox"
                checked={selectedProducts.length === products.length}
                onChange={handleSelectAll}
                className="mr-5"
              />
              <span className="font-medium ml-4">Name</span>
            </div>
          </div>




          {products.map((product) => (
            <div key={product.id} className="border p-3 mb-3 rounded-lg">
              <div className="flex  items-center">
                {/* <button onClick={() => toggleExpand(product.id)} className="p-2">
                  {product.expanded ? "-" : "+"}
                </button> */}
                <ViewExpandData
                  isExpanded={product.expanded}
                  toggleExpanded={() => toggleExpand(product.id)}

                />
                <div className="flex items-center space-x-2">

                  <img src={product.image} alt={product.name} className="w-10 h-10 mt-5" />
                  <span>{product.name}</span>
                </div>
              </div>
              {product.expanded && (
                <div className="mt-5 space-y-2 bg-gray">
                  <div className="flex ">
                    Added By:
                    <span className="ml-3">{product.seller}</span>
                  </div>
                  <div className="flex ">
                    Sales:
                    <span className="ml-3">{product.sales} times</span>
                  </div>
                  <div className="flex ">
                    Price:
                    <span className="ml-3">${product.price.toFixed(2)}</span>
                  </div>
                  <div className="flex ">
                    Rating:
                    <span className="ml-3">{product.rating}</span>
                  </div>
                  <div className="flex ">
                    Stock:
                    <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full ml-3">
                      {product.stock}
                    </span>
                  </div>
                  {["todayDeal", "published", "approved", "featured"].map((field) => (
                    <div className="flex " key={field}>
                      {field}
                      <label className="switch ml-3 mt-1">
                        <Switch
                          value={product[field]}
                          onChangeFunc={() => toggleProductStatus(product.id, field)}
                        />

                      </label>
                    </div>
                  ))}
                  <div className="flex justify-left space-x-2 mt-3">
                    Options:
                    <button className="bg-green-100 p-2 rounded-full ml-2 mt-2">
                      <FaEye className="text-green-500" />
                    </button>
                    <button className="bg-blue-100 p-2 rounded-full">
                      <FaEdit onClick={() => handleEdit(product.id)} className="text-blue-500" />
                    </button>
                    <button className="bg-red-100 p-2 rounded-full">
                      <FaTrash className="text-red-500" onClick={() => openDeleteConfirmation(product.id)} />
                    </button>
                    <button className="bg-yellow-100 p-2 rounded-full">
                      <HiOutlineDuplicate className="text-yellow-500" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
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

export default ProductTable;