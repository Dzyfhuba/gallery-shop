import axios from 'axios'
import React, { useEffect } from 'react'
import Navbar from '../Containers/Navbar'

const Home = () => {
	useEffect(() => {
		axios.get('http://localhost:3333').then(response => console.log(response.data))
	}, [])
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main className='min-h-screen bg-primary'>

			</main>
			
		</>
	)
}

export default Home