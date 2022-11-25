import React from 'react'

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement>{
  //
}

const Label = (props: Props) => {
  return (
    <label {...props}>{props.children}</label>
  )
}

export default Label