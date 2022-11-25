import React from 'react'
import ButtonAnchor from '../Components/ButtonAnchor'

type Props = {}

const PageNotFound = (props: Props) => {
  return (
    <div className='h-screen w-screen fixed bg-base z-50 flex flex-col justify-center items-center'>
        <h1>404</h1>
        <h1>
            Page Not Found
        </h1>
        <ButtonAnchor level='primary' to='/'>Back To Home</ButtonAnchor>
    </div>
  )
}

export default PageNotFound