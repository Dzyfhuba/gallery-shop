import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../Images/logo.png'
import Button from '../Components/Button'
import anime from 'animejs'
import PropTypes from 'prop-types'
import ButtonAnchor from '../Components/ButtonAnchor'
import Logout from '../Components/Logout'
import secureLocalStorage from 'react-secure-storage'

type Props = {
  menuEvent: (e:React.SyntheticEvent) => void
}

const Navbar = (props: Props) => {
  const [sidebarShow, setSidebarShow] = useState(false)
  const [user, setUser] = useState<unknown>(null)

  useEffect(() => {
    const user = secureLocalStorage.getItem('user') || null
    setUser(user)
  }, [])

  const handleSidebarShow = (show:boolean) => {
    // const sidebar = document.querySelector('#sidebar_body')
    if (show) {
      anime({
        targets: '#sidebar_body',
        translateX: '-200%',
        easing: 'linear',
        duration: 500
      })
      setSidebarShow(show)
    } else {
      anime({
        targets: '#sidebar_body',
        translateX: '200%',
        easing: 'linear',
        duration: 500
      })
      setTimeout(() => {
        setSidebarShow(show)
      }, 500);
    }
    console.log(sidebarShow)
  }
	
  return (
    <nav className='h-16 py-1 px-2 md:px-8 flex md:justify-between sticky top-0 w-full bg-base shadow-md'>
      <Button onClick={props.menuEvent} className={`block md:hidden`}>
        <span className="material-symbols-rounded">
					menu
        </span>
      </Button>

      <div className="h-full">
        <Link to={'/'} className='h-full'>
          <img src={Logo} alt="logo" className='object-cover h-full'/>
        </Link>
      </div>

      <div className='hidden items-center gap-3 md:flex sticky' id='nav_body'>
        <NavLink to={'/services'} className='h-full flex justify-center items-center font-black w-[120px]
            	hover:text-neutral-700 transition duration-300 ease-in-out
            	'>Jasa</NavLink>
        <NavLink to={'/articles'} className='h-full flex justify-center items-center font-black w-[120px]
            	hover:text-neutral-700 transition duration-300 ease-in-out
            	'>Artikel</NavLink>
        <NavLink to={'/about'} className='h-full flex justify-center items-center font-black w-[120px]
            	hover:text-neutral-700 transition duration-300 ease-in-out
            	'>Kontak Kami</NavLink>
        {
          user ? (
            <>
              <NavLink to={'/admin'} className='h-full flex justify-center items-center font-black w-[120px]
								hover:text-neutral-700 transition duration-300 ease-in-out
								'>Admin</NavLink>
              <NavLink to={'/logout'} className='h-full flex justify-center items-center font-black w-[120px]
								hover:text-neutral-700 transition duration-300 ease-in-out
								'>Logout</NavLink>
            </>
          ) : null
        }
      </div>
      
			
      {/* <div id="sidebar_container" className={`fixed top-0 left-0 h-screen w-screen bg-neutral-900 bg-opacity-50
			${sidebarShow ? 'visible' : 'invisible'} md:invisible
			`}>
        <div id="sidebar_body" className='bg-primary fixed top-0 -right-full w-1/2 h-screen opacity-100'>
          <div id="sidebar_head" className='bg-secondary h-16 flex'>
            <Button className='w-full bg-transparent'
              onClick={() => handleSidebarShow(false)}
            >
              <span className="material-symbols-rounded">
								close
              </span>
            </Button>
          </div>
          <div className='flex flex-col items-center gap-3'>
            <NavLink to={'/services'} className='h-full flex justify-center items-center font-black w-full
						leading-8
						text-neutral-900 hover:text-neutral-500 hover:shadow-lg transition duration-300 ease-in-out
						'>Jasa</NavLink>
            <NavLink to={'/articles'} className='h-full flex justify-center items-center font-black w-full
						leading-8
						text-neutral-900 hover:text-neutral-500 hover:shadow-lg transition duration-300 ease-in-out
						'>Artikel</NavLink>
            <NavLink to={'/about'} className='h-full flex justify-center items-center font-black w-full
						leading-8
						text-neutral-900 hover:text-neutral-500 hover:shadow-lg transition duration-300 ease-in-out
						'>Kontak Kami</NavLink>
            {
              user ? (
                <>
                  <NavLink to={'/admin'} className='h-full flex justify-center items-center font-black w-[120px]
								text-neutral-700 hover:text-neutral-100 transition duration-300 ease-in-out
								'>Admin</NavLink>
                  <NavLink to={'/logout'} className='h-full flex justify-center items-center font-black w-[120px]
								text-neutral-700 hover:text-neutral-100 transition duration-300 ease-in-out
								'>Logout</NavLink>
                </>
              ) : null
            }
          </div>
        </div>
      </div> */}
    </nav>
  )
}

Navbar.propTypes = {
  isAdmin: PropTypes.bool.isRequired
}

Navbar.defaultProps = {
  isAdmin: false
}

export default Navbar