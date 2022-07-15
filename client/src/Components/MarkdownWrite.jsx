import PropTypes from 'prop-types'
import React, { Component } from 'react'
import SimpleMDE from 'simplemde'

export default class MarkdownWrite extends Component {
	constructor(props){
		super(props)
		this.target = document.querySelector('markdownWrite')
		this.markdown = new SimpleMDE({
			element: this.target
		})
	}

	static propTypes = {
		name: PropTypes.string
	}

	render() {
		return (
			<textarea name={this.props.name} id="markdownWrite"></textarea>
		)
	}
}