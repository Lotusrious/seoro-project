import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext.jsx';

function AdminDashboardPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = '관리자페이지';
    // 컴포넌트 언마운트 시 원래 제목으로 돌리고 싶다면:
    // return () => {
    //   document.title = '원래 페이지 제목'; // 메인 페이지 제목 등으로 변경
    // };
  }, []);

  // TODO: 로그인 상태 확인 로직 필요 (예: 인증된 사용자만 접근 가능) -> AdminProtectedRoute가 처리

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/admin/login');
      console.log('Admin logged out successfully');
    } catch (error) {
      console.error('Failed to log out admin:', error);
      // 사용자에게 로그아웃 실패 알림 (필요시)
    }
  };

  return (
    <div>
      <h1>관리자 대시보드</h1>
      <p>환영합니다, 관리자님!</p>
      {/* TODO: 여기에 관리자 기능들을 추가합니다. */}
      {/* 예: 이미지 카드 관리, 사용자 관리 등 */}
      <div>
        <h2>이미지 카드 관리</h2>
        {/* 카드 목록, 추가, 수정, 삭제 UI가 여기에 들어갑니다. */}
        <p>이미지 카드 관리 기능이 여기에 표시됩니다.</p>
      </div>
      <button 
        onClick={handleLogout} 
        className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg focus:outline-none focus:shadow-outline"
      >
        로그아웃
      </button>
    </div>
  );
}

export default AdminDashboardPage; 