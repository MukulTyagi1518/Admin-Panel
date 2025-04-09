import React from 'react';

function NotificationConfirmationModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-md p-6">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="mt-2 mb-4 text-center">
          <p className="text-lg font-semibold">
            Are you sure you want to send a notification for the selected orders?
          </p>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded focus:outline-none"
            onClick={onConfirm}
          >
            Send Notification
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotificationConfirmationModal;