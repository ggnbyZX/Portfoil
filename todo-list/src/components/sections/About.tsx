import React from 'react';
import { personalInfo, semanticBenefits, portfolioStats } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { FeatureCard } from '../ui/FeatureCard';
import { StatCard } from '../ui/StatCard';

export const About: React.FC = () => {
  return (
    <section id="about" className="mb-14 sm:mb-20">
      <SectionHeader
        badgeText="ჩემ შესახებ"
        badgeIcon="fa-solid fa-user"
        badgeVariant="blue"
        title="ვინ ვარ მე & ჩემი მისწრაფებები"
        subtitle="დეტალური ინფორმაცია ჩემი გამოცდილების, პრინციპებისა და ხედვების შესახებ"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start mb-12 sm:mb-16">
        <div className="lg:col-span-7 space-y-4 text-slate-600 text-xs sm:text-base leading-relaxed">
          <p>
            {personalInfo.bio}
          </p>

          <p>
            ვებ-დეველოპმენტის შესწავლა დავიწყე საფუძვლიანად — <mark className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded font-medium">სემანტიკური HTML5</mark>-ის პრინციპებით, რადგან მიმაჩნია, რომ ძლიერი და ხარისხიანი ვებ-გვერდის საფუძველი სწორედ სტრუქტურულად გამართული მარკირებაა.
          </p>

          <p>
            ყოველდღიურად ვმუშაობ ახალ პრაქტიკულ ამოცანებზე, ვქმნი მრავალფეროვან კომპონენტებს და ვსწავლობ მსოფლიო დონის საუკეთესო პრაქტიკებს: Clean Code, Component Architecture, Responsive Design, Tailwind CSS და Web Accessibility (A11y).
          </p>

          <blockquote className="my-5 bg-gradient-to-r from-blue-50 to-indigo-50/40 border-l-4 border-blue-600 p-4 sm:p-5 rounded-r-2xl text-blue-900 font-medium italic text-xs sm:text-sm shadow-xs">
            <i className="fa-solid fa-quote-left text-blue-400/50 text-xl mb-1 block"></i>
            {personalInfo.quote}
            <cite className="block mt-2 text-[11px] font-bold not-italic tracking-wider uppercase text-blue-600">
              — დეველოპერის პრინციპი
            </cite>
          </blockquote>
        </div>

        <div className="lg:col-span-5">
          <Card hoverable className="p-6">
            <div className="relative group mb-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-xs opacity-25 group-hover:opacity-40 transition"></div>
              <img
                src={personalInfo.image}
                alt="საბას ფოტო"
                className="relative w-full h-56 sm:h-64 object-cover rounded-2xl shadow-xs"
              />
            </div>
            <h3 className="text-center font-bold text-slate-800 text-sm sm:text-base mb-4 flex items-center justify-center gap-2">
              <i className="fa-solid fa-code text-blue-600 text-xs"></i>
              <span>საბა — ვებ-ენთუზიასტი</span>
            </h3>

            <ul className="space-y-3 pt-4 border-t border-slate-100 text-xs sm:text-sm">
              <li className="flex justify-between items-center gap-2">
                <span className="text-slate-500 font-medium inline-flex items-center gap-1.5">
                  <i className="fa-solid fa-circle-check text-emerald-500 text-xs"></i>
                  <span>სტატუსი:</span>
                </span>
                <span className="font-bold text-slate-800 bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full text-xs">
                  სტუდენტი / Dev
                </span>
              </li>
              <li className="flex justify-between items-center gap-2">
                <span className="text-slate-500 font-medium inline-flex items-center gap-1.5">
                  <i className="fa-solid fa-location-dot text-slate-400 text-xs"></i>
                  <span>ქალაქი:</span>
                </span>
                <span className="font-semibold text-slate-800">{personalInfo.location}</span>
              </li>
              <li className="flex justify-between items-center gap-2">
                <span className="text-slate-500 font-medium inline-flex items-center gap-1.5">
                  <i className="fa-solid fa-language text-slate-400 text-xs"></i>
                  <span>ენები:</span>
                </span>
                <span className="font-semibold text-slate-800">ქართული, ინგლისური</span>
              </li>
              <li className="flex justify-between items-center gap-2">
                <span className="text-slate-500 font-medium inline-flex items-center gap-1.5">
                  <i className="fa-solid fa-laptop-code text-blue-600 text-xs"></i>
                  <span>მიმართულება:</span>
                </span>
                <span className="font-semibold text-blue-600">Front-End Web</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
        {portfolioStats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

      <div>
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h3 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            რატომ არის მნიშვნელოვანი სემანტიკა?
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            სწორად შერჩეული HTML თეგები აუმჯობესებს საიტის ხარისხსა და მისაწვდომობას
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {semanticBenefits.map((item) => (
            <FeatureCard
              key={item.id}
              icon={`fa-solid fa-${item.icon}`}
              title={item.title}
              description={item.description}
              color={item.color as any}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
