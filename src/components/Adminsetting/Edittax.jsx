import React, { useState, useEffect } from "react";
import { AdminSettingsService } from "../../services/adminSettingServices";
import { useParams, useNavigate } from "react-router-dom";

const TaxInfoForm = () => {
  const [taxNameInp, setTaxName] = useState("");
  const { taxId, taxName, taxStatus } = useParams(); // taxStatus is a string
  const navigate = useNavigate();
  const [fetchVatTaxes, setFetchVatTaxes] = useState(false);

  // Pre-fill the form input with the tax name from URL params
  useEffect(() => {
    if (taxName) setTaxName(taxName);
  }, [taxName]);

  const handleSave = async () => {
    const statusBool = taxStatus === "true"; // Convert taxStatus from string to boolean

    // console.log(taxNameInp, statusBool)

    // Call service to update VAT tax
    await AdminSettingsService.updateVatTax(taxId, taxNameInp, !statusBool);

    // Navigate and refresh data
    setFetchVatTaxes(true);
    navigate("/admin-settings/tax");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Tax Information
      </h2>

      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b px-6 py-4">
          <h3 className="text-md font-semibold text-gray-800">Update Tax Info</h3>
        </div>

        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center mb-6 gap-2">
            <label className="sm:w-24 text-sm text-gray-700 font-medium">Name</label>
            <input
              type="text"
              placeholder="Vat"
              value={taxNameInp}
              onChange={(e) => setTaxName(e.target.value)}
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none"
            />
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxInfoForm;
