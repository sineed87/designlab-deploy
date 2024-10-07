import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import img1 from './assets/img1.png'; // Adjust the paths as necessary
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import { ArrowUpRight } from 'lucide-react';

const images = [img1, img2, img3, img4]; // Array of your images

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
      style={{ y: scrollY * 0.1 }} // Faster vertical movement by adjusting multiplier
      className='flex bg-black h-[150vh] overflow-hidden rounded-tl-3xl rounded-tr-3xl'
    >
      {/* Left section for images */}
      <div className='grid grid-cols-2 grid-rows-2 gap-4 w-1/2 p-4'> {/* Reduced gap and padding */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className='h-full w-full object-cover' // Use object-cover to fill the grid cell
          />
        ))}
      </div>

      {/* Right section for text */}
      <div className='flex flex-col justify-start items-end w-1/2 text-right p-4'>
        <h1 className='text-[5vw] leading-none text-white font-bold uppercase text-right'>
          We Are DesignLabs
        </h1>
        <h1 className='text-xl leading-none text-white font-light font-raleway text-right max-w-xl'>
          Creative Tattoo Studio is a dynamic space where artistry meets self-expression, featuring talented artists skilled in various styles. With a focus on creating a welcoming atmosphere, the studio ensures each client feels comfortable while crafting meaningful and beautifully designed tattoos.
        </h1>
        <div className='p-4'> 
          <div className="px-6 py-2 border-white border-[0.02vw] uppercase gap-1 text-sm text-white font-bold rounded flex items-center">
            READ MORE
            <div className="w-15 h-5 text-white flex items-center">
              <ArrowUpRight />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Marquee;
