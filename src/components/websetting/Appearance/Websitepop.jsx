


import { useState } from "react";

export default function Websitepop({
  FaBold, FaItalic, FaUnderline, FaListUl, FaListOl,
  MdOutlineFormatClear, MdFormatColorText, FaTable, FaLink,
  FaImage, FaVideo, FaCode, FaUndo, FaRedo
}) {
  const [popupContent, setPopupContent] = useState("");
  const [subscribeDescription, setSubscribeDescription] = useState("");
  const [showPopup, setShowPopup] = useState(true);
  const [showSubscriberForm, setShowSubscriberForm] = useState(true);

  const handleUpdate = async () => {
    try {
      const res = await fetch("https://e-commerce-backend-1-0.onrender.com/api/website-popup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          popupContent,
          subscribeDescription,
          showPopup,
          showSubscriberForm
        })
      });

      const data = await res.json();
      if (res.ok) {
        alert("Popup settings updated!");
      } else {
        alert(data.message || "Error updating settings");
      }
    } catch (error) {
      alert("Failed to update");
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl mt-6 p-6 mb-10 ml-4 mr-4">
      <h2 className="text-lg font-semibold mb-4"> Website Popup</h2>
      <div className="border-b border-gray-300 mb-4"></div>

      {/* Show Popup Toggle */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2 mt-4">
        <label className="text-sm font-medium text-gray-700 md:w-3/4">Show website popup?</label>
        <div onClick={() => setShowPopup(!showPopup)}
             className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${showPopup ? "bg-green-500" : "bg-gray-300"}`}>
          <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${showPopup ? "translate-x-5" : "translate-x-0"}`} />
        </div>
      </div>

      {/* Popup Content */}
      <div className="flex flex-col md:flex-row md:items-start mt-6 gap-4">
        <label className="md:w-1/4 text-sm font-medium text-gray-700">Popup content</label>
        <div className="w-full md:w-3/4 border border-gray-300 rounded">
          <div className="flex flex-wrap items-center gap-2 p-2 border-b border-gray-200 bg-gray-50">
            {[FaBold, FaItalic, FaUnderline, FaListUl, FaListOl, MdOutlineFormatClear, MdFormatColorText, FaTable, FaLink, FaImage, FaVideo, FaCode, FaUndo, FaRedo].map(
              (Icon, idx) => (
                <button key={idx} type="button" className="p-2 text-gray-600 hover:bg-gray-200 rounded">
                  <Icon size={16} />
                </button>
              )
            )}
          </div>
          <textarea
            className="editor-container w-full p-3 focus:outline-none resize-none"
            rows={6}
            value={popupContent}
            onChange={(e) => setPopupContent(e.target.value)}
            placeholder="Enter popup message..."
          />
        </div>
      </div>

      {/* Show Subscriber Form Toggle */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2 mt-6">
        <label className="text-sm font-medium text-gray-700 md:w-3/4">Show Subscriber form?</label>
        <div onClick={() => setShowSubscriberForm(!showSubscriberForm)}
             className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${showSubscriberForm ? "bg-green-500" : "bg-gray-300"}`}>
          <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${showSubscriberForm ? "translate-x-5" : "translate-x-0"}`} />
        </div>
      </div>

      {/* Description */}
      <div className="mt-4 mb-2">
        <label className="text-sm font-medium text-gray-700">Subscription description (optional)</label>
        <textarea
          className="w-full mt-2 p-3 border border-gray-300 rounded focus:outline-none resize-none"
          rows={3}
          value={subscribeDescription}
          onChange={(e) => setSubscribeDescription(e.target.value)}
        />
      </div>

      {/* Update Button */}
      <div className="text-right mt-5">
        <button
          onClick={handleUpdate}
          className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-6 rounded shadow-sm"
        >
          Update
        </button>
      </div>
    </div>
  );
}
