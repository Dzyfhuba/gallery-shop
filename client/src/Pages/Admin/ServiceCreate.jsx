import React, { useCallback, useState } from 'react'
import AdminNavbar from '../../Containers/AdminNavbar'
import Navbar from '../../Containers/Navbar'
import PropTypes from 'prop-types'
import Input from '../../Components/Input'
import SimpleMdeReact from 'react-simplemde-editor'
import "easymde/dist/easymde.min.css";
import GDrive2Embed from '../../Components/GDrive2Embed'

const ServiceCreate = props => {
	const [title, setTitle] = useState(String)
	const [images, setImage] = useState(String)
	const [markdownValue, setMarkdownValue] = useState('Initial value')

	const handleChangeTitle = e => setTitle(e.target.value)
	const handleChangeImage = e => setImage(e.target.value)
	const handleChangeMarkdown = useCallback((value) => {
		console.log(value)
		setMarkdownValue(value)
	}, [])

	const handleSubmit = e => {
		e.preventDefault()

		const data = {title, images, markdownValue}
		console.log(data)
	}
	
	return (
		<>
			<header>
				<Navbar auth={props.auth} />
				<AdminNavbar />
			</header>
			<main className='pt-32 min-h-screen bg-primary md:px-24 px-4'>
				<h1 className='text-4xl font-black mb-3'>Admin: Service Page Create</h1>
				<form onSubmit={handleSubmit}>
					<Input label='Title' name='title' type='text' onChange={handleChangeTitle} />
					<Input label='Images' name='image' type='text' onChange={handleChangeImage} />
					<SimpleMdeReact 
						onChange={handleChangeMarkdown} 
						value={markdownValue}
					/>
				</form>
			</main>
			<GDrive2Embed />
		</>
	)
}

ServiceCreate.propTypes = {
	auth: PropTypes.any
}

export default ServiceCreate