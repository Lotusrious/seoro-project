import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import { GoogleLogin } from 'react-google-login';

const LoginPage = () => {
  // const responseGoogle = (response) => {
  //   console.log(response);
  //   // 실제 로그인 처리 로직 (백엔드와 통신 등)
  // };

  // 연갈색-연베이지 색상 테마
  const mainColor = '#C69F7C'; // 따뜻한 연갈색
  const mainColorHover = '#B08D6D'; // 조금 더 어두운 연갈색 (호버용)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center bg-stone-100 py-16 px-4 sm:px-6 lg:px-8 mt-24">
        <div className="max-w-md w-full space-y-10 p-10 bg-white shadow-xl rounded-2xl">
          <div>
            <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
              로그인
            </h2>
          </div>
          <form className="mt-10 space-y-8" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  이메일 주소
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                  placeholder="이메일 주소"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  비밀번호
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                  placeholder="비밀번호"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  로그인 상태 유지
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-amber-700 hover:text-amber-600"
                >
                  비밀번호를 잊으셨나요?
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                style={{ backgroundColor: mainColor }}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = mainColorHover)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = mainColor)
                }
              >
                로그인
              </button>
            </div>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-gray-500">
                  또는 다음으로 계속
                </span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4">
              <div>
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <img
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google logo"
                    className="w-5 h-5 mr-3"
                  />
                  Google 계정으로 로그인
                </button>
              </div>
            </div>

            <div className="mt-6 text-center text-sm">
              <p className="text-gray-600">
                계정이 없으신가요?
                <Link
                  to="/signup"
                  className="font-medium text-amber-700 hover:text-amber-600 ml-1"
                >
                  회원가입
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
