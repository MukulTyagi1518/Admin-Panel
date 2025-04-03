import { useState } from "react";
import { Mail, Edit2 } from "lucide-react";
import { Link } from "react-router-dom";
import Pagination from "../../../Pagination"; // Import Pagination Component

const EmailTemplateSeller = () => {
    const [templates, setTemplates] = useState([
        {
          id: 1,
          EmailType: "Seller Own Account Registration",
          subject: "Welcome to [[store_name]]",
          status: "Active",
        },
        {
          id: 2,
          EmailType: "Seller Registration By Admin",
          subject: "Welcome to - [[store_name]]",
          status: "Active",
        },
        {
          id: 3,
          EmailType: "Email Verification",
          subject: "Verify Your Email to Activate Your Seller Account at [[store_name]]",
          status: "Active",
        },
        {
          id: 4,
          EmailType: "Order Placed",
          subject: "A new order [[order_code]] has been placed!",
          status: "Active",
        },
        {
          id: 5,
          EmailType: "Order Confirmed",
          subject: "New Order Confirmed - [[order_code]]",
          status: "Active",
        },
        {
          id: 6,
          EmailType: "Order Picked Up",
          subject: "Order Picked Up - [[order_code]]",
          status: "Active",
        },
        {
          id: 7,
          EmailType: "Order On The Way",
          subject: "Order On The Way - [[order_code]]",
          status: "Active",
        },
        {
          id: 8,
          EmailType: "Order Delivered",
          subject: "Order Delivered - [[order_code]]",
          status: "Active",
        },
        {
          id: 9,
          EmailType: "Order Cancelled",
          subject: "Order Cancelled - [[order_code]]",
          status: "Inactive",
        },
        {
          id: 10,
          EmailType: "Order Paid",
          subject: "Payment Received for Order [[order_code]]",
          status: "Active",
        },
        {
            id: 11,
            EmailType: "Refund Request",
            subject: "New Refund Request for Order [[order_code]]",
            status: "Active",
          },
          {
            id: 12,
            EmailType: "Refund Request Accepted by Admin",
            subject: "Refund Request Accepted for Order [[order_code]]",
            status: "Active",
          },
          {
            id: 13,
            EmailType: "Refund Request Accepted by Seller",
            subject: "Refund Request Accepted for Order [[order_code]]",
            status: "Active",
          },
          {
            id: 14,
            EmailType: "Refund Request Denied by Admin",
            subject: "Refund Request Denied for Order [[order_code]]",
            status: "Active",
          },
          {
            id: 15,
            EmailType: "Refund Request Denied by Seller",
            subject: "Refund Request Denied for Order [[order_code]]",
            status: "Active",
          },
          {
            id: 16,
            EmailType: "Payout Request",
            subject: "Payout Request Received at [[store_name]]",
            status: "Active",
          },
          {
            id: 17,
            EmailType: "Payout Received",
            subject: "Payment Confirmation from [[store_name]]",
            status: "Active",
          },
          {
            id: 18,
            EmailType: "Email Verification for Registration",
            subject: "Email Verification on [[store_name]]",
            status: "Active",
          },
      ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const toggleStatus = (id) => {
    setTemplates((prevTemplates) =>
      prevTemplates.map((template) =>
        template.id === id
          ? {
              ...template,
              status: template.status === "Active" ? "Inactive" : "Active",
            }
          : template
      )
    );
  };

  const filteredTemplates = templates.filter(
    (template) =>
      template.EmailType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTemplates.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTemplates.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header & Search */}
        <div className="bg-white rounded-lg shadow p-4 mb-6 flex justify-between">
          <h1 className="text-xl font-bold flex items-center">
            <Mail className="w-6 h-6 mr-2" />
           Seller Email Templates
          </h1>
          <input
            type="text"
            placeholder="Search templates..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Templates Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Email Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Subject
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentItems.length > 0 ? (
                  currentItems.map((template) => (
                    <tr key={template.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {template.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {template.EmailType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {template.subject}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <label className="switch inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={template.status === "Active"}
                            onChange={() => toggleStatus(template.id)}
                            className="sr-only peer"
                          />
                          <div className="slider w-10 h-5 bg-gray-300 rounded-full peer peer-focus:ring-2 peer-focus:ring-green-500 peer-checked:bg-green-500"></div>
                        </label>
                      </td>

                      <td className="px-6 py-4 text-sm font-medium">
                        <Link
                          to="edit"
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-6 py-4 text-center text-sm text-gray-500"
                    >
                      No templates found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Component */}
          {filteredTemplates.length > itemsPerPage && (
            <div className="p-4 border-t">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailTemplateSeller;
