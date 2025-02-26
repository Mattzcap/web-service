import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Home, BarChart, Car, Users, MonitorSmartphone, Settings, LogOut } from "lucide-react";
import AdminDashboard from "../pages/DashBoard";
import AdvertisementManagement from "../pages/AdvertisementManagement";
import TaxiFleetManagement from "../pages/TaxiFleetManagement";
import AnalyticsAndReporting from "../pages/AnalyticsAndReporting";
import "../styles/Sidebar.css";

export default function Sidebar() {
  const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState("Dashboard Overview");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pages = {
    "Dashboard Overview": <AdminDashboard selectedPage={selectedPage} />,
    "Advertisement Management": <AdvertisementManagement />,
    "Taxi Fleet Management": <TaxiFleetManagement />,
    "Analytics & Reporting": <AnalyticsAndReporting />,
    "Admin Users Access": <h1>Admin Users Access Content</h1>,
    "Settings": <h1>Settings Content</h1>,
    "Logout": <h1>Logging out...</h1>, // Placeholder for logout functionality
  };

  return (
    <div className="app-container">
      {/* Sidebar Section */}
      <div className="sidebar">
        <h2 className="sidebar-title"><i>AuAdsTri</i></h2>
        <nav className="sidebar-nav">
          {[
            { label: "Dashboard Overview", icon: <Home size={20} /> },
            { label: "Advertisement Management", icon: <MonitorSmartphone size={20} /> },
            { label: "Taxi Fleet Management", icon: <Car size={20} /> },
            { label: "Analytics & Reporting", icon: <BarChart size={20} /> },
            { label: "Admin Users Access", icon: <Users size={20} /> },
          ].map((item, index) => (
            <button
              key={index}
              className={`sidebar-button ${selectedPage === item.label ? "active" : ""}`}
              onClick={() => setSelectedPage(item.label)}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Sidebar Footer with Settings and Logout Buttons */}
        <div className="sidebar-footer">
          {/* Settings Button */}
          <button
            className={`sidebar-button ${selectedPage === "Settings" ? "active" : ""}`}
            onClick={() => setSelectedPage("Settings")}
          >
            <Settings size={20} />
            <span>Settings</span>
          </button>

          {/* Logout Button */}
          <button
            className="sidebar-button logout-button"
            onClick={() => {
              setSelectedPage("Logout");
              setTimeout(() => navigate("/"), 1000); // Simulate logout redirect
            }}
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-area">{pages[selectedPage]}</div>
    </div>
  );
}
