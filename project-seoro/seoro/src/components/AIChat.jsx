import React from 'react';

const AIChat = () => {
  return (
    <div>
      {' '}
      {/* Wrapper div for this section */}
      <h2 className="text-[#121715] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Talk to Seoro AI
      </h2>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <input
            placeholder="Recommend a family trip to Jeju"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121715] focus:outline-0 focus:ring-0 border-none bg-[#f0f4f3] focus:border-none h-14 placeholder:text-[#65867a] p-4 text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <div className="flex px-4 py-3 justify-center">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#137553] text-white text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Ask AI directly!</span>
        </button>
      </div>
    </div>
  );
};

export default AIChat;
