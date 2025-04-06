import styles from "./Sidebar.module.scss"
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return (
       <div className={styles.navBar}>
            <Link className={styles.logo} to='/'>
                <h2 className={styles.head}>マ<br/>イ<br/>カ</h2>
                <h3 className={styles.subLogo}>Micah Chen</h3>
            </Link>
            <nav className={styles.nav}>
                <NavLink className={styles.a} exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon className={styles.i} icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
                </NavLink>
                <NavLink  className={`${styles.a} ${styles.aboutLink}`} exact="true" activeclassname="active" to="/about">
                    <FontAwesomeIcon className={styles.i} icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
                </NavLink>
                <NavLink className={`${styles.a} ${styles.contactLink}`} exact="true" activeclassname="active" to="/contact">
                    <FontAwesomeIcon className={styles.i} icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
                </NavLink>
            </nav>
       </div>
    )
}

export default Sidebar