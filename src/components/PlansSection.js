import React from 'react';

const PlansSection = () => {
  const plans = [
    {
      name: "Básico",
      speed: "100 Mbps",
      price: "49.900",
      features: ["Internet ilimitado", "WiFi incluido", "Soporte 24/7"]
    },
    {
      name: "Avanzado",
      speed: "300 Mbps",
      price: "79.900",
      features: ["Internet ilimitado", "WiFi incluido", "Soporte 24/7", "2 meses gratis"]
    },
    {
      name: "Premium",
      speed: "600 Mbps",
      price: "99.900",
      features: ["Internet ilimitado", "WiFi incluido", "Soporte 24/7", "3 meses gratis", "Instalación gratis"]
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Nuestros Planes</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className={`p-6 ${index === 1 ? 'bg-blue-900 text-white' : 'bg-white text-blue-900'}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-xl mb-4">{plan.speed}</p>
                <p className="text-3xl font-bold mb-6">${plan.price}<span className="text-sm">/mes</span></p>
                <button className={`w-full py-2 rounded-lg font-medium ${index === 1 ? 'bg-white text-blue-900 hover:bg-gray-100' : 'bg-blue-900 text-white hover:bg-blue-800'} transition`}>
                  Contratar
                </button>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlansSection;