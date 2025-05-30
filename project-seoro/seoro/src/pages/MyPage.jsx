import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../contexts/AuthContext';

const MyPage = () => {
  const { currentUser } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center bg-stone-100 py-12 px-4 sm:px-6 lg:px-8 mt-24">
        <div className="max-w-md w-full space-y-8 p-10 bg-white shadow-xl rounded-2xl">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            마이페이지
          </h2>
          {currentUser && (
            <div>
              <p className="text-center">환영합니다, {currentUser.displayName || currentUser.email}님!</p>
              <p className="text-center text-sm text-gray-600">이 페이지는 로그인한 사용자만 볼 수 있습니다.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyPage; 