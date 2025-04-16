import React from 'react';

const CoveragePreview = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-gray-900 bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Cobertura</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              En Todo el Planeta
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-cyan-100 mx-auto">
            Nuestra red se extiende por las principales ciudades y más allá
          </p>
        </div>

        <div className="bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-cyan-500 border-opacity-20 mb-10 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-white mb-4">Atencion Por Operador</h3>
              <p className="text-gray-300 mb-4">
              Mensaje y comunicación con soporte o asesor sobre dudas y preguntas
              </p>

              <a
               href="https://api.whatsapp.com/send?phone=573216698114"
              target="_blank"
              rel="noopener noreferrer"
              >
              <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300">
              Hablar por WhatsApp
              </button>
              </a>

                
              
              <div className="relative">
               
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-gray-700 p-4 rounded-lg border border-cyan-500 border-opacity-20">
                <div className="h-40 w-40 bg-gradient-to-br from-blue-900 to-gray-800 rounded flex items-center justify-center">
                  <svg className="h-16 w-16 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => onNavigate('coverage')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/30 transition-all duration-300"
          >
            Explorar cobertura completa
            <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoveragePreview;