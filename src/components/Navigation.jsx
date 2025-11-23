import React from 'react'
import { textSmall } from '../data/uiStyle'
import LanguageToggle from './LanguageToggle'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='fixed top-0 z-999 flex justify-center w-full backdrop-blur-xs bg-[#0c0c0c]/50'>
      <div className="flex justify-between w-full items-center max-w-[1140px] px-4 py-3">
        <img src="/vite.svg" alt="brand" className="w-8 h-8" />
        <div className="flex gap-x-2">
          <Link to='/'>
            <button className={`px-2 h-[30px] ${textSmall} font-medium cursor-pointer hover:bg-[#202020] rounded-md`}>Home</button>
          </Link>
          <Link to='/pricing'>
            <button className={`px-2 h-[30px] ${textSmall} font-medium cursor-pointer hover:bg-[#202020] rounded-md`}>Pricing</button>
          </Link>
        </div>
        <div className="flex gap-x-3">
          <button className={`px-2 h-[30px] ${textSmall} font-medium cursor-pointer bg-blue-700 hover:bg-blue-900 rounded-md`}>Contact Us</button>
          <LanguageToggle />
        </div>
      </div>
    </div>
  )
}

export default Navigation