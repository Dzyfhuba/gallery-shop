import React, { Component } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import Button from './Button';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string,
    className?: string,
}

type State = {
  isShow: boolean
}

class Input extends Component<Props, State> {
  public static defaultProps = {
    type: 'text',
  }
  state = {
    isShow: false
  }

  render() {
    const {type, name, className, ...x} = this.props
    if (type === 'password') {
      return (
        <div className="relative">
          <input name={name} className={`w-full p-3 border border-neutral-300 rounded-xl ${className}`} type={this.state.isShow ? 'text' : type} {...x} />
          <Button className='absolute h-full right-0' onClick={() => this.setState({isShow: !this.state.isShow  })} tabIndex={-1}>
            {
              this.state.isShow ? (
                <BsEyeFill className='text-2xl opacity-50' />
              ) : (
                <BsEyeSlashFill className='text-2xl opacity-50' />
              )
            }
          </Button>
        </div>
      )
    }
    return (
      <input name={name} type={type} className={`w-full p-3 border border-neutral-300 rounded-xl ${className}`} {...x} />
    )
  }
}

export default Input