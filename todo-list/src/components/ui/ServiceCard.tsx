import React from 'react';
import { ServiceItem } from '../../types/portfolio';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card hoverable className="flex flex-col justify-between group">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center text-xl mb-4 transition-all duration-300">
          <i className={`fa-solid fa-${service.iconName}`}></i>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
          {service.title}
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
          {service.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-2">
        {service.tags.map((tag) => (
          <Badge key={tag} variant="slate" size="sm">
            {tag}
          </Badge>
        ))}
      </div>
    </Card>
  );
};
