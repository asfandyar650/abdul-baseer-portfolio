'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MarqueeTicker from '../components/MarqueeTicker';
import ProjectsSection from '../components/ProjectsSection';
import ProjectModal from '../components/ProjectModal';
import CodeComponentLab from '../components/CodeComponentLab';
import DesignVsCodeComparison from '../components/DesignVsCodeComparison';
import AboutSection from '../components/AboutSection';
import ToolkitSection from '../components/ToolkitSection';
import ProcessSection from '../components/ProcessSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  const [theme, setTheme] = useState('atelier');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Check saved theme or default to atelier
    const savedTheme = localStorage.getItem('abk-portfolio-theme') || 'atelier';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('abk-portfolio-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      
      {/* Top Fixed Navigation */}
      <Navbar
        activeTheme={theme}
        onThemeChange={handleThemeChange}
        onOpenContact={() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Content Flow */}
      <main id="main" className="flex-1">
        
        {/* Hero Section */}
        <Hero
          onOpenComparison={() => {
            const el = document.getElementById('comparison');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenContact={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Infinite Moving Marquee Ticker */}
        <MarqueeTicker />

        {/* Selected Work & Projects Gallery */}
        <ProjectsSection onSelectProject={setSelectedProject} />

        {/* Interactive UI Component & Code Lab */}
        <CodeComponentLab />

        {/* Design Blueprint vs Live Code Interactive Slider */}
        <DesignVsCodeComparison />

        {/* About & Academic Background (FAST-NUCES Lahore) */}
        <AboutSection />

        {/* Technical Arsenal & Toolkit */}
        <ToolkitSection />

        {/* 4-Step Engineering Process */}
        <ProcessSection />

        {/* Interactive Contact & Inquiries */}
        <ContactSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* Modal Dialog for Project Details */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </div>
  );
}
