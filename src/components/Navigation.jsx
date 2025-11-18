import React from 'react'
import { textSmall } from '../data/uiStyle'
import LanguageToggle from './LanguageToggle'

const Navigation = () => {
  return (
    <div className='fixed top-0 z-10 flex justify-center w-full backdrop-blur-xs bg-[#0c0c0c]/10'>
      <div className="flex justify-between w-full items-center max-w-[980px] px-5 py-2">
        <img src="/vite.svg" alt="brand" className="w-8 h-8" />
        <div className="flex gap-x-1">
          <button className={`p-2 ${textSmall} font-medium cursor-pointer`}>Home</button>
          <button className={`p-2 ${textSmall} font-medium cursor-pointer`}>About Us</button>
        </div>
        <LanguageToggle />
      </div>
    </div>
  )
}

export default Navigation