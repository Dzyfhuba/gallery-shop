import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Login, Register, Service, Article, About, AdminService, AdminArticle, AdminAbout, AdminServiceCreate, AdminArticleCreate, ServiceShow, ArticleShow, ServiceEdit, ArticleEdit } from '../Pages'
import Authentication from '../Utils/Authentication'
import Logout from '../Components/Logout'

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

        <Route path={'/services'} element={<Service />} />
        <Route path={'/articles'} element={<Article/>} />
        <Route path={'/about'} element={<About/>} />
        <Route path={'/admin'} element={<AdminService />} />
        <Route path={'/admin/services'} element={<AdminService />} />
        <Route path={'/admin/services/create'} element={<AdminServiceCreate />} />
        <Route path={'/admin/articles'} element={<AdminArticle />} />
        <Route path={'/admin/articles/create'} element={<AdminArticleCreate />} />
        <Route path={'/admin/about'} element={<AdminAbout />} />

        <Route path={'services/:slug'} element={<ServiceShow />} />
        <Route path={'services/:slug/edit'} element={<ServiceEdit />} />
        <Route path={'articles/:slug'} element={<ArticleShow />} />
        <Route path={'articles/:slug/edit'} element={<ArticleEdit />} />
      </Routes>
    </Router>
  )
}

export default index