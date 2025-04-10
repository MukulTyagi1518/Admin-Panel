import React, { useState } from "react";
import {
    FaBold,
    FaItalic,
    FaUnderline,
    FaListUl,
    FaListOl,
    FaUndo,
    FaRedo,
    FaLink,
    FaImage,
    FaVideo,
    FaTable,
    FaCode,
} from "react-icons/fa";
import { MdFormatColorText, MdOutlineFormatClear } from "react-icons/md";
import { X } from "lucide-react";
import {
    Facebook, Twitter, Instagram, Youtube, Linkedin,
  } from "lucide-react";

const FooterWidget = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [activeLang, setActiveLang] = useState("English");

    const [footerLogo, setFooterLogo] = useState(null);
    const [aboutDesc, setAboutDesc] = useState("");
    const [playStoreLink, setPlayStoreLink] = useState("");
    const [appStoreLink, setAppStoreLink] = useState("");

    const languages = ["English", "Bangla", "Arabic", "French"];

    const handleUpdate = () => {
        console.log("Title:", title);
        console.log("Description:", description);
        console.log("Language:", activeLang);
        console.log("Footer Logo:", footerLogo);
        console.log("About Description:", aboutDesc);
        console.log("Play Store:", playStoreLink);
        console.log("App Store:", appStoreLink);
    };

    const handleFileChange = (e) => {
        setFooterLogo(e.target.files[0]);
    };

    const [fileName, setFileName] = useState('Choose file');

    const handleFileChangefile = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName('Choose file');
        }
    }

    const [links, setLinks] = useState([
        { label: "Support Policy Page", url: "https://demo.activeitzone.com/ecommerce/sellerpolicy" },
        { label: "Return Policy Page", url: "https://demo.activeitzone.com/ecommerce/returnpolicy" },
        { label: "About Us", url: "https://demo.activeitzone.com/ecommerce/aboutus" },
        { label: "Privacy Policy Page", url: "https://demo.activeitzone.com/ecommerce/privacypolicy" },
        { label: "Seller Policy", url: "https://demo.activeitzone.com/ecommerce/sellerpolicy" },
        { label: "Term Conditions Page", url: "https://demo.activeitzone.com/ecommerce/terms" },
    ]);

    const handleAddLink = () => {
        setLinks([...links, { label: "", url: "" }]);
    };

    const handleRemoveLink = (index) => {
        const newLinks = [...links];
        newLinks.splice(index, 1);
        setLinks(newLinks);
    };

    const handleChange = (index, field, value) => {
        const updated = [...links];
        updated[index][field] = value;
        setLinks(updated);
    };

    const [showLinks, setShowLinks] = useState(true);
  const [socialLinks, setSocialLinks] = useState([
    { icon: <Facebook className="w-4 h-4" />, url: "https://facebook.com/" },
    { icon: <Twitter className="w-4 h-4" />, url: "https://twitter.com/" },
    { icon: <Instagram className="w-4 h-4" />, url: "https://www.instagram.com/" },
    { icon: <Youtube className="w-4 h-4" />, url: "https://youtube.com/" },
    { icon: <Linkedin className="w-4 h-4" />, url: "https://linkedin.com/" },
  ]);

  const handleChangenew = (index, value) => {
    const updated = [...socialLinks];
    updated[index].url = value;
    setSocialLinks(updated);
  };


    return (
        <div className="bg-white min-h-screen py-6 px-4 sm:px-8">
            {/* Header */}
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Footer Widget</h2>
            <div className="border-b border-gray-300 mb-4"></div>

            {/* Language Tabs */}
            <div className="bg-white rounded-lg shadow border border-gray-200 mb-8">
                
                {/* Footer Info Widget */}
                <div className="p-4 sm:p-6">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6">
                        <h3 className="text-base font-semibold text-gray-800 mb-4">
                            Footer Info Widget
                        </h3>
                        <div className="border-b border-gray-300 mb-4"></div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Title (Translatable)
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
                                placeholder="Active eCommerce CMS | AN ONLINE SHOPPING PLATFORM WITH GREAT DEALS"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Footer description (Translatable)
                            </label>
                            <textarea
                                rows="5"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full border border-gray-300 rounded px-4 py-2 text-sm resize-y"
                                placeholder="Enter footer description..."
                            ></textarea>
                        </div>

                        <div className="text-right">
                            <button
                                onClick={handleUpdate}
                                className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-6 rounded shadow-sm"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
                {/* Below Footer Info Widget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Contact Info Widget */}
                    <div className="bg-gray-50 rounded-lg shadow border border-gray-200 p-4 sm:p-6 ml-4">
                        <h3 className="text-base font-semibold text-gray-800 mb-4">Contact Info Widget</h3>
                        <div className="border-b border-gray-300 mb-4"></div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
                            <label htmlFor="metaImage" className="w-full sm:w-40 text-gray-700 font-medium">
                                Footer Logo
                            </label>

                            <div className="relative w-full sm:flex-1">
                                <input
                                    type="file"
                                    id="metaImage"
                                    onChange={handleFileChangefile}
                                    className="absolute inset-0 opacity-0 cursor-pointer z-10 w-full h-full"
                                />
                                <div className="flex border rounded overflow-hidden w-full h-[42px]">
                                    <div className="bg-gray-200 text-gray-700 px-5 py-2 text-sm flex items-center whitespace-nowrap">
                                        Browse
                                    </div>
                                    <div className="px-4 py-2 text-sm text-gray-600 bg-white w-full truncate flex items-center">
                                        {fileName}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-3 pt-4">
                            <label className="md:w-1/4 font-medium text-sm text-gray-700">
                                Add Content
                            </label>
                            <div className="w-full md:w-3/4 border border-gray-300 rounded">
                                {/* Toolbar */}
                                <div className="flex flex-wrap items-center gap-2 p-2 border-b border-gray-200 bg-gray-50">
                                    {[FaBold, FaItalic, FaUnderline, FaListUl, FaListOl, MdOutlineFormatClear, MdFormatColorText, FaTable, FaLink, FaImage, FaVideo, FaCode, FaUndo, FaRedo].map((Icon, idx) => (
                                        <button
                                            key={idx}
                                            type="button"
                                            className="p-2 text-gray-600 hover:bg-gray-200 rounded"
                                        >
                                            <Icon size={16} />
                                        </button>
                                    ))}
                                </div>

                                <textarea
                                    rows="10"
                                    placeholder="Content.."
                                    className="w-full p-3 focus:outline-none resize-none"
                                ></textarea>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center gap-3 mt-3">
                            <label className="md:w-1/4 font-medium text-sm text-gray-700">
                                Play Store Link<span></span>
                            </label>
                            <input
                                type="text"
                                placeholder="https://play.google.com/store/apps"
                                className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none "
                            />
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center gap-3 mt-3">
                            <label className="md:w-1/4 font-medium text-sm text-gray-700">
                                App Store Link<span></span>
                            </label>
                            <input
                                type="text"
                                placeholder="https://www.apple.com/app-store/"
                                className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none "
                            />
                        </div>
                        <div className="text-right mt-3">
                            <button
                                onClick={handleUpdate}
                                className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-6 rounded shadow-sm"
                            >
                                Update
                            </button>
                        </div>

                    </div>

                    {/* Support Widget */}
                    <div className="bg-gray-50 max-h-[50%] rounded-lg shadow border border-gray-200 p-4 sm:p-6 mr-4">
                        <h3 className="text-base font-semibold text-gray-800 mb-4">Contact Info Widget</h3>
                        <div className="border-b border-gray-300 mb-4"></div>

                        <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
                            <label className="md:w-1/4 font-medium text-sm text-gray-700">
                                Contact address (Translatable)<span></span>
                            </label>
                            <input
                                type="text"
                                placeholder="Demo Address"
                                className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none "
                            />
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
                            <label className="md:w-1/4 font-medium text-sm text-gray-700">
                                Contact phone<span></span>
                            </label>
                            <input
                                type="text"
                                placeholder="123456789"
                                className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none "
                            />
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
                            <label className="md:w-1/4 font-medium text-sm text-gray-700">
                                Contact email<span></span>
                            </label>
                            <input
                                type="text"
                                placeholder="demo.example@gmail.com"
                                className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none "
                            />
                        </div>
                        <div className="text-right mt-3">
                            <button
                                onClick={handleUpdate}
                                className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-6 rounded shadow-sm"
                            >
                                Update
                            </button>
                        </div>

                    </div>

                </div>
               
                {/* Link Widget One */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10 ml-4 mr-4">
                    <h2 className="text-lg font-semibold mb-4">Link Widget One</h2>
                    <div className="border-b border-gray-300 mb-4"></div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Title (Translatable)</label>
                        <input
                            type="text"
                            placeholder="Quick Links"
                            className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Links - (Translatable Label)</label>

                        {links.map((item, index) => (
                            <div key={index} className="flex items-center gap-2 mb-2">
                                <input
                                    type="text"
                                    value={item.label}
                                    onChange={(e) => handleChange(index, "label", e.target.value)}
                                    className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
                                    placeholder="Link Label"
                                />
                                <input
                                    type="text"
                                    value={item.url}
                                    onChange={(e) => handleChange(index, "url", e.target.value)}
                                    className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
                                    placeholder="Link URL"
                                />
                                <button
                                    onClick={() => handleRemoveLink(index)}
                                    className="text-red-500 hover:text-red-700 p-1"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={handleAddLink}
                        className="bg-gray-200 hover:bg-gray-300 text-sm px-4 py-1.5 rounded mb-4"
                    >
                        Add New
                    </button>

                    <div className="text-right mt-3">
                        <button
                            onClick={handleUpdate}
                            className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-6 rounded shadow-sm"
                        >
                            Update
                        </button>
                    </div>
                </div>

                <h1 className="text-lg font-semibold mb-4 ml-4 mr-4">Footer Bottom</h1>
                <div className="border-b border-gray-300 mb-4 ml-4 mr-4"></div>

                {/* Footer Bottom */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10 ml-4 mr-4">
                    <h2 className="text-lg font-semibold mb-4">Copyright Widget</h2>
                    <div className="border-b border-gray-300 mb-4"></div>

                    
                    <label className="md:w-1/4 font-medium text-md text-gray-700">
                             Copyright Text (Translatable)
                            </label>
                            <div className="w-full md:w-3/4 border border-gray-300 rounded">
                                {/* Toolbar */}
                                <div className="flex flex-wrap items-center gap-2 p-2 border-b border-gray-200 bg-gray-50">
                                    {[FaBold, FaItalic, FaUnderline, FaListUl, FaListOl, MdOutlineFormatClear, MdFormatColorText, FaTable, FaLink, FaImage, FaVideo, FaCode, FaUndo, FaRedo].map((Icon, idx) => (
                                        <button
                                            key={idx}
                                            type="button"
                                            className="p-2 text-gray-600 hover:bg-gray-200 rounded"
                                        >
                                            <Icon size={16} />
                                        </button>
                                    ))}
                                </div>

                                <textarea
                                    rows="10"
                                    placeholder="Content.."
                                    className="w-full p-3 focus:outline-none resize-none"
                                ></textarea>
                            </div>

                    <div className="text-right mt-3">
                        <button
                            onClick={handleUpdate}
                            className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-6 rounded shadow-sm"
                        >
                            Update
                        </button>
                    </div>
                </div>

                {/* Social Link Widget */}
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 ml-4 mr-4">
                    <h2 className="text-lg font-semibold mb-4">Social Link Widget</h2>

                    {/* Toggle */}
                    <div className="flex items-center justify-between mb-4">
                        <label className="text-sm font-medium">Show Social Links?</label>
                        <div
                            onClick={() => setShowLinks(!showLinks)}
                            className={`w-11 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${showLinks ? "bg-green-500" : "bg-gray-300"
                                } transition-colors`}
                        >
                            <div
                                className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${showLinks ? "translate-x-5" : "translate-x-0"
                                    }`}
                            />
                        </div>
                    </div>

                    {/* Social Links — Always shown */}
                    <div className="space-y-3">
                        {socialLinks.map((link, index) => (
                            <div
                                key={index}
                                className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-white"
                            >
                                <div className="w-14 h-12 flex items-center justify-center bg-[#f4f6fb] border-r border-gray-300">
                                    {link.icon}
                                </div>
                                <input
                                    type="text"
                                    value={link.url}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    className="flex-1 px-4 py-3 text-sm outline-none bg-white"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                 {/* Download App Link */}
           

                <div className="bg-gray-50 border border-gray-200 rounded-xl mt-6 p-6 mb-10 ml-4 mr-4">
                    <h2 className="text-lg font-semibold mb-4">Download App Link</h2>
                    <div className="border-b border-gray-300 mb-4"></div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Seller App Link</label>
                        <input
                            type="text"
                            placeholder="https://play.google.com/store/apps"
                            className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
                        />
                    </div>
                </div>
                 {/* Payment Methods Widget */}
                 <div className="bg-gray-50 border border-gray-200 rounded-xl mt-6 p-6 mb-10 ml-4 mr-4">
                    <h2 className="text-lg font-semibold mb-4">Payment Methods Widget</h2>
                    <div className="border-b border-gray-300 mb-4"></div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Payment Methods</label>
                        <div className="relative w-full sm:flex-1">
                                <input
                                    type="file"
                                    id="metaImage"
                                    onChange={handleFileChangefile}
                                    className="absolute inset-0 opacity-0 cursor-pointer z-10 w-full h-full"
                                />
                                <div className="flex border rounded overflow-hidden w-full h-[42px]">
                                    <div className="bg-gray-200 text-gray-700 px-5 py-2 text-sm flex items-center whitespace-nowrap">
                                        Browse
                                    </div>
                                    <div className="px-4 py-2 text-sm text-gray-600 bg-white w-full truncate flex items-center">
                                        {fileName}
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>

            </div>
            <div className="text-right mt-3">
                            <button
                                onClick={handleUpdate}
                                className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-6 rounded shadow-sm"
                            >
                                Update
                            </button>
                        </div>

           


            {/* About Widget */}

        </div>
    );
};

export default FooterWidget;
