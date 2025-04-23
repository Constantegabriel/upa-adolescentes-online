
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import PageHeader from '@/components/shared/PageHeader';
import MemberCard from '@/components/shared/MemberCard';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { federationMembers, federationData } from '@/data/members';

const FederacaoDetalhe = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const federationInfo = federationData.find(f => f.id === id);
  const members = id ? federationMembers[id as keyof typeof federationMembers] : undefined;
  
  if (!federationInfo || !members) {
    return (
      <div className="container px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Federação não encontrada</h2>
        <p className="text-gray-500 mb-6">A federação que você está procurando não existe ou foi removida.</p>
        <Button asChild>
          <Link to="/federacoes">Voltar para federações</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      <PageHeader 
        title={federationInfo.name}
        description={`Diretoria da ${federationInfo.name} - ${federationInfo.region}`}
        image={federationInfo.image}
      />
      
      <div className="container px-4 py-12">
        <Button 
          variant="outline" 
          size="sm"
          className="mb-8"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Voltar para federações
        </Button>
        
        <ScrollReveal>
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold mb-4 blue-gradient-text">Sobre a {federationInfo.name}</h2>
              <p className="text-gray-700 mb-3">
                A {federationInfo.name} coordena o trabalho de {federationInfo.numLocalUpas} UPAs locais na {federationInfo.region}, promovendo a unidade e fortalecendo o trabalho com adolescentes em suas igrejas.
              </p>
              <p className="text-gray-700">
                A diretoria trabalha em conjunto para organizar eventos, retiros, encontros e capacitações para os adolescentes e líderes das UPAs locais.
              </p>
            </div>
          </div>
        </ScrollReveal>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center blue-gradient-text">Diretoria</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <ScrollReveal key={member.id} delay={index * 100}>
              <MemberCard {...member} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FederacaoDetalhe;
