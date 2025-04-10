import { Eye, Edit, EyeIcon, Edit2, ChevronDownIcon, Plus } from "lucide-react";
import { useState } from "react";
import "./preOrderProducts.scss";
import Switch from "../../Switch";
import React from "react";

const products = [
    {
        id: 0,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrkL5wpayCQbg0c3pEHf9VsDXDUxseYZCDRQ&s",
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
    },
    {
        id: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrkL5wpayCQbg0c3pEHf9VsDXDUxseYZCDRQ&s",
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
        featured: false,
    },
];

export default function PreorderProducts() {
    const [selected, setSelected] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [expandedRows, setExpandedRows] = useState([]);

    const handleCheckboxChange = (user) => {
        let updatedSelected;
        if (selected.some((item) => item.id === user.id)) {
            updatedSelected = selected.filter((item) => item.id !== user.id);
        } else {
            updatedSelected = [...selected, user];
        }

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
                                <p className="poph1menuitem">Published (7)</p>
                                <p className="poph1menuitem">Unpublished (3)</p>
                                <p className="poph1menuitem">Discounted (5)</p>
                            </div>
                            {/* <div className="poph1menuright">
                                <p className="poph1menuitem">Published (7)</p>
                                <p className="poph1menuitem">Unpublished (3)</p>
                                <p className="poph1menuitem">Discounted (5)</p>
                            </div> */}
                        </div>
                        <div className="poplh2">
                            <div className="lower-menu">
                            <select className="filter-dropdown responsive-select">
                                    <option value="">Bulk Action</option>
                                    {/* ... (विकल्प) ... */}
                                </select>
                                <select className="filter-dropdown responsive-select">
                                    <option value="">Filter By Verification status</option>
                                    {/* ... (विकल्प) ... */}
                                </select>
                                <input type="text" placeholder="Type email to search" className="searchInput" />
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
                                                <div className="flex flex-row gap-[.3cm] ">
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
  <tr className="max-[1400px]:table-row hidden">
    <td colSpan="10">
      <div className="p-2 bg-gray-100 rounded-md text-sm">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="font-semibold pr-2">Product Details:</td>
              <td>{product.name}, {product.category}, {product.type}, {product.productCreated}</td>
            </tr>
            <tr>
              <td className="font-semibold pr-2">Price:</td>
              <td>{product.price} /pc</td>
            </tr>
            <tr>
              <td className="font-semibold pr-2">Pre Payment Needed:</td>
              <td>{product.prePaymentNeeded ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <td className="font-semibold pr-2">Discount:</td>
              <td>{product.discount}</td>
            </tr>
            <tr>
              <td className="font-semibold pr-2">Availability:</td>
              <td>{product.availability}</td>
            </tr>
            <tr>
              <td className="font-semibold pr-2">Orders:</td>
              <td>Preorder: {product.preorder}, Final Order: {product.finalOrder}</td>
            </tr>
            <tr>
              <td className="font-semibold pr-2">Status:</td>
              <td>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <span>Publish</span>
                    <Switch />
                  </div>
                  <div className="flex items-center gap-1">
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
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}