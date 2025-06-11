import { useState, useEffect } from 'react';
import { FaBox, FaClock, FaCheck, FaTruck, FaCheckDouble, FaBan, FaUndo, FaTimesCircle } from 'react-icons/fa';
import axios from 'axios';

const StatCard = ({ icon: Icon, title, value, color }) => (
  <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-center gap-4">
      <div className={`p-3 rounded-full ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  </div>
);

const OrderStatistics = () => {
  const [stats, setStats] = useState([
    { icon: FaBox, title: 'Total Orders', value: 0, color: 'bg-red-400' },
    { icon: FaClock, title: 'Pending', value: 0, color: 'bg-yellow-400' },
    { icon: FaCheck, title: 'Confirmed', value: 0, color: 'bg-green-400' },
    { icon: FaTruck, title: 'Picked Up', value: 0, color: 'bg-blue-400' },
    { icon: FaCheckDouble, title: 'Delivered', value: 0, color: 'bg-purple-400' },
    { icon: FaBan, title: 'Canceled', value: 0, color: 'bg-red-400' },
    { icon: FaUndo, title: 'Returned', value: 0, color: 'bg-blue-300' },
    { icon: FaTimesCircle, title: 'Rejected', value: 0, color: 'bg-red-500' }
  ]);

  useEffect(() => {
    const fetchOrderStats = async () => {
      try {
        const response = await axios.get('https://e-commerce-backend-1-0.onrender.com/api/orders/list');
        const orders = response.data;

        const statusCounts = {
          totalOrders: orders.length,
          pending: 0,
          confirmed: 0,
          pickedup: 0,
          delivered: 0,
          canceled: 0,
          returned: 0,
          rejected: 0,
        };

        orders.forEach((order) => {
          switch (order.DeliveryStatus.toLowerCase()) {
            case 'pending':
              statusCounts.pending++;
              break;
            case 'confirmed':
              statusCounts.confirmed++;
              break;
            case 'picked up':
              statusCounts.pickedup++;
              break;
            case 'delivered':
              statusCounts.delivered++;
              break;
            case 'canceled':
              statusCounts.canceled++;
              break;
            case 'returned':
              statusCounts.returned++;
              break;
            case 'rejected':
              statusCounts.rejected++;
              break;
            default:
              break;
          }
        });

        setStats([
          { icon: FaBox, title: 'Total Orders', value: statusCounts.totalOrders, color: 'bg-red-400' },
          { icon: FaClock, title: 'Pending', value: statusCounts.pending, color: 'bg-yellow-400' },
          { icon: FaCheck, title: 'Confirmed', value: statusCounts.confirmed, color: 'bg-green-400' },
          { icon: FaTruck, title: 'Picked Up', value: statusCounts.pickedup, color: 'bg-blue-400' },
          { icon: FaCheckDouble, title: 'Delivered', value: statusCounts.delivered, color: 'bg-purple-400' },
          { icon: FaBan, title: 'Canceled', value: statusCounts.canceled, color: 'bg-red-400' },
          { icon: FaUndo, title: 'Returned', value: statusCounts.returned, color: 'bg-blue-300' },
          { icon: FaTimesCircle, title: 'Rejected', value: statusCounts.rejected, color: 'bg-red-500' }
        ]);
      } catch (error) {
        console.error('Error fetching order statistics:', error);
      }
    };

    fetchOrderStats();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Order Statistics</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            title={stat.title}
            value={stat.value}
            color={stat.color}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderStatistics;