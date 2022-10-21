import axios from 'axios'
import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import secureLocalStorage from 'react-secure-storage'
import swal from 'sweetalert'
import Button from '../Components/Button'
import ButtonAnchor from '../Components/ButtonAnchor'
import Input from '../Components/Input'

const Login = () => {
  const [email, setEmail] = useState(String)
  const [password, setPassword] = useState(String)
  const navigate = useNavigate()

  const handleChangeEmail = e => setEmail(e.target.value)
  const handleChangePassword = e => setPassword(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    let token = secureLocalStorage.getItem('token') || {type: '', token: ''}
    const data = {
      email,
      password
    }

    axios.post('http://localhost:3333/login', data, {
      headers: {
        'Authorization': `${token.type} ${token.token}`
      },
    })
      .then(res => {
        console.log(res.data)
        if(res.data.status == 'success') {
          swal('Success', res.data.message, res.data.status)
            .then(async () => {
              // localStorage.setItem('user', JSON.stringify(res.data.user))
              secureLocalStorage.setItem('user', res.data.user)
              secureLocalStorage.setItem('token', res.data.user)
            })
            .then(() => {
              window.location.href = '/'
            })
        } else if(res.data.status == 'warning') {
          swal('Warning', res.data.message, res.data.status)
            .then(navigate('/'))
        } else {
          swal('Failed', res.data.message, res.data.status)
        }
      })
      .catch(err => console.log(err))

    console.log(data)
  }

  return (
    <main className='min-h-screen bg-base flex items-center justify-center'>
      <div className="p-5 rounded-xl bg-white shadow">
        <form onSubmit={handleSubmit}>
          <Input name={'email'} label='Email' placeholder={'Masukkan Email1'} onChange={handleChangeEmail} required/>
          <Input name={'password'} label='Password' type='password' placeholder={'Masukkan Password'} onChange={handleChangePassword} required/>
          <div className="flex justify-end w-full">
            <Button level='primary' type='submit'>Login</Button>
          </div>
        </form>
        <hr className='my-5' />
        <ButtonAnchor to={'/register'}>Create New Account</ButtonAnchor>
      </div>
    </main>
  )
}

export default Login