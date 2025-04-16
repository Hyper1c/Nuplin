import React from 'react';

const HolographicHero = ({ onNavigate }) => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-blue-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii4wNSIgbnVtT2N0YXZlcz0iNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNLTItMmg2MDR2NjA0SC0yeiIvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            <span className="block">Internet Cuántico</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Para el Futuro</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-cyan-100">
            La conexión más rápida del universo con tecnología de última generación
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <button
              onClick={() => onNavigate('plans')}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/30 transition-all duration-300"
            >
              Ver los planes
              <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            <a href="https://www.speedtest.net/" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-cyan-100 bg-gray-800 bg-opacity-60 hover:bg-opacity-80 backdrop-blur-sm border-cyan-500 border-opacity-30 transition-all duration-300">
                Prueba de Velocidad
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-cyan-500 border-opacity-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg border border-cyan-500 border-opacity-10 hover:border-opacity-30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-cyan-900 bg-opacity-50 p-3 rounded-full">
                  <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-white">Velocidad Extrema</h3>
              </div>
              <p className="mt-2 text-sm text-cyan-100">
                Hasta 10 Gbps de velocidad simétrica con nuestra tecnología cuántica
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg border border-cyan-500 border-opacity-10 hover:border-opacity-30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-cyan-900 bg-opacity-50 p-3 rounded-full">
                  <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-white">Seguridad Cuántica</h3>
              </div>
              <p className="mt-2 text-sm text-cyan-100">
                Encriptación imposible de hackear con tecnología de fotones entrelazados
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg border border-cyan-500 border-opacity-10 hover:border-opacity-30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-cyan-900 bg-opacity-50 p-3 rounded-full">
                  <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-white">Cobertura Total</h3>
              </div>
              <p className="mt-2 text-sm text-cyan-100">
                Red de fibra óptica interplanetaria con cobertura en toda la galaxia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolographicHero;
