import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../firebase";

const DeliveryPartnerRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      zipCode: "",
    },
    bankDetails: {
      accountName: "",
      accountNumber: "",
      bankName: "",
      ifscCode: "",
      upiId: "",
    },
    documents: {
      profilePhoto: null,
      drivinglicense: null,
      aadharcard: null,
    },
  });

  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [password, setPassword] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null)

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;

    if (type === "file") {
      const [section, field] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: files[0],
        },
      }));
    } else {
      const [section, field] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        },
      }));
    }
  };

  // const generateOtp = () => {
  //   const otp = Math.floor(100000 + Math.random() * 900000).toString();
  //   setGeneratedOtp(otp);
  //   toast.info(`OTP sent to ${formData.personalInfo.phone}: ${otp}`); 
  //   setOtpVerified(false);
  // };

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth, "recaptcha-container", {
      size: "invisible",
      callback: function (response) {
        console.log("Captcha Resolved");
      },

      defaultCountry: "IN",
    }
    );
  }, []);

  const [otpSent, setOtpSent] = useState(false)


  const generateOtp = async (e) => {
    e.preventDefault();

    if (formData.personalInfo.length < 10) {
      alert("Please enter a valid phone number");
      return;
    }

    try {
      const appVerifier = window.recaptchaVerifier;
      const result = await signInWithPhoneNumber(auth, `+91${formData.personalInfo.phone}`, appVerifier);
      setConfirmationResult(result);
      setOtpVerified(false);
      toast.info(`OTP sent to ${formData.personalInfo.phone}`);
      setOtpSent(true)
    } catch (error) {
      console.log(error);
      alert("Failed to send OTP: " + error.message);
    }
  };



  // const verifyOtp = () => {
  //   if (otp === generatedOtp) {
  //     setOtpVerified(true);
  //     toast.success("OTP verified successfully!");
  //   } else {
  //     setErrors({ ...errors, otp: "Invalid OTP. Please try again." });
  //     toast.error("Invalid OTP. Please try again.");
  //   }
  // };

  const verifyOtp = async (e) => {
    e.preventDefault();


    if (otp.length !== 6) {
      return alert("Invalid OTP. Please enter a 6-digit OTP.");
    }

    try {
      const result = await confirmationResult.confirm(otp);


      const user = result.user;

      console.log("Delivery partner", user)
      toast.success("OTP verified successfully!");
    } catch (err) {
      console.error("OTP Verification Failed:", err);
      toast.error("Invalid OTP. Please try again.");
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Personal Info Validation
    if (!formData.personalInfo.firstName.trim()) {
      newErrors.firstName = "Full name is required";
    }
    if (!formData.personalInfo.lastName.trim()) {
      newErrors.lastName = "Full name is required";
    }

    // At least one of phone or email is required
    if (
      !formData.personalInfo.phone.trim() &&
      !formData.personalInfo.email.trim()
    ) {
      newErrors.contact = "Either phone or email is required";
    }

    // If phone is entered, OTP must be verified
    if (formData.personalInfo.phone.trim() && !otpVerified) {
      newErrors.otp = "Please verify your phone number with OTP";
    }

    // If email is entered, password is required
    if (formData.personalInfo.email.trim() && !password) {
      newErrors.password = "Password is required";
    }

    // Bank Details Validation
    if (!formData.bankDetails.accountName.trim()) {
      newErrors.accountName = "Account name is required";
    }
    if (!formData.bankDetails.accountNumber.trim()) {
      newErrors.accountNumber = "Account number is required";
    }
    if (!formData.bankDetails.bankName.trim()) {
      newErrors.bankName = "Bank name is required";
    }
    if (!formData.bankDetails.ifscCode.trim()) {
      newErrors.ifscCode = "IFSC code is required";
    }

    // Documents Validation
    if (!formData.documents.profilePhoto) {
      newErrors.profilePhoto = "Profile photo is required";
    }
    if (!formData.documents.drivinglicense) {
      newErrors.drivinglicense = "Driving license is required";
    }
    if (!formData.documents.aadharcard) {
      newErrors.aadharcard = "Aadhar card is required";
    }

    setErrors(newErrors);
    // Show toast for each error
    if (Object.keys(newErrors).length > 0) {
      Object.values(newErrors).forEach((error) => toast.error(error));
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        toast.success("Form submitted successfully!");
        console.log("Form submitted:", {
          ...formData,
          otpVerified,
          password,
        });

        navigate("/registration-success");
      } catch (error) {
        console.error("Registration error:", error);
        toast.error("An error occurred during registration.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <ToastContainer />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Delivery Partner Registration
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Complete the form to join our delivery network
          </p>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Personal Information Section */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    Personal Information
                  </h2>
                  <div className="grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        First Name*
                      </label>
                      <input
                        type="text"
                        name="personalInfo.firstName"
                        value={formData.personalInfo.firstName}
                        onChange={handleChange}
                        className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${errors.firstName
                          ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                          : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                          } border p-2`}
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div className="sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        name="personalInfo.lastName"
                        value={formData.personalInfo.lastName}
                        onChange={handleChange}
                        className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${errors.lastName
                          ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                          : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                          } border p-2`}
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.lastName}
                        </p>
                      )}
                    </div>

                    {/* Toggle between phone and email registration */}
                    <>
                      <div className="sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Phone Number
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="tel"
                            name="personalInfo.phone"
                            value={formData.personalInfo.phone}
                            onChange={handleChange}
                            className={`flex-1 min-w-0 block w-full rounded-none rounded-l-md sm:text-sm ${errors.contact || errors.otp
                              ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                              : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                              } border p-2`}
                          />
                          <button
                            type="button"
                            onClick={generateOtp}
                            disabled={!formData.personalInfo.phone.trim()}
                            className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Send OTP
                          </button>
                        </div>
                      </div>

                      {
                        otpSent ? (
                          <div className="sm:col-span-3">
                            <label className="block text-sm font-medium text-gray-700">
                              OTP Verification*
                            </label>
                            <div className="flex gap-2">
                              <input
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className={`flex-1 block w-full rounded-md shadow-sm sm:text-sm ${errors.otp
                                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                  } border p-2`}
                                placeholder="Enter OTP"
                              />
                              <button
                                type="button"
                                onClick={verifyOtp}
                                disabled={!otp}
                                className="inline-flex items-center px-3 rounded-md border border-gray-300 bg-gray-50 text-gray-500 text-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                Verify
                              </button>
                            </div>
                            {errors.otp && (
                              <p className="mt-1 text-sm text-red-600">
                                {errors.otp}
                              </p>
                            )}
                            {otpVerified && (
                              <p className="mt-1 text-sm text-green-600">
                                ✓ Phone number verified
                              </p>
                            )}
                          </div>
                        )
                          :
                          <div>
                          </div>

                      }
                    </>
                    <>
                      <div className="sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          name="personalInfo.email"
                          value={formData.personalInfo.email}
                          onChange={handleChange}
                          className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${errors.contact || errors.password
                            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                            : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            } border p-2`}
                        />
                      </div>

                      <div className="sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Password*
                        </label>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${errors.password
                            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                            : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            } border p-2`}
                        />
                        {errors.password && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.password}
                          </p>
                        )}
                      </div>
                    </>

                    {errors.contact && (
                      <div className="sm:col-span-6">
                        <p className="text-sm text-red-600">{errors.contact}</p>
                      </div>
                    )}

                    <div className="sm:col-span-6">
                      <label className="block text-sm font-medium text-gray-700">
                        Address
                      </label>
                      <input
                        type="text"
                        name="personalInfo.address"
                        value={formData.personalInfo.address}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="personalInfo.city"
                        value={formData.personalInfo.city}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        name="personalInfo.zipCode"
                        value={formData.personalInfo.zipCode}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                      />
                    </div>
                  </div>
                </div>
                {/* Bank Details Section */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Bank Details</h2>
                  <div className="grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                      <label className="block text-sm font-medium text-gray-700">
                        Account Holder Name*
                      </label>
                      <input
                        type="text"
                        name="bankDetails.accountName"
                        value={formData.bankDetails.accountName}
                        onChange={handleChange}
                        className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${errors.accountName
                          ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                          : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                          } border p-2`}
                      />
                      {errors.accountName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.accountName}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Account Number*
                      </label>
                      <input
                        type="text"
                        name="bankDetails.accountNumber"
                        value={formData.bankDetails.accountNumber}
                        onChange={handleChange}
                        className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${errors.accountNumber
                          ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                          : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                          } border p-2`}
                      />
                      {errors.accountNumber && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.accountNumber}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Bank Name*
                      </label>
                      <input
                        type="text"
                        name="bankDetails.bankName"
                        value={formData.bankDetails.bankName}
                        onChange={handleChange}
                        className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${errors.bankName
                          ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                          : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                          } border p-2`}
                      />
                      {errors.bankName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.bankName}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        IFSC Code*
                      </label>
                      <input
                        type="text"
                        name="bankDetails.ifscCode"
                        value={formData.bankDetails.ifscCode}
                        onChange={handleChange}
                        className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${errors.ifscCode
                          ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                          : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                          } border p-2`}
                      />
                      {errors.ifscCode && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.ifscCode}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        UPI ID (Optional)
                      </label>
                      <input
                        type="text"
                        name="bankDetails.upiId"
                        value={formData.bankDetails.upiId}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Documents Section */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Documents</h2>
                  <div className="grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                      <label className="block text-sm font-medium text-gray-700">
                        Profile Photo*
                      </label>
                      <input
                        type="file"
                        name="documents.profilePhoto"
                        accept="image/*"
                        onChange={handleChange}
                        className={`mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 ${errors.profilePhoto ? "border-red-500" : ""
                          }`}
                      />
                      {errors.profilePhoto && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.profilePhoto}
                        </p>
                      )}
                      {formData.documents.profilePhoto && (
                        <div className="mt-2 flex items-center">
                          <span className="text-sm text-gray-600">
                            {formData.documents.profilePhoto.name}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Driving License*
                      </label>
                      <input
                        type="file"
                        name="documents.drivinglicense"
                        accept="image/*,.pdf"
                        onChange={handleChange}
                        className={`mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 ${errors.drivinglicense ? "border-red-500" : ""
                          }`}
                      />
                      {errors.drivinglicense && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.drivinglicense}
                        </p>
                      )}
                      {formData.documents.drivinglicense && (
                        <div className="mt-2 flex items-center">
                          <span className="text-sm text-gray-600">
                            {formData.documents.drivinglicense.name}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Aadhar Card*
                      </label>
                      <input
                        type="file"
                        name="documents.aadharcard"
                        accept="image/*,.pdf"
                        onChange={handleChange}
                        className={`mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 ${errors.aadharcard ? "border-red-500" : ""
                          }`}
                      />
                      {errors.aadharcard && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.aadharcard}
                        </p>
                      )}
                      {formData.documents.aadharcard && (
                        <div className="mt-2 flex items-center">
                          <span className="text-sm text-gray-600">
                            {formData.documents.aadharcard.name}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default DeliveryPartnerRegistration;
