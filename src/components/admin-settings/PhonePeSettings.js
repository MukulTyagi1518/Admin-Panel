// PhonePeSettings.js
import React from "react";
import ToggleSwitch from "./ToggleSwitch";

const PhonePeSettings = ({ phonepeEnabled, setPhonepeEnabled }) => {
  return (
    <div className="bg-white border rounded-lg shadow-md p-5 space-y-4">
      <div className="flex justify-between items-center border-b pb-4">
        <div className="flex items-center gap-2">
          <img
            src="/phonepay.png"
            alt="PhonePe"
            className="w-6 h-6 object-contain"
          />
          <h2 className="text-lg font-semibold">PhonePay</h2>
        </div>
        <ToggleSwitch enabled={phonepeEnabled} setEnabled={setPhonepeEnabled} />
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-1">UPI ID</label>
          <input
            type="text"
            placeholder="example@ybl"
            disabled={!phonepeEnabled}
            className="w-full border rounded p-2 disabled:bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">QR Code (optional)</label>
          <input
            type="file"
            disabled={!phonepeEnabled}
            className="w-full border rounded p-2 disabled:bg-gray-100"
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            disabled={!phonepeEnabled}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhonePeSettings;
