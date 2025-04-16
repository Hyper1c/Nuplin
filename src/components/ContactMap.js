import React from 'react';

const ContactMap = () => {
  return (
    <div className="bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-xl p-8 shadow-xl border-2 border-cyan-500 border-opacity-20 h-full">
      <h3 className="text-2xl font-bold text-white mb-6">Nuestra Ubicación</h3>
      <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-900 to-gray-800 rounded-lg overflow-hidden border-2 border-cyan-500 border-opacity-20">
        <div className="flex items-center justify-center h-full">
          <svg className="h-16 w-16 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-300"><span className="font-semibold text-cyan-300">Dirección:</span> YOLOMBO  TATATATATATA</p>
        <p className="text-gray-300"><span className="font-semibold text-cyan-300">Horario:</span> Lunes a Viernes 7AM - 5PM</p>
        <p className="text-gray-300"><span className="font-semibold text-cyan-300">Horario:</span> Sabados 7AM - 2PM</p>
        <p className="text-gray-300"><span className="font-semibold text-cyan-300">Teléfono:</span> Sabra Dios</p>
      </div>
    </div>
  );
};

export default ContactMap;