import React, { useState } from 'react';
import Switch from '../../Switch';

const countries = [
  { name: 'Afghanistan', code: 'AF' },
  { name: 'Albania', code: 'AL' },
  { name: 'Algeria', code: 'DZ' },
  { name: 'American Samoa', code: 'AS' },
  { name: 'Andorra', code: 'AD' },
  { name: 'Angola', code: 'AO' },
  { name: 'Anguilla', code: 'AI' },
  { name: 'Antarctica', code: 'AQ' },
  { name: 'Antigua And Barbuda', code: 'AG' },
];
const ShippingCountries = () => {
  const [expandedRows, setExpandedRows] = useState([]);
  const [countryList, setCountryList] = useState(
    countries.map((country) => ({ ...country, showHide: true }))
  );

  const toggleRow = (index) => {
    if (expandedRows.includes(index)) {
      setExpandedRows(expandedRows.filter((item) => item !== index));
    } else {
      setExpandedRows([...expandedRows, index]);
    }
  };
  const handleToggle = (index) => {
    const updatedList = [...countryList];
    updatedList[index].showHide = !updatedList[index].showHide;
    setCountryList(updatedList);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold" >Countries</h1>
        {/* <div className="flex items-center">
          <input
            type="text"
            placeholder="Type country name"
            className="border p-2 rounded-md mr-2"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Filter
          </button>
        </div> */}
      </div>
      <div className="flex  ">
        <input
          type="text"
          placeholder="Type country name"
          className="border p-2 rounded-md mr-2"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Filter
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-200 mt-5 p-3">
        <thead>
          <tr>
            {/* <th className='border p-2 hidden sm:table-cell'></th> */}
            <th className="border p-2 sm:hidden"></th>
            <th className="border p-2">#</th>
            <th className="border p-2">Name</th>
            <th className="border p-2 hidden sm:table-cell">Code</th>
            <th className="border p-2">Show/Hide</th>
            {/* <th className="border p-2 sm:hidden"></th>  */}
          </tr>
        </thead>
        <tbody>
          {countryList.map((country, index) => (
            <React.Fragment key={index}>
              <tr>
                <td className="border p-2 sm:hidden">
                  <button onClick={() => toggleRow(index)}>
                    {expandedRows.includes(index) ? '-' : '+'}
                  </button>
                </td>
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{country.name}</td>
                <td className="border p-2 hidden sm:table-cell">{country.code}</td>
                <td className="border p-2">
                  <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">


                    <Switch
                      value={country.showHide}
                      onChangeFunc={() => handleToggle(index)}
                    />


                    {/* <label
                      htmlFor={`toggle-${index}`}
                      className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                    ></label> */}
                  </div>
                </td>
                {/* <td className="border p-2 sm:hidden">
                  <button onClick={() => toggleRow(index)}>
                    {expandedRows.includes(index) ? '-' : '+'}
                  </button>
                </td> */}
              </tr>
              {expandedRows.includes(index) && (
                <tr className="sm:hidden">
                  <td colSpan="4" className="border p-2">
                    <strong>Code:</strong> {country.code}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShippingCountries;

