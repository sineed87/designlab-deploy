import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowBigDown, Menu, X } from 'lucide-react'; // Ensure you have the correct icon import

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false); // State for overlay visibility

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingUp = prevScrollPos > currentScrollPos;

    setIsVisible(isScrollingUp || currentScrollPos < 10); // Show when scrolling up or near the top
    setPrevScrollPos(currentScrollPos);
  };

  const toggleOverlay = () => {
    setIsOverlayOpen((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <div
        className={`fixed z-[999] w-full px-20 py-3 flex justify-between items-center font-roboto border-b border-zinc-500 transition-transform duration-500 bg-white ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className='logo'>
          <div className='font-extrabold text-4xl'>DESIGNLAB</div>
        </div>

        <button onClick={toggleOverlay} className="flex items-center justify-center p-2">
          <h1 className='font-bold'>MENU</h1>
          <Menu className="text-2xl py-1 px-1" /> {/* Using Lucide icon */}
        </button>
      </div>

      {/* Overlay */}
      {isOverlayOpen && (
        <motion.div
          initial={{ y: '-100%' }} // Initial position off-screen
          animate={{ y: 0 }} // Animate to full-screen
          exit={{ y: '-100%' }} // Exit animation off-screen
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center z-[1000]" // Ensure overlay is on top
        >
          <div className="absolute top-4 right-10">
            <button onClick={toggleOverlay} className="text-2xl">
              <X /> {/* Close icon from Lucide */}
            </button>
          </div>
          
          <div className="flex flex-col items-end w-full pr-10 font-bold "> {/* Container for links */}
            {['HOME', 'PROJECTS', 'NEWS', 'STORY', 'CONTACT', 'IMPACT', 'SUBSCRIBE'].map((link, index) => (
              <a key={index} className="mb-0 font-extrabold text-7xl font-futura" href="#">
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Navbar;
