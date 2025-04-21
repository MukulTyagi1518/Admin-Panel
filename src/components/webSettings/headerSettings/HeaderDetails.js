import React, { useState, useRef } from 'react';
import './HeaderDetails.css';

const HeaderDetails = () => {
  const [selectedFiles, setSelectedFiles] = useState({
    headerLogo: null,
    bannerLarge: null,
    bannerMedium: null,
    bannerSmall: null,
  });

  const [fileInputKeys, setFileInputKeys] = useState({
    headerLogo: Date.now(),
    bannerLarge: Date.now() + 1,
    bannerMedium: Date.now() + 2,
    bannerSmall: Date.now() + 3,
  });

  const fileInputRefs = {
    headerLogo: useRef(null),
    bannerLarge: useRef(null),
    bannerMedium: useRef(null),
    bannerSmall: useRef(null),
  };

  const [topbarLink, setTopbarLink] = useState('');
  const [helpline, setHelpline] = useState('');
  const [textColor, setTextColor] = useState('dark');
  const [navItems, setNavItems] = useState([{ label: '', link: '' }]);

  const handleFileChange = (key, file) => {
    setSelectedFiles((prev) => ({ ...prev, [key]: file }));
  };

  const handleRemoveFile = (key) => {
    setSelectedFiles((prev) => ({ ...prev, [key]: null }));
    setFileInputKeys((prev) => ({ ...prev, [key]: Date.now() + Math.random() }));
    if (fileInputRefs[key].current) {
      fileInputRefs[key].current.value = null;
    }
  };

  const handleNavChange = (index, field, value) => {
    const updated = [...navItems];
    updated[index][field] = value;
    setNavItems(updated);
  };

  const addNavItem = () => {
    setNavItems([...navItems, { label: '', link: '' }]);
  };

  const removeNavItem = (index) => {
    const updated = navItems.filter((_, i) => i !== index);
    setNavItems(updated);
  };

  const bannerNotes = {
    bannerLarge: 'Minimum dimensions required: 1920px width × 60px height',
    bannerMedium: 'Minimum dimensions required: 810px width × 40px height',
    bannerSmall: 'Minimum dimensions required: 428px width × 40px height',
  };

  const renderFileInput = (key, label, note) => (
    <div className="form-row">
      <label className="form-label">{label}</label>
      <div className="file-upload-box">
        <div className="input-with-remove">
          <label className="custom-file-upload">
            <input
              key={fileInputKeys[key]}
              type="file"
              ref={fileInputRefs[key]}
              onChange={(e) => handleFileChange(key, e.target.files[0])}
            />
            Browse File
          </label>
          {selectedFiles[key] && (
            <span className="file-name">{selectedFiles[key].name}</span>
          )}
          {selectedFiles[key] && (
            <button onClick={() => handleRemoveFile(key)} className="remove-btn">×</button>
          )}
        </div>
        <div className="file-dimensions-note">{note}</div>
      </div>
    </div>
  );

  return (
    <div className="header-wrapper">
      <h2 className="page-left-title">Website Header</h2>

      <div className="header-details">
     
        <div className="title-bar">
          <h2 className="center-title">Header Setting</h2>
        </div>

        <div className="form-section">

          {/* Header Logo */}
          {renderFileInput('headerLogo', 'Header Logo', 'Minimum dimensions required: 244px width × 40px height')}

          {/* Toggles */}
          <div className="toggles">
            <label>
              Show Language Switcher?
              <input type="checkbox" defaultChecked />
            </label>
            <label>
              Show Currency Switcher?
              <input type="checkbox" defaultChecked />
            </label>
            <label>
              Enable sticky header?
              <input type="checkbox" defaultChecked />
            </label>
          </div>

          {/* Banners */}
          {renderFileInput('bannerLarge', 'Topbar Banner Large', bannerNotes.bannerLarge)}
          {renderFileInput('bannerMedium', 'Topbar Banner Medium', bannerNotes.bannerMedium)}
          {renderFileInput('bannerSmall', 'Topbar Banner Small', bannerNotes.bannerSmall)}

          {/* Topbar Link */}
          <div className="form-row">
            <label className="form-label">Topbar Banner Link</label>
            <input
              type="text"
              value={topbarLink}
              onChange={(e) => setTopbarLink(e.target.value)}
              className="text-input"
            />
          </div>

          {/* Helpline */}
          <div className="form-row">
            <label className="form-label">Helpline Number</label>
            <input
              type="text"
              value={helpline}
              onChange={(e) => setHelpline(e.target.value)}
              className="text-input"
            />
          </div>

          {/* Text Color */}
          <div className="form-row color-selector">
            <label className="form-label">Header Nav Menu Text Color</label>
            <div className="custom-radio-group">
              <label className="radio-container">
                Dark
                <input
                  type="radio"
                  name="textColor"
                  value="dark"
                  checked={textColor === 'dark'}
                  onChange={() => setTextColor('dark')}
                />
                <span className="checkmark mt-2"></span>
              </label>
              <label className="radio-container">
                Light
                <input
                  type="radio"
                  name="textColor"
                  value="light"
                  checked={textColor === 'light'}
                  onChange={() => setTextColor('light')}
                />
                <span className="checkmark "></span>
              </label>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="nav-menu">
            <label className="nav-menu-title">Header Nav Menu</label>
            {navItems.map((item, idx) => (
              <div key={idx} className="form-row nav-row">
                <input
                  type="text"
                  placeholder="Label"
                  value={item.label}
                  onChange={(e) => handleNavChange(idx, 'label', e.target.value)}
                  className="text-input"
                />
                <input
                  type="text"
                  placeholder="Link"
                  value={item.link}
                  onChange={(e) => handleNavChange(idx, 'link', e.target.value)}
                  className="text-input"
                />
                <button className="remove-btn" onClick={() => removeNavItem(idx)}>×</button>
              </div>
            ))}
            <button className="add-btn" onClick={addNavItem}>+ Add New</button>
          </div>

          <button className="update-button">Update</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderDetails;
