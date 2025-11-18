import React from 'react'
import { cardSpecs, paragraphSmallText, textHeading3 } from '../data/uiStyle'

const CardFeature = ({label, desc, img}) => {
  return (
    <div className={`${cardSpecs}`}>
      <img src={img} alt="feature img" className="h-[200px] w-full" />
      <div className="flex flex-col gap-y-1 pb-2">
        <div className={textHeading3}>{label}</div>
        <div className={paragraphSmallText}>{desc}</div>
      </div>
    </div>
  )
}

export default CardFeature