import { Delete, Edit, Trash } from "lucide-react"
import "./Allbrand.css"
import { useEffect, useState } from "react";
import apiInstance from "../../utils/axios";
import { useNavigate } from "react-router-dom";

export default function AllBrands() {
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [roleToDelete, setRoleToDelete] = useState(null);
    const [fileName, setFileName] = useState("Choose file");
    const [formData, setFormData] = useState({
        name: "",
        metaTitle: "",
        metaDescription: ""
    })

    const [logo, setLogo] = useState(null)
    const navigate = useNavigate();


    const handleDeleteClick = (roleId) => {
        setRoleToDelete(roleId);
        setShowDeleteConfirmation(true);
    };

    const confirmDelete = () => {
        // Implement your delete logic here
        console.log(`Deleting role with ID: ${roleToDelete}`);
        setShowDeleteConfirmation(false);
        setRoleToDelete(null);
    };

    const cancelDelete = () => {
        setShowDeleteConfirmation(false);
        setRoleToDelete(null);
    };




    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
            setLogo(event.target.files[0])
        } else {
            setFileName("Choose file");
            setLogo(null)
        }
    }

    const handleDataChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const [brands, setBrands] = useState([])

    const fetchBrands = async () => {
        const response = await apiInstance.get('/brands/getall')
        console.log(response.data.data)
        setBrands(response.data.data || [])
    }

    useEffect(() => {
        fetchBrands()
    }, [])

    const handleCreateBrand = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();

        // Ensure all form fields are appended correctly
        formDataToSend.append("name", formData.name.trim());  // Ensure no leading/trailing spaces
        formDataToSend.append("metaTitle", formData.metaTitle.trim());
        formDataToSend.append("metaDescription", formData.metaDescription.trim());

        if (logo) {
            formDataToSend.append("logo", logo);
        }

        try {
            for (let [key, value] of formDataToSend.entries()) {
                console.log(key, value);
            }


            await apiInstance.post("/brands/create", formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            alert("New Brand added");
            fetchBrands();
        } catch (error) {
            console.error("Error creating brand:", error.response?.data || error);
            alert("Failed to add brand. Check console for details.");
        }
    };


    const DeleteBrand = async (id) => {
        try {
            await apiInstance.delete(`/brands/delete/${id}`);
            fetchBrands();
            alert("Brand deleted!!")
        }
        catch (err) {
            console.log(err)
        }
    }


    const handlereview = (e) => {
        e.preventDefault();
        navigate("/products/editBrand");
    };

    return (
        <div className="PreOrderFaq ma10">
            <div className="preOrderFaqBox-brand">
                <div className="preOrderFaqLeft">
                    <div className="preOrderLeftUpper">
                        <p className="allFaq">All Brands</p>
                        <input type="text" placeholder="Type to search...." className="searchFaq" />
                    </div>
                    <div className="preOrderLeftLower">
                        <div className="table-container faqTable">
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            #
                                        </th>


                                        <th >Name</th>


                                        <th >Logo</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {brands && brands.map((n, i) => (
                                        <tr key={i + 1}>
                                            <td>
                                                {i + 1}
                                            </td>

                                            <td>{n.name}</td>

                                            <td>
                                                <img src={n.logo} alt="" className=" w-[2cm] " />
                                            </td>

                                            <td>
                                                <div className="flex flex-row gap-[.3cm] ">
                                                    <div className="action">
                                                        <Edit color="blue" size={18} onClick={handlereview} />
                                                    </div>
                                                    <div className="action">
                                                        <Trash color="blue" size={18} onClick={() => handleDeleteClick(n.id)} />
                                                    </div>

                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {showDeleteConfirmation && (
                                <div className="delete-confirmation-overlay">
                                    <div className="delete-confirmation-dialog">
                                        <div className="dialog-header">
                                            <h2>Delete Confirmation</h2>
                                            <button
                                                className="close-dialog-btn"
                                                onClick={cancelDelete}
                                            >
                                                X
                                            </button>
                                        </div>
                                        <div className="dialog-content">
                                            <p>Are you sure to delete this?</p>
                                        </div>
                                        <div className="dialog-actions">
                                            <button className="cancel-btn" onClick={cancelDelete}>
                                                Cancel
                                            </button>
                                            <button className="delete-btn" onClick={confirmDelete}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="preOrderFaqRight">
                    <div className="preOrderFaqRightHead">
                        <p className="allFaq">Add new Brand</p>
                    </div>

                    <div className="faqForm">
                        <label>Name</label>
                        <input type="text" placeholder="Enter brand name" name="name" value={formData.name} onChange={handleDataChange} className="faqInp" />
                        <div className="faqForm-warranty">

                            <label>Logo</label>
                            <div className="file-upload-container">
                                <label className="file-upload-label">
                                    <span className="file-upload-button">Browse</span>
                                    <span className="file-upload-text">{fileName}</span>
                                    <input type="file" className="file-upload-input" onChange={handleFileChange} />
                                </label>
                                <p className="file-upload-info">Minimum dimensions required: 40px width × 40px height.</p>
                            </div>
                        </div>
                        <label>Meta Name</label>
                        <input type="text" placeholder="Enter meta title" name="metaTitle" value={formData.metaTitle} onChange={handleDataChange} className="faqInp" />
                        <label>Meta Description</label>
                        <textarea type="text" placeholder="Enter meta description" name="metaDescription" value={formData.metaDescription} onChange={handleDataChange} className="faqTxt" />
                        <div className="inpSubBox">
                            <input onClick={handleCreateBrand} type="submit" value="Save" className="inpSub" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
