import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import yourVideo from './img/cook1.mp4'; // Adjust the path to your video file
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Info() {
    const [scrollY, setScrollY] = useState(0);
    const [isExiting, setIsExiting] = useState(false); // Track when the transition starts
    const navigate = useNavigate(); // Initialize useNavigate

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

    // Handler for the button click to navigate to the Read page
    const handleReadMore = () => {
        setIsExiting(true); // Start the transition animation
        setTimeout(() => {
            navigate('/read'); // Redirect to the '/read' page after animation completes
        }, 1000); // Delay the navigation until the animation finishes
    };

    return (
        <AnimatePresence>
            {!isExiting && ( // Only render content if the page is not in transition
                <motion.div
                    style={{ y: scrollY * -0.35 }} // Move up based on scroll
                    className='relative w-full h-screen overflow-hidden'
                    exit={{ opacity: 0, y: -100 }} // Animate page exit
                    transition={{ duration: 1 }} // Transition timing
                >
                    <div className='flex w-full h-full font-futura'>
                        {/* Left Side (Header and Paragraph aligned to the top left with padding) */}
                        <div className='w-1/2 bg-white flex flex-col justify-start items-start p-10'>
                            <h1 className='text-black flex items-center text-8xl font-futura font-bold uppercase mb-4'>
                                Our story:
                            </h1>

                            {/* New Button with hover animation and border on hover */}
                            <motion.div
                                className='mt-6 relative overflow-hidden bg-zinc-900 text-white rounded-full inline-block cursor-pointer border-2 border-transparent'
                                initial={{ backgroundColor: '#000', color: '#fff', borderColor: 'transparent' }}
                                whileHover={{
                                    backgroundColor: '#fff',
                                    color: '#000',
                                    borderColor: '#000',
                                    transition: {
                                        duration: 0.5,
                                    },
                                }}
                                style={{ width: 'auto', padding: '10px 20px', borderWidth: '2px' }}
                                onClick={handleReadMore} // Add onClick to trigger transition and navigation
                            >
                                {/* This will animate the background transition from bottom to top */}
                                <motion.div
                                    initial={{ height: '0%' }}
                                    whileHover={{ height: '100%' }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    className='absolute top-0 left-0 w-full bg-white'
                                    style={{ zIndex: -1 }}
                                />
                                <p className='relative z-10 text-sm uppercase font-bold flex items-center'>
                                    Learn More <ArrowUpRight className="ml-2" /> {/* Arrow icon next to text */}
                                </p>
                            </motion.div>
                        </div>

                        {/* Right Side (Video) */}
                        <div className='w-1/2 flex justify-center items-center bg-black'>
                            <video
                                src={yourVideo}
                                autoPlay
                                loop
                                muted
                                className='w-full h-full object-cover'
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Info;
