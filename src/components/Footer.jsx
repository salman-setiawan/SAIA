import React from 'react'
import { textSemi } from '../data/uiStyle'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="relative w-full h-[320px] bg-[url('/landscape.webp')] bg-cover bg-center overflow-hidden">
      {/* <ParallaxBanner
        src="/landscape.webp"
        height="h-[320px]"
        speed={0.3}
        pos='+'
        pospx='-2200px'
      /> */}
      <div className="absolute top-0 left-0 px-4 pb-1 bg-[#0c0c0c] text-[32px] lg:text-[40px] font-semibold">AEVENIC</div>
      <div className="absolute bottom-0 md:right-0 pl-3 pr-6 pt-4 md:pl-2 md:pr-3 md:pt-2.5 bg-[#0c0c0c] flex flex-col md:flex-row gap-y-4 gap-x-6">
        <div>
          <div className={`${textSemi} text-[12px] md:text-[14px] pl-1`}>Mail</div>
          <Link to='mailto:aevenic@gmail.com' target='_blank' rel='noopener noreferrer'>
            <button className="px-1 py-0.5 hover:bg-[#202020] cursor-pointer w-fit text-[14px] md:text-[16px] font-medium rounded">aevenic@gmail.com</button>
          </Link>
        </div>
        <div>
          <div className={`${textSemi} text-[12px] md:text-[14px] pl-1`}>Socials</div>
          <div className="flex gap-x-3">
            <Link to='https://instagram.com/aevenic' target='_blank' rel='noopener noreferrer'>
              <button className="px-1 py-0.5 hover:bg-[#202020] cursor-pointer text-[14px] md:text-[16px] font-medium rounded"> Instagram </button>
            </Link>
            <Link to='https://x.com/aevenic' target='_blank' rel='noopener noreferrer'>
              <button className="px-1 py-0.5 hover:bg-[#202020] cursor-pointer text-[14px] md:text-[16px] font- rounded"> Twitter </button>
            </Link>
            <Link to='https://dribbble.com/aevenic-studio' target='_blank' rel='noopener noreferrer'>
              <button className="px-1 py-0.5 hover:bg-[#202020] cursor-pointer text-[14px] md:text-[16px] font-medium rounded"> Dribbble </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer