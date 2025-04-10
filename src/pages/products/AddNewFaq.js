// AddNewFaq.js
import React, { useState } from 'react';
import "./AddNewFaq.css"

const AddNewFaq = ({ onSave }) => { // onSave prop to handle API call
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (name.trim()) {
      onSave({ name }); // Pass the new FAQ data to the parent component
      setName(''); // Clear input after submission
    } else {
      alert('Please enter a name.');
    }
  };

  return (
    <div className="preOrderFaqRight-at">
      <div className="preOrderFaqRightHead">
        <p className="allFaq">Add new FAQ</p>
      </div>
      <div className="faqForm-at">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter question"
          className="faqInp"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="inpSubBox-at">
          <button onClick={handleSubmit} className="inpSub-at">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewFaq;