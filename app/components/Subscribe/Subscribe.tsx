// components/Subscribe.tsx
import React from 'react';

const Subscribe: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
    

      <div className="relative  z-10 max-w-7xl h-[25.5rem] mx-auto  bg-[#9FFFEC]  p-8 md:p-12 rounded-3xl shadow-xl flex flex-col items-center text-center">
        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 bg-green-500 rounded-full p-4 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white transform rotate-45"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-tight mt-14 mb-20">
          Subscribe to get information, latest news and other interesting offers about Cobham
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg h-16">
          <div className="relative flex-grow">
            <input
              type="email"
              placeholder="Your email"
              className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-green-400 transition duration-300 shadow-sm"
              aria-label="Your email"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-6 13h6a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <button className="bg-green-600 h-[3rem] hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;