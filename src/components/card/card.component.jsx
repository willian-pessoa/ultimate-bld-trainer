import React from 'react'
import "./card.styles.scss";

function Card({pair}) {
  return (
    <div className='card-container'>{pair}</div>
  )
}

export default Card