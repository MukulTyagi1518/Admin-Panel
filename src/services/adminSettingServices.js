import apiInstance from "../utils/axios";

export const AdminSettingsService = {

    // VAT and Tax

    createVatTax: async (name) => {
        await apiInstance.post('/vatTax/create', {
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
        const response = await apiInstance.get('/vatTax/getAll');
        setTaxData(response.data.data)
        setFetchVatTaxes(false)
    },
    updateVatTax: async (id, name, status) => {
        await apiInstance.patch('/vatTax/update', {
            id,
            name,
            status: !status
        })
            .catch((err) => {
                console.log(err)
            })
    },
    deleteVatTax: async (name) => {
        await apiInstance.delete('/vatTax/delete', {
            data: { name }
        })
            .catch((err) => {
                console.log(err)
            })

    }
}