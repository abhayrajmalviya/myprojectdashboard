import React from 'react'
import Resume from '../data/ReactJS_Developer_Abhayraj_Malviya.pdf'

const Button = ({ bgColor, color, size, text, borderRadius }) => {
  return (
    <button
      type='button'
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      <a href={Resume}>{text}</a>
    </button>
  )
}

export default Button