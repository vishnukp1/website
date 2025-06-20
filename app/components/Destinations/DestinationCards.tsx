// components/DestinationCard.tsx
import React from 'react';
import Image from 'next/image'; // Recommended for Next.js image optimization

interface DestinationCardProps {
  name: string;
  spots: string;
  daysNights: string;
  imageUrl: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ name, spots, daysNights, imageUrl }) => {
  return (
    <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-[1.02] cursor-pointer">
      <div className=" flex-shrink-0">
        <Image
          src={imageUrl}
          alt={name}
          height={0}
          objectFit="cover" // Covers the area without distortion
          className="rounded-l-lg w-56 h-56"
          width={0}
        />
      </div>
      <div className="flex-grow p-4 flex justify-between items-center">
        <div className='flex justify-between w-64'>
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <div>
    <p className="text-gray-600 mt-1">{spots}</p>
          <p className="text-gray-600">{daysNights}</p>
          </div>
      
        </div>
        <div className="text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;