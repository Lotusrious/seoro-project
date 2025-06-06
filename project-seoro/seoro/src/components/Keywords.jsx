import React, { useState, useEffect } from 'react';
import { db as firestore } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const Keywords = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchKeywords = async () => {
      try {
        const docRef = doc(firestore, "mainPageData", "imageCardsConfig");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists() && docSnap.data().slots) {
          // Firestore에서 가져온 slots 배열을 cards 상태에 설정
          // null이 아닌 유효한 데이터만 필터링할 수도 있습니다.
          const fetchedCards = docSnap.data().slots.filter(slot => slot !== null);
          setCards(fetchedCards);
        } else {
          setError("키워드 설정 데이터를 찾을 수 없습니다.");
        }
      } catch (err) {
        console.error("Firestore에서 키워드 데이터 가져오기 실패:", err);
        setError('키워드를 불러오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchKeywords();
  }, []);

  if (loading) {
    return (
      <div className="p-4 text-center">
        <p className="text-gray-500">추천 키워드 로딩 중...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (cards.length === 0) {
    return (
      <div className="p-4 text-center">
        <p className="text-gray-500">표시할 추천 키워드가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="py-1 px-8">
      <h2 className="text-teal-600 text-lg font-bold leading-tight tracking-[-0.015em] px-0 mb-0.5">
        이달의 추천 여행 키워드
      </h2>
      <div className="grid grid-cols-3 gap-x-8 gap-y-4 p-8">
        {cards.slice(0, 6).map((card) => (
          <div key={card.id || card.url} className="flex flex-col gap-px w-full">
            <div
              className="w-full aspect-video bg-center bg-no-repeat bg-cover rounded-lg"
              style={{
                backgroundImage: `url("${card.url}")`,
              }}
            ></div>
            <div className="text-center">
              {card.hashtags && card.hashtags.length > 0 && (
                <p className="text-[#121715] text-xs font-medium leading-tight truncate">
                  #{card.hashtags[0]}
                </p>
              )}
              <p className="text-[#65867a] text-[8px] font-normal leading-tight line-clamp-2">
                {card.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keywords;
