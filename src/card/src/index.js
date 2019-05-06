import React, {useState} from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"

const Card = ({title, content}) => { 
  const [newTitle, setTitle] = useState('') 

  return (
  <article>
    { newTitle ? (<h2>{ newTitle }</h2>) : (<h2>{ title }</h2>)} 
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

const wrapper = document.getElementById("card-container")
const {title, content} = wrapper.dataset
ReactDOM.render(<Card title={title} content={content}/>, wrapper)
