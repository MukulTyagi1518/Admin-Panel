import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { TrendingUp } from "lucide-react";
import apiInstance from "../../utils/axios";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: { display: true },
    y: { display: false },
  },
};

function TotalSalesAllTime() {
  const [monthlySales, setMonthlySales] = useState([]);
  const [labels, setLabels] = useState([]);
  const [latestMonthRevenue, setLatestMonthRevenue] = useState(0);
  const [increasePercentage, setIncreasePercentage] = useState(0);

  useEffect(() => {
    const fetchSales = async () => {
      const res = await apiInstance.get("/orders/list"); // ✅ update URL as per your backend
      const orders = res.data;

      const monthlyTotals = Array(12).fill(0);
      orders.forEach(order => {
        const date = new Date(order.createdAt);
        const month = date.getMonth();
        const total = parseFloat(order.items.reduce((acc, item) => acc + parseFloat(item.subtotal), 0));
        monthlyTotals[month] += total;
      });

      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const filteredMonths = monthlyTotals
        .map((val, index) => ({ label: monthNames[index], value: val }))
        .filter(item => item.value > 0);

      const labels = filteredMonths.map(item => item.label);
      const values = filteredMonths.map(item => item.value);

      const last = values[values.length - 1] || 0;
      const prev = values[values.length - 2] || 0;
      const percent = prev ? ((last - prev) / prev) * 100 : 0;

      setLabels(labels);
      setMonthlySales(values);
      setLatestMonthRevenue(last.toFixed(2));
      setIncreasePercentage(percent.toFixed(2));
    };

    fetchSales();
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: monthlySales,
        fill: false,
        borderColor: "#F97316",
        tension: 0.4,
      },
    ],
  };

  const latestMonth = labels[labels.length - 1];

  return (
    <div className="bg-white shadow-sm rounded-2xl p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-2xl font-bold">₹{latestMonthRevenue}</h2>
          <p className="text-[#6c7293]">Total Sales All Time</p>
        </div>
        <div className="text-green-500 font-semibold flex items-center gap-1 mt-2 md:mt-0">
          {increasePercentage}% <TrendingUp />
        </div>
      </div>
      <div className="mt-4">
        <Line data={data} options={options} />
      </div>
      <div className="bg-orange-400 text-white mx-2 my-3 py-2 px-4 rounded-md border-none">
        Sales in {latestMonth} is ₹{latestMonthRevenue}
      </div>
    </div>
  );
}

export default TotalSalesAllTime;
