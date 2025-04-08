// import React from 'react';
// import './StaffCreate.css';

// const StaffCreate = () => {
//   return (
//     <div className="staff-form-container">
//       <div className='staffbox'>
//       <h2>Staff Information</h2>
//       <form className="staff-form">
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input type="text" id="name" name="name" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" name="email" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="phone">Phone</label>
//           <input type="tel" id="phone" name="phone" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" name="password" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="role">Role</label>
//           <select id="role" name="role">
//             <option value="mukul">Mukul Type</option>
//             <option value="Houses">Houses</option>
//             <option value="Recaler">Recaler</option>
//             <option value="Staff Head">Staff Head</option>
//             <option value="Logistic Manager">Logistic Manager</option>
//             <option value="Ecommerce Manager">Ecommerce Manager</option>
//             <option value="Order Clerks">Order Clerks</option>
//             <option value="Category Manager">Category Manager</option>
//             <option value="PPC Manager">PPC Manager</option>
//             <option value="Product Manager">Product Manager</option>
//             <option value="Custom Service Representatives">Custom Service Representatives</option>


//           </select>
//         </div>
//         <div className='save-btn1'>
//         <button type="submit" className="save-button">Save</button>
//         </div>
//       </form>
//       </div>
//     </div>
//   );
// };

// export default StaffCreate;

import React, { useState } from 'react';
import './StaffCreate.css';

const StaffCreate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/staff', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Staff member created successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          password: '',
          role: '',
        });
      } else {
        alert(result.message || 'Failed to create staff member');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="staff-form-container">
      <div className='staffbox'>
        <h2>Staff Information</h2>
        <form className="staff-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select id="role" name="role" value={formData.role} onChange={handleChange}>
              <option value="">Select Role</option>
              <option value="mukul">Mukul Type</option>
              <option value="Houses">Houses</option>
              <option value="Recaler">Recaler</option>
              <option value="Staff Head">Staff Head</option>
              <option value="Logistic Manager">Logistic Manager</option>
              <option value="Ecommerce Manager">Ecommerce Manager</option>
              <option value="Order Clerks">Order Clerks</option>
              <option value="Category Manager">Category Manager</option>
              <option value="PPC Manager">PPC Manager</option>
              <option value="Product Manager">Product Manager</option>
              <option value="Custom Service Representatives">Custom Service Representatives</option>
            </select>
          </div>
          <div className='save-btn1'>
            <button type="submit" className="save-button">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StaffCreate;
