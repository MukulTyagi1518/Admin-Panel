"use client";
import { TrendingUp } from "lucide-react";
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
import { useMemo } from "react";
import { useCustomerContext } from "../../context/customerContext";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function CustomerSection() {
  const { customers } = useCustomerContext();

  // Process customer data to get monthly counts
  const monthlyCustomerData = useMemo(() => {
    const monthlyCounts = Array(12).fill(0); // Initialize array for 12 months
    
    customers.forEach(customer => {
      if (customer.createdAt) {
        const month = new Date(customer.createdAt).getMonth(); // 0-11
        monthlyCounts[month]++;
      }
    });

    // Convert to cumulative counts
    for (let i = 1; i < monthlyCounts.length; i++) {
      monthlyCounts[i] += monthlyCounts[i - 1];
    }

    return monthlyCounts;
  }, [customers]);

  // Calculate derived data
  const { totalCustomers, increasePercentage } = useMemo(() => {
    if (monthlyCustomerData.length === 0) return { totalCustomers: 0, increasePercentage: 0 };

    const totalCustomers = monthlyCustomerData[monthlyCustomerData.length - 1];
    const previousTotal = monthlyCustomerData.length > 1 
      ? monthlyCustomerData[monthlyCustomerData.length - 2] 
      : 0;
    
    const increasePercentage = previousTotal > 0 
      ? ((totalCustomers - previousTotal) / previousTotal) * 100 
      : 100;

    return { 
      totalCustomers, 
      increasePercentage: Math.max(0, increasePercentage) // Ensure no negative percentages
    };
  }, [monthlyCustomerData]);

  // Chart data configuration
  const chartData = useMemo(() => ({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        data: monthlyCustomerData,
        borderColor: "#ffb433",
        backgroundColor: "rgba(255, 180, 51, 0.2)",
        tension: 0.4,
        fill: true,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 5,
      },
    ],
  }), [monthlyCustomerData]);

  // Chart options configuration
  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `Customers: ${context.raw}`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#6b7280" },
      },
      y: {
        grid: { display: false },
        ticks: { 
          color: "#6b7280",
          precision: 0,
          callback: function(value) {
            if (value % 1 === 0) {
              return value;
            }
          }
        },
        beginAtZero: true,
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  }), []);

  return (
    <div className="bg-white rounded-lg shadow-sm p-5 h-full flex flex-col">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-3">
        <StatCard title="Total Customers" value={totalCustomers} />
        <div className={`${increasePercentage >= 0 ? 'text-green-500' : 'text-red-500'} font-semibold flex items-center gap-1`}>
          {increasePercentage.toFixed(2)}%
          <TrendingUp size={16} />
        </div>
      </div>

      {/* Customer Growth Chart */}
      <div className="mt-4 ">
        {monthlyCustomerData.length > 0 ? (
          <Line 
            data={chartData} 
            options={options}
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <div className="h-full flex items-center justify-center">
            <p className="text-gray-500">No customer data available</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomerSection;