import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../Images/logo.png'

const Navbar = () => {
  return (
    <nav>
        <Link to={'/'}>
            <img src={Logo} alt="logo" />
        </Link>

        <ul>
            <li>
                <NavLink to={'/'}>Jasa</NavLink>
            </li>
            <li>
                <NavLink to={'/'}>Artikel</NavLink>
            </li>
            <li>
                <NavLink to={'/'}>Kontak Kami</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar