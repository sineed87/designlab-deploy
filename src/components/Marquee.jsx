import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Marquee() {
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
      // Move the entire Marquee vertically on scroll
      style={{ y: scrollY * -0.2 }} // Faster vertical movement by adjusting multiplier
      className='  bg-[#004D43] overflow-hidden flex rounded-tl-3xl rounded-tr-3xl'
    >
      {/* Keep the horizontal scroll effect */}
      
        <h1 className='text-[30vw] leading-none text-white font-bold uppercase'>
          we are designlabs
        </h1>
        <h1 className='text-[10vw] leading-none text-white font-bold uppercase'>
          we are designlabs
        </h1>
        <h1 className='text-[10vw] leading-none text-white font-bold uppercase'>
          we are designlabs
        </h1>
       
      
    </motion.div>
  );
}

export default Marquee;
