import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import yourVideo from './img/cook1.mp4'; // Adjust the path to your video file
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

function Info() {
    const [isExiting, setIsExiting] = useState(false);
    const navigate = useNavigate();
    const infoRef = useRef(null); // Reference for the Info component

    useEffect(() => {
        // Create a GSAP ScrollTrigger to control the scrolling behavior
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: infoRef.current,
                start: 'top top', // Start when the top of the section hits the top of the viewport
                end: 'bottom top', // End when the bottom of the section hits the top of the viewport
                pin: true, // Pin the section in place
                onEnter: () => {
                    document.body.style.overflow = 'hidden'; // Disable scrolling
                },
                onLeave: () => {
                    document.body.style.overflow = 'auto'; // Enable scrolling
                },
                onEnterBack: () => {
                    document.body.style.overflow = 'hidden'; // Disable scrolling when entering back
                },
                onLeaveBack: () => {
                    document.body.style.overflow = 'auto'; // Enable scrolling when leaving back
                },
            });
        }, infoRef); // Use the ref to set up the context

        // Cleanup function to remove ScrollTrigger
        return () => {
            ctx.revert(); // Revert GSAP context
            document.body.style.overflow = 'auto'; // Ensure scrolling is enabled on cleanup
        };
    }, []);

    const handleReadMore = () => {
        setIsExiting(true);
        setTimeout(() => {
            navigate('/read');
        }, 1000);
    };

    return (
        <AnimatePresence>
            {!isExiting && (
                <motion.div
                    ref={infoRef} // Set the ref here
                    className='relative w-full h-screen overflow-hidden'
                    exit={{ opacity: 0, y: -50 }} // Animate page exit
                    transition={{ duration: 1 }} // Transition timing
                >
                    <div className='flex w-full h-full font-futura bg-transparent'>
                        <div className='w-1/2 bg-white flex flex-col justify-start items-start p-10'>
                            <h1 className=' flex items-center text-8xl font-futura font-bold uppercase mb-4'>
                                Our story:
                            </h1>
                            <motion.div
                                className='mt-6 relative overflow-hidden bg-transparent text-white rounded-full inline-block cursor-pointer border-2 border-transparent'
                                initial={{ backgroundColor: '#ffff', color: '#fff', borderColor: 'transparent' }}
                                whileHover={{
                                    backgroundColor: '#fff',
                                    color: '#000',
                                    borderColor: '#000',
                                    transition: {
                                        duration: 0.5,
                                    },
                                }}
                                style={{ width: 'auto', padding: '10px 20px', borderWidth: '2px' }}
                                onClick={handleReadMore}
                            >
                                <motion.div
                                    initial={{ height: '0%' }}
                                    whileHover={{ height: '100%' }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    className='absolute top-0 left-0 w-full bg-white'
                                    style={{ zIndex: -1 }}
                                />
                                <p className='relative z-10 text-sm uppercase font-bold flex items-center'>
                                    Learn More <ArrowUpRight className="ml-2" />
                                </p>
                            </motion.div>
                        </div>
                        <div className='w-1/2 flex justify-center items-center bg-transparent'>
                            <video
                                src={yourVideo}
                                autoPlay
                                loop
                                muted
                                className='w-full h-full bg-transparent object-cover'
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Info;
