import React, { useState } from 'react'
import { ProSidebarProvider, useProSidebar } from 'react-pro-sidebar'
import 'swiper/css'
import Navbar from '../Containers/Navbar'
import SidebarContainer from '../Containers/SidebarContainer'

type Props = {
    children: React.ReactNode
}

const Main = (props: Props) => {
  const [sidebarVisibility, setSidebarVisibility] = useState<boolean>(false)
  const { collapseSidebar } = useProSidebar()

  const menuOnClick = (e:React.SyntheticEvent) => {
    setSidebarVisibility(!sidebarVisibility)
    console.log(sidebarVisibility)
    collapseSidebar()
  }

  return (
    <>
      <SidebarContainer show={sidebarVisibility} />
      <Navbar menuEvent={menuOnClick} />
      <main className='min-h-screen bg-base p-3'>
        {props.children}
      </main>
    </>
  )
}

export default Main