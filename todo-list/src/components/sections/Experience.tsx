import React from 'react';
import { experienceData } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';
import { ExperienceCard } from '../ui/ExperienceCard';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="mb-14 sm:mb-20">
      <SectionHeader
        badgeText="განათლება & გამოცდილება"
        badgeIcon="fa-solid fa-graduation-cap"
        badgeVariant="blue"
        title="აკადემიური გზა & სერტიფიკატები"
        subtitle="გამოცდილება, რომელიც საფუძვლად უდევს ჩემს პროფესიულ განვითარებას"
      />

      {/* Grid of reusable ExperienceCards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-14">
        {experienceData.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>

      {/* Education Summary Table */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-900 text-sm sm:text-base">
            განათლებისა და კურსების შემაჯამებელი რეზიუმე
          </h3>
          <span className="text-xs text-slate-400 font-medium hidden sm:inline">
            W3C & A11y ცხრილი
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[580px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200/80 text-slate-700 font-bold uppercase text-[11px] tracking-wider">
                <th className="py-3.5 px-6">წლები</th>
                <th className="py-3.5 px-6">დაწესებულება</th>
                <th className="py-3.5 px-6">მიმართულება</th>
                <th className="py-3.5 px-6">სტატუსი</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/60 transition">
                <td className="py-3.5 px-6 font-semibold text-slate-600 whitespace-nowrap">2025 - 2026</td>
                <td className="py-3.5 px-6 font-bold text-slate-900">ვებ-აკადემია / ონლაინ კურსები</td>
                <td className="py-3.5 px-6 text-slate-600">Frontend საფუძვლები: HTML5, CSS3, Tailwind</td>
                <td className="py-3.5 px-6">
                  <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    <i className="fa-solid fa-check text-[10px]"></i> დასრულებული
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition">
                <td className="py-3.5 px-6 font-semibold text-slate-600 whitespace-nowrap">2023 - 2027</td>
                <td className="py-3.5 px-6 font-bold text-slate-900">უნივერსიტეტი</td>
                <td className="py-3.5 px-6 text-slate-600">კომპიუტერული მეცნიერება / IT</td>
                <td className="py-3.5 px-6">
                  <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    <i className="fa-solid fa-hourglass-half text-[10px]"></i> მიმდინარე
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition">
                <td className="py-3.5 px-6 font-semibold text-slate-600 whitespace-nowrap">2024</td>
                <td className="py-3.5 px-6 font-bold text-slate-900">freeCodeCamp</td>
                <td className="py-3.5 px-6 text-slate-600">Responsive Web Design Certification</td>
                <td className="py-3.5 px-6">
                  <span className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    <i className="fa-solid fa-award text-[10px]"></i> სერტიფიცირებული
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
