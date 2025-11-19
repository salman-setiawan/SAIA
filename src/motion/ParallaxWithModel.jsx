import React from "react";
import ParallaxBanner from "./ParallaxBanner";
import DraggableModel from "./DraggableModel";
import Models from "../pages/Models";
import { useLanguage } from "../components/LanguageContext";
import { baseNeutral100 } from "../data/uiStyle";

const ParallaxWithModel = () => {
  const { language } = useLanguage();
  return (
    <div className="relative w-full h-[320px] md:h-[640px] overflow-hidden">
      <ParallaxBanner
        src="/landscape.webp"
        height="h-[320px] md:h-[640px]"
        speed={0.4}
        pos='-'
        pospx='-200px'
      />

      <div className="absolute inset-0 pointer-events-none flex justify-center items-center top-84 right-19 sm:right-0">
        <DraggableModel>
          <div className="w-[540px] md:w-[800px] lg:w-[1080px] xl:w-[1400px]">
            <div className="scale-[0.6] md:scale-[0.9] rounded-xl overflow-hidden shadow-2xl pointer-events-auto">
              <Models />
            </div>
          </div>
        </DraggableModel>
      </div>

      <div className='absolute bottom-2 right-2 md:bottom-5 md:left-1/2 md:-translate-x-1/2 md:w-fit'>
        <div className={`px-3 py-2 ${baseNeutral100} text-[12px] lg:text-[14px] font-medium`}>{language === 'en' ? 'Try to drag the UI.' : 'Coba Geser UI nya.'}</div>
      </div>

    </div>
  );
};

export default ParallaxWithModel;
