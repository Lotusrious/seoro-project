import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import logo from '../assets/logo.png'; // 로고 경로에 맞게 수정
import * as d3 from "d3";

const KEYWORDS = [
  "다채로운", "다양한", "난잡한", "흥미를 끄는", "인상적인",
  "직관적인", "열정적인", "깔끔한", "이해하기어려운", "단순한"
];

const KeywordSection = styled.svg`
  flex: 1;
  min-width: 600px;
  min-height: 500px;
  width: 100%;
  height: 500px;
  background: transparent;
  display: block;
`;

const MainPage = () => {
  const [nodes, setNodes] = useState([]);
  const width = 600;
  const height = 500;

  useEffect(() => {
    // 각 키워드에 더 작은 랜덤 크기 부여(짤림 방지)
    const data = KEYWORDS.map((word, i) => ({
      id: i,
      word,
      r: 35 + Math.random() * 20 // 반지름 35~55px로 축소
    }));

    // D3 forceSimulation으로 겹치지 않게 배치
    const simulation = d3.forceSimulation(data)
      .force("charge", d3.forceManyBody().strength(5))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(d => d.r + 4))
      .stop();

    for (let i = 0; i < 200; ++i) simulation.tick();

    setNodes([...data]);
  }, []);

  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Seoro 로고" />
        <Nav>
          <NavItem>여행지</NavItem>
          <NavItem>트렌드</NavItem>
          <NavItem>리뷰</NavItem>
          <NavItem>로그인</NavItem>
        </Nav>
      </Header>
      <MainSection>
        <Left>
          <Title>
            기존에 경험하지 못한<br />
            <Highlight>새로운 국내 여행 플랫폼</Highlight>
          </Title>
          <Subtitle>
            고민만 하던 국내 여행 계획, <b>Seoro</b>와 함께라면<br />
            몇 분 만에 쉽고 빠르게 완성할 수 있어요.
          </Subtitle>
          <CTAButton>Seoro 시작하기</CTAButton>
        </Left>
        <KeywordSection width={width} height={height}>
          {nodes.map((d, i) => (
            <g key={i} transform={`translate(${d.x},${d.y})`}>
              <circle
                r={d.r}
                fill={i % 3 === 0 ? "#111" : "#4FC3F7"}
                stroke="#fff"
                strokeWidth={3}
                style={{ filter: "drop-shadow(0 2px 12px #0002)", cursor: "pointer" }}
              />
              <text
                textAnchor="middle"
                dy="0.35em"
                fill="#fff"
                fontWeight="bold"
                fontSize={d.r / 2.5}
                style={{ pointerEvents: "none" }}
              >
                {d.word}
              </text>
            </g>
          ))}
        </KeywordSection>
      </MainSection>
      <Stats>
        <StatItem>
          <StatNumber>232,191</StatNumber>
          <StatLabel>AI로 생성된 일정 수</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>96</StatNumber>
          <StatLabel>여행지 수</StatLabel>
        </StatItem>
      </Stats>
    </Container>
  );
};

export default MainPage;

// styled-components 예시
const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #fff;
  font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;
const Header = styled.header`
  display: flex; justify-content: space-between; align-items: center;
  padding: 32px 64px 0 64px;
  min-height: 80px;
`;
const Logo = styled.img`
  height: 36px;
`;
const Nav = styled.nav`
  display: flex; gap: 32px;
`;
const NavItem = styled.div`
  font-size: 1.1rem; font-weight: 500; cursor: pointer;
  color: #222;
  &:hover { color: #4FC3F7; }
`;
const MainSection = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 10vw 0 10vw;
  min-height: 0;
  gap: 48px;
`;
const Left = styled.div`
  flex: 1;
  min-width: 280px;
`;
const Title = styled.h1`
  font-size: 3rem; font-weight: 800; line-height: 1.2; margin-bottom: 24px;
`;
const Highlight = styled.span`
  color: #4FC3F7; // 로고 포인트 컬러
`;
const Subtitle = styled.p`
  font-size: 1.2rem; color: #555; margin-bottom: 32px;
`;
const CTAButton = styled.button`
  background: #FFD600; color: #222; font-weight: 700;
  padding: 16px 36px; border: none; border-radius: 8px;
  font-size: 1.1rem; cursor: pointer; box-shadow: 0 2px 8px #0001;
  transition: background 0.2s;
  &:hover { background: #FFEA00; }
`;
const Stats = styled.div`
  display: flex; justify-content: center; gap: 64px; margin: 48px 0 0 0;
  padding-bottom: 32px;
`;
const StatItem = styled.div`
  text-align: center;
`;
const StatNumber = styled.div`
  font-size: 2rem; font-weight: 700; color: #4FC3F7;
`;
const StatLabel = styled.div`
  font-size: 1rem; color: #888;
`;
