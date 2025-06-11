import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios";

const OrdersContext = createContext()

export default function OrdersProvider({ children }) {


    const [allOrders, setAllOrders] = useState([])
    const [fetchOrdersData, setFetchOrdersData] = useState(false)

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await axios.get('https://e-commerce-backend-1-0.onrender.com/api/orders/list')
            setAllOrders(response.data)
            setFetchOrdersData(false)
        }
        fetchOrders();
    }, [fetchOrdersData])

    console.log(allOrders)


    return (
        <OrdersContext.Provider value={{ allOrders, setAllOrders, fetchOrdersData }} >
            {children}
        </OrdersContext.Provider>
    )
}

export const useOrdersContext = () => {
    return useContext(OrdersContext)
}