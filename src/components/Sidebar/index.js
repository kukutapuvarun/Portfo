import './index.scss'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-v.png'
import LogoSubtitle from '../../assets/images/logo_sub2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Home from '../Home'


const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/' onClick={() => setShowNav(false)}>
                <img src={LogoS} alt="logo" />
                <img className='sub-logo' src={LogoSubtitle} alt='Varun' />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/about" className="about-link" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a href='https://www.linkedin.com/in/varun-kumar-33va' target="_blank" rel='noreferrer'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="anchor-icon" />
                    </a>
                </li>
                <li>
                    <a href='https://github.com/kukutapuvarun' target="_blank" rel='noreferrer'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="anchor-icon" />
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default Sidebar