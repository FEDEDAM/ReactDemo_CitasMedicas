import { useState } from 'react'
import { Link , NavLink } from 'react-router-dom'
import './Navbar.css'
import useUser from '../../hooks/useUser'


const Navbar = () => 
{
    // ***Cambiar el botón de logout por components de usuario y pensar el tema del menu segun permisos.

    const [ active , isActive ] = useState('');
    const { logout , isLogged } = useUser();

    const handleToogleBtnMenu = (e) =>{
        isActive( active === '' ? 'active' : '');
    }

    return (
        <header>
            <button id="movile-btn" className={ active } onClick={ handleToogleBtnMenu }></button>

            <Link to="/" id="app-logo">Citas Médicas</Link>

            <nav id="app-navbar" className={ active }>
                <ul onClick={ handleToogleBtnMenu }>
                    <li><NavLink to = "/"           className = "menu-option" activeClassName = "active-item" exact>Home</NavLink></li>
                    <li><NavLink to = "/doctors"    className = "menu-option" activeClassName = "active-item" exact>Doctors</NavLink></li>
                    <li><NavLink to = "/patients"   className = "menu-option" activeClassName = "active-item" exact>Patients</NavLink></li>
                    <li><NavLink to = "/admin"      className = "menu-option" activeClassName = "active-item" exact>Admin</NavLink></li>

                    { !isLogged && <Link  id="btn-login" to = "/auth">Login / SignUp</Link> }
                    { isLogged && <Link  id="btn-login" to = "#" onClick={logout} >LogOut</Link> }
                </ul>
            </nav>
        </header>
    )
}


export default Navbar
