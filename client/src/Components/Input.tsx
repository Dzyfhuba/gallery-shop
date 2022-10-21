import React from 'react'
import RequiredStart from './RequiredStart'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  name?: string,
  placeholder?: string,
  [x: string]: unknown,
}

const Input = (props: Props) => {
  return (
    <div className="mb-3">
      <label htmlFor={props.label} className='block capitalize'>{props.label}{props.required && <RequiredStart/>}</label>
      <input type={props.type} name={props.name} id={props.name} placeholder={props.placeholder}
        className={`p-3 border rounded-xl w-full text-black ${props.className}`}
        onChange={props.onChange}
        {...props}
      />
    </div>
  )
}

export default Input