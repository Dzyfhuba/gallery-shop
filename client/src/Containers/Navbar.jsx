import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ButtonAnchor from '../Components/ButtonAnchor'
import Logo from '../Images/logo.png'

const Navbar = () => {
	return (
		<nav className='h-16 py-1 px-8 flex justify-between fixed w-full bg-secondary text-neutral-100'>
			<div className="h-full">
				<Link to={'/'} className='h-full'>
					<img src={Logo} alt="logo" className='object-cover h-full'/>
				</Link>
			</div>

			<div className='flex items-center gap-3 '>
				<NavLink to={'/'} className='h-full flex justify-center items-center font-black w-[100px]
            hover:text-neutral-700 transition duration-300 ease-in-out
            '>Jasa</NavLink>
				<NavLink to={'/'} className='h-full flex justify-center items-center font-black w-[100px]
            hover:text-neutral-700 transition duration-300 ease-in-out
            '>Artikel</NavLink>
				<NavLink to={'/'} className='h-full flex justify-center items-center font-black w-[100px]
            hover:text-neutral-700 transition duration-300 ease-in-out
            '>Kontak Kami</NavLink>
			</div>
			<ButtonAnchor to={'/login'}>Login</ButtonAnchor>
		</nav>
	)
}

export default Navbar