import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import About1 from './components/About1';
import Info from './components/Info.jsx';
import Read from './components/Read.jsx'; // Import the Read component
import LocomotiveScroll from 'locomotive-scroll';
import Ink from './components/Ink.jsx';


function App() {
  const scrollRef = useRef(null); // Create a ref for the scroll container

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true, // Enable smooth scrolling
      scrollbar: false, // Disable the default LocomotiveScroll scrollbar
    });

    return () => {
      if (scroll) scroll.destroy(); // Clean up on unmount
    };
  }, []);

  return (
    
    <div ref={scrollRef} className='w-full text-white  font-normal font-manrope'>
      <Navbar />
      <LandingPage />
      <Ink/>
      <Marquee />
      
      <div>
        <About />
      </div>
      
      <Info />
      <About1 />
      <Read/>
    </div>
  );
}

export default App;
