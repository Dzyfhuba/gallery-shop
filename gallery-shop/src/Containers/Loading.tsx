import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

type Props = {
    isLoading: boolean
}

const Loading = (props: Props) => {
  return (
    <div className={`h-screen w-screen fixed flex z-50 bg-base justify-center items-center ${!props.isLoading && 'hidden'}`}>
        <ClipLoader />
    </div>
  )
}

export default Loading