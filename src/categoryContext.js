import { createContext, useContext, useEffect, useState } from "react";
import api from "./utils/axios.js";

const CategoryContext = createContext();

export default function CategoryProvider({ children }) {
  const [categoryData, setCategoryData] = useState([]);
  const [fetchData, setFetchData] = useState(false)


  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await api.get("/categories/Get-all-categories");

        if (response.data) {
          setCategoryData(response.data);
          setFetchData(false)
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
  }, [fetchData]);

  return (
    <CategoryContext.Provider value={{ categoryData, setCategoryData, fetchData, setFetchData }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategoryContext() {
  return useContext(CategoryContext);
}