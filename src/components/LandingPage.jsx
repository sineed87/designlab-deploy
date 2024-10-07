import { ArrowUpRight, ChevronsDown, SquareArrowOutUpRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import yourVideo from './img/tatto1.mp4'; // Adjust the path to your video file

function LandingPage() {
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
    <motion.div className="w-full pt-1 relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 -z-15 w-full  overflow-hidden">
        <video
          className="w-full h-full object-cover "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={yourVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Main Content */}
      <div className="py-40 px-20 relative z-10">
        {/* Inkspire Text */}
        <h1 className="uppercase font-normal text-[10em] text-transparent font-futura  tracking-tight">
          Inkspire
        </h1>

        {/* "Start the project" button below the text */}
        <div className="start flex items-center gap-2 mt-10">
          <div className="px-5 py-2 border uppercase gap-2 text-sm text-white font-bold rounded flex items-center">
          Ink Your Story
            <div className="w-5 h-5 text-white flex items-center justify-center">
              <ArrowUpRight />
            </div>
          </div>
        </div>
       
      </div> <div className='bg-transparent'>
          <FlashingText />

        </div>

      {/* Flashing text with down arrow */}
     

      {/* Rest of the content below */}
      <div className="border-t-[1px] border-zinc-300 font-roboto mt-20 flex justify-between items-center py-5 px-20">
        {["Ink Journey" , "From the first pitch to IPO"].map((item, index) => (
          <div className="flex items-center" key={index}>
            {typeof item === 'string' ? (
              <p className="text-md font-semibold tracking-tight leading-none flex items-center">
                {item}
                <SquareArrowOutUpRight className="ml-2" />
              </p>
            ) : (
              item
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// Flashing text component
// Flashing text component
const FlashingText = () => (
  <motion.div className="flex flex-col items-center bg-transparent">
    <motion.span
      className="flashing-text text-md font-semibold tracking-tight leading-none bg-transparent text-white"
      animate={{ opacity: [1, 0.5, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      Scroll down
    </motion.span>
    <motion.div
      className="mt-1 flex items-center justify-center bg-transparent"
      animate={{ opacity: [1, 0.5, 1], y: [0, 4, 0] }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      <ChevronsDown className="text-md bg-transparent text-white" />
    </motion.div>
  </motion.div>
);


export default LandingPage;
