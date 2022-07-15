import axios from 'axios'
import Cookies from 'universal-cookie'

const Authentication = async() => {
	const cookie = new Cookies()

	console.log(localStorage.getItem('user'))
	console.log(cookie.get('token'))
	const config = {}

	config.headers = {
		'Authorization': `Bearer ${cookie.get('token')}`
	}
	const user = await axios.get('http://localhost:3333/auth/check', {
		headers: {
			'Authorization': `Bearer ${cookie.get('token')}`
		}
	})
		.then(res => res.data.user)
		.catch(err => console.log(err))
	console.log(user)
	return user
}

export default Authentication