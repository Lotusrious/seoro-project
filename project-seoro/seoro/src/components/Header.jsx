import React from 'react';

function Header() {
  return (
    <header style={{ display: 'flex', alignItems: 'center', padding: '16px' }}>
      <img src="/logo.png" alt="Seoro 로고" style={{ height: 32, marginRight: 8 }} />
      <span style={{ fontWeight: 'bold', fontSize: 24 }}>Seoro</span>
    </header>
  );
}

export default Header; 