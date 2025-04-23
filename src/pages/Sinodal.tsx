
import React from 'react';
import PageHeader from '@/components/shared/PageHeader';
import MemberCard from '@/components/shared/MemberCard';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { sinodalMembers } from '@/data/members';

const Sinodal = () => {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Sinodal UPA"
        description="Conheça a diretoria da Sinodal UPA"
        image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
      />
      
      <div className="container px-4 py-12">
        <div className="mb-16">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center blue-gradient-text">Nossa Liderança Sinodal</h2>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843" 
                  alt="Liderança Sinodal UPA" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <p className="text-lg text-gray-700 mb-4">
                    Nossa diretoria Sinodal é formada por jovens comprometidos com o crescimento espiritual e o trabalho com adolescentes em todas as federações da nossa região. Juntos, trabalhamos para fortalecer a UPA, promovendo eventos, treinamentos e comunhão entre todas as UPAs locais.
                  </p>
                  <p className="text-gray-700">
                    Com dedicação e amor, buscamos servir a Deus e ajudar no desenvolvimento espiritual e pessoal dos adolescentes presbiterianos, seguindo os princípios bíblicos e a tradição reformada.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
        
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center blue-gradient-text">Diretoria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sinodalMembers.map((member, index) => (
              <ScrollReveal key={member.id} delay={index * 100}>
                <MemberCard {...member} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sinodal;
