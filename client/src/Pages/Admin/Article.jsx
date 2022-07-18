import React from 'react'
import Navbar from '../../Containers/Navbar'
import PropTypes from 'prop-types'
import AdminNavbar from '../../Containers/AdminNavbar'
import ButtonAnchor from '../../Components/ButtonAnchor'

const Article = props => {
	return (
		<>
			<header>
				<Navbar auth={props.auth} />
				<AdminNavbar />
			</header>
			<main className='pt-32 min-h-screen bg-primary md:px-24 px-4'>
				<h1 className='text-4xl font-black mb-3'>Admin: Article Page</h1>
				<ButtonAnchor to={'/admin/article/create'}>Add New Article</ButtonAnchor>
			</main>
		</>
	)
}

Article.propTypes = {
	auth: PropTypes.any
}

export default Article