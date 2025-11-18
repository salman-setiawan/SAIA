import React from 'react'
import { cardSpecs, paragraphSmallText, textHeading3 } from '../data/uiStyle'

const CardUserflow = ({label, desc, num}) => {
  return (
    <div className="flex flex-col gap-1">
      <div className={`${cardSpecs} flex items-center justify-center h-[40px] w-[40px] text-[20px] font-bold text-[#CAC8FF]`}>{num}</div>
      <div className={`${cardSpecs} flex flex-col gap-y-1 min-w-[340px] h-full`}>
        <div className={textHeading3}>{label}</div>
        <div className={`${paragraphSmallText} pr-4`}>{desc}</div>
      </div>
    </div>
  )
}

export default CardUserflow