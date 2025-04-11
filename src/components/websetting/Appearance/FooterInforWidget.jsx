export default function FooterInfoWidget({ fileName, handleFileChangefile, handleUpdate }) {
    return (
        <div className="p-4 sm:p-6">
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6">
                   
          
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
    )
}