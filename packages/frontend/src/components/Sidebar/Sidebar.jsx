import styles from "./Sidebar.module.scss"
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Sidebar = () => {
    return (
       <div className={styles.navBar}>
            <Link className={styles.logo} to='/'>
                <h2 className={styles.head}>マ<br/>イ<br/>カ</h2>
                <h3 className={styles.subLogo}>Micah Chen</h3>
            </Link>
            <nav className={styles.nav}>
                <NavLink className={({ isActive }) =>
                        isActive ? `${styles.a} ${styles.active}` : styles.a
                    } exact="true"  to="/">
                    <FontAwesomeIcon className={styles.i} icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
                </NavLink>
                <NavLink  className={`${styles.a} ${styles.aboutLink}`} exact="true" activeclassname="active" to="/about">
                    <FontAwesomeIcon className={styles.i} icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
                </NavLink>
                <NavLink className={`${styles.a} ${styles.contactLink}`} exact="true" activeclassname="active" to="/contact">
                    <FontAwesomeIcon className={styles.i} icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a 
                        target="_blank" 
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/micah-chen-9321a3267/">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a 
                        target="_blank" 
                        rel="noreferrer"
                        href="https://github.com/mchn-4305/">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a 
                        target="_blank" 
                        rel="noreferrer"
                        href="https://www.instagram.com/micahchen_ca/">
                        <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"></FontAwesomeIcon>
                    </a>
                </li>
            </ul>
       </div>
    )
}

export default Sidebar