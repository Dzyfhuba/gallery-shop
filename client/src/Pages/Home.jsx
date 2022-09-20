import React from 'react'
import Navbar from '../Containers/Navbar'
import PropTypes from 'prop-types'
import Main from '../Layouts/Main.tsx'

const Home = props => {
	return (
		<Main>
			<main className='min-h-screen bg-primary'>
				asd
			</main>
			
		</Main>
	)
}

Home.propTypes = {
	auth: PropTypes.any
}

export default Home