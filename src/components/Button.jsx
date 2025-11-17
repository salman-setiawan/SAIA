import React from 'react'
import { buttonSpecs } from '../data/uiStyle'

const Button = ({label, width}) => {
  return (
    <button className={`${buttonSpecs} ${width}`}>
      {label}
    </button>
  )
}

export default Button