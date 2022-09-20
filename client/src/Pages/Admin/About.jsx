import React from 'react'
import AdminNavbar from '../../Containers/AdminNavbar'
import Navbar from '../../Containers/Navbar'
import PropTypes from 'prop-types'
import Admin from '../../Layouts/Admin.tsx'

const About = props => {
	return (
		<Admin>
			<main className='pt-32 min-h-screen bg-primary md:px-24 px-4'>
				<div>About</div>
			</main>
		</Admin>
	)
}

About.propTypes = {
	auth: PropTypes.any
}


export default About