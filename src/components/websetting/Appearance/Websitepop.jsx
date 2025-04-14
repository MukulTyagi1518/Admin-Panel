export default function Websitepop({ setShowLinks,showLinks,handleUpdate,FaBold, FaItalic, FaUnderline, FaListUl, FaListOl, MdOutlineFormatClear, MdFormatColorText, FaTable, FaLink, FaImage, FaVideo, FaCode, FaUndo, FaRedo,website,setwebsite}){
    return(
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
    )
}