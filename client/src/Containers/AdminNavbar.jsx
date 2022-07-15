import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const AdminNavbar = props => {
	return (
		<>
			<div className={`fixed bg-secondary top-16 h-11 w-full flex ${props.className}`}>
				<NavLink to={'/admin/service'} className='w-full text-center text-white 
                hover:text-neutral-800 transition duration-500
                ease-in-out'
				>Service</NavLink>
				<NavLink to={'/admin/article'} className='w-full text-center text-white 
                hover:text-neutral-800 transition duration-500
                ease-in-out'
				>Article</NavLink>
				<NavLink to={'/admin/about'} className='w-full text-center text-white 
                hover:text-neutral-800 transition duration-500
                ease-in-out'
				>About</NavLink>
			</div>
		</>
	)
}

AdminNavbar.propTypes = {
	className: PropTypes.string
}

export default AdminNavbar