import React from 'react';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGlobeAmericas, FaArrowLeft } from 'react-icons/fa'; // 아이콘 임포트

const HeaderWrapper = styled.header`
  background-color: #343a40;
  color: white;
  padding: 10px 20px; /* 내부 패딩은 유지하되, height로 전체 높이 제어 */
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  position: fixed; /* 화면 상단에 고정 */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;   /* 다른 요소들보다 위에 표시 */
  height: 60px;    /* 명시적인 높이 설정 (AdminLayout의 MainContent padding-top과 일치) */
  box-sizing: border-box; /* 패딩과 테두리를 전체 높이에 포함 */
`;

const LogoAndStatus = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin-right: 20px;

  &:hover {
    color: #f8f9fa;
  }
`;

const AdminStatus = styled.span`
  font-size: 0.9em;
  color: #adb5bd; // 약간 더 밝은 회색
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.2em; // 아이콘 크기 조절을 위해
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #495057;
  }

  svg {
    margin-right: 5px;
  }
`;

const HomeLinkButton = styled(Link)`
  background: none;
  border: none;
  color: white;
  font-size: 1.2em;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #495057;
  }

  svg {
    margin-right: 5px;
  }
`;


function AdminHeader() {
  console.log('AdminHeader is rendering'); // 렌더링 확인 로그
  const location = useLocation();
  const navigate = useNavigate();

  const isAdminDashboard = location.pathname === '/admin/dashboard';

  const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <HeaderWrapper>
      <LogoAndStatus>
        <Logo to="/admin/dashboard">Seoro Admin</Logo>
        <AdminStatus>관리자 접속중</AdminStatus>
      </LogoAndStatus>
      <NavActions>
        {isAdminDashboard ? (
          <HomeLinkButton to="/" title="메인 사이트로 이동">
            <FaGlobeAmericas />
            <span>사이트</span>
          </HomeLinkButton>
        ) : (
          <ActionButton onClick={handleBack} title="뒤로가기">
            <FaArrowLeft />
            <span>뒤로</span>
          </ActionButton>
        )}
      </NavActions>
    </HeaderWrapper>
  );
}

export default AdminHeader; 