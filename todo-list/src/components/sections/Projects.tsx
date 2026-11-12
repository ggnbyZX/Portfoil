import React, { useState } from 'react';
import { projectsData } from '../../data/portfolioData';
import { Project } from '../../types/portfolio';
import { SectionHeader } from '../common/SectionHeader';
import { ProjectCard } from '../ui/ProjectCard';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'tools'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="mb-14 sm:mb-20">
      <SectionHeader
        badgeText="პროექტები"
        badgeIcon="fa-solid fa-layer-group"
        badgeVariant="blue"
        title="რჩეული ნამუშევრები & კატალოგი"
        subtitle="გაეცანით ჩემს მიერ შექმნილ რეალურ ვებ-გვერდებსა და ინტერფეისებს"
        action={
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-white text-blue-600 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ყველა
            </button>
            <button
              onClick={() => setActiveCategory('frontend')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                activeCategory === 'frontend'
                  ? 'bg-white text-blue-600 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveCategory('tools')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                activeCategory === 'tools'
                  ? 'bg-white text-blue-600 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tools & Widgets
            </button>
          </div>
        }
      />

      {/* Grid of reusable ProjectCards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onViewDetails={(p) => setSelectedProject(p)}
          />
        ))}
      </div>

      {/* Reusable Project Details Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          subtitle={`კატეგორია: ${selectedProject.category.toUpperCase()}`}
          icon="fa-solid fa-layer-group"
        >
          <div className="space-y-4">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-56 object-cover rounded-2xl"
            />
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {selectedProject.description}
            </p>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                ტექნოლოგიები:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tags.map((t) => (
                  <span
                    key={t}
                    className="bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-lg border border-blue-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              {selectedProject.githubUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon="fa-brands fa-github"
                >
                  GitHub კოდი
                </Button>
              )}
              {selectedProject.liveUrl && (
                <Button
                  variant="primary"
                  size="sm"
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon="fa-solid fa-arrow-up-right-from-square"
                >
                  ცოცხალი დემო
                </Button>
              )}
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
