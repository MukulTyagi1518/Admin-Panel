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

    // const [qrCode, setQrCode] = useState({ name: "Choose file", src: "", file: null });

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

    const [website, setwebsite] = useState("");


    return (
        <div className="bg-white min-h-screen py-6 px-4 sm:px-8">
            {/* Header */}
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Sytem Settings</h2>
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

                        <div className="flex flex-col md:flex-row md:items-center gap-3">
                            <label className="md:w-1/4 font-medium text-sm text-gray-700">
                                System Name <span></span>
                            </label>
                            <input
                                type="text"
                                placeholder="Active eCommerce CMS"
                                className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none "
                            />
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
                            <label className="md:w-1/4 font-medium text-sm text-gray-700">
                                Frontend Website Name <span></span>
                            </label>
                            <input
                                type="text"
                                placeholder="Active eCommerce CMS"
                                className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none "
                            />
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center gap-3  mt-4">
                            <label className="md:w-1/4 font-medium text-sm text-gray-700">
                                Site Motto <span></span>
                            </label>
                            <input
                                type="text"
                                placeholder="Active eCommerce CMS"
                                className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none "
                            />
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center gap-3  mt-4">
                            <label className="md:w-1/4 font-medium text-sm text-gray-700">
                                Site Icon <span></span>
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

                                <p className="text-xs text-gray-500 mt-1">
                                    Minimum dimensions required: 32px width X 32px height.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center gap-3  mt-4">
                            <label className="md:w-1/4 font-medium text-sm text-gray-700">
                                System Logo - White <span></span>
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

                                <p className="text-xs text-gray-500 mt-1">
                                    Will be used in admin panel side menu. Minimum dimensions required: 189px width X 31px height.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center gap-3  mt-4">
                            <label className="md:w-1/4 font-medium text-sm text-gray-700">
                                System Logo - Black <span></span>
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

                                <p className="text-xs text-gray-500 mt-1">
                                    Will be used in Admin login page, Seller login page & Delivery Boy login page. Minimum dimensions required: 189px width X 31px height.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
                            <label className="md:w-1/4 font-medium text-sm text-gray-700">
                                System Timezone<span></span>
                            </label>

                            <select
                                className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
                                defaultValue=""
                            >
                                <option value="" disabled>Timezone</option>
                                <option value="top-left">(GMT)UTC</option>
                                <option value="Europe/London">(GMT+1:00) London</option>
                            </select>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
                            <label className="md:w-1/4 font-medium text-sm text-gray-700">
                                Uploaded image format<span></span>
                            </label>

                            <select
                                className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
                                defaultValue=""
                            >
                                <option value="" disabled>Default</option>
                                <option value="PNG">PNG</option>
                                <option value="JPG">Webp</option>
                                <option value="JPG">JPEG</option>
                            </select>

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



                {/* Link Widget One */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10 ml-4 mr-4">
                    <h2 className="text-lg font-semibold mb-4">General Settings</h2>
                    <div className="border-b border-gray-300 mb-4"></div>

                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                        <label className="md:w-1/4 font-medium text-sm text-gray-700">
                            Website Base Color <span></span>
                        </label>
                        <input
                            type="text"
                            placeholder="#D42D2A"
                            className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none "
                        />

                    </div>


                    <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
                        <label className="md:w-1/4 font-medium text-sm text-gray-700">
                            Website Base Hover Color<span></span>
                        </label>
                        <input
                            type="text"
                            placeholder="#D62400"
                            className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none "
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-3  mt-4">
                        <label className="md:w-1/4 font-medium text-sm text-gray-700">
                            Website Secondary Base Color<span></span>
                        </label>
                        <input
                            type="text"
                            placeholder="#FFBA00"
                            className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none "
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-3  mt-4">
                        <label className="md:w-1/4 font-medium text-sm text-gray-700">
                            Website Secondary Base Hover Color<span></span>
                        </label>
                        <input
                            type="text"
                            placeholder="#FBE8E5"
                            className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none "
                        />

                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-3  mt-4">
                        <label className="md:w-1/4 font-medium text-sm text-gray-700">
                            Flash Deal Page Banner - Large<span></span>
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

                            <p className="text-xs text-gray-500 mt-1">
                                Will be shown in large device. Minimum dimensions required: 1370px width X 242px height.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-3  mt-4">
                        <label className="md:w-1/4 font-medium text-sm text-gray-700">
                            Flash Deal Page Banner - Small<span></span>
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

                            <p className="text-xs text-gray-500 mt-1">
                                Will be shown in small device. Minimum dimensions required: 400px width X 184px height.
                            </p>
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
                </div>

                {/* Footer Bottom */}
                {/* <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10 ml-4 mr-4">
                    <h2 className="text-lg font-semibold mb-4">Copyright Widget</h2>
                    <div className="border-b border-gray-300 mb-4"></div>


                    <label className="md:w-1/4 font-medium text-md text-gray-700">
                        Copyright Text (Translatable)
                    </label>
                    <div className="w-full md:w-3/4 border border-gray-300 rounded"> */}
                {/* Toolbar */}
                {/* <div className="flex flex-wrap items-center gap-2 p-2 border-b border-gray-200 bg-gray-50">
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
                </div> */}

                {/* Social Link Widget */}
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 ml-4 mr-4">
                    <h2 className="text-lg font-semibold mb-4">Image Watermark</h2>
                    <div className="border-b border-gray-300 mb-4"></div>

                    {/* Toggle */}
                    <div className="flex items-center justify-between mb-4">
                        <label className="text-sm font-medium">Use Image Watermark (During Upload)</label>
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

                    <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
                        <label className="md:w-1/4 font-medium text-sm text-gray-700">
                            Watermark Type<span></span>
                        </label>

                        <select
                            className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
                            defaultValue=""
                        >
                            <option value="" disabled>Image</option>
                            <option value="top-left">Text</option>

                        </select>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-3  mt-4">
                        <label className="md:w-1/4 font-medium text-sm text-gray-700">
                            Watermark Image<span></span>
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

                            <p className="text-xs text-gray-500 mt-1">
                                Do not use "svg" image.
                            </p>
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
                        <label className="md:w-1/4 font-medium text-sm text-gray-700">
                            Watermark Position<span></span>
                        </label>

                        <select
                            className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
                            defaultValue=""
                        >
                            <option value="" disabled>Center</option>
                            <option value="top-left">Top Left</option>
                            <option value="top-right">Top Right</option>
                            <option value="center">Center</option>
                            <option value="bottom-left">Bottom Left</option>

                        </select>
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


                {/* Global SEO */}


                <div className="bg-gray-50 border border-gray-200 rounded-xl mt-6 p-6 mb-10 ml-4 mr-4">
                    <h2 className="text-lg font-semibold mb-4">Global SEO</h2>
                    <div className="border-b border-gray-300 mb-4"></div>
                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                        <label className="md:w-1/4 font-medium text-sm text-gray-700">
                            Meta Title<span></span>
                        </label>
                        <input
                            type="text"
                            placeholder="Active eCommerce CMS"
                            className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none "
                        />
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
                        <label className="md:w-1/4 font-medium text-sm text-gray-700">
                            Meta Description <span></span>
                        </label>
                        <textarea
                            type="text"
                            placeholder="Active eCommerce CMS"
                            className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none "
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-3  mt-4">
                        <label className="md:w-1/4 font-medium text-sm text-gray-700">
                            Keywords<span></span>
                        </label>
                        <textarea
                            type="text"
                            placeholder="Keyboard,Keyboard"
                            className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none "
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-3  mt-4">
                        <label className="md:w-1/4 font-medium text-sm text-gray-700">
                            Site Icon <span></span>
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

                            <p className="text-xs text-gray-500 mt-1">
                                Minimum dimensions required: 32px width X 32px height.
                            </p>
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

                </div>
                {/* Cookies Agreement */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl mt-6 p-6 mb-10 ml-4 mr-4">
                    <h2 className="text-lg font-semibold mb-4">Cookies Agreement</h2>
                    <div className="border-b border-gray-300 mb-4"></div>

                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                        {/* Label */}
                        <label className="md:w-1/4 text-sm font-medium text-gray-700">
                            Cookies Agreement Text
                        </label>

                        {/* Textarea Box with Toolbar */}
                        <div className="w-full md:w-3/4 border border-gray-300 rounded">
                            <div className="flex flex-wrap items-center gap-2 p-2 border-b border-gray-200 bg-gray-50">
                                {[FaBold, FaLink].map(
                                    (Icon, idx) => (
                                        <button
                                            key={idx}
                                            type="button"
                                            className="p-2 text-gray-600 hover:bg-gray-200 rounded"
                                        >
                                            <Icon size={16} />
                                        </button>
                                    )
                                )}
                            </div>
                            <textarea
                                rows="10"
                                placeholder="Content.."
                                className="w-full p-3 focus:outline-none resize-none"
                            ></textarea>
                        </div>

                    </div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2 mt-4">
                        {/* Label */}
                        <label className="text-sm font-medium text-gray-700 md:w-3/4">
                        Show Cookies Agreement?
                        </label>

                        {/* Toggle Switch */}
                        <div
                            onClick={() => setShowLinks(!showLinks)}
                            className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${showLinks ? "bg-green-500" : "bg-gray-300"}`}
                        >
                            <div
                                className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${showLinks ? "translate-x-5" : "translate-x-0"}`}
                            />
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

                </div>

               {/* Website Popup */}
                  <div className="bg-gray-50 border border-gray-200 rounded-xl mt-6 p-6 mb-10 ml-4 mr-4">
                    <h2 className="text-lg font-semibold mb-4"> Website Popup</h2>
                    <div className="border-b border-gray-300 mb-4"></div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2 mt-4">
                        {/* Label */}
                        <label className="text-sm font-medium text-gray-700 md:w-3/4">
                        Show website popup?
                        </label>

                        {/* Toggle Switch */}
                        <div
                            onClick={() => setShowLinks(!showLinks)}
                            className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${showLinks ? "bg-green-500" : "bg-gray-300"}`}
                        >
                            <div
                                className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${showLinks ? "translate-x-5" : "translate-x-0"}`}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start mt-6 gap-4">
                        
                        {/* Label */}
                        <label className="md:w-1/4 text-sm font-medium text-gray-700">
                        Popup content
                        </label>

                        {/* Textarea Box with Toolbar */}
                        <div className="w-full md:w-3/4 border border-gray-300 rounded">
                            <div className="flex flex-wrap items-center gap-2 p-2 border-b border-gray-200 bg-gray-50">
                                {[FaBold, FaItalic, FaUnderline, FaListUl, FaListOl, MdOutlineFormatClear, MdFormatColorText, FaTable, FaLink, FaImage, FaVideo, FaCode, FaUndo, FaRedo].map(
                                    (Icon, idx) => (
                                        <button
                                            key={idx}
                                            type="button"
                                            className="p-2 text-gray-600 hover:bg-gray-200 rounded"
                                        >
                                            <Icon size={16} />
                                        </button>
                                    )
                                )}
                            </div>
                            <textarea
                            className="editor-container"
                            value={website}
                            onChange={(e) => setwebsite(e.target.value)}
                        ></textarea>
                        </div>

                    </div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2 mt-6">
                        {/* Label */}
                        <label className="text-sm font-medium text-gray-700 md:w-3/4">
                        Show Subscriber form?
                        </label>

                        {/* Toggle Switch */}
                        <div
                            onClick={() => setShowLinks(!showLinks)}
                            className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${showLinks ? "bg-green-500" : "bg-gray-300"}`}
                        >
                            <div
                                className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${showLinks ? "translate-x-5" : "translate-x-0"}`}
                            />
                        </div>
                    </div>
                    <div className="text-right mt-5">
                        <button
                            onClick={handleUpdate}
                            className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-6 rounded shadow-sm"
                        >
                            Update
                        </button>
                    </div>

                </div>

                {/* Custom Script */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl mt-6 p-6 mb-10 ml-4 mr-4">
                    <h2 className="text-lg font-semibold mb-4">Global SEO</h2>
                    <div className="border-b border-gray-300 mb-4"></div>
                   
                    <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
                        <label className="md:w-1/4 font-medium text-sm text-gray-700">
                        Header custom script - before &lt;/head&gt;
                        </label>
                        <textarea
                            type="text"
                             rows="5"
                            placeholder="<script>
                               ....
                            <script>"
                            className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none "
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-3  mt-4">
                        <label className="md:w-1/4 font-medium text-sm text-gray-700">
                        Footer custom script - before &lt;/body&gt;
                        </label>
                        <textarea
                            type="text"
                             rows="5"
                            placeholder="<script>
                               ....
                            <script>"
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
            



            {/* About Widget */}

        </div>
    );
};

export default FooterWidget;