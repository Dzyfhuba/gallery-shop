import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import Button from '../Components/Button'
import ButtonAnchor from '../Components/ButtonAnchor'
import Input from '../Components/Input'
import Hosts from '../Utils/Hosts'

const Register = () => {
	const [name, setName] = useState(String)
	const [username, setUsername] = useState(String)
	const [email, setEmail] = useState(String)
	const [password, setPassword] = useState(String)
	const [confirmPassword, setConfirmPassword] = useState()
	const [same, setSame] = useState(true)
	const navigate = useNavigate()

	const handleChangeName = e => setName(e.target.value)
	const handleChangeEmail = e => setEmail(e.target.value)
	const handleChangeUsername = e => setUsername(e.target.value)
	const handleChangePassword = e => {
		setSame(e.target.value === confirmPassword)
		setPassword(e.target.value)
	}
	const handleChangeConfirmPassword = e => {
		setSame(e.target.value === password)
		setConfirmPassword(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()

		if(same) {
			const data = {name, username, email, password}
			console.log(data)
			axios.post(Hosts.main + '/register', data)
				.then(res => {
					console.log(res)
					if(res.data.error) {
						swal('Failed', res.data.message, res.data.status)
					} else {
						swal('Success', res.data.message, res.data.status)
							.then(navigate('/login'))
					}
				})
		}
	} 

	return (
		<main className='min-h-screen bg-primary flex items-center justify-center'>
			<div className="bg-secondary p-5 rounded-xl">
				<form onSubmit={handleSubmit}>
					<Input name={'name'} label='Nama' placeholder={'Masukkan Nama'} 
						onChange={handleChangeName}
						required/>
					<Input name={'username'} label='Username' placeholder={'Masukkan Username'} 
						onChange={handleChangeUsername}
						required/>
					<Input name={'email'} label='Email' placeholder={'Masukkan Email'} 
						onChange={handleChangeEmail}
						required/>
					<Input name={'password'} label='Password' type='password' placeholder={'Masukkan Password'} 
						onChange={handleChangePassword}
						required/>
					<Input name={'confirm_password'} label='Konfirmasi Password ' type='password' placeholder={'Masukkan Kembali Password'} 
						onChange={handleChangeConfirmPassword}
						required/>
					<small className={`text-red-400${same ? ' hidden' : ''}`}>Both passwords are not same</small>
					<div className="flex justify-end w-full">
						<Button type='submit'>Sign Up</Button>
					</div>
				</form>
				<hr className='my-5' />
				<ButtonAnchor to={'/login'}>Have Any Account?</ButtonAnchor>
			</div>
		</main>
	)
}

export default Register