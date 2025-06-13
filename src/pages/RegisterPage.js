



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   TextField,
//   Checkbox,
//   FormControlLabel,
//   Button,
//   Typography,
//   Box
// } from "@mui/material";
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// function RegisterPage() {
//   const navigate = useNavigate();

//   const [userData, setUserData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();

//     if (userData.password !== userData.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     console.log("Registering user:", userData);
//     navigate("/otpverify");
//   };

//   return (
//     <div className="h-[100vh] p-8 flex items-center justify-center bg-gradient-to-r from-indigo-100 to-blue-100">
//       <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
//         {/* Left Side Animation */}
//         <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 items-center justify-center p-10">
//           <div className="text-center text-white">
//             <DotLottieReact
//               src="https://lottie.host/6be9c772-ad2e-4488-b3cc-576516c7b6ba/f02dZDXxih.lottie"
//               loop
//               autoplay
//               style={{ width: "520px", height: "290px" }}
//             />
//             <h2 className="text-3xl font-bold mt-6">Welcome!</h2>
//             <p className="mt-2 text-lg">Join us to explore amazing features.</p>
//           </div>
//         </div>

//         {/* Right Side Form */}
//         <div className="w-full lg:w-1/2 p-8 sm:p-12">
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
//             <p className="text-gray-600 mt-2">Register to get started</p>
//           </div>

//           <form className="space-y-5" onSubmit={handleRegister}>
//                        <TextField
//               label="First Name"
//               name="firstName"
//               type=""
//               value={userData.firstName}
//               onChange={handleInputChange}
//               fullWidth
//               required
//               variant="standard"
//             />


            
//              <TextField
//               label="Last Name"
//               name="lastName"
//               type=""
//               value={userData.lastName}
//                onChange={handleInputChange}
//               fullWidth
//               required
//               variant="standard"
//             />


//             <TextField
//               label="Email"
//               name="email"
//               type="email"
//               value={userData.email}
//               onChange={handleInputChange}
//               fullWidth
//               required
//               variant="standard"
//             />

//             <TextField
//               label="Phone"
//               name="phone"
//               type="tel"
//               value={userData.phone}
//               onChange={handleInputChange}
//               fullWidth
//               required
//               variant="standard"
//             />

//             <TextField
//               label="Password"
//               name="password"
//               type="password"
//               value={userData.password}
//               onChange={handleInputChange}
//               fullWidth
//               required
//               variant="standard"
//             />

//             <TextField
//               label="Confirm Password"
//               name="confirmPassword"
//               type="password"
//               value={userData.confirmPassword}
//               onChange={handleInputChange}
//               fullWidth
//               required
//               variant="standard"
//             />

//             <Box sx={{ display: "flex", alignItems: "flex-start" }}>
//               <FormControlLabel
//                 control={<Checkbox required color="primary" />}
//                 label={
//                   <Typography variant="body2" sx={{ whiteSpace: "normal" }}>
//                     By continuing, you agree to our Terms and Conditions
//                   </Typography>
//                 }
//                 sx={{ alignItems: "flex-start", width: "120%", marginTop: 1 }}
//               />
//             </Box>

//             <Button
//               type="submit"
//               variant="contained"
//               fullWidth
//               sx={{
//                 background: "linear-gradient(to right, #6366F1, #8B5CF6)",
//                 fontWeight: "bold",
//                 "&:hover": {
//                   background: "linear-gradient(to right, #4F46E5, #7C3AED)",
//                 },
//               }}
//             >
//               Register
//             </Button>

//             <Typography align="center" variant="body2" sx={{ mt: 2 }}>
//               Already have an account?{" "}
//               <a
//                 href="/login"
//                 className="text-indigo-600 font-medium hover:underline hover:text-indigo-800 transition"
//               >
//                 Login
//               </a>
//             </Typography>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RegisterPage;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Box
} from "@mui/material";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function RegisterPage() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (userData.password !== userData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Registering user:", userData);
    navigate("/otpverify");
  };

  return (
    <div className="h-[100vh] p-4 sm:p-8 flex items-center justify-center bg-gradient-to-r from-indigo-100 to-blue-100">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left Side Animation */}
        {/* Removed p-10 directly from here and added it inside for better control */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 items-center justify-center">
          {/* This inner div will manage the content's responsiveness and padding */}
          <div className="text-center text-white p-6 sm:p-10 w-full max-w-md"> {/* Adjusted max-w and added responsive padding */}
            <DotLottieReact
              src="https://lottie.host/6be9c772-ad2e-4488-b3cc-576516c7b6ba/f02dZDXxih.lottie"
              loop
              autoplay
              // Using object-fit for better scaling within its container
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "520px", // Original intended max width
                display: "block", // Ensures it behaves like a block element
                margin: "0 auto", // Centers the Lottie if it's smaller than its container
              }}
            />
            <h2 className="text-2xl sm:text-3xl font-bold mt-4 sm:mt-6">Welcome!</h2> {/* Responsive font size and margin */}
            <p className="mt-2 text-base sm:text-lg">Join us to explore amazing features.</p> {/* Responsive font size */}
          </div>
        </div>

        {/* Right Side Form - Already well-structured */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
            <p className="text-gray-600 mt-2">Register to get started</p>
          </div>

          <form className="space-y-5" onSubmit={handleRegister}>
            <TextField
              label="First Name"
              name="firstName"
              type=""
              value={userData.firstName}
              onChange={handleInputChange}
              fullWidth
              required
              variant="standard"
            />

            <TextField
              label="Last Name"
              name="lastName"
              type=""
              value={userData.lastName}
              onChange={handleInputChange}
              fullWidth
              required
              variant="standard"
            />

            <TextField
              label="Email"
              name="email"
              type="email"
              value={userData.email}
              onChange={handleInputChange}
              fullWidth
              required
              variant="standard"
            />

            <TextField
              label="Phone"
              name="phone"
              type="tel"
              value={userData.phone}
              onChange={handleInputChange}
              fullWidth
              required
              variant="standard"
            />

            <TextField
              label="Password"
              name="password"
              type="password"
              value={userData.password}
              onChange={handleInputChange}
              fullWidth
              required
              variant="standard"
            />

            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={userData.confirmPassword}
              onChange={handleInputChange}
              fullWidth
              required
              variant="standard"
            />

            <Box sx={{ display: "flex", alignItems: "flex-start" }}>
              <FormControlLabel
                control={<Checkbox required color="primary" />}
                label={
                  <Typography variant="body2" sx={{ whiteSpace: "normal" }}>
                    By continuing, you agree to our Terms and Conditions
                  </Typography>
                }
                sx={{ alignItems: "flex-start", width: "120%", marginTop: 1 }}
              />
            </Box>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                background: "linear-gradient(to right, #6366F1, #8B5CF6)",
                fontWeight: "bold",
                "&:hover": {
                  background: "linear-gradient(to right, #4F46E5, #7C3AED)",
                },
              }}
            >
              Register
            </Button>

            <Typography align="center" variant="body2" sx={{ mt: 2 }}>
              Already have an account?{" "}
              <a
                href="/login"
                className="text-indigo-600 font-medium hover:underline hover:text-indigo-800 transition"
              >
                Login
              </a>
            </Typography>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;