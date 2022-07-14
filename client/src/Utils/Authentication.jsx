import axios from 'axios'
import Cookies from 'universal-cookie'

const Authentication = async () => {
	const cookie = new Cookies()

	const config = {}
	if (!(cookie.get('auth').includes('undefined') || cookie.get('auth'))) {
		config.headers = {
			'Authorization': `Bearer ${cookie.auth}`
		}
		const user = await axios.get('http://localhost:3333/auth/check', config)
			.then(res => res.data.user)
			.catch(err => console.log(err))
		return user
	}
	return null
}

export default Authentication