import { createContext, useContext, useEffect, useState } from "react";
import apiInstance from "../utils/axios";

const CustomerContext = createContext()

export default function CustomerProvider({ children }) {


    const [customers, setCustomers] = useState([])
    const [fetchCustomers, setFetchCustomers] = useState(false)

    useEffect(() => {
        fetchUsers();

    }, [fetchCustomers]);

    const fetchUsers = async () => {
        try {
            const response = await apiInstance.get("/user1/");
            setCustomers(response.data);
            console.log(response.data)
            setFetchCustomers(false)
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };


    return (
        <CustomerContext.Provider value={{ customers, setCustomers, fetchCustomers, setFetchCustomers }} >
            {children}
        </CustomerContext.Provider>
    )
}


export const useCustomerContext = () => {
    return useContext(CustomerContext)
}