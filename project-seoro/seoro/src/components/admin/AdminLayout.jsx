import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import AdminHeader from './AdminHeader';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding-top: 60px; /* AdminHeader의 높이만큼 padding-top 추가 */
  /* AdminHeader의 높이만큼 padding-top을 주어 내용이 가려지지 않도록 할 수 있습니다.
     정확한 높이는 AdminHeader의 실제 렌더링 높이에 따라 조절해야 합니다.
     예시: padding-top: 60px; 
     하지만 여기서는 GlobalStyle에서 body에 margin/padding을 이미 관리하고 있고,
     PageContainer 같은 곳에서 내부 padding으로 관리하므로 일단 생략합니다.
  */
`;

function AdminLayout() {
  return (
    <LayoutWrapper>
      <AdminHeader />
      <MainContent>
        <Outlet /> {/* 여기에 중첩된 라우트의 컴포넌트가 렌더링됩니다 */}
      </MainContent>
    </LayoutWrapper>
  );
}

export default AdminLayout; 