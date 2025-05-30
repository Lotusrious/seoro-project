import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

const ProtectedRoute = () => {
  const { currentUser } = useAuth();

  // currentUser가 없으면 (로그인하지 않았으면) 로그인 페이지로 리디렉션
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // currentUser가 있으면 (로그인했으면) 자식 라우트(Outlet)를 렌더링
  return <Outlet />;
};

export default ProtectedRoute; 