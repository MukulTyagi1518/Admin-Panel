import React, { useState } from 'react';
import { TrendingUp, Star, ShoppingCart, ArrowRight, ChevronDown } from 'lucide-react';
import ProductTable from '../reports/ProductTable';

const BestWeeklyProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const weeklyProducts = [
    { id: '1', product: 'Wireless Earbuds Pro', category: 'Electronics', sales: 342, rating: 4.7, change: '+24%', price: '$89.99', status: 'trending' },
    { id: '2', product: 'Organic Matcha Powder', category: 'Food', sales: 278, rating: 4.9, change: '+18%', price: '$19.99', status: 'trending' },
    { id: '3', product: 'Yoga Mat (Premium)', category: 'Fitness', sales: 195, rating: 4.8, change: '+12%', price: '$49.99', status: 'popular' },
    { id: '4', product: 'Stainless Steel Water Bottle', category: 'Accessories', sales: 421, rating: 4.6, change: '+32%', price: '$24.99', status: 'trending' },
    { id: '5', product: 'LED Desk Lamp', category: 'Home', sales: 156, rating: 4.5, change: '+8%', price: '$39.99', status: 'popular' },
  ];

  const columns = [
    { header: 'Product', accessor: (item) => item.product },
    { header: 'Category', accessor: (item) => item.category },
    { header: 'Sales', accessor: (item) => item.sales.toLocaleString() },
    { header: 'Rating', accessor: (item) => <div className="flex items-center"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />{item.rating}</div> },
    { header: 'Weekly Change', accessor: (item) => <span className={`text-sm font-medium ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{item.change}</span> },
    { header: 'Status', accessor: (item) => item.status === 'trending' ? <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800"><TrendingUp className="w-3 h-3 mr-1" />Trending</span> : <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">Popular</span> },
    { header: 'Price', accessor: (item) => item.price },
   
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Weekly Top Products</h2>
          <p className="text-sm text-gray-500">Best performing products this week</p>
        </div>
        
      </div>

      <ProductTable 
        columns={columns} 
        data={weeklyProducts} 
        currentPage={currentPage} 
        itemsPerPage={itemsPerPage} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
};

export default BestWeeklyProducts;