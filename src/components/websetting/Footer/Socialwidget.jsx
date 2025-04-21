export default function Socialwidget({ handleUpdate,handleFileChangefile, fileName, setShowLinks, showLinks, socialLinks, handleChange, FaBold, FaItalic, FaUnderline, FaListUl, FaListOl, MdOutlineFormatClear, MdFormatColorText, FaTable, FaLink, FaImage, FaVideo, FaCode, FaUndo, FaRedo }) {
    return (

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 ml-4 mr-4 mb-4">
            {/* Copyright Widget*/}
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
                
             </div>

               {/* Social Links — Always shown */}

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10 ml-4 mr-4">
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

            {/* Payment */}
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
            <div className="text-right mt-3">
                            <button
                                onClick={handleUpdate}
                                className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-6 rounded shadow-sm"
                            >
                                Update
                            </button>
                        </div>

        </div>



    )
}