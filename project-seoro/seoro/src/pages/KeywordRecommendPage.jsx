import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const KeywordRecommendPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">키워드별 추천 페이지</h1>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <p className="text-gray-700">
            이곳에 키워드별 추천 콘텐츠가 표시됩니다. 예를 들어, 사용자가 선택한 키워드에 따라 다양한 여행지나 활동을 추천할 수 있습니다.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KeywordRecommendPage; 