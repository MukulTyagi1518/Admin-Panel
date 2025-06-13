import React, { useRef, useState } from "react";
import { Eye, Upload, UserRoundPlus, User2 } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const ProfileForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef();

  const defaultImage =
    state?.photoURL ||
    "https://i2-prod.business-live.co.uk/incoming/article22876913.ece/ALTERNATES/s615/0_Alex-Butler-Geldards.jpg";

  const imagePreview = selectedImage
    ? URL.createObjectURL(selectedImage)
    : defaultImage;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    if (selectedImage) {
      console.log("Selected Image File:", selectedImage);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-14 mt-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <User2 className="text-blue-800" />
          <h2 className="text-xl font-bold text-blue-800">Your Profile</h2>
        </div>
        <button
          className="text-blue-800 font-medium flex items-center gap-1 text-sm hover:underline"
          onClick={() => navigate("/register")}
        >
          <UserRoundPlus size={16} />
          Register New Account
        </button>
      </div>

      {/* Avatar */}
      <div className="relative flex justify-center mb-8">
        <img
          src={imagePreview}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-blue-300 object-cover"
        />
        <button
          type="button"
          className="absolute right-20 top-3 bg-white border border-blue-400 p-2 rounded-full hover:bg-blue-50"
          onClick={() => fileInputRef.current.click()}
        >
          <Upload className="text-blue-800" size={18} />
        </button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
        />
      </div>

      {/* Form */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Last Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Email"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Phone Number"
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="New Password (leave blank to keep current)"
            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-600"
          />
          <Eye
            size={18}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-800 text-white font-semibold py-2 rounded-md hover:bg-blue-900 transition"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
