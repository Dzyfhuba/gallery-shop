import React from 'react'
import { Menu, MenuItem, Sidebar, SubMenu, useProSidebar } from 'react-pro-sidebar'
import { NavLink, useNavigate } from 'react-router-dom'

interface Props {
  show: boolean
}

const SidebarContainer = (props: Props) => {
  const {collapseSidebar} = useProSidebar()
  const navigate = useNavigate()
  return (
    <Sidebar className='flex md:hidden fixed z-50 top-16 bg-white h-full' collapsedWidth='0' defaultCollapsed={true}>
      <Menu>
        <MenuItem onClick={() => {navigate('/services')}}>
          Jasa
        </MenuItem>
        <MenuItem onClick={() => {navigate('/articles')}}>
          Artikel
        </MenuItem>
        <MenuItem onClick={() => {navigate('/about')}}>
          Tentang Kami
        </MenuItem>
      </Menu>
    </Sidebar>
  )
}

export default SidebarContainer