import React from 'react'
import { cardSpecs, paragraphSmallText, textHeading3 } from '../data/uiStyle'

const CardBenefit = ({label, desc}) => {
  return (
    <div className={cardSpecs}>
      <div className={textHeading3}>{label}</div>
      <div className={paragraphSmallText}>{desc}</div>
    </div>
  )
}

export default CardBenefit