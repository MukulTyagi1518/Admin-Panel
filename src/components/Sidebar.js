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
  Grid,
  PackageOpen,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    name: "DashBoard",
    path: "/",
    icon: <Grid size={20} />,
  },
  {
    name: "Products",
    icon: <Package size={20} />,
    subItems: [
      { name: "All product", path: "/products/all" },
      { name: "Add new product", path: "/products/create" },
      { name: "Inhouse product", path: "/products/inhouse" },
      { name: "Bulk import", path: "/products/bulk-import" },
      { name: "Bulk export", path: "/products/bulk-export" },
      {
        name: "Seller product",
        path: "/products/seller",
        subItems: [
          { name: "Digital", path: "/products/seller/digital" },
          { name: "Physical", path: "/products/seller/physical" },
        ],
      },
      { name: "Category", path: "/products/category" },
      { name: "Category based discount", path: "/products/category-discount" },
      { name: "Brand", path: "/products/brand" },
      { name: "Attribute", path: "/products/attribute" },
      { name: "Colour", path: "/products/colour" },
      { name: "Warrenty", path: "/products/warranty" },
      { name: "Product review", path: "/products/review" },
      { name: "Product based discount", path: "/products/product-discount" },
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
      { name: "All Orders", path: "/preorder/all-orders" },
      { name: "Inhouse Orders", path: "/preorder/inhouse-orders" },
      { name: "Sellers Orders", path: "/preorder/seller-orders" },
      {
        name: "Delayed Prepayment Orders",
        path: "/preorder/delayed-prepayment-orders",
      },
      { name: "Delayed Final Orders", path: "/preorder/delayed-final-orders" },
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
      {
        name: "Email Template",
        path: "/marketing/email-templates",
        subItems: [
          { name: "Admin Templates", path: "/marketing/email-templates/admin" },
          {
            name: "Seller Templates",
            path: "/marketing/email-templates/seller",
          },
          {
            name: "Customer Templates",
            path: "/marketing/email-templates/customer",
          },
          {
            name: "Common Templates",
            path: "/marketing/email-templates/common",
          },
        ],
      },
      {
        name: "Custom Alert popup",
        path: "/marketing/custom-alert",
      },
      {
        name: "News Letter",
        path: "/marketing/all-news-letters",
      },
      {
        name: "Notification",
        path: "/marketing/notification",
        subItems: [
          { name: "Settings", path: "/marketing/notification/settings" },
          { name: "Notification Types", path: "/marketing/notification/types" },
          {
            name: "Custom Notification",
            path: "/marketing/notification/custom-notification",
          },
          {
            name: "Custom Notification History",
            path: "/marketing/notification/custom-notification/history",
          },
        ],
      },
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
      {
        name: "Home page settings",
        path: "/web-settings/home",
      },

      { name: "Header setting", path: "/web-settings/header" },
      { name: "Footer setting", path: "/web-settings/footer" },
      { name: "Page", path: "/web-settings/page" },

      { name: "Apearence", path: "/web-settings/apearence" },
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
      {
        name: "Shipping",
        path: "/admin-settings/shipping",
        subItems: [
          {
            name: "Shipping Configuration",
            path: "/admin-settings/shipping/configuration",
          },
          {
            name: "Shipping Countries",
            path: "/admin-settings/shipping/countries",
          },
          {
            name: "Shipping State",
            path: "/admin-settings/shipping/state",
          },
          {
            name: "Shipping Cities",
            path: "/admin-settings/shipping/cities",
          },
          {
            name: "Shipping Zones",
            path: "/admin-settings/shipping/zones",
          },
          {
            name: "Shipping Carrier",
            path: "/admin-settings/shipping/carrier",
          },
        ],
      },
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
  {
    name: "Delivery Partners",
    icon: <PackageOpen size={20} />,
    subItems: [
      { name: "Registration Form", path: "/delivery/registration" },
      { name: "All Delivery Partners", path: "/delivery/all" },
      { name: "Active Delivery Partners", path: "/delivery/active" },
      { name: "Inactive Delivery Partners", path: "/delivery/inactive" },
      { name: "Pending Delivery Partners", path: "/delivery/pending" },
    ],
    path: "/delivery",
  },
];

function Sidebar({ isSidebarVisible }) {
  const [openItems, setOpenItems] = useState({});
  const navigate = useNavigate();

  const toggleItem = (key) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSubItemClick = (path) => {
    navigate(path); // Navigate to the specified path
  };
  const renderSubItems = (subItems) => {
    return (
      <ul className=" pl-5 py-2 space-y-1">
        {subItems.map((subItem, subIndex) => (
          <li
            key={subIndex}
            className="flex flex-col items-start py-1 cursor-pointer text-white hover:text-sky-500"
          >
            {subItem.subItems ? (
              <>
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleItem(subItem.name)}
                >
                  <span>{subItem.name}</span>
                  {openItems[subItem.name] ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </div>
                {openItems[subItem.name] && (
                  <ul className="flex flex-col  ">
                    {renderSubItems(subItem.subItems)}
                  </ul>
                )}
              </>
            ) : (
              <span
                className=" w-full "
                onClick={() => handleSubItemClick(subItem.path)}
              >
                {subItem.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div
      className={`
        ${isSidebarVisible ? "w-[280px]" : "w-[70px]"} 
        bg-slate-900 text-white flex flex-col overflow-y-auto py-5 transition-all duration-300
      `}
    >
      {/* Logo */}
      {isSidebarVisible && (
        <div className="flex items-center px-5 mb-5">
          <div className="flex flex-row leading-5">
            <span className="text-white font-bold">Admin</span>
            <span className="text-sky-600 font-bold">Panel</span>
          </div>
        </div>
      )}

      {/* Search */}
      {isSidebarVisible && (
        <div className="relative px-5 mb-5">
          <input
            type="text"
            placeholder="Search in menu"
            className="w-full bg-[#2a2f42] border-none rounded-md py-2.5 px-3.5 pr-10 text-white placeholder-[#6c7293] focus:outline-none"
          />
          <Search
            size={18}
            className="absolute right-14 lg:right-7 top-1/2 transform -translate-y-1/2 text-[#6c7293]"
          />
        </div>
      )}

      {/* Menu */}
      <div className="flex flex-col">
        {menuItems.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div
              className={`flex items-center justify-between py-3 px-5 cursor-pointer transition-colors duration-150 hover:bg-white/10 ${
                openItems[index]
                  ? "text-white bg-white/5 border-l-4 border-[#ff5722]"
                  : "text-white "
              }`}
              onClick={() => {
                if (item.subItems && item.subItems.length > 0) {
                  toggleItem(index);
                } else {
                  navigate(item.path);
                }
              }}
            >
              <div className="flex items-center gap-2  ">
                {item.icon}
                {isSidebarVisible && <span>{item.name}</span>}
              </div>
              {isSidebarVisible &&
                item.subItems &&
                item.subItems.length > 0 &&
                (openItems[index] ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                ))}
            </div>
            {openItems[index] &&
              item.subItems &&
              item.subItems.length > 0 &&
              isSidebarVisible && (
                <div className="pl-5 ">{renderSubItems(item.subItems)}</div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
