import React, { useEffect, useState } from 'react'
import Navbar from '../../Containers/Navbar'
import PropTypes from 'prop-types'
import AdminNavbar from '../../Containers/AdminNavbar'
import ButtonAnchor from '../../Components/ButtonAnchor'
import axios from 'axios'
import Hosts from '../../Utils/Hosts'
import Button from '../../Components/Button'
import swal from 'sweetalert'

const Service = props => {
	const [isLoading, setIsLoading] = useState(true)
	const [services, setServices] = useState([])

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = () => {
		axios.get(Hosts.main + '/service')
			.then(res => {
				setServices(res.data.data)
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
		<>
			<header>
				<Navbar auth={props.auth} />
				<AdminNavbar />
			</header>
			<main className='pt-32 min-h-screen bg-primary md:px-24 px-4'>
				<h1 className='text-4xl font-black mb-3'>Admin: Service Page</h1>
				<ButtonAnchor to={'/admin/service/create'} className='mb-3'>Add New Service</ButtonAnchor>
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
								{
									Object.keys(services[0] ? services[0] : '').map((item, i) => (!hiddenColumns.includes(i)) ? <th className='border border-neutral-900 p-3' key={i}>{item}</th> : '')
								}
								<th className='border border-neutral-900 p-3'>edit</th>
								<th className='border border-neutral-900 p-3'>delete</th>
							</tr>
						</thead>
						<tbody>
							{services.map(service => (
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

Service.propTypes = {
	auth: PropTypes.any
}

export default Service