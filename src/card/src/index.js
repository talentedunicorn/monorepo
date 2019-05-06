import React from "react"
import ReactDOM from "react-dom"
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

const wrapper = document.getElementById("card-container")
const {title, content} = wrapper.dataset
ReactDOM.render(<Card title={title} content={content}/>, wrapper)
