import React from 'react'
import Navbar from '../../Containers/Navbar'
import PropTypes from 'prop-types'

const Service = props => {
	return (
		<>
			<header>
				<Navbar auth={props.auth} />
			</header>
			<main>
				<div>Service</div>
			</main>
		</>
	)
}

Service.propTypes = {
	auth: PropTypes.any
}

export default Service