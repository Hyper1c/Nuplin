import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario
  };

  return (
    <div className="bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-xl p-8 shadow-xl border-2 border-cyan-500 border-opacity-20 h-full">
      <h3 className="text-2xl font-bold text-white mb-6">Envíanos un Mensaje</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-cyan-100 mb-1">
            Nombre Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-gray-700 border-2 border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            placeholder="Tu nombre"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-cyan-100 mb-1">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-gray-700 border-2 border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            placeholder="tu@email.com"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-cyan-100 mb-1">
            Asunto
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-gray-700 border-2 border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            required
          >
            <option value="">Selecciona un asunto</option>
            <option value="technical">Soporte Técnico</option>
            <option value="sales">Ventas</option>
            <option value="billing">Facturación</option>
            <option value="other">Otro</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-cyan-100 mb-1">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-gray-700 border-2 border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            placeholder="Describe tu consulta..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

// DONE