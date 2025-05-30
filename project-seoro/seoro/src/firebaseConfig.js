import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics'; // getAnalytics import 주석 처리
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Firebase Analytics 초기화 주석 처리
const db = getFirestore(app);
const auth = getAuth(app);

// export { app, analytics, db }; // 기존 export 주석 처리
export { app, db, auth }; // auth 추가하여 export
