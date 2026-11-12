import React from 'react';
import { servicesData } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';
import { ServiceCard } from '../ui/ServiceCard';

export const Services: React.FC = () => {
  return (
    <section id="services" className="mb-14 sm:mb-20">
      <SectionHeader
        badgeText="სერვისები & მიმართულებები"
        badgeIcon="fa-solid fa-sparkles"
        badgeVariant="blue"
        title="რას ვქმნი & როგორ შემიძლია დაგეხმაროთ"
        subtitle="თანამედროვე ვებ-დეველოპმენტის გადაწყვეტილებები, მორგებული თქვენი პროექტის მიზნებზე"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};
