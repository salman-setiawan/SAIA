import React from 'react'
import { cardSpecs, paragraphSmallText, textHeading3 } from '../data/uiStyle'

const CardBenefit = ({ icon, label, desc }) => {
  return (
    <div className={`${cardSpecs} flex flex-col gap-y-3`}>
      <div className={`bg-[#141414] rounded-lg p-2 w-fit flex justify-center items-center`}>
        <span
          className="material-symbols-outlined text-[#8EC5FF]"
          style={{ fontSize: '32px', fontVariationSettings: "'opsz' 32" }}
        >
          {icon || 'workspace_premium'}
        </span>
      </div>
      <div className="space-y-1 pr-4">
        <div className={textHeading3}>{label}</div>
        <div className={paragraphSmallText}>{desc}</div>
      </div>
    </div>
  )
}

export default CardBenefit