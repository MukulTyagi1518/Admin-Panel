import React, { useEffect, useState } from "react";
import FilterButton from "./FilterButton";

const filterOptions = ["All", "Today", "Week", "Month"];

const TopSellerAndProducts = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/productreviews");
        const data = await response.json();
        const sortedProducts = [...data].sort((a, b) => b.rating - a.rating);
        setAllProducts(sortedProducts);
      } catch (error) {
        console.error("Error fetching product reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    const now = new Date();

    const filtered = allProducts.filter((product) => {
      const reviewDate = new Date(product.date);

      switch (activeFilter) {
        case "Today":
          return reviewDate.toDateString() === now.toDateString();
        case "Week":
          const weekAgo = new Date();
          weekAgo.setDate(now.getDate() - 7);
          return reviewDate >= weekAgo;
        case "Month":
          const monthAgo = new Date();
          monthAgo.setMonth(now.getMonth() - 1);
          return reviewDate >= monthAgo;
        default:
          return true;
      }
    });

    const sortedFiltered = filtered.sort((a, b) => b.rating - a.rating);
    setFilteredProducts(sortedFiltered.slice(0, 6));
  }, [activeFilter, allProducts]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm overflow-y-auto">
      <h2 className="text-lg font-semibold text-gray-800 py-2">Top Rated Products</h2>
      <div className="text-gray-500 text-sm mb-2">By User Reviews</div>

      <div className="flex flex-wrap gap-2 my-2">
        {filterOptions.map((option) => (
          <FilterButton
            key={option}
            option={option}
            activeFilter={activeFilter}
            onClick={setActiveFilter}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="flex justify-between items-center border p-3 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <img
                src={product.reviewImages?.[0]}
                alt={product.product}
                className="w-12 h-12 object-cover rounded"
              />
              <div>
                <div className="font-medium text-gray-800">{product.product}</div>
                <div className="text-sm text-gray-500">
                  Rated: {product.rating} ⭐
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-500">{product.customReviewerName}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellerAndProducts;
