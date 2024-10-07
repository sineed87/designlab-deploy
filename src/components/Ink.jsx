import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const Ink = () => {
  const controls = useAnimation();
  const controlsSecondRow = useAnimation(); // Separate control for the second row

  // Animation variants for the underline
  const underlineVariants = {
    initial: { width: 0 },
    animate: { width: '100%', transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { width: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <div>
      <div className="border-t-[1px] border-b-[1px] border-zinc-300 font-manrope flex justify-between items-center py-5 px-20">
        <div className="flex flex-col">
          <motion.h1
            className="text-9xl font-light text-white relative inline-block cursor-pointer"
            onHoverStart={() => controls.start('animate')}
            onHoverEnd={() => controls.start('exit')}
            whileHover={{ color: '#FFD700' }} // Change text color on hover (gold color)
          >
            Ink Journey
            {/* Underline */}
            <motion.div
              className="absolute bottom-0 left-0 h-[1px] bg-white"
              variants={underlineVariants}
              initial="initial"
              animate={controls}
              exit="exit"
            />
          </motion.h1>
        </div>

        {/* Arrow with hover effect */}
        <motion.div
          className="ml-10"
          whileHover={{ rotate: 45, color: '#FFD700' }} // Change arrow color to gold and rotate on hover
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ArrowUpRight
            strokeWidth={0.5} // Adjusted for visibility
            size={108}
          />
        </motion.div>
      </div>

      {/* Second Row */}
      <div className="border-t-[1px] border-b-[1px] border-zinc-300 font-manrope flex justify-between items-center py-5 px-20">
        <div className="flex flex-col">
          <motion.h1
            className="text-9xl font-light text-white relative inline-block cursor-pointer"
            onHoverStart={() => controlsSecondRow.start('animate')}
            onHoverEnd={() => controlsSecondRow.start('exit')}
            whileHover={{ color: '#FFD700' }} // Change text color on hover (gold color)
          >
            The Next Chapter
            {/* Underline */}
            <motion.div
              className="absolute bottom-0 left-0 h-[1px] bg-white"
              variants={underlineVariants}
              initial="initial"
              animate={controlsSecondRow}
              exit="exit"
            />
          </motion.h1>
        </div>

        {/* Arrow with hover effect */}
        <motion.div
          className="ml-10"
          whileHover={{ rotate: 45, color: '#FFD700' }} // Change arrow color to gold and rotate on hover
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ArrowUpRight
            strokeWidth={0.5} // Adjusted for visibility
            size={108}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Ink;
