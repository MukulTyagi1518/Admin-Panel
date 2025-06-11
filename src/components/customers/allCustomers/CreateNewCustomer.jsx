// import axios from "axios";
// import { ArrowLeft } from "lucide-react";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "../../../utils/axios";
// import { useCustomerContext } from "../../../context/customerContext";

// const CreateNewCustomer = () => {
//   const navigate = useNavigate();
//   const { setFetchCustomers } = useCustomerContext()
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: ""
//   });
//   const [contactMethod, setContactMethod] = useState("phone");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("/user1/", formData);
//       if (response.status === 201) {
//         console.log("Customer added successfully:", response.data);
//         setFetchCustomers(true)
//         alert("New customer added.")
//         navigate("/customers/all")
//       }
//     } catch (error) {
//       console.error("Error adding customer:", error);
//     }
//   };


//   const toggleContactMethod = () => {
//     setContactMethod((prev) => (prev === "phone" ? "email" : "phone"));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//     <div className="container mx-auto px-4 py-8">
//       {/* Header Section */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-800">
//             Create New Customer
//           </h1>
//           <p className="text-gray-600 mt-2">
//             Fill in the details below to add a new customer
//           </p>
//         </div>
//       </div>
  
//       {/* Form Card */}
//       <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto border border-gray-300">
//         {/* Card Header */}
//         <div className="px-6 py-4 border-b border-gray-200">
//           <h2 className="text-xl font-semibold text-gray-800">
//             Customer Information
//           </h2>
//         </div>
  
//         {/* Form Content */}
//         <form onSubmit={handleSubmit} className="p-6">
//           <div className="space-y-6">
//             {/* Full Name Field */}
//             <div className="relative">
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-600 mb-2"
//               >
//                 Full Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="block w-full px-4 py-3 border border-gray-300 rounded-lg"
//                 placeholder="John Doe"
//                 required
//               />
//             </div>
  
//             {/* Email Address Field */}
//             <div className="relative">
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-600 mb-2"
//               >
//                 Email Address <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="block w-full px-4 py-3 border border-gray-300 rounded-lg"
//                 placeholder="john@example.com"
//                 required
//               />
//             </div>
  
//             {/* Phone Number Field */}
//             <div className="relative">
//               <label
//                 htmlFor="phone"
//                 className="block text-sm font-medium text-gray-600 mb-2"
//               >
//                 Phone Number <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="block w-full px-4 py-3 border border-gray-300 rounded-lg"
//                 placeholder="+91 987654321"
//                 required
//               />
//             </div>
  
//             {/* Address Field */}
//             <div className="relative">
//               <label
//                 htmlFor="address"
//                 className="block text-sm font-medium text-gray-600 mb-2"
//               >
//                 Address <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="block w-full px-4 py-3 border border-gray-300 rounded-lg"
//                 placeholder="Your Address"
//                 required
//               />
//             </div>
//           </div>
  
//           {/* Form Actions */}
//           <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end space-x-3">
//             <button
//               onClick={() => navigate("/customers/all")}
//               type="button"
//               className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 flex items-center"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 mr-2"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               Save Customer
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>

//   </div>
  
//   );
// };

// export default CreateNewCustomer;
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "../../../utils/axios";
import { useCustomerContext } from "../../../context/customerContext";
import { motion } from "framer-motion";

const CreateNewCustomer = () => {
  const navigate = useNavigate();
  const { setFetchCustomers } = useCustomerContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://e-commerce-backend-1-0.onrender.com/api/user1", formData);
      if (response.status === 201) {
        console.log("Customer added successfully:", response.data);
        setFetchCustomers(true);
        alert("New customer added.");
        navigate("/customers/all");
      }
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            {/* Title Animation */}
            <motion.h1
              className="text-5xl font-semibold tracking-tight mb-2 animate-gradient-text"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Create New Customer
            </motion.h1>

            {/* Description Animation */}
            <motion.p
              className="text-lg mt-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 animate-text-fade"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }} // Delay to stagger the animations
            >
              Fill in the details below to add a new customer.
            </motion.p>
          </div>
        </motion.div>

        {/* Form Card with animation */}
        <motion.div
          className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto border border-gray-300 p-6"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -50 }} // Initial position above and hidden
            animate={{ opacity: 1, y: 0 }} // Animate to normal position
            transition={{ duration: 0.8, delay: 0.4 }} // Adding delay to stagger the animation
          >
            <h2 className="text-3xl font-semibold text-gray-800">Customer Information</h2>
          </motion.div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name Field */}
            <div className="relative">
              <motion.label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600 mb-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Full Name <span className="text-red-500">*</span>
              </motion.label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full h-12 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:border-blue-400"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email Address Field */}
            <div className="relative">
              <motion.label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Email Address <span className="text-red-500">*</span>
              </motion.label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full h-12 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:border-blue-400"
                placeholder="john@example.com"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div className="relative">
              <motion.label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-600 mb-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Phone Number <span className="text-red-500">*</span>
              </motion.label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full h-12 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:border-blue-400"
                placeholder="+91 987654321"
                required
              />
            </div>

            {/* Address Field */}
            <div className="relative">
              <motion.label
                htmlFor="address"
                className="block text-sm font-medium text-gray-600 mb-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Address <span className="text-red-500">*</span>
              </motion.label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="block w-full h-12 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:border-blue-400"
                placeholder="Your Address"
                required
              />
            </div>

            {/* Form Actions */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between space-x-3">
              <motion.button
                onClick={() => navigate("/customers/all")}
                type="button"
                className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-300 flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Cancel
              </motion.button>
              <motion.button
                type="submit"
                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Save Customer
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default CreateNewCustomer;
