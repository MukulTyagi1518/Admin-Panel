import "./addNewProduct.scss";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function AddNewProductMain() {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("general");

    const tabs = [
        { name: "General", path: "general" },
        { name: "Files & Media", path: "add" },
        { name: "Price & Stock", path: "price-stock" },
        { name: "SEO", path: "seo" },
        { name: "Shipping", path: "shipping" },
        { name: "Warranty", path: "warranty" },
        { name: "Frequently Bought", path: "frequently-bought" }
    ];

    useEffect(() => {
        const currentPath = location.pathname.split("/").pop();
        setActiveTab(currentPath);
    }, [location]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentIndex = tabs.findIndex(tab => tab.path === activeTab);
        if (currentIndex < tabs.length - 1) {
            const nextTab = tabs[currentIndex + 1].path;
            navigate(`/products/create/${nextTab}`);
        }
    };

    return (
        <div className="addNewProductMain">
            <div className="addNewProductBox">
                <div className="header">
                    <h2>Add New Product</h2>
                    <button className="clearTempData">Clear Tempdata</button>
                </div>

                <div className="tabContainer">
                    {tabs.map((tab, index) => {
                        const isActive = activeTab === tab.path;
                        const isCompleted = tabs.findIndex(t => t.path === activeTab) > index;

                        return (
                            <Link 
                                to={`/products/create/${tab.path}`}
                                key={tab.path}
                                className={`tabItem ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}`}
                            >
                                {tab.name}
                            </Link>
                        );
                    })}
                </div>

                <div className="addNewProductOutlet">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
