import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Textarea extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
  }

  handleResize (e) {
    const target = e.target
    target.style.height = 'auto'
    target.style.height = target.scrollHeight + 'px'
  }

  render() {
    return (
      <div className="mb-3">
        <label htmlFor={this.props.label} className='block capitalize'>{this.props.label}</label>
        <textarea name={this.props.name} id={this.props.name} placeholder={this.props.placeholder}
          className={`p-3 rounded-xl w-full ${this.props.className}`}
          onInput={this.handleResize}
          onChange={this.props.onChange}
          {...this.props}
        />
      </div>
    )
  }
}
