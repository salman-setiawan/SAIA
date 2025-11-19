import React from 'react'
import { paragraphSmallText, textHeading3 } from '../data/uiStyle'

const CardUserflow = ({label, desc, num, index}) => {
  const renderIllustration = () => {
    switch(index) {
      case 0: // Step 1
        return ( 
          <div className={`relative h-48 w-full rounded-md bg-gradient-to-br from-blue-500/10 via-blue-300/8 to-transparent overflow-hidden`}>
            <div className="absolute inset-5 flex justify-center lg:justify-start lg:pl-4 items-center">
              <div className="flex gap-x-3">
                <div className="h-16 w-24 rounded-md bg-gradient-to-tl from-blue-800 to-blue-500 px-3 py-2 font-semibold shadow-lg shadow-black/30 flex items-end">1</div>
                <div className="h-16 w-24 rounded-md bg-gradient-to-tl from-blue-800 to-blue-500 px-3 py-2 font-semibold shadow-lg shadow-black/30 flex items-end">2</div>
                <div className="h-16 w-24 rounded-md bg-gradient-to-tl from-blue-800 to-blue-500 px-3 py-2 font-semibold shadow-lg shadow-black/30 flex items-end">3</div>
              </div>
            </div>
            <div className={`absolute bottom-1 left-1 p-3 bg-[#0c0c0c] rounded-lg flex items-center justify-center h-[40px] w-[40px] text-[20px] font-bold text-[#CAC8FF]`}>{num}</div>
          </div>
        );
      case 1: // Step 2
        return ( 
          <div className={`relative h-48 w-full rounded-md bg-gradient-to-br from-blue-500/10 via-blue-300/8 to-transparent overflow-hidden`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center w-[152px] h-[152px]">
                <div className='absolute top-2 left-1 rotate-[-8deg] p-1 flex justify-center rounded-lg bg-gradient-to-tl from-blue-600 to-blue-300 w-[38px] font-black text-black text-[20px] shadow-lg shadow-black/30'>
                  $
                </div>
                <div className='absolute rotate-[8deg] p-2 rounded-lg bg-gradient-to-tl from-[#181818] to-[#363636] h-[64px] shadow-lg shadow-black/30'>
                  <span className="material-symbols-outlined" style={{ fontSize: '48px' }}> qr_code_scanner </span>
                </div>
                <div className='absolute bottom-2 right-1 rotate-[32deg] p-1 flex justify-center rounded-lg bg-gradient-to-tl from-blue-600 to-blue-300 w-[38px] font-black text-black text-[20px] shadow-lg shadow-black/30'>
                  $
                </div>
              </div>
            </div>
            <div className={`absolute bottom-1 left-1 p-3 bg-[#0c0c0c] rounded-lg flex items-center justify-center h-[40px] w-[40px] text-[20px] font-bold text-[#CAC8FF]`}>{num}</div>
          </div>
        );
      case 2: // Step 3
        return ( 
          <div className={`relative h-48 w-full rounded-md bg-gradient-to-br from-blue-500/10 via-blue-300/8 to-transparent overflow-hidden`}>
            <div className="absolute inset-5 flex justify-center items-center">
              Illustration Here
            </div>
            <div className={`absolute bottom-1 left-1 p-3 bg-[#0c0c0c] rounded-lg flex items-center justify-center h-[40px] w-[40px] text-[20px] font-bold text-[#CAC8FF]`}>{num}</div>
          </div>
        );
      case 3: // Step 4
        return ( 
          <div className={`relative h-48 w-full rounded-md bg-gradient-to-br from-blue-500/10 via-blue-300/8 to-transparent overflow-hidden`}>
            <div className="absolute inset-5 flex justify-center items-center">
              Illustration Here
            </div>
            <div className={`absolute bottom-1 left-1 p-3 bg-[#0c0c0c] rounded-lg flex items-center justify-center h-[40px] w-[40px] text-[20px] font-bold text-[#CAC8FF]`}>{num}</div>
          </div>
        );
      case 4: // Step 5
        return ( 
          <div className={`relative h-48 w-full rounded-md bg-gradient-to-br from-blue-500/10 via-blue-300/8 to-transparent overflow-hidden`}>
            <div className="absolute inset-5 flex justify-center items-center">
              Illustration Here
            </div>
            <div className={`absolute bottom-1 left-1 p-3 bg-[#0c0c0c] rounded-lg flex items-center justify-center h-[40px] w-[40px] text-[20px] font-bold text-[#CAC8FF]`}>{num}</div>
          </div>
        );
      case 5: // Step 6
        return ( 
          <div className={`relative h-48 w-full rounded-md bg-gradient-to-br from-blue-500/10 via-blue-300/8 to-transparent overflow-hidden`}>
            <div className="absolute inset-5 flex justify-center items-center">
              <div className="relative top-[-36px] left-12 p-1 h-[32px] bg-gradient-to-tl from-blue-600 to-blue-300 rounded-full shadow-lg shadow-black/30 rotate-[-10deg]">
                <span className="material-symbols-outlined text-black" style={{ fontSize: '24px' }}> check </span>
              </div>
              <div className="relative top-2 left-[-10px] rotate-[-12deg] px-3 py-1 bg-white text-black font-bold rounded-full shadow-lg shadow-black/30">yourdomain.com</div>
            </div>
            <div className={`absolute bottom-1 left-1 p-3 bg-[#0c0c0c] rounded-lg flex items-center justify-center h-[40px] w-[40px] text-[20px] font-bold text-[#CAC8FF]`}>{num}</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {renderIllustration()}
      <div className={`flex flex-col gap-y-1 pb-6`}>
        <div className={textHeading3}>{label}</div>
        <div className={`${paragraphSmallText} pr-8`}>{desc}</div>
      </div>
    </div>
  )
}

export default CardUserflow