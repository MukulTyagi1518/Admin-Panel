


import { useState } from "react";

export default function FooterInfo() {
  const [title, setTitle] = useState("");
  const [footerDescription, setFooterDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpdate = async () => {
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("https://e-commerce-backend-1-0.onrender.com/api/footerinfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, footerDescription }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Footer info updated successfully ✅");
      } else {
        setMessage(data.message || "Failed to update ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6">
        <h3 className="text-base font-semibold text-gray-800 mb-4">
          Footer Info Widget
        </h3>
        <div className="border-b border-gray-300 mb-4"></div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title (Translatable)
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
            placeholder="Active eCommerce CMS | AN ONLINE SHOPPING PLATFORM WITH GREAT DEALS"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Footer description (Translatable)
          </label>
          <textarea
            rows="5"
            value={footerDescription}
            onChange={(e) => setFooterDescription(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 text-sm resize-y"
            placeholder="Enter footer description..."
          ></textarea>
        </div>

        <div className="text-right">
          <button
            onClick={handleUpdate}
            disabled={loading}
            className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-6 rounded shadow-sm disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </div>

        {message && (
          <p className="text-sm text-center mt-4 text-blue-600">{message}</p>
        )}
      </div>
    </div>
  );
}