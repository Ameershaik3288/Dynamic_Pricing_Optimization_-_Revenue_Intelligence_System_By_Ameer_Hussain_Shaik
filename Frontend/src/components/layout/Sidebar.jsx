import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiBox,
  FiTrendingUp,
  FiBarChart2,
  FiSettings,
  FiDollarSign,
} from "react-icons/fi";

function Sidebar() {
  const menuItems = [
    {
      title: "Dashboard",
      icon: <FiHome />,
      path: "/",
    },
    {
      title: "Products",
      icon: <FiBox />,
      path: "/products",
    },
    {
      title: "AI Pricing",
      icon: <FiDollarSign />,
      path: "/pricing",
    },
    {
      title: "Forecast",
      icon: <FiTrendingUp />,
      path: "/forecast",
    },
    {
      title: "Reports",
      icon: <FiBarChart2 />,
      path: "/reports",
    },
    {
      title: "Settings",
      icon: <FiSettings />,
      path: "/settings",
    },
  ];

  return (
    <aside className="sidebar">
      <div className="logo-section">
        <h2>PricePilot AI</h2>
        <p>Revenue Intelligence</p>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <span className="menu-icon">{item.icon}</span>

            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <h4>Ameer Hussain</h4>
        <small>AI Business Platform</small>
      </div>
    </aside>
  );
}

export default Sidebar;