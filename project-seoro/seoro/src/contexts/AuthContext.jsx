import React, { useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebaseConfig';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userDocRef = db.collection('users').doc(user.uid);
        try {
          const userDoc = await userDocRef.get();
          const isAdmin = userDoc.exists && userDoc.data().role === 'admin';
          setCurrentUser({ ...user, isAdmin });
        } catch (error) {
          console.error("Error fetching user role:", error);
          setCurrentUser({ ...user, isAdmin: false });
        }
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
} 