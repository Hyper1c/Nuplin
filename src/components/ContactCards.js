import React from 'react';

const ContactCards = () => {
  const contactMethods = [
    {
      name: "WhatsApp",
      description: "Chat instantáneo con nuestro equipo",
      icon: (
        <svg className="h-10 w-10 text-green-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-12.71c-5.258 0-9.525 4.267-9.525 9.525 0 1.982.603 3.823 1.639 5.36L2 22l5.233-1.237a9.526 9.526 0 0 0 4.949 1.386c5.258 0 9.525-4.267 9.525-9.525S16.73 2.672 11.472 2.672z"/>
        </svg>
      ),
      action: "Abrir Chat",
      color: "from-green-500 to-cyan-400",
      link: "https://wa.me/573001234567"
    },
    {
      name: "Correo Electrónico",
      description: "Responde en menos de 24 horas",
      icon: (
        <svg className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      action: "Enviar Email",
      color: "from-blue-500 to-cyan-400",
      link: "mailto:soporte@fiberlinkquantum.com"
    },
    {
      name: "Visítanos",
      description: "Oficina principal en Yolombo",
      icon: (
        <svg className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      action: "Ver Ubicación",
      color: "from-purple-500 to-cyan-400"
    }
  ];

  const handleAction = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-xl p-8 shadow-xl border-2 border-cyan-500 border-opacity-20">
      <h3 className="text-2xl font-bold text-white mb-6">Métodos de Contacto</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactMethods.map((method, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg border-2 border-gray-700 hover:border-cyan-400 transition-all duration-300">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyan-900 bg-opacity-50 text-white mb-4">
              {method.icon}
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">{method.name}</h4>
            <p className="text-gray-300 mb-4">{method.description}</p>
            <button
              onClick={() => handleAction(method.link)}
              className={`w-full bg-gradient-to-r ${method.color} text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300`}
            >
              {method.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCards;