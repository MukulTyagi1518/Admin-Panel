import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SearchBar } from "../marketing/EmailTemplate/MainPageComponents/SearchBar";
import { DataTable } from "../marketing/EmailTemplate/MainPageComponents/DataTable";

const ReportsPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const partnerId = searchParams.get("partnerId");
  const [reports, setReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchReports = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const allReports = [
          {
            id: 1,
            orderId: "ORD-1001",
            customerName: "Alice Johnson",
            deliveryPartner: "John Doe",
            partnerId: 1,
            profilePhoto: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg",
            reason: "Late delivery",
            date: "2023-05-15",
            status: "Pending",
          },
          {
            id: 2,
            orderId: "ORD-1002",
            customerName: "Bob Smith",
            deliveryPartner: "John Doe",
            partnerId: 1,
            profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_B8cYF8ZVSmK8ey4GWZx3BSiDAEUDq",
            reason: "Rude behavior",
            date: "2023-06-02",
            status: "Resolved",
          },
          {
            id: 3,
            orderId: "ORD-1003",
            customerName: "Charlie Brown",
            deliveryPartner: "Mike Johnson",
            partnerId: 3,
            profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNkJpg5tIB3DZsMqxgGCyRtSwDuav9LEdbZI06evMasI6tmkPahgI1ftvuA7qbHSsbgg",
            reason: "Damaged package",
            date: "2023-07-10",
            status: "Investigation",
          },
        ];

        // Filter reports if partnerId is provided
        const filteredData = partnerId
          ? allReports.filter((report) => report.partnerId === parseInt(partnerId))
          : allReports;

        setReports(filteredData);
        setFilteredReports(filteredData);
      } catch (error) {
        console.error("Error fetching reports:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, [partnerId]);

  // Filter reports based on search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredReports(reports);
    } else {
      const filtered = reports.filter(
        (report) =>
          report.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
          report.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          report.deliveryPartner.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredReports(filtered);
    }
  }, [searchTerm, reports]);

  const deliveryPartnerPhoto = reports[0]?.profilePhoto;
  const deliveryPartnerName = reports[0]?.deliveryPartner;

  const columns = [
    {
      key: "orderId",
      title: "Order ID",
    },
    {
      key: "customerName",
      title: "Customer",
    },
    {
      key: "reason",
      title: "Reason",
      render: (report) => <span className="line-clamp-1">{report.reason}</span>,
    },
    {
      key: "date",
      title: "Date",
      render: (report) => new Date(report.date).toLocaleDateString(),
    },
    {
      key: "status",
      title: "Status",
      render: (report) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            report.status === "Resolved"
              ? "bg-green-100 text-green-800"
              : report.status === "Pending"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          {report.status}
        </span>
      ),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <ToastContainer position="top-center" />
      
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 sm:mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Delivery Reports</h1>
            {deliveryPartnerName && (
              <p className="text-gray-600">{deliveryPartnerName}</p>
            )}
          </div>
          
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search reports..."
              className="flex-grow"
            />
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-slate-500 hover:bg-gray-700 rounded-lg text-gray-100 transition-colors"
            >
              Back
            </button>
          </div>
        </div>

        {/* Profile Section */}
        {deliveryPartnerPhoto && (
          <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
            <img
              src={deliveryPartnerPhoto}
              alt={`${deliveryPartnerName}'s profile`}
              className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <div>
              <h2 className="font-medium text-gray-800">{deliveryPartnerName}</h2>
              <p className="text-sm text-gray-500">
                {filteredReports.length} report{filteredReports.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-x-auto">
        <DataTable
          columns={columns}
          data={filteredReports}
          loading={loading}
          emptyMessage={
            <div className="py-12 text-center text-gray-500">
              No reports found
            </div>
          }
        />
      </div>
    </div>
  );
};

export default ReportsPage;