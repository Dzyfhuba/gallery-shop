// import axios from 'axios'
import axios from 'axios'
import React from 'react'
import { useCookies } from 'react-cookie'
import swal from 'sweetalert'
// import swal from 'sweetalert'
import Button from './Button'

const Logout = () => {
	const [cookie, removeCookie] = useCookies()
    
	const handleSubmit = (e) => {
		console.log(cookie)
		removeCookie('token')

		e.preventDefault()
		axios.post('http://localhost:3333/logout')
			.then(res => {
				if(res.data.status == 'success') {
					swal('Success', res.data.message, res.data.status)
						.then(() => {
							window.location.reload(false)
						})
				}
			})
	}

	return (
		<form onSubmit={handleSubmit}>
			<Button type='submit'>Logout</Button>
		</form>
	)
}

export default Logout