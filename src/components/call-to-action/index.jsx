import React from 'react'
import "./call-to-action.css"

const CallToAction = ({backdrop, image, orientation, title, subtitle, content}) => {
  return (
    <section className={`
        call-to-action
        ${orientation === 'right' ? '-right' : ''}
        ${backdrop ? '-backdrop' : ''}
      `}
    >
      <img src={image} className="image" alt="description img"/>

      <div className="side-content">
        <div className="heading">
          <h3 className="title">
            {title}
          </h3>

          {subtitle ?
            <h4 className="subtitle">
              {subtitle}
            </h4> : ''
          }
        </div>

        <p className="content">
          {content}
        </p>
      </div>
    </section>
  )
}

export default CallToAction