export default function Globalseo({ handleFileChangefile,fileName,handleUpdate }){
    return(
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
    )
}