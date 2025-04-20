import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';
import apiInstance from '../../utils/axios';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const SalesAnalytics = () => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await apiInstance.get('/orders/list');
        setSales(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching sales');
        setLoading(false);
      }
    };

    fetchSales();
  }, []);

  const calculateQuarterlySales = () => {
    const quarterlySales = [0, 0, 0, 0];
    sales.forEach(order => {
      try {
        const date = new Date(order.createdAt);
        const month = date.getMonth();
        const quarter = Math.floor(month / 3);
        const amount = Number(order.items?.reduce((sum, item) => sum + (parseFloat(item.subtotal) || 0), 0)) || 0;
        quarterlySales[quarter] += amount;
      } catch (e) {
        console.error('Error processing sale:', order, e);
      }
    });
    return quarterlySales;
  };

  const quarterlySales = calculateQuarterlySales();
  const totalSales = quarterlySales.reduce((sum, q) => sum + q, 0);

  const salesData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Sales',
        data: quarterlySales,
        backgroundColor: ['#22C55E', '#3B82F6', '#F59E0B', '#EF4444'],
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw || 0;
            const percentage = totalSales > 0 ? ((value / totalSales) * 100).toFixed(1) : 0;
            return `₹${value.toLocaleString()} (${percentage}%)`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: { display: false },
        title: { display: true, text: 'Quarter' }
      },
      y: {
        beginAtZero: true,
        grid: { display: false },
        title: { display: true, text: 'Amount (₹)' }
      }
    }
  };

  if (loading) return <div className="bg-white shadow-sm rounded-lg p-4">Loading sales data...</div>;
  if (error) return <div className="bg-white shadow-sm rounded-lg p-4 text-red-500">{error}</div>;

  return (
    <div className="bg-white shadow-sm rounded-lg p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Sales Analytics</h2>
        <div className="text-sm text-gray-500">
          Total: <span className="font-bold">₹{totalSales.toLocaleString()}</span>
        </div>
      </div>
      <Bar data={salesData} options={options} />
      <div className="grid grid-cols-4 gap-2 mt-4 text-xs">
        {quarterlySales.map((sale, index) => {
          const percentage = totalSales > 0 ? ((sale / totalSales) * 100).toFixed(1) : 0;
          return (
            <div key={index} className="text-center">
              <div className="font-medium">Q{index + 1}</div>
              <div>₹{sale.toLocaleString()}</div>
              <div className="text-gray-500">{percentage}%</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SalesAnalytics;
