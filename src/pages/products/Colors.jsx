import "./Colors.css";
import { useState, useEffect, useRef } from "react";
import { Edit, Trash ,Plus} from "lucide-react";
import apiInstance from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import AddNewColor from "./AddNewColor";

// 🎨 Color Name Detection API (Optional)
const getColorName = async (hexCode) => {
    try {
        const res = await fetch(`https://www.thecolorapi.com/id?hex=${hexCode.replace("#", "")}`);
        const data = await res.json();
        return data.name.value || "Unknown";
    } catch (error) {
        console.error("Error fetching color name:", error);
        return "Unknown";
    }
};

export default function PreOrderFaq() {
    const [formData, setFormData] = useState({
        name: "",
        colorCode: "",
        colorFilterActivation: false
    });
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [roleToDelete, setRoleToDelete] = useState(null);

    const navigate = useNavigate();


    const [colorsData, setColorsData] = useState([])


    const fetchColorsData = async () => {
        try {
            const response = await apiInstance.get('colors/getall');
            setColorsData(response.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    const colorPickerRef = useRef(null);

    useEffect(() => {
        fetchColorsData();
    }, []);

    const handlereview = (e) => {
        e.preventDefault();
        navigate("/products/editcolor");
    };
    
    useEffect(() => {
        fetchColorsData();
    }, []);


    const deleteColor = async (id) => {
        await apiInstance.delete(`colors/delete/${id}`)
        alert("Color deleted.")
        fetchColorsData();
    }

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

      const handleForm = (e) => {
        e.preventDefault();
        navigate("/products/addnewcolor");
      };

    return (
        <div className="PreOrderFaq ma10">
            <div className="preOrderFaqBox">
                {/* Left Side - Color List */}
                <div className="preOrderFaqLeft">
                <div className="addbtn">
                <button className="add-brand-btn"  onClick={handleForm} >
                            <Plus size={16} /> Add New Color
                        </button>
                </div>
                    <div className="preOrderLeftUpper">
                        
                        <p className="allFaq">All Colors</p>
                        <input type="text" placeholder="Type to search...." className="searchFaq"  />
                    </div>
                    <div className="preOrderLeftLower">
                        <div className="table-container faqTable">
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {colorsData && colorsData.map((n, index) => (
                                        <tr key={n.id}>
                                            <td>{index + 1}</td>
                                            <td>{n.name}</td>
                                            <td>
                                                <div className="flex flex-row gap-[.3cm]">
                                                    <div className="action">
                                                        <Edit color="blue" size={18} onClick={handlereview} />
                                                    </div>
                                                    <div className="action">
                                                        <Trash onClick={() => { deleteColor(n._id) }} color="blue" size={18} />
                                                    </div >
                                                </div >
                                            </td >
                                        </tr >
                                    ))
                                    }
                                </tbody >
                            </table >
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
                        </div >
                    </div >
                </div >

             
            </div >
        </div >
    );
}
