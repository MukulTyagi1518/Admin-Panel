import { EyeIcon, Edit2, Plus } from "lucide-react";
import { useState } from "react";
import "./preOrderProducts.scss";
import Switch from "../../Switch";
import React from "react";
import FilterComponent from "../../FilterComponent";

const initialProducts = [
  {
    id: 0,
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
    availability: "Available Now",
    preorder: 0,
    finalOrder: 1,
    publish: true,
    featured: false,
    rating: 4.5,
    stock: "High",
    seller: "Filon Asset Store",
  },
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrkL5wpayCQbg0c3pEHf9VsDXDUxseYZCDRQ&s",
    name: "Canon EOS 5D MarkIII",
    category: "Computer & Accessories",
    type: "Seller",
    productCreated: "03.01.2025",
    MinPurchaseQty: 1,
    refund: "Refundable",
    price: 600,
    prePaymentNeeded: false,
    discount: "10%",
    availability: "Not Available",
    preorder: 0,
    finalOrder: 1,
    publish: true,
    featured: false,
    rating: 3.2,
    stock: "Low",
    seller: "Another Seller",
  },
];

export default function PreorderProducts() {
  const [products, setProducts] = useState(initialProducts);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [expandedRows, setExpandedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    price: "All",
  });
  const [activeFilter, setActiveFilter] = useState("All"); // State to track the active filter

  const handleSelectAll = (isChecked) => {
    if (isChecked) {
      setSelectedProducts(products.map((product) => product.id));
    } else {
      setSelectedProducts([]);
    }
  };

<<<<<<< HEAD
  const handleSelectProduct = (id) => {
    setSelectedProducts((prev) =>
      prev.includes(id)
        ? prev.filter((productId) => productId !== id)
        : [...prev, id]
=======
        setSelected(updatedSelected);
        setSelectAll(updatedSelected.length === products.length);

        console.log("Selected Users:", updatedSelected);
        console.log("Select All Status:", updatedSelected.length === products.length);
    };

    const handleSelectAll = () => {
        if (selectAll) {
            setSelected([]);
            console.log("Deselecting All products");
        } else {
            setSelected(products);
            console.log("Selecting All products:", products);
        }
        setSelectAll(!selectAll);
        console.log("Select All Checkbox:", !selectAll);
    };

    const toggleRowExpansion = (productId) => {
        if (expandedRows.includes(productId)) {
            setExpandedRows(expandedRows.filter((id) => id !== productId));
        } else {
            setExpandedRows([...expandedRows, productId]);
        }
    };

    return (
        <div className="PreorderProducts ma10">
            <div className="preOrderProductsBox">
                <div className="preOrderProductsHeader">
                    <p className="allCustomersHead">All Preorder Products</p>
                    <button className="allCustomersButton preOrderHeaderButton">Add New Product</button>
                </div>
                <div className="preOrderProductsLower">
                    <div className="preOrderProductsLowerHead">
                        <div className="poplh1">
                            <div className="poph1menuleft">
                                <p className="poph1menuitem popActive">All (10)</p>
                                <p className="poph1menuitem">Inhouse (7)</p>
                                <p className="poph1menuitem">Sellers (3)</p>
                            </div>
                            <div className="poph1menuright">
                                <p className="poph1menuitem">Published (7)</p>
                                <p className="poph1menuitem">Unpublished (3)</p>
                                <p className="poph1menuitem">Discounted (5)</p>
                            </div>
                        </div>
                        <div className="poplh2">
                            <div className="lower-menu">
                                <input type="text" placeholder="Type email to search" className="searchInput" />
                            </div>
                        </div>
                    </div>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    
                                    
                                    <th>
                                        <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                                    </th>
                                    <th>Image</th>

                                    <th className="responsive-hidden">Product Details</th>
                                    <th className="responsive-hidden">Product Details</th>
                                    <th className="responsive-hidden">Price</th>
                                    <th className="responsive-hidden">Discount</th>
                                    <th className="responsive-hidden">Availability</th>
                                    <th className="responsive-hidden">Orders</th>
                                    <th className="responsive-hidden">Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <React.Fragment key={product.id}>
                                        <tr>
                                            <td></td>
                                            <td className="responsive-visible">
                                                <Plus onClick={() => toggleRowExpansion(product.id)} />
                                            </td>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    checked={selected.some((item) => item.id === product.id)}
                                                    onChange={() => handleCheckboxChange(product)}
                                                />
                                            </td>
                                            <td>
                                                <img src={product.image} alt="" className="prodImg" />
                                            </td>
                                            <td className="responsive-hidden productDetails">
                                                <p className="prodName">{product.name}</p>
                                                <p className="catHead">Category</p>
                                                <p className="prodCat">{product.category}</p>
                                                <p className="manufacturer">{product.type}</p>
                                                <p className="prodCat">Product Created : {product.productCreated}</p>
                                            </td>
                                            <td className="responsive-hidden quantityBox">
                                                <p className="minQtyHead">
                                                    Min Purchase Quantity
                                                </p>
                                                <p className="prodCat">
                                                    {product.MinPurchaseQty} pc
                                                </p>
                                                <p className="minQtyHead rfhead">
                                                    Refund
                                                </p>
                                                <p className="prodCat">
                                                    {product.refund}
                                                </p>
                                            </td>
                                            <td className="responsive-hidden priceBox">
                                                <p className="minQtyHead priceHead">Price</p>
                                                <p className="price">{product.price} /pc</p>
                                                <p className="minQtyHead prePaymentHead">Pre Payment Needed</p>
                                                <p className="prePayment">{product.prePaymentNeeded ? "Yes" : "No"}</p>
                                            </td>
                                            <td className="responsive-hidden discountBox">
                                                <p className="discount">~{product.discount}</p>
                                            </td>
                                            <td className="responsive-hidden availabilityBox">
                                                <p className="availability">{product.availability}</p>
                                            </td>
                                            <td className="responsive-hidden ordersBox">
                                                <p className="minQtyHead preorder">Preorder</p>
                                                <p className="prodCat preOrderNum">{product.preorder}</p>
                                                <p className=" minQtyHead finalOrder">Final Order</p>
                                                <p className="prodCat preOrderNum">{product.finalOrder}</p>
                                            </td>
                                            <td className="responsive-hidden">
                                                <div className="toggle-buttons">
                                                    <div className="toggle-item">
                                                        <span>Publish</span>
                                                        <Switch />
                                                    </div>
                                                    <div className="toggle-item">
                                                        <span>Feature</span>
                                                        <Switch />
                                                    </div>
                                                </div>
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
                                        {expandedRows.includes(product.id) && (
                                            <tr className="responsive-expanded">
                                                <td colSpan="10">
                                                    <div className="expanded-details">
                                                        <p>Product Details: {product.name}, {product.category}, {product.type}, {product.productCreated}</p>
                                                        {/* <p>Product Details: {product.MinPurchaseQty}, {product.refund}</p> */}
                                                        <p>Price: {product.price} /pc, Pre Payment Needed: {product.prePaymentNeeded ? "Yes" : "No"}</p>
                                                        <p>Discount: {product.discount}</p>
                                                        <p>Availability: {product.availability}</p>
                                                        <p>Orders: Preorder: {product.preorder}, Final Order: {product.finalOrder}</p>
                                                        <div className="toggle-buttons">
                                                            <div className="toggle-item">
                                                                <span>Publish</span>
                                                                <Switch />
                                                            </div>
                                                            <div className="toggle-item">
                                                                <span>Feature</span>
                                                                <Switch />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
>>>>>>> 04a5f440b8f8dfac71e1fbb91fa6f5d0a8407d1f
    );
  };

  const handleBulkAction = (action) => {
    if (action === "Delete Selected") {
      setProducts((prevProducts) =>
        prevProducts.filter((product) => !selectedProducts.includes(product.id))
      );
      setSelectedProducts([]);
    }
  };

  const toggleRowExpansion = (productId) => {
    if (expandedRows.includes(productId)) {
      setExpandedRows(expandedRows.filter((id) => id !== productId));
    } else {
      setExpandedRows([...expandedRows, productId]);
    }
  };

  const toggleProductStatus = (productId, field) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, [field]: !product[field] }
          : product
      )
    );
  };

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  // Filter products based on the active filter
  const filteredProducts = products.filter((product) => {
    // Apply active filter
    if (activeFilter === "Inhouse") {
      return product.type === "In-House";
    }
    if (activeFilter === "Sellers") {
      return product.type !== "In-House";
    }
    if (activeFilter === "Published") {
      return product.publish;
    }
    if (activeFilter === "Unpublished") {
      return !product.publish;
    }
    if (activeFilter === "Discounted") {
      return product.discount !== "0%";
    }

    // Default to "All"
    return true;
  });

  return (
    <div className="PreorderProducts ma10">
      <div className="preOrderProductsBox">
        <div className="preOrderProductsHeader">
          <p className="allCustomersHead">All Preorder Products</p>
          <button className="allCustomersButton preOrderHeaderButton">
            Add New Product
          </button>
        </div>
        <div className="preOrderProductsLower">
          <div className="preOrderProductsLowerHead">
            <div className="poplh1">
              <div className="poph1menuleft">
                <button
                  className={`poph1menuitem ${
                    activeFilter === "All" ? "popActive" : ""
                  }`}
                  onClick={() => setActiveFilter("All")}
                >
                  All ({products.length})
                </button>
                <button
                  className={`poph1menuitem ${
                    activeFilter === "Inhouse" ? "popActive" : ""
                  }`}
                  onClick={() => setActiveFilter("Inhouse")}
                >
                  Inhouse (
                  {products.filter((p) => p.type === "In-House").length})
                </button>
                <button
                  className={`poph1menuitem ${
                    activeFilter === "Sellers" ? "popActive" : ""
                  }`}
                  onClick={() => setActiveFilter("Sellers")}
                >
                  Sellers (
                  {products.filter((p) => p.type !== "In-House").length})
                </button>
                <button
                  className={`poph1menuitem ${
                    activeFilter === "Published" ? "popActive" : ""
                  }`}
                  onClick={() => setActiveFilter("Published")}
                >
                  Published ({products.filter((p) => p.publish).length})
                </button>
                <button
                  className={`poph1menuitem ${
                    activeFilter === "Unpublished" ? "popActive" : ""
                  }`}
                  onClick={() => setActiveFilter("Unpublished")}
                >
                  Unpublished ({products.filter((p) => !p.publish).length})
                </button>
                <button
                  className={`poph1menuitem ${
                    activeFilter === "Discounted" ? "popActive" : ""
                  }`}
                  onClick={() => setActiveFilter("Discounted")}
                >
                  Discounted (
                  {products.filter((p) => p.discount !== "0%").length})
                </button>
              </div>
            </div>
            <div className="poplh2">
              <div className="lower-menu">
                <FilterComponent
                  title="All Products"
                  filterConfig={{
                    price: {
                      label: "Sort By Price",
                      options: ["All", "High", "Low"],
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
              </div>
            </div>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th className="responsive-visible"></th>
                  <th>
                    <input
                      type="checkbox"
                      checked={
                        selectedProducts.length > 0 &&
                        selectedProducts.length === products.length
                      }
                      onChange={(e) => handleSelectAll(e.target.checked)}
                    />
                  </th>
                  <th>Image</th>
                  <th className="responsive-hidden">Product Details</th>
                  <th className="responsive-hidden">Product Details</th>
                  <th className="responsive-hidden">Price</th>
                  <th className="responsive-hidden">Discount</th>
                  <th className="responsive-hidden">Availability</th>
                  <th className="responsive-hidden">Orders</th>
                  <th className="responsive-hidden">Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <React.Fragment key={product.id}>
                      <tr>
                        <td></td>
                        <td className="responsive-visible">
                          <Plus
                            onClick={() => toggleRowExpansion(product.id)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={selectedProducts.includes(product.id)}
                            onChange={() => handleSelectProduct(product.id)}
                          />
                        </td>
                        <td>
                          <img src={product.image} alt="" className="prodImg" />
                        </td>
                        <td className="responsive-hidden productDetails">
                          <p className="prodName">{product.name}</p>
                          <p className="catHead">Category</p>
                          <p className="prodCat">{product.category}</p>
                          <p className="manufacturer">{product.type}</p>
                          <p className="prodCat">
                            Product Created : {product.productCreated}
                          </p>
                        </td>
                        <td className="responsive-hidden quantityBox">
                          <p className="minQtyHead">Min Purchase Quantity</p>
                          <p className="prodCat">{product.MinPurchaseQty} pc</p>
                          <p className="minQtyHead rfhead">Refund</p>
                          <p className="prodCat">{product.refund}</p>
                        </td>
                        <td className="responsive-hidden priceBox">
                          <p className="minQtyHead priceHead">Price</p>
                          <p className="price">{product.price} /pc</p>
                          <p className="minQtyHead prePaymentHead">
                            Pre Payment Needed
                          </p>
                          <p className="prePayment">
                            {product.prePaymentNeeded ? "Yes" : "No"}
                          </p>
                        </td>
                        <td className="responsive-hidden discountBox">
                          <p className="discount">~{product.discount}</p>
                        </td>
                        <td className="responsive-hidden availabilityBox">
                          <p
                            className={`availability ${
                              product.availability === "Available Now"
                                ? "available"
                                : "not-available"
                            }`}
                          >
                            {product.availability}
                          </p>
                        </td>
                        <td className="responsive-hidden ordersBox">
                          <p className="minQtyHead preorder">Preorder</p>
                          <p className="prodCat preOrderNum">
                            {product.preorder}
                          </p>
                          <p className="minQtyHead finalOrder">Final Order</p>
                          <p className="prodCat preOrderNum">
                            {product.finalOrder}
                          </p>
                        </td>
                        <td className="responsive-hidden">
                          <div className="toggle-buttons">
                            <div className="toggle-item">
                              <span>Publish</span>
                              <Switch
                                checked={product.publish}
                                onChange={() =>
                                  toggleProductStatus(product.id, "publish")
                                }
                              />
                            </div>
                            <div className="toggle-item">
                              <span>Feature</span>
                              <Switch
                                checked={product.featured}
                                onChange={() =>
                                  toggleProductStatus(product.id, "featured")
                                }
                              />
                            </div>
                          </div>
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
                      {expandedRows.includes(product.id) && (
                        <tr className="responsive-expanded">
                          <td colSpan="10">
                            <div className="expanded-details">
                              <table>
                                <thead>
                                  <tr>
                                    <th>Product Details</th>
                                    <th>Price</th>
                                    <th>Discount</th>
                                    <th>Availability</th>
                                    <th>Orders</th>
                                    <th>Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      {product.name}, {product.category},{" "}
                                      {product.type}, {product.productCreated}
                                    </td>
                                    <td>
                                      {product.price} /pc, Pre Payment Needed:{" "}
                                      {product.prePaymentNeeded ? "Yes" : "No"}
                                    </td>
                                    <td>{product.discount}</td>
                                    <td>{product.availability}</td>
                                    <td>
                                      Preorder: {product.preorder}, Final Order:{" "}
                                      {product.finalOrder}
                                    </td>
                                    <td>
                                      <div className="toggle-buttons">
                                        <div className="toggle-item">
                                          <span>Publish</span>
                                          <Switch />
                                        </div>
                                        <div className="toggle-item">
                                          <span>Feature</span>
                                          <Switch />
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))
                ) : (
                  <tr>
                    <td colSpan="12" className="no-products">
                      No products found matching your criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
