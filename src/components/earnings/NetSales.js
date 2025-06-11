import React, { useMemo, useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";

// Register ChartJS once globally
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TIME_FILTERS = ["All", "Today", "Week", "Month", "Year"];

const NetSales = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeFilter, setTimeFilter] = useState("Month");
  const [salesData, setSalesData] = useState({
    productSales: 0,
    commission: 0,
    sellerAds: 0,
    delivery: 0
  });
  const [commissionPercent, setCommissionPercent] = useState(0.1); // Default 10%

  useEffect(() => {
    const fetchCommission = async () => {
      try {
        const res = await axios.get("https://e-commerce-backend-1-0.onrender.com/api/seller-commission");
        const commissionData = res.data[0];
        if (commissionData?.fixedCommissionRate?.sellerCommission) {
          setCommissionPercent(commissionData.fixedCommissionRate.sellerCommission / 100);
        }
      } catch (err) {
        console.error("Failed to fetch commission rate", err);
      }
    };

    const fetchOrders = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://e-commerce-backend-1-0.onrender.com/api/orders/list");
        setOrders(res.data);
        calculateSales(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCommission();
    fetchOrders();
  },[calculateSales] );

  useEffect(() => {
    if (orders.length > 0) {
      calculateSales(orders);
    }
  }, [timeFilter, orders, commissionPercent, calculateSales]);

  const calculateSales = (ordersData) => {
    let filteredOrders = [...ordersData];
    const now = new Date();

    if (timeFilter === "Today") {
      const today = new Date(now.setHours(0, 0, 0, 0));
      filteredOrders = filteredOrders.filter(order => new Date(order.createdAt) >= today);
    } else if (timeFilter === "Week") {
      const oneWeekAgo = new Date(now.setDate(now.getDate() - 7));
      filteredOrders = filteredOrders.filter(order => new Date(order.createdAt) >= oneWeekAgo);
    } else if (timeFilter === "Month") {
      const oneMonthAgo = new Date(now.setMonth(now.getMonth() - 1));
      filteredOrders = filteredOrders.filter(order => new Date(order.createdAt) >= oneMonthAgo);
    } else if (timeFilter === "Year") {
      const oneYearAgo = new Date(now.setFullYear(now.getFullYear() - 1));
      filteredOrders = filteredOrders.filter(order => new Date(order.createdAt) >= oneYearAgo);
    }

    const productSales = filteredOrders.reduce((total, order) => {
      const orderTotal = order.items.reduce(
        (sum, item) => sum + item.priceSale * item.quantity,
        0
      );
      return total + orderTotal;
    }, 0);

    const commission = productSales * commissionPercent;
    const sellerAds = filteredOrders.length * 9.99;
    const delivery = filteredOrders.length * 4.99;

    setSalesData({ productSales, commission, sellerAds, delivery });
  };

  const chartOptions = useMemo(() => ({
    responsive: true,
    indexAxis: 'y',
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: `Sales Breakdown (${timeFilter})`,
        font: { size: 16 }
      }
    },
    scales: {
      x: {
        grid: { display: false },
        title: { display: true, text: 'Amount (₹)' }
      },
      y: { grid: { display: false } }
    }
  }), [timeFilter]);

  const chartData = useMemo(() => ({
    labels: ["Product Sales", "Commission", "Seller Ads", "Delivery"],
    datasets: [{
      data: [
        salesData.productSales,
        salesData.commission,
        salesData.sellerAds,
        salesData.delivery
      ],
      backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6"],
    }]
  }), [salesData]);

  if (loading) return <div className="p-4 text-center">Loading sales data...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div>
          <h2 className="text-xl font-bold">Net Sales</h2>
          <p className="text-[#6c7293]">By Sales Category</p>
        </div>
        <div className="flex space-x-2 mt-2 md:mt-0">
          {TIME_FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setTimeFilter(filter)}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                timeFilter === filter
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">Product Sales</p>
          <p className="text-xl font-bold">₹{salesData.productSales.toFixed(2)}</p>
        </div>
        <div className="bg-green-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">Commission ({(commissionPercent * 100).toFixed(0)}%)</p>
          <p className="text-xl font-bold">₹{salesData.commission.toFixed(2)}</p>
        </div>
        <div className="bg-yellow-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">Seller Ads</p>
          <p className="text-xl font-bold">₹{salesData.sellerAds.toFixed(2)}</p>
        </div>
        <div className="bg-purple-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">Delivery</p>
          <p className="text-xl font-bold">₹{salesData.delivery.toFixed(2)}</p>
        </div>
      </div>

      <div className="h-64 md:h-80">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default NetSales;
