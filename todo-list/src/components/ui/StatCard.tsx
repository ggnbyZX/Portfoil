import React from 'react';
import { StatItem } from '../../types/portfolio';
import { Card } from '../common/Card';

interface StatCardProps {
  stat: StatItem;
}

export const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  return (
    <Card hoverable className="text-center p-5">
      <span className="text-2xl sm:text-3xl font-extrabold text-blue-600 block mb-1">
        {stat.value}
      </span>
      <h4 className="text-xs sm:text-sm font-bold text-slate-800 mb-0.5">
        {stat.label}
      </h4>
      <p className="text-[11px] text-slate-500">
        {stat.description}
      </p>
    </Card>
  );
};
