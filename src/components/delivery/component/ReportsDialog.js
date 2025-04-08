import React from 'react';

const ReportsDialog = ({ 
  open, 
  onClose, 
  partnerName, 
  reports = [] 
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            Reports for {partnerName}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close dialog"
          >
            ✕
          </button>
        </div>

        {reports.length > 0 ? (
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {reports.map((report) => (
              <div key={report.id} className="border-b pb-2">
                <p className="font-medium">{report.reason}</p>
                <p className="text-sm text-gray-500">{report.date}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            No reports found for this partner.
          </p>
        )}

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportsDialog;