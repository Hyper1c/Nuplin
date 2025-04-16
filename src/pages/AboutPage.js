import React from 'react';
import PageContainer from '../components/PageContainer';
import TeamMember from '../components/TeamMember';

const AboutPage = () => {
  return (
    <PageContainer 
      title="Sobre Nosotros" 
      subtitle="Construyendo el Futuro de la Conectividad"
    >
      <div className="space-y-12 text-center">

        {/* Historia */}
        <div className="bg-[#111827] bg-opacity-70 rounded-xl p-8 shadow-md border border-cyan-500/20">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Nuestra Historia</h3>
          <p className="text-gray-300 mb-2">
            Fundada en 2045, FiberLink Quantum nació de la visión de revolucionar la comunicación humana. 
            Comenzamos como un pequeño equipo en Bogotá y hoy conectamos millones en todo el planeta.
          </p>
          <p className="text-gray-300">
            Nuestra tecnología cuántica patentada nos permite ofrecer velocidades nunca antes vistas, 
            rompiendo las barreras del espacio y el tiempo.
          </p>
        </div>

        {/* Equipo */}
        <div className="bg-[#111827] bg-opacity-70 rounded-xl p-8 shadow-md border border-cyan-500/20">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6">Nuestro Equipo</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TeamMember 
              name="Javier Augusto Blandon" 
              role="CEO & Fundador" 
              bio=""
            />
            <TeamMember 
              name="Nose" 
              role="Nose" 
              bio=""
            />
            <TeamMember 
              name="NoseO" 
              role="NoseO" 
              bio=""
            />
          </div>
        </div>

        {/* Misión */}
        <div className="bg-[#111827] bg-opacity-70 rounded-xl p-8 shadow-md border border-cyan-500/20">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Nuestra Misión</h3>
          <p className="text-gray-300">
            FIBERLINK a través de su servicio y tecnología de punta, tiene como propósito ser la herramienta para que todas las personas que habitan el sector de influencia tengan la mejor experiencia de conectividad, soporte técnico y servicio al cliente.
          </p>
        </div>

        {/* Visión */}
        <div className="bg-[#111827] bg-opacity-70 rounded-xl p-8 shadow-md border border-cyan-500/20">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Nuestra Visión</h3>
          <p className="text-gray-300">
            Lograr una excelente cobertura en las poblaciones donde tenemos acceso, garantizando así un servicio confiable y reconocido por la calidad en el servicio y compromiso hacia los usuarios.
          </p>
        </div>

        {/* Valores título */}
        <h2 className="text-3xl font-bold text-white mt-8 mb-4">VALORES</h2>

        {/* Valores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Honestidad", text: "Definimos nuestras líneas de actualización a través de la verdad, decencia y justicia con quienes interactuamos." },
            { title: "Respeto", text: "Las relaciones interpersonales se fundamentan en el respeto y la consideración, generando un ambiente adecuado." },
            { title: "Excelencia", text: "Satisfacemos con altos estándares de calidad a todos nuestros clientes. El éxito se mide por resultados." },
            { title: "Cooperación", text: "Aplicamos estrategias colaborativas enfocadas al bienestar del usuario y objetivos empresariales comunes." }
          ].map((valor, index) => (
            <div key={index} className="bg-[#111827] bg-opacity-70 rounded-xl p-6 shadow-md border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">{valor.title}</h3>
              <p className="text-gray-300">{valor.text}</p>
            </div>
          ))}
        </div>
        
      </div>
    </PageContainer>
  );
};

export default AboutPage;
