import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from '../Pages/About'
import Articles from '../Pages/Articles'
import Home from '../Pages/Home'
import Services from '../Pages/Services'
import AdminServices from '../Pages/Admin/Services'
import AdminArticles from '../Pages/Admin/Articles'
import AdminAbout from '../Pages/Admin/About'
import Login from '../Pages/Authentication/Login'
import Register from '../Pages/Authentication/Register'

type Props = {}

const index = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/about' element={<About />} />
        <Route path='/admin' element={<AdminServices />} />
        <Route path='/admin/services' element={<AdminServices />} />
        <Route path='/admin/articles' element={<AdminArticles />} />
        <Route path='/admin/about' element={<AdminAbout />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default index