import React from 'react'
import { textSemi } from '../data/uiStyle'
import ParallaxBanner from '../motion/ParallaxBanner'

const Footer = () => {
  return (
    <div className="relative w-full h-[320px] overflow-hidden">
      <ParallaxBanner
        src="/landscape.webp"
        height="h-[320px]"
        speed={0.3}
        pos='+'
        pospx='-1600px'
      />
      <div className="absolute top-0 left-0 px-4 pb-1 bg-[#0c0c0c] text-[32px] lg:text-[40px] font-semibold">AVELORA</div>
      <div className="absolute bottom-0 md:right-0 pl-3 pr-6 pt-4 md:pl-2 md:pr-2 md:pt-3 bg-[#0c0c0c] flex flex-col md:flex-row gap-y-4 gap-x-6">
        <div className="">
          <div className={`${textSemi} text-[12px] md:text-[14px] pl-1`}>Mail</div>
          <div className="px-1 py-0.5 hover:bg-[#202020] cursor-pointer w-fit text-[14px] md:text-[16px] font-medium">mail@avelora.com</div>
        </div>
        <div className="">
          <div className={`${textSemi} text-[12px] md:text-[14px] pl-1`}>Socials</div>
          <div className="flex gap-x-3">
            <div className="px-1 py-0.5 hover:bg-[#202020] cursor-pointer text-[14px] md:text-[16px] font-medium">Instagram</div>
            <div className="px-1 py-0.5 hover:bg-[#202020] cursor-pointer text-[14px] md:text-[16px] font-medium">Twitter</div>
            <div className="px-1 py-0.5 hover:bg-[#202020] cursor-pointer text-[14px] md:text-[16px] font-medium">Dribbble</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer