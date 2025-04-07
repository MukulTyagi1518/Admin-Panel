import { useState, useEffect } from 'react';
import { StatusToggle } from '../marketing/EmailTemplate/MainPageComponents/StatusToggle';
import { SearchBar } from '../marketing/EmailTemplate/MainPageComponents/SearchBar';
import { DataTable } from '../marketing/EmailTemplate/MainPageComponents/DataTable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InActiveDeliveryPartner = () => {
  const [deliveryPartners, setDeliveryPartners] = useState([]);
  const [filteredPartners, setFilteredPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [reportsDialog, setReportsDialog] = useState({
    open: false,
    partnerId: null,
    reports: [],
    partnerName: ''
  });
  const [confirmDialog, setConfirmDialog] = useState({
    open: false,
    partnerId: null,
    action: '',
    name: ''
  });

  useEffect(() => {
    const fetchDeliveryPartners = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const mockData = [
          {
            id: 1,
            name: 'Alex Brown',
            phone: '+1 555-111-2222',
            rating: 4.0,
            status: 'unbanned',
            lastActive: '2023-06-15',
            reports: [{ id: 1, reason: 'No shows', date: '2023-05-10' }]
          },
          {
            id: 2,
            name: 'Sarah Wilson',
            phone: '+1 555-333-4444',
            rating: 3.8,
            status: 'unbanned',
            lastActive: '2023-06-20',
            reports: []
          },
          {
            id: 3,
            name: 'David Lee',
            phone: '+1 555-555-6666',
            rating: 4.1,
            status: 'banned',
            lastActive: '2023-05-01',
            reports: [{ id: 3, reason: 'Customer complaints', date: '2023-04-15' }]
          }
        ];
        setDeliveryPartners(mockData);
        setFilteredPartners(mockData);
      } catch (error) {
        console.error('Error fetching delivery partners:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDeliveryPartners();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredPartners(deliveryPartners);
    } else {
      const filtered = deliveryPartners.filter(partner =>
        partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        partner.phone.includes(searchTerm)
      );
      setFilteredPartners(filtered);
    }
  }, [searchTerm, deliveryPartners]);

  const handleStatusToggle = (partnerId) => {
    const partner = deliveryPartners.find(p => p.id === partnerId);
    setConfirmDialog({
      open: true,
      partnerId,
      action: partner.status === 'unbanned' ? 'ban' : 'unban',
      name: partner.name
    });
  };

  const confirmToggleStatus = () => {
    const { partnerId, action } = confirmDialog;

    setDeliveryPartners(prev =>
      prev.map(partner =>
        partner.id === partnerId
          ? { ...partner, status: action === 'ban' ? 'banned' : 'unbanned' }
          : partner
      )
    );

    toast.success(`Partner ${action === 'ban' ? 'banned' : 'unbanned'} successfully.`);
    setConfirmDialog({ open: false, partnerId: null, action: '', name: '' });
  };

  const handleViewReports = (partnerId) => {
    const partner = deliveryPartners.find(p => p.id === partnerId);
    setReportsDialog({
      open: true,
      partnerId,
      reports: partner.reports,
      partnerName: partner.name
    });
  };

  const closeReportsDialog = () => {
    setReportsDialog(prev => ({ ...prev, open: false }));
  };

  const columns = [
    { key: 'name', title: 'Name' },
    { key: 'phone', title: 'Phone Number' },
    {
      key: 'rating',
      title: 'Rating',
      render: (partner) => (
        <div className="flex items-center">
          <span className="text-yellow-500">★</span>
          <span className="ml-1">{partner.rating}</span>
        </div>
      )
    },
    {
      key: 'lastActive',
      title: 'Last Active',
      render: (partner) => (
        <span className="text-gray-600">
          {new Date(partner.lastActive).toLocaleDateString()}
        </span>
      )
    },
    {
      key: 'status',
      title: 'Status',
      render: (partner) => (
        <div className="flex items-center space-x-2">
          <StatusToggle
            status={partner.status === 'unbanned'}
            onToggle={() => handleStatusToggle(partner.id)}
          />
          <span className={`px-2 py-1 rounded-full text-xs ${
            partner.status === 'unbanned' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {partner.status === 'unbanned' ? 'Unbanned' : 'Banned'}
          </span>
        </div>
      )
    },
    {
      key: 'actions',
      title: 'Actions',
      render: (partner) => (
        <div className="flex space-x-2">
          <button
            onClick={() => handleViewReports(partner.id)}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
          >
            Reports ({partner.reports.length})
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Inactive Delivery Partners</h1>
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search partners..."
        />
      </div>

      <div className="mb-4 text-gray-600">
        <p>Showing delivery partners who haven't worked for at least one month</p>
      </div>

      <DataTable
        columns={columns}
        data={filteredPartners}
        loading={loading}
        emptyMessage="No inactive delivery partners found."
      />

      {/* Reports Dialog */}
      {reportsDialog.open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Reports for {reportsDialog.partnerName}</h2>
              <button
                onClick={closeReportsDialog}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {reportsDialog.reports.length > 0 ? (
              <div className="space-y-3">
                {reportsDialog.reports.map(report => (
                  <div key={report.id} className="border-b pb-2">
                    <p className="font-medium">{report.reason}</p>
                    <p className="text-sm text-gray-500">{report.date}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No reports found for this partner.</p>
            )}

            <div className="mt-6 flex justify-end">
              <button
                onClick={closeReportsDialog}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Dialog */}
      {confirmDialog.open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm">
            <h2 className="text-lg font-bold mb-4">Confirm Action</h2>
            <p className="mb-6">
              Are you sure you want to <strong>{confirmDialog.action}</strong> <strong>{confirmDialog.name}</strong>?
            </p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setConfirmDialog({ open: false, partnerId: null, action: '', name: '' })}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={confirmToggleStatus}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InActiveDeliveryPartner;
