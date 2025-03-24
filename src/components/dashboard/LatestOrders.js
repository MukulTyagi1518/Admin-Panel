import { Pen, Trash } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';

const LatestOrders = () => {
  const [orders, setOrders] = useState([
    { id: 1, product: 'Analog Table Clock', image: '', qty: 'x2', date: 'Jan 1, 2021', revenue: '$0.00', netProfit: '$0.00', status: 'Pending' },
    { id: 2, product: 'Basket with handles', image: '', qty: 'x3', date: 'Jan 1, 2021', revenue: '$0.00', netProfit: '$0.00', status: 'Shipping' },
    { id: 3, product: 'Flower vase', image: '', qty: 'x3', date: 'Jan 1, 2021', revenue: '$0.00', netProfit: '$0.00', status: 'Refund' },
    { id: 4, product: 'Deco accessory', image: '', qty: 'x2', date: 'Jan 1, 2021', revenue: '$0.00', netProfit: '$0.00', status: 'Completed' },
    { id: 5, product: 'Pottery Vase', image: '', qty: 'x2', date: 'Jan 1, 2021', revenue: '$0.00', netProfit: '$0.00', status: 'Shipping' },
    { id: 6, product: 'Rose Holdback', image: '', qty: 'x4', date: 'Jan 1, 2021', revenue: '$0.00', netProfit: '$0.00', status: 'Completed' },
    { id: 7, product: 'Table Lamp', image: '', qty: 'x4', date: 'Jan 1, 2021', revenue: '$0.00', netProfit: '$0.00', status: 'Pending' },
    { id: 8, product: 'Wall Clock', image: '', qty: 'x3', date: 'Jan 1, 2021', revenue: '$0.00', netProfit: '$0.00', status: 'Refund' },
    { id: 9, product: 'Flowering Cactus', image: '', qty: 'x2', date: 'Jan 1, 2021', revenue: '$0.00', netProfit: '$0.00', status: 'Completed' },
    { id: 10, product: 'Shell Collection', image: '', qty: 'x4', date: 'Jan 1, 2021', revenue: '$0.00', netProfit: '$0.00', status: 'Completed' }
  ]);

    // Fetch orders from the database
    useEffect(() => {
      const fetchOrders = async () => {
        try {
          const response = await fetch('/api/latest-orders'); 
          const data = await response.json();
          setOrders(data);
        } catch (error) {
          console.error('Failed to fetch orders:', error);
        }
      };
  
      fetchOrders();
    }, []);


  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'text-orange-500';
      case 'Shipping':
        return 'text-blue-500';
      case 'Completed':
        return 'text-green-500';
      case 'Refund':
        return 'text-yellow-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Latest Orders</h2>
        
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Products</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">QTY</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Date</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Revenue</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Net Profit</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Status</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-lg">
                      {order.image}
                    </span>
                    <span className="ml-3 text-sm text-gray-700">{order.product}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-gray-500">{order.qty}</td>
                <td className="py-3 px-4 text-sm text-gray-500">{order.date}</td>
                <td className="py-3 px-4 text-sm text-gray-700 font-medium">{order.revenue}</td>
                <td className="py-3 px-4 text-sm text-gray-700 font-medium">{order.netProfit}</td>
                <td className="py-3 px-4">
                  <span className={`text-sm font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex space-x-5">
                    <Pen className="text-blue-400 hover:text-gray-500"/>
                    <Trash className="text-red-400 hover:text-gray-500"/>
                    <BsThreeDots className="text-black hover:text-gray-600"/>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestOrders;
