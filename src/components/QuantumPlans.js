import React, { useState } from 'react';

const QuantumPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const quantumPlans = [
    {
      name: "Básico",
      speed: "10 Mbps",
      price: "$49.900",
      features: [
        "Internet 10 Mbps simétrico",
        "Teletransporte de 100GB/mes",
        "5 dispositivos simultáneos",
        "Asistencia IA básica"
      ],
      color: "from-blue-500 to-cyan-400"
    },
    {
      name: "Avanzado Cuántico",
      speed: "20 Mbps",
      price: "$89.900",
      features: [
        "Internet 20 Mbps simétrico",
        "Teletransporte ilimitado",
        "15 dispositivos simultáneos",
        "Asistencia IA premium",
        "Seguridad cuántica incluida"
      ],
      color: "from-purple-500 to-blue-400"
    },
    {
      name: "Premium Cuántico",
      speed: "30 Mbps",
      price: "$129.900",
      features: [
        "Internet 30 Mbps simétrico",
        "Teletransporte ilimitado",
        "Dispositivos ilimitados",
        "Asistencia IA 24/7",
        "Seguridad cuántica avanzada",
        "Almacenamiento holográfico 1TB"
      ],
      color: "from-cyan-500 to-purple-600"
    }
  ];

  const nuplinPlans = [
    {
      name: "Nuplin Basic",
      speed: "1 Dispositivo",
      price: "$29.000",
      features: [
        "Acceso Ilimitado",
        "Programación Actualizada",
        "Actualizaciones Automáticas",
        "Calidad HD",
        "Atención y Ayuda"
      ],
      color: "from-pink-500 to-red-500"
    },
    {
      name: "Nuplin Pro",
      speed: "2 Dispositivos",
      price: "$50.000",
      features: [
        "Acceso Ilimitado",
        "Programación Actualizada",
        "Actualizaciones Automáticas",
        "Calidad HD",
        "Atención y Ayuda"
      ],
      color: "from-yellow-400 to-red-500"
    },
    {
      name: "Nuplin Premium",
      speed: "5 Dispositivos",
      price: "$215.000",
      features: [
        "Acceso Ilimitado",
        "Programación Actualizada",
        "Actualizaciones Automáticas",
        "Calidad HD",
        "Atención y Ayuda"
      ],
      color: "from-indigo-500 to-fuchsia-500"
    }
  ];

  const renderPlans = (plans) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {plans.map((plan, index) => (
        <div 
          key={index}
          className={`bg-gray-900 rounded-xl p-6 border-2 ${selectedPlan === plan.name ? 'border-cyan-400' : 'border-gray-700'} transition-all duration-300`}
          onClick={() => setSelectedPlan(plan.name)}
        >
          <div className={`bg-gradient-to-r ${plan.color} text-white py-2 px-4 rounded-lg font-bold text-xl mb-4`}>
            {plan.name}
          </div>
          <div className="text-4xl font-bold text-white mb-2">{plan.speed}</div>
          <div className="text-2xl font-bold text-cyan-400 mb-6">{plan.price}/mes</div>
          
          <ul className="space-y-3 mb-6">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start text-gray-300">
                <svg className="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          
          <button
            className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300`}
          >
            Contratar Ahora
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-xl p-8 shadow-xl border-2 border-cyan-500 border-opacity-20">
      {/* Sección Cuántica */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Nuestros Planes De Internet</h2>
        <p className="text-gray-300 mb-8">Elige el paquete que mejor se adapte a tus necesidades</p>
      </div>

      {renderPlans(quantumPlans)}

      {/* Sección Nuplin */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold text-white mb-2">Planes Nuplin</h2>
        <p className="text-gray-300 mb-8">TV sin límites para todos tus dispositivos</p>
      </div>

      {renderPlans(nuplinPlans)}
    </div>
  );
};

export default QuantumPlans;
