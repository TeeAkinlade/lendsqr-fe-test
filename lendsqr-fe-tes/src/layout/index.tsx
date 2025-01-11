import React from 'react';
import SideBar from '../components/Sidebar/SideBar';
import NavBar from '../components/Navbar/NavBar';
import styles from './Index.module.scss';


type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className={styles.sidebar}>
        <SideBar />
        <div className={styles.childrenStyle}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
