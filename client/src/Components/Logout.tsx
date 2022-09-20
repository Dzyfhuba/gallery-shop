import axios from 'axios'
import React, { useEffect } from 'react'
import secureLocalStorage from 'react-secure-storage'
import Button from './Button'

const Level = {
	Primary: 'primary',
	Secondary: 'secondary',
} as const
  
  type Level = typeof Level[keyof typeof Level]

type Props = {
    isButton?: boolean
    level?: Level
}

const Logout = (props: Props) => {

	useEffect(() => {
		if (!props.isButton) {
			(async () => {
				const res = await axios.post('http://localhost:3333/logout')
					.then(res => res.data)
					.catch(err => console.error(err))
				if (res.status === 'success') {
					secureLocalStorage.clear()
					window.location.replace('/')
				}
			})()
		}
	}, [])
	return (
		<Button level={props.level}>Logout</Button>
	)
}

export default Logout