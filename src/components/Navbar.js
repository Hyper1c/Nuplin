import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-blue-900 font-bold text-2xl">FiberLink</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-blue-900 font-medium hover:text-blue-600">Inicio</a>
            <a href="#" className="text-blue-900 font-medium hover:text-blue-600">Planes</a>
            <a href="#" className="text-blue-900 font-medium hover:text-blue-600">Cobertura</a>
            <a href="#" className="text-blue-900 font-medium hover:text-blue-600">Empresa</a>
            <a href="#" className="text-blue-900 font-medium hover:text-blue-600">Contacto</a>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-blue-900 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <a href="#" className="block py-2 text-blue-900 font-medium">Inicio</a>
          <a href="#" className="block py-2 text-blue-900 font-medium">Planes</a>
          <a href="#" className="block py-2 text-blue-900 font-medium">Cobertura</a>
          <a href="#" className="block py-2 text-blue-900 font-medium">Empresa</a>
          <a href="#" className="block py-2 text-blue-900 font-medium">Contacto</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;