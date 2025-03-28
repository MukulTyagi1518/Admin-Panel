import { createContext, useContext, useEffect, useState } from "react";
import api from "./utils/axios.js";

const CategoryContext = createContext();

export default function CategoryProvider({ children }) {
  const [categoryData, setCategoryData] = useState([]);


  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await api.get("/categories/Get-all-categories");

        if (response.data) {
          setCategoryData(response.data);
        }
        else {
          alert("Please start backend server to fetch data")
          setCategoryData([]);
        }
      } catch (error) {
        setCategoryData([]);
      }
    };

    fetchCategoryData();
  }, []);

  return (
    <CategoryContext.Provider value={{ categoryData, setCategoryData }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategoryContext() {
  return useContext(CategoryContext);
}
