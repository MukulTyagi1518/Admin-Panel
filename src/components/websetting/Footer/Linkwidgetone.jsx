export default function Linkwidgetone({handleUpdate,handleChange,handleAddLink,handleRemoveLink,links,X}){
    return(
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
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-6 rounded shadow-sm"
            >
                Update
            </button>
        </div>
    </div>
    )}