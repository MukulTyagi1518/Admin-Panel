export default function ContactInfo({handleFileChangefile,handleUpdate,fileName,FaBold, FaItalic, FaUnderline, FaListUl, FaListOl, MdOutlineFormatClear, MdFormatColorText, FaTable, FaLink, FaImage, FaVideo, FaCode, FaUndo, FaRedo}){
    return(
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
    )}