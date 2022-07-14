import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Login, Register, Service, Article, About } from '../Pages'
import Authentication from '../Utils/Authentication'

const index = () => {
	const [user, setUser] = useState(String)
	useEffect(() => {
		Authentication().then(res => setUser(res))
	}, [])
	console.log(user)
	return (
		<Router>
			<Routes>
				<Route path={'/'} element={<Home auth={user}/>} />

				<Route path={'/login'} element={<Login/>} />
				<Route path={'/register'} element={<Register/>} />

				<Route path={'/service'} element={<Service />} />
				<Route path={'/article'} element={<Article/>} />
				<Route path={'/about'} element={<About/>} />
			</Routes>
		</Router>
	)
}

export default index