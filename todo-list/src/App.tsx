import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Services } from './components/sections/Services';
import { Team } from './components/sections/Team';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased font-sans">
      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Team />
        <Experience />
        <Contact />
      </main>

      {/* Page Footer */}
      <Footer />
    </div>
  );
};

export default App;
