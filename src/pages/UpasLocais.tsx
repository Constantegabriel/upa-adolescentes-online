
import React from 'react';
import PageHeader from '@/components/shared/PageHeader';
import UpaLocalCard from '@/components/shared/UpaLocalCard';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { localUpas } from '@/data/members';

const UpasLocais = () => {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="UPAs Locais"
        description="Conheça as UPAs locais que compõem nossas federações"
        image="https://images.unsplash.com/photo-1473177104440-ffee2f376098"
      />
      
      <div className="container px-4 py-12">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center blue-gradient-text">Nossas UPAs Locais</h2>
            <p className="text-lg text-gray-700 text-center">
              As UPAs locais são grupos de adolescentes organizados em cada igreja presbiteriana. São o lugar onde os adolescentes crescem na fé, desenvolvem amizades cristãs e aprendem a servir a Deus e ao próximo.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {localUpas.map((upa, index) => (
            <ScrollReveal key={upa.id} delay={index * 150}>
              <UpaLocalCard 
                id={upa.id}
                name={upa.name}
                image={upa.image}
                location={upa.location}
                church={upa.church}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpasLocais;
