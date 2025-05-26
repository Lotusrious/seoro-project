import React from 'react';
import MainPage from './pages/MainPage'; // StitchLayoutPage 대신 MainPage를 import
// import StitchLayoutPage from './pages/StitchLayoutPage'; // 이 라인 삭제

function App() {
  // return <MainPage />; // MainPage 렌더링 주석 처리
  // return (
  //   <div>
  //     <h1>앱 구조 변경 중입니다.</h1>
  //     <p>MainPage는 잠시 숨겨져 있습니다.</p>
  //   </div>
  // );
  return <MainPage />; // StitchLayoutPage 대신 MainPage를 렌더링
}

export default App;
