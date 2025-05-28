import React from 'react';

const Layout = ({ children }) => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {children}
      </div>
    </div>
  );
};

export default Layout;
