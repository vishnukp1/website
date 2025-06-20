// components/Destination.tsx
import React from 'react';
import DestinationCard from './DestinationCards';
import Image from 'next/image';

interface DestinationData {
  id: string;
  name: string;
  spots: string;
  daysNights: string;
  imageUrl: string;
}

const destinations: DestinationData[] = [
  {
    id: 'thailand',
    name: 'Thailand',
    spots: '20+ Spots',
    daysNights: '2D & 3N',
    imageUrl: '/destinations/tailand.svg', // Make sure you have this image in your public/images folder
  },
  {
    id: 'indonesia',
    name: 'Indonesia',
    spots: '25+ Spots',
    daysNights: '3D & 3N',
    imageUrl: '/destinations/indonesia.svg', // Make sure you have this image in your public/images folder
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    spots: '20+ Spots',
    daysNights: '3D & 2N',
    imageUrl: '/destinations/newzealand.svg', // Make sure you have this image in your public/images folder
  },
];

const Destination: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container ">
        <h2 className="text-4xl font-bold text-center mb-12">Our Popular Destinations</h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12">
          {/* World Map Section */}
          <div className="relative w-full lg:w-1/2 ">
            {/* This is a placeholder for your map. In a real application, you might use an SVG map or a library like react-simple-maps */}
            <Image
              width={100}
              height={100}
              src="/destinations/worldmap.svg" // Placeholder image for the map. You'd replace this with an actual SVG or map component.
              alt="World Map"
              className="w-full max-w-lg h-auto opacity-75"
            />
            {/* Example of map markers (adjust positions as needed) */}
            <div className="absolute top-[35%] left-[60%] w-3 h-3 bg-blue-500 rounded-full border-2 border-white animate-pulse"></div>
            <div className="absolute top-[45%] left-[70%] w-3 h-3 bg-blue-500 rounded-full border-2 border-white animate-pulse"></div>
            <div className="absolute top-[50%] left-[80%] w-3 h-3 bg-blue-500 rounded-full border-2 border-white animate-pulse"></div>
            <div className="absolute top-[80%] left-[85%] w-3 h-3 bg-blue-500 rounded-full border-2 border-white animate-pulse"></div>
          </div>

          {/* Destination Cards Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;