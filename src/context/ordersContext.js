import { createContext, useContext, useEffect, useState } from "react"
import apiInstance from "../utils/axios.js"

const OrdersContext = createContext()

export default function OrdersProvider({ children }) {


    const [allOrders, setAllOrders] = useState([])
    const [fetchOrdersData, setFetchOrdersData] = useState(false)

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await apiInstance.get('/orders/list')
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