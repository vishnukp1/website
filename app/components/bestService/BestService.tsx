import React from 'react';
import Cards from './Cards';

const BestService = () => {
  return (
    <div className='w-full h-screen bg-[#f2f6f6] bg-no-repeat bg-center  ' 
      style={{
            backgroundImage: "url('/serviceimg/map.svg')",
          }}
    >
      <div className='flex flex-col items-center font-bold text-4xl gap-2 relative top-20'>

     <p>We always try to give you </p>
       <p>the best service</p>
      </div>
       

       {/* <Cards/> */}
    </div>
  );
}

export default BestService;


