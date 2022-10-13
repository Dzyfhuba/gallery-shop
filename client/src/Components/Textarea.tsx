import React, { AreaHTMLAttributes } from 'react'

interface Props extends React.AreaHTMLAttributes<HTMLTextAreaElement> {
  label?: string,
  name?: string,
  placeholder?: string,
  [x: string]: unknown,
}

const Textarea = (props: Props) => {
  const handleResize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target
    target.style.height = 'auto'
    target.style.height = target.scrollHeight + 'px'
  }
  return (
    <div className="mb-3">
      <label htmlFor={props.label} className='block capitalize'>{props.label}</label>
      <textarea name={props.name} id={props.name} placeholder={props.placeholder}
        className={`p-3 rounded-xl w-full ${props.className}`}
        onInput={handleResize}
        {...props}
      />
    </div>
  )
}

export default Textarea