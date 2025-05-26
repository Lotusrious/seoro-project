import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SignupPage = () => {
  const mainColor = '#C69F7C';
  const mainColorHover = '#B08D6D';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center bg-stone-100 py-12 px-4 sm:px-6 lg:px-8 mt-24">
        <div className="max-w-md w-full space-y-8 p-10 bg-white shadow-xl rounded-2xl">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              회원가입
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email-address-signup" className="sr-only">
                이메일 주소
              </label>
              <input
                id="email-address-signup"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm mb-2"
                placeholder="이메일 주소"
              />
            </div>
            <div>
              <label htmlFor="nickname-signup" className="sr-only">
                닉네임
              </label>
              <input
                id="nickname-signup"
                name="nickname"
                type="text"
                autoComplete="nickname"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm mb-2"
                placeholder="닉네임"
              />
            </div>
            <div>
              <label htmlFor="password-signup" className="sr-only">
                비밀번호
              </label>
              <input
                id="password-signup"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm mb-2"
                placeholder="비밀번호 (8자 이상)"
              />
            </div>
            <div>
              <label htmlFor="password-confirm-signup" className="sr-only">
                비밀번호 확인
              </label>
              <input
                id="password-confirm-signup"
                name="password-confirm"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                placeholder="비밀번호 확인"
              />
            </div>

            <div className="flex items-center">
              <input
                id="terms-agreement"
                name="terms-agreement"
                type="checkbox"
                required
                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
              />
              <label htmlFor="terms-agreement" className="ml-2 block text-sm text-gray-900">
                이용약관 및 개인정보처리방침에 동의합니다.
              </label>
            </div>

            <div className="pt-4"> {/* 간격 조정 */}
              <button
                type="submit"
                style={{ backgroundColor: mainColor }}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = mainColorHover}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = mainColor}
              >
                회원가입
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignupPage; 