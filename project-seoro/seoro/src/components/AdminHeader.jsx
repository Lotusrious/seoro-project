import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { auth } from '../firebaseConfig';
import { IoIosArrowBack, IoMdGlobe } from 'react-icons/io';

const AdminHeader = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      alert('로그아웃 되었습니다.');
      navigate('/admin/login');
    } catch (error) {
      console.error('로그아웃 실패:', error);
      alert('로그아웃에 실패했습니다.');
    }
  };

  const handleGoBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <header className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleGoBack}
            className="bg-transparent text-white hover:text-gray-300 transition-colors"
            aria-label="뒤로가기"
          >
            <IoIosArrowBack size={24} />
          </button>
          <div className="text-xl font-bold">
            <Link to="/admin/dashboard" className="hover:text-gray-300">
              관리자 페이지
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="hover:text-gray-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="사용자 페이지로 이동"
          >
            <IoMdGlobe size={24} />
          </Link>
          {currentUser ? (
            <button
              onClick={handleLogout}
              className="bg-transparent font-medium hover:text-red-400 transition-colors"
            >
              로그아웃
            </button>
          ) : (
            <Link
              to="/admin/login"
              className="px-4 py-2 rounded bg-green-500 hover:bg-green-400 transition-colors"
            >
              로그인
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default AdminHeader; 