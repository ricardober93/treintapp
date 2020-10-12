import React from 'react'
import LogoColor from 'svg/LogoColor'
import {
    Link, useHistory
} from "react-router-dom";
import './Navbar.css'
import { logout } from 'firebase/client'

export default function Navbar() {
    let history = useHistory()

    const handleClick = () => {
        logout().then(
        history.push('/login')
        )
    }

return (
    <div className="Navbar">
        <div className="Navbar_logo">
            <LogoColor height="38" width="150" />
        </div>
        <div className="Navbar_links">
            <Link to="/" >
                <a href="true" className="link">Mapa</a>
            </Link>
            <Link to="/nosotros" >
                <a href="true" className="link">Nosotros</a>
            </Link>
            <button onClick={handleClick} > Cerrar Sesión</button>
        </div>
    </div>
)
}