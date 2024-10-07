import { ArrowUpRight, SquareArrowOutUpRight } from 'lucide-react';
import React from 'react';

function LandingPage() {
  return (
    <div className='w-full pt-1'>
      <div className='  mt-52 px-20'>
        {/* Mapping through the words and rendering them */}
        {["We build", "different", "websites"].map((item, index) => {
          return (
            <div className='masker' key={index}>
              <div className='w-fit flex items-end overflow-hidden'>
                {index === 1 && (
                  <div className='mr-3 w-[10vw] rounded-md h-[4vw] -top-[0.7vw] relative bg-[#E73C37]'>
                    
                    <div />
                  </div>
                )}
                {/* Adjusted leading and tracking for better row spacing */}
                <h1 className=' uppercase font-extrabold text-9xl font-futura leading-[1] tracking-tight'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}

        {/* "Start the project" button below the text */}
        <div className='start flex items-center gap-2 mt-10'>
          <div  className='px-5 py-2 bg-zinc-800 uppercase text-sm text-white font-bold rounded-full flex items-center'>
            Start the project
          </div>
          <div className='w-10 h-10 rounded-full bg-zinc-800 text-white flex items-center justify-center'>
            <ArrowUpRight />
          </div>
        </div>
      </div>

      {/* Rest of the content below */}
      <div className='border-t-[1px] border-zinc-300 font-roboto mt-20 flex justify-between items-center py-5 px-20'>
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <div className='flex items-center' key={index}>
            <p className='text-md font-semibold tracking-tight leading-none flex items-center'>
              {item}
            </p>
            <SquareArrowOutUpRight className='ml-2' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
