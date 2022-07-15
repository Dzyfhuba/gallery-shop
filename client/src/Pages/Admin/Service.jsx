import React from 'react'
import Navbar from '../../Containers/Navbar'
import PropTypes from 'prop-types'
import AdminNavbar from '../../Containers/AdminNavbar'

const Service = props => {
	return (
		<>
			<header>
				<Navbar auth={props.auth} />
				<AdminNavbar />
			</header>
			<main className='pt-32 min-h-screen bg-primary md:px-24 px-4'>
				<div>Service</div>
			</main>
		</>
	)
}

Service.propTypes = {
	auth: PropTypes.any
}

export default Service