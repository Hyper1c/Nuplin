import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "La velocidad cuántica de FiberLink revolucionó mi negocio interplanetario. Ahora puedo comunicarme con mis colonias en Marte en tiempo real!",
      name: "Elon Tusk",
      role: "CEO de SpaceX 2.0",
      avatar: "M"
    },
    {
      quote: "Nunca imaginé que podría transmitir hologramas 8D sin buffering. FiberLink hizo posible lo imposible!",
      name: "María González",
      role: "Streamer Holográfica",
      avatar: "G"
    },
    {
      quote: "Como científico cuántico, necesitaba una conexión que no colapsara mi función de onda. FiberLink fue la solución perfecta!",
      name: "Dr. Heisenberg",
      role: "Investigador Cuántico",
      avatar: "H"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Testimonios</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Nuestros Clientes Intergalácticos
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-cyan-100 mx-auto">
            Descubre lo que dicen sobre nuestra red cuántica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl p-6 border border-cyan-500 border-opacity-10 hover:border-opacity-30 transition-all duration-300">
              <div className="mb-4">
                <svg className="h-8 w-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-cyan-900 bg-opacity-50 h-10 w-10 rounded-full flex items-center justify-center text-cyan-300 font-bold">
                  {testimonial.avatar}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">{testimonial.name}</p>
                  <p className="text-sm text-cyan-300">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;