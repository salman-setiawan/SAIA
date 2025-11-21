import React from 'react'
import {  } from '../data/uiStyle'
import LanguageToggle from './LanguageToggle'

const Navigation = () => {
  return (
    <div className='fixed top-0 z-999 flex justify-center w-full backdrop-blur-xs bg-[#0c0c0c]/50'>
      <div className="flex justify-between w-full items-center max-w-[980px] px-5 py-3">
        <img src="/vite.svg" alt="brand" className="w-7 h-7" />
        {/* <div className="flex gap-x-1">
          <button className={`px-2 py-1.5 ${textSmall} font-medium cursor-pointer hover:bg-[#202020] rounded-md`}>Home</button>
          <button className={`px-2 py-1.5 ${textSmall} font-medium cursor-pointer hover:bg-[#202020] rounded-md`}>About Us</button>
        </div> */}
        <LanguageToggle />
      </div>
    </div>
  )
}

export default Navigation