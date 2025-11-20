import React from 'react'
import { cardSpecs, paragraphSmallText, textHeading3 } from '../data/uiStyle'

const CardBenefit = ({ icon, label, desc }) => {
  return (
    <div className={`${cardSpecs} relative flex flex-col gap-y-3`}>
      <div className={`bg-[#141414]/60 border-2 border-neutral-300/8 backdrop-blur rounded-lg p-2 w-fit flex justify-center items-center shadow-xl shadow-black/30`}>
        <span className="material-symbols-outlined text-blue-300" style={{ fontSize: '28px' }}>
          {icon}
        </span>
      </div>
      <div className="space-y-1">
        <div className={textHeading3}>{label}</div>
        <div className={paragraphSmallText}>{desc}</div>
      </div>
    </div>
  )
}

export default CardBenefit