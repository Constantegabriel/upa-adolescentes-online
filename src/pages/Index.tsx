
import React, { useEffect } from 'react';
import EventCard from '@/components/home/EventCard';
import DevotionalCard from '@/components/home/DevotionalCard';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { events } from '@/data/events';
import { devotionals } from '@/data/devotionals';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  // Filter events
  const upcomingEvents = events.filter(event => !event.isPast).slice(0, 3);
  const pastEvents = events.filter(event => event.isPast).slice(0, 2);

  // Select a random devotional for the home page
  const featuredDevotional = devotionals[Math.floor(Math.random() * devotionals.length)];

  // Intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-upa-700 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517022812141-23620dba5c23')] bg-cover bg-center opacity-20"></div>
        <div className="container relative px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              UPA - União Presbiteriana de Adolescentes
            </h1>
            <p className="text-xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Formando jovens cristãos comprometidos com a fé e com o serviço ao próximo
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg">
                <Link to="/eventos">
                  Ver Eventos <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20">
                <Link to="/devocional">
                  Devocional
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <ScrollReveal>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold blue-gradient-text">Próximos Eventos</h2>
              <Link to="/eventos" className="text-upa-600 hover:text-upa-700 font-medium flex items-center">
                Ver todos 
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <ScrollReveal key={event.id} delay={index * 100}>
                <EventCard {...event} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <ScrollReveal>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold blue-gradient-text">Eventos Recentes</h2>
              <Link to="/eventos" className="text-upa-600 hover:text-upa-700 font-medium flex items-center">
                Ver arquivo
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <ScrollReveal key={event.id} delay={index * 100}>
                <EventCard {...event} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Devotional Section */}
      <section className="py-16 bg-upa-100">
        <div className="container px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold blue-gradient-text mb-4">Devocional</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Uma palavra de reflexão para fortalecer sua fé e inspirar seu dia
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="max-w-3xl mx-auto">
              <DevotionalCard
                id={featuredDevotional.id}
                title={featuredDevotional.title}
                verse={featuredDevotional.verse}
                reference={featuredDevotional.reference}
                snippet={featuredDevotional.snippet}
                image={featuredDevotional.image}
              />
              
              <div className="text-center mt-8">
                <Button asChild>
                  <Link to="/devocional">
                    Mais Devocionais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
