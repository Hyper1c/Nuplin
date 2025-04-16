import React, { useState } from 'react';
import NeonNavbar from './components/NeonNavbar';
import HomePage from './pages/HomePage';
import PlansPage from './pages/PlansPage';
import CoveragePage from './pages/CoveragePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import QuantumFooter from './components/QuantumFooter';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'plans':
        return <PlansPage />;
      case 'coverage':
        return <CoveragePage />;
      case 'services':
        return <ServicesPage />;
      case 'about':
        return <AboutPage />;
      case 'support':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <NeonNavbar onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <QuantumFooter />
    </div>
  );
};

export default App;