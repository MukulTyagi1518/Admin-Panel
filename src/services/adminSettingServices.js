//import axios from "../utils/axios";
import axios from "axios";
export const AdminSettingsService = {

    // VAT and TaxH

    createVatTax: async (name) => {
        await axios.post('https://e-commerce-backend-1-0.onrender.com/api/vatTax/create', {
            name
        })
            .then(() => {
                alert("Tax created!!")
            })
            .catch((err) => {
                console.log(err)
            })
    },
    getVatTax: async (setTaxData, fetchVatTaxes, setFetchVatTaxes) => {
        const response = await axios.get('/vatTax/getAll');
        setTaxData(response.data.data)
        setFetchVatTaxes(false)
    },
    updateVatTax: async (id, name, status) => {
        await axios.patch('https://e-commerce-backend-1-0.onrender.com/api/vatTax/update', {
            id,
            name,
            status: !status
        })
            .catch((err) => {
                console.log(err)
            })
    },
    deleteVatTax: async (name) => {
        await axios.delete('https://e-commerce-backend-1-0.onrender.com/api/vatTax/delete', {
            data: { name }
        })
            .catch((err) => {
                console.log(err)
            })

    }
}