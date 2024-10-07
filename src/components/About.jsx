import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div 
    style={{ y: scrollY * 0.05 }}
      // Move the entire Marquee vertically on scroll
       // Faster vertical movement by adjusting multiplier
      className='w-full h-[200]  bg-black overflow-hidden flex items-center justify-center  '
    >
      {/* Keep the horizontal scroll effect */}
      <motion.div
       // Ensures the text scrolls continuously
      >
        <h1 className='text-[15vw]  text-white font-bold uppercase'>
          we are designlabs
        </h1>
      
        
      </motion.div>
    </motion.div>
  );
}

export default About;