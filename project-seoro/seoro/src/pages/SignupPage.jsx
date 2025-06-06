import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
// 호환성 SDK로 변경되었으므로, 필요한 함수들은 auth, db 객체의 메서드로 호출됩니다.
// import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from '../firebaseConfig.js'; // auth, db (Firestore 인스턴스) 가져오기
// import { doc, setDoc, serverTimestamp } from "firebase/firestore"; // Firestore 함수 가져오기
// import { app } from '../firebaseConfig.js'; // Firebase 앱 인스턴스 가져오기

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // auth 객체를 firebaseConfig에서 직접 가져오므로 getAuth(app)은 필요 없습니다.

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // 이전 오류 메시지 초기화
    setLoading(true);

    // 유효성 검사
    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      setLoading(false);
      return;
    }
    // TODO: 추가적인 비밀번호 정책 검사 (예: 최소 길이)

    try {
      // 호환성 SDK의 메서드를 사용합니다.
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user; // 사용자 객체 가져오기

      // Firebase Authentication 프로필에 닉네임 업데이트 (호환성 SDK 방식)
      await user.updateProfile({ displayName: nickname });
      
      // Firestore에 사용자 정보 저장 (호환성 SDK 방식)
      await db.collection("users").doc(user.uid).set({
        uid: user.uid,
        email: user.email,
        displayName: nickname, 
        photoURL: user.photoURL,
        createdAt: new Date() // 호환성 SDK에서는 new Date()를 사용하거나 FieldValue.serverTimestamp()를 사용
      });

      // 회원가입 성공 처리
      setLoading(false);
      // console.log('회원가입 성공:', userCredential.user);
      alert('회원가입에 성공했습니다! 로그인 페이지로 이동합니다.');
      navigate('/login'); // 로그인 페이지로 이동

    } catch (err) {
      setLoading(false);
      // Firebase 오류 코드에 따른 메시지 처리 (예시)
      switch (err.code) {
        case 'auth/email-already-in-use':
          setError('이미 사용 중인 이메일입니다.');
          break;
        case 'auth/weak-password':
          setError('비밀번호는 6자 이상이어야 합니다.');
          break;
        default:
          setError('회원가입 중 오류가 발생했습니다. 다시 시도해주세요.');
          console.error('Firebase Signup Error:', err);
      }
    }
  };

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
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {/* 오류 메시지 표시 영역 */}
            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm font-medium text-red-800">{error}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center">
              <input
                id="terms-agreement"
                name="terms-agreement"
                type="checkbox"
                required
                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
              />
              <label
                htmlFor="terms-agreement"
                className="ml-2 block text-sm text-gray-900"
              >
                이용약관 및 개인정보처리방침에 동의합니다.
              </label>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading} // 로딩 중일 때 버튼 비활성화
                style={{ backgroundColor: loading ? mainColorHover : mainColor }} // 로딩 중 배경색 변경 (선택 사항)
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                onMouseOver={(e) => {
                  if (!loading) e.currentTarget.style.backgroundColor = mainColorHover;
                }}
                onMouseOut={(e) => {
                  if (!loading) e.currentTarget.style.backgroundColor = mainColor;
                }}
              >
                {loading ? '가입 중...' : '회원가입'} // 로딩 중일 때 버튼 텍스트 변경
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
