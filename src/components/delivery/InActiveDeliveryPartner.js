import { useState, useEffect } from 'react';
import { SearchBar } from '../marketing/EmailTemplate/MainPageComponents/SearchBar';
import { DataTable } from '../marketing/EmailTemplate/MainPageComponents/DataTable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MobileCard from './component/MobileCard';
import DeliveryPartnerService from '../../services/deliveryPartnerService'; // Import the service

const InActiveDeliveryPartner = () => {
  const [deliveryPartners, setDeliveryPartners] = useState([]);
  const [filteredPartners, setFilteredPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchInactiveDeliveryPartners = async () => {
      try {
        setLoading(true);
        // Fetch all partners and filter for inactive ones
        const response = await DeliveryPartnerService.getAll();
        
        // Transform API data to match your component's expected format
        const inactivePartners = response
          .filter(partner => partner.status === 'rejected' || partner.status === 'pending')
          .map(partner => ({
            id: partner._id,
            name: `${partner.firstName} ${partner.lastName}`,
            phone: partner.phone,
            rating: 4.0, // Default value or add to your model
            status: 'inactive',
            lastActive: partner.lastActive || new Date().toISOString(), // Add to your model
            // reports: [], // Add to your model or fetch separately
            profilePhoto: partner.profilePhoto ,
            originalData: partner // Keep original data for reference
          }));

        setDeliveryPartners(inactivePartners);
        setFilteredPartners(inactivePartners);
      } catch (error) {
        console.error('Error fetching inactive delivery partners:', error);
        toast.error('Failed to load inactive delivery partners');
      } finally {
        setLoading(false);
      }
    };

    fetchInactiveDeliveryPartners();
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

  // Example of how to implement activate partner function
  const activatePartner = async (partnerId) => {
    try {
      // Update in backend
      await DeliveryPartnerService.update(partnerId, { status: 'approved' });
      
      // Update in frontend
      setDeliveryPartners(prev =>
        prev.filter(partner => partner.id !== partnerId)
      );
      setFilteredPartners(prev =>
        prev.filter(partner => partner.id !== partnerId)
      );

      toast.success('Partner activated successfully');
    } catch (error) {
      console.error('Error activating partner:', error);
      toast.error('Failed to activate partner');
    }
  };

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
    {
      key: 'actions',
      title: 'Actions',
      render: (partner) => (
        <div className="flex space-x-2">
          <button
            onClick={() => activatePartner(partner.id)}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
          >
            Activate
          </button>
        </div>
      )
    }
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
              Showing delivery partners who are inactive or pending approval
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
          {filteredPartners.map(partner => (
            <MobileCard
              key={partner.id}
              partner={partner}
              expandedCard={expandedCard}
              toggleCard={toggleCard}
              onActivate={activatePartner}
            />
          ))}
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
    </div>
  );
};

export default InActiveDeliveryPartner;