import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-blue-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Internet de Fibra Óptica</h1>
            <p className="text-xl mb-8">La velocidad más rápida para tu hogar o negocio</p>
            <button className="bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-blue-100 transition duration-300">
              Contrata Ahora
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="bg-blue-800 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Prueba de Velocidad</h2>
              <div className="flex justify-between mb-6">
                <div>
                  <p className="text-sm">Descarga</p>
                  <p className="text-3xl font-bold">950 Mbps</p>
                </div>
                <div>
                  <p className="text-sm">Subida</p>
                  <p className="text-3xl font-bold">850 Mbps</p>
                </div>
              </div>
              <button className="w-full bg-blue-600 py-2 rounded-lg hover:bg-blue-500 transition">
                Iniciar Prueba
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;