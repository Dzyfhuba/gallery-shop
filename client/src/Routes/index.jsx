import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Login, Register, Service, Article, About, AdminService, AdminArticle, AdminAbout, AdminServiceCreate, AdminArticleCreate, ServiceShow, ArticleShow } from '../Pages'
import Authentication from '../Utils/Authentication'
import Logout from '../Components/Logout.tsx'

const index = () => {
	const [user, setUser] = useState(String)
	useEffect(() => {
		Authentication().then(res => setUser(res))
	}, [])
	return (
		<Router>
			<Routes>
				<Route path={'/'} element={<Home />} />

				<Route path={'/login'} element={<Login/>} />
				<Route path={'/register'} element={<Register/>} />
				<Route path={'/logout'} element={<Logout />} />

				<Route path={'/service'} element={<Service />} />
				<Route path={'/article'} element={<Article/>} />
				<Route path={'/about'} element={<About/>} />
				<Route path={'/admin'} element={<AdminService />} />
				<Route path={'/admin/service'} element={<AdminService />} />
				<Route path={'/admin/service/create'} element={<AdminServiceCreate />} />
				<Route path={'/admin/article'} element={<AdminArticle />} />
				<Route path={'/admin/article/create'} element={<AdminArticleCreate />} />
				<Route path={'/admin/about'} element={<AdminAbout />} />

				<Route path={'service/:slug'} element={<ServiceShow />} />
				<Route path={'article/:slug'} element={<ArticleShow />} />
			</Routes>
		</Router>
	)
}

export default index