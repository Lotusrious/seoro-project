import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import AdminProtectedRoute from './components/AdminProtectedRoute';
import AdminLayout from './components/admin/AdminLayout';

// 페이지 컴포넌트 임포트
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
// import MapPage from './pages/MapPage'; // 사용하지 않으면 주석 처리 또는 삭제
// import CommunityPage from './pages/CommunityPage';
// import MyPage from './pages/MyPage';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import ImageCardManagementPage from './pages/admin/ImageCardManagementPage';

// 빈 페이지 컴포넌트 (임시)
const TempPage = ({ title }) => <div style={{ padding: '20px', textAlign: 'center' }}><h1>{title}</h1><p>내용 준비중입니다.</p></div>;

const MapPage = () => <TempPage title="지도 서비스" />;
const CommunityPage = () => <TempPage title="커뮤니티" />;
const MyPage = () => <TempPage title="마이페이지" />;
const LoginPage = () => <TempPage title="로그인" />;
const RegisterPage = () => <TempPage title="회원가입" />;


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* 일반 사용자 라우트 */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* 관리자 라우트 */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          
          {/* AdminLayout을 사용하는 보호된 관리자 라우트 */}
          <Route element={<AdminProtectedRoute><AdminLayout /></AdminProtectedRoute>}>
            <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
            <Route path="/admin/image-card-management" element={<ImageCardManagementPage />} />
            {/* 여기에 다른 관리자 페이지 라우트를 추가할 수 있습니다. */}
          </Route>

          {/* 일치하는 라우트가 없을 경우 홈으로 리다이렉트 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App; 