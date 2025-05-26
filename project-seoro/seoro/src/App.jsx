import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage'; // StitchLayoutPage 대신 MainPage를 import
import KeywordRecommendPage from './pages/KeywordRecommendPage'; // 추가된 라인
// import StitchLayoutPage from './pages/StitchLayoutPage'; // 이 라인 삭제

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/keyword-recommend" element={<KeywordRecommendPage />} /> {/* 추가된 라인 */}
        {/* 다른 페이지들에 대한 라우트를 여기에 추가합니다. */}
        {/* 예시: <Route path="/other1" element={<OtherPage1 />} /> */}
        {/* 예시: <Route path="/other2" element={<OtherPage2 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
