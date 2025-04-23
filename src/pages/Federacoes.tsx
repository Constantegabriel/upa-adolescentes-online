
import React from 'react';
import PageHeader from '@/components/shared/PageHeader';
import FederationCard from '@/components/shared/FederationCard';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { federationData } from '@/data/members';

const Federacoes = () => {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Federações UPA"
        description="Conheça as federações que compõem nossa Sinodal"
        image="https://images.unsplash.com/photo-1466442929976-97f336a657be"
      />
      
      <div className="container px-4 py-12">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center blue-gradient-text">Nossas Federações</h2>
            <p className="text-lg text-gray-700 text-center">
              As Federações são agrupamentos de UPAs locais por região geográfica, facilitando a coordenação de atividades e fortalecendo o trabalho em conjunto. Cada Federação possui sua própria diretoria e realiza eventos periódicos para a integração das UPAs locais.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {federationData.map((federation, index) => (
            <ScrollReveal key={federation.id} delay={index * 150}>
              <FederationCard 
                id={federation.id}
                name={federation.name}
                image={federation.image}
                region={federation.region}
                numLocalUpas={federation.numLocalUpas}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Federacoes;
