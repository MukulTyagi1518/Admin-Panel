// import { useState } from "react";

// export default function Switch() {
//     const [enabled, setEnabled] = useState(false);

//     return (
//         <div
//             className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-all ${enabled ? "bg-green-500" : "bg-gray-300"
//                 }`}
//             onClick={() => setEnabled(!enabled)}
//         >
//             <div
//                 className={`w-6 h-5 bg-white rounded-full shadow-md transform transition-all ${enabled ? "translate-x-6" : "translate-x-0"
//                     } flex items-center justify-center`}
//             >
//                 {enabled && <div className="w-3 h-3 bg-green-700 rounded-full"></div>}
//             </div>
//         </div>
//     );
// }




import { useState } from "react";

export default function Switch({ onToggle }) {
    const [enabled, setEnabled] = useState(false);

    const handleClick = () => {
        const newState = !enabled;
        setEnabled(newState);
        if (onToggle) {
            onToggle(newState);
        }
    };

    return (
        <div
            className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-all ${enabled ? "bg-green-500" : "bg-gray-300"
                }`}
            onClick={handleClick}
        >
            <div
                className={`w-6 h-5 bg-white rounded-full shadow-md transform transition-all ${enabled ? "translate-x-6" : "translate-x-0"
                    } flex items-center justify-center`}
            >
                {enabled && <div className="w-3 h-3 bg-green-700 rounded-full"></div>}
            </div>
        </div>
    );
}