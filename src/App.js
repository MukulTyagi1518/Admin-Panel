import React, { useState, useEffect } from "react";
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
import LatestOrders from "./components/orders/LatestOrders.js";
import Preorders from "./components/preorders/PreOrders.js";
import Productadd from "./pages/products/Productadd.jsx";
import Seo from "./pages/products/Seo.jsx";
import Shipping from "./pages/products/Shipping.jsx";
import Warrenty from "./pages/products/Warrenty.jsx";
import FrequentlyBought from "./pages/products/FrequentlyBought.jsx";
import Productprice from "./pages/products/Productprice.jsx";
import CategoryBased from "./pages/products/CategoryBased.jsx";
import General from "./pages/products/General.jsx";
import AllOrders from "./components/sales/AllOrders.js";
import InHouseOrders from "./components/sales/InHouseOrders.js";
import SellerOrders from "./components/sales/SellerOrders.js";
import UnpaidOrders from "./components/sales/UnpaidOrders.js";
import PaidOrders from "./components/sales/PaidOrders.js";
import AllCustomers from "./components/customers/allCustomers/allCustomers.jsx";
import PreorderProducts from "./components/preorders/preOrderProducts/preorderProducts.jsx";
import PreOrderQueries from "./components/preorders/preOrderQueries/preOrderQueries.jsx";
import PreOrderReviews from "./components/preorders/preOrderReviews/preOrderReviews.jsx";
import Earnings from "./components/reports/Earnings.js";
import InhouseProductSale from "./components/reports/InhouseProductSale.js";
import SellerProductSale from "./components/reports/SellerProductSale.js";
import ProductStock from "./components/reports/ProductStock.js";
import UserSearches from "./components/reports/UserSearches.js";
import CommissionHistory from "./components/reports/CommissionHistory.js";
import PreOrderSetting from "./components/preorders/preOrderSettings/preOrderSetting.jsx";
import PreOrderNotification from "./components/preorders/preOrderNotifications/preOrderNotification.jsx";
import PreOrderFaq from "./components/preorders/preOrderFaq/preOrderFaq.jsx";
import AddNewProductMain from "./components/addNewProduct/addNewProduct.jsx";
import BestSellerProducts from "./components/marketing/BestSellerProducts.js";
import BestWeeklyProducts from "./components/marketing/BestWeeklyProducts.js";
import FlashDeals from "./components/marketing/FlashDeals.js";
import FlashDealEdit from "./components/marketing/FlashDealsEdit.js";
import SellerAdsMarketing from "./components/marketing/SellerAdsMarketing.js";
import PreOrderDashboard from "./components/preorders/dashboard/dashboards.jsx";
import AllBrands from "./pages/products/Allbrand.jsx";
import Addreview from "./pages/products/Addreview.jsx";
import Attribute from "./pages/products/Attribute.jsx";
import Colors from "./pages/products/Colors.jsx";
import Review from "./pages/products/Review.jsx";
import DelayedPrepaymentPreOrders from "./components/preorders/orders/delayedprepaymentorders.jsx";
import DelayedFinalPreOrders from "./components/preorders/orders/delayedfinalorders.jsx";
import Allwholesale from "./components/Wholesale/Allwholesale.jsx"
import Addwholesale from "./components/Wholesale/Addwholesale.jsx"
import AllProduct from "./pages/products/AllProduct.js";
import InhouseProduct from "./pages/products/InhouseProduct.js";
import Category from "./pages/products/Category.js";
import Brandimport from "./pages/products/Brandimport.jsx";
import Bulkimport from "./pages/products/Bulkimport.jsx"
import Bulkexport from "./pages/products/Bulkexport.jsx"
import Productbased from "./pages/products/productbased.js";
import ReviewDetail from "./pages/products/ReviewDetail.js";


import EmailTemplateAdmin from "./components/marketing/EmailTemplate/Admin/EmailTemplateAdmin.js";
import EmailTemplateEditor from "./components/marketing/EmailTemplate/Admin/EmailTemplateEditor.js";
import AddNewCategory from "./pages/products/AddNewCategory.jsx";
import CategoryEdit from "./pages/products/CategoryEdit.jsx";
import CreateFlashDeal from "./components/marketing/CreateFlashDeal.js";
import Sellerverification from "./components/Seller/Sellerverification.jsx";
import Payoutrequest from "./components/Seller/Payoutrequest.jsx";
import Inhouse from "./components/Wholesale/Inhouse.jsx"
import Sellerwholesale from "./components/Wholesale/Sellerwholesale.jsx"

function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* <Sidebar isSidebarVisible={isSidebarVisible} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            toggleSidebar={toggleSidebar}
          /> */}
        {(!isMobile || isSidebarVisible) && (
          <Sidebar isSidebarVisible={isMobile ? true : isSidebarVisible} />
        )}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            toggleSidebar={toggleSidebar}
          />
          <div className="flex-1 bg-[#f5f6fa] overflow-y-auto">
            <Routes>
              <Route
                path="/products/CategoryBased"
                element={<CategoryBased />}
              />



              <Route path="/wholesale/all" element={<Allwholesale />}/>
              <Route path="/wholesale/add" element={<Addwholesale />}/>
              <Route path="/products/Brandimport" element={<Brandimport />}/>
              <Route  path= "/products/bulk-import" element={<Bulkimport />}/>
              <Route path="/products/bulk-export" element={<Bulkexport />}/>
              <Route path="/sellers/verify" element={<Sellerverification />}/>
              <Route path="/sellers/payout-request" element={<Payoutrequest />}/>
              <Route path="/wholesale/inhouse" element={<Inhouse />}/>
              <Route path="/wholesale/seller" element={<Sellerwholesale />}/>







              <Route path="/products">
                <Route path="create" element={<AddNewProductMain />}>
                  <Route index element={<General />} />
                  <Route path="general" element={<General />} />
                  <Route path="add" element={<Productadd />} />
                  <Route path="seo" element={<Seo />} />
                  <Route path="shipping" element={<Shipping />} />
                  <Route path="warranty" element={<Warrenty />} />
                  <Route
                    path="frequently-bought"
                    element={<FrequentlyBought />}
                  />
                  <Route path="price-stock" element={<Productprice />} />
                </Route>
                <Route path="/products/all" element={<AllProduct />} />
                <Route path="/products/Inhouse" element={<InhouseProduct />} />
                <Route path="/products/category" element={<Category />}/>
                <Route path="/products/category/create" element={<AddNewCategory />}/>
                <Route path="/products/category/edit/:id" element={<CategoryEdit />}/>
                <Route path="category-discount" element={<CategoryBased />} />
                <Route path="brand" element={<AllBrands />} />
                <Route path="attribute" element={<Attribute />} />
                <Route path="warranty" element={<Warrenty />} />
                <Route path="colour" element={<Colors />} />
                <Route path="review" element={<Review />} />
                <Route path="Addreview" element={<Addreview />} />
                <Route path="/products/ReviewDetail" element={<ReviewDetail/>} />
                <Route path="/products/product-discount" element={<Productbased/>} />

              </Route>

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

              <Route path="/customers/all" element={<AllCustomers />} />

              <Route path="/preorder">
                <Route path="product" element={<PreorderProducts />} />
                <Route path="queries" element={<PreOrderQueries />} />
                <Route path="reviews" element={<PreOrderReviews />} />
                <Route path="setting" element={<PreOrderSetting />} />
                <Route path="notification" element={<PreOrderNotification />} />
                <Route path="faq" element={<PreOrderFaq />} />
                <Route path="dashboard" element={<PreOrderDashboard />} />
                <Route path="all-orders" element={<AllOrders />} />
                <Route path="inhouse-orders" element={<InHouseOrders />} />
                <Route path="seller-orders" element={<SellerOrders />} />
                <Route
                  path="delayed-prepayment-orders"
                  element={<DelayedPrepaymentPreOrders />}
                />
                <Route
                  path="delayed-final-orders"
                  element={<DelayedFinalPreOrders />}
                />
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
              <Route path="/marketing">
                <Route path="best-weekly" element={<BestWeeklyProducts />} />
                <Route path="best-seller" element={<BestSellerProducts />} />
                <Route path="flash-deal" element={<FlashDeals />} />
                <Route path="flash-deal/create" element={<CreateFlashDeal />} />
                <Route path="flash-deal/edit" element={<FlashDealEdit />} />
                <Route path="ads" element={<SellerAdsMarketing />} />
                <Route
                  path="email-templates/admin"
                  element={<EmailTemplateAdmin />}
                />
                <Route
                  path="email-templates/admin/edit"
                  element={<EmailTemplateEditor />}
                />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
