import React, { useState } from 'react';

const NeonNavbar = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverItem, setHoverItem] = useState(null);

  const navItems = [
    { name: 'Inicio', id: 'home' },
    { name: 'Planes', id: 'plans' },
    { name: 'Cobertura', id: 'coverage' },
    { name: 'Nuplin Paquetes', id: 'services' },
    { name: 'Nosotros', id: 'about' },
    { name: 'Soporte', id: 'support' }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/573001234567', '_blank');
  };

  return (
    <nav className="bg-gray-900 bg-opacity-90 backdrop-blur-md border-b-2 border-cyan-500 border-opacity-30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                FiberLink
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsOpen(false);
                    }}
                    className={`px-3 py-2 rounded-md text-sm font-medium relative ${hoverItem === item.id ? 'text-cyan-300' : 'text-gray-300 hover:text-white'}`}
                    onMouseEnter={() => setHoverItem(item.id)}
                    onMouseLeave={() => setHoverItem(null)}
                  >
                    {item.name}
                    {hoverItem === item.id && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button 
                onClick={handleWhatsApp}
                className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-12.71c-5.258 0-9.525 4.267-9.525 9.525 0 1.982.603 3.823 1.639 5.36L2 22l5.233-1.237a9.526 9.526 0 0 0 4.949 1.386c5.258 0 9.525-4.267 9.525-9.525S16.73 2.672 11.472 2.672z"/>
                </svg>
                WhatsApp
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setIsOpen(false);
                onNavigate(item.id);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 w-full text-left"
            >
              {item.name}
            </button>
          ))}
          <div className="pt-4 pb-3 border-t border-gray-700">
            <button 
              onClick={handleWhatsApp}
              className="w-full bg-gradient-to-r from-green-500 to-cyan-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-12.71c-5.258 0-9.525 4.267-9.525 9.525 0 1.982.603 3.823 1.639 5.36L2 22l5.233-1.237a9.526 9.526 0 0 0 4.949 1.386c5.258 0 9.525-4.267 9.525-9.525S16.73 2.672 11.472 2.672z"/>
              </svg>
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NeonNavbar;