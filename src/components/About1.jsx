import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Importing arrow icons
import img1 from './assets/img1.png'; // Adjust the paths as necessary
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';

const images = [img1, img2, img3, img4]; // Array of your images

function About() {
  const [scrollY, setScrollY] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0); // Focused image index

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

  // Function to go to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle to the next image
  };

  // Function to go to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Cycle to the previous image
  };

  // Animation properties for the text
  const textVariants = {
    hidden: { opacity: 0, x: -100 }, // Start off-screen to the left
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Slide in to the right and fade in
  };

  return (
    <motion.div
      style={{ y: scrollY * -0.4 }} // Apply vertical scroll effect to the entire container
      className='w-full h-screen bg-[#bb4b90] overflow-hidden '
    >
      <div className='w-full flex flex-col justify-center items-center '>
        <motion.h1
          className='text-[1vw] text-white font-bold uppercase leading-none'
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          variants={textVariants}
          viewport={{ once: false }} // Ensure the animation can trigger multiple times
          transition={{ duration: 0.5, delay: 0 }} // No delay
        >
          DesignLab was born from the mind of a curious web designer, Alex, who spent years exploring the boundaries of creativity in web design. While working on various projects, Alex often felt constrained by traditional design norms and sought a platform that celebrated the unconventional. Frustrated by the lack of a
        </motion.h1>
        <motion.h1
          className='text-[10vw] text-white font-bold uppercase leading-none'
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          variants={textVariants}
          viewport={{ once: false }} // Ensure the animation can trigger multiple times
          transition={{ duration: 0.5, delay: 0.2 }} // 0.2 seconds delay
        >
          we are designlabs
        </motion.h1>
        <motion.h1
          className='text-[10vw] text-white font-bold uppercase leading-none'
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          variants={textVariants}
          viewport={{ once: false }} // Ensure the animation can trigger multiple times
          transition={{ duration: 0.3, delay: 0.1 }} // 0.4 seconds delay
        >
          we are designlabs
        </motion.h1>
      </div>

      {/* Image Carousel */}
      <div className="relative flex justify-center items-center mt-10">
        {images.map((image, index) => {
          const isCurrent = index === currentIndex;
          const isPrev = index === (currentIndex - 1 + images.length) % images.length; // Previous image
          const isNext = index === (currentIndex + 1) % images.length; // Next image

          return (
            <motion.img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              initial={{ scale: 0.8, opacity: 0.5, rotate: 0 }} // Initial state with no rotation
              animate={{
                scale: isCurrent ? 1.2 : (isPrev || isNext ? 1 : 0.8), // Scale the focused image
                opacity: isCurrent ? 1 : 0.5, // Opacity change
                rotate: isCurrent ? 5 : 0, // Rotate the focused image slightly (5 degrees)
                transition: { duration: 0.5 }, // Transition duration
              }}
              className={`w-1/6 cursor-pointer object-cover rounded-lg ${
                isCurrent ? 'shadow-xl z-10' : 'z-0'
              }`} 
              onClick={() => setCurrentIndex(index)} // Change focus on click
            />
          );
        })}

        {/* Navigation Arrows positioned to the left and right of the images */}
        <div className="absolute top-1/2 left-40 transform -translate-y-1/2">
          <motion.button
            whileHover={{ scale: 1.2 }} // Scale effect on hover
            whileTap={{ scale: 0.9 }} // Scale down effect on tap
            onClick={prevSlide}
            className="relative p-2"
          >
            <ChevronLeft className="text-white transition-colors duration-300 hover:text-gray-300" size={50} />
          </motion.button>
        </div>

        <div className="absolute top-1/2 right-40 transform -translate-y-1/2">
          <motion.button
            whileHover={{ scale: 1.2 }} // Scale effect on hover
            whileTap={{ scale: 0.9 }} // Scale down effect on tap
            onClick={nextSlide}
            className="relative p-2"
          >
            <ChevronRight className="text-white transition-colors duration-300 hover:text-white" size={50} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
