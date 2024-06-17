import React from 'react';
import "./button.css";

const Button = ({text, variant}) => {
  return (
    <button className={`custom-button ${variant ? '-' + variant : '' }`} >
      {text}
    </button>
  )
}

export default Button;