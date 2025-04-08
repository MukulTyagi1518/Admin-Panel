import { useState, useEffect } from 'react';
import { SearchBar } from '../marketing/EmailTemplate/MainPageComponents/SearchBar';
import { DataTable } from '../marketing/EmailTemplate/MainPageComponents/DataTable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MobileCard from './component/MobileCard';

const InActiveDeliveryPartner = () => {
  const [deliveryPartners, setDeliveryPartners] = useState([]);
  const [filteredPartners, setFilteredPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [expandedCard, setExpandedCard] = useState(null);

  // const [reportsDialog, setReportsDialog] = useState({
  //   open: false,
  //   partnerId: null,
  //   reports: [],
  //   partnerName: ''
  // });
  // const [confirmDialog, setConfirmDialog] = useState({
  //   open: false,
  //   partnerId: null,
  //   action: '',
  //   name: ''
  // });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
            status: 'inactive',
            lastActive: '2023-06-15',
            reports: [{ id: 1, reason: 'No shows', date: '2023-05-10' }],
            profilePhoto: 'https://randomuser.me/api/portraits/men/32.jpg',
          },
          {
            id: 2,
            name: 'Sarah Wilson',
            phone: '+1 555-333-4444',
            rating: 3.8,
            status: 'inactive',
            lastActive: '2023-06-20',
            reports: [],
            profilePhoto: 'https://randomuser.me/api/portraits/women/44.jpg'
          },
          {
            id: 3,
            name: 'David Lee',
            phone: '+1 555-555-6666',
            rating: 4.1,
            status: 'inactive',
            lastActive: '2023-05-01',
            reports: [{ id: 3, reason: 'Customer complaints', date: '2023-04-15' }],
            profilePhoto: 'https://randomuser.me/api/portraits/men/75.jpg'
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

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  // const handleStatusToggle = (partnerId) => {
  //   const partner = deliveryPartners.find(p => p.id === partnerId);
  //   setConfirmDialog({
  //     open: true,
  //     partnerId,
  //     action: partner.status === 'active' ? 'ban' : 'unban',
  //     name: partner.name
  //   });
  // };

  // const confirmToggleStatus = () => {
  //   const { partnerId, action } = confirmDialog;

  //   setDeliveryPartners(prev =>
  //     prev.map(partner =>
  //       partner.id === partnerId
  //         ? { ...partner, status: action === 'ban' ? 'inactive' : 'active' }
  //         : partner
  //     )
  //   );

  //   toast.success(`Partner ${action === 'ban' ? 'inactive' : 'active'} successfully.`);
  //   setConfirmDialog({ open: false, partnerId: null, action: '', name: '' });
  // };

  // const handleViewReports = (partnerId) => {
  //   const partner = deliveryPartners.find(p => p.id === partnerId);
  //   setReportsDialog({
  //     open: true,
  //     partnerId,
  //     reports: partner.reports,
  //     partnerName: partner.name
  //   });
  // };

  // const closeReportsDialog = () => {
  //   setReportsDialog(prev => ({ ...prev, open: false }));
  // };

  const columns = [
    {
      key: "name",
      title: "Name",
      render: (partner) => (
        <div className="flex items-center">
          <img 
            src={partner.profilePhoto} 
            alt={partner.name}
            className="w-8 h-8 rounded-full mr-3 object-cover"
          />
          <span>{partner.name}</span>
        </div>
      ),
    },
    {
      key: "phone",
      title: "Phone",
      render: (partner) => (
        <a href={`tel:${partner.phone}`} className="hover:text-blue-600">
          {partner.phone}
        </a>
      ),
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
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          partner.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {partner.status === 'active' ? 'Active' : 'Inactive'}
        </span>
      )
    },
    // {
    //   key: 'actions',
    //   title: 'Actions',
    //   render: (partner) => (
    //     <div className="flex space-x-2">
    //       <button
    //         onClick={() => handleViewReports(partner.id)}
    //         className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
    //       >
    //         Reports ({partner.reports.length})
    //       </button>
    //     </div>
    //   )
    // }
  ];

  

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <ToastContainer position="top-center" autoClose={3000} />
      
      {/* Header Section */}
      <div className='mb-8'>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 sm:mb-6">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">Inactive Delivery Partners</h1>
            <p className="text-gray-600 mt-1">
              Showing delivery partners who haven't worked for at least one month
            </p>
          </div>
          <div className="w-full sm:w-64">
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search partners..."
              className="w-full"
            />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : windowWidth < 768 ? (
        <div className="space-y-4">
          {filteredPartners.map(partner =>  <MobileCard
      key={partner.id}
      partner={partner}
      expandedCard={expandedCard}
      toggleCard={toggleCard}
    />)}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <DataTable
            columns={columns}
            data={filteredPartners}
            loading={loading}
            emptyMessage="No inactive delivery partners found."
          />
        </div>
      )}

      {/* Reports Dialog */}
      {/* {reportsDialog.open && (
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
      )} */}

      {/* Confirmation Dialog */}
      {/* {confirmDialog.open && (
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
      )} */}
    </div>
  );
};

export default InActiveDeliveryPartner;