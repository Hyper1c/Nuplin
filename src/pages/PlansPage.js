import React from 'react';
import PageContainer from '../components/PageContainer';
import QuantumPlans from '../components/QuantumPlans';

const PlansPage = () => {
  return (
    <PageContainer 
      title="Nuestros Planes" 
      subtitle="Para Todos los Hogares"
    >
      <QuantumPlans />
    </PageContainer>
  );
};

export default PlansPage;