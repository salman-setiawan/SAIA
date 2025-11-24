import React, { useState } from 'react'
import { textSmall } from '../data/uiStyle'
import LanguageToggle from './LanguageToggle'
import { Link } from 'react-router-dom'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* NAVBAR */}
      <div className='fixed top-0 z-[999] flex justify-center w-full backdrop-blur-xs bg-[#0c0c0c]/35'>
        <div className="flex justify-between w-full items-center max-w-[1140px] px-4 py-3 relative">

          <img src="/vite.svg" alt="brand" className="w-[30px] h-[30px]" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-x-2">
            <Link to='/'>
              <button className={`px-2 h-[30px] ${textSmall} font-medium cursor-pointer hover:bg-[#202020] rounded-md`}>Home</button>
            </Link>
            <Link to='/pricing'>
              <button className={`px-2 h-[30px] ${textSmall} font-medium cursor-pointer hover:bg-[#202020] rounded-md`}>Pricing</button>
            </Link>
          </div>

          <div className="hidden md:flex gap-x-4">
            <button className={`px-2 h-[30px] text-[13px] font-medium cursor-pointer bg-blue-700 hover:bg-blue-900 rounded-md`}>Contact Us</button>
            <LanguageToggle />
          </div>

          {/* Mobile Hamburger Icon */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col gap-y-1 p-2 cursor-pointer hover:bg-[#202020] rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed top-13 inset-x-0 z-[998] backdrop-blur-xs bg-[#0c0c0c]/45 md:hidden">
          <div className="flex flex-col gap-y-6 p-4">
            <div className="flex flex-col gap-y-1">
              <Link to='/' onClick={() => setIsMobileMenuOpen(false)}>
                <button className={`w-full px-4 h-[48px] ${textSmall} font-medium cursor-pointer bg-[#0c0c0c] hover:bg-[#202020] rounded-md text-left`}>Home</button>
              </Link>
              <Link to='/pricing' onClick={() => setIsMobileMenuOpen(false)}>
                <button className={`w-full px-4 h-[48px] ${textSmall} font-medium cursor-pointer bg-[#0c0c0c] hover:bg-[#202020] rounded-md text-left`}>Pricing</button>
              </Link>
              <button className={`w-full px-4 h-[48px] ${textSmall} font-medium cursor-pointer bg-blue-700 hover:bg-blue-900 rounded-md text-left`}>Contact Us</button>
            </div>
            <div className="flex justify-end">
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navigation
