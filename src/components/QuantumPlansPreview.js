import React from 'react';

const QuantumPlansPreview = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Nuestros Planes</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Velocidad Cuántica
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-cyan-100 mx-auto">
            Descubre nuestras soluciones de conectividad futurista
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {['Básico', 'Avanzado', 'Premium'].map((plan, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl p-6 border border-cyan-500 border-opacity-10 hover:border-opacity-30 transition-all duration-300">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">{plan}</h3>
              <p className="text-gray-300 mb-4">Desde ${index === 0 ? '99.900' : index === 1 ? '199.900' : '299.900'}/mes</p>
              <ul className="space-y-2 mb-6">
                {[
                  'Internet ilimitado',
                  'WiFi de última generación',
                  index > 0 ? 'Prioridad en la red' : 'Soporte estándar',
                  index > 1 ? 'Conexión interestelar' : ''
                ].filter(Boolean).map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="flex-shrink-0 h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => onNavigate('plans')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/30 transition-all duration-300"
          >
            Ver todos los planes
            <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuantumPlansPreview;