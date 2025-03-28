import { createContext, useContext, useEffect, useState } from "react";
import api from "./utils/axios.js";

const CategoryContext = createContext();

export default function CategoryProvider({ children }) {
  const [categoryData, setCategoryData] = useState([]);


  useEffect(() => {
    const fetchCategoryData = async () => {
      const response = await api.get("/categories/Get-all-categories");
      setCategoryData(response.data)

    }

    fetchCategoryData()
  }, [])
  
  console.log(categoryData)


  return (
    <CategoryContext.Provider value={{ categoryData, setCategoryData }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategoryContext() {
  return useContext(CategoryContext);
}
