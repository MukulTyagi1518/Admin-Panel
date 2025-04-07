import { useState, useEffect } from "react";
import { StatusToggle } from "../marketing/EmailTemplate/MainPageComponents/StatusToggle";
import { SearchBar } from "../marketing/EmailTemplate/MainPageComponents/SearchBar";
import { DataTable } from "../marketing/EmailTemplate/MainPageComponents/DataTable";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmationDialog from "../ConfirmationDialog";
import ReportsDialog from "./component/ReportsDialog";

const ActiveDeliveryPartner = () => {
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
  const [reportsDialog, setReportsDialog] = useState({
    open: false,
    partnerId: null,
    reports: [],
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
            reports: [
              { id: 1, reason: "Late delivery", date: "2023-05-15" },
              { id: 2, reason: "Rude behavior", date: "2023-06-02" },
            ],
          },
          {
            id: 2,
            name: "Jane Smith",
            phone: "+1 555-987-6543",
            rating: 4.5,
            status: "unbanned",
            reports: [],
          },
          {
            id: 3,
            name: "Mike Johnson",
            phone: "+1 555-456-7890",
            rating: 4.2,
            status: "unbanned",
            reports: [{ id: 3, reason: "Damaged package", date: "2023-07-10" }],
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

    // Show toast notification
    toast.success(
      `Partner ${updatedPartner.name} is now ${
        newStatus === "unbanned" ? "Unbanned" : "Banned"
      }.`
    );

    // Here you would also make an API call to update the status in the backend
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
    const partner = deliveryPartners.find((p) => p.id === partnerId);
    setReportsDialog({
      open: true,
      partnerId,
      reports: partner.reports,
      partnerName: partner.name,
    });
  };

  const closeReportsDialog = () => {
    setReportsDialog((prev) => ({ ...prev, open: false }));
  };

  const columns = [
    {
      key: "name",
      title: "Name",
    },
    {
      key: "phone",
      title: "Phone Number",
    },
    {
      key: "rating",
      title: "Rating",
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
            {partner.status === "unbanned" ? "Unbanned" : "Banned"}
          </span>
        </div>
      ),
    },
    {
      key: "actions",
      title: "Actions",
      render: (partner) => (
        <div className="flex space-x-2">
          <button
            onClick={() => handleViewReports(partner.id)}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
          >
            Reports ({partner.reports.length})
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <ToastContainer />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Delivery Partners</h1>
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search partners..."
        />
      </div>

      <DataTable
        columns={columns}
        data={filteredPartners}
        loading={loading}
        emptyMessage="No delivery partners found."
      />

      {/* Confirmation Dialog */}
      <ConfirmationDialog
        open={confirmationDialog.open}
        title="Confirmation"
        message={`Are you sure you want to ${
          confirmationDialog.newStatus === "unbanned" ? "unban" : "ban"
        } ${confirmationDialog.partnerName}?`}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />

      {/* Reports Dialog */}

      <ReportsDialog
        open={reportsDialog.open}
        onClose={closeReportsDialog}
        partnerName={reportsDialog.partnerName}
        reports={reportsDialog.reports}
      />
    </div>
  );
};

export default ActiveDeliveryPartner;
