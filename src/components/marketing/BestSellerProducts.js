import React, { useState } from "react";
import { Download, Plus, Star } from "lucide-react";
import ProductTable from "../reports/ProductTable";

const BestSellerProducts = () => {

    const statusBadge = (status) => {
        const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
        switch (status) {
          case "In Stock":
            return <span className={`${baseClasses} bg-green-100 text-green-800`}>{status}</span>;
         
          case "Low Stock":
            return <span className={`${baseClasses} bg-red-100 text-red-800`}>{status}</span>;
          default:
            return <span className={`${baseClasses} bg-gray-100 text-gray-800`}>{status}</span>;
        }
      };

  const bestSellerProducts = [
    { id: "1", product: "Organic Cotton T-Shirt", category: "Apparel", sales: 1245, rating: 4.8, stock: 85, status: "In Stock", price: "$29.99" },
    { id: "2", product: "Wireless Bluetooth Earbuds", category: "Electronics", sales: 892, rating: 4.6, stock: 42, status: "Low Stock", price: "$79.99" },
    { id: "3", product: "Stainless Steel Water Bottle", category: "Accessories", sales: 1567, rating: 4.9, stock: 120, status: "In Stock", price: "$24.99" },
    { id: "4", product: "Yoga Mat (Non-Slip)", category: "Fitness", sales: 723, rating: 4.7, stock: 0, status: "Out of Stock", price: "$39.99" },
    { id: "5", product: "LED Desk Lamp", category: "Home", sales: 1034, rating: 4.5, stock: 65, status: "In Stock", price: "$49.99" },
    { id: "1", product: "Organic Cotton T-Shirt", category: "Apparel", sales: 1245, rating: 4.8, stock: 85, status: "In Stock", price: "$29.99" },
    { id: "2", product: "Wireless Bluetooth Earbuds", category: "Electronics", sales: 892, rating: 4.6, stock: 42, status: "Low Stock", price: "$79.99" },
    { id: "3", product: "Stainless Steel Water Bottle", category: "Accessories", sales: 1567, rating: 4.9, stock: 120, status: "In Stock", price: "$24.99" },
    { id: "4", product: "Yoga Mat (Non-Slip)", category: "Fitness", sales: 723, rating: 4.7, stock: 0, status: "Out of Stock", price: "$39.99" },
    { id: "5", product: "LED Desk Lamp", category: "Home", sales: 1034, rating: 4.5, stock: 65, status: "In Stock", price: "$49.99" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const columns = [
    { header: "Product", accessor: (item) => item.product },
    { header: "Category", accessor: (item) => item.category },
    { header: "Sales", accessor: (item) => item.sales.toLocaleString() },
    { header: "Rating", accessor: (item) => <div className="flex items-center"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />{item.rating}</div> },
    { header: "Stock", accessor: (item) => item.stock },
    { header: "Status", accessor: (item) => statusBadge(item.status) },
    { header: "Price", accessor: (item) => item.price },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Best Selling Products</h2>
      </div>

      <ProductTable 
        columns={columns} 
        data={bestSellerProducts} 
        currentPage={currentPage} 
        itemsPerPage={itemsPerPage} 
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default BestSellerProducts;