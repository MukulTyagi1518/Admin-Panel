import React, { useState } from "react";

const SellerCommission = () => {
    const [commissionType, setCommissionType] = useState("fixed");
    const [sellerCommission, setSellerCommission] = useState(25);
    const [minWithdraw, setMinWithdraw] = useState("");
    const [isActive, setIsActive] = useState(true);

    return (
        <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Side */}
            <div className="space-y-6">
                {/* Seller Commission Activation */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold pb-2 border-b border-gray-300">Seller Commission Activation</h3>
                    <div className="flex justify-center mt-4">
                        <label className="flex items-center ml-20 cursor-pointer">
                            <input type="checkbox" checked={isActive} onChange={() => setIsActive(!isActive)} className="hidden " />
                            <div className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 transition ${isActive ? "bg-green-500" : ""}`}>
                                <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${isActive ? "translate-x-6" : ""}`}></div>
                            </div>
                        </label>
                    </div>
                </div>

                {/* Commission Type */}
                {/* Commission Type in Table */}
<div className="bg-white p-4 rounded-lg shadow-md">
  <h3 className="font-semibold pb-2 border-b border-gray-300">Commission Type</h3>
  <table className="w-full border border-gray-300 mt-2">
    <tbody>
      {[
        { label: "Fixed Commission Rate", value: "fixed" },
        { label: "Seller Based Commission Rate", value: "seller" },
        { label: "Category Based Commission Rate", value: "category" },
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
  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded ">Save</button>
</div>


                {/* Withdraw  */}
               
<div className="bg-white p-4 border-none rounded-lg shadow-md">
  <h3 className="font-semibold pb-2 border-b border-gray-300">Withdraw Seller Amount</h3>
  <table className="w-full border-none mt-2">
    <tbody className="border-none">
      <tr>
        <td className="p-3 w-1/3 font-medium">Minimum Seller Amount Withdraw</td>
        <td className="p-3 w-2/3">
          <input
            type="text"
            placeholder="Minimum Seller Amount Withdraw"
            value={minWithdraw}
            onChange={(e) => setMinWithdraw(e.target.value)}
            className="w-full p-2 rounded"
          />
        </td>
      </tr>
    </tbody>
  </table>
  <div className="flex justify-start mt-4">
    <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
  </div>
</div>
</div>

            {/* Right Side */}
            <div className="space-y-6">
                {/* Note Section */}
               
                <div className="bg-white !mt-0  p-4 rounded-lg shadow-md h-90 ">
                    <h3 className="font-semibold pb-2 border-b border-gray-300">Note</h3>
                    <table className=" border border-gray-300 mt-3">
                        <tbody>
                            <tr className="border-b border-gray-300">
                                <td className="p-3 text-sm">
                                    1. If the Commission Type is Fixed Rate, 25% of seller product price will be deducted.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-300">
                                <td className="p-3 text-sm">
                                    2. If the Commission Type is Seller Based, set commission percentage
                                    <a href="#" className="text-blue-500"> Here</a>.
                                </td>
                            </tr>
                            <tr>
                                <td className="p-3 text-sm">
                                    3. If the Commission Type is Category Based, set commission percentage
                                    <a href="#" className="text-blue-500"> Here</a>.
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
    <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
  </div>
</div>

            </div>
        </div>
    );
};

export default SellerCommission;