import { useEffect, useState } from "react";
import { Grid } from "lucide-react";
import apiInstance from "../../utils/axios";

// Mapping for category colors
const colorMap = {
  red: "bg-red-500",
  orange: "bg-orange-500",
  blue: "bg-blue-500",
};

function CategorySection() {
  const [totalCategories, setTotalCategories] = useState(0);
  const [topCategories, setTopCategories] = useState([]);

  useEffect(() => {
    // Fetch total categories and top 3 categories from the backend
    const fetchCategories = async () => {
      try {
        const response = await apiInstance.get("/categories/summary");
        setTotalCategories(response.data.totalCategories);


        setTopCategories(response.data.topCategories.slice(0, 3));
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      {/* Section Header */}
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-bold mr-2.5">{totalCategories}</h2>
        <p className="text-[#6c7293]">Total Categories</p>
        <div className="ml-auto">
          <Grid size={24} color="#ccc" aria-label="Categories Grid" />
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-4">Top Categories</h3>

      {/* Category List - Showing only top 3 categories */}
      <div>
        {topCategories.map((category, index) => (
          <div key={index} className="flex items-center mb-4">
            {/* Category Indicator */}
            <div
              className={`w-2.5 h-2.5 rounded-full mr-3 ${
                colorMap[category.color] || "bg-gray-500"
              }`}
            ></div>
            {/* Category Name */}
            <span className="flex-1 text-[#6c7293]">{category.name}</span>
            {/* Category Value */}
            <span className="font-bold">{category.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySection;