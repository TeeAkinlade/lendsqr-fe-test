import Logo from '../../assets/images/Group.svg'
import Search from '../../assets/icons/Vector.png'
import Notification from '../../assets/icons/np_notification_2425223_000000 1.png'
import Avater from '../../assets/images/avatar.png'
import Dropdown from '../../assets/icons/downIcon.png'
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom'
import Hamburger from '../Hamburger'

const NavBar = () =>{
    return (
        <nav className={styles.nav}>
            <nav className={styles.navbar}>
                <div className={styles.leftItems}>
                    <Link to='/dashboard'>
                        <img src={Logo} alt="logo" className={styles.logo} /> 
                    </Link>
                    <div className={styles.search}>
                        <input
                            type="search"
                            name="search"
                            placeholder="Search for anything"
                        />
                        <div className={styles.searchButton}>
                        <img src={Search} alt="search" className={styles.searchIcon} /> 
                        </div>
                    </div>  
                </div>
                <div className={styles.rightItems}>
                    <p className={styles.docs}>Docs</p>
                    <div className={styles.notification}>
                        <img src={Notification} alt="search" className={styles.notification} /> 
                    </div>
                    <div className={styles.avater}>
                        <img src={Avater} alt="avater" className={styles.avater} /> 
                        <div className={styles.profileMenu}>
                            <p>Adedeji</p>
                            <img src={Dropdown} alt="search" className={styles.dropdown} /> 
                        </div>
                    </div>
                </div>
                <div className={styles.hamburgerIcon}>
                    <Hamburger />
                </div>
            </nav>
        </nav>
    )
}

export default NavBar;