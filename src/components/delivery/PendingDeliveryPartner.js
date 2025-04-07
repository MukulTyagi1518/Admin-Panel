import { useState, useEffect } from 'react';
import { StatusToggle } from '../marketing/EmailTemplate/MainPageComponents/StatusToggle';
import { SearchBar } from '../marketing/EmailTemplate/MainPageComponents/SearchBar';
import { DataTable } from '../marketing/EmailTemplate/MainPageComponents/DataTable';

const PendingDeliveryPartner = () => {
  const [pendingPartners, setPendingPartners] = useState([]);
  const [filteredPartners, setFilteredPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [detailsDialog, setDetailsDialog] = useState({
    open: false,
    partner: null
  });

  // Mock data - replace with actual API call
  useEffect(() => {
    const fetchPendingPartners = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockData = [
          {
            id: 1,
            name: 'Raj Patel',
            phone: '+1 555-111-2233',
            email: 'raj.patel@example.com',
            documents: [
              { type: 'License', verified: true },
              { type: 'RC', verified: true },
              { type: 'Insurance', verified: false }
            ],
            applicationDate: '2023-07-15',
            status: 'pending' // pending, approved, rejected
          },
          {
            id: 2,
            name: 'Priya Sharma',
            phone: '+1 555-222-3344',
            email: 'priya.sharma@example.com',
            documents: [
              { type: 'License', verified: true },
              { type: 'RC', verified: true },
              { type: 'Insurance', verified: true }
            ],
            applicationDate: '2023-07-18',
            status: 'pending'
          },
          {
            id: 3,
            name: 'Amit Singh',
            phone: '+1 555-333-4455',
            email: 'amit.singh@example.com',
            documents: [
              { type: 'License', verified: false },
              { type: 'ID Proof', verified: true }
            ],
            applicationDate: '2023-07-20',
            status: 'pending'
          }
        ];
        
        setPendingPartners(mockData);
        setFilteredPartners(mockData);
      } catch (error) {
        console.error('Error fetching pending partners:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPendingPartners();
  }, []);

  // Filter partners based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredPartners(pendingPartners);
    } else {
      const filtered = pendingPartners.filter(partner =>
        partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        partner.phone.includes(searchTerm) ||
        partner.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPartners(filtered);
    }
  }, [searchTerm, pendingPartners]);

  const handleApprove = (partnerId) => {
    setPendingPartners(prev => 
      prev.map(partner => 
        partner.id === partnerId 
          ? { ...partner, status: 'approved' } 
          : partner
      )
    );
    // Here you would make an API call to update the status in the backend
  };

  const handleReject = (partnerId) => {
    setPendingPartners(prev => 
      prev.map(partner => 
        partner.id === partnerId 
          ? { ...partner, status: 'rejected' } 
          : partner
      )
    );
    // Here you would make an API call to update the status in the backend
  };

  const handleViewDetails = (partner) => {
    setDetailsDialog({
      open: true,
      partner
    });
  };

  const closeDetailsDialog = () => {
    setDetailsDialog(prev => ({ ...prev, open: false }));
  };

  const columns = [
    { 
      key: 'name', 
      title: 'Name' 
    },
    { 
      key: 'contact', 
      title: 'Contact',
      render: (partner) => (
        <div>
          <div>{partner.phone}</div>
          <div className="text-sm text-gray-500">{partner.email}</div>
        </div>
      )
    },
    { 
      key: 'documents', 
      title: 'Documents',
      render: (partner) => (
        <div>
          {partner.documents.filter(doc => doc.verified).length}/
          {partner.documents.length} verified
        </div>
      )
    },
    { 
      key: 'applicationDate', 
      title: 'Application Date',
      render: (partner) => (
        <span className="text-gray-600">
          {new Date(partner.applicationDate).toLocaleDateString()}
        </span>
      )
    },
    { 
      key: 'actions', 
      title: 'Actions',
      render: (partner) => (
        <div className="flex space-x-2">
          <button 
            onClick={() => handleApprove(partner.id)}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
            disabled={partner.status !== 'pending'}
          >
            Approve
          </button>
          <button 
            onClick={() => handleReject(partner.id)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
            disabled={partner.status !== 'pending'}
          >
            Reject
          </button>
          <button 
            onClick={() => handleViewDetails(partner)}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
          >
            Details
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Pending Delivery Partners</h1>
        <SearchBar 
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search applicants..."
        />
      </div>
      
      <div className="mb-4 text-gray-600">
        <p>Showing delivery partner applications awaiting approval</p>
      </div>
      
      <DataTable 
        columns={columns} 
        data={filteredPartners.filter(p => p.status === 'pending')} 
        loading={loading}
        emptyMessage="No pending delivery partner applications found."
      />
      
      {/* Details Dialog */}
      {detailsDialog.open && detailsDialog.partner && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Application Details</h2>
              <button 
                onClick={closeDetailsDialog}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">Personal Information</h3>
                <div className="mt-2 space-y-1">
                  <p><span className="text-gray-600">Name:</span> {detailsDialog.partner.name}</p>
                  <p><span className="text-gray-600">Phone:</span> {detailsDialog.partner.phone}</p>
                  <p><span className="text-gray-600">Email:</span> {detailsDialog.partner.email}</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">Documents</h3>
                <div className="mt-2 space-y-2">
                  {detailsDialog.partner.documents.map((doc, index) => (
                    <div key={index} className="flex items-center">
                      <span className={`w-3 h-3 rounded-full mr-2 ${
                        doc.verified ? 'bg-green-500' : 'bg-red-500'
                      }`}></span>
                      <span>{doc.type}</span>
                      <span className="ml-auto text-sm text-gray-500">
                        {doc.verified ? 'Verified' : 'Not Verified'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">Application Status</h3>
                <div className="mt-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    detailsDialog.partner.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    detailsDialog.partner.status === 'approved' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {detailsDialog.partner.status.charAt(0).toUpperCase() + detailsDialog.partner.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end space-x-3">
              <button 
                onClick={() => {
                  handleApprove(detailsDialog.partner.id);
                  closeDetailsDialog();
                }}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                disabled={detailsDialog.partner.status !== 'pending'}
              >
                Approve
              </button>
              <button 
                onClick={() => {
                  handleReject(detailsDialog.partner.id);
                  closeDetailsDialog();
                }}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                disabled={detailsDialog.partner.status !== 'pending'}
              >
                Reject
              </button>
              <button 
                onClick={closeDetailsDialog}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingDeliveryPartner;