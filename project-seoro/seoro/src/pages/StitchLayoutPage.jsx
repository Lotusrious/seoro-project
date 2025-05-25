import React from 'react';

// index.html의 각 섹션에 해당하는 컴포넌트들을 import 합니다.
import Header from '../components/Header';
import Hero from '../components/Hero';
import Keywords from '../components/Keywords';
import Regions from '../components/Regions';
import AIChat from '../components/AIChat';
import Features from '../components/Features';
// MapPreview는 아직 컴포넌트가 없는 것 같으므로, html 구조를 일단 유지하거나 나중에 추가합니다.
// ReviewsSection에 해당하는 컴포넌트도 아직 명확하지 않아 보입니다. (InfiniteFeed.jsx 또는 Banner.jsx 일수도 있습니다.)
// Footer 컴포넌트 이름이 Footer.jsx 와 일치하는지 확인 필요 (현재 Footer.jsx는 매우 작음)
import Footer from '../components/Footer'; // Footer.jsx의 내용이 실제 푸터인지 확인 필요

// index.html에 있는 Tailwind CDN은 React 프로젝트에서는 보통 사용하지 않습니다.
// Tailwind CSS는 빌드 과정에 포함되어야 합니다. (이미 설정된 것으로 보입니다)

function StitchLayoutPage() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <Header /> {/* Header 컴포넌트 사용 */}

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <Hero />
            <Keywords />
            <Regions />
            <AIChat />
            <Features />

            {/* Map Preview 섹션 - 해당 컴포넌트가 있다면 교체 */}
            <h2 className="text-[#121715] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Map Preview</h2>
            <div className="flex px-4 py-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl object-cover"
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmUbHfCT5CxaWm7BU2h__rD3nWQ9vO2KKso-DpCfmXC1O3Ut596vXbRVWTHVK6iZn_ZlltQtlQUWdIxIVkT8WvX91iCWQg8lm1x3a7UJCtbJZnJDtB5suVmO7dHVtqh8stlSYo5AI6sGZEqHxIkGgyvyi6nUPKmg6GE6ugIHxPM-l8cawoIsBXicZNA4cKOQG5VAoQ1Stp5xylpLwnKaa1AGAlVNY9FxTlHzoEszmNeKAFqhU4XA3s15Z3Fhy60NgjP4PTyCkGyJat")'}}
              ></div>
            </div>
            <div className="flex px-4 py-3 justify-center">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f0f4f3] text-[#121715] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">View Recommended Itinerary</span>
              </button>
            </div>

            {/* Hot Reviews Now 섹션 - InfiniteFeed.jsx 또는 Banner.jsx를 사용할 수 있습니다. 또는 별도 컴포넌트 필요 */}
            <h2 className="text-[#121715] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Hot Reviews Now</h2>
            {/* <InfiniteFeed /> 또는 <Banner /> 또는 다른 리뷰 관련 컴포넌트 */}
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
              {/* temp content for review items */}
              <div className="flex items-stretch p-4 gap-3">
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuByovMyDfOQxntCZ85Ulh7Kb426u9hffSZY45PYblaH1U2Gb5-kZAdsxr_TUDp2DlnqhmM_hHldi8pEaUQsTqFMPce_8Nex8Wtw52n-qotc_sVqa9HZJAf-kStU_dGKPKbGoTSOY6fx1o2A6OQ205YsITrCx-KnQBNE6ToG61WD5IIxBxegdGqS-eFch8OP1lS-zQsDU0Cf8D9xvBamV2P6-lWg0vjenvDHTgY-B4kHozcnhUh3VKk4YJGFhDQvoNpIoq2FPzFOaKLG")'}}
                  ></div>
                  <div>
                    <p className="text-[#121715] text-base font-medium leading-normal">Gyeongbokgung Palace</p>
                    <p className="text-[#65867a] text-sm font-normal leading-normal">A grand palace with rich history and beautiful architecture.</p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCX4K4xd6v1nkRUQbSHnJzTGwyVXkN87bHu_90ZXeeT3kAFdqBBpqWFo610pmZ4REfabdEdkYt0EzG0XHYRs6vmjuiPZE7CoQWbAyPe8F9fmXqgZ4FCGiC8UsKbPy5Kfjk-vIGTNk3DdRBhlYTrRVKcK9kdWEnGlbg0AFU5TxJ12bGgRa8PVufkovWlgnyO03h_f3ADmtP-XIAy_sgoIEf47-kxD0ia-a-UW7muJsUnIH91DVkisjyMsHkXunSHFQg7oPaachzelWBq")'}}
                  ></div>
                  <div>
                    <p className="text-[#121715] text-base font-medium leading-normal">Myeongdong Street</p>
                    <p className="text-[#65867a] text-sm font-normal leading-normal">A bustling shopping district with street food and fashion.</p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCurD8u8zS4ergqWL4zFDfSwFbBivUNFJnSLdi3os8BiSxg8i0gU-kk-3qNQ_IsUYt2ccKkDiHChMjGB6R7hmIfp_EUOD3y2O5koZBTV2smeQIZpOpmQgcqrOROThd23MGfSvp2ZqsGL64195ZZgeDHu_ogKhQOClAK9p7Z5hZbKnN6NAp-4oUUaTcRplnKbLGC9MLymKh6ktN_FiPIFiykKNBvjnuhozfSGjOIjQkALIsMbbbxczA7dtL0pp3jgTCJb1iKfJIPu28s")'}}
                  ></div>
                  <div>
                    <p className="text-[#121715] text-base font-medium leading-normal">Seoraksan National Park</p>
                    <p className="text-[#65867a] text-sm font-normal leading-normal">A stunning national park with hiking trails and scenic views.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <Footer /> {/* Footer 컴포넌트 사용 - 내용 확인 필요 */}
      </div>
    </div>
  );
}

export default StitchLayoutPage; 