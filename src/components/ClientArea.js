import React, { useState } from 'react';

const ClientArea = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Validación básica
    if (credentials.email && credentials.password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCredentials({ email: '', password: '' });
  };

  return (
    <section className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isLoggedIn ? (
          <div className="bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-cyan-500 border-opacity-20 max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Área de Clientes</h2>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cyan-100 mb-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  className="w-full bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-cyan-100 mb-1">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  className="w-full bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-600 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                    Recordarme
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-cyan-400 hover:text-cyan-300">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                >
                  Iniciar Sesión
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-cyan-500 border-opacity-20">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-white">Panel del Cliente</h2>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-gray-700 text-cyan-300 rounded-lg hover:bg-gray-600 transition"
              >
                Cerrar Sesión
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-900 p-6 rounded-lg border border-cyan-500 border-opacity-20">
                <h3 className="text-lg font-medium text-white mb-2">Plan Actual</h3>
                <p className="text-2xl font-bold text-cyan-400">Quantum Pro</p>
                <p className="text-gray-400">5 Gbps simétricos</p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-cyan-500 border-opacity-20">
                <h3 className="text-lg font-medium text-white mb-2">Próximo Pago</h3>
                <p className="text-2xl font-bold text-cyan-400">$199.900</p>
                <p className="text-gray-400">Vence el 15/12/2050</p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-cyan-500 border-opacity-20">
                <h3 className="text-lg font-medium text-white mb-2">Consumo</h3>
                <p className="text-2xl font-bold text-cyan-400">2.7 TB</p>
                <p className="text-gray-400">Este mes</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-cyan-500 border-opacity-20">
                <h3 className="text-lg font-medium text-white mb-4">Facturas</h3>
                <ul className="space-y-3">
                  {['Noviembre 2050', 'Octubre 2050', 'Septiembre 2050'].map((invoice, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span className="text-gray-300">{invoice}</span>
                      <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                        Descargar
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-cyan-500 border-opacity-20">
                <h3 className="text-lg font-medium text-white mb-4">Soporte Rápido</h3>
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 text-sm">
                    Solicitar Teletransporte Técnico
                  </button>
                  <button className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-600 transition border border-gray-600 text-sm">
                    Abrir Chat con IA
                  </button>
                  <button className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-600 transition border border-gray-600 text-sm">
                    Ver Tutoriales Holográficos
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientArea;