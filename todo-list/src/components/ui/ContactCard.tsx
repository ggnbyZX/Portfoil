import React from 'react';
import { Card } from '../common/Card';

export interface ContactCardProps {
  icon: string;
  title: string;
  value: string;
  href?: string;
  color?: 'blue' | 'emerald' | 'indigo' | 'amber';
}

export const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  value,
  href,
  color = 'blue',
}) => {
  const colorStyles = {
    blue: 'bg-blue-50 text-blue-600',
    emerald: 'bg-emerald-50 text-emerald-600',
    indigo: 'bg-indigo-50 text-indigo-600',
    amber: 'bg-amber-50 text-amber-600',
  };

  return (
    <Card hoverable padding="sm" className="flex items-center gap-4">
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center text-lg shrink-0 ${colorStyles[color]}`}
      >
        <i className={icon}></i>
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          {title}
        </p>
        {href ? (
          <a
            href={href}
            className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600 transition truncate block"
          >
            {value}
          </a>
        ) : (
          <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">
            {value}
          </p>
        )}
      </div>
    </Card>
  );
};
