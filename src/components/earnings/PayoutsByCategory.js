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
import apiInstance from "../../utils/axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TIME_FILTERS = ["All", "Today", "Week", "Month"];

const PayoutsByCategory = () => {
  const [payouts, setPayouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeFilter, setTimeFilter] = useState("Month");
  const [payoutsData, setPayoutsData] = useState({
    sellerPayout: 0,
    productRefund: 0,
    deliveryBoy: 0
  });

  useEffect(() => {
    const fetchPayouts = async () => {
      try {
        setLoading(true);
        const res = await apiInstance.get("/payouts");
        setPayouts(res.data);
        calculatePayouts(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPayouts();
  }, []);

  useEffect(() => {
    if (payouts.length > 0) {
      calculatePayouts(payouts);
    }
  }, [timeFilter, payouts]);

  const calculatePayouts = (payoutsData) => {
    let filteredPayouts = [...payoutsData];
    const now = new Date();

    if (timeFilter === "Today") {
      const today = new Date(now.setHours(0, 0, 0, 0));
      filteredPayouts = filteredPayouts.filter(payout => new Date(payout.createdAt) >= today);
    } else if (timeFilter === "Week") {
      const oneWeekAgo = new Date(now.setDate(now.getDate() - 7));
      filteredPayouts = filteredPayouts.filter(payout => new Date(payout.createdAt) >= oneWeekAgo);
    } else if (timeFilter === "Month") {
      const oneMonthAgo = new Date(now.setMonth(now.getMonth() - 1));
      filteredPayouts = filteredPayouts.filter(payout => new Date(payout.createdAt) >= oneMonthAgo);
    }

    const sellerPayout = filteredPayouts
      .filter(payout => payout.type === "seller")
      .reduce((total, payout) => total + payout.amount, 0);

    const productRefund = filteredPayouts
      .filter(payout => payout.type === "refund")
      .reduce((total, payout) => total + payout.amount, 0);

    const deliveryBoy = filteredPayouts
      .filter(payout => payout.type === "delivery")
      .reduce((total, payout) => total + payout.amount, 0);

    setPayoutsData({ sellerPayout, productRefund, deliveryBoy });
  };

  const chartOptions = useMemo(() => ({
    responsive: true,
    indexAxis: 'y',
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: `Payouts Breakdown (${timeFilter})`,
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
    labels: ["Seller Payout", "Product Refund", "Delivery Boy"],
    datasets: [{
      data: [
        payoutsData.sellerPayout,
        payoutsData.productRefund,
        payoutsData.deliveryBoy
      ],
      backgroundColor: ["#3b82f6", "#10b981", "#f59e0b"],
    }]
  }), [payoutsData]);

  if (loading) return <div className="p-4 text-center">Loading payouts data...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div>
          <h2 className="text-xl font-bold">Payouts</h2>
          <p className="text-[#6c7293]">By Expense Category</p>
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">Seller Payout</p>
          <p className="text-xl font-bold">₹{payoutsData.sellerPayout.toFixed(2)}</p>
        </div>
        <div className="bg-green-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">Product Refund</p>
          <p className="text-xl font-bold">₹{payoutsData.productRefund.toFixed(2)}</p>
        </div>
        <div className="bg-yellow-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">Delivery Boy</p>
          <p className="text-xl font-bold">₹{payoutsData.deliveryBoy.toFixed(2)}</p>
        </div>
      </div>

      <div className="h-64 md:h-80">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default PayoutsByCategory;