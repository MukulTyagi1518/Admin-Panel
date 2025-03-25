import { Eye, Edit, EyeIcon, Edit2, ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import "./preOrderProducts.scss";

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

    }
];

export default function PreorderProducts() {

    const [selected, setSelected] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

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
        console.log("Select All Status:", updatedSelected.length === products.length);
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
                    <p className="allCustomersHead">
                        All Preorder Products
                    </p>
                    <button className="allCustomersButton preOrderHeaderButton" >Add New Product</button>
                </div>
                <div className="preOrderProductsLower">
                    <div className="preOrderProductsLowerHead">
                        <div className="poplh1">
                            <div className="poph1menuleft">
                                <p className="poph1menuitem popActive">
                                    All (10)
                                </p>
                                <p className="poph1menuitem">
                                    Inhouse (7)
                                </p>
                                <p className="poph1menuitem">
                                    Sellers (3)
                                </p>
                            </div>
                            <div className="poph1menuright">
                                <p className="poph1menuitem">
                                    Published (7)
                                </p>
                                <p className="poph1menuitem">
                                    Unpublished (3)
                                </p>
                                <p className="poph1menuitem">
                                    Discounted (5)
                                </p>
                            </div>
                        </div>
                        <div className="poplh2">
                            <div className="lower-menu">
                                <div className="bulkButtonBox">
                                    <div className="bulkButton">
                                        <p className="bulkText">Bulk Action</p>
                                        <ChevronDownIcon size={18} />
                                    </div>

                                </div>
                                <div className="bulkButtonBox">
                                    <div className="bulkButton">
                                        <p className="bulkText">Filter by verification status</p>
                                        <ChevronDownIcon size={18} color="grey" />
                                    </div>

                                </div>
                                <input type="text" placeholder="Type email to search" className="searchInput" />
                            </div>
                        </div>
                    </div>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <input
                                            type="checkbox"
                                            checked={selectAll}
                                            onChange={handleSelectAll}
                                        />
                                    </th>
                                    <th>Image</th>

                                    <th className="pstatH">Product Details</th>
                                    <th className="ehead">Product Details</th>

                                    <th className="vstath">Price</th>
                                    <th>Discount</th>
                                    <th>Availability</th>
                                    <th>
                                        Orders
                                    </th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr key={product.id}>
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

                                        <td className="productDetails">
                                            <p className="prodName">
                                                {product.name}

                                            </p>
                                            <p className="catHead">Category</p>
                                            <p className="prodCat">{product.category}</p>
                                            <p className="manufacturer">{product.type}</p>
                                            <p className="prodCat">Product Created : {product.productCreated}</p>
                                        </td>
                                        <td className="quantityBox">
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
                                        <td className="priceBox">
                                            <p className="minQtyHead priceHead">
                                                Price
                                            </p>
                                            <p className="price">
                                                {product.price} /pc
                                            </p>
                                            <p className="minQtyHead prePaymentHead">
                                                Pre Payment Needed
                                            </p>
                                            <p className="prePayment">
                                                {product.prePaymentNeeded ? "Yes" : "No"}
                                            </p>
                                        </td>
                                        <td className="discountBox">
                                            <p className="discount">
                                                ~{product.discount}
                                            </p>
                                        </td>
                                        <td className="availabilityBox" >
                                            <p className="availability">
                                                {product.availability}
                                            </p>
                                        </td>
                                        <td className="ordersBox">
                                            <p className="minQtyHead preorder">
                                                Preorder
                                            </p>
                                            <p className="prodCat preOrderNum">
                                                {product.preorder}
                                            </p>
                                            <p className=" minQtyHead finalOrder">
                                                Final Order
                                            </p>
                                            <p className="prodCat preOrderNum">
                                                {product.finalOrder}
                                            </p>
                                        </td>
                                        <td >
                                            <div className="toggle-buttons">
                                                <div className="toggle-item">
                                                    <span>Publish</span>
                                                    <label className="switch">
                                                        <input
                                                            type="checkbox"
                                                        />
                                                        <span className="slider"></span>
                                                    </label>
                                                </div>
                                                <div className="toggle-item">
                                                    <span>Feature</span>
                                                    <label className="switch">
                                                        <input
                                                            type="checkbox"
                                                        />
                                                        <span className="slider"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </td>
                                        <td >
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
