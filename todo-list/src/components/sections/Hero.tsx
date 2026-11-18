import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-6 sm:pt-10 mb-12 sm:mb-16">
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50/40 to-white border border-blue-100/80 rounded-3xl p-6 sm:p-10 md:p-12 shadow-xs flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12">
        <div className="relative z-10 max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200/60 shadow-xs mb-4 text-xs font-semibold text-blue-700">
            <span className="inline-block animate-bounce">👋</span>
            <span>გამარჯობა, მე ვარ {personalInfo.name}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Junior <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Web Developer</span> & Frontend Enthusiast
          </h1>

          <p className="text-slate-600 text-xs sm:text-base leading-relaxed mb-6">
            {personalInfo.tagline}
          </p>

          <div className="mb-6 flex items-center justify-center md:justify-start gap-2">
            <Badge variant="emerald" icon="fa-solid fa-circle-check">
              {personalInfo.status}
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
            <Button
              variant="primary"
              size="md"
              href="#projects"
              icon="fa-solid fa-layer-group"
              iconPosition="left"
              className="w-full sm:w-auto"
            >
              პროექტების ნახვა
            </Button>
            <Button
              variant="outline"
              size="md"
              href="#contact"
              icon="fa-regular fa-paper-plane"
              iconPosition="left"
              className="w-full sm:w-auto"
            >
              დამიკავშირდით
            </Button>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center shrink-0">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-md opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <img
              src={personalInfo.image}
              alt="საბას პორტრეტი"
              className="relative w-36 h-36 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full object-cover ring-4 ring-white shadow-xl"
            />
          </div>
          <figcaption className="mt-4 text-xs sm:text-sm font-semibold text-slate-600 bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-slate-200/60 shadow-xs text-center inline-flex items-center gap-2">
            <i className="fa-solid fa-code text-blue-600 text-xs"></i>
            <span>საბა — Junior Web Developer</span>
          </figcaption>
        </div>

        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <aside className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-850 to-slate-800 text-white rounded-2xl p-5 sm:p-6 mt-6 shadow-md border-l-4 border-blue-500 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-lg shrink-0 border border-blue-400/20">
            <i className="fa-solid fa-bullhorn"></i>
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-blue-400 mb-0.5 flex items-center gap-2">
              მიმდინარე სიახლე
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              ამჟამად აქტიურად ვსწავლობ React-ის არქიტექტურას, TypeScript-სა და REST API ინტეგრაციებს. მზად ვარ სტაჟირებისა და ახალი გამოწვევებისთვის!
            </p>
          </div>
        </div>
        <Button
          variant="primary"
          size="sm"
          href="#about"
          icon="fa-solid fa-arrow-right"
          iconPosition="right"
          className="shrink-0 self-start sm:self-center"
        >
          ვრცლად
        </Button>
      </aside>
    </section>
  );
};
