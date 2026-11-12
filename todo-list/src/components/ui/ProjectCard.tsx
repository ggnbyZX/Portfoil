import React from 'react';
import { Project } from '../../types/portfolio';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

export interface ProjectCardProps {
  project: Project;
  onViewDetails?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  return (
    <Card padding="none" hoverable className="overflow-hidden flex flex-col justify-between group">
      <div>
        {/* Project Thumbnail Image */}
        <div className="relative overflow-hidden bg-slate-100 h-48 sm:h-52">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
          
          {project.featured && (
            <div className="absolute top-3 right-3">
              <Badge variant="blue" icon="fa-solid fa-star">
                რჩეული
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition leading-snug">
            {project.title}
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-slate-100 text-slate-700 text-[11px] font-semibold px-2.5 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-5 sm:p-6 pt-0 border-t border-slate-100/80 mt-2 flex items-center justify-between gap-2.5">
        <Button
          variant="primary"
          size="sm"
          href={project.liveUrl || '#'}
          icon="fa-solid fa-arrow-up-right-from-square"
          iconPosition="right"
          className="flex-1"
        >
          დემო
        </Button>

        {project.githubUrl && (
          <Button
            variant="outline"
            size="sm"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            icon="fa-brands fa-github"
            iconPosition="left"
            className="flex-1"
          >
            კოდი
          </Button>
        )}

        {onViewDetails && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onViewDetails(project)}
            icon="fa-solid fa-circle-info"
            title="დეტალები"
          >
            {''}
          </Button>
        )}
      </div>
    </Card>
  );
};
