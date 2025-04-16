import React from 'react';
import HolographicHero from '../components/HolographicHero';
import QuantumPlansPreview from '../components/QuantumPlansPreview';
import CoveragePreview from '../components/CoveragePreview';
import CompanyPreview from '../components/CompanyPreview';

const HomePage = ({ onNavigate }) => {
  return (
    <div className="bg-gray-900">
      <HolographicHero onNavigate={onNavigate} />
      
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        <QuantumPlansPreview onNavigate={onNavigate} />
        <CoveragePreview onNavigate={onNavigate} />
        <CompanyPreview onNavigate={onNavigate} />
      </div>
    </div>
  );
};

export default HomePage;

// DONE