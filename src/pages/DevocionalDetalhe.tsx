
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { devotionals } from '@/data/devotionals';

const DevocionalDetalhe = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const devotional = devotionals.find(d => d.id === Number(id));
  
  if (!devotional) {
    return (
      <div className="container px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Devocional não encontrado</h2>
        <p className="text-gray-500 mb-6">O devocional que você está procurando não existe ou foi removido.</p>
        <Button asChild>
          <Link to="/devocional">Voltar para devocionais</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-upa-700 to-upa-600 text-white py-12">
        <div className="container px-4">
          <Button 
            variant="outline" 
            size="sm"
            className="mb-6 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/40"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Voltar
          </Button>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{devotional.title}</h1>
          <div className="flex items-center text-upa-100">
            <BookOpen className="h-5 w-5 mr-2" />
            <span>Por {devotional.author}</span>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {devotional.image && (
            <div className="mb-6">
              <img 
                src={devotional.image} 
                alt={devotional.title} 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}
          
          <div className="bg-upa-50 p-6 mb-8 rounded-lg border-l-4 border-upa-600">
            <p className="text-xl italic mb-2">"{devotional.verse}"</p>
            <p className="text-right font-medium text-upa-700">{devotional.reference}</p>
          </div>
          
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: devotional.content }} />
          
          <div className="mt-12 pt-6 border-t">
            <p className="text-right text-gray-500">Escrito por {devotional.author}</p>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button asChild>
              <Link to="/devocional">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Ver todas as devocionais
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevocionalDetalhe;
