import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'none';
  bordered?: boolean;
  bg?: 'white' | 'slate' | 'gradient';
  id?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = true,
  padding = 'md',
  bordered = true,
  bg = 'white',
  id,
  onClick,
}) => {
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-5 sm:p-6',
    lg: 'p-6 sm:p-8',
  };

  const bgClasses = {
    white: 'bg-white',
    slate: 'bg-slate-900 text-white',
    gradient: 'bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/50',
  };

  const borderClass = bordered 
    ? bg === 'slate' ? 'border border-slate-800' : 'border border-slate-200/80' 
    : '';

  const hoverClass = hoverable 
    ? 'hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300' 
    : 'transition-all duration-200';

  return (
    <div
      id={id}
      onClick={onClick}
      className={`rounded-3xl shadow-xs ${paddingClasses[padding]} ${bgClasses[bg]} ${borderClass} ${hoverClass} ${className}`.trim()}
    >
      {children}
    </div>
  );
};
