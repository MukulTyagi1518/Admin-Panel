import React, { useEffect, useState } from "react";
import StatCard from "./StatCard";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Reusable SalesBreakdownItem component
function SalesBreakdownItem({ color, label, value }) {
  return (
    <div className="flex items-center mb-3">
      <div className={`w-2.5 h-2.5 bg-${color}-500 rounded-full mr-2.5`}></div>
      <span className="flex-1 text-[#6c7293]">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  );
}

function SalesSection() {
  const [salesData, setSalesData] = useState([]);
  const [totalSales, setTotalSales] = useState(0);

  useEffect(() => {
    const fetchSales = async () => {
      const res = await axios.get("https://e-commerce-backend-1-0.onrender.com/api/orders/list");
      const orders = res.data;

      const monthlyTotals = Array(12).fill(0);
      orders.forEach(order => {
        const date = new Date(order.createdAt);
        const month = date.getMonth();
        const total = order.items.reduce((acc, item) => acc + parseFloat(item.subtotal), 0);
        monthlyTotals[month] += total;
      });

      const yearlyTotal = monthlyTotals.reduce((acc, val) => acc + val, 0);
      setSalesData(monthlyTotals);
      setTotalSales(yearlyTotal);
    };

    fetchSales();
  }, []);

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        data: salesData,
        borderColor: "#1a237e",
        backgroundColor: "rgba(26, 35, 126, 0.1)",
        tension: 0.4,
        fill: true,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        grid: { display: false },
      },
    },
  };

  const currentMonthIndex = new Date().getMonth();
  const latestMonthSales = salesData[currentMonthIndex] || 0;
  
  return (
    <div className="bg-cyan-50 rounded-lg shadow-sm p-5">
      <StatCard
        title="Total Sales"
        value={`₹${(totalSales / 1000).toFixed(1)}K`}
        color="#0095ff"
      />

      <div className="text-cyan-400 rounded-md p-4 mb-5">
        <h3 className="text-lg font-semibold">Sales this month</h3>
        <div className="text-2xl font-bold">₹{latestMonthSales.toFixed(2)}</div>
      </div>

      <div className="mb-5">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Sales Stat</h3>
        </div>
        <div>
          <Line data={chartData} options={options} aria-label="Sales Chart" />
        </div>
      </div>

      <div>
        <SalesBreakdownItem color="purple" label="In-house Sales" value="₹0.000" />
        <SalesBreakdownItem color="red" label="Sellers Sales" value="₹0.000" />
      </div>
    </div>
  );
}

export default SalesSection;
