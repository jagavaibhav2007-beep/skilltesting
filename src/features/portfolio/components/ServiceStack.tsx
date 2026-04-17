import React from 'react';
import { SERVICES } from '@config/constants';
import { ServiceCard } from './ServiceCard';

export const ServiceStack = () => {
  return (
    <section id="work" className="mt-32 pb-[30vh] px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto space-y-12">
        {SERVICES.map(s => (
          <ServiceCard 
            key={s.id} 
            {...s}
          />
        ))}
      </div>
    </section>
  );
}
