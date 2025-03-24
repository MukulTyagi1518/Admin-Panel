import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchAndFilter = ({ searchTerm, setSearchTerm, dateFilter, setDateFilter, dateOptions }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setDateFilter({ start, end });
  };

  return (
    <div className="flex gap-4 mb-6">
      <div className="flex-1 relative">
          <input
            type="text"
            className="w-full border rounded-lg pl-10 pr-4 py-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Orders"
          />
          <SearchIcon className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
        </div>
        <select
          className="border rounded-lg px-4 py-2"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        >
          <option value="">Select Date Range</option>
          {dateOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      <DatePicker
      className="border rounded-lg px-4 py-2"
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={handleDateChange}
        isClearable={true}
        placeholderText="Select Date"
      />
    </div>
  );
};

export default SearchAndFilter;