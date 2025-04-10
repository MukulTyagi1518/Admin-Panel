import React from "react";
import "./Pages.css"; // Importing the CSS file for styling

const Pages = () => {
  // Data for the pages
  const pages = [
    { id: 1, name: "Seller Policy Pages", url: "https://demo.activeitzone.com/ecommerce/sellerpolicy" },
    { id: 2, name: "Return Policy Page", url: "https://demo.activeitzone.com/ecommerce/returnpolicy" },
    { id: 3, name: "Support Policy Page", url: "https://demo.activeitzone.com/ecommerce/supportpolicy" },
    { id: 4, name: "Term Conditions Page", url: "https://demo.activeitzone.com/ecommerce/terms" },
    { id: 5, name: "Privacy Policy Page", url: "https://demo.activeitzone.com/ecommerce/privacypolicy" },
    { id: 6, name: "About us", url: "https://demo.activeitzone.com/ecommerce/aboutus" },
    { id: 7, name: "Contact Us", url: "https://demo.activeitzone.com/ecommerce/contactus" },
    { id: 8, name: "Terms and Conditions for Preorder", url: "https://demo.activeitzone.com/ecommerce/preorder-terms" },
  ];

  // Function to handle edit action
  const handleEdit = (id) => {
    alert(`Edit page with ID: ${id}`);
  };

  // Function to handle delete action
  const handleDelete = (id) => {
    alert(`Delete page with ID: ${id}`);
  };

  return (
    <div className="pages-container">
      <h1 className="title">Website Pages</h1>
      <div className="content-box">
        <div className="header">
          <h2 className="subtitle">All Pages</h2>
          <button className="add-button">Add New Page</button>
        </div>
        <table className="pages-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>URL</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page) => (
              <tr key={page.id}>
                <td>{page.id}</td>
                <td>{page.name}</td>
                <td>
                  <a href={page.url} target="_blank" rel="noopener noreferrer">
                    {page.url}
                  </a>
                </td>
                <td>
                  <button className="action-button edit" onClick={() => handleEdit(page.id)}>
                    ✏️
                  </button>
                  {page.id === 6 && (
                    <button className="action-button delete" onClick={() => handleDelete(page.id)}>
                      🗑️
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pages;

