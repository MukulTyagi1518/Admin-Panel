import { createContext, useContext, useState } from "react"

const ProductContext = createContext()

export default function ProductProvider({ children }) {

    const [productData, setProductData] = useState({
        // Basic Info
        name: "",
        brand: "",
        unit: "",
        weight: "",
        minPurchaseQty: "",
        tags: [], 
        barcode: "",
        category: [],
        description: "",
        refundable: "",
        refundNote: "",
        featured: "",
        todaysDeal: "",
        flashDeal: {
            addToFlash: "",
            discount: "0",
            discountType: ""
        },
        tax: {
            type: "",
            value: "0"
        },
        vat: {
            type: "",
            value: "0"
        },
        videoProvider: "",
        videoLink: "",
        galleryImages: [],
        thumbnailImage: "",
        pdfSpecification: "",

        // Price & Stock
        colors: [],
        attributes: [],
        unitPrice: "",
        discountDate: "",
        discount: "",
        discountType: "",
        setPoint: "",
        quantity: "",
        sku: "",
        externalLink: "",
        externalLinkButtonText: "",
        lowStockQuantityWarning: "",
        showStockQuantity: "",
        showStockWithTextOnly: "",
        hideStock: "",

        // SEO Meta
        metaTitle: "",
        metaDescription: "",
        metaImage: "",

        // Shipping Configuration
        shippingConfiguration: {
            cashOnDelivery: "",
            freeShipping: "",
            flatRate: "",
            isProductQuantityMultiply: "",
            shippingDays: ""
        },

        // Warranty
        warranty: "",

        // Frequently Bought
        frequentlyBought: {
            selectionType: "",
            products: [],
            category: ""
        }
    });




    return (
        <ProductContext.Provider value={{ productData, setProductData }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () => {
    return useContext(ProductContext)
}