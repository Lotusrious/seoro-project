import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { app, db } from '../firebaseConfig';

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
    } catch (error) {
      console.error("Failed to log out", error);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // 사용자가 로그인한 경우, Firestore에서 역할 정보 가져오기
        // *** 중요: 'users'를 실제 사용하신 컬렉션 이름으로 변경해주세요! ***
        const userDocRef = doc(db, 'users', user.uid);
        try {
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            // 'role' 필드가 'admin'이면 isAdmin을 true로 설정
            setCurrentUser({ ...user, isAdmin: userData.role === 'admin' });
          } else {
            setCurrentUser({ ...user, isAdmin: false });
            console.warn(`No user document found for UID: ${user.uid} in 'users' collection. User will not be an admin.`);
          }
        } catch (error) {
          console.error("Error fetching user role from Firestore:", error);
          setCurrentUser({ ...user, isAdmin: false });
        }
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return unsubscribe; // 컴포넌트 언마운트 시 구독 해제
  }, [auth]);

  const value = {
    currentUser,
    logout,
    loading, // loading을 context value에 추가
    // 필요한 경우 다른 인증 관련 함수나 상태 추가 가능 (예: login, signup 등)
  };

  return (
    <AuthContext.Provider value={value}>
      {children} {/* !loading 조건 제거 */}
    </AuthContext.Provider>
  );
} 