import React from 'react';

const ContactSection = () => {
  return (
    <div className="py-16 bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Contáctanos</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Información de Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-medium">Línea de atención</p>
                  <p>+57 1 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-medium">Correo electrónico</p>
                  <p>contacto@fiberlink.com.co</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-medium">Oficina principal</p>
                  <p>Calle 123 #45-67, Bogotá, Colombia</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Envíanos un Mensaje</h3>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Nombre completo" 
                  className="w-full p-3 bg-blue-800 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-blue-300"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Correo electrónico" 
                  className="w-full p-3 bg-blue-800 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-blue-300"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Mensaje" 
                  rows="4"
                  className="w-full p-3 bg-blue-800 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-blue-300"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-white text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;