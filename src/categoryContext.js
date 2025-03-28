import { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

export default function CategoryProvider({ children }) {
  const [categoryData, setCategoryData] = useState({
    discountDateRange: {
      from: "",
      to: "",
    },
    _id: "",
    name: "",
    // type: "main",
    parentCategory: null,
    // orderingNumber: 1,
    // metaTitle: "Electronics Category",
    // metaDescription: "A collection of electronic devices.",
    // filteringAttributes: ["warranty", "brand", "price"],
    discount: "",
    sallerProduct: false,
    // createdAt: "2025-03-25T07:01:24.445Z",
    // updatedAt: "2025-03-25T07:01:24.445Z",
    // __v: 0,
  });

  return (
    <CategoryContext.Provider value={{ categoryData, setCategoryData }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategoryContext() {
  return useContext(CategoryContext);
}
