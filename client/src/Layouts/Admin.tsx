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
			<header>
				<Navbar isAdmin={true} />
				<AdminNavbar />
			</header>
			{props.children}
		</div>
	)
}

export default Admin