import React from 'react'
import {
  buttonSpecs,
  multibuttonSpecs,
  multibuttonActive,
  multibuttonInactive
} from '../data/uiStyle'

const Button = ({label, width, type = 'default', active = false, onClick}) => {

  const baseStyle = type === 'multi' ? multibuttonSpecs : buttonSpecs

  const stateStyle = type === 'multi'
    ? active ? multibuttonActive : multibuttonInactive
    : ''

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${stateStyle} ${width}`}
    >
      {label}
    </button>
  )
}

export default Button
