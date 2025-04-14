export default function Paymentwidget({handleFileChangefile,fileName}) {
    return (
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
    )}