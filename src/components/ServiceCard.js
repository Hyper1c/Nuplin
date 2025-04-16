import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl p-6 border-2 border-gray-700 hover:border-cyan-400 transition-all duration-300 h-full">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyan-900 bg-opacity-50 text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
      <button className="mt-4 inline-flex items-center text-cyan-400 hover:text-white transition-colors duration-300">
        Más información
        <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ServiceCard;