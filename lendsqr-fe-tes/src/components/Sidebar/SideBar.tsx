import { Link, useLocation } from "react-router-dom";
import styles from './Sidebar.module.scss';
import User from '../../assets/icons/dashboard/user-friends 1.png'
import Loan from '../../assets/icons/dashboard/sack 1.png'
import Guarantors from '../../assets/icons/dashboard/users 1.png'
import BriefCase from '../../assets/icons/dashboard/briefcase 1.png'
import Down from '../../assets/icons/dashboard/np_next_2236826_000000 2.png'
import Dashboard from '../../assets/icons/dashboard/home 1.png'
import Hand from '../../assets/icons/dashboard/handshake-regular 1.png'
import Savings from '../../assets/icons/dashboard/piggy-bank 1.png'
import Requests from '../../assets/icons/dashboard/Group 104.png'
import Whitelist from '../../assets/icons/dashboard/user-check 1.png'
import Karma from '../../assets/icons/dashboard/user-times 1.png'
import Product from '../../assets/icons/dashboard/np_bank_148501_000000 1.png'
import Coin from '../../assets/icons/dashboard/coins-solid 1.png'
import Icon from '../../assets/icons/dashboard/icon.png'
import Service from '../../assets/icons/dashboard/galaxy 1.png'
import Account from '../../assets/icons/dashboard/user-cog 1.png'
import Scroll from '../../assets/icons/dashboard/scroll 1.png'
import Chart from '../../assets/icons/dashboard/chart-bar 2.png'
import Slider from '../../assets/icons/dashboard/sliders-h 1.png'
import Bardge from '../../assets/icons/dashboard/badge-percent 1.png'
import Clipboard from '../../assets/icons/dashboard/clipboard-list 1.png'


export const menuItems = [
  {
    title: "",
    subItems: [
      {
        title: 'Dashboard',
        path: "/dashboard",
        icon: Dashboard,
      },
    ]
  },
  {
    
    title: "CUSTOMERS",
    subItems: [
      {
        title: 'Users',
        path: "/user",
        icon: User,
      },
      {
        title: 'Guarantors',
        path: "#",
        icon: Guarantors,
      },
      {
        title: 'Loans',
        path: "#",
        icon: Loan,
      },
      {
        title: 'Decision Models',
        path: "#",
        icon: Hand,
      },
      
      {
        title: 'Savings',
        path: "#",
        icon: Savings,
      },
      {
        title: 'Loan Requests',
        path: "#",
        icon: Requests,
      },
      {
        title: 'Whitelist',
        path: "#",
        icon: Whitelist,
      },
      {
        title: 'Karma',
        path: "#",
        icon: Karma,
      },

    ]
  },
  {
    title: "BUSINESSES",
    subItems: [
      {
        title: 'Organization',
        path: "#",
        icon: BriefCase,
      },
      {
        title: 'Loan Products',
        path: "#",
        icon: Requests,
      },
      {
        title: 'Savings Products',
        path: "#",
        icon: Product,
      },
      {
        title: 'Fees and Charges',
        path: "#",
        icon: Coin,
      },
      
      {
        title: 'Savings',
        path: "#",
        icon: Savings,
      },
      {
        title: 'Transactions',
        path: "#",
        icon: Icon,
      },
      {
        title: 'Services',
        path: "#",
        icon: Service,
      },
      {
        title: 'Service Account',
        path: "#",
        icon: Account,
      },
      {
        title: 'Settlements',
        path: "#",
        icon: Scroll,
      },
      {
        title: 'Reports',
        path: "#",
        icon: Chart,
      },

    ]
  },
  {
    title: "SETTINGS",
    subItems: [
      {
        title: 'Preferences',
        path: "#",
        icon: Slider,
      },
      {
        title: 'Fees and Pricing',
        path: "#",
        icon: Bardge,
      },
      {
        title: 'Audit Logs',
        path: "#",
        icon: Clipboard,
      },
    ]
  },
];

const SideBar = () => {

    const location = useLocation();    
      const pathMatchRoute = (route: string) => {
          if (location.pathname.includes(route)) {
              return true
          }
    }
  
      return (
          <nav className={styles.sidebar}>
            <div className={styles.sidebarHeading}>
              <img src={BriefCase} alt="icon"  />
              <p>Switch Organization</p>
              <img src={Down} alt="icon"  />
            </div>
            {menuItems.map((item, index) => (
              <div key={index}>
                <h2>{item.title}</h2>
                {item.subItems.length > 0 && (
                  <ul>
                    {item.subItems.map((subItem, subIndex) => (
                      <Link to={subItem?.path} key={subIndex}
                        className={`${styles.menuItems} ${
                          pathMatchRoute(subItem?.path) ? `${styles?.active}` : ""
                        }`}
                      >
                        <img src={subItem?.icon} alt={subItem.title} />
                        <p>{subItem?.title}</p>
                      </Link>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
    );
  };
  export default SideBar;