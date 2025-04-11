import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { TfiDownload } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import Switch from "../../../components/Switch";

const ProductTable = () => {

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/editinhouse`);
  }

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Microsoft Windows 10 Pro",
      image: "https://via.placeholder.com/50",
      price: 35.0,
      todayDeal: false,
      published: true,
      featured: false,
      expanded: false,
    },
    {
      id: 2,
      name: "Grand Theft Auto V - Premium Online Edition",
      image: "https://via.placeholder.com/50",
      price: 25.0,
      todayDeal: false,
      published: true,
      featured: false,
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
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Digital Products</h2>

        <button className="bg-purple-500 text-white px-4 py-2 rounded-full ml-auto">
          Add New Digital Product
        </button>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        {/* Desktop View */}
        <table className="w-full border-collapse hidden md:table">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3">Photo</th>
              <th className="p-3">Base Price</th>
              <th className="p-3">Today's Deal</th>
              <th className="p-3">Published</th>
              <th className="p-3">Featured</th>
              <th className="p-3">Options</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id} className="border-b">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{product.name}</td>
                <td className="p-3"><img src={product.image} alt={product.name} className="w-10 h-10" /></td>
                <td className="p-3">${product.price.toFixed(2)}</td>
                {['todayDeal', 'published', 'featured'].map((field) => (
                  <td className="p-3" key={field}>
                    <label className="switch">
                      {/* <input type="checkbox" checked={product[field]} onChange={() => toggleSwitch(product.id, field)} /> */}
                      <Switch checked={product[field]} onChange={() => toggleSwitch(product.id, field)} />
                      {/* <span className="slider round"></span> */}
                    </label>
                  </td>
                ))}
                <td className="p-3 flex border-none space-x-2">
                  <button className="bg-green-100 p-2 rounded-full"><TfiDownload className="text-green-500" /></button>
                  <button className="bg-blue-100 p-2 rounded-full"><FaEdit onClick={() => handleEdit(product.id)} className="text-blue-500" /></button>
                  <button className="bg-red-100 p-2 rounded-full"><FaTrash className="text-red-500" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile View */}
        <div className="md:hidden">
          {products.map((product) => (
            <div key={product.id} className="border p-3 mb-3 rounded-lg">
              <div className="flex items-center">
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
                  <div className="flex justify-between">
                    <strong>Base Price:</strong>
                    <span>${product.price.toFixed(2)}</span>
                  </div>
                  {['todayDeal', 'published', 'featured'].map((field) => (
                    <div className="flex justify-between items-end pr-2" key={field}>
                      <strong>{field}</strong>
                      <div className="ml-auto">
                        <Switch
                          checked={product[field]}
                          onChange={() => toggleSwitch(product.id, field)}
                        />
                      </div>
                    </div>
                  ))}


                  <div className="flex justify-left space-x-2 mt-3">
                    <button className="bg-green-100 p-2 rounded-full"><TfiDownload className="text-green-500" /></button>
                    <button className="bg-blue-100 p-2 rounded-full"><FaEdit onClick={() => handleEdit(product.id)} className="text-blue-500" /></button>
                    <button className="bg-red-100 p-2 rounded-full"><FaTrash className="text-red-500" /></button>
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