import React from 'react';
import Header from '../components/Header';
import Keywords from '../components/Keywords';
import Footer from '../components/Footer';

const KeywordRecommendPage = () => {
  return (
    <div>
      <Header />
      <main className="pt-24 pb-12">
        <Keywords />
      </main>
      <Footer />
    </div>
  );
};

export default KeywordRecommendPage;
