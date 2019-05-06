import React from "react"
import PropTypes from "prop-types"

const Card = ({title, content}) => 
  <article>
    <h2>{ title }</h2>
    <p>{ content }</p>
  </article>

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Card
