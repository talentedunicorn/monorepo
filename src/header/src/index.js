import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"

const Header = ({title, subtitle}) => 
  <header>
    <h1>{ title }</h1>
    { subtitle && <p>{subtitle}</p>}
  </header>

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

export default Header

const domContainer = document.querySelector("#header-container")
const {title, subtitle} = domContainer.dataset
ReactDOM.render(<Header title={title} subtitle={subtitle} />, domContainer)
