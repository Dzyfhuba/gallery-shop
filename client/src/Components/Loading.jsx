import React from 'react'
import PropTypes from 'prop-types'
import ReactLoading from 'react-loading'

const Loading = (props) => {
	return (
		<ReactLoading type={props.type} color={props.color} height={'20%'} width={'20%'} {...props} />
	)
}

Loading.propTypes = {
	color: PropTypes.string,
	type: PropTypes.string
}

export default Loading