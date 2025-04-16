import React from 'react';

const CompanyPreview = ({ onNavigate }) => {
  return (
    <div className="bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-xl p-8 shadow-xl border-2 border-cyan-500 border-opacity-20">
      <h3 className="text-2xl font-bold text-white mb-4">Nuestra Empresa</h3>
      <p className="text-gray-300 mb-6">
        Conoce más sobre nuestra visión, misión y el equipo detrás de FiberLink Quantum.
      </p>
      <button
        onClick={() => onNavigate('about')}
        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-6 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
      >
        Conoce Más
      </button>
    </div>
  );
};

export default CompanyPreview;

// DONE