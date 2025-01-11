import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../components/Sidebar/Sidebar.module.scss";
import HamburgerIcon from "../assets/icons/hamburger (1).png"
import CloseIcon from "../assets/icons/close.png";
import { menuItems } from "./Sidebar/SideBar";

const Hamburger = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<number | null>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSection = (index: number) => {
    setExpandedSections(expandedSections === index ? null : index);
  };

  const pathMatchRoute = (route: string) => {
    return location.pathname.includes(route);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <button
        className={styles.hamburger}
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <img src={isSidebarOpen ? CloseIcon : HamburgerIcon} alt="Menu" />
      </button>

      {/* Sidebar */}
      {isSidebarOpen && 
      (
          <nav
            className={`${styles.sidebars} ${
              isSidebarOpen ? styles.open : styles.closed
            }`}
          >
            <div className={styles.sidebarHeadings}>
              <img src={menuItems[0]?.subItems[0]?.icon} alt="icon" />
              <p>Switch Organization</p>
            </div>
            {menuItems.map((item, index) => (
              <div key={index}>
                <h2
                  className={styles.sectionTitle}
                  onClick={() => toggleSection(index)}
                >
                  {item.title}
                  <span className={styles.arrow}>
                    {expandedSections === index ? "▲" : "▼"}
                  </span>
                </h2>
                <ul
                  className={`${styles.subMenu} ${
                    expandedSections === index ? styles.expanded : styles.collapsed
                  }`}
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <Link
                      to={subItem?.path}
                      key={subIndex}
                      className={`${styles.menuItems} ${
                        pathMatchRoute(subItem?.path) ? styles.active : ""
                      }`}
                    >
                      <img src={subItem?.icon} alt={subItem.title} />
                      <p className={styles.title}>{subItem?.title}</p>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

    )}
    </>
  );
};

export default Hamburger;
