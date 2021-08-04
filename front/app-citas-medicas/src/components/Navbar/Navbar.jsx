import { Link } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'

const Navbar = () => {

    const [ active , isActive ] = useState('');

    const handleToogleBtnMenu = (e) =>{
        isActive( active === '' ? 'active' : '');
    }

    return (
        <header>

            <button id="movile-btn" className={ active } onClick={ handleToogleBtnMenu }></button>

            <Link to="/" id="app-logo">
                Citas Médicas
            </Link>

            <nav id="app-navbar" className={ active }>
                <ul onClick={ handleToogleBtnMenu }>
                    <li><Link to = "/" className = "menu-option">Home</Link></li>
                    <li><Link to = "/doctors" className = "menu-option">Doctors</Link></li>
                    <li><Link to = "/patients" className = "menu-option">Patients</Link></li>
                    <li><Link to = "/admin" className = "menu-option">Admin</Link></li>

                    <Link  id="btn-login" to = "/logger">
                        Login / SignUp
                    </Link>
                </ul>
            </nav>

        </header>
    )
}


export default Navbar
