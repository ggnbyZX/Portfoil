import React from 'react';
import { Badge } from './Badge';

export interface SectionHeaderProps {
  badgeText?: string;
  badgeIcon?: string;
  badgeVariant?: 'blue' | 'emerald' | 'indigo' | 'purple' | 'amber' | 'rose' | 'slate';
  title: string;
  subtitle?: string;
  centered?: boolean;
  action?: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  badgeIcon,
  badgeVariant = 'blue',
  title,
  subtitle,
  centered = false,
  action,
  className = '',
}) => {
  return (
    <div
      className={`mb-8 sm:mb-12 flex flex-col ${
        centered ? 'items-center text-center' : 'sm:flex-row sm:items-end sm:justify-between'
      } gap-4 ${className}`.trim()}
    >
      <div className={centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}>
        {badgeText && (
          <div className="mb-2.5">
            <Badge variant={badgeVariant} icon={badgeIcon}>
              {badgeText}
            </Badge>
          </div>
        )}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-slate-500 text-xs sm:text-base mt-2 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
};
