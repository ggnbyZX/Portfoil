import React from 'react';
import { SkillCategory } from '../../types/portfolio';
import { Card } from '../common/Card';

export interface SkillCardProps {
  category: SkillCategory;
}

export const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  return (
    <Card hoverable className="flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg shrink-0">
            <i className={`fa-solid fa-${category.iconName || 'code'}`}></i>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              {category.title}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">{category.description}</p>
          </div>
        </div>

        <div className="space-y-4 pt-1">
          {category.skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                <span>{skill.name}</span>
                <span className="text-blue-600 font-extrabold">{skill.level}%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
