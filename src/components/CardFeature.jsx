import React from 'react'
import { cardSpecs, paragraphSmallText, textHeading3 } from '../data/uiStyle'

const CardFeature = ({label, desc, index}) => {
  const renderIllustration = () => {
    switch(index) {
      case 0: // Landing Page
        return (
          <div className="relative h-46 w-full rounded-md bg-gradient-to-br from-blue-500/60 via-blue-500/15 to-transparent overflow-hidden">
            <div className="absolute h-46 sm:w-[300px] inset-x-16 sm:inset-x-5 top-5 rounded-lg border border-white/20 bg-[#0c0c0c]/55 backdrop-blur shadow-sm">
              <div className="flex items-center justify-between px-3 py-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-300"></span>
                <div className="h-2.5 w-20 rounded bg-neutral-700"></div>
              </div>
              <div className="p-2.5 space-y-1.5">
                <div className="space-y-1">
                  <div className="h-1.5 w-24 rounded bg-blue-300"></div>
                  <div className="h-1.5 w-32 rounded bg-neutral-700"></div>
                </div>
                <div className="mt-3 flex gap-1.5">
                  <div className="h-10 flex-1 rounded-md bg-blue-300"></div>
                  <div className="h-10 flex-1 rounded-md bg-neutral-700"></div>
                </div>
              </div>
              <div className="p-2.5 space-y-1.5">
                <div className="space-y-1">
                  <div className="h-1.5 w-24 rounded bg-blue-300"></div>
                  <div className="h-1.5 w-32 rounded bg-neutral-700"></div>
                </div>
                <div className="mt-3 flex gap-1.5">
                  <div className="h-10 flex-1 rounded-md bg-neutral-700"></div>
                  <div className="h-10 flex-1 rounded-md bg-neutral-700"></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 1: // Company Profile Website
        return (
          <div className="relative h-46 w-full rounded-md bg-gradient-to-br from-blue-500/60 via-blue-500/15 to-transparent overflow-hidden">
            
            <div className="absolute h-46 sm:w-[300px] inset-x-16 sm:inset-x-5 top-5 rounded-lg border border-white/20 bg-[#0c0c0c]/55 backdrop-blur flex overflow-hidden">
              <div className="w-2/5 border-r border-neutral-800 p-2.5 space-y-2">
                <div className="h-6 w-6 rounded-full bg-blue-300 mx-auto"></div>
                <div className="space-y-1">
                  <div className="h-2 w-10 rounded bg-neutral-700 mx-auto"></div>
                  <div className="h-1.5 w-16 rounded bg-neutral-700 mx-auto"></div>
                </div>
              </div>
              <div className="flex-1 p-2.5 space-y-3">
                <div className="space-y-1">
                  <div className="h-2 w-24 rounded bg-blue-300"></div>
                  <div className="h-1.5 w-28 rounded bg-neutral-700"></div>
                  <div className="h-1.5 w-24 rounded bg-neutral-700"></div>
                </div>
                <div className="mt-1 grid grid-cols-3 gap-1.5">
                  <div className="h-8 rounded-lg bg-neutral-700"></div>
                  <div className="h-8 rounded-lg bg-neutral-700"></div>
                  <div className="h-8 rounded-lg bg-neutral-700"></div>
                  <div className="h-8 rounded-lg bg-neutral-700"></div>
                  <div className="h-8 rounded-lg bg-neutral-700"></div>
                  <div className="h-8 rounded-lg bg-neutral-700"></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 2: // Online Store
        return (
          <div className="relative h-46 w-full rounded-md bg-gradient-to-br from-blue-500/60 via-blue-500/15 to-transparent overflow-hidden">
            
            <div className="absolute h-46 sm:w-[300px] inset-x-16 sm:inset-x-5 top-5 rounded-lg border border-white/20 bg-[#0c0c0c]/55 backdrop-blur p-2.5 space-y-2">
              <div className="flex items-center justify-between">
                <div className="h-2.5 w-24 rounded bg-blue-300"></div>
                <div className="h-2.5 w-10 rounded bg-neutral-700"></div>
              </div>
              <div className="grid grid-cols-3 gap-x-1.5 gap-y-2">
                <div className="space-y-1">
                  <div className="h-8 rounded-md bg-neutral-700"></div>
                  <div className="h-1.5 w-10 rounded bg-neutral-700"></div>
                  <div className="h-1.5 w-7 rounded bg-blue-300"></div>
                </div>
                <div className="space-y-1">
                  <div className="h-8 rounded-md bg-neutral-700"></div>
                  <div className="h-1.5 w-10 rounded bg-neutral-700"></div>
                  <div className="h-1.5 w-7 rounded bg-blue-300"></div>
                </div>
                <div className="space-y-1">
                  <div className="h-8 rounded-md bg-neutral-700"></div>
                  <div className="h-1.5 w-10 rounded bg-neutral-700"></div>
                  <div className="h-1.5 w-7 rounded bg-blue-300"></div>
                </div>
                <div className="space-y-1">
                  <div className="h-8 rounded-md bg-neutral-700"></div>
                  <div className="h-1.5 w-10 rounded bg-neutral-700"></div>
                  <div className="h-1.5 w-7 rounded bg-blue-300"></div>
                </div>
                <div className="space-y-1">
                  <div className="h-8 rounded-md bg-neutral-700"></div>
                  <div className="h-1.5 w-10 rounded bg-neutral-700"></div>
                  <div className="h-1.5 w-7 rounded bg-blue-300"></div>
                </div>
                <div className="space-y-1">
                  <div className="h-8 rounded-md bg-neutral-700"></div>
                  <div className="h-1.5 w-10 rounded bg-neutral-700"></div>
                  <div className="h-1.5 w-7 rounded bg-blue-300"></div>
                </div>
              </div>
              <div className="flex justify-end pt-3 gap-x-2">
                <div className="h-4.5 w-16 rounded-lg bg-blue-300"></div>
                <div className="h-4.5 w-16 rounded-lg bg-blue-300"></div>
              </div>
            </div>
          </div>
        );
      case 3: // Custom Web App
        return (
          <div className="relative h-46 w-full rounded-md bg-gradient-to-br from-blue-500/60 via-blue-500/15 to-transparent overflow-hidden">
            
            <div className="absolute h-46 sm:w-[300px] inset-x-16 sm:inset-x-5 top-5 rounded-lg border border-white/20 bg-[#0c0c0c]/55 backdrop-blur p-2.5 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <div className="h-2.5 w-20 rounded bg-blue-300"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                <div className="space-y-1">
                  <div className="h-8 rounded-md bg-neutral-700"></div>
                  <div className="h-1.5 w-16 rounded bg-neutral-700"></div>
                  <div className="h-1.5 w-10 rounded bg-neutral-700"></div>
                </div>
                <div className="space-y-1.5">
                  <div className="h-10 rounded-md bg-neutral-700"></div>
                  <div className="h-1.5 w-14 rounded bg-blue-300"></div>
                </div>
                <div className="space-y-1.5">
                  <div className="h-6 rounded-md bg-neutral-700"></div>
                  <div className="grid grid-cols-2 gap-x-1.5">
                    <div className="h-6 rounded-md bg-neutral-700"></div>
                    <div className="h-6 rounded-md bg-neutral-700"></div>
                  </div>
                </div>
              </div>
              <div className="h-16 flex-1 rounded-lg bg-neutral-700"></div>
            </div>
          </div>
        );
      case 4: // ERP System
        return (
          <div className="relative h-46 w-full rounded-md bg-gradient-to-br from-blue-500/60 via-blue-500/15 to-transparent overflow-hidden">
            
            <div className="absolute h-46 sm:w-[300px] inset-x-16 sm:inset-x-5 top-5 rounded-lg border border-white/20 bg-[#0c0c0c]/55 backdrop-blur p-2.5">
              <div className="grid grid-cols-3 gap-2">
                <div className="relative flex items-center justify-center h-10 rounded-md bg-neutral-700">
                  <div className="h-2 w-10 rounded bg-blue-300"></div>
                </div>
                <div className="relative flex items-center justify-center h-10 rounded-md bg-neutral-700">
                  <div className="h-2 w-10 rounded bg-blue-300"></div>
                </div>
                <div className="relative flex items-center justify-center h-10 rounded-md bg-neutral-700">
                  <div className="h-2 w-10 rounded bg-blue-300"></div>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="mt-3 h-6 w-full text-blue-300" viewBox="0 0 120 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M10 4 L10 12 L60 12 L60 20" />
                <path d="M60 4 L60 12 L110 12 L110 20" />
              </svg>
              <div className="mt-1 flex justify-center gap-2">
                <div className="h-1.5 w-10 rounded bg-neutral-700"></div>
                <div className="h-1.5 w-10 rounded bg-neutral-700"></div>
                <div className="h-1.5 w-10 rounded bg-neutral-700"></div>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-4">
                <div className="relative flex items-center justify-center h-10 rounded-md bg-neutral-700">
                  <div className="h-2 w-10 rounded bg-blue-300"></div>
                </div>
                <div className="relative flex items-center justify-center h-10 rounded-md bg-neutral-700">
                  <div className="h-2 w-10 rounded bg-blue-300"></div>
                </div>
                <div className="relative flex items-center justify-center h-10 rounded-md bg-neutral-700">
                  <div className="h-2 w-10 rounded bg-blue-300"></div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${cardSpecs} space-y-4`}>
      {renderIllustration()}
      <div className="flex flex-col gap-y-1 pb-1">
        <div className={textHeading3}>{label}</div>
        <div className={`${paragraphSmallText} pr-4`}>{desc}</div>
      </div>
    </div>
  )
}

export default CardFeature