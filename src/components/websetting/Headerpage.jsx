// import React, { useState } from 'react';
// import { Switch } from '@headlessui/react';
// import { X } from 'lucide-react';

// export default function WebsiteHeaderSettings() {
//     const [languageSwitch, setLanguageSwitch] = useState(true);
//     const [currencySwitch, setCurrencySwitch] = useState(false);
//     const [stickyHeader, setStickyHeader] = useState(true);
//     const [navItems, setNavItems] = useState([
//         { name: 'Home', link: 'https://demo.activeitzone.com/ecommerce/' },
//     ]);
//     const [navflash, setflash] = useState([
//         { name: 'Flash Sale', link: 'https://demo.activeitzone.com/ecommerce/flash-deals' },

//     ]);
    
//     const [navblogs, setblogs] = useState([
//         { name: 'Blogs', link: 'https://demo.activeitzone.com/ecommerce/blogs' },

//     ]);

//     const [navbrand, setbrand] = useState([
//         { name: 'Brands', link: 'https://demo.activeitzone.com/ecommerce/brand' },

//     ]);
//     const [navcategories, setcategories] = useState([
//         { name: 'Categories', link: 'https://demo.activeitzone.com/ecommerce/Categories' },

//     ]);
//     const [navsellers, setseller] = useState([
//         { name: 'Seller', link: 'https://demo.activeitzone.com/ecommerce/seller' },

//     ]);
//     const [navcontact, setcontact] = useState([
//         { name: 'Contact Us', link: 'https://demo.activeitzone.com/ecommerce/contact' },

//     ]);
//     const [navpreorder, setorder] = useState([
//         { name: 'Preorder Products', link: 'https://demo.activeitzone.com/ecommerce/Preorder Products' },

//     ]);


//     const handleNavItemChange = (index, field, value) => {
//         const updatedItems = [...navItems];
//         updatedItems[index][field] = value;
//         setNavItems(updatedItems);
//         setflash(updatedItems);
//         setblogs(updatedItems);
//         setbrand(updatedItems);
//         setcategories(updatedItems);
//         setseller(updatedItems);
//         setcontact(updatedItems);
//         setorder(updatedItems);

//     };

//     const addNavItem = () => {
//         setNavItems([...navItems, { name: '', link: '' }]);
//         setflash([...navItems, { name: '', link: '' }]);
//         setblogs([...navItems, { name: '', link: '' }]);
//         setbrand([...navItems, { name: '', link: '' }]);
//         setcategories([...navItems, { name: '', link: '' }]);
//         setseller([...navItems, { name: '', link: '' }]);
//         setcontact([...navItems, { name: '', link: '' }]);
//         setorder([...navItems, { name: '', link: '' }]);
//     };

//     const removeNavItem = (index) => {
//         const updatedItems = [...navItems];
//         updatedItems.splice(index, 1);
//         setNavItems(updatedItems);
//         setflash(updatedItems);
//         setblogs(updatedItems);
//         setbrand(updatedItems);
//         setcategories(updatedItems);
//         setseller(updatedItems);
//         setcontact(updatedItems);
//         setorder(updatedItems);
//     };

//     return (
//         <div className="p-4 sm:p-6 md:p-10">
//             <h1 className="text-2xl font-semibold mb-6">Website Header</h1>
//             <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-5xl mx-auto">
//                 <h2 className="text-lg font-semibold mb-4 border-b pb-2">Header Setting</h2>

//                 <div className="space-y-6">
//                     {/* Header Logo */}
//                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
//                         <label className="font-medium text-gray-700">Header Logo</label>
//                         <div className="sm:col-span-2">
//                             <div className="flex border rounded overflow-hidden w-full h-[42px]">
//                                 <div className="bg-gray-200 text-gray-700 px-4 flex items-center text-sm whitespace-nowrap">Browse</div>
//                                 <div className="flex-1 px-3 py-2 text-sm text-gray-600 truncate flex items-center bg-white">Choose file</div>
//                             </div>
//                             <p className="text-xs text-gray-400 mt-1">Minimum dimensions required: 244px width X 40px height.</p>
//                         </div>
//                     </div>

//                     {/* Switches */}
//                     {[{ label: 'Show Language Switcher?', value: languageSwitch, setter: setLanguageSwitch },
//                     { label: 'Show Currency Switcher?', value: currencySwitch, setter: setCurrencySwitch },
//                     { label: 'Enable sticky header?', value: stickyHeader, setter: setStickyHeader },
//                     ].map((item, i) => (
//                         <div key={i} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
//                             <label className="font-medium text-gray-700">{item.label}</label>
//                             <div className="sm:col-span-2">
//                                 <Switch
//                                     checked={item.value}
//                                     onChange={item.setter}
//                                     className={`${item.value ? 'bg-green-500' : 'bg-gray-300'} relative inline-flex h-6 w-11 items-center rounded-full transition`}
//                                 >
//                                     <span
//                                         className={`${item.value ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`}
//                                     />
//                                 </Switch>
//                             </div>
//                         </div>
//                     ))}

//                     {/* Topbar Banners */}
//                     {[{
//                         label: 'Topbar Banner Large',
//                         note: 'Will be shown in large device. Minimum dimensions required: 1920px width X 60px height.',
//                     }, {
//                         label: 'Topbar Banner Medium',
//                         note: 'Will be shown in medium device. Minimum dimensions required: 810px width X 40px height.',
//                     }, {
//                         label: 'Topbar Banner Small',
//                         note: 'Will be shown in small device. Minimum dimensions required: 428px width X 40px height.',
//                     }].map((banner, index) => (
//                         <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
//                             <label className="font-medium text-gray-700">{banner.label}</label>
//                             <div className="sm:col-span-2">
//                                 <div className="flex border rounded overflow-hidden w-full h-[42px]">
//                                     <div className="bg-gray-200 text-gray-700 px-4 flex items-center text-sm whitespace-nowrap">Browse</div>
//                                     <div className="flex-1 px-3 py-2 text-sm text-gray-600 truncate flex items-center bg-white">Choose file</div>
//                                 </div>
//                                 <p className="text-xs text-gray-400 mt-1">{banner.note}</p>
//                             </div>
//                         </div>
//                     ))}

//                     {/* Topbar Banner Link */}
//                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
//                         <label className="font-medium text-gray-700">Topbar Banner Link</label>
//                         <input
//                             type="text"
//                             placeholder="Link with http:// or https://"
//                             className="sm:col-span-2 w-full border rounded px-4 py-2 text-sm text-gray-700"
//                         />
//                     </div>

//                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
//                         <label className="font-medium text-gray-700">Help line number</label>
//                         <input
//                             type="text"
//                             placeholder="Help line number"
//                             className="sm:col-span-2 w-full border rounded px-4 py-2 text-sm text-gray-700"
//                         />
//                     </div>

//                     {/* Header Nav Text Color */}
//                     <div className="mb-6">
//                         <label className="block font-semibold text-[13px] text-gray-800 mb-2">Header Nav Menu Text Color</label>
//                         <div className="flex gap-8">
//                             {['light', 'dark'].map((option) => (
//                                 <label
//                                     key={option}
//                                     className="inline-flex items-center cursor-pointer text-sm font-medium text-gray-700"
//                                 >
//                                     <input
//                                         type="radio"
//                                         name="navColor"
//                                         value={option}
//                                         defaultChecked={option === 'light'}
//                                         className="form-radio text-green-500 h-4 w-4"
//                                     />
//                                     <span className="ml-2 capitalize">{option}</span>
//                                 </label>
//                             ))}
//                         </div>
//                     </div>


//                     {/* Header Nav Menu Section */}
//                     <div>
//                         <h3 className="font-semibold text-gray-800 text-base mb-2">Header Nav Menu</h3>
//                         {navItems.map((item, index) => (
//                             <div key={index} className="grid grid-cols-1 sm:grid-cols-[1fr_2fr_auto] gap-3 items-center mb-2">
//                                 <input
//                                     type="text"
//                                     placeholder="Menu Name"
//                                     value={item.name}
//                                     onChange={(e) => handleNavItemChange(index, 'name', e.target.value)}
//                                     className="w-full border rounded px-3 py-2 text-sm text-gray-700"
//                                 />
//                                 <input
//                                     type="text"
//                                     placeholder="https://example.com"
//                                     value={item.link}
//                                     onChange={(e) => handleNavItemChange(index, 'link', e.target.value)}
//                                     className="w-full border rounded px-3 py-2 text-sm text-gray-700"
//                                 />

//                                 <button
//                                     onClick={() => removeNavItem(index)}
//                                     className="text-red-500 hover:text-red-700"
//                                     title="Remove"
//                                 >
//                                     <X className="w-5 h-5" />
//                                 </button>
//                             </div>

//                         ))}
//                         {navflash.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="grid grid-cols-[1fr_2fr_auto] items-center gap-3 mb-2"
//                             >
//                                 {/* Menu Name */}
//                                 <input
//                                     type="text"
//                                     placeholder="Menu Name"
//                                     value={item.name}
//                                     onChange={(e) => handleNavItemChange(index, 'name', e.target.value)}
//                                     className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
//                                 />

//                                 {/* Menu Link */}
//                                 <input
//                                     type="text"
//                                     placeholder="https://example.com"
//                                     value={item.link}
//                                     onChange={(e) => handleNavItemChange(index, 'link', e.target.value)}
//                                     className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
//                                 />

//                                 {/* Remove Button */}
//                                 <button
//                                     onClick={() => removeNavItem(index)}
//                                     className="text-red-500 hover:text-red-700"
//                                     title="Remove"
//                                 >
//                                     <X className="w-5 h-5" />
//                                 </button>
//                             </div>
//                         ))}
//                         {navblogs.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="grid grid-cols-[1fr_2fr_auto] items-center gap-3 mb-2"
//                             >
//                                 {/* Menu Name */}
//                                 <input
//                                     type="text"
//                                     placeholder="Menu Name"
//                                     value={item.name}
//                                     onChange={(e) => handleNavItemChange(index, 'name', e.target.value)}
//                                     className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
//                                 />

//                                 {/* Menu Link */}
//                                 <input
//                                     type="text"
//                                     placeholder="https://example.com"
//                                     value={item.link}
//                                     onChange={(e) => handleNavItemChange(index, 'link', e.target.value)}
//                                     className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
//                                 />

//                                 {/* Remove Button */}
//                                 <button
//                                     onClick={() => removeNavItem(index)}
//                                     className="text-red-500 hover:text-red-700"
//                                     title="Remove"
//                                 >
//                                     <X className="w-5 h-5" />
//                                 </button>
//                             </div>
//                         ))}
//                         {navbrand.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="grid grid-cols-[1fr_2fr_auto] items-center gap-3 mb-2"
//                             >
//                                 {/* Menu Name */}
//                                 <input
//                                     type="text"
//                                     placeholder="Menu Name"
//                                     value={item.name}
//                                     onChange={(e) => handleNavItemChange(index, 'name', e.target.value)}
//                                     className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
//                                 />

//                                 {/* Menu Link */}
//                                 <input
//                                     type="text"
//                                     placeholder="https://example.com"
//                                     value={item.link}
//                                     onChange={(e) => handleNavItemChange(index, 'link', e.target.value)}
//                                     className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
//                                 />

//                                 {/* Remove Button */}
//                                 <button
//                                     onClick={() => removeNavItem(index)}
//                                     className="text-red-500 hover:text-red-700"
//                                     title="Remove"
//                                 >
//                                     <X className="w-5 h-5" />
//                                 </button>
//                             </div>
//                         ))}
//                         {navcategories.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="grid grid-cols-[1fr_2fr_auto] items-center gap-3 mb-2"
//                             >
//                                 {/* Menu Name */}
//                                 <input
//                                     type="text"
//                                     placeholder="Menu Name"
//                                     value={item.name}
//                                     onChange={(e) => handleNavItemChange(index, 'name', e.target.value)}
//                                     className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
//                                 />

//                                 {/* Menu Link */}
//                                 <input
//                                     type="text"
//                                     placeholder="https://example.com"
//                                     value={item.link}
//                                     onChange={(e) => handleNavItemChange(index, 'link', e.target.value)}
//                                     className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
//                                 />

//                                 {/* Remove Button */}
//                                 <button
//                                     onClick={() => removeNavItem(index)}
//                                     className="text-red-500 hover:text-red-700"
//                                     title="Remove"
//                                 >
//                                     <X className="w-5 h-5" />
//                                 </button>
//                             </div>
//                         ))}
//                         {navsellers.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="grid grid-cols-[1fr_2fr_auto] items-center gap-3 mb-2"
//                             >
//                                 {/* Menu Name */}
//                                 <input
//                                     type="text"
//                                     placeholder="Menu Name"
//                                     value={item.name}
//                                     onChange={(e) => handleNavItemChange(index, 'name', e.target.value)}
//                                     className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
//                                 />

//                                 {/* Menu Link */}
//                                 <input
//                                     type="text"
//                                     placeholder="https://example.com"
//                                     value={item.link}
//                                     onChange={(e) => handleNavItemChange(index, 'link', e.target.value)}
//                                     className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
//                                 />

//                                 {/* Remove Button */}
//                                 <button
//                                     onClick={() => removeNavItem(index)}
//                                     className="text-red-500 hover:text-red-700"
//                                     title="Remove"
//                                 >
//                                     <X className="w-5 h-5" />
//                                 </button>
//                             </div>
//                         ))}
//                         {navcontact.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="grid grid-cols-[1fr_2fr_auto] items-center gap-3 mb-2"
//                             >
//                                 {/* Menu Name */}
//                                 <input
//                                     type="text"
//                                     placeholder="Menu Name"
//                                     value={item.name}
//                                     onChange={(e) => handleNavItemChange(index, 'name', e.target.value)}
//                                     className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
//                                 />

//                                 {/* Menu Link */}
//                                 <input
//                                     type="text"
//                                     placeholder="https://example.com"
//                                     value={item.link}
//                                     onChange={(e) => handleNavItemChange(index, 'link', e.target.value)}
//                                     className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
//                                 />

//                                 {/* Remove Button */}
//                                 <button
//                                     onClick={() => removeNavItem(index)}
//                                     className="text-red-500 hover:text-red-700"
//                                     title="Remove"
//                                 >
//                                     <X className="w-5 h-5" />
//                                 </button>
//                             </div>
//                         ))}
//                         {navpreorder.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="grid grid-cols-[1fr_2fr_auto] items-center gap-3 mb-2"
//                             >
//                                 {/* Menu Name */}
//                                 <input
//                                     type="text"
//                                     placeholder="Menu Name"
//                                     value={item.name}
//                                     onChange={(e) => handleNavItemChange(index, 'name', e.target.value)}
//                                     className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
//                                 />

//                                 {/* Menu Link */}
//                                 <input
//                                     type="text"
//                                     placeholder="https://example.com"
//                                     value={item.link}
//                                     onChange={(e) => handleNavItemChange(index, 'link', e.target.value)}
//                                     className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
//                                 />

//                                 {/* Remove Button */}
//                                 <button
//                                     onClick={() => removeNavItem(index)}
//                                     className="text-red-500 hover:text-red-700"
//                                     title="Remove"
//                                 >
//                                     <X className="w-5 h-5" />
//                                 </button>
//                             </div>
//                         ))}
                        
//                         <button
//                             onClick={addNavItem}
//                             className="mt-2 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded border"
//                         >
//                             Add New
//                         </button>
//                     </div>

//                     {/* Submit Button */}
//                     <div className="pt-6 text-right">
//                         <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-6 rounded">
//                             Update
//                         </button>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// }


// import React, { useState } from "react";
// import { Switch } from "@headlessui/react";
// import { X } from "lucide-react";
// import axios from "axios";

// const WebsiteHeaderSettings = () => {
//   const [headerLogo, setHeaderLogo] = useState(null);
//   const [topbarLarge, setTopbarLarge] = useState(null);
//   const [topbarMedium, setTopbarMedium] = useState(null);
//   const [topbarSmall, setTopbarSmall] = useState(null);
//   const [bannerLink, setBannerLink] = useState("");
//   const [helpline, setHelpline] = useState("");
//   const [navTextColor, setNavTextColor] = useState("light");
//   const [languageSwitch, setLanguageSwitch] = useState(false);
//   const [currencySwitch, setCurrencySwitch] = useState(false);
//   const [stickyHeader, setStickyHeader] = useState(false);

//   const [navItems, setNavItems] = useState([{ title: "", link: "" }]);

//   const handleNavItemChange = (index, field, value) => {
//     const newItems = [...navItems];
//     newItems[index][field] = value;
//     setNavItems(newItems);
//   };

//   const addNavItem = () => {
//     setNavItems([...navItems, { title: "", link: "" }]);
//   };

//   const removeNavItem = (index) => {
//     const updatedItems = [...navItems];
//     updatedItems.splice(index, 1);
//     setNavItems(updatedItems);
//   };

//   const handleSubmit = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("headerLogo", headerLogo);
//       formData.append("topbarBannerLarge", topbarLarge);
//       formData.append("topbarBannerMedium", topbarMedium);
//       formData.append("topbarBannerSmall", topbarSmall);
//       formData.append("bannerLink", bannerLink);
//       formData.append("helpline", helpline);
//       formData.append("navTextColor", navTextColor);
//       formData.append("showLanguageSwitcher", JSON.stringify(languageSwitch));
//       formData.append("showCurrencySwitcher", JSON.stringify(currencySwitch));
//       formData.append("enableStickyHeader", JSON.stringify(stickyHeader));
//       formData.append("headerNavMenu", JSON.stringify(navItems));

//       const response = await axios.post("https://e-commerce-backend-1-0.onrender.com/api/website-header/create", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       alert("Settings saved successfully!");
//     } catch (error) {
//       console.error("Error saving settings:", error);
//       alert("Failed to save settings.");
//     }
//   };

//   return (
//     <div className="p-4 sm:p-6 md:p-10">
//       <h1 className="text-2xl font-semibold mb-6 text-center">Website Header</h1>
//       <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-5xl mx-auto">
//         <h2 className="text-lg font-semibold mb-4 border-b pb-2">Header Setting</h2>

//         {/* Header Logo */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center mb-4">
//           <label className="font-medium text-gray-700">Header Logo</label>
//           <input type="file" onChange={(e) => setHeaderLogo(e.target.files[0])} className="sm:col-span-2 w-full" />
//         </div>

//         {/* Switches */}
//         {[
//           { label: "Show Language Switcher?", value: languageSwitch, setter: setLanguageSwitch },
//           { label: "Show Currency Switcher?", value: currencySwitch, setter: setCurrencySwitch },
//           { label: "Enable sticky header?", value: stickyHeader, setter: setStickyHeader },
//         ].map((item, i) => (
//           <div key={i} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center mb-4">
//             <label className="font-medium text-gray-700">{item.label}</label>
//             <Switch
//               checked={item.value}
//               onChange={item.setter}
//               className={`${
//                 item.value ? "bg-green-500" : "bg-gray-300"
//               } relative inline-flex h-6 w-11 items-center rounded-full transition`}
//             >
//               <span
//                 className={`${
//                   item.value ? "translate-x-6" : "translate-x-1"
//                 } inline-block h-4 w-4 transform bg-white rounded-full transition`}
//               />
//             </Switch>
//           </div>
//         ))}

//         {/* Topbar Banners */}
//         {[
//           { label: "Topbar Banner Large", setter: setTopbarLarge },
//           { label: "Topbar Banner Medium", setter: setTopbarMedium },
//           { label: "Topbar Banner Small", setter: setTopbarSmall },
//         ].map((banner, i) => (
//           <div key={i} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center mb-4">
//             <label className="font-medium text-gray-700">{banner.label}</label>
//             <input type="file" onChange={(e) => banner.setter(e.target.files[0])} className="sm:col-span-2 w-full" />
//           </div>
//         ))}

//         {/* Banner Link & Helpline */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center mb-4">
//           <label className="font-medium text-gray-700">Topbar Banner Link</label>
//           <input
//             type="text"
//             value={bannerLink}
//             onChange={(e) => setBannerLink(e.target.value)}
//             placeholder="https://example.com"
//             className="sm:col-span-2 w-full border rounded px-4 py-2 text-sm"
//           />
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center mb-4">
//           <label className="font-medium text-gray-700">Help Line Number</label>
//           <input
//             type="text"
//             value={helpline}
//             onChange={(e) => setHelpline(e.target.value)}
//             placeholder="1234567890"
//             className="sm:col-span-2 w-full border rounded px-4 py-2 text-sm"
//           />
//         </div>

//         {/* Nav Text Color */}
//         {/* <div className="mb-6">
//           <label className="block font-semibold text-sm text-gray-800 mb-2">Header Nav Menu Text Color</label>
//           <div className="flex flex-wrap gap-4 items-center">
//             {["light", "dark"].map((option) => (
//               <label key={option} className="flex items-center gap-2 text-sm text-gray-700">
//                 <input
//                   type="radio"
//                   value={option}
//                   name="navColor"
//                   checked={navTextColor === option}
//                   onChange={() => setNavTextColor(option)}
//                   className="form-radio text-green-600 focus:ring-green-500"
//                 />
//                 <span className="capitalize">{option}</span>
//               </label>
//             ))}
//           </div>
//         </div> */}
// <div className="mb-6">
//   <label className="block font-semibold text-[13px] text-gray-800 mb-2">Header Nav Menu Text Color</label>
  // <div className="flex gap-8">
  //   {['light', 'dark'].map((option) => (
  //     <label
  //       key={option}
  //       className="inline-flex items-center cursor-pointer text-sm font-medium text-gray-700"
  //     >
  //       <input
  //         type="radio"
  //         name="navColor"
  //         value={option}
  //         checked={navTextColor === option}
  //         onChange={() => setNavTextColor(option)}
  //         className="form-radio text-green-500 h-4 w-4"
  //       />
  //       <span className="ml-2 capitalize">{option}</span>
  //     </label>
  //   ))}
  // </div>
// </div>

//         {/* Nav Menu */}
//         <h3 className="text-base font-semibold mb-2">Header Nav Menu</h3>
//         {navItems.map((item, index) => (
//           <div key={index} className="grid grid-cols-[1fr_2fr_auto] gap-3 items-center mb-2">
//             <input
//               type="text"
//               placeholder="Menu Name"
//               value={item.title}
//               onChange={(e) => handleNavItemChange(index, "title", e.target.value)}
//               className="border px-3 py-2 rounded text-sm"
//             />
//             <input
//               type="text"
//               placeholder="Menu Link"
//               value={item.link}
//               onChange={(e) => handleNavItemChange(index, "link", e.target.value)}
//               className="border px-3 py-2 rounded text-sm"
//             />
//             <button onClick={() => removeNavItem(index)} className="text-red-500">
//               <X className="w-4 h-4" />
//             </button>
//           </div>
//         ))}
//         <button onClick={addNavItem} className="text-sm font-medium text-green-600 hover:underline mb-4">
//           + Add Nav Item
//         </button>

//         {/* Submit */}
//         <div className="flex justify-end mt-4">
//           <button
//             onClick={handleSubmit}
//             className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700"
//           >
//             Update
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WebsiteHeaderSettings;
import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { X } from "lucide-react";
import axios from "axios";

const WebsiteHeaderSettings = () => {
  const [headerLogo, setHeaderLogo] = useState(null);
  const [topbarLarge, setTopbarLarge] = useState(null);
  const [topbarMedium, setTopbarMedium] = useState(null);
  const [topbarSmall, setTopbarSmall] = useState(null);
  const [bannerLink, setBannerLink] = useState("");
  const [helpline, setHelpline] = useState("");
  const [navTextColor, setNavTextColor] = useState("light");
  const [languageSwitch, setLanguageSwitch] = useState(false);
  const [currencySwitch, setCurrencySwitch] = useState(false);
  const [stickyHeader, setStickyHeader] = useState(false);

  const [navItems, setNavItems] = useState([{ title: "", link: "" }]);

  const handleNavItemChange = (index, field, value) => {
    const updated = [...navItems];
    updated[index][field] = value;
    setNavItems(updated);
  };

  const addNavItem = () => setNavItems([...navItems, { title: "", link: "" }]);

  const removeNavItem = (index) => {
    const updated = [...navItems];
    updated.splice(index, 1);
    setNavItems(updated);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("headerLogo", headerLogo);
      formData.append("topbarBannerLarge", topbarLarge);
      formData.append("topbarBannerMedium", topbarMedium);
      formData.append("topbarBannerSmall", topbarSmall);
      formData.append("bannerLink", bannerLink);
      formData.append("helpline", helpline);
      formData.append("navTextColor", navTextColor);
      formData.append("showLanguageSwitcher", JSON.stringify(languageSwitch));
      formData.append("showCurrencySwitcher", JSON.stringify(currencySwitch));
      formData.append("enableStickyHeader", JSON.stringify(stickyHeader));
      formData.append("headerNavMenu", JSON.stringify(navItems));

      const res = await axios.post(
        "https://e-commerce-backend-1-0.onrender.com/api/website-header/create",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      alert("Settings saved successfully!");
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to save settings.");
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Website Header Settings
      </h1>

      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-5xl mx-auto space-y-6">
        {/* Section Title */}
        <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">
          Header Setup
        </h2>

        {/* Logo Upload */}
        <div className="grid sm:grid-cols-3 gap-4 items-center">
          <label className="text-sm font-medium text-gray-700">Header Logo</label>
          <input
            type="file"
            onChange={(e) => setHeaderLogo(e.target.files[0])}
            className="sm:col-span-2 border px-3 py-2 rounded-md text-sm"
          />
        </div>

        {/* Switches */}
        {[ 
          { label: "Show Language Switcher", value: languageSwitch, setter: setLanguageSwitch },
          { label: "Show Currency Switcher", value: currencySwitch, setter: setCurrencySwitch },
          { label: "Enable Sticky Header", value: stickyHeader, setter: setStickyHeader },
        ].map((item, i) => (
          <div key={i} className="grid sm:grid-cols-3 gap-4 items-center">
            <label className="text-sm font-medium text-gray-700">{item.label}</label>
            <Switch
              checked={item.value}
              onChange={item.setter}
              className={`${
                item.value ? "bg-green-500" : "bg-gray-300"
              } relative inline-flex h-6 w-11 items-center rounded-full transition`}
            >
              <span
                className={`${
                  item.value ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform bg-white rounded-full transition`}
              />
            </Switch>
          </div>
        ))}

        {/* Topbar Banners */}
        {[
          { label: "Topbar Banner (Large)", setter: setTopbarLarge },
          { label: "Topbar Banner (Medium)", setter: setTopbarMedium },
          { label: "Topbar Banner (Small)", setter: setTopbarSmall },
        ].map((banner, i) => (
          <div key={i} className="grid sm:grid-cols-3 gap-4 items-center">
            <label className="text-sm font-medium text-gray-700">{banner.label}</label>
            <input
              type="file"
              onChange={(e) => banner.setter(e.target.files[0])}
              className="sm:col-span-2 border px-3 py-2 rounded-md text-sm"
            />
          </div>
        ))}

        {/* Banner Link */}
        <div className="grid sm:grid-cols-3 gap-4 items-center">
          <label className="text-sm font-medium text-gray-700">Topbar Banner Link</label>
          <input
            type="text"
            value={bannerLink}
            onChange={(e) => setBannerLink(e.target.value)}
            placeholder="https://example.com"
            className="sm:col-span-2 border px-4 py-2 rounded-md text-sm"
          />
        </div>

        {/* Helpline */}
        <div className="grid sm:grid-cols-3 gap-4 items-center">
          <label className="text-sm font-medium text-gray-700">Helpline Number</label>
          <input
            type="text"
            value={helpline}
            onChange={(e) => setHelpline(e.target.value)}
            placeholder="1234567890"
            className="sm:col-span-2 border px-4 py-2 rounded-md text-sm"
          />
        </div>

        {/* Nav Text Color */}
        <div>
  <label className="block text-sm font-semibold text-gray-800 mb-3">
    Header Nav Menu Text Color
  </label>
  <div className="flex gap-4">
    {["light", "dark"].map((option) => (
      <div
        key={option}
        onClick={() => setNavTextColor(option)}
        className={`cursor-pointer border rounded-lg px-5 py-3 flex items-center gap-3 transition 
          ${
            navTextColor === option
              ? "bg-green-100 border-green-600 text-green-700 shadow-md"
              : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
          }`}
      >
        <div
          className={`h-4 w-4 rounded-full border-2 ${
            navTextColor === option ? "bg-green-600 border-green-600" : "border-gray-400"
          }`}
        />
        <span className="capitalize font-medium">{option}</span>
      </div>
    ))}
  </div>
</div>


        {/* Nav Menu Items */}
        <div>
          <h3 className="text-base font-semibold text-gray-700 mb-2">
            Header Nav Menu
          </h3>
          {navItems.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_2fr_auto] gap-3 items-center mb-2"
            >
              <input
                type="text"
                placeholder="Menu Name"
                value={item.title}
                onChange={(e) => handleNavItemChange(index, "title", e.target.value)}
                className="border px-3 py-2 rounded-md text-sm"
              />
              <input
                type="text"
                placeholder="Menu Link"
                value={item.link}
                onChange={(e) => handleNavItemChange(index, "link", e.target.value)}
                className="border px-3 py-2 rounded-md text-sm"
              />
              <button
                onClick={() => removeNavItem(index)}
                className="text-red-500 hover:text-red-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
          <button
            onClick={addNavItem}
            className="text-sm font-medium text-green-600 hover:underline"
          >
            + Add Nav Item
          </button>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-4">
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition font-medium"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebsiteHeaderSettings;
