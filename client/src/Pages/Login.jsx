import React from 'react'
import Button from '../Components/Button'
import ButtonAnchor from '../Components/ButtonAnchor'
import Input from '../Components/Input'

const Login = () => {
	return (
		<main className='min-h-screen bg-primary flex items-center justify-center'>
			<div className="bg-secondary p-5 rounded-xl">
				<Input name={'username'} label='Username' placeholder={'Masukkan Username'} required/>
				<Input name={'password'} label='Password' type='password' placeholder={'Masukkan Password'} required/>
				<div className="flex justify-end w-full">
					<Button type='submit'>Login</Button>
				</div>
				<hr className='my-5' />
				<ButtonAnchor to={'/register'}>Create New Account</ButtonAnchor>
			</div>
		</main>
	)
}

export default Login