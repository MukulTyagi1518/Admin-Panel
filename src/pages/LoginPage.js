import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";
// import axios from "axios";
import { useAdminContext } from "../adminContext";
// import api from "../utils/axios"
import { TextField } from "@mui/material";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import axios from 'axios'
function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { adminData, setAdminData } = useAdminContext();
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setAdminData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    
    
    try {
      const response = await axios.post("https://e-commerce-backend-1-0.onrender.com/api/admin-login/login", {
        email: adminData.email,
        password: adminData.password,
      });
  
      if (response.status === 200) {
        // ✅ Successful login
        localStorage.setItem("isAdminLoggedIn", "true"); // Set login flag

        console.log("Login successful:", response.data.message);
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message || "Login failed");
      } else {
        alert("Something went wrong");
      }
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 px-4 relative overflow-hidden">
      
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
        <svg viewBox="0 0 1921 819.8" className="w-full h-auto">
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a18cd1" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#fbc2eb" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,88.8,130.6,152.5,168.6
      c107.6,57,212.1,40.7,245.7,34.4c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"
          />
        </svg>
      </div>


      {/* Main Card */}
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row relative z-10">
        {/* Left Panel */}
        {/* <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-r from-blue-600 to-purple-600 items-center justify-center p-10"> */}
         <div className="w-full lg:w-1/2 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center p-6 sm:p-10 md:p-10">

          <div className="text-center text-white">
           
            <DotLottieReact
              src="https://lottie.host/c3de6fc2-fb47-45ee-a55f-81a46e81a0e4/XP4QDBXNDW.lottie"
              loop
              autoplay
              style={{ width: "660px", height: "320px" }}
            />
            <h2 className="text-3xl font-bold mt-6">Welcome Back!</h2>
            <p className="mt-2 text-lg">Login to access your admin panel.</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-8 sm:p-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome to Admin Panel
            </h1>
            <p className="text-gray-600 mt-2">Login to your account</p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Email Input */}
            <div className="form-control">
              {/* <label className="label">
                <span className="label-text font-medium text-gray-700">
                  Email
                </span>
              </label> */}
              <div className="relative">
                {/* <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div> */}
                
                <TextField
                  type="email"
                  label="Email"
                  fullWidth
                  variant="standard"
                  value={adminData.email}
                  name="email"
                  onChange={handleInputChange}
                  required
                  InputProps={{ disableUnderline: false }}
                />


              </div>
            </div>

            {/* Password Input */}
            <div className="form-control">
              {/* <label className="label">
                <span className="label-text font-medium text-gray-700">
                  Password
                </span>
              </label> */}
              <div className="relative">
                {/* <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div> */}
                
                <TextField
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  fullWidth
                  variant="standard"
                  value={adminData.password}
                  name="password"
                  onChange={handleInputChange}
                  required
                  InputProps={{
                    disableUnderline: false,
                  }}
                />

                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-gray-100 rounded-full p-1 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500 transition-all"
                />
                <span className="ml-2 text-gray-600">Remember Me</span>
              </label>

              <button
                type="button"
                onClick={() => navigate("/forgot-password")}  // ya jis route pe aapka forgot password page hai
                className="text-sm text-blue-600 hover:underline focus:outline-none"
              >
                Forgot Password?
              </button>
            </div>


            {/* Login Button */}
            <button
              type="submit"
              className="w-full p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;