import axios from 'axios'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'
import Button from '../../Components/Button'
import ButtonAnchor from '../../Components/ButtonAnchor'
import AdminNavbar from '../../Containers/AdminNavbar'
import Navbar from '../../Containers/Navbar'
import Hosts from '../../Utils/Hosts'
import Admin from '../../Layouts/Admin.tsx'

const Article = props => {
	const [isLoading, setIsLoading] = useState(true)
	const [articles, setArticles] = useState([])

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = () => {
		axios.get(Hosts.main + '/article')
			.then(res => {
				const mapped = res.data.data.map(schedule => {
					return {
						...schedule,
						updated_at: (new Date(schedule.updated_at)).toLocaleString('id')
					}
				})
				setArticles(mapped)
				setIsLoading(false)
			})
	}

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
								swal("Success", 'This service was deleted successfully', 'success')
							}
							console.log(res.data)
						})
				}
			})
	}

	return (
		<Admin>
			<main className='pt-32 min-h-screen bg-primary md:px-24 px-4'>
				<h1 className='text-4xl font-black mb-3'>Admin: Service Page</h1>
				<ButtonAnchor to={'/admin/service/create'} className='mb-3'>Add New Service</ButtonAnchor>
				<div className="overflow-x-scroll">
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
									<th className='border border-neutral-900 p-3'>Judul</th>
									<th className='border border-neutral-900 p-3'>Terakhir Disunting</th>
									<th className='border border-neutral-900 p-3'>open</th>
									<th className='border border-neutral-900 p-3'>delete</th>
								</tr>
							</thead>
							<tbody>
								{articles.map(article => (
									<tr key={article.id}>
										<td className='border border-neutral-900 p-3'>
											{article.title}
										</td>
										<td className='border border-neutral-900 p-3'>
											{article.updated_at}
										</td>
										<td className='border border-neutral-900 p-3'>
											<ButtonAnchor to={`/service/${article.slug}`}>Open</ButtonAnchor>
										</td>
										<td className='border border-neutral-900 p-3'>
											<Button className='w-full bg-ternary' onClick={() => deleteEvent(article.id)}>Delete</Button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					)}
				</div>
			</main>
		</Admin>
	)
}

Article.propTypes = {
	auth: PropTypes.any
}

export default Article