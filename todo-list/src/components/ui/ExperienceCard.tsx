import React from 'react';
import { ExperienceItem } from '../../types/portfolio';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export interface ExperienceCardProps {
  item: ExperienceItem;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ item }) => {
  return (
    <Card hoverable className="flex flex-col justify-between">
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <Badge
            variant={item.isCurrent ? 'blue' : 'slate'}
            icon={item.isCurrent ? 'fa-solid fa-hourglass-half' : 'fa-solid fa-calendar'}
          >
            {item.period}
          </Badge>
          <span className="text-xs text-slate-500 font-medium">{item.location}</span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 leading-snug">
          {item.role}
        </h3>
        <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-3">
          {item.company}
        </p>

        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
          {item.description}
        </p>

        {item.achievements && item.achievements.length > 0 && (
          <ul className="space-y-1.5 mb-4 text-xs text-slate-600">
            {item.achievements.map((ach, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <i className="fa-solid fa-check text-emerald-500 text-[10px] mt-1 shrink-0"></i>
                <span>{ach}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
        {item.technologies.map((tech) => (
          <span
            key={tech}
            className="bg-slate-100 text-slate-700 text-[11px] font-semibold px-2 py-0.5 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
    </Card>
  );
};
