import React from 'react';

const Hero = () => {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0CQyMDvxRlPmM5AEqSZiElDy1XiC3h1XtE_16iNzpDM3QZBld3llI_LJBUHl5ZhsUlBm4DEtmaI2VYFzQIWwLmKaGZ2wJCX7dRl6pdBngcnvHN2WEH6ojdTLTcnulp2aFNEeqqgc2a7X1zoFoNYZROQqGMEsCNwpejcwg40PZdZmecoLdx_UniwEbkcsTr1OAzwDfK_DdxGSjkBq4RdnrfnHG9129LEllLfYmnm3BLfbMQOnysInup4a6MZffytohbzVPfbBXI4BV")',
          }}
        >
          <div className="flex flex-col gap-2 text-center">
            <h1
              className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
            >
              AI Explains Korean Travel Trends
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
              Discover this month's top travel trends in Korea for foreign tourists.
            </h2>
          </div>
          <div className="flex-wrap gap-3 flex justify-center">
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
