import React, {useState} from "react"
import PropTypes from "prop-types"

import CardStyles from "./card.module.css"

const Card = ({title, content}) => { 
  const [newTitle, setTitle] = useState('') 

  return (
  <article className={CardStyles.Card}>
    { newTitle ? (<h2 className={CardStyles.Title}>{ newTitle }</h2>) : (<h2 className={CardStyles.Title}>{ title }</h2>)} 
    <p>{ content }</p>
    <label>
      <span>Change card title</span>
      <input value={newTitle} onChange={e => setTitle(e.target.value)} />
    </label>
  </article>)
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Card
