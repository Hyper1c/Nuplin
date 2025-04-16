import React from 'react';
import PageContainer from '../components/PageContainer';
import QuantumCompany from '../components/QuantumCompany';

const CompanyPage = () => {
  return (
    <PageContainer 
      title="Nuestra Empresa" 
      subtitle="Líderes en Tecnología Cuántica"
    >
      <QuantumCompany />
    </PageContainer>
  );
};

export default CompanyPage;