import React from 'react'
import Navbar from '../Containers/Navbar'
import PropTypes from 'prop-types'
import Main from '../Layouts/Main.tsx'

const Home = props => {
  return (
    <Main>
		Home
    </Main>
  )
}

Home.propTypes = {
  auth: PropTypes.any
}

export default Home