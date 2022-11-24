import React from 'react'
import Navbar from '../Containers/Navbar'
import Sidebar from '../Containers/Sidebar'

type Props = {
    children: React.ReactNode
}

const Main = (props: Props) => {
  return (
    <div className='bg-base min-h-screen'>
      <Sidebar />
      <Navbar />
      {props.children}
    </div>
  )
}

export default Main