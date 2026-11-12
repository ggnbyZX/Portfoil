import React from 'react';
import { navigationLinks, personalInfo } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-10 sm:pt-14 pb-8 border-t border-slate-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-10 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2.5 text-xl font-bold text-white mb-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white text-sm shadow-md">
              <i className="fa-solid fa-code"></i>
            </div>
            <span>
              საბა<span className="text-blue-500">.dev</span>
            </span>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-4">
            პერსონალური პორტფოლიო, შექმნილი React-ის მოდულარული კომპონენტების, სემანტიკური სტანდარტებისა და Tailwind CSS-ის გამოყენებით.
          </p>
          {/* Social media pill buttons */}
          <div className="flex items-center gap-2.5">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition border border-slate-800"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github text-sm"></i>
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition border border-slate-800"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in text-sm"></i>
            </a>
            <a
              href={personalInfo.socialLinks.dribbble}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-pink-600 text-slate-400 hover:text-white flex items-center justify-center transition border border-slate-800"
              aria-label="Dribbble"
            >
              <i className="fa-brands fa-dribbble text-sm"></i>
            </a>
            <a
              href={personalInfo.socialLinks.email}
              className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition border border-slate-800"
              aria-label="Email"
            >
              <i className="fa-solid fa-envelope text-sm"></i>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-4">
            სწრაფი ნავიგაცია
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-blue-400 transition inline-flex items-center gap-2"
                >
                  <i className="fa-solid fa-angle-right text-blue-500 text-xs"></i>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-4">
            საკონტაქტო მონაცემები
          </h4>
          <address className="not-italic text-xs sm:text-sm text-slate-400 space-y-2.5">
            <p className="flex items-center gap-2.5">
              <i className="fa-solid fa-location-dot text-blue-400 w-4 text-center"></i>
              {personalInfo.location}
            </p>
            <p className="flex items-center gap-2.5">
              <i className="fa-solid fa-envelope text-blue-400 w-4 text-center"></i>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-blue-400 transition break-all"
              >
                {personalInfo.email}
              </a>
            </p>
            <p className="flex items-center gap-2.5">
              <i className="fa-solid fa-phone text-blue-400 w-4 text-center"></i>
              <a href={`tel:${personalInfo.phone}`} className="hover:text-blue-400 transition">
                {personalInfo.phone}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
        <p>&copy; {new Date().getFullYear()} საბა. ყველა უფლება დაცულია.</p>
        <p className="flex items-center justify-center gap-1.5">
          <span>დამზადებულია</span>
          <i className="fa-solid fa-heart text-red-500 text-xs"></i>
          <span>React 18 & Tailwind CSS-ით</span>
        </p>
      </div>
    </footer>
  );
};
