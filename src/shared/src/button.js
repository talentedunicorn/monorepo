import React from "react"
import ButtonStyles from "./button.module.css"

const Button = props => 
  <button onClick={props.onClick} className={ButtonStyles.Button}>
    {props.children}
  </button>

export default Button
