import React, { useEffect, useState } from 'react'
import AdminNavbar from '../Containers/AdminNavbar'
import Navbar from '../Containers/Navbar'
import Authentication from '../Utils/Authentication'

type Props = {
    children: React.ReactNode
}

const Admin = (props: Props) => {
  const [user, setUser] = useState(String)
  useEffect(() => {
    Authentication().then(res => setUser(res))
  }, [])
  return (
    <div>
      <header className='sticky top-0'>
        <AdminNavbar />
      </header>
      <main className='min-h-screen bg-base p-3'>
        {props.children}
      </main>
    </div>
  )
}

export default Admin