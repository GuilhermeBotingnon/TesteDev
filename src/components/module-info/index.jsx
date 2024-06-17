import React from 'react'
import "./module-info.css"

const ModuleInfo = ({icon, title, content}) => {
  return (
    <div className='module-info'>
      <img src={icon} alt="Module Image" className="icon"/>

      <div className="content">
        <h1>{title}</h1>

        {content}
      </div>
    </div>
  )
}

export default ModuleInfo