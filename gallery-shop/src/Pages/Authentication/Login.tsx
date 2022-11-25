import React from 'react'
import LoginForm from '../../Containers/LoginForm'
import Main from '../../Layouts/Main'

type Props = {}

const Login = (props: Props) => {
  return (
    <Main className='bg-base h-[60vh] flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-bold text-center'>
        Login
      </h1>
      <LoginForm />
    </Main>
  )
}

export default Login