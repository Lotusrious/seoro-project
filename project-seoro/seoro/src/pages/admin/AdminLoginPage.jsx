import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// signInWithEmailAndPassword는 이제 auth 객체의 메서드이므로 직접 import하지 않습니다.
// import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../../firebaseConfig';
import { useAuth } from '../../contexts/AuthContext';

function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    document.title = '관리자페이지';
    // 컴포넌트 언마운트 시 원래 제목으로 돌리고 싶다면:
    // return () => {
    //   document.title = '원래 페이지 제목'; 
    // };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // 호환성 SDK 방식으로 로그인 메서드 호출
      await auth.signInWithEmailAndPassword(email, password);
      console.log('Admin Logged In Successfully with email:', email);
      
      console.log('AdminLoginPage: currentUser after login attempt (from context):', currentUser);

      const targetPath = '/admin/dashboard';
      console.log('AdminLoginPage: Navigating to:', targetPath, 'after a short delay.');
      
      // AuthContext 상태 업데이트 전파를 위한 짧은 지연
      setTimeout(() => {
        navigate(targetPath, { replace: true });
      }, 100); // 100ms 지연, 필요에 따라 조절

    } catch (err) {
      console.error('Admin Login Error:', err);
      setError('로그인에 실패했습니다. 이메일 또는 비밀번호를 확인해주세요.');
      // setLoading(false);를 catch 블록 안에도 추가하는 것이 좋습니다.
      // 하지만 현재 navigate가 성공해야만 false가 되므로, 에러 시에도 false로 설정
      setLoading(false);
    }
    // navigate가 성공적으로 호출되면 이 setLoading은 실행되지 않을 수 있으므로, 
    // try 블록 내 navigate 이후 또는 finally 블록에서 처리하는 것이 더 일반적입니다.
    // 다만, 현재는 setTimeout 내에서 navigate가 호출되므로, 이 setLoading은 너무 빨리 실행될 수 있습니다.
    // setTimeout이 끝나기 전에 setLoading(false)가 될 수 있으므로, 이 줄은 일단 주석처리하거나 제거하고
    // 에러 발생 시에만 setLoading(false)를 호출하도록 합니다.
    // setLoading(false); // 일단 주석 처리
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">관리자 로그인</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              이메일 주소
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {error && (
            <p className="text-sm text-red-600 text-center">
              {error}
            </p>
          )}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {loading ? '로그인 중...' : '로그인'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLoginPage; 