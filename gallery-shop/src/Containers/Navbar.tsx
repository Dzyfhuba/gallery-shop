import React from 'react'
import Button from '../Components/Button'
import { MdMenu } from 'react-icons/md'
import { useProSidebar } from 'react-pro-sidebar'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../Images/logo.png'

type Props = {}

const Navbar = (props: Props) => {
  const { collapseSidebar } = useProSidebar()
  return (
    <nav className='flex shadow-md'>
      <Button onClick={() => collapseSidebar()} className={`md:hidden`}>
        <MdMenu className='text-2xl' />
      </Button>
      <div className="h-full">
        <Link to={'/'} className='h-full'>
          <img src={Logo} alt="logo" className='object-cover h-full'/>
        </Link>
      </div>
      <div className='hidden md:flex'>
        <NavLink
          to={'/services'} 
          className=''
        >
          Jasa
        </NavLink>
        <NavLink
          to={'/articles'} 
          className=''
        >
          Artikel
        </NavLink>
        <NavLink
          to={'/about'}
          className=''
        >
          Kontak Kami
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar