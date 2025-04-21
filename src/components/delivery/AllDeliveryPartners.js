import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StatusToggle } from "../marketing/EmailTemplate/MainPageComponents/StatusToggle";
import { SearchBar } from "../marketing/EmailTemplate/MainPageComponents/SearchBar";
import { DataTable } from "../marketing/EmailTemplate/MainPageComponents/DataTable";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmationDialog from "../ConfirmationDialog";
import DeliveryPartnerService from "../../services/deliveryPartnerService";
import OrderHistoryModal from "./component/OrderHistoryModal";

const AllDeliveryPartners = () => {
  const navigate = useNavigate();
  const [deliveryPartners, setDeliveryPartners] = useState([]);
  const [filteredPartners, setFilteredPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [confirmationDialog, setConfirmationDialog] = useState({
    open: false,
    partnerId: null,
    partnerName: "",
    newStatus: "",
  });
  const [orderHistoryModal, setOrderHistoryModal] = useState({
    open: false,
    partnerId: null,
    partnerName: "",
    orders: [],
    loading: false,
  });

  // Fetch delivery partners from API
  useEffect(() => {
    const fetchDeliveryPartners = async () => {
      try {
        setLoading(true);
        const response = await DeliveryPartnerService.getAll();
        
        const partners = response.map(partner => ({
          id: partner._id,
          name: `${partner.firstName} ${partner.lastName}`,
          phone: partner.phone,
          rating: partner.rating || 4.5, // Default to 4.5 if not available
          status: partner.status === "approved" ? "Active" : "Inactive",
          ip: partner.ipAddress || "N/A",
          location: partner.location || "N/A",
          profilePhoto: partner.profilePhoto,
          originalData: partner
        }));

        setDeliveryPartners(partners);
        setFilteredPartners(partners);
      } catch (error) {
        console.error("Error fetching delivery partners:", error);
        toast.error("Failed to load delivery partners");
      } finally {
        setLoading(false);
      }
    };

    fetchDeliveryPartners();
  }, []);

  // Filter partners based on search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPartners(deliveryPartners);
    } else {
      const filtered = deliveryPartners.filter(
        (partner) =>
          partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          partner.phone.includes(searchTerm)
      );
      setFilteredPartners(filtered);
    }
  }, [searchTerm, deliveryPartners]);

  // Update partner status
  const handleStatusToggle = async (partnerId, newStatus) => {
    try {
      const apiStatus = newStatus === "Active" ? "approved" : "rejected";
      
      const partner = deliveryPartners.find(p => p.id === partnerId);
      
      if (!partner) return;

      await DeliveryPartnerService.update(partnerId, { 
        status: apiStatus 
      });

      setDeliveryPartners(prev =>
        prev.map(p =>
          p.id === partnerId 
            ? { 
                ...p, 
                status: newStatus,
                originalData: {
                  ...p.originalData,
                  status: apiStatus
                }
              } 
            : p
        )
      );

      toast.success(
        `Partner ${partner.name} status updated to ${newStatus}`
      );
    } catch (error) {
      console.error("Error updating partner status:", error);
      toast.error("Failed to update partner status");
    }
  };

  // Fetch order history for a partner
//   const fetchOrderHistory = async (partnerId) => {
    // try {
    //   setOrderHistoryModal(prev => ({
    //     ...prev,
    //     loading: true
    //   }));
      
    //   const response = await OrderService.getByDeliveryPartner(partnerId);
      
    //   setOrderHistoryModal(prev => ({
    //     ...prev,
    //     orders: response,
    //     loading: false
    //   }));
    // } catch (error) {
    //   console.error("Error fetching order history:", error);
    //   toast.error("Failed to load order history");
    //   setOrderHistoryModal(prev => ({
    //     ...prev,
    //     loading: false
    //   }));
    // }
//   };

  const confirmStatusToggle = (partnerId, partnerName, newStatus) => {
    setConfirmationDialog({
      open: true,
      partnerId,
      partnerName,
      newStatus,
    });
  };

  const handleConfirm = () => {
    handleStatusToggle(
      confirmationDialog.partnerId,
      confirmationDialog.newStatus
    );
    setConfirmationDialog({
      open: false,
      partnerId: null,
      partnerName: "",
      newStatus: "",
    });
  };

  const handleCancel = () => {
    setConfirmationDialog({
      open: false,
      partnerId: null,
      partnerName: "",
      newStatus: "",
    });
  };

  const handleViewOrders = (partnerId) => {
    navigate(`/delivery/all/view?partnerId=${partnerId}`);
  };


  const handleViewPartner = (partnerId) => {
    navigate(`/delivery/all/view/${partnerId}`);
  };

//   const openOrderHistoryModal = (partnerId, partnerName) => {
//     const partner = deliveryPartners.find(p => p.id === partnerId);
//     setOrderHistoryModal({
//       open: true,
//       partnerId,
//       partnerName,
//       orders: [],
//       loading: true
//     });
//     fetchOrderHistory(partnerId);
//   };

//   const closeOrderHistoryModal = () => {
//     setOrderHistoryModal({
//       open: false,
//       partnerId: null,
//       partnerName: "",
//       orders: [],
//       loading: false
//     });
//   };

  // Responsive columns configuration
  const columns = [
    {
      key: "name",
      title: "Name",
      visible: true,
      render: (partner) => (
        <div 
          className="flex flex-col cursor-pointer hover:text-blue-600"
          onClick={() => handleViewPartner(partner.id)}
        >
          <div className="flex items-center">
            <img
              src={partner.profilePhoto}
              alt={partner.name}
              className="w-8 h-8 rounded-full mr-3 object-cover"
            />
            <span>{partner.name}</span>
          </div>
          <span className="text-sm text-gray-500 sm:hidden">{partner.phone}</span>
        </div>
      ),
    },
    {
      key: "phone",
      title: "Phone",
      visible: false,
      render: (partner) => (
        <a
          href={`tel:${partner.phone}`}
          className="hover:text-blue-600 hidden sm:block"
        >
          {partner.phone}
        </a>
      ),
    },
    {
      key: "ip",
      title: "IP",
      visible: window.innerWidth > 768,
      render: (partner) => (
        <span className="font-mono text-sm">{partner.ip}</span>
      ),
    },
    {
      key: "location",
      title: "Location",
      visible: window.innerWidth > 640,
      render: (partner) => (
        <span className="truncate max-w-[120px]">{partner.location}</span>
      ),
    },
    {
      key: "rating",
      title: "Rating",
      visible: true,
      render: (partner) => (
        <div className="flex items-center">
          <span className="text-yellow-500">★</span>
          <span className="ml-1">{partner.rating}</span>
        </div>
      ),
    },
    {
      key: "status",
      title: "Status",
      visible: window.innerWidth > 768,
      render: (partner) => (
        <div className="flex items-center space-x-2">
          <StatusToggle
            status={partner.status === "Active"}
            onToggle={() =>
              confirmStatusToggle(
                partner.id,
                partner.name,
                partner.status === "Active" ? "Inactive" : "Active"
              )
            }
          />
          <span
            className={`px-2 py-1 rounded-full text-xs ${
              partner.status === "Active"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {partner.status === "Active" ? "Active" : "Inactive"}
          </span>
        </div>
      ),
    },
    {
      key: "actions",
      title: "Actions",
      visible: true,
      render: (partner) => (
        <div
          className={`flex ${
            window.innerWidth <= 640 ? "flex-col space-y-2" : "space-x-2"
          }`}
        >
          <button
            onClick={() => handleViewOrders(partner.id, partner.name)}
            className="px-2 py-1 bg-blue-500 text-white rounded text-xs sm:text-sm hover:bg-blue-600"
          >
            {window.innerWidth > 640 ? "View Orders" : "Orders"}
          </button>
        </div>
      ),
    },
  ];

  // Filter columns based on visibility
  const visibleColumns = columns.filter(col => col.visible);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <ToastContainer position="top-center" />
      
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl font-bold">All Delivery Partners</h1>
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

      <div className="overflow-x-auto">
        <DataTable
          columns={visibleColumns}
          data={filteredPartners}
          loading={loading}
          emptyMessage="No delivery partners found."
          className="min-w-[600px] sm:min-w-full"
        />
      </div>

      <ConfirmationDialog
        open={confirmationDialog.open}
        title="Confirmation"
        message={`Are you sure you want to ${
          confirmationDialog.newStatus === "Active" ? "activate" : "deactivate"
        } ${confirmationDialog.partnerName}?`}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />

     
    </div>
  );
};

export default AllDeliveryPartners;