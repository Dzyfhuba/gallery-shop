import React, { useState } from 'react'
import Button from '../Components/Button'
import Input from '../Components/Input'
import Label from '../Components/Label'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { host } from '../Variables/Server'
import Swal from 'sweetalert2'
import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin'
import { useNavigate } from 'react-router-dom'

type Props = {}

const LoginForm = (props: Props) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigate = useNavigate()

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    const body = {
      email,
      password
    }

    console.log(body)

    const response = await axios.post(host + '/login', body)
      .then((res:AxiosResponse) => {
        Swal.fire('Login Successfully', undefined, 'success')
          .then(async ({isConfirmed}) => {
            if (isConfirmed) {
              await SecureStoragePlugin.set({
                key: 'token',
                value: res.data
              })
              navigate('/admin')
            }
          })
        return res
      })
      .catch((err:AxiosError) =>{
        if (err.status === 401) {
          Swal.fire('Wrong email/username or password', undefined, 'error')
        } else {
          Swal.fire(err.name, err.message, 'error')
        }
        return err
      })

    console.log(response)
  }
    
  return (
    <form className='flex flex-col gap-1 p-3 rounded-md shadow-md' onSubmit={handleSubmit}>
        <Label htmlFor='email'>Email</Label>
        <Input name='email' type={'email'} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
        <Label htmlFor='password'>Password</Label>
        <Input name='password' type={'password'} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
        <Button type='submit' level='primary' className='w-fit ml-auto'>Submit</Button>
    </form>
  )
}

export default LoginForm