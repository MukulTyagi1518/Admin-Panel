export default function Switch({ value, onChangeFunc }) {
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="sr-only peer" 
                checked={value}
                onChange={onChangeFunc}
            />
            <div className="w-14 h-7 bg-gray-300 peer-checked:bg-green-500 rounded-full transition-all p-1">
                <div className={value ? "w-6 h-5 bg-white rounded-full shadow-md transition-transform transform translate-x-6 flex items-center justify-center" : "w-6 h-5 bg-white rounded-full shadow-md  flex items-center justify-center"}>

                </div>
            </div>
        </label>
    );
}
