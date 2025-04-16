import React from 'react';

const HolographicCoverage = () => {
  return (
    <section id="coverage" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii4wNSIgbnVtT2N0YXZlcz0iNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNLTItMmg2MDR2NjA0SC0yeiIvPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Cobertura</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              En Todo el Planeta y Más Allá
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-cyan-100 mx-auto">
            Nuestra red de fibra cuántica se extiende por todo el globo y las colonias espaciales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  
  <div className="relative md:col-span-2">
    <div className="bg-gradient-to-br from-blue-900 to-gray-900 rounded-xl p-1">
      <div className="bg-gray-900 rounded-lg p-4 h-96 flex items-center justify-center">
        <div className="text-center">
          <svg className="mx-auto h-16 w-16 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <h3 className="mt-4 text-xl font-bold text-white">Mapa de Cobertura </h3>
          <p className="mt-2 text-cyan-200">Explora nuestra red cuántica en tiempo real</p>
        </div>
      </div>
    </div>
    <div className="absolute -top-4 -right-4 w-32 h-32 bg-cyan-500 rounded-full opacity-20 filter blur-3xl"></div>
    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full opacity-20 filter blur-3xl"></div>
  </div>

</div>


        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Las Camelias', 'El Placer', 'Parque Principal', 'El Hospital', 'ETC', 'ETC', 'ETC', 'ETC'].map((city, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-lg p-4 text-center border border-cyan-500 border-opacity-10 hover:border-opacity-30 transition-all duration-300">
              <h3 className="text-lg font-medium text-white">{city}</h3>
              <p className="mt-1 text-sm text-cyan-300">Cobertura 100%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HolographicCoverage;