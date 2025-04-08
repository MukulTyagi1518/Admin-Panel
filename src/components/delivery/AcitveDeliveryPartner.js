import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StatusToggle } from "../marketing/EmailTemplate/MainPageComponents/StatusToggle";
import { SearchBar } from "../marketing/EmailTemplate/MainPageComponents/SearchBar";
import { DataTable } from "../marketing/EmailTemplate/MainPageComponents/DataTable";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmationDialog from "../ConfirmationDialog";

const ActiveDeliveryPartner = () => {
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

  // Mock data - replace with actual API call
  useEffect(() => {
    const fetchDeliveryPartners = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const mockData = [
          {
            id: 1,
            name: "John Doe",
            phone: "+1 555-123-4567",
            rating: 4.8,
            status: "unbanned",
            ip: "192.168.1.101",
            location: "New York, USA",
            reportCount: 2,
            profilePhoto: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg",
          },
          {
            id: 2,
            name: "Jane Smith",
            phone: "+1 555-987-6543",
            rating: 4.5,
            status: "unbanned",
            ip: "192.168.1.102",
            location: "Los Angeles, USA",
            reportCount: 0,
            profilePhoto: "https://randomuser.me/api/portraits/women/44.jpg",

          },
          {
            id: 3,
            name: "Mike Johnson",
            phone: "+1 555-456-7890",
            rating: 4.2,
            status: "unbanned",
            ip: "192.168.1.103",
            location: "Chicago, USA",
            reportCount: 1,
            profilePhoto: "https://randomuser.me/api/portraits/men/32.jpg",

          },
        ];

        setDeliveryPartners(mockData);
        setFilteredPartners(mockData);
      } catch (error) {
        console.error("Error fetching delivery partners:", error);
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

  const handleStatusToggle = (partnerId, newStatus) => {
    setDeliveryPartners((prev) =>
      prev.map((partner) =>
        partner.id === partnerId ? { ...partner, status: newStatus } : partner
      )
    );

    const updatedPartner = deliveryPartners.find(
      (partner) => partner.id === partnerId
    );

    toast.success(
      `Partner ${updatedPartner.name} is now ${
        newStatus === "unbanned" ? "Unbanned" : "Banned"
      }.`
    );
  };

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

  const handleViewReports = (partnerId) => {
    navigate(`/delivery/active/reports?partnerId=${partnerId}`);
  };

  // Responsive columns configuration
  const columns = [
    {
      key: "name",
      title: "Name",
      visible: true, // Always visible
      render: (partner) => (
        <div className="flex flex-col">
        <div className="flex items-center">
          <img
            src={partner.profilePhoto}
            alt={partner.name}
            className="w-8 h-8 rounded-full mr-3 object-cover"
          />
          <span>{partner.name}</span>
        </div>
        {/* Phone number visible only on small screens */}
        <span className="text-sm text-gray-500 sm:hidden">{partner.phone}</span>
      </div>
      ),
    },
    {
      key: "phone",
      title: "Phone",
      visible: false, // Always visible
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
      visible: window.innerWidth > 768, // Show on medium+ screens
      render: (partner) => (
        <span className="font-mono text-sm">{partner.ip}</span>
      ),
    },
    {
      key: "location",
      title: "Location",
      visible: window.innerWidth > 640, // Show on small+ screens
      render: (partner) => (
        <span className="truncate max-w-[120px]">{partner.location}</span>
      ),
    },
    {
      key: "rating",
      title: "Rating",
      visible: true, // Always visible
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
      visible: window.innerWidth > 768, // Show on medium+ screens
      render: (partner) => (
        <div className="flex items-center space-x-2">
          <StatusToggle
            status={partner.status === "unbanned"}
            onToggle={() =>
              confirmStatusToggle(
                partner.id,
                partner.name,
                partner.status === "unbanned" ? "banned" : "unbanned"
              )
            }
          />
          <span
            className={`px-2 py-1 rounded-full text-xs ${
              partner.status === "unbanned"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {partner.status === "unbanned" ? "Active" : "Banned"}
          </span>
        </div>
      ),
    },
    {
      key: "actions",
      title: "Actions",
      visible: true, // Always visible
      render: (partner) => (
        <div
          className={`flex ${
            window.innerWidth <= 640 ? "flex-col space-y-2" : "space-x-2"
          }`}
        >
          <button
            onClick={() => handleViewReports(partner.id)}
            className={`px-2 py-1 text-white rounded text-xs sm:text-sm ${
              partner.reportCount > 0
                ? "bg-red-500 hover:bg-red-600"
                : "bg-gray-500 hover:bg-gray-600"
            }`}
          >
            {window.innerWidth > 640 ? (
              `Reports (${partner.reportCount})`
            ) : (
              <span title={`${partner.reportCount} reports`}>Reports</span>
            )}
          </button>
          <button
            onClick={() =>
              confirmStatusToggle(
                partner.id,
                partner.name,
                partner.status === "unbanned" ? "banned" : "unbanned"
              )
            }
            className="px-2 py-1 bg-blue-500 text-white rounded text-xs sm:text-sm"
          >
            {partner.status === "unbanned" ? "Ban" : "Unban"}
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
        <h1 className="text-xl sm:text-2xl font-bold">Active Delivery Partners</h1>
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
          confirmationDialog.newStatus === "unbanned" ? "unban" : "ban"
        } ${confirmationDialog.partnerName}?`}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default ActiveDeliveryPartner;