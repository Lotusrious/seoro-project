import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'; // 제거
// import { Link } from 'react-router-dom'; // Link 임포트 제거
import { db as firestore } from '../../firebaseConfig'; // db를 firestore 별칭으로 가져옴
import { doc, setDoc } from 'firebase/firestore'; // Firebase import 주석 해제
// import { useAuth } from '../../contexts/AuthContext.jsx'; // useAuth import 임시 주석 처리
// import { useNavigate } from 'react-router-dom'; // useNavigate import 임시 주석 처리

// 전역 스타일 추가
const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f9fa; // 좀 더 밝은 배경
    color: #343a40;
  }
  * {
    box-sizing: border-box;
  }
`;

const PageContainer = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: 20px auto; // 헤더가 있으므로 margin-top은 유지해도 괜찮음
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.075);
  // position: relative; 제거 (개별 뒤로가기 버튼 없어짐)
`;

// BackButton 스타일 컴포넌트 제거
/*
const BackButton = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 8px 15px;
  background-color: #6c757d;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.9em;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: #5a6268;
  }
`;
*/

const Section = styled.div`
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5em; // 살짝 줄임
  color: #495057;
  padding-bottom: 12px;
  margin-top: 0;
  margin-bottom: 20px;
  font-weight: 600;
`;

const SectionTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px; /* SectionTitle의 원래 margin-bottom과 유사하게 */
`;

const SaveButton = styled.button`
  padding: 8px 18px;
  background-color: #28a745; /* 초록색 계열 */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
  font-weight: 500;
  transition: background-color 0.15s ease-in-out;
  &:hover {
    background-color: #218838;
  }
  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

const InputSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px; // 이전보다 간격 줄임
  background-color: #f8f9fa; // 입력 섹션 배경색
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #dee2e6;

  input[type="text"] {
    flex-grow: 1;
    padding: 10px 12px;
    margin-right: 12px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 0.95em;
    &:focus {
      border-color: #80bdff;
      outline: none;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }
  button {
    padding: 10px 18px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.95em;
    font-weight: 500;
    transition: background-color 0.15s ease-in-out;
    &:hover {
      background-color: #0056b3;
    }
    &:disabled {
      background-color: #6c757d;
      cursor: not-allowed;
    }
  }
`;

const CandidateImagePool = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 12px;
  padding: 15px;
  border: 1px solid #dee2e6;
  background-color: #f8f9fa;
  border-radius: 6px;
  min-height: 150px;
`;

const CandidateItem = styled.div`
  width: 100%;
  padding-top: 75%; /* 4:3 비율 */
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  background-color: #e9ecef;
  border: 1px solid #dee2e6; // $isDragging 제거
  box-shadow: 0 1px 3px rgba(0,0,0,0.1); // $isDragging 제거
  cursor: pointer; // 클릭 가능하도록 커서 변경

  &:hover {
    border-color: #007bff; // 호버 시 테두리 색 변경
    opacity: 0.8;
  }
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MainSlotsContainer = styled.div`
  display: flex; 
  flex-wrap: wrap; 
  gap: 15px; 
  padding: 15px;
  border: 1px solid #dee2e6;
  background-color: #f8f9fa;
  border-radius: 6px;
  min-height: 100px; 
`;

// Slot 스타일을 해시태그 기능 추가 전으로 복원
const Slot = styled.div`
  width: calc((100% - 30px) / 3);
  padding-top: calc(((100% - 30px) / 3) * 0.6 + 30px); /* 너비의 60% + 해시태그 영역 높이(임의) */
  min-height: calc(80px + 30px); /* 기존 min-height + 해시태그 영역 높이(임의) */
  position: relative;
  border: 2px ${({ $hasItem }) => ($hasItem ? 'dashed #adb5bd' : 'solid #ced4da')};
  border-radius: 4px;
  background-color: ${({ $hasItem }) => ($hasItem ? '#e9ecef' : 'white')};
  display: flex; /* flex 다시 적용 */
  flex-direction: column; /* 수직 배치 */
  align-items: center;
  justify-content: flex-start; /* 위에서부터 정렬 */
  color: #6c757d;
  font-size: 0.9em;
  transition: border-color 0.2s ease, background-color 0.2s ease;
  cursor: ${({ $hasItem }) => ($hasItem ? 'pointer' : 'default')};

  &:hover {
    border-color: ${({ $hasItem }) => ($hasItem ? '#007bff' : '#ced4da')};
  }

  .placeholder-text { /* 이 부분은 SlotContentWrapper 외부, Slot 직접 자식일 때를 위함 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  
  /* img 스타일은 SlotImageContainer 내부로 이동했으므로 여기서 제거 또는 주석 처리 */
  /* img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2px; 
  } */
`;

const PlaceholderText = styled.p`
  grid-column: 1 / -1; /* CandidateImagePool 내부에서 사용 시 */
  text-align: center;
  color: #6c757d;
  padding: 15px 0;
  font-size: 1em;
  width: 100%; /* 부모 컨테이너(flex 또는 grid) 내에서 전체 너비 차지 */
`;

// Slot 내부 이미지와 해시태그를 위한 컨테이너들 정의 추가 시작
const SlotContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column; 
`;

const SlotImageContainer = styled.div`
  width: 100%;
  flex-grow: 1; 
  position: relative; 
  overflow: hidden; 
  border-top-left-radius: 2px; 
  border-top-right-radius: 2px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SlotHashtagsContainer = styled.div`
  width: 100%;
  padding: 5px 8px; 
  background-color: rgba(0, 0, 0, 0.03); 
  border-top: 1px solid #dee2e6; 
  display: flex;
  flex-wrap: wrap; 
  gap: 4px; 
  font-size: 0.75em;
  min-height: 25px; 
  border-bottom-left-radius: 2px; 
  border-bottom-right-radius: 2px;
`;

const Hashtag = styled.span`
  background-color: white; /* 흰색 배경 */
  color: #555; /* 약간 진한 회색 글자 */
  padding: 3px 8px; /* 패딩 조정 */
  border-radius: 4px; /* 둥근 모서리 조정 */
  font-weight: 500;
  border: 1px solid #ddd; /* 연한 회색 테두리 */
  font-size: 0.9em; /* 부모 기준 폰트 크기 */
`;
// Slot 내부 이미지와 해시태그를 위한 컨테이너들 정의 추가 끝

// 초기 메인 슬롯 상태 (6개, 비어있음)
const initialMainSlots = Array(6).fill(null);

function ImageCardManagementPage() {
  const [mainSlots, setMainSlots] = useState(initialMainSlots);
  const [prompt, setPrompt] = useState('');
  const [candidateImages, setCandidateImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false); // 저장 중 상태 추가

  useEffect(() => {
    document.title = "이미지 카드 관리";
  }, []);

  const handleSearch = async () => {
    if (!prompt.trim()) {
      alert("검색어를 입력해주세요.");
      return;
    }
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    const mockImages = Array.from({ length: 8 }, (_, i) => ({
      id: `candidate-${Date.now()}-${i}`,
      url: `https://picsum.photos/seed/${prompt.replace(/\s+/g, '-')}-${i}/300/200`,
      alt: `후보 이미지 ${i + 1}`,
      hashtags: [`태그${i+1}-1`, `태그${i+1}-2`, `샘플`] // 이 부분은 일단 유지
    }));
    setCandidateImages(mockImages);
    setIsLoading(false);
  };

  const handleCandidateImageClick = (clickedImage) => {
    console.log("Candidate image clicked:", clickedImage);
    const firstEmptySlotIndex = mainSlots.findIndex(slot => slot === null);

    if (firstEmptySlotIndex !== -1) {
      const newMainSlots = [...mainSlots];
      newMainSlots[firstEmptySlotIndex] = { ...clickedImage }; 
      setMainSlots(newMainSlots);
    } else {
      alert("메인 슬롯이 모두 채워져 있습니다.");
    }
  };

  const handleMainSlotClick = (slotIndex) => {
    console.log("Main slot clicked at index:", slotIndex);
    if (mainSlots[slotIndex]) {
      const newMainSlots = [...mainSlots];
      newMainSlots[slotIndex] = null;
      setMainSlots(newMainSlots);
    }
  };

  const handleSave = async () => {
    console.log("저장 버튼 클릭됨");
    console.log("현재 mainSlots 상태:", mainSlots);
    setIsSaving(true);

    try {
      // Firestore 문서 참조 생성
      // 컬렉션: mainPageData, 문서 ID: imageCardsConfig
      const docRef = doc(firestore, "mainPageData", "imageCardsConfig");

      // 저장할 데이터 준비 (null 값 포함)
      const dataToSave = { slots: mainSlots };

      // Firestore에 데이터 저장 (setDoc은 문서를 덮어씁니다)
      await setDoc(docRef, dataToSave);

      console.log("Firestore에 데이터 저장 성공!");
      alert("이미지 카드 설정이 성공적으로 저장되었습니다.");
    } catch (error) {
      console.error("Firestore 저장 중 오류 발생: ", error);
      alert("저장 중 오류가 발생했습니다. 콘솔을 확인해주세요.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      <GlobalStyle />
      {/* <DragDropContext onDragEnd={onDragEnd}> 제거 */}
      <PageContainer>
        {/* <BackButton to="/admin/dashboard">← 뒤로가기</BackButton> 제거 */}
        <Section>
          <SectionTitle>1. 이미지 생성 프롬프트</SectionTitle>
          <InputSection>
            <input 
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="예: 밤하늘의 은하수, 유화 스타일"
            />
            <button onClick={handleSearch} disabled={isLoading || isSaving}>
              {isLoading ? 'AI 이미지 생성 중...' : 'AI 이미지 생성'}
            </button>
          </InputSection>
        </Section>

        <Section>
          <SectionTitle>2. AI 생성 이미지 후보 (클릭하여 아래 슬롯에 추가)</SectionTitle>
          {/* <Droppable droppableId="candidate-pool" ... > 제거 */}
          <CandidateImagePool
            // ref, droppableProps 제거
          >
            {isLoading && candidateImages.length === 0 && <PlaceholderText>AI가 이미지를 생성 중입니다...</PlaceholderText>}
            {!isLoading && candidateImages.length === 0 && <PlaceholderText>생성된 이미지가 여기에 표시됩니다.</PlaceholderText>}
            {candidateImages.map((img) => (
              // <Draggable key={img.id} draggableId={img.id} index={index}> 제거
              <CandidateItem
                key={img.id} // React key는 유지
                // ref, draggableProps, dragHandleProps 제거
                title={img.alt}
                onClick={() => handleCandidateImageClick(img)} // 클릭 핸들러 추가
              >
                <img src={img.url} alt={img.alt} />
              </CandidateItem>
              // </Draggable> 제거
            ))}
            {/* provided.placeholder 제거 */}
          </CandidateImagePool>
          {/* </Droppable> 제거 */}
        </Section>
        
        <Section>
          <SectionTitleContainer>
            <SectionTitle style={{ marginBottom: 0, paddingBottom: 0 }}>
              3. 메인 페이지 노출 이미지 (클릭하여 후보로 이동)
            </SectionTitle>
            <SaveButton onClick={handleSave} disabled={isSaving || isLoading}>
              {isSaving ? '저장 중...' : '저장'}
            </SaveButton>
          </SectionTitleContainer>
          <MainSlotsContainer>
            {mainSlots.map((item, index) => (
              <Slot
                key={`main-slot-${index}`}
                $hasItem={!!item}
                onClick={() => item && handleMainSlotClick(index)}
              >
                {item ? (
                  <SlotContentWrapper>
                    <SlotImageContainer>
                      <img src={item.url} alt={item.alt} />
                    </SlotImageContainer>
                    <SlotHashtagsContainer>
                      {item.hashtags && item.hashtags.map((tag, tagIndex) => (
                        <Hashtag key={tagIndex}>{tag}</Hashtag>
                      ))}
                      {(!item.hashtags || item.hashtags.length === 0) && (
                         <span style={{fontSize: '0.9em', color: '#888'}}>해시태그 없음</span>
                      )}
                    </SlotHashtagsContainer>
                  </SlotContentWrapper>
                ) : (
                  <span className="placeholder-text">슬롯 {index + 1}</span>
                )}
              </Slot>
            ))}
          </MainSlotsContainer>
        </Section>
      </PageContainer>
    </>
  );
}

export default ImageCardManagementPage;