import React from 'react';
import { Card } from '../common/Card';

export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  color?: 'blue' | 'indigo' | 'cyan' | 'emerald' | 'amber' | 'purple';
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  color = 'blue',
  className = '',
}) => {
  const colorMap = {
    blue: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
    indigo: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white',
    cyan: 'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white',
    emerald: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
    amber: 'bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white',
    purple: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
  };

  return (
    <Card hoverable className={`group ${className}`}>
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-4 transition-all duration-300 ${colorMap[color]}`}
      >
        <i className={icon}></i>
      </div>
      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
        {title}
      </h3>
      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
        {description}
      </p>
    </Card>
  );
};
