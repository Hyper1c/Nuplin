import React from 'react';
import PageContainer from '../components/PageContainer';
import ContactCards from '../components/ContactCards';
import ContactMap from '../components/ContactMap';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <PageContainer 
      title="Comunícate con Nosotros" 
      subtitle="Soporte Cuántico Instantáneo"
    >
      <div className="space-y-12">
        <ContactCards />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactMap />
          <ContactForm />
        </div>
      </div>
    </PageContainer>
  );
};

export default ContactPage;