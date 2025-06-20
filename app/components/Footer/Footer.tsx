// components/Footer.tsx
import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 text-gray-700">
        {/* Column 1: Travel Goo */}
        <div className="lg:col-span-1">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Travel Goo</h3>
          <p className="text-sm leading-relaxed">
            Book your trip in minutes, get full control for much longer.
          </p>
        </div>

        {/* Column 2: Company */}
        <div>
          <h4 className="text-[21px] font-bold text-gray-800 mb-4">Company</h4>
          <ul className="space-y-2 text-[18px] font-normal">
            <li><a href="#" className="hover:text-green-600 transition duration-300">About</a></li>
            <li><a href="#" className="hover:text-green-600 transition duration-300">Careers</a></li>
            <li><a href="#" className="hover:text-green-600 transition duration-300">Mobile</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="text-[21px] font-bold text-gray-800 mb-4">Contact</h4>
          <ul className="space-y-2 text-[18px] font-normal">
            <li><a href="#" className="hover:text-green-600 transition duration-300">Help/FAQ</a></li>
            <li><a href="#" className="hover:text-green-600 transition duration-300">Press</a></li>
            <li><a href="#" className="hover:text-green-600 transition duration-300">Affiliates</a></li>
          </ul>
        </div>

        {/* Column 4: More */}
        <div>
          <h4 className="text-[21px] font-bold text-gray-800 mb-4">More</h4>
          <ul className="space-y-2 text-[18px] font-normal">
            <li><a href="#" className="hover:text-green-600 transition duration-300">Airlinefees</a></li>
            <li><a href="#" className="hover:text-green-600 transition duration-300">Airline</a></li>
            <li><a href="#" className="hover:text-green-600 transition duration-300">Low fare tips</a></li>
          </ul>
        </div>

        {/* Column 5: Discover our app & Social Media */}
        <div className="lg:col-span-1">
          <div className="flex space-x-4 mb-6">
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition duration-300">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-blue-600">
                <path d="M14 13.5h2.783L17 10h-3V7.01C14 6.006 14.903 6 15.124 6h3.806V.325S16.513 0 15.6 0c-3.112 0-5.32 1.83-5.32 5.563V10H6v3.5h4v10H14v-10z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition duration-300">
              {/* Instagram Icon - using a simple gradient background for visual effect as in the image */}
              <div className="w-6 h-6 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 text-white">
                  <path d="M7.8 2h8.4C18.14 2 20 3.86 20 6.2v8.4c0 2.34-1.86 4.2-4.2 4.2H6.2C3.86 18 2 16.14 2 13.8V5.8C2 3.86 3.86 2 6.2 2zM7.5 17.5c.9 0 1.5-.6 1.5-1.5s-.6-1.5-1.5-1.5-1.5.6-1.5 1.5.6 1.5 1.5 1.5zM12 10a2 2 0 110 4 2 2 0 010-4zM16 4.5c.825 0 1.5.675 1.5 1.5s-.675 1.5-1.5 1.5-1.5-.675-1.5-1.5.675-1.5 1.5-1.5z" />
                </svg>
              </div>
            </a>
          
          </div>

          <p className="text-base font-semibold text-gray-800 mb-4">Discover our app</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#" className="flex items-center justify-center p-2 bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <Image
                src="/footer/GooglePlay.svg" // Placeholder, replace with actual icon
                alt="Google Play"
                width={120}
                height={40}
                objectFit="contain"
              />
            </a>
            <a href="#" className="flex items-center justify-center p-2 bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <Image
                src="/footer/apple.png" // Placeholder, replace with actual icon
                alt="Apple Store"
                width={120}
                height={40}
                objectFit="contain"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-16 pt-8 border-t border-gray-200">
        All rights reserved@travelgoo.co
      </div>
    </footer>
  );
};

export default Footer;