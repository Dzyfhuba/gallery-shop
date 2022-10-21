import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const AdminNavbar = props => {
  return (
    <nav className={`bg-base shadow-md h-11 w-full flex items-center ${props.className}`}>
      <NavLink to={'/admin/services'} className='w-full text-center 
                hover:text-blue-500 transition duration-500
                ease-in-out'
      >Service</NavLink>
      <NavLink to={'/admin/articles'} className='w-full text-center 
                hover:text-blue-500 transition duration-500
                ease-in-out'
      >Article</NavLink>
      <NavLink to={'/admin/about'} className='w-full text-center 
                hover:text-blue-500 transition duration-500
                ease-in-out'
      >About</NavLink>
    </nav>
  )
}

AdminNavbar.propTypes = {
  className: PropTypes.string
}

export default AdminNavbar