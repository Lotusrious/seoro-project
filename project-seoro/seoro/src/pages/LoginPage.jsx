import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { app } from '../firebaseConfig.js';
// import { GoogleLogin } from 'react-google-login';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPasswordReset, setShowPasswordReset] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const navigate = useNavigate();
  const auth = getAuth(app);

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // 로그인 성공 처리
      setLoading(false);
      // console.log('로그인 성공:', userCredential.user);
      // TODO: 로그인 성공 후 사용자 상태 관리 (예: Context API, Redux)
      alert('로그인에 성공했습니다! 메인 페이지로 이동합니다.'); // 임시 알림
      navigate('/'); // 메인 페이지로 이동 (경로는 실제 프로젝트에 맞게 수정)

    } catch (err) {
      setLoading(false);
      // Firebase 오류 코드에 따른 메시지 처리 (예시)
      // 참고: https://firebase.google.com/docs/auth/admin/errors
      let errorMessage = '로그인 중 오류가 발생했습니다. 다시 시도해주세요.';
      switch (err.code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-credential': // 최신 SDK에서는 이 오류 코드가 나올 수 있음
          errorMessage = '이메일 또는 비밀번호가 올바르지 않습니다.';
          break;
        case 'auth/invalid-email':
          errorMessage = '유효하지 않은 이메일 형식입니다.';
          break;
        case 'auth/too-many-requests':
          errorMessage = '너무 많은 로그인 시도가 있었습니다. 잠시 후 다시 시도해주세요.';
          break;
      }
      setError(errorMessage);
      console.error('Firebase Login Error:', err);
    }
  };

  const handleGoogleLogin = async () => {
    setError(''); // 이전 오류 메시지 초기화
    setLoading(true); // 로딩 상태 시작 (버튼 등 UI 변경 위함)
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      // Google 로그인 성공
      setLoading(false);
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // const user = result.user;
      // console.log('Google 로그인 성공:', user, '토큰:', token);
      alert('Google 로그인에 성공했습니다! 메인 페이지로 이동합니다.'); // 임시 알림
      navigate('/'); // 메인 페이지로 이동

    } catch (err) {
      setLoading(false);
      // Firebase 오류 코드에 따른 메시지 처리 (예시)
      let errorMessage = 'Google 로그인 중 오류가 발생했습니다. 다시 시도해주세요.';
      switch (err.code) {
        case 'auth/popup-closed-by-user':
          errorMessage = 'Google 로그인 팝업이 사용자에 의해 닫혔습니다.';
          break;
        case 'auth/cancelled-popup-request':
           errorMessage = 'Google 로그인 요청이 여러 번 발생하여 취소되었습니다.';
           break;
        case 'auth/popup-blocked':
          errorMessage = 'Google 로그인 팝업이 브라우저에 의해 차단되었습니다. 팝업 차단을 해제해주세요.';
          break;
        // 다른 Firebase 오류 코드에 대한 처리 추가 가능
        default:
          console.error('Google Login Error:', err);
      }
      setError(errorMessage);
    }
  };

  const handlePasswordReset = async (event) => {
    event.preventDefault();
    if (!resetEmail) {
      setResetMessage('이메일을 입력해주세요.');
      return;
    }
    setLoading(true); // 로딩 상태 (버튼 비활성화 등)
    setResetMessage(''); // 이전 메시지 초기화

    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setLoading(false);
      setResetMessage('비밀번호 재설정 이메일을 발송했습니다. 이메일을 확인해주세요.');
      // setShowPasswordReset(false); // 성공 후 UI를 닫을 수도 있음
      // setResetEmail('');
    } catch (err) {
      setLoading(false);
      let errorMessage = '비밀번호 재설정 메일 발송 중 오류가 발생했습니다.';
      if (err.code === 'auth/user-not-found') {
        errorMessage = '등록되지 않은 이메일입니다.';
      } else if (err.code === 'auth/invalid-email') {
        errorMessage = '유효하지 않은 이메일 형식입니다.';
      }
      setResetMessage(errorMessage);
      console.error('Password Reset Error:', err);
    }
  };

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
          {/* 일반 로그인 폼 (비밀번호 재설정 UI가 아닐 때만 표시) */}
          {!showPasswordReset && (
            <form className="mt-10 space-y-8" onSubmit={handleLoginSubmit}>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {/* 오류 메시지 표시 영역 */}
              {error && (
                <div className="rounded-md bg-red-50 p-3 my-3">
                  <div className="flex">
                    <div className="ml-2">
                      <p className="text-sm font-medium text-red-800">{error}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center">
                  {/* <input
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
                  </label> */}
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowPasswordReset(true);
                      setError(''); 
                      setResetMessage('');
                    }}
                    className="font-medium text-amber-700 hover:text-amber-600"
                  >
                    비밀번호를 잊으셨나요?
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  style={{ backgroundColor: loading ? mainColorHover : mainColor }}
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                  onMouseOver={(e) => {
                    if (!loading) e.currentTarget.style.backgroundColor = mainColorHover;
                  }}
                  onMouseOut={(e) => {
                    if (!loading) e.currentTarget.style.backgroundColor = mainColor;
                  }}
                >
                  {loading ? '로그인 중...' : '로그인'}
                </button>
              </div>
            </form>
          )}

          {/* 비밀번호 재설정 UI (showPasswordReset가 true일 때만 표시) */}
          {showPasswordReset && (
            <form className="mt-8 space-y-6" onSubmit={handlePasswordReset}>
              <div>
                <p className="text-sm text-gray-700 mb-4">
                  비밀번호를 재설정할 이메일 주소를 입력해주세요. 해당 주소로 재설정 링크가 포함된 메일이 발송됩니다.
                </p>
                <label htmlFor="reset-email-address" className="sr-only">
                  이메일 주소
                </label>
                <input
                  id="reset-email-address"
                  name="reset-email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm mb-2"
                  placeholder="이메일 주소"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                />
              </div>

              {/* 재설정 관련 메시지 표시 영역 */}
              {resetMessage && (
                <div className={`rounded-md p-3 my-3 ${resetMessage.includes('성공') || resetMessage.includes('발송했습니다') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  <div className="flex">
                    <div className="ml-2">
                      <p className="text-sm font-medium">{resetMessage}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row sm:space-x-3">
                <button
                  type="submit"
                  disabled={loading} // 이메일/비밀번호 로그인과 로딩 상태 공유
                  style={{ backgroundColor: loading ? mainColorHover : mainColor }}
                  className="group relative w-full sm:w-auto flex-1 justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 mb-2 sm:mb-0"
                  onMouseOver={(e) => {
                    if (!loading) e.currentTarget.style.backgroundColor = mainColorHover;
                  }}
                  onMouseOut={(e) => {
                    if (!loading) e.currentTarget.style.backgroundColor = mainColor;
                  }}
                >
                  {loading ? '전송 중...' : '재설정 메일 보내기'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowPasswordReset(false);
                    setResetMessage(''); // 메시지 초기화
                    setResetEmail(''); // 이메일 입력값 초기화
                  }}
                  className="group relative w-full sm:w-auto flex-1 justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                >
                  취소
                </button>
              </div>
            </form>
          )}

          {/* 소셜 로그인 (비밀번호 재설정 UI 아닐 때만 표시) */}
          {!showPasswordReset && (
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
                    onClick={handleGoogleLogin}
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
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
