import React, { useCallback, useState } from 'react'
import AdminNavbar from '../../Containers/AdminNavbar'
import Navbar from '../../Containers/Navbar'
import PropTypes from 'prop-types'
import Input from '../../Components/Input'
import SimpleMdeReact from 'react-simplemde-editor'
import "easymde/dist/easymde.min.css";
import GDrive2Embed from '../../Components/GDrive2Embed'
import Textarea from '../../Components/Textarea'
import Button from '../../Components/Button'
import slug from 'slug'
import axios from 'axios'
import Hosts from '../../Utils/Hosts'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import Admin from '../../Layouts/Admin.tsx'

const ServiceCreate = props => {
	const [title, setTitle] = useState(String)
	const [images, setImage] = useState(Array)
	const [markdownValue, setMarkdownValue] = useState('Initial value')
	const navigate = useNavigate()

	const handleChangeTitle = e => setTitle(e.target.value)
	const handleChangeImage = e => {
		const imagesURL = e.target.value
		setImage(imagesURL.split(';'))
	}
	const handleChangeMarkdown = useCallback((value) => {
		setMarkdownValue(value)
	}, [])

	const handleSubmit = e => {
		e.preventDefault()

		const data = {
			title, 
			slug: slug(title),
			images, 
			content: markdownValue
		}

		axios.post(`${Hosts.main}/article`, data)
			.then(res => {
				if (!res.data.error) {
					swal('Success', res.data.message, 'success')
						.then(navigate('/admin/article'))
				} else {
					swal('Failed', res.data.message, 'error')
					console.log(res.data.e)
				}
			})
	}
	
	return (
		<Admin>
			<main className='pt-32 min-h-screen bg-primary md:px-24 px-4'>
				<h1 className='text-4xl font-black mb-3'>Admin: Article Page Create</h1>
				<form onSubmit={handleSubmit}>
					<div className="flex justify-end"><Button type='submit'>Submit</Button></div>
					<Input label='Title' name='title' type='text' onChange={handleChangeTitle} required/>
					<Textarea label='Images' name='image' type='text' onChange={handleChangeImage} required/>
					<div id="preview" className='flex gap-1 mb-3'>
						{images.map((image, key) => <img 
							src={image} key={key} 
							alt='image preview'
							className='h-14'
						/>)}
					</div>
					<SimpleMdeReact 
						onChange={handleChangeMarkdown} 
						value={markdownValue}
					/>
				</form>
			</main>
			<GDrive2Embed />
		</Admin>
	)
}

ServiceCreate.propTypes = {
	auth: PropTypes.any
}

export default ServiceCreate