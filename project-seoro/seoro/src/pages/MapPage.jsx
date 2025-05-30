import React, { useEffect } from 'react';

function MapPage() {
  useEffect(() => {
    document.title = "지도 페이지";
  }, []);

  return (
    <div>
      <h1>지도 페이지</h1>
      <p>이곳은 지도 페이지입니다. 내용은 추후 추가될 예정입니다.</p>
    </div>
  );
}

export default MapPage; 