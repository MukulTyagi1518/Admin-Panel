


import { useEffect, useState } from "react";
import axios from "axios";
import { X } from "lucide-react";
import "./preOrderSetting.scss";
import Switch from "../../Switch";

export default function PreOrderSetting() {
    const [preOrderId, setPreOrderId] = useState(null);

    const [commission, setCommission] = useState({ amount: "", status: true });
    const [flatRate, setFlatRate] = useState("");
    const [marketingImage, setMarketingImage] = useState({ name: "Choose file", src: "", file: null });
    const [preorderInstructions, setPreorderInstructions] = useState("");
    const [paymentInstructions, setPaymentInstructions] = useState("");
    const [qrCode, setQrCode] = useState({ name: "Choose file", src: "", file: null });

    // Fetch settings on mount
    useEffect(() => {
        const fetchSettings = async () => {
            const res = await axios.get("http://localhost:5000/api/preorder-setting");
            if (res.data && res.data.length > 0) {
                const data = res.data[0];
                setPreOrderId(data._id);
                setCommission({ amount: data.sellerCommission?.amount || "", status: data.sellerCommission?.status === "active" });
                setFlatRate(data.flatRateShipping || "");
                setMarketingImage({ name: "Choose file", src: data.marketingImage || "", file: null });
                setPreorderInstructions(data.preorderInstructions || "");
                setPaymentInstructions(data.paymentInstructions || "");
                setQrCode({ name: "Choose file", src: data.paymentQRCode || "", file: null });
            }
        };
        fetchSettings();
    }, []);

    const handleUpdate = async (field, payload, files = null) => {
        if (!preOrderId) return alert("Settings ID not found!");

        const formData = new FormData();
        if (files) {
            for (const key in files) {
                formData.append(key, files[key]);
            }
        }

        for (const key in payload) {
            formData.append(key, payload[key]);
        }

        try {
            await axios.put(`http://localhost:5000/api/preorder-setting/${preOrderId}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            alert(`${field} updated successfully`);
        } catch (err) {
            console.error(err);
            alert(`Failed to update ${field}`);
        }
    };

    return (
        <div className="mx-auto my-10 space-y-10 max-w-[700px]">

        {/* Seller Commission */}
        <div className="border rounded-xl shadow p-6 bg-white">
          <h2 className="text-lg font-semibold mb-4">PreOrder Seller Commission</h2>
          <div className="border-b-2 mb-4"></div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium">PreOrder Product for Seller</p>
              <Switch
                value={commission.status}
                onChangeFunc={(e) =>
                  setCommission({ ...commission, status: e.target.checked })
                }
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium">PreOrder Seller Commission</p>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  className="border rounded px-3 py-1 w-24"
                  value={commission.amount}
                  onChange={(e) =>
                    setCommission({ ...commission, amount: e.target.value })
                  }
                />
                <span className="text-sm font-medium">%</span>
              </div>
            </div>
            <div className="text-right">
              <button
                className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition"
                onClick={() =>
                  handleUpdate("Seller Commission", {
                    sellerCommissionAmount: commission.amount,
                    sellerCommissionStatus: commission.status ? "active" : "inactive",
                  })
                }
              >
                Update
              </button>
            </div>
          </div>
        </div>
      
        {/* Marketing Image and Flat Rate */}
        <div className="border rounded-xl shadow p-6 bg-white">
          <h2 className="text-lg font-semibold mb-4">PreOrder Settings</h2>
          <div className="border-b-2 mb-4"></div>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-1">Image for Product Marketing</p>

              <div className="flex items-center gap-3">
                <label className="cursor-pointer bg-gray-100 border px-3 py-1 rounded hover:bg-gray-200 transition">
                  Browse
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      setMarketingImage({
                        name: file.name,
                        src: URL.createObjectURL(file),
                        file,
                      });
                    }}
                  />
                </label>
                <span className="text-sm">{marketingImage.name}</span>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Product Flat Rate Shipping</p>
              <input
                type="number"
                className="border rounded px-3 py-1 w-full"
                value={flatRate}
                onChange={(e) => setFlatRate(e.target.value)}
              />
            </div>
            <div className="text-right">
              <button
                className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition"
                onClick={() =>
                  handleUpdate("Marketing & Shipping", { flatRateShipping: flatRate }, {
                    marketingImage: marketingImage.file,
                  })
                }
              >
                Update
              </button>
            </div>
          </div>
        </div>
      
        {/* PreOrder Instructions */}
        <div className="border rounded-xl shadow p-6 bg-white">
          <h2 className="text-lg font-semibold mb-4">PreOrder Instructions</h2>
          <div className="border-b-2 mb-4"></div>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-1">Preorder Request Instructions</p>
              <textarea
                className="w-full border rounded p-3 min-h-[120px]"
                value={preorderInstructions}
                onChange={(e) => setPreorderInstructions(e.target.value)}
              ></textarea>
            </div>
            <div className="text-right">
              <button
                className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition"
                onClick={() =>
                  handleUpdate("PreOrder Instructions", { preorderInstructions })
                }
              >
                Update
              </button>
            </div>
          </div>
        </div>
      
        {/* Payment Instructions and QR */}
        <div className="border rounded-xl shadow p-6 bg-white">
          <h2 className="text-lg font-semibold mb-4">Payment Instructions</h2>
          <div className="border-b-2 mb-4"></div>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-2">Image For Payment QR Code</p>
              <div className="flex items-center gap-3">
                <label className="cursor-pointer bg-gray-100 border px-3 py-1 rounded hover:bg-gray-200 transition">
                  Browse
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      setQrCode({
                        name: file.name,
                        src: URL.createObjectURL(file),
                        file,
                      });
                    }}
                  />
                </label>
                <span className="text-sm">{qrCode.name}</span>
              </div>
            </div>
            {qrCode.src && (
              <div className="relative w-32 h-32">
                <img src={qrCode.src} alt="" className="w-full h-full object-contain" />
                <div
                  onClick={() => setQrCode({ name: "Choose file", src: "", file: null })}
                  className="absolute top-1 right-1 bg-white p-1 rounded-full shadow cursor-pointer"
                >
                  <X size={18} color="blue" />
                </div>
              </div>
            )}
            <div>
              <p className="text-sm font-medium mb-1">Payment Instructions</p>
              <textarea
                className="w-full border rounded p-3 min-h-[120px]"
                value={paymentInstructions}
                onChange={(e) => setPaymentInstructions(e.target.value)}
              ></textarea>
            </div>
            <div className="text-right">
              <button
                className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition"
                onClick={() =>
                  handleUpdate("Payment", { paymentInstructions }, {
                    paymentQRCode: qrCode.file,
                  })
                }
              >
                Update
              </button>
            </div>
          </div>
        </div>
      
      </div>
      
    );
}