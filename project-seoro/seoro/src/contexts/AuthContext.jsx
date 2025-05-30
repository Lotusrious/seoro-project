import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
import { app } from '../firebaseConfig'; // Firebase 앱 인스턴스

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); // 초기 인증 상태 로딩
  const auth = getAuth(app);

  async function logout() {
    try {
      await firebaseSignOut(auth);
      // setCurrentUser(null); // onAuthStateChanged가 처리하므로 명시적으로 호출 안 해도 될 수 있음
    } catch (error) {
      console.error("Failed to log out", error);
      // 오류 처리 (예: 사용자에게 알림)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false); // 인증 상태 확인 완료
    });

    return unsubscribe; // 컴포넌트 언마운트 시 구독 해제
  }, [auth]);

  const value = {
    currentUser,
    logout,
    // 필요한 경우 다른 인증 관련 함수나 상태 추가 가능 (예: login, signup 등)
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* 로딩이 완료된 후에 children 렌더링 */}
    </AuthContext.Provider>
  );
} 