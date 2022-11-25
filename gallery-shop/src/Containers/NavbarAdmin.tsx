import React from 'react'
import Button from '../Components/Button'
import { MdMenu } from 'react-icons/md'
import { useProSidebar } from 'react-pro-sidebar'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../Images/logo.png'

type Props = {}

const NavbarAdmin = (props: Props) => {
  const { collapseSidebar } = useProSidebar()
  return (
    <nav className='flex shadow-md h-14 mb-4'>
      <Button onClick={() => collapseSidebar()} className={`md:hidden`}>
        <MdMenu className='text-2xl' />
      </Button>
      <div className="h-full">
        <Link to={'/admin'} className='h-full text-4xl'>
          Admin
        </Link>
      </div>
      <div className='hidden md:flex'>
        <NavLink
          to={'/admin/services'} 
          className=''
        >
          Jasa
        </NavLink>
        <NavLink
          to={'/admin/articles'} 
          className=''
        >
          Artikel
        </NavLink>
        <NavLink
          to={'/admin/about'}
          className=''
        >
          Kontak Kami
        </NavLink>
      </div>
    </nav>
  )
}

export default NavbarAdmin