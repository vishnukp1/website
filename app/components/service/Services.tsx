'use client';

import React from 'react';
import Card from './Cards';
import { cardData } from './CardData';

const Services: React.FC = () => {
  return (
    <div className="shadow-[inset_0_0_20px_white] p-8">
      <h1 className="text-center text-4xl font-bold ">
        Our Service
      </h1>

      <section className="flex flex-col md:flex-row justify-around center gap-6 mt-16 px-4 ">

        {cardData.map(({id , icon , title , description , bgColor }) => (
          <Card
            key={id}
            icon={icon} 
            title={title}
            description={description}
            bgColor={bgColor}
            shadowType={id === 1 ? 'xl' : 'sm'}
          />
        ))}
      </section>
    </div>
  );
};

export default Services;







      // <section className="flex flex-col md:flex-row justify-around center gap-6 mt-16 px-4">
      //   {cardData.map(( => (
      //     <Card
      //       key={id}
      //       icon={icon} 
      //       title={title}
      //       description={description}
      //       bgColor={bgColor}
      //       shadowType={id === 1 ? 'xl' : 'sm'}
      //     />
      //   ))}
      // </section>