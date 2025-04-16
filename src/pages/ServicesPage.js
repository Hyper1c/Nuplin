import React from 'react';
import PageContainer from '../components/PageContainer';
import ServiceCard from '../components/ServiceCard';

const channelCategories = [
  {
    title: 'Regionales',
    channels: ['Caracol', 'Canal Institucional', 'Canal 1', 'Capital', 'Teleantioquia', 'Telecafé', 'Telecaribe', 'Telepacífico', 'TRO', 'TeleIslas', 'Canal Trece', 'Canal Congreso']
  },
  {
    title: 'Infantiles',
    channels: ['Cartoon Network', 'Discovery Kids', 'Disney Channel']
  },
  {
    title: 'Entretenimiento',
    channels: ['Glitz', 'TNT Novelas', 'Universal Channel', 'TL Novelas', 'Canal Sony']
  },
  {
    title: 'Películas y Series',
    channels: ['TNT', 'DHE', 'Cinecanal', 'FX', 'Star Channel', 'Space', 'Golden', 'TVC', 'TBS', 'AXN', 'AMC', 'Studio Universal', 'USA', 'Paramount Channel', 'History', 'History 2']
  },
  {
    title: 'Deportes',
    channels: ['ESPN', 'ESPN 2', 'ESPN 3', 'ESPN 4', 'ESPN Extra', 'TNT Sports', 'Fox Sports', 'Fox Sports 2', 'Fox Sports 3']
  },
  {
    title: 'Religiosos',
    channels: ['Enlace', 'EWTN', 'Cristovisión']
  },
  {
    title: 'Musicales',
    channels: ['HTV', 'Telehit', 'Canal 13', 'MTV', 'Tigo Music']
  }
];

const plans = [
  {
    name: "Nuplin Basic",
    speed: "1 Dispositivo",
    price: "29.000",
    features: [
      "Acceso Ilimitado",
      "Programacion Actualizada",
      "Actualizaciones Automaticas",
      "Calidad HD",
      "Atencion y Ayuda"
    ],
    popular: false,
    color: "from-blue-500 to-cyan-400"
  },
  {
    name: "Nuplin Pro",
    speed: "2 Dispositivo",
    price: "50.000",
    features: [
      "Acceso Ilimitado",
      "Programacion Actualizada",
      "Actualizaciones Automaticas",
      "Calidad HD",
      "Atencion y Ayuda"
    ],
    popular: true,
    color: "from-purple-500 to-cyan-400"
  },
  {
    name: "Nuplin Premium",
    speed: "5 Dispositivos",
    price: "215.000",
    features: [
      "Acceso Ilimitado",
      "Programacion Actualizada",
      "Actualizaciones Automaticas",
      "Calidad HD",
      "Atencion y Ayuda"
    ],
    popular: false,
    color: "from-indigo-500 to-purple-400"
  }
];

const ServicesPage = () => {
  return (
    <PageContainer title="Nuestros Servicios" subtitle="Exclusivos">
      
      {/* Servicios principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <ServiceCard 
          title="Internet"
          description="Internet para tu hogar"
          icon={<svg className="h-10 w-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>}
        />
        <ServiceCard 
          title="Nuplin"
          description="Aplicaciones extensa de programas para ver en cualquier lugar"
          icon={<svg className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" /></svg>}
        />
        <ServiceCard 
          title="Parabolica"
          description="Parabolica para tu hogar"
          icon={<svg className="h-10 w-10 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
        />
      </div>

      {/* Sección de explicación de fibra óptica */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-5xl mx-auto mt-16">
        {[
          {
            title: 'Nuplin',
            subtitle:
              'Con un catálogo diverso de películas, series y documentales, Nuplin te ofrece contenido exclusivo y de alta calidad. Sumérgete en una experiencia visual sin igual y accede a tus favoritos desde cualquier dispositivo, en cualquier momento.',
          },
          {
            title: 'Nuplin',
            subtitle:
              'El Paquete Básico+ de Nuplin te ofrece acceso ilimitado a un amplio catálogo de películas, series y documentales en alta definición. Disfruta de contenido exclusivo sin interrupciones publicitarias y actualizaciones semanales. Además, con la posibilidad de ver en dos dispositivos simultáneamente, es ideal para toda la familia.',
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl px-6 py-8 border border-cyan-500 border-opacity-10 hover:border-opacity-30 transition-all duration-300 text-center"
          >
            <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
              {stat.title}
            </p>
            <p className="text-gray-300 text-base leading-relaxed">{stat.subtitle}</p>
          </div>
        ))}
      </div>

      <h1 className="text-3xl font-bold text-white mb-8 text-center">Los programas que ofrecemos en nuestro plan Premium de Nuplin</h1>


      {/* Canales de TV */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Canales de TV</h2>
        {channelCategories.map((category, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">{category.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {category.channels.map((channel, i) => (
                <div key={i} className="border border-purple-500 rounded-2xl p-4 bg-white bg-opacity-5 text-white text-center shadow-md">
                  <div className="h-16 mb-2 flex items-center justify-center">
                    <img src={`path_to_logo/${channel.toLowerCase().replace(/\s+/g, '-')}.png`} alt={channel} className="max-h-full max-w-full object-contain" />
                  </div>
                  <p className="text-sm font-medium">{channel}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Planes disponibles */}
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Planes Disponibles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`relative rounded-2xl overflow-hidden border-2 ${plan.popular ? 'border-cyan-400' : 'border-gray-700'} hover:border-cyan-400 transition-all duration-300`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                MÁS POPULAR
              </div>
            )}
            <div className="bg-gray-900 p-6 h-full">
              <h3 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${plan.color}`}>
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold text-white">${plan.price}</span>
                <span className="ml-1 text-lg font-medium text-gray-300">/mes</span>
              </div>
              <p className="mt-2 text-cyan-300">{plan.speed}</p>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="flex-shrink-0 h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full bg-gradient-to-r ${plan.color} text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300`}>
                Contratar Ahora
              </button>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default ServicesPage;
