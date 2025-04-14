


import React, { useState, useEffect } from "react";
import axios from "axios";
import Switch from "../Switch";

const SellerCommission = () => {
  const [commissionType, setCommissionType] = useState("fixed");
  const [sellerCommission, setSellerCommission] = useState(25);
  const [minWithdraw, setMinWithdraw] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [commissionId, setCommissionId] = useState(null);

  const API_URL = "http://localhost:5000/api/seller-commission";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API_URL);
        const data = res.data[0];
        if (data) {
          setCommissionId(data._id);
          setCommissionType(data.commissionType || "fixed");
          setSellerCommission(data.fixedCommissionRate?.sellerCommission || 25);
          setMinWithdraw(data.minSellerWithdrawAmount || "");
          setIsActive(data.isCommissionActive ?? true);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const handleSave = async () => {
    const payload = {
      commissionType,
      minSellerWithdrawAmount: Number(minWithdraw),
      isCommissionActive: isActive,
      fixedCommissionRate: { sellerCommission: Number(sellerCommission) }
    };

    try {
      if (commissionId) {
        await axios.put(`${API_URL}/${commissionId}`, payload);
        alert("Updated successfully!");
      } else {
        const res = await axios.post(API_URL, payload);
        setCommissionId(res.data._id);
        alert("Created successfully!");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Section */}
      <div className="space-y-6">
        {/* Seller Commission Toggle */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-semibold pb-2 border-b border-gray-300">Seller Commission Activation</h3>
          <div className="flex justify-center mt-4">
          <label className="flex items-center gap-2 ml-20 cursor-pointer">
  {/* <span>{isActive ? "Active" : "Inactive"}</span> */}
  <Switch
    value={isActive}
    onChangeFunc={() => setIsActive(!isActive)}
  />
</label>

          </div>
        </div>

        {/* Commission Type */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-semibold pb-2 border-b border-gray-300">Commission Type</h3>
          <table className="w-full border border-gray-300 mt-2">
            <tbody>
              {[
                { label: "Fixed Commission Rate", value: "fixed" },
                { label: "Seller Based Commission Rate", value: "seller_based" },
                { label: "Category Based Commission Rate", value: "category_based" },
              ].map((option) => (
                <tr key={option.value} className="border-b border-gray-300">
                  <td className="p-3">
                    <label className="flex items-center space-x-2 whitespace-nowrap">
                      <input
                        type="radio"
                        name="commissionType"
                        value={option.value}
                        checked={commissionType === option.value}
                        onChange={(e) => setCommissionType(e.target.value)}
                      />
                      <span>{option.label}</span>
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleSave} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Save</button>
        </div>

        {/* Withdraw Seller Amount */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-semibold pb-2 border-b border-gray-300">Withdraw Seller Amount</h3>
          <table className="w-full mt-2">
            <tbody>
              <tr>
                <td className="p-3 w-1/3 font-medium">Minimum Seller Amount Withdraw</td>
                <td className="p-3 w-2/3">
                  <input
                    type="number"
                    placeholder="Minimum Seller Amount Withdraw"
                    value={minWithdraw}
                    onChange={(e) => setMinWithdraw(e.target.value)}
                    className="w-full p-2 rounded border"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-start mt-4">
            <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="space-y-6">
        {/* Notes */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-semibold pb-2 border-b border-gray-300">Note</h3>
          <ul className="text-sm space-y-2 mt-3">
            <li>1. If the Commission Type is Fixed Rate, 25% of seller product price will be deducted.</li>
            <li>
              2. If the Commission Type is Seller Based, set commission percentage <a href="#" className="text-blue-500">Here</a>.
            </li>
            <li>
              3. If the Commission Type is Category Based, set commission percentage <a href="#" className="text-blue-500">Here</a>.
            </li>
          </ul>
        </div>

        {/* Fixed Commission Rate */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-semibold border-b border-gray-300 p-2">Fixed Commission Rate</h3>
          <div className="mt-2 flex items-center p-2">
            <label className="w-1/3 font-medium">Seller Commission</label>
            <div className="flex border border-gray-300 rounded w-1/2">
              <input
                type="number"
                value={sellerCommission}
                onChange={(e) => setSellerCommission(e.target.value)}
                className="w-full p-2 outline-none rounded-l"
              />
              <span className="bg-gray-200 text-gray-700 px-3 flex items-center justify-center rounded-r border-l border-gray-300">%</span>
            </div>
          </div>
          <div className="flex justify-start mt-3">
            <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerCommission;
