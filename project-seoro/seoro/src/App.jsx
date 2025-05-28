import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import KeywordRecommendPage from './pages/KeywordRecommendPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/keyword-recommend" element={<KeywordRecommendPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* 다른 페이지들에 대한 라우트를 여기에 추가합니다. */}
        {/* 예시: <Route path="/other1" element={<OtherPage1 />} /> */}
        {/* 예시: <Route path="/other2" element={<OtherPage2 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
