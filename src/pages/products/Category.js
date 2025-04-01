import React, { useState } from "react";
import "./category.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useCategoryContext } from "../../categoryContext";
import api from "../../utils/axios"



const Category = () => {


  const { categoryData, setCategoryData } = useCategoryContext()

  const [expandedRows, setExpandedRows] = useState([]);
  const handleRowToggle = (id) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };




  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Har page pe kitne items chahiye
  const totalPages = Math.ceil(categoryData.length / itemsPerPage);

  // Calculate start and end index for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = categoryData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Function to show only limited pages with dots
  const getPageNumbers = () => {
    const pages = [];
    const totalVisiblePages = 8;

    if (totalPages <= totalVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, currentPage + 2);

      if (currentPage <= 3) {
        endPage = 5;
      }
      if (currentPage >= totalPages - 2) {
        startPage = totalPages - 4;
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (startPage > 1) {
        pages.unshift("...");
        pages.unshift(1);
      }
      if (endPage < totalPages) {
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  const handleDeleteCategory = async (id) => {
    await api.delete(`categories/Delete-category/${id}`);
    setCategoryData((prevData) =>
      prevData.filter((c) => c._id !== id)
    )
    alert("Category deleted!!")
  }








  return (
    <div className="container14 my-5">
      {/* Top Header Section */}
      <div className="top-header">
        <h5 className="table-title">All Categories</h5>
        <button className="add-category-btn">Add New Category</button>
      </div>

      {/* Search Bar Section */}
      <div className="search-section">
        <h6 className="table-title">Categories</h6>
        <input
          type="text"
          className="search-bar"
          placeholder="Type name & Enter"
        />
      </div>

      {/* Table Section */}
      <div className="card shadow p-4">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Parent Category</th>
              <th>Order Level</th>
              <th>Level</th>
              <th>Banner</th>
              <th>Icon</th>
              <th>Cover Image</th>
              <th>Featured</th>
              <th>Options</th>
            </tr>

          </thead>
          {/* <tbody>
            {currentItems.map((category, index) => (
              <tr key={category.id}>
                <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                <td>{category.name}</td>
               
                <td>{category.parentCategory}</td>
                <td>{category.orderLevel}</td>
                <td>{category.level}</td>
                <td>
                  <img
                    src={category.banner}
                    alt="banner"
                    className="table-img"
                  />
                </td>
                <td>
                  <img src={category.icon} alt="icon" className="table-icon" />
                </td>
                <td>
                  <img
                    src={category.coverImage}
                    alt="cover"
                    className="table-img"
                  />
                </td>
                
                <td>
                  <label className="featured-switch">
                    <input
                      type="checkbox"
                      checked={category.featured}
                      onChange={() => handleToggle(category.id)}
                    />
                    <span className="slider"></span>
                  </label>
                </td>

                <td>
                  <button className="btn btn-outline-primary me-1">
                    <FaEdit />
                  </button>
                  <button className="btn btn-outline-danger">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody> */}


          {/*           
<tbody>
  {currentItems.map((category, index) => (
    <tr key={category.id}>
      
      <td className="serial-column">{index + 1}</td>

      
      <td>
        <span className="plus-icon">+</span> {category.name}
      </td>
      

      
      <td className="hide-on-small">{category.parentCategory}</td>
      <td className="hide-on-small">{category.orderLevel}</td>
      <td className="hide-on-small">{category.level}</td>
      <td className="hide-on-small">
        <img src={category.banner} alt="banner" className="table-img" />
      </td>
      <td className="hide-on-small">
        <img src={category.icon} alt="icon" className="table-icon" />
      </td>
      <td className="hide-on-small">
        <img src={category.coverImage} alt="cover" className="table-img" />
      </td>
      <td className="hide-on-small">
        <label className="featured-switch">
          <input
            type="checkbox"
            checked={category.featured}
            onChange={() => handleToggle(category.id)}
          />
          <span className="slider"></span>
        </label>
      </td>

      
      <td>
        <button className="btn btn-outline-primary me-1">
          <FaEdit />
        </button>
        <button className="btn btn-outline-danger">
          <FaTrash />
        </button>
      </td>
    </tr>
  ))}
</tbody>  */}


          <tbody>
            {categoryData.map((category, index) => (
              <React.Fragment key={category.id}>
                <tr>
                  <td className="serial-column">{index + 1}</td>
                  <td>
                    <span
                      className={`plus-icon ${expandedRows.includes(category.id) ? "rotate" : ""
                        }`}
                      onClick={() => handleRowToggle(category.id)}
                    >
                      +
                    </span>{" "}
                    {category.name}
                  </td>

                  <td className="hide-on-small">{category.parentCategory}</td>
                  <td className="hide-on-small">{category.orderLevel}</td>
                  <td className="hide-on-small">{category.level}</td>
                  <td className="hide-on-small">
                    <img src={category.banner} alt="banner" className="table-img" />
                  </td>
                  <td className="hide-on-small">
                    <img src={category.icon} alt="icon" className="table-icon" />
                  </td>
                  <td className="hide-on-small">
                    <img src={category.coverImage} alt="cover" className="table-img" />
                  </td>
                  <td className="hide-on-small">
                    <label className="featured-switch">
                      <input
                        type="checkbox"
                        checked={category.featured}

                        disabled
                        className="cursor-not-allowed "
                      />
                      <span className="slider cursor-not-allowed"></span>
                    </label>
                  </td>
                  <td>
                    <button className="btn btn-outline-primary me-1">
                      <FaEdit />
                    </button>
                    <button onClick={() => { handleDeleteCategory(category._id) }} className="btn btn-outline-danger">
                      <FaTrash />
                    </button>
                  </td>
                </tr>

                {/* ✅ Hidden Row Section */}
                {expandedRows.includes(category.id) && (
                  <tr className="row-details">
                    <td colSpan="10">
                      <div className="details-container">
                        <strong>Parent Category:</strong> {category.parentCategory} |{" "}
                        <strong>Order Level:</strong> {category.orderLevel} |{" "}
                        <strong>Level:</strong> {category.level} |{" "}
                        <strong>Banner:</strong>{" "}
                        <img
                          src={category.banner}
                          alt="banner"
                          className="table-img"
                        />{" "}
                        | <strong>Icon:</strong>{" "}
                        <img src={category.icon} alt="icon" className="table-icon" /> |{" "}
                        <strong>Cover Image:</strong>{" "}
                        <img
                          src={category.coverImage}
                          alt="cover"
                          className="table-img"
                        />{" "}
                        | <strong>Featured:</strong>{" "}
                        {category.featured ? "Yes" : "No"}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>



          {/* Pagination Section */}
          <div className="pagination">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="pagination-btn"
            >
              &lsaquo;
            </button>

            {getPageNumbers().map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === "number" && paginate(page)}
                className={`pagination-btn ${currentPage === page ? "active" : ""
                  } ${page === "..." ? "dots" : ""}`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="pagination-btn"
            >
              &rsaquo;
            </button>
          </div>
        </table>
      </div>
    </div>
  );
};

export default Category;