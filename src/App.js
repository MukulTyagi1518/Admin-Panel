import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import VerifyOtp from "./pages/VerifyOtp";
import OrdersPage from "./pages/OrdersPage.js";
import Dashboard from "./pages/Dashboard.js";
import EarningsPage from "./pages/EarningsPage.js";
import Navbar from "./components/Navbar.js";
import Sidebar from "./components/Sidebar.js";
import PreordersPage from "./components/preorders/PreOrders.js";
import HomeSlider from "./components/settings/HomeSlider.js";
import TodaysDeals from "./components/settings/TodaysDeals.js";
import BannerLevel1 from "./components/settings/BannerLevel1.js";
import PreorderBanner1 from "./components/settings/PreorderBanner1.js";
import BannerLevel2 from "./components/settings/BannerLevel2.js";
import BannerLevel3 from "./components/settings/BannerLevel3.js";
import AuctionBanner from "./components/settings/AuctionBanner.js";
import CategoryWiseProducts from "./components/settings/CaterogyWiseProducts.js";
import Classified from "./components/settings/Classified.js";
import NewestPreorderProducts from "./components/settings/NewestPreorderProducts.js";
import SettingsLayout from "./components/settings/SettingsLayout.js";
import TopBrands from "./components/settings/TopBrands.js";
import AllOrders from "./components/sales/AllOrders.js";
import InHouseOrders from "./components/sales/InHouseOrders.js";
import SellerOrders from "./components/sales/SellerOrders.js";
import UnpaidOrders from "./components/sales/UnpaidOrders.js";
import PaidOrders from "./components/sales/PaidOrders.js";
import Earnings from "./components/reports/Earnings.js";
import InhouseProductSale from "./components/reports/InhouseProductSale.js";
import SellerProductSale from "./components/reports/SellerProductSale.js";
import ProductStock from "./components/reports/ProductStock.js";
import UserSearches from "./components/reports/UserSearches.js";
import CommissionHistory from "./components/reports/CommissionHistory.js";

function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {isSidebarVisible && <Sidebar />}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            toggleSidebar={toggleSidebar}
          />
          <div className="flex-1 bg-[#f5f6fa] overflow-y-auto">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/verify-otp" element={<VerifyOtp />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/preorders" element={<PreordersPage />} />
              <Route path="/earnings" element={<EarningsPage />} />
              <Route path="/settings" element={<SettingsLayout />}>
                <Route index element={<HomeSlider />} />
                <Route path="home-slider" element={<HomeSlider />} />
                <Route path="todays-deal" element={<TodaysDeals />} />
                <Route path="banner-level-1" element={<BannerLevel1 />} />
                <Route path="preorder-banner-1" element={<PreorderBanner1 />} />
                <Route path="banner-level-2" element={<BannerLevel2 />} />
                <Route path="banner-level-3" element={<BannerLevel3 />} />
                <Route path="auction-products" element={<AuctionBanner />} />
                <Route
                  path="category-wise-products"
                  element={<CategoryWiseProducts />}
                />
                <Route path="classifieds" element={<Classified />} />
                <Route
                  path="newest-preorder-products"
                  element={<NewestPreorderProducts />}
                />
                <Route path="top-brands" element={<TopBrands />} />
              </Route>
              <Route path="/sales">
                <Route path="all" element={<AllOrders />} />
                <Route path="inhouse" element={<InHouseOrders />} />
                <Route path="seller" element={<SellerOrders />} />
                <Route path="unpaid" element={<UnpaidOrders />} />
                <Route path="paid" element={<PaidOrders />} />
              </Route>
              <Route path="/reports">
                <Route path="earnings" element={<Earnings />} />
                <Route path="inhouse-sale" element={<InhouseProductSale />} />
                <Route path="seller-sale" element={<SellerProductSale />} />
                <Route path="stock" element={<ProductStock />} />
                <Route path="searches" element={<UserSearches />} />
                <Route path="commission" element={<CommissionHistory />} />
                
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
