import React, { useEffect, useState } from 'react'
import Navbar from '../../Containers/Navbar'
import PropTypes from 'prop-types'
import AdminNavbar from '../../Containers/AdminNavbar'
import ButtonAnchor from '../../Components/ButtonAnchor'
import Hosts from '../../Utils/Hosts'
import axios from 'axios'
import swal from 'sweetalert'
import Button from '../../Components/Button'

const Article = props => {
	const [isLoading, setIsLoading] = useState(true)
	const [articles, setArticles] = useState([])

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = () => {
		axios.get(Hosts.main + '/article')
			.then(res => {
				setArticles(res.data.data)
				setIsLoading(false)
			})
	}

	const hiddenColumns = [0, 2, 3, 4, 5]

	const deleteEvent = (id) => {
		swal('Do you want to delete this?', {
			buttons: {
				cancel: 'Cancel',
				catch: {
					text: 'Yes',
					value: true
				}
			}
		})
			.then(value => {
				if (value) {
					axios.delete(`${Hosts.main}/article/${id}`)
						.then(res => {
							if (res.data.status == 'success') {
								fetchData()
								swal("Success", 'This article was deleted successfully', 'success')
							}
							console.log(res.data)
						})
				}
			})
	}
	
	return (
		<>
			<header>
				<Navbar auth={props.auth} />
				<AdminNavbar />
			</header>
			<main className='pt-32 min-h-screen bg-primary md:px-24 px-4'>
				<h1 className='text-4xl font-black mb-3'>Admin: Article Page</h1>
				<ButtonAnchor to={'/admin/article/create'} className='mb-3'>Add New Article</ButtonAnchor>
				{isLoading || !articles.length ? 'asd' : (
					<table className='w-full table border border-neutral-900 border-separate'>
						<colgroup>
							<col className='w-full'/>
							<col className='inline-flex'/>
							<col />
							<col />
						</colgroup>
						<thead>
							<tr>
								{
									Object.keys(articles[0] ? articles[0] : '').map((item, i) => (!hiddenColumns.includes(i)) ? <th className='border border-neutral-900 p-3' key={i}>{item}</th> : '')
								}
								<th className='border border-neutral-900 p-3'>edit</th>
								<th className='border border-neutral-900 p-3'>delete</th>
							</tr>
						</thead>
						<tbody>
							{articles.map(service => (
								<tr key={service.id}>
									{Object.values(service).map((cell, i) => (!hiddenColumns.includes(i)) ?  <td className='border border-neutral-900 p-3' key={i}>{cell}</td> : '')}
									<td className='border border-neutral-900 p-3'>
										<ButtonAnchor to={`/admin/service/${service.id}/edit`}>Edit</ButtonAnchor>
									</td>
									<td className='border border-neutral-900 p-3'>
										<Button className='w-full bg-ternary' onClick={() => deleteEvent(service.id)}>Delete</Button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</main>
		</>
	)
}

Article.propTypes = {
	auth: PropTypes.any
}

export default Article