import React, { useEffect, useState } from 'react'
import Navbar from '../Containers/Navbar'
import Authentication from '../Utils/Authentication'

type Props = {
    children: React.ReactNode
}

const Main = (props: Props) => {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			{props.children}
		</div>
	)
}

export default Main