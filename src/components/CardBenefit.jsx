import React from 'react'
import { cardSpecs, paragraphSmallText, textHeading3 } from '../data/uiStyle'

const CardBenefit = ({label, desc}) => {
  return (
    <div className={`${cardSpecs} flex flex-col gap-y-3`}>
      <div className={`bg-[#141414] rounded-lg p-3 w-fit flex justify-center items-center`}>
        <img src="" alt="icon" className="w-[24px] h-[24px]" />
      </div>
      <div className="pr-4">
        <div className={textHeading3}>{label}</div>
        <div className={paragraphSmallText}>{desc}</div>
      </div>
    </div>
  )
}

export default CardBenefit