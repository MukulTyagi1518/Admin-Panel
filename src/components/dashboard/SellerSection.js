import { useState, useEffect } from "react";
import { Users } from "lucide-react";
import StatCard from "./StatCard";
import { useNavigate } from "react-router-dom";

// Reusable SellerStatusItem component
function SellerStatusItem({ color, label, value }) {
  return (
    <div className="flex items-center my-5">
      <div className={`w-2.5 h-2.5 bg-${color}-500 rounded-full mr-2.5`}></div>
      <span className="flex-1 text-[#6c7293]">{label}</span>
      {value && <span className="font-bold">{value}</span>}
    </div>
  );
}

function SellerSection() {
  const navigate = useNavigate();
  const [totalSellers, setTotalSellers] = useState(0);
  const [approvedSellers, setApprovedSellers] = useState(0);
  const [topSellers, setTopSellers] = useState([]);

  useEffect(() => {
    const fetchSellersData = async () => {
      try {
        const response = await fetch("https://e-commerce-backend-1-0.onrender.com/api/sellers");
        const sellers = await response.json();

        setTotalSellers(sellers.length);
        const filteredSellers = sellers.filter((seller) => !seller.isBanned);
        console.log(filteredSellers);
        setApprovedSellers(filteredSellers.length);

        const sortedSellers = filteredSellers
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 5);

        setTopSellers(sortedSellers);
      } catch (error) {
        console.error("Error fetching sellers data:", error);
      }
    };

    fetchSellersData();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      {/* Total Sellers StatCard */}
      <StatCard
        title="Total sellers"
        value={totalSellers}
        icon={<Users size={24} color="#ccc" aria-label="Total Sellers" />}
      />

      {/* Approved Sellers */}
      <SellerStatusItem
        color="cyan"
        label="Approved Sellers"
        value={approvedSellers}
      />

      {/* Top Sellers */}
      <SellerStatusItem color="yellow" label="Top Sellers" />

      {/* Seller Avatars */}
      <div className="flex gap-2.5 mb-5">
        {topSellers.map((seller) => (
          <div key={seller._id} className="flex flex-col items-center w-16">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-[#f0f0f0]">
              <img
                src={seller.avatar || "/placeholder.svg"}
                alt={seller.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs text-center mt-1">{seller.name}</span>
          </div>
        ))}
      </div>

      {/* Seller Buttons */}
      <div className="flex flex-col gap-2.5 my-10">
        <button
          onClick={() => navigate("/sellers/all")}
          className="flex-1 bg-[#e8f5e9] text-[#4caf50] py-2 px-4 rounded-md border-none cursor-pointer hover:bg-green-400 hover:text-green-50"
        >
          All Sellers
        </button>
        <button className="flex-1 bg-[#ffe2e2] text-[#ff5252] py-2 px-4 rounded-md border border-[#ffebee] cursor-pointer hover:bg-red-400 hover:text-red-50">
          Pending Sellers
        </button>
      </div>
    </div>
  );
}

export default SellerSection;
