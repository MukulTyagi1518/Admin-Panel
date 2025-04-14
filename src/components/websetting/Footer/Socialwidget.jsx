export default function Socialwidget({setShowLinks,showLinks,socialLinks,handleChange }) {
    return (

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

    )}