import React from 'react'

type Props = {
    children: React.ReactNode
}

const Main = (props: Props) => {
  return (
    <div className='bg-base min-h-screen'>
      {props.children}
    </div>
  )
}

export default Main