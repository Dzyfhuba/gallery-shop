import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Input extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		type: PropTypes.string,
		placeholder: PropTypes.string,
		className: PropTypes.string,
		onChange: PropTypes.func,
	}

	static defaultProps = {
		type: 'text',
	}

	render() {
		return (
			<div className="mb-3">
				<label htmlFor={this.props.label} className='block capitalize'>{this.props.label}</label>
				<input type={this.props.type} name={this.props.name} id={this.props.name} placeholder={this.props.placeholder}
					className={`p-3 rounded-xl w-full text-black ${this.props.className}`}
					onChange={this.props.onChange}
					{...this.props}
				/>
			</div>
		)
	}
}
