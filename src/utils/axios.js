import axios from "axios"

const instance = axios.create({
    baseURL: "https://e-commerce-backend-5oow.onrender.com/api",
    withCredentials: true
})

export default instance 