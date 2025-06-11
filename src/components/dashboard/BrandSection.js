import { useEffect, useState } from "react";
import { Tag } from "lucide-react";
import axios from "axios";

// Mapping for brand colors
const colorMap = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  purple: "bg-purple-500",
  orange: "bg-orange-500",
  green: "bg-green-500",
};

function BrandSection() {
  const [totalBrands, setTotalBrands] = useState(0);
  const [topBrands, setTopBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get("https://e-commerce-backend-1-0.onrender.com/api/topbrands/list");
        const brands = response.data.brands || [];

        // Calculate total brands
        setTotalBrands(brands.length);

        // Prepare top 3 brands with sample values and colors
        const topThree = brands.slice(0, 3).map((brand, index) => ({
          name: brand,
          color: Object.keys(colorMap)[index % Object.keys(colorMap).length], // Cycle through colors
        }));

        setTopBrands(topThree);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      {/* Section Header */}
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-bold mr-2.5">{totalBrands}</h2>
        <p className="text-[#6c7293]">Total Brands</p>
        <div className="ml-auto">
          <Tag size={24} color="#ccc" aria-label="Brands Tag" />
        </div>
      </div>

      {/* Section Subheader */}
      <h3 className="text-lg font-semibold mb-4">Top Brands</h3>

      {/* Brand List */}
      <div>
        {topBrands.map((brand, index) => (
          <div key={index} className="flex items-center mb-4">
            {/* Brand Indicator */}
            <div
              className={`w-2.5 h-2.5 rounded-full mr-3 ${
                colorMap[brand.color] || "bg-gray-500"
              }`}
            ></div>
            {/* Brand Name */}
            <span className="flex-1 text-[#6c7293]">{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandSection;
