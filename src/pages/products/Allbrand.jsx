import { Delete, Edit, Trash } from "lucide-react"
import "./Allbrand.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AllBrands() {
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [roleToDelete, setRoleToDelete] = useState(null);
    const [fileName, setFileName] = useState("Choose file");
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
        } else {
            setFileName("Choose file");
        }
    }

    const faqs = [
        {
            id: 1,
            name: "Acer"
        },
        {
            id: 2,
            name: "Addidas"
        },
        {
            id: 3,
            name: "Aigner"
        },
        {
            id: 4,
            name: "Alosa"
        },
        {
            id: 5,
            name: "Apato"
        }
    ]
    const handlereview = (e) => {
        e.preventDefault();
        navigate("/products/editBrand");
      };

    return (
        <div className="PreOrderFaq ma10">
            <div className="preOrderFaqBox">
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
                                    {faqs.map((n) => (
                                        <tr key={n.id}>
                                            <td>
                                                {n.id}
                                            </td>

                                            <td>{n.name}</td>

                                            <td>

                                            </td>

                                            <td>
                                                <div className="flex flex-row gap-[.3cm] ">
                                                    <div className="action">
                                                        <Edit color="blue" size={18} onClick={handlereview} />
                                                    </div>
                                                    <div className="action">
                                                        <Trash color="blue" size={18} onClick={() => handleDeleteClick(n.id)}  />
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
                        <p className="allFaq">Add new FAQ</p>
                    </div>

                    <div className="faqForm">
                        <label>Name</label>
                        <input type="text" placeholder="Enter question" className="faqInp" />
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
                        <input type="text" placeholder="Enter question" className="faqInp" />
                        <label>Meta Description</label>
                        <textarea type="text" placeholder="Enter answer" className="faqTxt" />
                        <div className="inpSubBox">
                            <input type="submit" value="Save" className="inpSub" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
