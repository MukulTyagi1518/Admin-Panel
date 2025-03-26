import React, { useState } from "react";
import {
  Search,
  Clock,
  FileText,
  Package,
  BarChart2,
  RefreshCcw,
  Users,
  User,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    name: "Products",
    icon: <Package size={20} />,
    subItems: [
      { name: "All product", path: "/products/all" },
      { name: "Add new product", path: "/products/create" },
      { name: "Inhouse product", path: "/products/inhouse" },
      { name: "Bulk import", path: "/products/bulk-import" },
      { name: "Bulk export", path: "/products/bulk-export" },
      { name: "Seller product", path: "/products/seller" },
      { name: "Category", path: "/products/category" },
      { name: "Category based discount", path: "/products/category-discount" },
      { name: "Brand", path: "/products/brand" },
      { name: "Attribute", path: "/products/attribute" },
      { name: "Colour", path: "/products/colour" },
      { name: "Warrenty", path: "/products/warranty" },
      { name: "Product review", path: "/products/review" },
    ],
    path: "/products",
  },
  {
    name: "Preorder",
    icon: <Clock size={20} />,
    subItems: [
      { name: "Dashboard", path: "/preorder/dashboard" },
      { name: "Preorder product", path: "/preorder/product" },
      { name: "Preorder setting", path: "/preorder/setting" },
      { name: "Preorder Product Queries", path: "/preorder/queries" },
      { name: "Preorder Product Reviews", path: "/preorder/reviews" },
      { name: "Preorder Notification", path: "/preorder/notification" },
      { name: "Preorder FAQ", path: "/preorder/faq" },
    ],
    path: "/preorder",
  },
  {
    name: "Wholesale Products",
    icon: <Package size={20} />,
    subItems: [
      { name: "All wholesale products", path: "/wholesale/all" },
      { name: "Add new whole sale product", path: "/wholesale/add" },
      { name: "Inhouse wholesale products", path: "/wholesale/inhouse" },
      { name: "Seller wholesale products", path: "/wholesale/seller" },
    ],
    path: "/wholesale",
  },
  {
    name: "Sales",
    icon: <BarChart2 size={20} />,
    subItems: [
      { name: "All order", path: "/sales/all" },
      { name: "Inhouse order", path: "/sales/inhouse" },
      { name: "Seller order", path: "/sales/seller" },
      { name: "Unpaid order", path: "/sales/unpaid" },
      { name: "Paid order", path: "/sales/paid" },
    ],
    path: "/sales",
  },
  {
    name: "Refunds",
    icon: <RefreshCcw size={20} />,
    subItems: [
      { name: "Refund request", path: "/refunds/request" },
      { name: "Approved request", path: "/refunds/approved" },
      { name: "Reject", path: "/refunds/reject" },
    ],
    path: "/refunds",
  },
  {
    name: "Customers",
    icon: <Users size={20} />,
    subItems: [{ name: "All customer", path: "/customers/all" }],
    path: "/customers",
  },
  {
    name: "Sellers",
    icon: <User size={20} />,
    subItems: [
      { name: "All seller", path: "/sellers/all" },
      { name: "Seller rating and followers", path: "/sellers/rating" },
      { name: "Payout", path: "/sellers/payout" },
      { name: "Payout request", path: "/sellers/payout-request" },
      { name: "Seller verify account", path: "/sellers/verify" },
      { name: "Seller commission", path: "/sellers/commission" },
    ],
    path: "/sellers",
  },
  {
    name: "Reports",
    icon: <FileText size={20} />,
    subItems: [
      { name: "Earning reports", path: "/reports/earnings" },
      { name: "Inhouse product sale", path: "/reports/inhouse-sale" },
      { name: "Seller product sale", path: "/reports/seller-sale" },
      { name: "Product stock", path: "/reports/stock" },
      { name: "User searches", path: "/reports/searches" },
      { name: "Commission history", path: "/reports/commission" },
    ],
    path: "/reports",
  },
  {
    name: "Marketing",
    icon: <BarChart2 size={20} />,
    subItems: [
      { name: "Best weekly product", path: "/marketing/best-weekly" },
      { name: "Best seller product", path: "/marketing/best-seller" },
      { name: "Flash deal", path: "/marketing/flash-deal" },
      { name: "Seller ads marketing", path: "/marketing/ads" },
    ],
    path: "/marketing",
  },
  {
    name: "Support",
    icon: <Users size={20} />,
    subItems: [
      { name: "Ticket", path: "/support/ticket" },
      { name: "Product queries", path: "/support/queries" },
      { name: "Conversations", path: "/support/conversations" },
      { name: "Contact", path: "/support/contact" },
    ],
    path: "/support",
  },
  {
    name: "Web Settings",
    icon: <FileText size={20} />,
    subItems: [
      { name: "Home page settings", path: "/web-settings/home" },
      { name: "Header setting", path: "/web-settings/header" },
      { name: "Footer setting", path: "/web-settings/footer" },
      { name: "Page", path: "/web-settings/page" },
      { name: "Email templates", path: "/web-settings/email" },
      { name: "Custom alert popup", path: "/web-settings/alert" },
      { name: "News letter", path: "/web-settings/newsletter" },
      { name: "Notification", path: "/web-settings/notification" },
      { name: "Subscribers", path: "/web-settings/subscribers" },
    ],
    path: "/web-settings",
  },
  {
    name: "Admin Settings",
    icon: <FileText size={20} />,
    subItems: [
      { name: "Features Activation", path: "/admin-settings/features" },
      { name: "Vax And Tax or gst", path: "/admin-settings/tax" },
      { name: "Payment method", path: "/admin-settings/payment" },
      { name: "Shipping", path: "/admin-settings/shipping" },
      { name: "Apearence", path: "/admin-settings/apearence" },
    ],
    path: "/admin-settings",
  },
  {
    name: "Staffs",
    icon: <Users size={20} />,
    subItems: [
      { name: "All Staffs", path: "/staffs/all" },
      { name: "Staffs role and permission", path: "/staffs/roles" },
    ],
    path: "/staffs",
  },
];

function Sidebar() {
  const [openItems, setOpenItems] = useState({});
  const navigate = useNavigate();

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleSubItemClick = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className="w-[280px] bg-slate-900 text-white flex flex-col overflow-y-auto py-5">
      {/* Logo */}
      <div className="flex items-center px-5 mb-5">
        <div className="flex flex-row leading-5">
          <span className="text-white font-bold">Admin</span>
          <span className="text-sky-600 font-bold">Panel</span>
        </div>
      </div>

      {/* Search */}
      <div className="relative px-5 mb-5">
        <input
          type="text"
          placeholder="Search in menu"
          className="w-full bg-[#2a2f42] border-none rounded-md py-2.5 px-3.5 pr-10 text-white placeholder-[#6c7293] focus:outline-none"
        />
        <Search size={18} className="absolute right-8 top-1/2 transform -translate-y-1/2 text-[#6c7293]" />
      </div>

      {/* Menu */}
      <div className="flex flex-col">
        {menuItems.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div
              className={`flex items-center justify-between py-3 px-5 cursor-pointer transition-colors duration-150 hover:bg-white/10 ${openItems[index] ? "text-white bg-white/5 border-l-4 border-[#ff5722]" : "text-white"
                }`}
              onClick={() => toggleItem(index)}
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <span>{item.name}</span>
              </div>
              {item.subItems.length > 0 && (openItems[index] ? <ChevronUp size={20} /> : <ChevronDown size={20} />)}
            </div>
            {openItems[index] && item.subItems.length > 0 && (
              <ul className="pl-12 py-2 space-y-1">
                {item.subItems.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="py-1 cursor-pointer text-white hover:text-sky-500"
                    onClick={() => handleSubItemClick(subItem.path)} // Navigate on click
                  >
                    {subItem.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}



export default Sidebar;
