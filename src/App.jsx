import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import About1 from './components/About1';
import Info from './components/Info.jsx';
import Read from './components/Read.jsx'; // Import the Read component
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const scrollRef = useRef(null); // Create a ref for the scroll container

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true, // Enable smooth scrolling
    });

    return () => {
      if (scroll) scroll.destroy(); // Clean up on unmount
    };
  }, []);

  return (
    <div className='w-full bg-white text-zinc-900' ref={scrollRef}>
      <Navbar />
      <LandingPage />
      <Marquee />
      <div className='mb-200'>
        <About />
      </div>
      <Info />
      <About1 />
    </div>
  );
}

export default App;

