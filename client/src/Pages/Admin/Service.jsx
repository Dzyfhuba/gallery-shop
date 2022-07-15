import React from 'react'
import Navbar from '../../Containers/Navbar'
import PropTypes from 'prop-types'
import AdminNavbar from '../../Containers/AdminNavbar'
import ButtonAnchor from '../../Components/ButtonAnchor'

const Service = props => {
	return (
		<>
			<header>
				<Navbar auth={props.auth} />
				<AdminNavbar />
			</header>
			<main className='pt-32 min-h-screen bg-primary md:px-24 px-4'>
				<h1 className='text-4xl font-black mb-3'>Admin: Service Page</h1>
				<ButtonAnchor to={'/admin/service/create'}>Add New Service</ButtonAnchor>
			</main>
		</>
	)
}

Service.propTypes = {
	auth: PropTypes.any
}

export default Service