import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CustomerContext = createContext()

export default function CustomerProvider({ children }) {


    const [customers, setCustomers] = useState([])
    const [fetchCustomers, setFetchCustomers] = useState(false)

    useEffect(() => {
        fetchUsers();

    }, [fetchCustomers]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get("https://e-commerce-backend-1-0.onrender.com/api/user1");
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