import { useState } from "react";
import "./ColorEdit.css";

export default function ColorEdit() {
  const [color, setColor] = useState("");

  return (
    <section className="color-container">
      <h2>Color Information</h2>
      <div className="color-box">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="MistyRose"  />
        </div>
        <div className="form-group">
          <label>Color Code</label>
          <input
            type="text"
            value={color}
            readOnly
            placeholder="#FFE4E1"
          />
        </div>
      <div className="save2">
      <button className="save-btn">Save</button>
      </div>
      </div>
    </section>
  );
}
