// import { useState } from "react";
// import "./Edit.css";
// import Switch from "../../components/Switch";


// const permissions = [
//     {
//         category: "Product",
//         options: [
//             "Add New product",
//             "Show All Products",
//             "Show In House Products",
//             "Show Seller Products",
//             "Product Edit",
//             "Product Duplicate",
//             "Product Delete",
//             "Show Digital Products",
//             "Add Digital Product",
//             "Edit Digital Product",
//             "Delete Digital Product",
//             "Download Digital Product",
//             "Product Bulk Import",
//             "Product Bulk Export",
//         ],
//     },
//     {
//         category: "Product Catrgory",
//         options: [
//             "View Product Categories",
//             " Add Product Category",
//             "Edit Product Category",
//             " Delete Product Category",
//             "Set Category Wise Discount",
//         ],
//     },
//     {
//         category: "Brand",
//         options: [
//             " View All Brands",
//             "Add Brand",
//             "Edit Brand",
//             " Delete Brand",
//             "Brand Bulk Upload",
//         ],
//     },
//     {
//         category: "Product Attribute",
//         options: [
//             " View Product Attributes",
//             "Add Product Attribute",
//             "Edit Product Attribute",
//             " Delete Product Attribute",
//             "View Product Attribute Values",
//             "Add Product Attribute Values",
//             "Edit Product Attribute Value",
//             "Delete Product Attribute Value",
//             "View Colors",
//             "Add Color",
//             "Edit Color",
//             "Delete Color"
//         ],
//     },
//     {
//         category: "Product Review",
//         options: [
//             "View Product Reviews",
//             "Publish Product Review",
//             "Add Custom Review",
//             " Edit Custom Review",
//         ],
//     },
//     {
//         category: "Sale",
//         options: [
//             " View All Orders",
//             "View Inhouse Orders",
//             "View Seller Orders",
//             " View Pickup Point Orders",
//             "View Order Details",
//             "Update Order Payment Status",
//             "Update Order Delivery Status",
//             "Delete Order",
//             "View All Unpaid Orders",
//             "Unpaid Order Payment Notification Send",
//         ],
//     },
//     {
//         category: "Customer",
//         options: [
//             "View All Customers",
//             "Login As Customer",
//             "Ban Customer",
//             "Delete Customer",
//             " View Classified Products",
//             " Publish Classified Product",
//             "Delete Classified Product",
//             "View Classified Packages",
//             "Add Classified Package",
//             "Edit Classified Package",
//             "Delete Classified Package",
//             "Add Customer",
//             "Mark Customer Suspected",
//             " Mark Customer Suspected",
//         ],
//     },
//     {
//         category: "Seller",
//         options: [
//             "View All Seller",
//             " View Seller Profile",
//             "Login As Seller",
//             "Pay to seller",
//             "Seller Payment History",
//             " Edit Seller",
//             "Delete Seller",
//             "Ban Seller",
//             " Approve Seller",
//             "View Seller Payout Requests",
//             "Seller Commission Configuration",
//             "Seller Verification Form Configuration",
//             "Add Seller",
//             " View All Seller Rating And Followers",
//             "Edit Seller Custom Followers",
//         ],
//     },
//     {
//         category: "Report",
//         options: [
//             "In House Product Sale Report",
//             "Seller Products Sale Report",
//             " Products Stock Report",
//             " Product Wishlist Report",
//             "User Search Report",
//             "Commission History report",
//             "Wallet Transaction Report",
//             "Earning Report",

//         ],
//     },
//     {
//         category: "Blog",
//         options: [
//             "View Blogs",
//             "Add Blog",
//             "Edit Blog",
//             "Delete Blog",
//             "Publish Blog",
//             "View Blog Categories",
//             "Add Blog Category",
//             "Edit Blog Category",
//             "Delete Blog Category",

//         ],
//     },
//     {
//         category: "Marketing",
//         options: [
//                 "View All Flash Deals",
//                 "Add Flash Deal",
//                 "Edit Flash Deal",
//                 "Delete Flash Deal",
//                 "Publish Flash Deal",
//                 "Featured Flash Deal",
//                 "View All Coupons",
//                 "Add Coupon",
//                 "Edit Coupon",
//                 "Delete Coupon",
//                 "Send Newsletter",
//                 "View All Subscribers",
//                 "Delete Subscriber",
//                 "View All Dynamic Popups",
//                 "Add Dynamic Popups",
//                 "Edit Dynamic Popups",
//                 "Delete Dynamic Popups",
//                 "Publish Dynamic Popups",
//                 "View All Custom Alerts",
//                 "Add Custom Alerts",
//                 "Edit Custom Alerts",
//                 "Delete Custom Alerts",
//                 "Publish Custom Alerts",
//                 "Manage Email Templates",

//         ],
//     },
//     {
//         category: "Support",
//         options: [
//            " View All Support Tickets",
//             "Reply To Support Tickets",
//            " View All Product Queries",
//             "Reply To Product Queries",
//             "View All Product Conversations",
//             "Reply To Product Conversations",
//             "Delete Product Conversations",
//             "View All Contacts",
//             "Reply To Contact",
//         ],
//     },
//     {
//         category: "Website Setup",
//         options: [
//             "Header Setup",
//             "Footer Setup",
//             "Website Appearance",
//             "View All Website Pages",
//             "Add Website Page",
//             "Edit Website Page",
//             "Delete Website Page",
//             "Select Homepage",
//             "Authentication Layout Settings",
//         ],
//     },
//     {
//         category: "Setup Configurations",
//         options: [
//             "General Settings",
//             "Language Setup",
//             "Features activation",
//             "Currency Setup",
//             "Vat & Tax ",
//             "Pickup Point Setup",
//             "SMTP Settings",            
//             "Payment Methods Configurations",
//             "Order Configuration",
//             "File System & Cache Configuration",
//             "Social media Logins",
//             "Facebook Comment",
//             "Analytics Tools Configuration",
//             "Google Recaptcha Configuration",
//             "Google Map Setting",
//             "Google Firebase Setting",
//             "Shipping Configuration",
//             "Shipping Country Setting",
//             "Manage Shipping States",
//             "Manage Shipping Cities",
//             "Manage Zones",
//             "Manage Carriers",
//             "WhatsApp Chat",
//         ],
//     },
//     {
//         category: "Staff",
//         options: [
//            " View All Staffs",
//             "Add Staff",
//            " Edit Staff",
//             "Delete Staff",
//             "View Staff Roles",
//             "Add Staff Role",
//            " Edit Staff Role",
//             "Delete Staff Role",
//         ],
//     },
//     {
//         category: "System",
//         options: [
//            " System Update",
//             "Server status",
//            " Manage Addons",
//             "Admin Dashboard",
           
//         ],
//     },
//     {
//         category: "POS System",
//         options: [
//            " POS Manager",
//             "POS Configuration",
           
//         ],
//     },
//     {
//         category: "Auction",
//         options: [
//            " View All Auction Products",
//             "View Inhouse Auction Products",
//            " View Seller Auction Products",
//             "Add Auction Product",
//             "Edit Auction Product",
//             "Delete Auction Product",
//            " View Auction Product Bids",
//             "Delete Auction Product Bids",
//             "View Auction Product Orders",
//         ],
//     },
// ];

// export default function Edit() {
//     const [toggles, setToggles] = useState(
//       permissions.reduce((acc, perm) => {
//         perm.options.forEach((opt) => {
//           acc[opt] = false;
//         });
//         return acc;
//       }, {})
//     );
  
//     const [selectedLanguage, setSelectedLanguage] = useState("English"); // Default to English
  
//     const handleToggle = (option) => {
//       setToggles((prev) => ({ ...prev, [option]: !prev[option] }));
//     };
  
//     const handleLanguageClick = (language) => {
//         setSelectedLanguage(language);
//     };
      
//     return (
//       <div className="p-6 bg-gray-100 min-h-screen">
//         <div className="bg-white shadow-md p-6 rounded-lg mb-6">
//           <h1 className="text-xl font-bold mb-4">Role Information</h1>
  
//           {/* Languages Section */}
//           <div className="languages-section mb-4">
//             <button
//               className={`language-button ${selectedLanguage === "English" ? "active" : ""}`}
//               onClick={() => handleLanguageClick("English")}
//             >
//               English
//             </button>
//             <button
//               className={`language-button ${selectedLanguage === "Bangla" ? "active" : ""}`}
//               onClick={() => handleLanguageClick("Bangla")}
//             >
//               Bangla
//             </button>
//             <button
//               className={`language-button ${selectedLanguage === "Arabic" ? "active" : ""}`}
//               onClick={() => handleLanguageClick("Arabic")}
//             >
//               Arabic
//             </button>
//             <button
//               className={`language-button ${selectedLanguage === "French" ? "active" : ""}`}
//               onClick={() => handleLanguageClick("French")}
//             >
//               French
//             </button>
//           </div>
  
//           <label className="block text-gray-700 text-sm font-medium mb-2">Name</label>
//           <input
//             type="text"
//             placeholder="Name"
//             className="w-full p-2 border rounded-lg mb-4"
//           />
//         </div>
//         <div className="bg-white shadow-md p-6 rounded-lg">
//           <h2 className="text-lg font-semibold mb-4">Permissions</h2>
//           {permissions.map((perm, idx) => (
//             <div key={idx} className="mb-6">
//               <h3 className="font-semibold text-md mb-3 bg-gray-200 p-2 rounded-lg">
//                 {perm.category}
//               </h3>
//               <div className="grid grid-cols-3 gap-4">
//                 {perm.options.map((option, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border shadow-sm"
//                   >
//                     <span className="text-sm font-medium ">{option}</span>
//                     <label className="relative inline-flex items-center cursor-pointer">
//                       {/* <input
//                         type="checkbox"
//                         className="sr-only peer"
//                         checked={toggles[option]}
//                         onChange={() => handleToggle(option)}
//                       /> */}
//                       <Switch/>
                      
//                       {/* <div
//                         className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-green-500
//                       after:absolute after:top-1/2 after:left-1 after:w-4 after:h-4 after:bg-white after:rounded-full after:transition-all
//                       peer-checked:after:translate-x-5"
//                       ></div> */}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//           <div className="save-btn1">
//             <button type="submit" className="save-button">Save</button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"; // assuming React Router v6+
// import Switch from "../../components/Switch";
// import axios from "axios";
// import "./Edit.css";

// const permissions = [
//   {
//     category: "Product",
//     options: [
//       "Add New product", "Show All Products", "Show In House Products",
//       "Show Seller Products", "Product Edit", "Product Duplicate",
//       "Product Delete", "Show Digital Products", "Add Digital Product",
//       "Edit Digital Product", "Delete Digital Product", "Download Digital Product",
//       "Product Bulk Import", "Product Bulk Export"
//     ],
//   },
//   {
//     category: "Product Category",
//     options: [
//       "View Product Categories", "Add Product Category", "Edit Product Category",
//       "Delete Product Category", "Set Category Wise Discount"
//     ],
//   },
//   {
//     category: "Brand",
//     options: ["View All Brands", "Add Brand", "Edit Brand", "Delete Brand", "Brand Bulk Upload"],
//   },
//   {
//     category: "Product Attribute",
//     options: [
//       "View Product Attributes", "Add Product Attribute", "Edit Product Attribute", "Delete Product Attribute",
//       "View Product Attribute Values", "Add Product Attribute Values", "Edit Product Attribute Value",
//       "Delete Product Attribute Value", "View Colors", "Add Color", "Edit Color", "Delete Color"
//     ],
//   },
//   {
//     category: "Product Review",
//     options: [
//       "View Product Reviews", "Publish Product Review", "Add Custom Review", "Edit Custom Review"
//     ],
//   },
//   {
//     category: "Sale",
//     options: [
//       "View All Orders", "View Inhouse Orders", "View Seller Orders", "View Pickup Point Orders",
//       "View Order Details", "Update Order Payment Status", "Update Order Delivery Status",
//       "Delete Order", "View All Unpaid Orders", "Unpaid Order Payment Notification Send"
//     ],
//   },
//   {
//     category: "Customer",
//     options: [
//       "View All Customers", "Login As Customer", "Ban Customer", "Delete Customer",
//       "View Classified Products", "Publish Classified Product", "Delete Classified Product",
//       "View Classified Packages", "Add Classified Package", "Edit Classified Package",
//       "Delete Classified Package", "Add Customer", "Mark Customer Suspected"
//     ],
//   },
//   {
//     category: "Seller",
//     options: [
//       "View All Seller", "View Seller Profile", "Login As Seller", "Pay to seller",
//       "Seller Payment History", "Edit Seller", "Delete Seller", "Ban Seller", "Approve Seller",
//       "View Seller Payout Requests", "Seller Commission Configuration", "Seller Verification Form Configuration",
//       "Add Seller", "View All Seller Rating And Followers", "Edit Seller Custom Followers"
//     ],
//   },
//   {
//     category: "Report",
//     options: [
//       "In House Product Sale Report", "Seller Products Sale Report", "Products Stock Report",
//       "Product Wishlist Report", "User Search Report", "Commission History report",
//       "Wallet Transaction Report", "Earning Report"
//     ],
//   },
//   {
//     category: "Blog",
//     options: [
//       "View Blogs", "Add Blog", "Edit Blog", "Delete Blog", "Publish Blog",
//       "View Blog Categories", "Add Blog Category", "Edit Blog Category", "Delete Blog Category"
//     ],
//   },
//   {
//     category: "Marketing",
//     options: [
//       "View All Flash Deals", "Add Flash Deal", "Edit Flash Deal", "Delete Flash Deal", "Publish Flash Deal",
//       "Featured Flash Deal", "View All Coupons", "Add Coupon", "Edit Coupon", "Delete Coupon", "Send Newsletter",
//       "View All Subscribers", "Delete Subscriber", "View All Dynamic Popups", "Add Dynamic Popups",
//       "Edit Dynamic Popups", "Delete Dynamic Popups", "Publish Dynamic Popups", "View All Custom Alerts",
//       "Add Custom Alerts", "Edit Custom Alerts", "Delete Custom Alerts", "Publish Custom Alerts", "Manage Email Templates"
//     ],
//   },
//   {
//     category: "Support",
//     options: [
//       "View All Support Tickets", "Reply To Support Tickets", "View All Product Queries",
//       "Reply To Product Queries", "View All Product Conversations", "Reply To Product Conversations",
//       "Delete Product Conversations", "View All Contacts", "Reply To Contact"
//     ],
//   },
//   {
//     category: "Website Setup",
//     options: [
//       "Header Setup", "Footer Setup", "Website Appearance", "View All Website Pages",
//       "Add Website Page", "Edit Website Page", "Delete Website Page", "Select Homepage",
//       "Authentication Layout Settings"
//     ],
//   },
//   {
//     category: "Setup Configurations",
//     options: [
//       "General Settings", "Language Setup", "Features activation", "Currency Setup", "Vat & Tax",
//       "Pickup Point Setup", "SMTP Settings", "Payment Methods Configurations", "Order Configuration",
//       "File System & Cache Configuration", "Social media Logins", "Facebook Comment",
//       "Analytics Tools Configuration", "Google Recaptcha Configuration", "Google Map Setting",
//       "Google Firebase Setting", "Shipping Configuration", "Shipping Country Setting",
//       "Manage Shipping States", "Manage Shipping Cities", "Manage Zones", "Manage Carriers", "WhatsApp Chat"
//     ],
//   },
//   {
//     category: "Staff",
//     options: [
//       "View All Staffs", "Add Staff", "Edit Staff", "Delete Staff", "View Staff Roles",
//       "Add Staff Role", "Edit Staff Role", "Delete Staff Role"
//     ],
//   },
//   {
//     category: "System",
//     options: ["System Update", "Server status", "Manage Addons", "Admin Dashboard"],
//   },
//   {
//     category: "POS System",
//     options: ["POS Manager", "POS Configuration"],
//   },
//   {
//     category: "Auction",
//     options: [
//       "View All Auction Products", "View Inhouse Auction Products", "View Seller Auction Products",
//       "Add Auction Product", "Edit Auction Product", "Delete Auction Product",
//       "View Auction Product Bids", "Delete Auction Product Bids", "View Auction Product Orders"
//     ],
//   },
// ];

// export default function Edit() {
//     const { id } = useParams(); // get role ID from route
//     const [roleName, setRoleName] = useState("");
//     const [toggles, setToggles] = useState({});
//     const [selectedLanguage, setSelectedLanguage] = useState("English");

//     useEffect(() => {
//         async function fetchRole() {
//             try {
//                 const res = await axios.get(`http://localhost:5000/api/role/${id}`);
//                 const { name, permissions } = res.data;
//                 setRoleName(name);
//                 setToggles(permissions);
//             } catch (err) {
//                 console.error("Error fetching role data:", err);
//             }
//         }
//         if (id) fetchRole();
//     }, [id]);

//     const handleToggle = (option) => {
//         setToggles((prev) => ({ ...prev, [option]: !prev[option] }));
//     };

//     const handleSave = async () => {
//         try {
//             const res = await axios.put(`http://localhost:5000/api/role/${id}`, {
//                 name: roleName,
//                 permissions: toggles,
//             });

//             if (res.status === 200) {
//                 alert("Role updated successfully");
//             }
//         } catch (err) {
//             console.error("Error updating role:", err);
//             alert("Failed to update role");
//         }
//     };

//     return (
//         <div className="p-6 bg-gray-100 min-h-screen">
//             <div className="bg-white shadow-md p-6 rounded-lg mb-6">
//                 <h1 className="text-xl font-bold mb-4">Edit Staff Role</h1>

//                 {/* Language Selector */}
//                 <div className="languages-section mb-4">
//                     {["English", "Bangla", "Arabic", "French"].map((lang) => (
//                         <button
//                             key={lang}
//                             className={`language-button ${selectedLanguage === lang ? "active" : ""}`}
//                             onClick={() => setSelectedLanguage(lang)}
//                         >
//                             {lang}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Role Name Input */}
//                 <label className="block text-gray-700 text-sm font-medium mb-2">Role Name</label>
//                 <input
//                     type="text"
//                     value={roleName}
//                     onChange={(e) => setRoleName(e.target.value)}
//                     placeholder="Enter role name"
//                     className="w-full p-2 border rounded-lg mb-4"
//                 />
//             </div>

//             <div className="bg-white shadow-md p-6 rounded-lg">
//                 <h2 className="text-lg font-semibold mb-4">Permissions</h2>
//                 {permissions.map((perm, idx) => (
//                     <div key={idx} className="mb-6">
//                         <h3 className="font-semibold text-md mb-3 bg-gray-200 p-2 rounded-lg">
//                             {perm.category}
//                         </h3>
//                         <div className="grid grid-cols-3 gap-4">
//                             {perm.options.map((option, index) => (
//                                 <div
//                                     key={index}
//                                     className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border shadow-sm"
//                                 >
//                                     <span className="text-sm font-medium">{option}</span>
//                                     <Switch value={toggles[option]} onChange={() => handleToggle(option)} />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//                 <div className="save-btn1 mt-6">
//                     <button
//                         onClick={handleSave}
//                         className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow"
//                     >
//                         Save
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Switch from "../../components/Switch";
import axios from "axios";
import "./Edit.css";

const permissionsList = [
  {
    category: "Product",
    options: [
      "Add New product", "Show All Products", "Show In House Products", "Show Seller Products", "Product Edit",
      "Product Duplicate", "Product Delete", "Show Digital Products", "Add Digital Product", "Edit Digital Product",
      "Delete Digital Product", "Download Digital Product", "Product Bulk Import", "Product Bulk Export",
    ],
  },
  {
    category: "Product Category",
    options: [
      "View Product Categories", "Add Product Category", "Edit Product Category",
      "Delete Product Category", "Set Category Wise Discount",
    ],
  },
  {
    category: "Brand",
    options: ["View All Brands", "Add Brand", "Edit Brand", "Delete Brand", "Brand Bulk Upload"],
  },
  {
    category: "Product Attribute",
    options: [
      "View Product Attributes", "Add Product Attribute", "Edit Product Attribute", "Delete Product Attribute",
      "View Product Attribute Values", "Add Product Attribute Values", "Edit Product Attribute Value",
      "Delete Product Attribute Value", "View Colors", "Add Color", "Edit Color", "Delete Color",
    ],
  },
  {
    category: "Product Review",
    options: [
      "View Product Reviews", "Publish Product Review", "Add Custom Review", "Edit Custom Review",
    ],
  },
  {
    category: "Sale",
    options: [
      "View All Orders", "View Inhouse Orders", "View Seller Orders", "View Pickup Point Orders",
      "View Order Details", "Update Order Payment Status", "Update Order Delivery Status",
      "Delete Order", "View All Unpaid Orders", "Unpaid Order Payment Notification Send",
    ],
  },
  {
    category: "Customer",
    options: [
      "View All Customers", "Login As Customer", "Ban Customer", "Delete Customer",
      "View Classified Products", "Publish Classified Product", "Delete Classified Product",
      "View Classified Packages", "Add Classified Package", "Edit Classified Package",
      "Delete Classified Package", "Add Customer", "Mark Customer Suspected",
    ],
  },
  {
    category: "Seller",
    options: [
      "View All Seller", "View Seller Profile", "Login As Seller", "Pay to seller",
      "Seller Payment History", "Edit Seller", "Delete Seller", "Ban Seller", "Approve Seller",
      "View Seller Payout Requests", "Seller Commission Configuration", "Seller Verification Form Configuration",
      "Add Seller", "View All Seller Rating And Followers", "Edit Seller Custom Followers",
    ],
  },
  {
    category: "Report",
    options: [
      "In House Product Sale Report", "Seller Products Sale Report", "Products Stock Report",
      "Product Wishlist Report", "User Search Report", "Commission History report",
      "Wallet Transaction Report", "Earning Report",
    ],
  },
  {
    category: "Blog",
    options: [
      "View Blogs", "Add Blog", "Edit Blog", "Delete Blog", "Publish Blog",
      "View Blog Categories", "Add Blog Category", "Edit Blog Category", "Delete Blog Category",
    ],
  },
  {
    category: "Marketing",
    options: [
      "View All Flash Deals", "Add Flash Deal", "Edit Flash Deal", "Delete Flash Deal", "Publish Flash Deal",
      "Featured Flash Deal", "View All Coupons", "Add Coupon", "Edit Coupon", "Delete Coupon", "Send Newsletter",
      "View All Subscribers", "Delete Subscriber", "View All Dynamic Popups", "Add Dynamic Popups",
      "Edit Dynamic Popups", "Delete Dynamic Popups", "Publish Dynamic Popups", "View All Custom Alerts",
      "Add Custom Alerts", "Edit Custom Alerts", "Delete Custom Alerts", "Publish Custom Alerts",
      "Manage Email Templates",
    ],
  },
  {
    category: "Support",
    options: [
      "View All Support Tickets", "Reply To Support Tickets", "View All Product Queries",
      "Reply To Product Queries", "View All Product Conversations", "Reply To Product Conversations",
      "Delete Product Conversations", "View All Contacts", "Reply To Contact",
    ],
  },
  {
    category: "Website Setup",
    options: [
      "Header Setup", "Footer Setup", "Website Appearance", "View All Website Pages",
      "Add Website Page", "Edit Website Page", "Delete Website Page", "Select Homepage",
      "Authentication Layout Settings",
    ],
  },
  {
    category: "Setup Configurations",
    options: [
      "General Settings", "Language Setup", "Features activation", "Currency Setup", "Vat & Tax",
      "Pickup Point Setup", "SMTP Settings", "Payment Methods Configurations", "Order Configuration",
      "File System & Cache Configuration", "Social media Logins", "Facebook Comment",
      "Analytics Tools Configuration", "Google Recaptcha Configuration", "Google Map Setting",
      "Google Firebase Setting", "Shipping Configuration", "Shipping Country Setting",
      "Manage Shipping States", "Manage Shipping Cities", "Manage Zones", "Manage Carriers", "WhatsApp Chat",
    ],
  },
  {
    category: "Staff",
    options: [
      "View All Staffs", "Add Staff", "Edit Staff", "Delete Staff", "View Staff Roles",
      "Add Staff Role", "Edit Staff Role", "Delete Staff Role",
    ],
  },
  {
    category: "System",
    options: ["System Update", "Server status", "Manage Addons", "Admin Dashboard"],
  },
  {
    category: "POS System",
    options: ["POS Manager", "POS Configuration"],
  },
  {
    category: "Auction",
    options: [
      "View All Auction Products", "View Inhouse Auction Products", "View Seller Auction Products",
      "Add Auction Product", "Edit Auction Product", "Delete Auction Product",
      "View Auction Product Bids", "Delete Auction Product Bids", "View Auction Product Orders",
    ],
  },
];

export default function Edit() {
  const { id } = useParams();
  const [roleName, setRoleName] = useState("");
  const [toggles, setToggles] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  useEffect(() => {
    async function fetchRole() {
      try {
        const res = await axios.get(`http://localhost:5000/api/role/${id}`);
        const { name, permissions } = res.data;

        setRoleName(name);
        setToggles(permissions || {});
      } catch (err) {
        console.error("Error fetching role data:", err);
      }
    }

    if (id) fetchRole();
  }, [id]);

  const handleToggle = (option) => {
    setToggles((prev) => ({ ...prev, [option]: !prev[option] }));
  };

  const handleSave = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/api/role/${id}`, {
        name: roleName,
        permissions: toggles,
      });

      if (res.status === 200) {
        alert("Role updated successfully");
      }
    } catch (err) {
      console.error("Error updating role:", err);
      alert("Failed to update role");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md p-6 rounded-lg mb-6">
        <h1 className="text-xl font-bold mb-4">Edit Staff Role</h1>

        {/* Language Selector */}
        <div className="languages-section mb-4">
          {["English", "Bangla", "Arabic", "French"].map((lang) => (
            <button
              key={lang}
              className={`language-button ${selectedLanguage === lang ? "active" : ""}`}
              onClick={() => setSelectedLanguage(lang)}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Role Name */}
        <label className="block text-gray-700 text-sm font-medium mb-2">Role Name</label>
        <input
          type="text"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
          placeholder="Enter role name"
          className="w-full p-2 border rounded-lg mb-4"
        />
      </div>

      <div className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Permissions</h2>
        {permissionsList.map((perm, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="font-semibold text-md mb-3 bg-gray-200 p-2 rounded-lg">{perm.category}</h3>
            <div className="grid grid-cols-3 gap-4">
              {perm.options.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border shadow-sm"
                >
                  <span className="text-sm font-medium">{option}</span>
                  <Switch value={toggles[option] || false} onChange={() => handleToggle(option)} />
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="save-btn1 mt-6">
          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}