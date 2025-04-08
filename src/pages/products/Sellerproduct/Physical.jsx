import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { HiOutlineDuplicate } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const ProductTable = () => {

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/editinhouse`); 
};

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Acer Nitro 50 N50-620-UA91 Gaming Desktop",
      seller: "Filon Asset Store",
      image: "https://via.placeholder.com/50",
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
      image: "https://via.placeholder.com/50",
      sales: 9,
      price: 579.0,
      rating: 5,
      stock: "Low",
      published: true,
      approved: false,
      featured: false,
      todayDeal: false,
      expanded: false,
    },
  ]);

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
      <h2 className="text-2xl font-semibold mb-4">All Products</h2>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        {/* Desktop View */}
        <table className="w-full border-collapse hidden md:table">
          <thead>
            <tr className="bg-gray-100 text-left">
            <th className="p-3">
                                <input type="checkbox" className="check25" />
                            </th>
              <th className="p-3">Name</th>
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
            {products.map((product, index) => (
              <tr key={product.id} className="border-b">
                <td className="p-3"><input type="checkbox" className="check25" /></td>
                <td className="p-3 flex border-none mt-3 items-center space-x-2">
                  <img src={product.image} alt={product.name} className="w-10 h-10" />
                  <span>{product.name}</span>
                </td>
                <td className="p-3">{product.seller}</td>
                <td className="p-3">
                  <p><strong>Sales:</strong> {product.sales} times</p>
                  <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
                  <p><strong>Rating:</strong> {product.rating}</p>
                </td>
                <td className="p-3">
                  <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full">{product.stock}</span>
                </td>
                {["todayDeal", "published", "approved", "featured"].map((field) => (
                  <td className="p-3" key={field}>
                    <label className="switch">
                      <input type="checkbox" checked={product[field]} onChange={() => toggleSwitch(product.id, field)} />
                      <span className="slider"></span>
                    </label>
                  </td>
                ))}
                <td className="p-3 flex border-none space-x-2">
                  <button className="bg-green-100 p-2 rounded-full"><FaEye className="text-green-500" /></button>
                  <button className="bg-blue-100 p-2 rounded-full"><FaEdit onClick={() => handleEdit(product.id)} className="text-blue-500" /></button>
                  <button className="bg-red-100 p-2 rounded-full"><FaTrash className="text-red-500" /></button>
                  <button className="bg-yellow-100 p-2 rounded-full"><HiOutlineDuplicate className="text-yellow-500" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile View */}
        <div className="md:hidden">
          {products.map((product) => (
            <div key={product.id} className="border p-3 mb-3 rounded-lg">
              <div className="flex justify-between items-center">
                <button onClick={() => toggleExpand(product.id)} className="p-2">
                  {product.expanded ? <FaMinus /> : <FaPlus />}
                </button>
                <div className="flex items-center space-x-2">
                  <img src={product.image} alt={product.name} className="w-10 h-10" />
                  <span>{product.name}</span>
                </div>
              </div>
              {product.expanded && (
                <div className="mt-2 space-y-2">
                  <div className="flex justify-between"><strong>Added By:</strong><span>{product.seller}</span></div>
                  <div className="flex justify-between"><strong>Sales:</strong><span>{product.sales} times</span></div>
                  <div className="flex justify-between"><strong>Price:</strong><span>${product.price.toFixed(2)}</span></div>
                  <div className="flex justify-between"><strong>Rating:</strong><span>{product.rating}</span></div>
                  <div className="flex justify-between">
                    <strong>Stock:</strong>
                    <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full">{product.stock}</span>
                  </div>
                  {["todayDeal", "published", "approved", "featured"].map((field) => (
                    <div className="flex justify-between" key={field}>
                      <strong>{field}</strong>
                      <label className="switch">
                        <input type="checkbox" checked={product[field]} onChange={() => toggleSwitch(product.id, field)} />
                        <span className="slider"></span>
                      </label>
                    </div>
                  ))}
                  <div className="flex justify-left space-x-2 mt-3">
                    <button className="bg-green-100 p-2 rounded-full"><FaEye className="text-green-500" /></button>
                    <button className="bg-blue-100 p-2 rounded-full"><FaEdit onClick={() => handleEdit(product.id)} className="text-blue-500" /></button>
                    <button className="bg-red-100 p-2 rounded-full"><FaTrash className="text-red-500" /></button>
                    <button className="bg-yellow-100 p-2 rounded-full"><HiOutlineDuplicate className="text-yellow-500" /></button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProductTable;
