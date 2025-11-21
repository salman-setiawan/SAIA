import React from 'react'
import { paragraphSmallText, textHeading3 } from '../data/uiStyle'
import Button from '../components/Button';

const CardUserflow = ({label, desc, num, index}) => {
  const renderIllustration = () => {
    switch(index) {
      case 0: // Step 1
        return ( 
          <div className={`relative h-48 w-full rounded-md bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent overflow-hidden`}>
            <div className="absolute inset-5 flex justify-center sm:justify-start sm:pl-4 items-center">
              <div className="flex gap-x-3">
                <div className="relative h-16 w-24 rounded-md bg-gradient-to-tl from-blue-800 to-blue-500 px-3 py-2 font-semibold shadow-lg shadow-black/30 flex items-end">
                1
                <div className="absolute bottom-3 right-3 w-10 h-1.5 bg-white rounded-full"></div>
                <div className="absolute top-[-8px] left-5 py-0.5 bg-[#141414]/85 border-1 border-blue-200/30 rounded-md text-[10px] text-center shadow-lg shadow-black/30 w-[68px]">Best Deal</div>
                </div>
                <div className="relative h-16 w-24 rounded-md border-2 border-blue-200/10 bg-[#181818]/40 backdrop-blur px-3 py-2 font-semibold shadow-lg shadow-black/30 flex items-end">
                2
                <div className="absolute bottom-3 right-3 w-10 h-1.5 bg-white rounded-full"></div>
                </div>
                <div className="relative h-16 w-24 rounded-md border-2 border-blue-200/10 bg-[#181818]/40 backdrop-blur px-3 py-2 font-semibold shadow-lg shadow-black/30 flex items-end">
                3
                <div className="absolute bottom-3 right-3 w-10 h-1.5 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <div className={`absolute bottom-1.5 left-1.5 p-3 bg-[#0c0c0c] rounded-lg flex items-center justify-center h-[40px] w-[40px] text-[20px] font-bold text-blue-300`}>{num}</div>
          </div>
        );
      case 1: // Step 2
        return ( 
          <div className={`relative h-48 w-full rounded-md bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent overflow-hidden`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center w-[152px] h-[152px]">
                <div className='absolute top-2 left-1 rotate-[-8deg] p-1 flex justify-center rounded-lg bg-gradient-to-tl from-blue-600 to-blue-300 w-[38px] font-black text-black text-[20px] shadow-lg shadow-black/30'>
                  $
                </div>
                <div className='absolute rotate-[8deg] p-2 rounded-lg bg-[#181818]/40 backdrop-blur border-2 border-blue-300 h-[66px] shadow-lg shadow-black/30'>
                  <span className="material-symbols-outlined" style={{ fontSize: '48px' }}> qr_code_scanner </span>
                </div>
                <div className='absolute bottom-2 right-1 rotate-[32deg] p-1 flex justify-center rounded-lg bg-gradient-to-tl from-blue-600 to-blue-300 w-[38px] font-black text-black text-[20px] shadow-lg shadow-black/30'>
                  $
                </div>
              </div>
            </div>
            <div className={`absolute bottom-1.5 left-1.5 p-3 bg-[#0c0c0c] rounded-lg flex items-center justify-center h-[40px] w-[40px] text-[20px] font-bold text-blue-300`}>{num}</div>
          </div>
        );
      case 2: // Step 3
        return ( 
          <div className={`relative h-48 w-full rounded-md bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent overflow-hidden`}>
            <div className="absolute inset-5 flex justify-center items-center">
            <div className="relative w-full max-w-xs">
              <div className="p-3 rounded-md border border-blue-200/10 bg-[#181818]/40 backdrop-blur">
                <div className="flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <p className="text-[10px] uppercase text-blue-300"> Project brief </p>
                    <p className="text-[14px]"> Tell us about your product </p>
                  </div>
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tl from-blue-600 to-blue-300"></span>
                </div>
                <div className="mt-2 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="h-4 w-4">
                      <span className="block h-full w-full rounded bg-gradient-to-tl from-blue-600 to-blue-300"></span>
                    </span>
                    <p className="text-[11px] text-white/70"> Goals & Success Metrics </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded border border-slate-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span>
                    </span>
                    <p className="text-[11px] text-slate-300"> Target Audience & Users </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded border border-slate-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span>
                    </span>
                    <p className="text-[11px] text-slate-300"> Brand & Constraints </p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-3 -bottom-2 rounded-md border border-blue-200/10 bg-[#181818]/40 p-2 backdrop-blur-xs shadow-lg shadow-black/30 w-[140px]">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-4 items-center justify-center rounded-full bg-gradient-to-tl from-blue-600 to-blue-300">
                  </div>
                  <div className="">
                    <p className="text-[12px] font-medium">
                      Kickoff call
                    </p>
                    <p className="text-[11px] text-white/60">
                      30 min discovery
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className={`absolute bottom-1.5 left-1.5 p-3 bg-[#0c0c0c] rounded-lg flex items-center justify-center h-[40px] w-[40px] text-[20px] font-bold text-blue-300`}>{num}</div>
          </div>
        );
      case 3: // Step 4
        return ( 
          <div className={`relative h-48 w-full rounded-md bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent overflow-hidden`}>
            <div className="absolute inset-4 top-20 sm:w-[325px] flex justify-center items-center">
              <div className="relative w-full space-y-1.5">
                <div className="flex items-center justify-between rounded-md border border-blue-200/10 bg-[#0c0c0c]/70 px-3 py-2 text-xs backdrop-blur">
                  <div className="flex items-center gap-2 text-slate-200">
                    Revision Round
                  </div>
                  <div className="flex items-center gap-3 text-[12px]">
                    <span className="h-2 w-20 rounded-full bg-[#353535]">
                      <span className="block h-full w-2/3 rounded-full bg-blue-500"></span>
                    </span>
                    <span className="text-white/60">2 / 3</span>
                  </div>
                </div>
                <div className="relative flex h-40 items-center justify-center rounded-md border border-blue-200/10 bg-[#181818]/40 backdrop-blur p-3">
                  <div className="absolute top-2 left-2.5 flex justify-between w-full">
                    <div className="text-[11px] font-medium">Design Review v1.28</div>
                    <div className="text-[11px] font-medium text-blue-300 pr-5">Button Component</div>
                  </div>
                  <Button label='This is a Button' />
                </div>
              </div>
            </div>
            <div className={`absolute bottom-1.5 left-1.5 p-3 bg-[#0c0c0c] rounded-lg flex items-center justify-center h-[40px] w-[40px] text-[20px] font-bold text-blue-300`}>{num}</div>
          </div>
        );
      case 4: // Step 5
        return ( 
          <div className={`relative h-48 w-full rounded-md bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent overflow-hidden`}>
            <div className="absolute inset-5 flex justify-center items-center gap-x-6">
              <div className="p-2 border border-blue-200/10 bg-[#181818]/50 backdrop-blur rounded-md text-[11px]">
                <div className="text-blue-200">function <span className='text-orange-300'>App</span><span className="text-yellow-300">() {"{"}</span></div>
                <div className="pl-3">console.<span className="text-orange-300">log</span> <span className="text-purple-300">('Hello World')</span></div>
                <div className="text-yellow-300">{"}"}</div>
              </div>
              <span className="material-symbols-outlined bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent" style={{ fontSize: '48px', fontVariationSettings: "'FILL' 1" }}> cloud_done </span>
            </div>
            <div className={`absolute bottom-1.5 left-1.5 p-3 bg-[#0c0c0c] rounded-lg flex items-center justify-center h-[40px] w-[40px] text-[20px] font-bold text-blue-300`}>{num}</div>
          </div>
        );
      case 5: // Step 6
        return ( 
          <div className={`relative h-48 w-full rounded-md bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent overflow-hidden`}>
            <div className="absolute inset-5 flex justify-center items-center">
              <div className="relative top-[-36px] left-12 p-1 h-[32px] bg-gradient-to-tl from-blue-600 to-blue-300 rounded-full shadow-lg shadow-black/30 rotate-[-10deg]">
                <span className="material-symbols-outlined text-black" style={{ fontSize: '24px', fontVariationSettings: "'FILL' 1" }}> check_circle </span>
              </div>
              <div className="relative top-2 left-[-10px] rotate-[-12deg] px-3 py-1 bg-white text-black font-bold rounded-full shadow-lg shadow-black/30">yourdomain.com</div>
            </div>
            <div className={`absolute bottom-1.5 left-1.5 p-3 bg-[#0c0c0c] rounded-lg flex items-center justify-center h-[40px] w-[40px] text-[20px] font-bold text-blue-300`}>{num}</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {renderIllustration()}
      <div className="flex gap-x-2.5">
        <div className="mt-1 hidden xl:block min-w-4 max-h-4 bg-gradient-to-tl from-blue-600 to-blue-300 rounded-full shadow-lg shadow-black/30"></div>
        <div className={`flex flex-col gap-y-1 pb-6`}>
          <div className={textHeading3}>{label}</div>
          <div className={`${paragraphSmallText} pr-8`}>{desc}</div>
        </div>
      </div>
    </div>
  )
}

export default CardUserflow