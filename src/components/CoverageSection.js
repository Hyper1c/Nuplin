import React from 'react';

const CoverageSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Cobertura en tu Zona</h2>
            <p className="text-gray-700 mb-8">
              Verifica si tenemos cobertura en tu área y disfruta de la mejor conexión de internet con tecnología de fibra óptica.
            </p>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Ingresa tu dirección" 
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-2 bg-blue-900 text-white py-2 px-6 rounded-lg hover:bg-blue-800 transition">
                Verificar
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-100 p-8 rounded-xl h-64 flex items-center justify-center">
              <p className="text-gray-500">Mapa de cobertura interactivo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverageSection;