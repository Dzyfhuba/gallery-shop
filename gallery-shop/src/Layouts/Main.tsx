import React, { HTMLAttributes } from 'react'
import Navbar from '../Containers/Navbar'
import Sidebar from '../Containers/Sidebar'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    //
}

const Main = (props: Props) => {
  return (
    <div className='bg-base min-h-screen'>
      <Sidebar />
      <Navbar />
      <main {...props}>
        {props.children}
      </main>
    </div>
  )
}

export default Main