import React from 'react'
import AdminNavbar from '../../Containers/AdminNavbar'
import Navbar from '../../Containers/Navbar'
import PropTypes from 'prop-types'
import Input from '../../Components/Input'

const ServiceCreate = props => {
	console.log('asd')
	return (
		<>
			<header>
				<Navbar auth={props.auth} />
				<AdminNavbar />
			</header>
			<main className='pt-32 min-h-screen bg-primary md:px-24 px-4'>
				<h1 className='text-4xl font-black mb-3'>Admin: Service Page Create</h1>
				<form>
					<Input label='Title' name='title' type='text' />
					<Input label='Images' name='image' type='text' />
				</form>
			</main>
		</>
	)
}

ServiceCreate.propTypes = {
	auth: PropTypes.any
}

export default ServiceCreate