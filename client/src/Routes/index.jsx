import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Login, Register, Service, Article, About, AdminService, AdminArticle, AdminAbout, AdminServiceCreate, AdminArticleCreate } from '../Pages'
import Authentication from '../Utils/Authentication'

const index = () => {
	const [user, setUser] = useState(String)
	useEffect(() => {
		Authentication().then(res => setUser(res))
	}, [])
	return (
		<Router>
			<Routes>
				<Route path={'/'} element={<Home auth={user} />} />

				<Route path={'/login'} element={<Login/>} />
				<Route path={'/register'} element={<Register/>} />

				<Route path={'/service'} element={<Service />} />
				<Route path={'/article'} element={<Article/>} />
				<Route path={'/about'} element={<About/>} />
				<Route path={'/admin'} element={<AdminService auth={user} />} />
				<Route path={'/admin/service'} element={<AdminService auth={user} />} />
				<Route path={'/admin/service/create'} element={<AdminServiceCreate auth={user} />} />
				<Route path={'/admin/article'} element={<AdminArticle auth={user} />} />
				<Route path={'/admin/article/create'} element={<AdminArticleCreate auth={user} />} />
				<Route path={'/admin/about'} element={<AdminAbout auth={user} />} />
			</Routes>
		</Router>
	)
}

export default index