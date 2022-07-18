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

	render() {
		return (
			<div className="mb-3">
				<label htmlFor={this.props.label} className='block capitalize'>{this.props.label}</label>
				<textarea name={this.props.name} id={this.props.name} placeholder={this.props.placeholder}
					className={`p-3 rounded-xl w-full ${this.props.className}`}
					onChange={this.props.onChange}
					{...this.props}
				/>
			</div>
		)
	}
}
