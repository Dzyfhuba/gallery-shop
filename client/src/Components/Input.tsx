import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  name?: string,
  placeholder?: string,
  [x: string]: unknown,
}

const Input = (props: Props) => {
  return (
    <div className="mb-3">
      <label htmlFor={props.label} className='block capitalize'>{props.label}</label>
      <input type={props.type} name={props.name} id={props.name} placeholder={props.placeholder}
        className={`p-3 rounded-xl w-full text-black ${props.className}`}
        onChange={props.onChange}
        {...props}
      />
    </div>
  )
}

export default Input