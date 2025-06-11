
import React, { useState, useEffect } from "react";
import axios from "axios";

// Settings configuration
const settingsData = [
  {
    section: "System",
    items: [
      { label: "HTTPS Activation" },
      { label: "Maintenance Mode Activation" },
      { label: "Disable image encoding?" }
    ]
  }, 
  {
    section: "Business Related",
    items: [
      { label: "Vendor System Activation" },
      { label: "Classified Product" },
      { label: "Wallet System Activation" },
      { label: "Coupon System Activation" },
      { label: "Pickup Point Activation" },
      { label: "Conversation Activation" },
      {
        label: "Seller Product Manage By Admin",
        description:
          "After activate this option Cash On Delivery of Seller product will be managed by Admin."
      },
      {
        label: "Admin Approval On Seller Product",
        description:
          "After activate this option, Admin approval need to seller product."
      },
      {
        label: "Email Verification",
        description: (
          <>
            You need to configure SMTP correctly to enable this feature.{" "}
            <a href="" className="text-blue-600 underline">
              Configure Now
            </a>
          </>
        )
      },
      { label: "Product Query Activation" },
      { label: "Product External Link for Seller" },
      { label: "Use Floating Buttons In Website" },
      { label: "Last Viewed Products Activation" },
      { label: "Newsletter Activation" },
      { label: "Wholesale Product for Seller" },
      { label: "Auction Product for Seller" },
      {
        label: "Guest Checkout Activation",
        description: (
          <>
            You need to configure SMTP correctly to enable this feature.{" "}
            <a href="/" className="text-blue-600 underline">
              Configure Now
            </a>
          </>
        )
      },
      { label: "Seller Registration Verification" },
      { label: "Customer Registration Verification" }
    ]
  },
  {
    section: "Social Media Login",
    items: [
      {
        label: "Facebook login",
        description: (
          <>
            You need to configure SMTP correctly to enable this feature.{" "}
            <a href="/" className="text-blue-600 underline">
              Configure Now
            </a>
          </>
        )
      },
      {
        label: "Google login",
        description: (
          <>
            You need to configure SMTP correctly to enable this feature.{" "}
            <a href="/" className="text-blue-600 underline">
              Configure Now
            </a>
          </>
        )
      },
      {
        label: "Twitter login",
        description: (
          <>
            You need to configure SMTP correctly to enable this feature.{" "}
            <a href="/" className="text-blue-600 underline">
              Configure Now
            </a>
          </>
        )
      },
      {
        label: "Apple login",
        description: (
          <>
            You need to configure SMTP correctly to enable this feature.{" "}
            <a href="/" className="text-blue-600 underline">
              Configure Now
            </a>
          </>
        )
      }
    ]
  }
];

// ToggleBox component
const ToggleBox = ({ label, isChecked, onToggle, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between min-h-[180px]">
      <div className="text-center font-medium text-gray-800 mb-2">{label}</div>

      <div className="border-t border-gray-200 w-full my-2" />

      <div className="flex flex-col items-center justify-center flex-1">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={onToggle}
            className="sr-only peer"
          />
          <div className="w-11 h-6 ml-12 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition-colors duration-300" />
          <div className="absolute ml-12 top-0.5 left-0.5 w-5 h-5 bg-white border rounded-full transition-all duration-300 peer-checked:translate-x-full" />
        </label>

        {description && (
          <div className="mt-3 w-full bg-blue-100 text-center text-sm text-gray-800 px-4 py-2 rounded">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

// Main component
const SettingsTogglePage = () => {
  const [toggles, setToggles] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch features from API
  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const res = await axios.get("https://e-commerce-backend-1-0.onrender.com/api/features/getAll");
        const featureToggles = res.data.data.reduce((acc, feature) => {
          acc[feature.name] = feature.status;
          return acc;
        }, {});
        setToggles(featureToggles);
      } catch (err) {
        console.error("Error fetching features:", err);
        alert("Failed to load feature settings.");
      } finally {
        setLoading(false);
      }
    };
    fetchFeatures();
  }, []);

  // Handle toggle change
  const handleToggle = async (label) => {
    const newStatus = !toggles[label];
  
    // Optimistically update UI
    setToggles((prev) => ({ ...prev, [label]: newStatus }));
  
    try {
      if (toggles[label] === undefined) {
        // Feature doesn't exist yet, create it
        await axios.post("https://e-commerce-backend-1-0.onrender.com/api/features/create", {
          name: label,
          status: newStatus
        });
      } else {
        // Feature exists, just update
        await axios.patch("https://e-commerce-backend-1-0.onrender.com/api/features/update", {
          name: label,
          status: newStatus
        });
      }
    } catch (err) {
      console.error("Error saving feature toggle:", err);
      alert("Failed to save setting.");
    }
  };
  

  if (loading) {
    return <div className="p-4 text-center text-lg">Loading settings...</div>;
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {settingsData.map((section) => (
        <div key={section.section} className="mb-8">
          <h1 className="text-xl font-semibold text-gray-400 text-center mb-2">
            {section.section}
          </h1>
          <div className="border-b border-gray-300 mb-4" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {section.items.map(({ label, description }) => (
              <ToggleBox
                key={label}
                label={label}
                description={description}
                isChecked={toggles[label] || false}
                onToggle={() => handleToggle(label)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SettingsTogglePage;
