import React from 'react';
import bannerImg from '../assets/banner.png';

const Hero = () => {
  return (
    <div className="@container h-full">
      <div className="@[480px]:p-4 h-full">
        <div
          className="flex h-full min-h-[480px] flex-col gap-6 bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.2) 100%), url(${bannerImg})`,
            backgroundSize: '100% auto',
          }}
        >
          <div className="flex flex-col gap-2 text-center">
            <h1
              className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
            >
              Seoro
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
              Let's connect, Seoro.
            </h2>
          </div>
          <div className="flex-wrap gap-3 flex justify-center mt-6">
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#137553] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
            >
              <span className="truncate">View By Region</span>
            </button>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#f0f4f3] text-[#121715] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
            >
              <span className="truncate">View By Keyword</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
