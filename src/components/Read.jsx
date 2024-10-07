import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react'; // Importing arrow icons
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';

const images = [img1, img2, img3, img4]; // Array of your images

function Read() {
    const [currentIndex, setCurrentIndex] = useState(0); // Focused image index

    // Function to go to the next image
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle to the next image
    };

    // Function to go to the previous image
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Cycle to the previous image
    };

    return (
        <div className="relative w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <h1 className="text-4xl font-bold mb-10">Image Carousel</h1>

            {/* Image Carousel */}
            <div className="relative flex justify-center items-center space-x-4">
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
                <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prevSlide}
                        className=" rounded-full p-2"
                    >
                        <ArrowLeft className="text-white" size={30} />
                    </motion.button>
                </div>

                <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={nextSlide}
                        className=" rounded-full p-2"
                    >
                        <ArrowRight className="text-white" size={30} />
                    </motion.button>
                </div>
            </div>
        </div>
    );
}

export default Read;
