import React from 'react'
import { Sidebar as SidebarPro, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar'
import { MdClose } from 'react-icons/md'

type Props = {}

const SidebarAdmin = (props: Props) => {
  const { collapseSidebar, collapsed } = useProSidebar()
  return (
    <>
      <SidebarPro collapsedWidth='0' defaultCollapsed={true} className='fixed z-50 bg-white h-screen'>
        <Menu>
          <MenuItem onClick={() => collapseSidebar()} className={'text-center'}>
            <MdClose className='mx-auto text-2xl' />
          </MenuItem>
          <MenuItem>Services</MenuItem>
          <MenuItem>Articles</MenuItem>
          <MenuItem>About</MenuItem>
        </Menu>
      </SidebarPro>
      <div className={`fixed z-40 h-screen w-screen backdrop-brightness-50 ${collapsed && 'hidden'}`} onClick={() => collapseSidebar()}></div>
    </>
  )
}

export default SidebarAdmin