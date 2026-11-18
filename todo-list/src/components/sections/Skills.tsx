import React from 'react';
import { skillCategories, softSkills, faqData } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';
import { SkillCard } from '../ui/SkillCard';
import { FeatureCard } from '../ui/FeatureCard';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="mb-14 sm:mb-20">
      <SectionHeader
        badgeText="უნარები & ტექნოლოგიები"
        badgeIcon="fa-solid fa-wand-magic-sparkles"
        badgeVariant="blue"
        title="ტექნიკური კომპეტენციები & Soft Skills"
        subtitle="ინსტრუმენტები, რომლებსაც ვიყენებ საიმედო, სწრაფი და ესთეტიკური ვებ-გვერდების ასაგებად"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
        {skillCategories.map((category) => (
          <SkillCard key={category.id} category={category} />
        ))}
      </div>

      <div className="mb-12 sm:mb-16">
        <div className="mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            პიროვნული კომპეტენციები (Soft Skills)
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
            უნარები, რომლებიც მეხმარება ეფექტურ გუნდურ მუშაობასა და ამოცანების დროულ შესრულებაში
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {softSkills.map((item) => (
            <FeatureCard
              key={item.id}
              icon={`fa-solid fa-${item.icon}`}
              title={item.title}
              description={item.description}
              color="indigo"
            />
          ))}
        </div>
      </div>

      <div>
        <div className="mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            ხშირად დასმული კითხვები (FAQ)
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
            პასუხები პოპულარულ შეკითხვებზე
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqData.map((faq, index) => (
            <details
              key={index}
              open={index === 0}
              className="group bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-xs open:border-blue-300 open:shadow-sm transition"
            >
              <summary className="font-bold text-slate-900 cursor-pointer flex items-center justify-between text-xs sm:text-base select-none gap-3">
                <span className="leading-snug">{faq.question}</span>
                <i className="fa-solid fa-chevron-down text-blue-600 transition shrink-0 group-open:rotate-180 text-xs"></i>
              </summary>
              <p className="mt-3 pt-3 border-t border-slate-100 text-slate-600 text-xs sm:text-sm leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
