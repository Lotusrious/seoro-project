import React, { useEffect } from 'react';

function TravelLogPage() {
  useEffect(() => {
    document.title = "여행 기록 페이지";
  }, []);

  return (
    <div>
      <h1>여행 기록 페이지</h1>
      <p>이곳은 여행 기록 페이지입니다. 내용은 추후 추가될 예정입니다.</p>
    </div>
  );
}

export default TravelLogPage; 