


import { useState } from 'react';
import axios from 'axios';

export default function Cookies({ FaBold, FaLink }) {
  const [cookiesText, setCookiesText] = useState("We use cookies for a better user experience, check our policy here.");
  const [policyUrl, setPolicyUrl] = useState("");
  const [showLinks, setShowLinks] = useState(true);

  const handleUpdate = async () => {
    try {
      const response = await axios.post('https://e-commerce-backend-1-0.onrender.com/api/cookies-agreement', {
        cookiesAgreementText: cookiesText,
        policyUrl,
        showCookiesAgreement: showLinks,
      });
      console.log('Updated successfully:', response.data);
      alert("Cookies Agreement updated!");
    } catch (error) {
      console.error("Error updating:", error);
      alert("Failed to update.");
    }
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl mt-6 p-6 mb-10 ml-4 mr-4">
      <h2 className="text-lg font-semibold mb-4">Cookies Agreement</h2>
      <div className="border-b border-gray-300 mb-4"></div>

      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <label className="md:w-1/4 text-sm font-medium text-gray-700">
          Cookies Agreement Text
        </label>

        <div className="w-full md:w-3/4 border border-gray-300 rounded">
          <div className="flex flex-wrap items-center gap-2 p-2 border-b border-gray-200 bg-gray-50">
            {[FaBold, FaLink].map((Icon, idx) => (
              <button key={idx} type="button" className="p-2 text-gray-600 hover:bg-gray-200 rounded">
                <Icon size={16} />
              </button>
            ))}
          </div>
          <textarea
            rows="6"
            placeholder="Content.."
            className="w-full p-3 focus:outline-none resize-none"
            value={cookiesText}
            onChange={(e) => setCookiesText(e.target.value)}
          ></textarea>
        </div>
      </div>

      {/* Policy URL Input */}
      <div className="flex flex-col md:flex-row md:items-start gap-4 mt-4">
        <label className="md:w-1/4 text-sm font-medium text-gray-700">Policy URL</label>
        <input
          type="text"
          className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
          value={policyUrl}
          onChange={(e) => setPolicyUrl(e.target.value)}
          placeholder="https://yourwebsite.com/privacy-policy"
        />
      </div>

      {/* Toggle switch */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2 mt-4">
        <label className="text-sm font-medium text-gray-700 md:w-3/4">
          Show Cookies Agreement?
        </label>

        <div
          onClick={() => setShowLinks(!showLinks)}
          className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${showLinks ? "bg-green-500" : "bg-gray-300"}`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${showLinks ? "translate-x-5" : "translate-x-0"}`}
          />
        </div>
      </div>

      <div className="text-right mt-3">
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
