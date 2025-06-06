import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { getAnalytics } from 'firebase/analytics'; // getAnalytics import 주석 처리

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  // measurementId는 필수가 아니므로 일단 제외합니다.
};

// Firebase 앱이 이미 초기화되었는지 확인하여 중복 초기화 방지
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// const analytics = getAnalytics(app); // Firebase Analytics 초기화 주석 처리
const auth = firebase.auth();
const db = firebase.firestore();

// export { app, analytics, db }; // 기존 export 주석 처리
export { auth, db }; // auth 추가하여 export
