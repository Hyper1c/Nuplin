import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cómo activo mi conexión cuántica?",
      answer: "Simplemente enciende tu router neuronal y di 'Activar modo cuántico'. El sistema se configurará automáticamente."
    },
    {
      question: "¿Qué hago si mi teletransporte falla?",
      answer: "Verifica que tu dispositivo esté en una zona con cobertura cuántica. Si el problema persiste, reinicia el proceso de materialización."
    },
    {
      question: "¿Puedo llevar mi conexión a otros planetas?",
      answer: "Sí, nuestros routers portátiles cuánticos funcionan en cualquier parte de la Vía Láctea. Para otras galaxias, consulta nuestros planes interestelares."
    },
    {
      question: "¿Cómo actualizo a WiFi 9?",
      answer: "Dirígete al panel holográfico de configuración y selecciona 'Actualización dimensional'. El proceso toma aproximadamente 2.7 segundos."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-xl p-8 shadow-xl border-2 border-cyan-500 border-opacity-20">
      <h3 className="text-2xl font-bold text-white mb-6">Preguntas Frecuentes</h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700 pb-4">
            <button 
              onClick={() => toggleFAQ(index)}
              className="flex items-center justify-between w-full text-left text-cyan-100 hover:text-white"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <svg 
                className={`h-5 w-5 text-cyan-400 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="mt-2 text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;