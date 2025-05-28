import React from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImg from '../assets/banner.png';

const Hero = () => {
  const navigate = useNavigate();

  const handleKeywordButtonClick = () => {
    navigate('/keyword-recommend');
  };

  return (
    <div className="@container h-full">
      <div className="@[480px]:p-4 h-full">
        <div
          className="flex h-full min-h-[480px] flex-col items-center justify-end gap-6 bg-center bg-no-repeat p-4 @[480px]:gap-8 @[480px]:rounded-xl"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.2) 100%), url(${bannerImg})`,
            backgroundSize: '100% auto',
          }}
        >
          <div className="flex-grow"></div>
          <div className="flex flex-wrap justify-center gap-3 pb-32">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#137553] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-[#0f573d] transition-colors duration-150">
              <span className="truncate">지역별로 보기</span>
            </button>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#FBF7F0] text-[#4A5B51] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-[#EADECF] transition-colors duration-150"
              onClick={handleKeywordButtonClick}
            >
              <span className="truncate">키워드별로 보기</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
