import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react'; // Ensure you have the correct icon import

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false); // State for overlay visibility
  const [currentTime, setCurrentTime] = useState(new Date()); // State for live local time
  const [isScrolled, setIsScrolled] = useState(false); // State to track if scrolled

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingUp = prevScrollPos > currentScrollPos;

    setIsVisible(isScrollingUp || currentScrollPos < 10); // Show when scrolling up or near the top
    setIsScrolled(currentScrollPos > 0); // Update isScrolled based on current scroll position
    setPrevScrollPos(currentScrollPos);
  };

  const toggleOverlay = () => {
    setIsOverlayOpen((prev) => !prev);
  };

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Format the time as HH:MM:SS
  const formatTime = (date, timeZone = undefined) => {
    return date.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit', 
      timeZone 
    });
  };

  // Get U.S. Eastern Standard Time (EST)
  const getUSTime = () => {
    return formatTime(currentTime, 'America/New_York');
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
        className={`fixed z-[999] w-full px-20 py-3 flex justify-between items-center font-manrope text-white transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        {/* Logo section */}
        <div className={`flex items-center transition-all duration-500 ${isScrolled ? 'bg-black  text-white h-29 w-40 rounded-full justify-center items-center' : ''}`}>
          {isScrolled ? (
            <span className="text-2xl font-extrabold border-spacing-5 font-manrope">inkspire</span>
          ) : (
            <div className="flex flex-col items-start">
              <div className='font-normal text-2xl uppercase'>
                Inkspire Studio
              </div>
              <div className='flex flex-col items-start text-zinc-400'>
                <div className='font-normal text-sm'>
                  Local Time: {formatTime(currentTime)} {/* Display live local time */}
                </div>
                <div className='font-normal text-sm'>
                  U.S. Time (EST): {getUSTime()} {/* Display U.S. EST time */}
                </div>
              </div>
            </div>
          )}
        </div>

        <button onClick={toggleOverlay} className="flex items-center justify-center ">
          <h1 className='font-normal'>[ MENU ]</h1>
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
