import "./Homesetting.css";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Homesetting() {
   
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("homeslider");

    const tabs = [
        { name: "Home Slider", path: "homeslider" },
        { name: "Todays Deal", path: "todaysdeal" },
        { name: "Banner Level 1", path: "banner1" },
        { name: "Preorder Banner", path: "perorder" },
        { name: "Banner Level 2", path: "banner2" },
        { name: "Banner Level 3", path: "banner3" },
        { name: "Auction Products", path: "auction", addon: true },
        { name: "Category Wise Products", path: "categorywise" },
        { name: "Classifieds", path: "classifieds" },
        { name: "Newest Preorder Products", path: "newest" },
        { name: "Top Brands", path: "topbrands" },
    ];

    useEffect(() => {
        const currentPath = location.pathname.split("/").pop();
        setActiveTab(currentPath);
    }, [location]);

    return (
        <div className="homesettingContainer">
            <div className="homesettingSidebar">
                <h3>Homepage Settings (Classic)</h3>
                <div className="divider"></div>

                <div className="tabList">
                    {tabs.map((tab) => (
                        <Link
                            to={`/web-settings/home/${tab.path}`}
                            key={tab.path}
                            className={`tabLink ${activeTab === tab.path ? "active" : ""}`}
                        >
                            <span>{tab.name}</span>
                            {tab.addon && <span className="addonTag">Addon</span>}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="homesettingContent">
                <Outlet />
            </div>
        </div>
    );
}
