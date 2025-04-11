export default function Footerbottom({handleUpdate,FaBold, FaItalic, FaUnderline, FaListUl, FaListOl, MdOutlineFormatClear, MdFormatColorText, FaTable, FaLink, FaImage, FaVideo, FaCode, FaUndo, FaRedo}){
    return(

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

    )}