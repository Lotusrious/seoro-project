import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import KeywordRecommendPage from './pages/KeywordRecommendPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import MyPage from './pages/MyPage';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminProtectedRoute from './components/AdminProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/keyword-recommend" element={<KeywordRecommendPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/mypage" element={<MyPage />} />
        </Route>

        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route element={<AdminProtectedRoute />}>
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        </Route>

        {/* 다른 페이지들에 대한 라우트를 여기에 추가합니다. */}
        {/* 예시: <Route path="/other1" element={<OtherPage1 />} /> */}
        {/* 예시: <Route path="/other2" element={<OtherPage2 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
