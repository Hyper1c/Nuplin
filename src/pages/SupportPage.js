import React from 'react';
import PageContainer from '../components/PageContainer';
import SupportOptions from '../components/SupportOptions';
import FAQSection from '../components/FAQSection';
import SupportForm from '../components/SupportForm';

const SupportPage = () => {
  return (
    <PageContainer 
      title="Soporte Técnico" 
      subtitle="Asistencia Cuántica Instantánea"
    >
      <div className="space-y-12">
        <SupportOptions />
        <FAQSection />
        <SupportForm />
      </div>
    </PageContainer>
  );
};

export default SupportPage;