import React from "react"
import PropTypes from "prop-types"

import CardStyles from "./card.module.css"

const Card = ({title, content}) => 
  <article className={CardStyles.Card}>
    <h3 className={CardStyles.Title}>{ title }</h3>
    <p>{ content }</p>
  </article>

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string
}

export default Card
