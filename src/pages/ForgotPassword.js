// import React, { useState } from "react";
// import { TextField, Button, Typography, Box } from "@mui/material";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import { useNavigate } from "react-router-dom";

// const ForgotPasswordAlt = () => {
//   const navigate = useNavigate();
//   const [showResetFields, setShowResetFields] = useState(false);
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [otpSent, setOtpSent] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!showResetFields) {
//       // Simulate sending OTP
//       setOtpSent(true);
//       setShowResetFields(true);
//     } else {
//       if (newPassword !== confirmPassword) {
//         alert("Passwords do not match!");
//         return;
//       }

//       // In a real application, you'd send a reset request to your backend here.
//       // For this example, we'll just redirect.
//       navigate("/login");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-16 relative overflow-hidden bg-gradient-to-br from-blue-50 to-green-50">
//       {/* Background Wave */}
//       {/* <div className="absolute bottom-0 left-0 w-full z-0">
//         <svg viewBox="0 0 1921 819.8" className="w-full h-auto">
//           <defs>
//             <linearGradient id="waveGradientAlt" x1="0" y1="0" x2="1" y2="1">
//               <stop offset="0%" stopColor="#87CEEB" /> 
//               <stop offset="100%" stopColor="#40E0D0" /> 
//             </linearGradient>
//           </defs>
//           <path
//             fill="url(#waveGradientAlt)"
//             d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,88.8,130.6,152.5,168.6
//             c107.6,57,212.1,40.7,245.7,34.4c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"
//           />
//         </svg>
//       </div> */}

//        <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
//         <svg viewBox="0 0 1921 819.8" className="w-full h-auto">
//           <defs>
//             <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
//               <stop offset="0%" stopColor="#a18cd1" stopOpacity="0.9" />
//               <stop offset="100%" stopColor="#fbc2eb" stopOpacity="0.9" />
//             </linearGradient>
//           </defs>
//           <path
//             fill="url(#waveGradient)"
//             d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,88.8,130.6,152.5,168.6
//       c107.6,57,212.1,40.7,245.7,34.4c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"
//           />
//         </svg>
//       </div>



//       {/* Main Card */}
//       <div className="relative z-10 bg-white shadow-2xl rounded-2xl flex flex-col md:flex-row overflow-hidden w-full max-w-5xl">
//         {/* Left Section */}
//         <div className="md:w-1/2 bg-gradient-to-br from-blue-500 to-teal-400 p-8 flex flex-col items-center justify-center text-center">
//           <div className="w-48 h-48 md:w-60 md:h-60 mb-4">
//             <DotLottieReact
//               src="https://lottie.host/83c6055c-2d68-4ae7-9444-bb3452c07a39/zZbfbvSKhC.lottie" // You can change this Lottie if you have another one
//               loop
//               autoplay
//             />
//           </div>
//           <h2 className="text-xl md:text-2xl font-bold text-white">Welcome Back!</h2>
//           <p className="text-sm md:text-base text-white mt-2">
//             Enter your details and start your journey with us.
//           </p>
//         </div>

//         {/* Right Section */}
//         <div className="md:w-1/2 p-10 bg-white flex flex-col justify-center">
//           <Typography variant="h4" className="font-bold text-gray-800" sx={{ marginBottom: 1 }}>
//             Forgot Your Password?
//           </Typography>

//           <Typography
//             variant="body2"
//             sx={{
//               color: otpSent ? "green" : "#4B5563",
//               marginBottom: 4,
//             }}
//           >
//             {otpSent
//               ? " OTP Sent Successfully!"
//               : "No worries! We'll send you a reset link or OTP to your email."}
//           </Typography>

//           <Box component="form" onSubmit={handleSubmit}>
//             {!showResetFields && (
//               <TextField
//                 label="Email Address"
//                 variant="standard"
//                 fullWidth
//                 required
//                 sx={{
//                   marginBottom: 4,
//                   "& .MuiInput-underline:after": {
//                     borderBottomColor: "#06B6D4", // Cyan 500
//                   },
//                 }}
//               />
//             )}

//             {showResetFields && (
//               <>
//                 <TextField
//                   label="New Password"
//                   type="password"
//                   variant="standard"
//                   fullWidth
//                   required
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                   sx={{
//                     marginBottom: 4,
//                     "& .MuiInput-underline:after": {
//                       borderBottomColor: "#06B6D4", // Cyan 500
//                     },
//                   }}
//                 />
//                 <TextField
//                   label="Confirm Password"
//                   type="password"
//                   variant="standard"
//                   fullWidth
//                   required
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   sx={{
//                     marginBottom: 4,
//                     "& .MuiInput-underline:after": {
//                       borderBottomColor: "#06B6D4", // Cyan 500
//                     },
//                   }}
//                 />
//               </>
//             )}

//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{
//                 background: "linear-gradient(to right, #0EA5E9, #06B6D4)", // Sky 500 to Cyan 500
//                 textTransform: "none",
//                 fontWeight: 600,
//                 marginBottom: 3,
//                 "&:hover": {
//                   opacity: 0.9,
//                   boxShadow: 4,
//                 },
//               }}
//             >
//               {showResetFields ? "Reset Password" : "Send OTP"}
//             </Button>
//           </Box>

//           <div className="text-center mt-3">
//             <button
//               type="button"
//               onClick={() => navigate("/login")}
//               className="text-blue-600 font-medium hover:underline"
//             >
//               Back To Sign In
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPasswordAlt;


import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [showResetFields, setShowResetFields] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!showResetFields) {
      // Simulate sending OTP
      setOtpSent(true);
      setShowResetFields(true);
    } else {
      if (newPassword !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      // Simulate reset and redirect
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-16 relative overflow-hidden bg-gradient-to-br from-blue-50 to-green-50">
      {/* Background Wave */}
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
      <div className="relative z-10 bg-white shadow-2xl rounded-2xl flex flex-col md:flex-row overflow-hidden w-full max-w-5xl">
        {/* Left Section */}
        <div className="md:w-1/2 bg-gradient-to-br from-blue-500 to-teal-400 p-8 flex flex-col items-center justify-center text-center">
          <div className="w-48 h-48 md:w-60 md:h-60 mb-4">
            <DotLottieReact
              src="https://lottie.host/83c6055c-2d68-4ae7-9444-bb3452c07a39/zZbfbvSKhC.lottie"
              loop
              autoplay
            />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-white">Welcome Back!</h2>
          <p className="text-sm md:text-base text-white mt-2">
            Enter your details and start your journey with us.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 p-10 bg-white flex flex-col justify-center">
          <Typography variant="h4" className="font-bold text-gray-800" sx={{ marginBottom: 1 }}>
            Forgot Your Password?
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: otpSent ? "green" : "#4B5563",
              marginBottom: 4,
            }}
          >
            {otpSent
              ? " OTP Sent Successfully!"
              : "No worries! We'll send you a reset link or OTP to your email."}
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            {!showResetFields && (
             <TextField
  label="Email Address"
  type="email"
  variant="standard"
  fullWidth
  required
  sx={{
    marginBottom: 4,
    "& .MuiInput-underline:after": {
      borderBottomColor: "#A855F7", // purple underline after focus
    },
  }}
/>

            )}

            {showResetFields && (
              <>
                <TextField
                  label="New Password"
                  type="password"
                  variant="standard"
                  fullWidth
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  sx={{
                    marginBottom: 4,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#06B6D4",
                    },
                  }}
                />
                <TextField
                  label="Confirm Password"
                  type="password"
                  variant="standard"
                  fullWidth
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  sx={{
                    marginBottom: 4,
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#06B6D4",
                    },
                  }}
                />
              </>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                background: "linear-gradient(to right, #0EA5E9, #06B6D4)",
                textTransform: "none",
                fontWeight: 600,
                marginBottom: 3,
                "&:hover": {
                  opacity: 0.9,
                  boxShadow: 4,
                },
              }}
            >
              {showResetFields ? "Reset Password" : "Send OTP"}
            </Button>
          </Box>

          <div className="text-center mt-3">
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-blue-600 font-medium hover:underline"
            >
              Back To Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
