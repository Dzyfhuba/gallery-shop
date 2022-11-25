import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Level = {
  Primary: 'primary',
  Secondary: 'secondary',
} as const

type LevelType = typeof Level[keyof typeof Level]

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string,
    children: React.ReactNode,
    level?: LevelType,
    onClick?: React.MouseEventHandler,
    to: string,
    [x: string]: unknown,
}

class ButtonAnchor extends Component<Props> {
  state = {}
  
  static defaultProps: Props = {
    type: 'button',
    children: undefined,
    to: ''
  }
  
  render() {
    const {type, className, level, children, to, ...x} = this.props
    if (level === 'secondary') {
      return (
        <Link to={to} type={type} className={`px-5 py-2.5 rounded bg-transparent text-center text-black hover:bg-primary border border-primary transition-colors duration-300 ${className}`} {...x}>{children}</Link>
      )
    } else if (level === 'primary') {
      return (
        <Link to={to} type={type} className={`px-5 py-2.5 rounded bg-primary text-center text-black border-primary hover:bg-transparent border hover:border-5 transition-colors duration-300 ${className}`} {...x}>{children}</Link>
      )
    }
    return (
      <Link to={to} type={type} className={`px-5 py-2.5 rounded text-center ${className}`} {...x}>{children}</Link>
    )
  }
}

export default ButtonAnchor