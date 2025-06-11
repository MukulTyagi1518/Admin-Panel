import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { TrendingUp } from 'lucide-react';
import axios from 'axios';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function Payouts() {
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Safely calculate total payout amount
  const totalPayout = payouts.reduce((sum, payout) => {
    // Convert amount to number if it isn't already
    const amount = Number(payout.amount) || 0;
    return sum + amount;
  }, 0);

  // Debugging: Log the payouts and calculated total
  console.log('Payouts data:', payouts);
  console.log('Calculated total:', totalPayout);

  // Group payouts by month for the chart
  const monthlyPayouts = payouts
  // First sort payouts by date (oldest first)
  .sort((a, b) => new Date(a.date || a.createdAt) - new Date(b.date || b.createdAt))
  // Then reduce to group by month
  .reduce((acc, payout) => {
    try {
      const date = new Date(payout.date || payout.createdAt);
      const month = date.toLocaleString('default', { month: 'short' });
      const monthYear = `${month}`; // Include year to handle same month across years
      const amount = Number(payout.amount) || 0;
      
      if (!acc[monthYear]) {
        acc[monthYear] = 0;
      }
      acc[monthYear] += amount;
      
      return acc;
    } catch (e) {
      console.error('Error processing payout:', payout, e);
      return acc;
    }
  }, {});

// Get sorted months
const sortedMonths = Object.keys(monthlyPayouts)
  .sort((a, b) => {
    // Convert month-year strings back to dates for proper sorting
    const [monthA, yearA] = a.split('-');
    const [monthB, yearB] = b.split('-');
    const dateA = new Date(`${monthA} 1, ${yearA}`);
    const dateB = new Date(`${monthB} 1, ${yearB}`);
    return dateA - dateB;
  });
  const amounts = sortedMonths.map(month => monthlyPayouts[month]);

  // Calculate percentage increase if we have at least 2 months of data
  let increasePercentage = 0;
  if (amounts.length > 1) {
    const latestMonthPayout = amounts[amounts.length - 1] || 0;
    const previousMonthPayout = amounts[amounts.length - 2] || 0;
    increasePercentage = previousMonthPayout !== 0 
      ? ((latestMonthPayout - previousMonthPayout) / previousMonthPayout) * 100
      : 100;
  }

  const chartData = {
    labels: sortedMonths,
    datasets: [
      {
        label: 'Payouts',
        data: amounts,
        fill: false,
        borderColor: '#f54033',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: true,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white shadow-sm rounded-lg p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-2xl font-bold">₹{totalPayout.toFixed(2)}</h2>
          <p className="text-[#6c7293]">Total Payouts</p>
        </div>
        {amounts.length > 1 && (
          <div className={`font-semibold flex items-center gap-1 mt-2 md:mt-0 ${increasePercentage >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {increasePercentage.toFixed(2)}%
            <TrendingUp className={increasePercentage >= 0 ? '' : 'transform rotate-180'} />
          </div>
        )}
      </div>
      
      {sortedMonths.length > 0 ? (
        <>
          <div className="mt-4">
            <Line data={chartData} options={options} />
          </div>
          <div className="bg-red-500 text-white mx-2 my-3 py-2 px-4 rounded-md border-none">
            {sortedMonths.length > 1 ? `Payouts this month: ₹${amounts[amounts.length - 1].toFixed(2)}` : `Total Payouts: ₹${totalPayout.toFixed(2)}`}
          </div>
        </>
      ) : (
        <div className="mt-4 text-gray-500">No payout data available</div>
      )}
    </div>
  );
}

export default Payouts;