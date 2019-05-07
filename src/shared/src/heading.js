import React from "react"
import PropTypes from "prop-types"

const Heading = props => 
  <heading>
    <h1>{props.title}</h1>
  </heading>

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.integer.isRequired
}

export default Heading
