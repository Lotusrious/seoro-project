import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Keywords from '../components/Keywords';
import Regions from '../components/Regions';
import AIChat from '../components/AIChat';
import Features from '../components/Features';
import Footer from '../components/Footer';

const MapPreviewWithFooter = () => ( 
  <div className="h-full flex flex-col">
    <div className="flex-grow flex flex-col items-center justify-center p-4 text-center bg-gray-100">
      <h2 className="text-[#121715] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-[-0.015em] mb-5">
        Map Preview
      </h2>
      <p className="text-[#65867a] text-base sm:text-lg mb-5">
        Interactive map preview showcasing recommended locations.
      </p>
      <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-solid border-[#e3e9e7]">
        <img 
          className="aspect-video w-full h-full object-cover"
          src="https://cdn.builder.io/api/v1/image/assets%2Ffc1925337f244c7cadd70e30b582298e%2Fa4f2465d824f4e119375292960a07b44"
          alt="Map preview"
        />
      </div>
      <button className="mt-5 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f0f4f3] text-[#121715] text-sm font-bold leading-normal tracking-[0.015em]">
        <span className="truncate">View Recommended Itinerary</span>
      </button>
    </div>
    <Footer /> 
  </div>
);

const sections = [
  { id: 'hero', Component: Hero },
  { id: 'keywords', Component: Keywords },
  { id: 'regions', Component: Regions },
  { id: 'aiChat', Component: AIChat },
  { id: 'features', Component: Features },
  {
    id: 'mapPreview',
    Component: MapPreviewWithFooter,
  },
];

const pageVariants = {
  initial: (direction) => ({
    y: direction > 0 ? '100vh' : '-100vh',
    opacity: 0,
  }),
  animate: {
    y: '0vh',
    opacity: 1,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
  exit: (direction) => ({
    y: direction < 0 ? '100vh' : '-100vh',
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  }),
};

function MainPage() { 
  const [currentPage, setCurrentPage] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(1);
  const isScrolling = useRef(false);
  const layoutRef = useRef(null);

  const handleScroll = (event) => {
    console.log('Scroll event detected:', event.deltaY, 'on element:', event.currentTarget);
    event.preventDefault();
    if (isScrolling.current) {
      console.log('Scrolling is locked');
      return;
    }
    console.log('Processing scroll...');

    isScrolling.current = true;

    const direction = event.deltaY > 0 ? 1 : -1;
    setScrollDirection(direction);

    let newPageIndex = currentPage;
    if (direction === 1 && currentPage < sections.length - 1) {
      newPageIndex = currentPage + 1;
    } else if (direction === -1 && currentPage > 0) {
      newPageIndex = currentPage - 1;
    }

    if (newPageIndex !== currentPage) {
      console.log('Attempting to change page to:', newPageIndex);
      setCurrentPage(newPageIndex);
    } else {
      console.log('No page change, unlocking scroll immediately.');
      isScrolling.current = false;
    }
  };

  useEffect(() => {
    const currentLayoutElement = layoutRef.current;
    const wheelListener = (e) => handleScroll(e);

    if (currentLayoutElement) {
      console.log('Adding wheel event listener to layoutRef.current');
      currentLayoutElement.addEventListener('wheel', wheelListener, { passive: false });
    }

    return () => {
      if (currentLayoutElement) {
        console.log('Removing wheel event listener from layoutRef.current');
        currentLayoutElement.removeEventListener('wheel', wheelListener);
      }
    };
  }, [currentPage]);

  const CurrentSection = sections[currentPage].Component; 

  return (
    <div 
      ref={layoutRef}
      tabIndex={0}
      className="relative h-screen w-screen bg-white outline-none"
      style={{fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif'}}
    >
      <Header />
      <AnimatePresence initial={false} custom={scrollDirection} mode="wait">
        <motion.div 
          key={currentPage} 
          custom={scrollDirection}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`page-${currentPage} absolute inset-0 pt-16`}
          style={{ willChange: 'transform, opacity' }} 
          onAnimationComplete={() => {
            console.log('Animation complete, unlocking scroll');
            isScrolling.current = false;
          }}
        >
          <div className="h-full w-full">
            <CurrentSection />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="fixed right-5 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => {
              if (isScrolling.current) return;
              if (index !== currentPage) {
                console.log('Pagination click to:', index);
                setScrollDirection(index > currentPage ? 1 : -1);
                isScrolling.current = true;
                setCurrentPage(index);
              }
            }}
            className={`w-3 h-3 rounded-full border border-gray-600 hover:bg-gray-400 transition-colors ${currentPage === index ? 'bg-gray-600' : 'bg-white'}`}
            aria-label={`Go to section ${section.id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default MainPage; 