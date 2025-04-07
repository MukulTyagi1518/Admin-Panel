import React from 'react'

const Delete = () => {

    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
      const [roleToDelete, setRoleToDelete] = useState(null);
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
    <div>
      <div className="options-container">
      
                          
                          <FaTrash className="delete-icon"  onClick={() => handleDeleteClick(staff.id)} />
                        </div>
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
  )
}

export default Delete
