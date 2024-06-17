import React from 'react'
import "./grid-item.css"

const GridItem = ({title, description}) => {
  return (
    <div className="grid-item">
      <h2 className="title">{title}</h2>
      <h3 className="description">{description}</h3>
    </div>
  )
}

export default GridItem