import React, { useEffect, useState } from 'react'
import Navbar from '../../Containers/Navbar'
import PropTypes from 'prop-types'
import AdminNavbar from '../../Containers/AdminNavbar'
import ButtonAnchor from '../../Components/ButtonAnchor'
import axios from 'axios'
import Hosts from '../../Utils/Hosts'
import Button from '../../Components/Button'
import swal from 'sweetalert'
import Admin from '../../Layouts/Admin.tsx'

const Service = props => {
	const [isLoading, setIsLoading] = useState(true)
	const [services, setServices] = useState([])

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = () => {
		axios.get(Hosts.main + '/service')
			.then(res => {
				const mapped = res.data.data.map(schedule => {
					return {
						...schedule,
						updated_at: (new Date(schedule.updated_at)).toLocaleString('id')
					}
				})
				setServices(mapped)
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
					axios.delete(`${Hosts.main}/service/${id}`)
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
					{isLoading || !services.length ? 'asd' : (
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
								{services.map(service => (
									<tr key={service.id}>
										<td className='border border-neutral-900 p-3'>
											{service.title}
										</td>
										<td className='border border-neutral-900 p-3'>
											{service.updated_at}
										</td>
										<td className='border border-neutral-900 p-3'>
											<ButtonAnchor to={`/service/${service.slug}`}>Open</ButtonAnchor>
										</td>
										<td className='border border-neutral-900 p-3'>
											<Button className='w-full bg-ternary' onClick={() => deleteEvent(service.id)}>Delete</Button>
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

Service.propTypes = {
	auth: PropTypes.any
}

export default Service