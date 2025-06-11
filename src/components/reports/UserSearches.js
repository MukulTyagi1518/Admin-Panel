

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductTable from './ProductTable';

function UserSearches() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchData, setSearchData] = useState([]);
  const itemsPerPage = 10;

  // Fetch data from API
  useEffect(() => {
    const fetchSearchReports = async () => {
      try {
        const response = await axios.get('https://e-commerce-backend-1-0.onrender.com/api/user-search-report'); //  Update with your actual endpoint
        setSearchData(response.data);
      } catch (error) {
        console.error('Error fetching search reports:', error);
      }
    };

    fetchSearchReports();
  }, []);

  const columns = [
    {
      header: "#",
      accessor: (_, index) => (currentPage - 1) * itemsPerPage + index + 1,
    },
    {
      header: "Search By",
      accessor: (item) => item.searchBy, 
    },
    {
      header: "Number Searches",
      accessor: (item) => item.numberSearches, 
    },
  ];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="bg-white m-5 p-5 shadow-lg rounded-lg mb-6 mx-4 md:mx-10 lg:mx-20 xl:mx-40">
        <div className="flex flex-col md:flex-row md:items-center border-b">
          <h1 className="text-lg text-gray-800 pb-3">User Search Report</h1>
        </div>

        <ProductTable
          columns={columns}
          data={searchData}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default UserSearches;
