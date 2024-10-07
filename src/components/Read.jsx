import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const Read = () => {
  const controls = useAnimation();

  // Animation variants for the underline
  const underlineVariants = {
    initial: { width: 0 },
    animate: { width: '100%', transition: { duration: 0.2, ease: 'easeInOut' } },
    exit: { width: 0, transition: { duration: 0.2, ease: 'easeInOut' } },
  };

  return (
    <div className='bg-white relative'>
      <motion.div
        className='text-xl font-bold text-black cursor-pointer relative inline-block'
        onHoverStart={() => controls.start('animate')}
        onHoverEnd={() => controls.start('exit')}
      >
        Read
        {/* Underline */}
        <motion.div
          className='absolute bottom-0 left-0 h-[2px] bg-white'
          variants={underlineVariants}
          initial='initial'
          animate={controls}
          exit='exit'
        />
      </motion.div>
    </div>
  );
};

export default Read;
