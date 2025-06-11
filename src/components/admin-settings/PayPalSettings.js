import React, { useState } from "react";

const CashfreeSettings = () => {
  const [cashfreeEnabled, setCashfreeEnabled] = useState(false);
  const [cashfreeSandbox, setCashfreeSandbox] = useState(false);
  const [appId, setAppId] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSave = () => {
    const data = {
      enabled: cashfreeEnabled,
      sandbox: cashfreeSandbox,
      appId,
      secretKey,
    };
    console.log("Saving Cashfree Config:", data);
    // Call API here
  };

  // Inline toggle component
  const Toggle = ({ value, onChange }) => (
    <button
      type="button"
      onClick={() => onChange(!value)}
      className={`w-12 h-6 flex items-center rounded-full p-1 transition duration-300 ease-in-out ${
        value ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow transform transition-transform duration-300 ${
          value ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );

  return (
    <div className="bg-white border rounded-lg shadow-md p-5 space-y-4 w-full max-w-lg">
      <div className="flex justify-between items-center border-b pb-4">
        <div className="flex items-center gap-2">
        <img
            src="/cashfree.png"
            alt="cashfree"
            className="w-6 h-6 object-contain"
          />

          <h2 className="text-lg font-semibold">Cashfree</h2>
        </div>
        <Toggle value={cashfreeEnabled} onChange={setCashfreeEnabled} />
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Cashfree App ID</label>
          <input
            type="text"
            value={appId}
            onChange={(e) => setAppId(e.target.value)}
            placeholder="Cashfree App ID"
            disabled={!cashfreeEnabled}
            className="w-full border rounded p-2 disabled:bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Cashfree Secret Key</label>
          <input
            type="text"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
            placeholder="Cashfree Secret Key"
            disabled={!cashfreeEnabled}
            className="w-full border rounded p-2 disabled:bg-gray-100"
          />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold">Cashfree Sandbox Mode</label>
          <Toggle value={cashfreeSandbox} onChange={setCashfreeSandbox} />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
            disabled={!cashfreeEnabled}
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CashfreeSettings;
