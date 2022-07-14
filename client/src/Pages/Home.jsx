import React from 'react'
import Navbar from '../Containers/Navbar'
import PropTypes from 'prop-types'

const Home = props => {
	return (
		<>
			<header>
				<Navbar auth={props.auth} />
			</header>
			<main className='min-h-screen bg-primary'>

			</main>
			
		</>
	)
}

Home.propTypes = {
	auth: PropTypes.any
}

export default Home