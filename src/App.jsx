import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import InfiniteFeed from './components/InfiniteFeed';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <InfiniteFeed />
      </main>
      <Footer />
    </>
  );
}

export default App; 