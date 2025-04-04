import "./Colors.css";
import { useState, useEffect, useRef } from "react";
import { Edit, Trash } from "lucide-react";
import apiInstance from "../../utils/axios";

// 🎨 Color Name Detection API (Optional)
const getColorName = async (hexCode) => {
    try {
        const res = await fetch(`https://www.thecolorapi.com/id?hex=${hexCode.replace("#", "")}`);
        const data = await res.json();
        return data.name.value || "Unknown";
    } catch (error) {
        console.error("Error fetching color name:", error);
        return "Unknown";
    }
};

export default function PreOrderFaq() {
    const [formData, setFormData] = useState({
        name: "",
        colorCode: "",
        colorFilterActivation: false
    });

    const [colorsData, setColorsData] = useState([])


    const fetchColorsData = async () => {
        try {
            const response = await apiInstance.get('colors/getall');
            setColorsData(response.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    const colorPickerRef = useRef(null);

    useEffect(() => {
        fetchColorsData();
    }, []);

    // 🎨 Color Change Handler
    const handleColorChange = async (e) => {
        const newColor = e.target.value;
        const colorName = await getColorName(newColor);
        setFormData((prev) => ({ ...prev, colorCode: newColor, name: colorName }));
    };

    const handleToggleFilter = () => {
        setFormData((prev) => ({
            ...prev,
            colorFilterActivation: !prev.colorFilterActivation
        }));
    };

    const handleSubmit = async () => {
        await apiInstance.post('/colors/create', formData)
        alert("New color added")
        setFormData({
            name: "",
            colorCode: "",
            colorFilterActivation: false
        })
        fetchColorsData();
    };

    const deleteColor = async (id) => {
        await apiInstance.delete(`colors/delete/${id}`)
        alert("Color deleted.")
        fetchColorsData();
    }

    return (
        <div className="PreOrderFaq ma10">
            <div className="preOrderFaqBox">
                {/* Left Side - Color List */}
                <div className="preOrderFaqLeft">
                    <div className="preOrderLeftUpper">
                        <p className="allFaq">All Colors</p>
                        <input type="text" placeholder="Type to search...." className="searchFaq" />
                    </div>
                    <div className="preOrderLeftLower">
                        <div className="table-container faqTable">
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {colorsData && colorsData.map((n, index) => (
                                        <tr key={n.id}>
                                            <td>{index + 1}</td>
                                            <td>{n.name}</td>
                                            <td>
                                                <div className="flex flex-row gap-[.3cm]">
                                                    <div className="action">
                                                        <Edit color="blue" size={18} />
                                                    </div>
                                                    <div className="action">
                                                        <Trash onClick={() => { deleteColor(n._id) }} color="blue" size={18} />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Right Side - Add Color Form */}
                <div className="prerow">
                    <div className="preOrderFaqRight-new">
                        <div className="preOrderFaqRightHead">
                            <p className="allFaq">Add new Color</p>
                        </div>
                        <div className="faqForm">
                            <label>Name</label>
                            <input
                                type="text"
                                value={formData.name}

                                className="faqInp"
                                placeholder="Enter color name"
                            />

                            <label>Color</label>
                            <div className="color-picker-wrapper" style={{ position: "relative" }}>
                                <input
                                    type="text"
                                    value={formData.colorCode}
                                    readOnly
                                    className="faqInp"
                                    placeholder="Enter color code"

                                />
                                <input
                                    type="color"
                                    ref={colorPickerRef}
                                    value={formData.colorCode}
                                    onChange={handleColorChange}
                                    style={{
                                        position: "absolute",
                                        top: "-4cm",
                                        left: "0",
                                        width: "100%",
                                        height: "200px",
                                        opacity: "0",
                                        cursor: "pointer",
                                    }}

                                />
                            </div>

                            <div className="flex justify-between mt-[.5cm] ">
                                <p className="font-bold ">Color filter activation</p>
                                <div
                                    className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-all ${formData.colorFilterActivation ? "bg-green-500" : "bg-gray-300"
                                        }`}
                                    onClick={handleToggleFilter}
                                >
                                    <div
                                        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-all ${formData.colorFilterActivation ? "translate-x-8" : "translate-x-0"
                                            } flex items-center justify-center`}
                                    >
                                        {formData.colorFilterActivation && (
                                            <div className="w-3 h-3 bg-green-700 rounded-full"></div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="inpSubBox">
                                <input type="button" value="Save" className="inpSub" onClick={handleSubmit} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
