import React from 'react';
import HolographicCoverage from '../components/HolographicCoverage';
import PageContainer from '../components/PageContainer';

const CoveragePage = () => {
  return (
    <PageContainer 
      title="Mapa de Cobertura" 
      subtitle="Verifica si nuestra red cuántica llega a tu ubicación"
    >
      <HolographicCoverage />
    </PageContainer>
  );
};

export default CoveragePage;

// DONE