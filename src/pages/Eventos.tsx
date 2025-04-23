
import React, { useState } from 'react';
import PageHeader from '@/components/shared/PageHeader';
import EventCard from '@/components/home/EventCard';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { events } from '@/data/events';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Eventos = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  // Filter events
  const upcomingEvents = events.filter(event => !event.isPast);
  const pastEvents = events.filter(event => event.isPast);

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Eventos"
        description="Confira nossa programação de eventos e participe das atividades da UPA"
        image="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843"
      />
      
      <div className="container px-4 py-12">
        <ScrollReveal>
          <Tabs defaultValue="upcoming" className="w-full" onValueChange={(value) => setActiveTab(value)}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 w-full max-w-md">
                <TabsTrigger value="upcoming">Próximos Eventos</TabsTrigger>
                <TabsTrigger value="past">Eventos Passados</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="upcoming" className="mt-0">
              {upcomingEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingEvents.map((event, index) => (
                    <ScrollReveal key={event.id} delay={index * 100}>
                      <EventCard {...event} />
                    </ScrollReveal>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-500">Nenhum evento programado no momento.</p>
                  <p className="text-gray-500">Fique atento para atualizações em breve!</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="past" className="mt-0">
              {pastEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pastEvents.map((event, index) => (
                    <ScrollReveal key={event.id} delay={index * 100}>
                      <EventCard {...event} />
                    </ScrollReveal>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-500">Nenhum evento passado registrado.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Eventos;
