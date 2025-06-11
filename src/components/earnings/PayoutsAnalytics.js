import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';
import axios from 'axios';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const PayoutsAnalytics = () => {
  const [payouts, setPayouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPayouts = async () => {
      try {
        const response = await axios.get('https://e-commerce-backend-1-0.onrender.com/api/payouts');
        setPayouts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching payouts');
        setLoading(false);
      }
    };

    fetchPayouts();
  }, []);

  // Calculate quarterly payouts
  const calculateQuarterlyPayouts = () => {
    const quarterlyPayouts = [0, 0, 0, 0]; // Q1, Q2, Q3, Q4
    
    payouts.forEach(payout => {
      try {
        const date = new Date(payout.date || payout.createdAt || new Date());
        const month = date.getMonth();
        const quarter = Math.floor(month / 3);
        const amount = Number(payout.amount) || 0;
        
        if (quarter >= 0 && quarter <= 3) {
          quarterlyPayouts[quarter] += amount;
        }
      } catch (e) {
        console.error('Error processing payout:', payout, e);
      }
    });

    return quarterlyPayouts;
  };

  const quarterlyPayouts = calculateQuarterlyPayouts();
  const totalPayouts = quarterlyPayouts.reduce((sum, q) => sum + q, 0);

  const payoutsData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Payouts',
        data: quarterlyPayouts,
        backgroundColor: [
          '#22C55E', // Q1 - Green
          '#3B82F6', // Q2 - Blue
          '#F59E0B', // Q3 - Amber
          '#EF4444'  // Q4 - Red
        ],
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
            const percentage = totalPayouts > 0 ? ((value / totalPayouts) * 100).toFixed(1) : 0;
            return `$${value.toLocaleString()} (${percentage}%)`;
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
        grid: { display: false },
        title: { display: true, text: 'Amount (₹)' },
        beginAtZero: true
      }
    },
  };

  if (loading) return <div className="bg-white shadow-sm rounded-lg p-4">Loading payouts data...</div>;
  if (error) return <div className="bg-white shadow-sm rounded-lg p-4 text-red-500">{error}</div>;

  return (
    <div className="bg-white shadow-sm rounded-lg p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Payouts Analytics</h2>
        <div className="text-sm text-gray-500">
          Total: <span className="font-bold">₹{totalPayouts.toLocaleString()}</span>
        </div>
      </div>
      <Bar data={payoutsData} options={options} />
      <div className="grid grid-cols-4 gap-2 mt-4 text-xs">
        {quarterlyPayouts.map((payout, index) => {
          const percentage = totalPayouts > 0 ? ((payout / totalPayouts) * 100).toFixed(1) : 0;
          return (
            <div key={index} className="text-center">
              <div className="font-medium">Q{index + 1}</div>
              <div>₹{payout.toLocaleString()}</div>
              <div className="text-gray-500">{percentage}%</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PayoutsAnalytics;