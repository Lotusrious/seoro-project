import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx'; // 기존 AuthContext 사용

// AdminProtectedRoute는 children prop을 받아야 합니다.
const AdminProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useAuth(); // loading 상태 추가
  const location = useLocation();

  if (loading) {
    // 인증 상태 및 역할 정보를 로드하는 중이면 아무것도 렌더링하지 않거나 로딩 스피너를 표시
    // console.log('AdminProtectedRoute: Auth state is loading...');
    return null; // 또는 <LoadingSpinner /> 같은 컴포넌트
  }

  // TODO: currentUser가 관리자 권한을 가지고 있는지 확인하는 로직 추가 필요
  // 예: if (!currentUser || !currentUser.isAdmin) { ... }
  // Firebase Custom Claims를 사용하거나, Firestore에서 사용자 역할 정보를 가져와 확인할 수 있습니다.

  // 로딩이 끝난 후, currentUser가 없거나 isAdmin 플래그가 true가 아닌 경우
  if (!currentUser || currentUser.isAdmin !== true) {
    console.log(
      'AdminProtectedRoute: Access denied after loading. Redirecting to /admin/login.',
      {
        isLoggedIn: !!currentUser,
        isAdmin: currentUser ? currentUser.isAdmin : undefined,
        targetPath: location.pathname,
      }
    );
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  // 로딩이 끝났고, currentUser가 있으며 isAdmin이 true인 경우
  // console.log('AdminProtectedRoute: Access granted.', { currentUser });
  return children; 
};

export default AdminProtectedRoute; 