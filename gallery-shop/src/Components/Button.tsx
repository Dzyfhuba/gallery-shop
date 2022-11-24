import React, { Component } from 'react'

const Level = {
  Primary: 'primary',
  Secondary: 'secondary',
} as const

type Level = typeof Level[keyof typeof Level]

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    children: React.ReactNode,
    level?: Level,
    onClick?: React.MouseEventHandler,
    [x: string]: unknown,
}

class Button extends Component<Props> {
  state = {}

  static defaultProps: Props = {
    type: 'button',
    children: undefined
  }

  render() {
    const {type, className, level, children, ...x} = this.props
    if (level === 'secondary') {
      return (
        <button type={type} className={`px-5 py-2.5 bg-transparent text-black hover:bg-primary border border-yellow-500 transition-colors duration-300 ${className}`} {...x}>{children}</button>
      )
    } else if (level === 'primary') {
      return (
        <button type={type} className={`px-5 py-2.5 bg-primary text-black border-yellow-500 hover:bg-transparent border hover:border-5 transition-colors duration-300 ${className}`} {...x}>{children}</button>
      )
    }
    return (
      <button type={type} className={`px-5 py-2.5 rounded ${className}`} {...x}>{children}</button>
    )
  }
}

export default Button