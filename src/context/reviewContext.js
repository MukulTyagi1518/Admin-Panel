import { createContext, useEffect, useState } from "react";

const ReviewContext = createContext()

export default function ReviewProvider({ children }) {


    const [allReviews, setAllReviews] = useState([])

    useEffect(() => {
        const fetchReviews = () => {
                    
        }


        fetchReviews()
    }, [])



    return (
        <ReviewContext.Provider value={{
            allReviews, setAllReviews
        }} >
            {children}
        </ReviewContext.Provider>
    )
}