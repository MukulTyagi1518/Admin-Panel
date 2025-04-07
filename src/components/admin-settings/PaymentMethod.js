// // import React, { useState } from 'react';
// // import Switch from '../Switch';

// // function PaymentMethod() {
// //   const [paypal, setPaypal] = useState({
// //     clientId: '',
// //     clientSecret: '',
// //     sandboxMode: false,
// //   });
// //   const [stripe, setStripe] = useState({
// //     stripeKey: '',
// //     stripeSecret: '',
// //   });
// //   const [razorpay, setRazorpay] = useState({
// //     razorKey: '',
// //     razorSecret: '',
// //   });
// //   const [paystack, setPaystack] = useState({
// //     publicKey: '',
// //     secretKey: '',
// //     merchantEmail: '',
// //     currencyCode: '',
// //   });
// //   const [instamojo, setInstamojo] = useState({
// //     apiKey: '',
// //     authToken: '',
// //     sandboxMode: false,
// //   });
// //   const [sucommz, setSucommz] = useState({
// //     storeId: '',
// //     storePassword: '',
// //     sandboxMode: false,
// //   });

  
// //   const handlePaypalChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setPaypal({ ...paypal, [name]: type === 'checkbox' ? checked : value });
// //   };

// //   const handleStripeChange = (e) => {
// //     setStripe({ ...stripe, [e.target.name]: e.target.value });
// //   };

// //   const handleRazorpayChange = (e) => {
// //     setRazorpay({ ...razorpay, [e.target.name]: e.target.value });
// //   };

// //   const handlePaystackChange = (e) => {
// //     setPaystack({ ...paystack, [e.target.name]: e.target.value });
// //   };

// //   const handleInstamojoChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setInstamojo({ ...instamojo, [name]: type === 'checkbox' ? checked : value });
// //   };

// //   const handleSucommzChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setSucommz({ ...sucommz, [name]: type === 'checkbox' ? checked : value });
// //   };

// //   return (
// //     <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Adjusted grid layout */}
// //       {/* PayPal Section */}
// //       <div className="bg-white rounded-lg shadow-md p-4">
// //         <div className="flex justify-between items-center mb-4">
// //           <div className="flex items-center">
// //             <img src="paypal-logo.png" alt="Paypal" className="h-6 mr-2" /> {/* Replace with your PayPal logo */}
// //             <h2 className="text-lg font-semibold">Paypal</h2>
// //           </div>
// //           <label className="inline-flex items-center cursor-pointer">
// //             <span className="mr-2"><Switch/></span>
// //           </label>
// //         </div>
// //         <div className="mb-2">
// //           <label className="block text-gray-700 text-sm font-bold mb-2">Paypal Client Id</label>
// //           <input
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             type="text"
// //             name="clientId"
// //             value={paypal.clientId}
// //             onChange={handlePaypalChange}
// //           />
// //         </div>
// //         <div className="mb-2">
// //           <label className="block text-gray-700 text-sm font-bold mb-2">Paypal Client Secret</label>
// //           <input
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             type="text"
// //             name="clientSecret"
// //             value={paypal.clientSecret}
// //             onChange={handlePaypalChange}
// //           />
// //         </div>
// //         <div className="mb-2">
// //           <label className="inline-flex items-center cursor-pointer">
// //             <input
// //               type="checkbox"
// //               className="form-checkbox h-5 w-5 text-blue-600"
// //               name="sandboxMode"
// //               checked={paypal.sandboxMode}
// //               onChange={handlePaypalChange}
// //             />
// //             <span className="ml-2">Paypal Sandbox Mode</span>
// //           </label>
// //         </div>
// //         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
// //       </div>

// //       {/* Stripe Section */}
// //       <div className="bg-white rounded-lg shadow-md p-4">
// //         <div className="flex justify-between items-center mb-4">
// //           <div className="flex items-center">
// //             <img src="stripe-logo.png" alt="Stripe" className="h-6 mr-2" /> {/* Replace with your Stripe logo */}
// //             <h2 className="text-lg font-semibold">Stripe</h2>
// //           </div>
// //           <label className="inline-flex items-center cursor-pointer">
// //             <span className="mr-2"><Switch/></span>
// //           </label>
// //         </div>
// //         <div className="mb-2">
// //           <label className="block text-gray-700 text-sm font-bold mb-2">Stripe Key</label>
// //           <input
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             type="text"
// //             name="stripeKey"
// //             value={stripe.stripeKey}
// //             onChange={handleStripeChange}
// //           />
// //         </div>
// //         <div className="mb-2">
// //           <label className="block text-gray-700 text-sm font-bold mb-2">Stripe Secret</label>
// //           <input
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             type="text"
// //             name="stripeSecret"
// //             value={stripe.stripeSecret}
// //             onChange={handleStripeChange}
// //           />
// //         </div>
// //         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
// //       </div>

// //       {/* Sucommz Section */}
// //       <div className="bg-white rounded-lg shadow-md p-4">
// //         <div className="flex justify-between items-center mb-4">
// //           <div className="flex items-center">
// //             <img src="sucommz-logo.png" alt="Sucommz" className="h-6 mr-2" /> {/* Replace with your Sucommz logo */}
// //             <h2 className="text-lg font-semibold">Sucommz</h2>
// //           </div>
// //           <label className="inline-flex items-center cursor-pointer">
// //             <span className="mr-2"><Switch/></span>
// //           </label>
// //         </div>
// //         <div className="mb-2">
// //           <label className="block text-gray-700 text-sm font-bold mb-2">Sucommz Store Id</label>
// //           <input
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             type="text"
// //             name="storeId"
// //             value={sucommz.storeId}
// //             onChange={handleSucommzChange}
// //           />
// //         </div>
// //         <div className="mb-2">
// //           <label className="block text-gray-700 text-sm font-bold mb-2">Sucommz Store Password</label>
// //           <input
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             type="text"
// //             name="storePassword"
// //             value={sucommz.storePassword}
// //             onChange={handleSucommzChange}
// //           />
// //         </div>
// //         <div className="mb-2">
// //           <label className="inline-flex items-center cursor-pointer">
// //             <input
// //               type="checkbox"
// //               className="form-checkbox h-5 w-5 text-blue-600"
// //               name="sandboxMode"
// //               checked={sucommz.sandboxMode}
// //               onChange={handleSucommzChange}
// //             />
// //             <span className="ml-2">Sucommz Sandbox Mode</span>
// //           </label>
// //         </div>
// //         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
// //       </div>

// //       {/* Instamojo Section */}
// //       <div className="bg-white rounded-lg shadow-md p-4">
// //         <div className="flex justify-between items-center mb-4">
// //           <div className="flex items-center">
// //             <img src="instamojo-logo.png" alt="Instamojo" className="h-6 mr-2" /> {/* Replace with your Instamojo logo */}
// //             <h2 className="text-lg font-semibold">Instamojo</h2>
// //           </div>
// //           <label className="inline-flex items-center cursor-pointer">
// //             <span className="mr-2"><Switch/></span>
// //           </label>
// //         </div>
// //         <div className="mb-2">
// //           <label className="block text-gray-700 text-sm font-bold mb-2">API KEY</label>
// //           <input
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             type="text"
// //             name="apiKey"
// //             value={instamojo.apiKey}
// //             onChange={handleInstamojoChange}
// //           />
// //         </div>
// //         <div className="mb-2">
// //           <label className="block text-gray-700 text-sm font-bold mb-2">AUTH TOKEN</label>
// //           <input
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             type="text"
// //             name="authToken"
// //             value={instamojo.authToken}
// //             onChange={handleInstamojoChange}
// //           />
// //         </div>
// //         <div className="mb-2">
// //           <label className="inline-flex items-center cursor-pointer">
// //             <input
// //               type="checkbox"
// //               className="form-checkbox h-5 w-5 text-blue-600"
// //               name="sandboxMode"
// //               checked={instamojo.sandboxMode}
// //               onChange={handleInstamojoChange}
// //             />
// //             <span className="ml-2">Instamojo Sandbox Mode</span>
// //           </label>
// //         </div>
// //         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
// //       </div>

// //       {/* Razorpay Section */}
// //       <div className="bg-white rounded-lg shadow-md p-4">
// //         <div className="flex justify-between items-center mb-4">
// //           <div className="flex items-center">
// //             <img src="razorpay-logo.png" alt="Razorpay" className="h-6 mr-2" /> {/* Replace with your Razorpay logo */}
// //             <h2 className="text-lg font-semibold">Razorpay</h2>
// //           </div>
// //           <label className="inline-flex items-center cursor-pointer">
// //             <span className="mr-2"><Switch/></span>
// //           </label>
// //         </div>
// //         <div className="mb-2">
// //           <label className="block text-gray-700 text-sm font-bold mb-2">RAZOR KEY</label>
// //           <input
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             type="text"
// //             name="razorKey"
// //             value={razorpay.razorKey}
// //             onChange={handleRazorpayChange}
// //           />
// //         </div>
// //         <div className="mb-2">
// //           <label className="block text-gray-700 text-sm font-bold mb-2">RAZOR SECRET</label>
// //           <input
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             type="text"
// //             name="razorSecret"
// //             value={razorpay.razorSecret}
// //             onChange={handleRazorpayChange}
// //           />
// //         </div>
// //         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
// //       </div>

// //       {/* Paystack Section */}
// //       <div className="bg-white rounded-lg shadow-md p-4">
// //         <div className="flex justify-between items-center mb-4">
// //           <div className="flex items-center">
// //             <img src="paystack-logo.png" alt="Paystack" className="h-6 mr-2" /> 
// //             <h2 className="text-lg font-semibold">Paystack</h2>
// //           </div>
// //           <label className="inline-flex items-center cursor-pointer">
// //             <span className="mr-2"><Switch/></span>
// //           </label>
// //         </div>
// //         <div className="mb-2">
// //           <label className="block text-gray-700 text-sm font-bold mb-2">PUBLISH KEY</label>
// //           <input
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             type="text"
// //             name="publicKey"
// //             value={paystack.publicKey}
// //             onChange={handlePaystackChange}
// //           />
// //         </div>
// //         <div className="mb-2">
// //           <label className="block text-gray-700 text-sm font-bold mb-2">SECRET KEY</label>
// //           <input
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             type="text"
// //             name="secretKey"
// //             value={paystack.secretKey}
// //             onChange={handlePaystackChange}
// //           />
// //         </div>
// //         <div className="mb-2">
// //           <label className="block text-gray-700 text-sm font-bold mb-2">MERCHANT EMAIL</label>
// //           <input
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             type="text"
// //             name="merchantEmail"
// //             value={paystack.merchantEmail}
// //             onChange={handlePaystackChange}
// //           />
// //         </div>
// //         <div className="mb-2">
// //           <label className="block text-gray-700 text-sm font-bold mb-2">PAYSTACK CURRENCY CODE</label>
// //           <input
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             type="text"
// //             name="currencyCode"
// //             value={paystack.currencyCode}
// //             onChange={handlePaystackChange}
// //           />
// //         </div>
// //         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default PaymentMethod;



// import React, { useState } from 'react';
// import Switch from '../Switch';

// function PaymentMethod() {
//   // const [paypal, setPaypal] = useState({
//   //   clientId: '',
//   //   clientSecret: '',
//   //   sandboxMode: false,
//   // });
//   // const [stripe, setStripe] = useState({
//   //   stripeKey: '',
//   //   stripeSecret: '',
//   // });
//   const [razorpay, setRazorpay] = useState({
//     razorKey: '',
//     razorSecret: '',
//   });
//   // const [paystack, setPaystack] = useState({
//   //   publicKey: '',
//   //   secretKey: '',
//   //   merchantEmail: '',
//   //   currencyCode: '',
//   // });
//   // const [instamojo, setInstamojo] = useState({
//   //   apiKey: '',
//   //   authToken: '',
//   //   sandboxMode: false,
//   // });
//   // const [sucommz, setSucommz] = useState({
//   //   storeId: '',
//   //   storePassword: '',
//   //   sandboxMode: false,
//   // });

//   // 1. VoguePay
// // const [voguepay, setVoguepay] = useState({
// //     merchantId: '',
// //     sandboxMode: false,
// //   });
  
// //   const handleVoguepayChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setVoguepay({ ...voguepay, [name]: type === 'checkbox' ? checked : value });
// //   };
  
// //   // 2. Ngenius
// //   const [ngenius, setNgenius] = useState({
// //     outletId: '',
// //     apiKey: '',
// //     currency: '',
// //   });
  
// //   const handleNgeniusChange = (e) => {
// //     const { name, value } = e.target;
// //     setNgenius({ ...ngenius, [name]: value });
// //   };
  
// //   // 3. Payhere
// //   const [payhere, setPayhere] = useState({
// //     merchantId: '',
// //     secret: '',
// //     currency: '',
// //     sandboxMode: false,
// //   });
  
// //   const handlePayhereChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setPayhere({ ...payhere, [name]: type === 'checkbox' ? checked : value });
// //   };
  
// //   // 4. Iyzico
// //   const [iyzico, setIyzico] = useState({
// //     apiKey: '',
// //     secretKey: '',
// //     currencyCode: '',
// //     sandboxMode: false,
// //   });
  
//   // const handleIyzicoChange = (e) => {
//   //   const { name, value, type, checked } = e.target;
//   //   setIyzico({ ...iyzico, [name]: type === 'checkbox' ? checked : value });
//   // };
  
  
//   // const handlePaypalChange = (e) => {
//   //   const { name, value, type, checked } = e.target;
//   //   setPaypal({ ...paypal, [name]: type === 'checkbox' ? checked : value });
//   // };

//   // const handleStripeChange = (e) => {
//   //   setStripe({ ...stripe, [e.target.name]: e.target.value });
//   // };

//   const handleRazorpayChange = (e) => {
//     setRazorpay({ ...razorpay, [e.target.name]: e.target.value });
//   };

//   // const handlePaystackChange = (e) => {
//   //   setPaystack({ ...paystack, [e.target.name]: e.target.value });
//   // };

//   // const handleInstamojoChange = (e) => {
//   //   const { name, value, type, checked } = e.target;
//   //   setInstamojo({ ...instamojo, [name]: type === 'checkbox' ? checked : value });
//   // };

//   // const handleSucommzChange = (e) => {
//   //   const { name, value, type, checked } = e.target;
//   //   setSucommz({ ...sucommz, [name]: type === 'checkbox' ? checked : value });
//   // };

//   return (
//     <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Adjusted grid layout */}
//       {/* PayPal Section */}
//       {/* <div className="bg-white rounded-lg shadow-md p-4">
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex items-center">
//             <img src="paypal-logo.png" alt="Paypal" className="h-6 mr-2" /> 
//             <h2 className="text-lg font-semibold">Paypal</h2>
//           </div>
//           <label className="inline-flex items-center cursor-pointer">
//             <span className="mr-2"><Switch/></span>
//           </label>
//         </div>
//         <div className="mb-2">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Paypal Client Id</label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             name="clientId"
//             value={paypal.clientId}
//             onChange={handlePaypalChange}
//           />
//         </div>
//         <div className="mb-2">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Paypal Client Secret</label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             name="clientSecret"
//             value={paypal.clientSecret}
//             onChange={handlePaypalChange}
//           />
//         </div>
//         <div className="mb-2">
//           <label className="inline-flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               className="form-checkbox h-5 w-5 text-blue-600"
//               name="sandboxMode"
//               checked={paypal.sandboxMode}
//               onChange={handlePaypalChange}
//             />
//             <span className="ml-2">Paypal Sandbox Mode</span>
//           </label>
//         </div>
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
//       </div> */}

//       {/* Stripe Section */}
//       {/* <div className="bg-white rounded-lg shadow-md p-4">
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex items-center">
//             <img src="stripe-logo.png" alt="Stripe" className="h-6 mr-2" /> 
//             <h2 className="text-lg font-semibold">Stripe</h2>
//           </div>
//           <label className="inline-flex items-center cursor-pointer">
//             <span className="mr-2"><Switch/></span>
//           </label>
//         </div>
//         <div className="mb-2">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Stripe Key</label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             name="stripeKey"
//             value={stripe.stripeKey}
//             onChange={handleStripeChange}
//           />
//         </div>
//         <div className="mb-2">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Stripe Secret</label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             name="stripeSecret"
//             value={stripe.stripeSecret}
//             onChange={handleStripeChange}
//           />
//         </div>
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
//       </div> */}

//       {/* Sucommz Section */}
//       {/* <div className="bg-white rounded-lg shadow-md p-4">
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex items-center">
//             <img src="sucommz-logo.png" alt="Sucommz" className="h-6 mr-2" /> 
//             <h2 className="text-lg font-semibold">Sucommz</h2>
//           </div>
//           <label className="inline-flex items-center cursor-pointer">
//             <span className="mr-2"><Switch/></span>
//           </label>
//         </div>
//         <div className="mb-2">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Sucommz Store Id</label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             name="storeId"
//             value={sucommz.storeId}
//             onChange={handleSucommzChange}
//           />
//         </div>
//         <div className="mb-2">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Sucommz Store Password</label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             name="storePassword"
//             value={sucommz.storePassword}
//             onChange={handleSucommzChange}
//           />
//         </div>
//         <div className="mb-2">
//           <label className="inline-flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               className="form-checkbox h-5 w-5 text-blue-600"
//               name="sandboxMode"
//               checked={sucommz.sandboxMode}
//               onChange={handleSucommzChange}
//             />
//             <span className="ml-2">Sucommz Sandbox Mode</span>
//           </label>
//         </div>
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
//       </div> */}

//       {/* Instamojo Section */}
//       {/* <div className="bg-white rounded-lg shadow-md p-4">
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex items-center">
//             <img src="instamojo-logo.png" alt="Instamojo" className="h-6 mr-2" /> 
//             <h2 className="text-lg font-semibold">Instamojo</h2>
//           </div>
//           <label className="inline-flex items-center cursor-pointer">
//             <span className="mr-2"><Switch/></span>
//           </label>
//         </div>
//         <div className="mb-2">
//           <label className="block text-gray-700 text-sm font-bold mb-2">API KEY</label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             name="apiKey"
//             value={instamojo.apiKey}
//             onChange={handleInstamojoChange}
//           />
//         </div>
//         <div className="mb-2">
//           <label className="block text-gray-700 text-sm font-bold mb-2">AUTH TOKEN</label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             name="authToken"
//             value={instamojo.authToken}
//             onChange={handleInstamojoChange}
//           />
//         </div>
//         <div className="mb-2">
//           <label className="inline-flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               className="form-checkbox h-5 w-5 text-blue-600"
//               name="sandboxMode"
//               checked={instamojo.sandboxMode}
//               onChange={handleInstamojoChange}
//             />
//             <span className="ml-2">Instamojo Sandbox Mode</span>
//           </label>
//         </div>
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
//       </div> */}

//       {/* Razorpay Section */}
//       <div className="bg-white rounded-lg shadow-md p-4">
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex items-center">
//             <img src="razorpay-logo.png" alt="Razorpay" className="h-6 mr-2" /> {/* Replace with your Razorpay logo */}
//             <h2 className="text-lg font-semibold">Razorpay</h2>
//           </div>
//           <label className="inline-flex items-center cursor-pointer">
//             <span className="mr-2"><Switch/></span>
//           </label>
//         </div>
//         <div className="mb-2">
//           <label className="block text-gray-700 text-sm font-bold mb-2">RAZOR KEY</label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             name="razorKey"
//             value={razorpay.razorKey}
//             onChange={handleRazorpayChange}
//           />
//         </div>
//         <div className="mb-2">
//           <label className="block text-gray-700 text-sm font-bold mb-2">RAZOR SECRET</label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             name="razorSecret"
//             value={razorpay.razorSecret}
//             onChange={handleRazorpayChange}
//           />
//         </div>
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
//       </div>

//       {/* Paystack Section */}
//       {/* <div className="bg-white rounded-lg shadow-md p-4">
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex items-center">
//             <img src="paystack-logo.png" alt="Paystack" className="h-6 mr-2" /> 
//             <h2 className="text-lg font-semibold">Paystack</h2>
//           </div>
//           <label className="inline-flex items-center cursor-pointer">
//             <span className="mr-2"><Switch/></span>
//           </label>
//         </div>
//         <div className="mb-2">
//           <label className="block text-gray-700 text-sm font-bold mb-2">PUBLISH KEY</label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             name="publicKey"
//             value={paystack.publicKey}
//             onChange={handlePaystackChange}
//           />
//         </div>
//         <div className="mb-2">
//           <label className="block text-gray-700 text-sm font-bold mb-2">SECRET KEY</label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             name="secretKey"
//             value={paystack.secretKey}
//             onChange={handlePaystackChange}
//           />
//         </div>
//         <div className="mb-2">
//           <label className="block text-gray-700 text-sm font-bold mb-2">MERCHANT EMAIL</label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             name="merchantEmail"
//             value={paystack.merchantEmail}
//             onChange={handlePaystackChange}
//           />
//         </div>
//         <div className="mb-2">
//           <label className="block text-gray-700 text-sm font-bold mb-2">PAYSTACK CURRENCY CODE</label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             name="currencyCode"
//             value={paystack.currencyCode}
//             onChange={handlePaystackChange}
//           />
//         </div>
        
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
//       </div> */}


//       {/* VoguePay */}
// {/* <div className="bg-white rounded-lg shadow-md p-4">
//   <div className="flex justify-between items-center mb-4">
//     <div className="flex items-center">
//       <img src="voguepay-logo.png" alt="VoguePay" className="h-6 mr-2" />
//       <h2 className="text-lg font-semibold">VoguePay</h2>
//     </div>
//     <Switch checked={voguepay.sandboxMode} onChange={(e) => handleVoguepayChange({ target: { name: 'sandboxMode', type: 'checkbox', checked: e.target.checked } })} />
//   </div>
//   <div className="mb-4">
//     <label>MERCHANT ID</label>
//     <input type="text" name="merchantId" value={voguepay.merchantId} onChange={handleVoguepayChange} className="input" />
//   </div>
//   <button className="btn">Save</button>
// </div> */}

// {/* Ngenius */}
// {/* <div className="bg-white rounded-lg shadow-md p-4">
//   <h2 className="text-lg font-semibold mb-4">Ngenius</h2>
//   <input type="text" placeholder="NGENIUS OUTLET ID" name="outletId" value={ngenius.outletId} onChange={handleNgeniusChange} className="input mb-2" />
//   <input type="text" placeholder="NGENIUS API KEY" name="apiKey" value={ngenius.apiKey} onChange={handleNgeniusChange} className="input mb-2" />
//   <input type="text" placeholder="NGENIUS CURRENCY" name="currency" value={ngenius.currency} onChange={handleNgeniusChange} className="input mb-2" />
//   <p className="text-blue-500 text-sm">Currency must be AED or USD or EUR<br />If kept empty, AED will be used automatically</p>
//   <button className="btn mt-2">Save</button>
// </div> */}

// {/* Payhere */}
// {/* <div className="bg-white rounded-lg shadow-md p-4">
//   <div className="flex justify-between items-center mb-4">
//     <div className="flex items-center">
//       <img src="payhere-logo.png" alt="Payhere" className="h-6 mr-2" />
//       <h2 className="text-lg font-semibold">Payhere</h2>
//     </div>
//     <Switch checked={payhere.sandboxMode} onChange={(e) => handlePayhereChange({ target: { name: 'sandboxMode', type: 'checkbox', checked: e.target.checked } })} />
//   </div>
//   <input type="text" name="merchantId" placeholder="Merchant ID" value={payhere.merchantId} onChange={handlePayhereChange} className="input mb-2" />
//   <input type="text" name="secret" placeholder="Secret" value={payhere.secret} onChange={handlePayhereChange} className="input mb-2" />
//   <input type="text" name="currency" placeholder="Currency" value={payhere.currency} onChange={handlePayhereChange} className="input mb-2" />
//   <button className="btn">Save</button>
// </div> */}

// {/* Iyzico */}
// {/* <div className="bg-white rounded-lg shadow-md p-4">
//   <div className="flex justify-between items-center mb-4">
//     <div className="flex items-center">
//       <img src="iyzico-logo.png" alt="Iyzico" className="h-6 mr-2" />
//       <h2 className="text-lg font-semibold">Iyzico</h2>
//     </div>
//     <Switch checked={iyzico.sandboxMode} onChange={(e) => handleIyzicoChange({ target: { name: 'sandboxMode', type: 'checkbox', checked: e.target.checked } })} />
//   </div>
//   <input type="text" name="apiKey" placeholder="API KEY" value={iyzico.apiKey} onChange={handleIyzicoChange} className="input mb-2" />
//   <input type="text" name="secretKey" placeholder="SECRET KEY" value={iyzico.secretKey} onChange={handleIyzicoChange} className="input mb-2" />
//   <input type="text" name="currencyCode" placeholder="CURRENCY CODE" value={iyzico.currencyCode} onChange={handleIyzicoChange} className="input mb-2" />
//   <button className="btn">Save</button>
// </div> */}

//     </div>
//   );
// }

// export default PaymentMethod;



import React, { useState } from 'react';
import Switch from '../Switch';

function PaymentMethod() {
  const [razorpay, setRazorpay] = useState({
    razorKey: '',
    razorSecret: '',
    amount: 0, // Add amount state
    currency: 'INR', // Add currency state
    name: '', // Add name state
    description: '', // Add description state
    email: '', // Add email state
    contact: '', // Add contact state
  });

  const handleRazorpayChange = (e) => {
    setRazorpay({ ...razorpay, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;

    script.onload = () => {
      const options = {
        key: razorpay.razorKey,
        amount: Number(razorpay.amount) * 100, // Amount in paisa
        currency: razorpay.currency,
        name: razorpay.name,
        description: razorpay.description,
        prefill: {
          email: razorpay.email,
          contact: razorpay.contact,
        },
        handler: function (response) {
          console.log('Payment successful:', response);
          alert('Payment successful!');
          // Handle successful payment here (e.g., send data to your server)
        },
        modal: {
          ondismiss: function () {
            console.log('Payment modal closed');
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    };

    document.body.appendChild(script);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img src="razorpay-logo.png" alt="Razorpay" className="h-6 mr-2" />
            <h2 className="text-lg font-semibold">Razorpay Payment</h2>
          </div>
          <label className="inline-flex items-center cursor-pointer">
            <span className="mr-2"><Switch /></span>
          </label>
        </div>
        <form onSubmit={handlePayment}>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Razorpay Key ID</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="razorKey"
              value={razorpay.razorKey}
              onChange={handleRazorpayChange}
              placeholder="rzp_test_..."
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Amount (INR)</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="amount"
              value={razorpay.amount}
              onChange={handleRazorpayChange}
              placeholder="Amount"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              value={razorpay.name}
              onChange={handleRazorpayChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="description"
              value={razorpay.description}
              onChange={handleRazorpayChange}
              placeholder="Payment Description"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              value={razorpay.email}
              onChange={handleRazorpayChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Contact</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              name="contact"
              value={razorpay.contact}
              onChange={handleRazorpayChange}
              placeholder="Contact Number"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Pay Now</button>
        </form>
      </div>
    </div>
  );
}

export default PaymentMethod;