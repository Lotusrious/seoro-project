import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const KeywordRecommendPage = () => {
  const keywordsData = [
    {
      id: 1,
      keyword: '꽃과 함께 인생샷',
      imageUrl: 'https://images.unsplash.com/photo-1522383225653-ed11118ca5f6?q=80&w=2070&auto=format&fit=crop',
      altText: '만개한 벚꽃 아래에서 사진 찍는 모습'
    },
    {
      id: 2,
      keyword: '초록빛 힐링 자연',
      imageUrl: 'https://images.unsplash.com/photo-1500332988760-81d35c227002?q=80&w=2070&auto=format&fit=crop',
      altText: '햇살이 비치는 푸르른 대나무 숲길'
    },
    {
      id: 3,
      keyword: '감성 가득한 골목 여행',
      imageUrl: 'https://images.unsplash.com/photo-1563499167299-8858cbf085a5?q=80&w=1974&auto=format&fit=crop',
      altText: '색색의 건물과 아기자기한 상점들이 있는 유럽풍 골목길'
    },
    {
      id: 4,
      keyword: '탁 트인 바다와 해변',
      imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop',
      altText: '푸른 하늘과 넓게 펼쳐진 백사장, 에메랄드 빛 바다'
    },
    {
      id: 5,
      keyword: '특별한 경험, 액티비티',
      imageUrl: 'https://images.unsplash.com/photo-1505240657229-90a3e4b350f2?q=80&w=1974&auto=format&fit=crop',
      altText: '푸른 바다 위를 나는 패러글라이딩 모습'
    },
    {
      id: 6,
      keyword: '야경과 함께하는 낭만 여행',
      imageUrl: 'https://images.unsplash.com/photo-1531950270797-861f59593242?q=80&w=1974&auto=format&fit=crop',
      altText: '화려한 조명으로 빛나는 도시의 야경과 강'
    },
  ];

  const hashtags = ['#5월여행', '#국내여행', '#봄나들이', '#여행트렌드', '#인생샷명소', '#힐링스팟', '#감성여행', '#바다여행', '#액티비티여행', '#야경명소'];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 mt-24">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">5월 추천! 요즘 뜨는 여행 키워드</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {keywordsData.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <img src={item.imageUrl} alt={item.altText} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">#{item.keyword}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">추천 해시태그</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {hashtags.map((tag, index) => (
              <span key={index} className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-amber-200 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default KeywordRecommendPage; 