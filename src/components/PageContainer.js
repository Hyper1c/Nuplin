import React from 'react';

const PageContainer = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-gray-900 border-x-2 border-cyan-500 border-opacity-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">{title}</span>
            {subtitle && (
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                {subtitle}
              </span>
            )}
          </h2>
        </div>
        <div className="bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-xl p-8 shadow-xl border-2 border-cyan-500 border-opacity-20">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageContainer;