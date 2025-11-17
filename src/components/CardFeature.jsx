import React from 'react'
import { cardSpecs, paragraphSmallText, textHeading3 } from '../data/uiStyle'

const CardFeature = ({label, desc}) => {
  return (
    <div className={cardSpecs}>
    <div className="flex flex-col gap-y-4">
      <div>
        <div className={textHeading3}>{label}</div>
        <div className={paragraphSmallText}>{desc}</div>
      </div>
    </div>
  </div>
  )
}

export default CardFeature