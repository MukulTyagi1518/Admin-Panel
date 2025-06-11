// RazorpaySettings.js
import React from "react";
import ToggleSwitch from "./ToggleSwitch";

const RazorpaySettings = ({ razorpayEnabled, setRazorpayEnabled }) => {
  return (
    <div className="bg-white border rounded-lg shadow-md p-5 space-y-4 w-full">
      <div className="flex justify-between items-center border-b pb-4">
        <div className="flex items-center gap-2">
          <img
            src="/razorpay.png"
            alt="Razorpay"
            className="w-6 h-6 object-contain"
          />
          <h2 className="text-lg font-semibold">Razorpay</h2>
        </div>
        <ToggleSwitch enabled={razorpayEnabled} setEnabled={setRazorpayEnabled} />
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-1">RAZOR KEY</label>
          <input
            type="text"
            placeholder="RAZOR KEY"
            disabled={!razorpayEnabled}
            className="w-full border rounded p-2 disabled:bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">RAZOR SECRET</label>
          <input
            type="text"
            placeholder="RAZOR SECRET"
            disabled={!razorpayEnabled}
            className="w-full border rounded p-2 disabled:bg-gray-100"
          />
        </div>
        <div className="flex justify-end pt-4">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            disabled={!razorpayEnabled}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default RazorpaySettings;
