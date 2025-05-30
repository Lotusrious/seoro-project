import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext.jsx';
import { useNavigate, Link } from 'react-router-dom';

const DashboardContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 30px;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const LogoutButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c82333;
  }
`;

function AdminDashboardPage() {
  useEffect(() => {
    document.title = "어드민 대시보드";
  }, []);

  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/admin/login');
    } catch (error) {
      console.error("Failed to log out:", error);
      alert("로그아웃에 실패했습니다.");
    }
  };

  return (
    <DashboardContainer>
      <Title>어드민 대시보드</Title>
      <p>환영합니다, {currentUser?.email} 님!</p>
      <StyledLink to="/admin/image-card-management">키워드 이미지 카드 관리</StyledLink>
      {/* 추가적인 관리자 기능 링크들을 여기에 추가할 수 있습니다. */}
      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
    </DashboardContainer>
  );
}

export default AdminDashboardPage; 