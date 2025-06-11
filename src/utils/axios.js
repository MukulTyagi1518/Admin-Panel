import axios from "axios"

const apiInstance = axios.create({
    // baseURL: "https://e-commerce-backend-1-0.onrender.com/api",
    baseURL: "https://e-commerce-backend-1-0.onrender.com/api",
    withCredentials: true
})

export default apiInstance 