
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import PageHeader from '@/components/shared/PageHeader';
import MemberCard from '@/components/shared/MemberCard';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin } from 'lucide-react';
import { localUpas } from '@/data/members';

const UpaLocalDetalhe = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const upa = localUpas.find(u => u.id === id);
  
  if (!upa) {
    return (
      <div className="container px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">UPA local não encontrada</h2>
        <p className="text-gray-500 mb-6">A UPA local que você está procurando não existe ou foi removida.</p>
        <Button asChild>
          <Link to="/upas-locais">Voltar para UPAs locais</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      <PageHeader 
        title={upa.name}
        description={`Diretoria da ${upa.name} - ${upa.church}`}
        image={upa.image}
      />
      
      <div className="container px-4 py-12">
        <Button 
          variant="outline" 
          size="sm"
          className="mb-8"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Voltar para UPAs locais
        </Button>
        
        <ScrollReveal>
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold mb-4 blue-gradient-text">Sobre a {upa.name}</h2>
              <div className="flex items-center text-upa-700 mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{upa.location}</span>
              </div>
              <p className="text-gray-700 mb-3">
                A {upa.name} é o grupo de adolescentes da {upa.church}. Nossos encontros são regados de louvor, estudo da Palavra, comunhão e muita diversão!
              </p>
              <p className="text-gray-700">
                Nossa missão é formar adolescentes cristãos comprometidos com Jesus Cristo e sua igreja, preparando-os para servir e testemunhar em todas as áreas de suas vidas.
              </p>
            </div>
          </div>
        </ScrollReveal>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center blue-gradient-text">Diretoria</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upa.members.map((member, index) => (
            <ScrollReveal key={member.id} delay={index * 100}>
              <MemberCard {...member} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpaLocalDetalhe;
