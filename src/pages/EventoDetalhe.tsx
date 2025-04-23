
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, ArrowLeft } from 'lucide-react';
import { events } from '@/data/events';

const EventoDetalhe = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const event = events.find(e => e.id === Number(id));
  
  if (!event) {
    return (
      <div className="container px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Evento não encontrado</h2>
        <p className="text-gray-500 mb-6">O evento que você está procurando não existe ou foi removido.</p>
        <Button asChild>
          <Link to="/eventos">Voltar para eventos</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pb-16">
      {/* Hero Image */}
      <div className="relative h-64 md:h-96">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6">
          <div className="container mx-auto">
            <Button 
              variant="outline" 
              size="sm"
              className="mb-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/40"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Voltar
            </Button>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white">{event.title}</h1>
            
            {event.isPast && (
              <span className="inline-block mt-2 bg-gray-700/80 text-white text-sm px-3 py-1 rounded-full">
                Evento passado
              </span>
            )}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">Sobre o evento</h2>
              <p className="text-lg text-gray-700">{event.description}</p>
              
              {!event.isPast && event.registrationLink && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-3">Inscrição</h3>
                  <Button asChild size="lg">
                    <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                      Fazer inscrição
                    </a>
                  </Button>
                  <p className="text-sm text-gray-500 mt-2">
                    Clique no botão acima para se inscrever no evento.
                  </p>
                </div>
              )}
            </div>
          </div>
          
          <div>
            <div className="bg-upa-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Informações</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 mr-3 text-upa-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Data</p>
                    <p className="text-gray-600">{event.date}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 text-upa-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Horário</p>
                    <p className="text-gray-600">{event.time}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-upa-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Local</p>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                </div>
              </div>
              
              {!event.isPast && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-upa-700 font-medium">
                    Este evento está por vir. Não perca!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventoDetalhe;
