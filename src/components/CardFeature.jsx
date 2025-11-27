import React from 'react'
import { cardSpecs, textHeading3 } from '../data/uiStyle'
import Button from '../components/Button';

const CardFeature = ({label, desc, index}) => {
  const renderIllustration = () => {
    switch(index) {
      case 0: // Landing Page
        return (
          <div className="relative h-100 w-full rounded-md overflow-hidden">
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-[#0c0c0c]"></div>
            <div className="absolute h-124 w-[480px] left-1 md:left-24 top-5 rounded-lg border-2 border-white/8 bg-[#181818] p-2.5 space-y-6">
              <div className="flex items-center justify-between">
                <span className="h-3 w-3 rounded-full bg-blue-300"></span>
                <div className="flex gap-x-1">
                  <div className="h-2 w-6 rounded bg-blue-300"></div>
                  <div className="h-2 w-6 rounded bg-blue-300"></div>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex flex-col justify-center gap-y-1.5 pl-4">
                  <div className="space-y-1">
                    <div className="h-1.5 w-20 rounded bg-neutral-700"></div>
                    <div className="h-1.5 w-32 rounded bg-neutral-700"></div>
                  </div>
                  <div className="h-2 w-8 rounded bg-blue-300"></div>
                </div>
                <div className="columns-2 space-y-1 gap-x-1">
                  <div className="h-8 rounded-md bg-neutral-700"></div>
                  <div className="h-14 rounded-md bg-neutral-700"></div>
                  <div className="h-14 rounded-md bg-neutral-700"></div>
                  <div className="h-8 rounded-md bg-neutral-700"></div>
                </div>
              </div>
              <div className="h-6 rounded-md bg-neutral-700"></div>
              <div className="space-y-3">
                <div className="gap-y-1 flex flex-col items-center">
                  <div className="h-1.5 w-20 rounded bg-neutral-700"></div>
                  <div className="h-1.5 w-32 rounded bg-neutral-700"></div>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <div className="space-y-1">
                    <div className="h-16 flex-1 rounded-md bg-neutral-700"></div>
                    <div className="h-1.5 w-20 rounded bg-neutral-700"></div>
                    <div className="h-1.5 w-32 rounded bg-neutral-700"></div>
                    <div className="h-2 w-8 rounded bg-blue-300"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-16 flex-1 rounded-md bg-neutral-700"></div>
                    <div className="h-1.5 w-20 rounded bg-neutral-700"></div>
                    <div className="h-1.5 w-32 rounded bg-neutral-700"></div>
                    <div className="h-2 w-8 rounded bg-blue-300"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-16 flex-1 rounded-md bg-neutral-700"></div>
                    <div className="h-1.5 w-20 rounded bg-neutral-700"></div>
                    <div className="h-1.5 w-32 rounded bg-neutral-700"></div>
                    <div className="h-2 w-8 rounded bg-blue-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 1: // Company Profile Website
        return (
          <div className="relative h-100 w-full rounded-md overflow-hidden">
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-[#0c0c0c]"></div>
            <div className="absolute h-124 w-[480px] left-1 md:left-24 top-5 rounded-lg border-2 border-white/8 bg-[#181818] p-2.5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="h-3 w-3 rounded-full bg-blue-300"></span>
                <div className="flex gap-x-1">
                  <div className="h-2 w-6 rounded bg-blue-300"></div>
                  <div className="h-2 w-6 rounded bg-blue-300"></div>
                  <div className="h-2 w-6 rounded bg-blue-300"></div>
                  <div className="h-2 w-6 rounded bg-blue-300"></div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex gap-x-1.5">
                    <div className="h-32 w-full rounded-md bg-neutral-700"></div>
                    <div className="h-32 w-2/5 rounded-md bg-neutral-700"></div>
                  </div>
                  <div className="flex flex-col justify-center gap-y-1.5">
                    <div className="space-y-1">
                      <div className="h-1.5 w-20 rounded bg-neutral-700"></div>
                      <div className="h-1.5 w-32 rounded bg-neutral-700"></div>
                    </div>
                    <div className="h-2 w-8 rounded bg-blue-300"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="h-full rounded-md bg-neutral-700"></div>
                  <div className="space-y-1.5">
                    <div className="h-18 rounded-md bg-neutral-700"></div>
                    <div className="h-18 rounded-md bg-neutral-700"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 2: // Online Store
        return (
          <div className="relative h-100 w-full rounded-md overflow-hidden">
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-[#0c0c0c]"></div>
            <div className="absolute h-124 w-[480px] left-1 md:left-24 top-5 rounded-lg border-2 border-white/8 bg-[#181818] p-2.5 space-y-2">
              <div className="flex items-center justify-between">
                <div className="h-2.5 w-12 rounded bg-blue-300"></div>
                <div className="h-2.5 w-24 rounded bg-neutral-700"></div>
              </div>
              <div className="flex w-full">
                <div className="w-2/6 pt-1 space-y-8">
                  <div className="space-y-1">
                    <div className="h-3 w-24 rounded bg-neutral-700"></div>
                    <div className="h-1.5 w-16 rounded bg-neutral-700"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1.5 w-16 rounded bg-neutral-700"></div>
                    <div className="h-1.5 w-16 rounded bg-neutral-700"></div>
                    <div className="h-1.5 w-16 rounded bg-neutral-700"></div>
                    <div className="h-1.5 w-16 rounded bg-neutral-700"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1.5 w-16 rounded bg-neutral-700"></div>
                    <div className="h-1.5 w-16 rounded bg-neutral-700"></div>
                    <div className="h-1.5 w-16 rounded bg-neutral-700"></div>
                    <div className="h-1.5 w-16 rounded bg-neutral-700"></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-x-1.5 gap-y-2 w-full">
                  <div className="space-y-1">
                    <div className="h-16 rounded-md bg-neutral-700"></div>
                    <div className="h-1 w-12 rounded bg-neutral-700"></div>
                    <div className="h-1 w-18 rounded bg-neutral-700"></div>
                    <div className="h-2 w-7 rounded bg-blue-300"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-16 rounded-md bg-neutral-700"></div>
                    <div className="h-1 w-12 rounded bg-neutral-700"></div>
                    <div className="h-1 w-18 rounded bg-neutral-700"></div>
                    <div className="h-2 w-7 rounded bg-blue-300"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-16 rounded-md bg-neutral-700"></div>
                    <div className="h-1 w-12 rounded bg-neutral-700"></div>
                    <div className="h-1 w-18 rounded bg-neutral-700"></div>
                    <div className="h-2 w-7 rounded bg-blue-300"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-16 rounded-md bg-neutral-700"></div>
                    <div className="h-1 w-12 rounded bg-neutral-700"></div>
                    <div className="h-1 w-18 rounded bg-neutral-700"></div>
                    <div className="h-2 w-7 rounded bg-blue-300"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-16 rounded-md bg-neutral-700"></div>
                    <div className="h-1 w-12 rounded bg-neutral-700"></div>
                    <div className="h-1 w-18 rounded bg-neutral-700"></div>
                    <div className="h-2 w-7 rounded bg-blue-300"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-16 rounded-md bg-neutral-700"></div>
                    <div className="h-1 w-12 rounded bg-neutral-700"></div>
                    <div className="h-1 w-18 rounded bg-neutral-700"></div>
                    <div className="h-2 w-7 rounded bg-blue-300"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-16 rounded-md bg-neutral-700"></div>
                    <div className="h-1 w-12 rounded bg-neutral-700"></div>
                    <div className="h-1 w-18 rounded bg-neutral-700"></div>
                    <div className="h-2 w-7 rounded bg-blue-300"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-16 rounded-md bg-neutral-700"></div>
                    <div className="h-1 w-12 rounded bg-neutral-700"></div>
                    <div className="h-1 w-18 rounded bg-neutral-700"></div>
                    <div className="h-2 w-7 rounded bg-blue-300"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-16 rounded-md bg-neutral-700"></div>
                    <div className="h-1 w-12 rounded bg-neutral-700"></div>
                    <div className="h-1 w-18 rounded bg-neutral-700"></div>
                    <div className="h-2 w-7 rounded bg-blue-300"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-16 rounded-md bg-neutral-700"></div>
                    <div className="h-1 w-12 rounded bg-neutral-700"></div>
                    <div className="h-1 w-18 rounded bg-neutral-700"></div>
                    <div className="h-2 w-7 rounded bg-blue-300"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-16 rounded-md bg-neutral-700"></div>
                    <div className="h-1 w-12 rounded bg-neutral-700"></div>
                    <div className="h-1 w-18 rounded bg-neutral-700"></div>
                    <div className="h-2 w-7 rounded bg-blue-300"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-16 rounded-md bg-neutral-700"></div>
                    <div className="h-1 w-12 rounded bg-neutral-700"></div>
                    <div className="h-1 w-18 rounded bg-neutral-700"></div>
                    <div className="h-2 w-7 rounded bg-blue-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 3: // Custom Web App
        return (
          <div className="relative h-100 w-full rounded-md overflow-hidden">
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-[#0c0c0c]"></div>
            <div className="absolute h-124 w-[480px] left-1 md:left-24 top-5 rounded-lg border-2 border-white/8 bg-[#181818] p-2.5 space-y-2">
              <div className="flex items-center justify-between">
                <div className="h-2.5 w-8 rounded bg-blue-300"></div>
                <div className="flex gap-x-1">
                  <div className="h-2.5 w-24 rounded bg-neutral-700"></div>
                  <div className="h-2.5 w-8 rounded bg-blue-300"></div>
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-1/5 pt-1 space-y-8">
                  <div className="space-y-1">
                    <div className="h-1.5 w-16 rounded bg-neutral-700"></div>
                    <div className="h-1.5 w-16 rounded bg-neutral-700"></div>
                    <div className="h-1.5 w-16 rounded bg-neutral-700"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1.5 w-16 rounded bg-neutral-700"></div>
                    <div className="h-1.5 w-16 rounded bg-neutral-700"></div>
                    <div className="h-1.5 w-16 rounded bg-neutral-700"></div>
                    <div className="h-1.5 w-16 rounded bg-neutral-700"></div>
                    <div className="h-1.5 w-16 rounded bg-neutral-700"></div>
                    <div className="h-1.5 w-16 rounded bg-neutral-700"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1.5 w-16 rounded bg-neutral-700"></div>
                    <div className="h-1.5 w-16 rounded bg-neutral-700"></div>
                  </div>
                </div>
                <div className="space-y-2 w-full">
                  <div className="h-24 rounded-md bg-neutral-700"></div>
                  <div className="grid grid-cols-2 gap-x-1.5">
                    <div className="h-16 rounded-md bg-neutral-700"></div>
                    <div className="h-16 rounded-md bg-neutral-700"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-x-1.5 gap-y-2 w-full">
                    <div className="space-y-1">
                      <div className="h-16 rounded-md bg-neutral-700"></div>
                      <div className="h-1 w-12 rounded bg-neutral-700"></div>
                      <div className="h-1 w-18 rounded bg-neutral-700"></div>
                      <div className="h-2 w-7 rounded bg-blue-300"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-16 rounded-md bg-neutral-700"></div>
                      <div className="h-1 w-12 rounded bg-neutral-700"></div>
                      <div className="h-1 w-18 rounded bg-neutral-700"></div>
                      <div className="h-2 w-7 rounded bg-blue-300"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-16 rounded-md bg-neutral-700"></div>
                      <div className="h-1 w-12 rounded bg-neutral-700"></div>
                      <div className="h-1 w-18 rounded bg-neutral-700"></div>
                      <div className="h-2 w-7 rounded bg-blue-300"></div>
                    </div>
                  </div>
                  <div className="h-24 rounded-md bg-neutral-700"></div>
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
    <div className='relative w-full space-y-1'>
      {renderIllustration()}
      <div className={`${cardSpecs} absolute bottom-0 right-1 w-[420px] z-10 flex flex-col gap-y-5 pt-10 pb-4`}>
        <div className="space-y-1.5">
          <div className={textHeading3}>{label}</div>
          <div className={`text-[14px] md:text-[15px] text-justify text-white/60 pr-8`}>{desc}</div>
        </div>
        <Button label='See Our Template' />
      </div>
    </div>
  )
}

export default CardFeature