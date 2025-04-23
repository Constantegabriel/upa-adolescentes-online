
import React from 'react';
import PageHeader from '@/components/shared/PageHeader';
import DevotionalCard from '@/components/home/DevotionalCard';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { devotionals } from '@/data/devotionals';

const Devocional = () => {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Devocionais"
        description="Reflexões para fortalecer sua fé e te ajudar a crescer espiritualmente"
        image="https://images.unsplash.com/photo-1518495973542-4542c06a5843"
      />
      
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devotionals.map((devotional, index) => (
            <ScrollReveal key={devotional.id} delay={index * 100}>
              <DevotionalCard
                id={devotional.id}
                title={devotional.title}
                verse={devotional.verse}
                reference={devotional.reference}
                snippet={devotional.snippet}
                image={devotional.image}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Devocional;
