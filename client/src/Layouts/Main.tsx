import React, { useEffect, useState } from 'react'
import Navbar from '../Containers/Navbar'
import Authentication from '../Utils/Authentication'

type Props = {
    children: React.ReactNode
}

const Main = (props: Props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  )
}

export default Main