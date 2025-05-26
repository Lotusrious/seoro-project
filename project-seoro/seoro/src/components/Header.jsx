import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoSrc from '../assets/logo.png';

const Header = () => {
  const navigate = useNavigate();
  const menuItemStyle = "flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-white text-[#121715] text-sm font-medium leading-normal tracking-[0.015em] hover:bg-gray-200 transition-colors duration-150";

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-sm flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f4f3] px-4 sm:px-10 py-0.5 relative z-50">
      <div className="flex items-center gap-2 sm:gap-4 text-[#121715] cursor-pointer" onClick={handleLogoClick}>
        <img src={logoSrc} alt="Seoro Logo" className="size-20" />
      </div>
      <div className="flex flex-1 justify-end items-center gap-2 sm:gap-4 md:gap-8">
        <nav className="hidden md:flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-9">
          <button 
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-white text-[#121715] text-sm font-medium leading-normal tracking-[0.015em] hover:bg-gray-200 transition-colors duration-150"
          >
            <span className="truncate">이달의 키워드</span>
          </button>
          <button className={menuItemStyle}>
            <span className="truncate">여행 후기</span>
          </button>
        </nav>
        <div className="flex items-center gap-2">
          <button className={menuItemStyle} onClick={handleLoginClick}>
            <span className="truncate">로그인</span>
          </button>
          <button
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-white text-[#121715] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-gray-200 transition-colors duration-150"
          >
            <div className="text-[#121715]" data-icon="Globe" data-size="20px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
