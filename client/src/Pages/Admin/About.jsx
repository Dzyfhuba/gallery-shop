import React from 'react'
import AdminNavbar from '../../Containers/AdminNavbar'
import Navbar from '../../Containers/Navbar'
import PropTypes from 'prop-types'

const About = props => {
	return (
		<>
			<header>
				<Navbar auth={props.auth} />
				<AdminNavbar />
			</header>
			<main className='pt-32 min-h-screen bg-primary md:px-24 px-4'>
				<div>About</div>
			</main>
		</>
	)
}

About.propTypes = {
	auth: PropTypes.any
}


export default About