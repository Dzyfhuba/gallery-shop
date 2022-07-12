import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../Images/logo.png'

const Navbar = () => {
  return (
    <nav className='h-16 bg-secondary flex'>
        <div className="h-full">
            <Link to={'/'} className='h-full'>
                <img src={Logo} alt="logo" className='object-cover h-full'/>
            </Link>
        </div>

        <div className='flex items-center'>
            <NavLink to={'/'}>Jasa</NavLink>
            <NavLink to={'/'}>Artikel</NavLink>
            <NavLink to={'/'}>Kontak Kami</NavLink>
        </div>
    </nav>
  )
}

export default Navbar