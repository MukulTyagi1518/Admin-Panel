import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Dropdown from '../components/Dropdown';
import CustomerSection from "../components/dashboard/CustomerSection";
import ProductSection from "../components/dashboard/ProductSection";
import SalesSection from "../components/dashboard/SalesSection";
import CategorySection from "../components/dashboard/CategorySection";
import BrandSection from "../components/dashboard/BrandSection";
import SellerSection from "../components/dashboard/SellerSection";
import Orders from "../components/dashboard/Orders";
import InHouseTopCategory from "../components/dashboard/InHouseTopCategory";
import InHouseTopBrand from "../components/dashboard/InHouseTopBrand";
import InHouseStore from "../components/dashboard/InHouseStore";
import TopSellerAndProducts from "../components/dashboard/TopSellerAndProducts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const dropdowns = {
    month: {
      label: "Filter by Month",
      options: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],    },
    days: {
      label: "Filter by Days",
      options: ["Today", "Last 7 Days", "Last 30 Days", "All Time"],
    },
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm m-3">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex flex-wrap gap-4 items-center">
          {Object.entries(dropdowns).map(([key, { label, options }]) => (
            <Dropdown
              key={key}
              label={label}
              options={options}
              isOpen={openDropdown === key}
              onToggle={() => toggleDropdown(key)}
            />
          ))}

          {/* Date Picker */}
          <div className="flex items-center gap-2">
          <DatePicker
            className="border rounded-lg mr-3 px-6 py-2"
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={handleDateChange}
            isClearable={true}
            placeholderText="Select Date"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

function Dashboard() {
  return (
    <>
      <Header />
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <CustomerSection />
          <ProductSection />
          <CategorySection />
          <BrandSection />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <SalesSection />
          <SellerSection />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
        <Orders />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <InHouseTopCategory />
          <InHouseTopBrand />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-4 my-4">
        <TopSellerAndProducts />
        <InHouseStore />
      </div>
    </>
  );
}

export default Dashboard;