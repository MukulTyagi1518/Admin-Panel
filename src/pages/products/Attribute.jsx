import { Delete, Edit, Trash } from "lucide-react"
import "./Attribute.css"
import { MdOutlineSettings } from "react-icons/md"
import { useState } from "react";

export default function PreOrderFaq() {
 const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [roleToDelete, setRoleToDelete] = useState(null);
    const faqs = [
        {
            id: 1,
           name: "Liter",
           values:"1 Ltr 2 Ltr 5 Ltr 10 Ltr"
        },
        {
            id: 2,
            name: "Wheel",
           
        },
        {
            id: 3,
            name: "Sleeve",
            values:"Bell sleeves,Cap sleeves,Raglan sleeves,Flutter sleeves"
        },
        {
            id: 4,
            name: "Fabric",
            values:"Chenille,Cotton,Georgette,Crêpe,Canvas"
        },
        {
            id: 5,
           name: "Size",
           values:"M  L XL XXL S 64GB 128GB 512GB 1TB 3/32 GB 4/64 GB 4/128 GB 8/256 GB 6/128 GB"
        },
    ]

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

    return (
        <div className="PreOrderFaq ma10">
            <div className="preOrderFaqBox ">
                <div className="preOrderFaqLeft">
                    <div className="preOrderLeftUpper">
                        <p className="allFaq">Attribute</p>
                        {/* <input type="text" placeholder="Type to search...." className="searchFaq" /> */}
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


                                        <th >Values</th>
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

                                            <td>{n.values}</td>


                                            <td>
                                                <div className="flex flex-row gap-[.3cm]">
                                                    <div className="action">
                                                        <MdOutlineSettings color="blue" size={18} />
                                                    </div>
                                                    <div className="action">
                                                        <Edit color="blue" size={18} />
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
                        <p className="allFaq">Add new FAQ</p>
                    </div>

                    <div className="faqForm">
                        <label>Name</label>
                        <input type="text" placeholder="Enter question" className="faqInp" />
                       
                        <div className="inpSubBox">
                            <input type="submit" value="Save" className="inpSub" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}