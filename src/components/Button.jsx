import React from 'react'

import {
  buttonSpecs,
  multibuttonSpecs,
  multibuttonActive,
  multibuttonInactive
} from '../data/uiStyle'
import { Link } from 'react-router-dom'

const Button = ({label, width, type = 'default', active = false, onClick, url}) => {

  const baseStyle = type === 'multi' ? multibuttonSpecs : buttonSpecs

  const stateStyle = type === 'multi'
    ? active ? multibuttonActive : multibuttonInactive
    : ''

  return (
    <Link to={url}>
      <button onClick={onClick} className={`${baseStyle} ${stateStyle} ${width}`}>
        {label}
      </button>
    </Link>
  )
}

export default Button
