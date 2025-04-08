// components/ui/ConfirmationDialog.jsx
const ConfirmationDialog = ({ open, title, message, onConfirm, onCancel }) => {
    if (!open) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
          <h2 className="text-lg font-bold mb-4">{title}</h2>
          <p className="text-gray-700 mb-6">{message}</p>
          <div className="flex justify-end space-x-4">
            <button
              onClick={onCancel}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              No
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ConfirmationDialog;
  