import React from "react";
import ParallaxBanner from "./ParallaxBanner";
import DraggableModel from "./DraggableModel";
import Models from "../pages/Models";

const ParallaxWithModel = () => {
  return (
    <div className="relative w-full h-[320px] md:h-[640px] overflow-hidden">
      <ParallaxBanner
        src="/landscape.webp"
        height="h-[320px] md:h-[640px]"
        speed={0.35}
      />

      <div className="absolute inset-0 pointer-events-none">
        <DraggableModel>
          <div className="w-[540px] md:w-[720px] lg:w-[1080px]">
            <div className="scale-[0.6] md:scale-[0.9] origin-top-left">
              <div className="rounded-xl overflow-hidden shadow-2xl pointer-events-auto">
                <Models />
              </div>
            </div>
          </div>
        </DraggableModel>
      </div>
    </div>
  );
};

export default ParallaxWithModel;
