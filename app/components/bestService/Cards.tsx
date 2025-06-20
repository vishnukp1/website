'use client';

import React from 'react';
import Image from 'next/image';

interface CardProps {
  icon: string;
  count: number;
  description: string;
}

const Cards: React.FC<CardProps> = ({ icon, count, description }) => {
  return (
    <div className="flex flex-col items-start gap-4 bg-white rounded-2xl shadow-md p-6 w-full sm:w-[300px] md:w-[340px] lg:w-[360px] hover:shadow-lg transition-all duration-300">
      <Image src={icon} alt="icon" width={40} height={40} className="w-10 h-10 object-contain" />
      <h2 className="text-2xl font-bold text-gray-800">{`${count}K+`}</h2>
      <p className="text-sm text-gray-600 font-medium leading-relaxed">{description}</p>
    </div>
  );
};

export default Cards;
