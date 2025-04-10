export default function Custom({handleUpdate}){
    return(
        <div className="bg-gray-50 border border-gray-200 rounded-xl mt-6 p-6 mb-10 ml-4 mr-4">
        <h2 className="text-lg font-semibold mb-4">Custom Script</h2>
        <div className="border-b border-gray-300 mb-4"></div>

        <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">
                Header custom script - before &lt;/head&gt;
            </label>
            <textarea
                type="text"
                rows="5"
                placeholder="<script>
                   ....
                <script>"
                className="w-full md:w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none "
            />
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-3  mt-4">
            <label className="md:w-1/4 font-medium text-sm text-gray-700">
                Footer custom script - before &lt;/body&gt;
            </label>
            <textarea
                type="text"
                rows="5"
                placeholder="<script>
                   ....
                <script>"
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
    )
}