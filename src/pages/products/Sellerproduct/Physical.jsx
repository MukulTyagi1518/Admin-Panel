import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { HiOutlineDuplicate } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Switch from "../../../components/Switch";
import FilterComponent from "../../../components/FilterComponent";

const ProductTable = () => {
  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/editinhouse/${id}`); // Corrected navigation path
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
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

      <div className="overflow-x-auto  bg-white shadow-md rounded-lg">
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
                  <td className="flex border-none items-center space-x-2">
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
                      className={`px-2 py-1 text-white text-xs rounded-full ${
                        product.stock === "High"
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
                  <td className="p-3 border-none mt-4 flex space-x-2">
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
                      <FaTrash className="text-red-500" />
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
           <div className="mt-5 space-y-2 bg-gray-50 p-3 rounded-md">
           <div className="flex justify-between">
             <span className="font-medium">Added By:</span>
             <span>{product.seller}</span>
           </div>
           <div className="flex justify-between">
             <span className="font-medium">Sales:</span>
             <span>{product.sales} times</span>
           </div>
           <div className="flex justify-between">
             <span className="font-medium">Price:</span>
             <span>${product.price.toFixed(2)}</span>
           </div>
           <div className="flex justify-between">
             <span className="font-medium">Rating:</span>
             <span>{product.rating}</span>
           </div>
           <div className="flex justify-between items-center">
             <span className="font-medium">Stock:</span>
             <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full">
               {product.stock}
             </span>
           </div>
         
           {["todayDeal", "published", "approved", "featured"].map((field) => (
             <div className="flex justify-between items-center" key={field}>
               <span className="font-medium">{field}:</span>
               <label className=" ml-3 mt-1">
                 <Switch
                   value={product[field]}
                   onChangeFunc={() => toggleProductStatus(product.id, field)}
                 />
               </label>
             </div>
           ))}
         
           <div className="flex justify-start space-x-2 mt-3 items-center">
             <span className="font-medium">Options:</span>
             <button className="bg-green-100 p-2 rounded-full">
               <FaEye className="text-green-500" />
             </button>
             <button className="bg-blue-100 p-2 rounded-full">
               <FaEdit onClick={() => handleEdit(product.id)} className="text-blue-500" />
             </button>
             <button className="bg-red-100 p-2 rounded-full">
               <FaTrash className="text-red-500" />
             </button>
             <button className="bg-yellow-100 p-2 rounded-full">
               <HiOutlineDuplicate className="text-yellow-500" />
             </button>
           </div>
         </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductTable;