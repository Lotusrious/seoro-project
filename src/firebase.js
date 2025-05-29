// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiYyi-1_fT1UVxjkReYYuBLOc_qIP5ZjE",
  authDomain: "seoro-project.firebaseapp.com",
  projectId: "seoro-project",
  storageBucket: "seoro-project.firebasestorage.app",
  messagingSenderId: "779263495703",
  appId: "1:779263495703:web:86f844f56d30c07fe39652",
  measurementId: "G-D85MNBK0P7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 다른 파일에서 Firebase 앱 인스턴스를 사용할 수 있도록 내보냅니다.
export { app, analytics }; 