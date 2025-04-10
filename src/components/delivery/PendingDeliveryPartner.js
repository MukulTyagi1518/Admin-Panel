import { useState, useEffect } from "react";
import { SearchBar } from "../marketing/EmailTemplate/MainPageComponents/SearchBar";
import { DataTable } from "../marketing/EmailTemplate/MainPageComponents/DataTable";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeliveryPartnerService from "../../services/deliveryPartnerService"; // Import the service

const PendingDeliveryPartner = () => {
  const [pendingPartners, setPendingPartners] = useState([]);
  const [filteredPartners, setFilteredPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [detailsDialog, setDetailsDialog] = useState({
    open: false,
    partner: null,
  });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchPendingPartners = async () => {
      try {
        setLoading(true);
        // Fetch all partners and filter for pending status
        const response = await DeliveryPartnerService.getPending();

        const pendingPartners = response
          .filter((partner) => partner.status === "pending")
          .map((partner) => ({
            id: partner._id,
            name: `${partner.firstName} ${partner.lastName}`,
            phone: partner.phone,
            email: partner.email || "N/A",
            documents: [
              {
                type: "Profile Photo",
                verified: partner.documentsVerified >= 1,
                url: partner.profilePhoto || "#",
              },
              {
                type: "Aadhar Card",
                verified: partner.documentsVerified >= 2,
                url: partner.aadharCard || "#",
              },
              {
                type: "Driving License",
                verified: partner.documentsVerified >= 3,
                url: partner.drivingLicense || "#",
              },
            ],
            applicationDate: partner.createdAt || new Date().toISOString(),
            status: partner.status,
            profilePhoto: partner.profilePhoto,
            originalData: partner, // Keep original data for reference
          }));

        setPendingPartners(pendingPartners);
        setFilteredPartners(pendingPartners);
      } catch (error) {
        console.error("Error fetching pending partners:", error);
        toast.error("Failed to load pending applications");
      } finally {
        setLoading(false);
      }
    };

    fetchPendingPartners();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPartners(pendingPartners);
    } else {
      const filtered = pendingPartners.filter(
        (partner) =>
          partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          partner.phone.includes(searchTerm) ||
          partner.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPartners(filtered);
    }
  }, [searchTerm, pendingPartners]);

  const handleViewDetails = (partner) => {
    setDetailsDialog({
      open: true,
      partner,
    });
  };

  const closeDetailsDialog = () => {
    setDetailsDialog({ open: false, partner: null });
  };

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const handleStatusUpdate = async (partnerId, newStatus) => {
    try {
      console.log(`Updating status for partner: ${partnerId} to ${newStatus}`);

      // Call the appropriate API based on the new status
      if (newStatus === "approved") {
        await DeliveryPartnerService.approve(partnerId);
      } else if (newStatus === "rejected") {
        await DeliveryPartnerService.reject(partnerId);
      }

      // Update the frontend state
      const updatedList = pendingPartners.filter(
        (partner) => partner.id !== partnerId
      );
      setPendingPartners(updatedList);
      setFilteredPartners(updatedList);

      toast.success(
        `Application ${
          newStatus === "approved" ? "approved" : "rejected"
        } successfully`
      );
    } catch (error) {
      console.error("Error updating status:", error);

      // Handle errors
      toast.error(
        `Failed to ${
          newStatus === "approved" ? "approve" : "reject"
        } application: ${error.message || "An error occurred"}`
      );
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
      key: "contact",
      title: "Contact",
      render: (partner) => (
        <div>
          <div className="text-gray-900">{partner.phone}</div>
          <div className="text-sm text-gray-500 truncate">{partner.email}</div>
        </div>
      ),
    },
    {
      key: "documents",
      title: "Documents",
      render: (partner) => (
        <div className="text-sm">
          <span className="font-medium">
            {partner.documents.filter((doc) => doc.verified).length}
          </span>
          <span className="text-gray-500">
            /{partner.documents.length} verified
          </span>
        </div>
      ),
    },
    {
      key: "applicationDate",
      title: "Applied On",
      render: (partner) => (
        <span className="text-gray-600 text-sm">
          {new Date(partner.applicationDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      ),
    },
    {
      key: "actions",
      title: "Actions",
      render: (partner) => (
        <button
          onClick={() => handleViewDetails(partner)}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm whitespace-nowrap"
        >
          View Details
        </button>
      ),
    },
  ];

  const renderMobileCard = (partner) => (
    <div
      key={partner.id}
      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-4"
    >
      <div
        className="p-4 flex justify-between items-center cursor-pointer"
        onClick={() => toggleCard(partner.id)}
      >
        <div className="flex items-center">
          <img
            src={partner.profilePhoto}
            alt={partner.name}
            className="w-10 h-10 rounded-full mr-3 object-cover border border-gray-200"
          />
          <div>
            <h3 className="font-medium">{partner.name}</h3>
            <p className="text-sm text-gray-600">{partner.phone}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span
            className={`px-2 py-1 rounded-full text-xs ${
              partner.status === "pending"
                ? "bg-yellow-100 text-yellow-800"
                : partner.status === "approved"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {partner.status.charAt(0).toUpperCase() + partner.status.slice(1)}
          </span>
          <svg
            className={`w-5 h-5 ml-2 text-gray-500 transform transition-transform ${
              expandedCard === partner.id ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {expandedCard === partner.id && (
        <div className="px-4 pb-4 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-sm truncate">{partner.email}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Applied On</p>
              <p className="text-sm">
                {new Date(partner.applicationDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Documents</p>
              <p className="text-sm">
                {partner.documents.filter((doc) => doc.verified).length}/
                {partner.documents.length} verified
              </p>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleViewDetails(partner);
            }}
            className="mt-4 w-full py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 text-sm"
          >
            View Full Details
          </button>
        </div>
      )}
    </div>
  );

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <ToastContainer position="top-right" autoClose={3000} />

        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Pending Delivery Partners
              </h1>
              <p className="text-gray-600 mt-1">
                Showing {filteredPartners.length} application
                {filteredPartners.length !== 1 ? "s" : ""} awaiting approval 
              </p>
            </div>

            <div className="w-full sm:w-80">
              <SearchBar
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Search applicants..."
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : windowWidth < 768 ? (
          <div className="space-y-4">
            {filteredPartners.map((partner) => renderMobileCard(partner))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <DataTable
              columns={columns}
              data={filteredPartners}
              loading={loading}
              emptyMessage={
                <div className="py-12 text-center text-gray-500">
                  No pending applications found
                </div>
              }
            />
          </div>
        )}

        {/* Details Dialog */}
        {detailsDialog.open && detailsDialog.partner && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
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
                <div className="flex items-center">
                  <img
                    src={detailsDialog.partner.profilePhoto}
                    alt={detailsDialog.partner.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover border border-gray-200"
                  />
                  <div>
                    <h3 className="text-lg font-medium">
                      {detailsDialog.partner.name}
                    </h3>
                    <p className="text-gray-600">
                      {detailsDialog.partner.phone}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {detailsDialog.partner.email}
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h3 className="font-medium text-gray-900 mb-2">
                    Application Information
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Status</p>
                      <p>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            detailsDialog.partner.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : detailsDialog.partner.status === "approved"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {detailsDialog.partner.status
                            .charAt(0)
                            .toUpperCase() +
                            detailsDialog.partner.status.slice(1)}
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Applied On</p>
                      <p className="text-sm">
                        {new Date(
                          detailsDialog.partner.applicationDate
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h3 className="font-medium text-gray-900 mb-3">Documents</h3>
                  <div className="space-y-3">
                    {detailsDialog.partner.documents.map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center">
                          <span
                            className={`w-3 h-3 rounded-full mr-3 ${
                              doc.verified ? "bg-green-500" : "bg-red-500"
                            }`}
                          ></span>
                          <span>{doc.type}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">
                            {doc.verified ? "Verified" : "Pending"}
                          </span>
                          <button
                            onClick={() => window.open(doc.url, "_blank")}
                            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                          >
                            View
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    onClick={() => {
                      handleStatusUpdate(detailsDialog.partner.id, "approved");
                      closeDetailsDialog();
                    }}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => {
                      handleStatusUpdate(detailsDialog.partner.id, "rejected");
                      closeDetailsDialog();
                    }}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PendingDeliveryPartner;
