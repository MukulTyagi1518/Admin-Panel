

import { Delete, Edit, Trash } from "lucide-react";
import "./Colors.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Switch from "../../components/Switch";

export default function PreOrderFaq() {
    const [selectedColor, setSelectedColor] = useState("");
    const [newColorName, setNewColorName] = useState("");
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [roleToDelete, setRoleToDelete] = useState(null);

    const navigate = useNavigate();

    const [faqs, setFaqs] = useState([
        { id: 1, name: "MistyRose", code: "#FFE4E1" },
        { id: 2, name: "Ivory", code: "#FFFFF0" },
        { id: 3, name: "Silver", code: "#C0C0C0" },
        { id: 4, name: "DarkGray", code: "#A9A9A9" },
        { id: 5, name: "LightGrey", code: "#D3D3D3" },
    ]);

    const colorInputRef = useRef(null);
    const colorPickerRef = useRef(null);

    //   const handleColorChange = (e) => {
    //     setSelectedColor(e.target.value);
    //   };

    const handleSaveColor = () => {
        if (newColorName && selectedColor) {
            const newColor = { id: faqs.length + 1, name: newColorName, code: selectedColor };
            setFaqs([...faqs, newColor]);
            setNewColorName("");
            setSelectedColor("#000000");
        }
    };

    const handleOpenColorPicker = () => {
        if (colorInputRef.current && colorPickerRef.current) {
            const inputRect = colorInputRef.current.getBoundingClientRect();
            colorPickerRef.current.style.display = "block";
            colorPickerRef.current.style.position = "absolute";
            colorPickerRef.current.style.top = `${inputRect.bottom + window.scrollY}px`;
            colorPickerRef.current.style.left = `${inputRect.left + window.scrollX}px`;
        }
    };
    const [showColorPicker, setShowColorPicker] = useState(false);

    const openColorPicker = () => {
        setShowColorPicker(true);
    };

    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
        setShowColorPicker(false); // Hide color picker after selection
    };


    const handleCloseColorPicker = (event) => {
        if (
            colorPickerRef.current &&
            !colorPickerRef.current.contains(event.target) &&
            colorInputRef.current &&
            !colorInputRef.current.contains(event.target)
        ) {
            colorPickerRef.current.style.display = "none";
        }
    };
   
    // const handleEdit = (id) => {
    //     navigate(`/editcolor`); 
    // };
    const handlereview = (e) => {
        e.preventDefault();
        navigate("/products/editcolor");
      };

    useEffect(() => {
        document.addEventListener("mousedown", handleCloseColorPicker);
        return () => {
            document.removeEventListener("mousedown", handleCloseColorPicker);
        };
    }, []);

    const handleDeleteClick = (roleId) => {
        setRoleToDelete(roleId);
        setShowDeleteConfirmation(true);
      };
    
      const confirmDelete = () => {
        // Implement your delete logic here
        console.log(`Deleting role with ID: ${roleToDelete}`);
        setShowDeleteConfirmation(false);
        setRoleToDelete(null);
      };
    
      const cancelDelete = () => {
        setShowDeleteConfirmation(false);
        setRoleToDelete(null);
      };

    return (
        <div className="PreOrderFaq ma10">
            <div className="preOrderFaqBox">
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
                                    {faqs.map((n) => (
                                        <tr key={n.id}>
                                            <td>{n.id}</td>
                                            <td>{n.name}</td>
                                            <td>
                                                <div className="flex flex-row gap-[.3cm]">
                                                    <div className="action">
                                                        <Edit color="blue" size={18} onClick={handlereview}/>
                                                    </div>
                                                    <div className="action">
                                                        <Trash color="blue" size={18} onClick={() => handleDeleteClick(n.id)}/>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {showDeleteConfirmation && (
        <div className="delete-confirmation-overlay">
          <div className="delete-confirmation-dialog">
            <div className="dialog-header">
              <h2>Delete Confirmation</h2>
              <button
                className="close-dialog-btn"
                onClick={cancelDelete}
              >
                X
              </button>
            </div>
            <div className="dialog-content">
              <p>Are you sure to delete this?</p>
            </div>
            <div className="dialog-actions">
              <button className="cancel-btn" onClick={cancelDelete}>
                Cancel
              </button>
              <button className="delete-btn" onClick={confirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
                        </div>
                    </div>
                </div>

                <div className="prerow">
                    <div className="preOrderFaqRight-new">
                        <div className="preOrderFaqRightHead">
                            <p className="allFaq">Add new Color</p>
                        </div>
                        <div className="faqForm">
                            <label>Name</label>
                            <input
                                type="text"
                                value={newColorName}
                                onChange={(e) => setNewColorName(e.target.value)}
                                placeholder="Enter color name"
                                className="faqInp"
                            />
                            {/* <label>Color</label>
                            <div className="color-picker-wrapper">
                                <input
                                    type="text"
                                    value={selectedColor}
                                    readOnly
                                    className="faqInp"
                                    onClick={() => colorPickerRef.current.click()} // Click to open color picker
                                />
                                <input
                                    type="color"
                                    ref={colorPickerRef}
                                    value={selectedColor}
                                    onChange={handleColorChange}
                                    style={{ display: "flex" }}
                                />
                            </div> */}
                            <label>Color</label>
                            <div className="color-picker-wrapper" style={{ position: "relative" }}>
                                <input
                                    type="text"
                                    value={selectedColor}
                                    readOnly
                                    className="faqInp"
                                    onClick={() => colorPickerRef.current.click()} // Trigger color picker
                                />
                                <input
                                    type="color"
                                    ref={colorPickerRef}
                                    value={selectedColor}
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



                            <div className="inpSubBox">
                                <input type="button" value="Save" className="inpSub" onClick={handleSaveColor} />
                            </div>
                        </div>
                    </div>
                    <div className="preOrderFaqRight-new">
                        <div className="preOrderFaqRightHead">
                            <p className="allFaq">Color filter activation</p>
                        </div>
                        <div className="faqForm">
                            <div className="toggle-item">
                                {/* <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                </label> */}
                                <Switch/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
