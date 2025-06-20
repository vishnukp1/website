'use client';

import Image from 'next/image';
import React from 'react';

interface CardProps {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
  shadowType?: 'sm' | 'xl';
}

const Card: React.FC<CardProps> = ({ icon, title, description, bgColor, shadowType = 'sm' }) => {
  return (
    <div
      className={`w-full max-w-sm h-[232px]  rounded-[15px] p-6 shadow-${shadowType} transition-transform hover:scale-[1.02]`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="mb-4">
        <Image className='w-10' src={icon} alt={`${title} icon`} width={46} height={28} />
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;
