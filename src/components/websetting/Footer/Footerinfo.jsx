export default function FooterInfo({title,setTitle,description,setDescription,handleUpdate}){
    return(
        <div className="p-4 sm:p-6">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6">
            <h3 className="text-base font-semibold text-gray-800 mb-4">
                Footer Info Widget
            </h3>
            <div className="border-b border-gray-300 mb-4"></div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title (Translatable)
                </label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
                    placeholder="Active eCommerce CMS | AN ONLINE SHOPPING PLATFORM WITH GREAT DEALS"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Footer description (Translatable)
                </label>
                <textarea
                    rows="5"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full border border-gray-300 rounded px-4 py-2 text-sm resize-y"
                    placeholder="Enter footer description..."
                ></textarea>
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