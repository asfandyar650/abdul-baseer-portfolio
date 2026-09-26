'use client';

import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Code, Sparkles, Filter } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export default function ProjectsSection({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Next.js & React', 'Tailwind & UI', 'CS & Algorithms'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => {
        if (activeCategory === 'Next.js & React') return p.tags.includes('Next.js') || p.tags.includes('React') || p.tags.includes('React 19');
        if (activeCategory === 'Tailwind & UI') return p.tags.includes('Tailwind CSS') || p.category.includes('Tailwind');
        if (activeCategory === 'CS & Algorithms') return p.category.includes('CS') || p.tags.includes('Algorithms');
        return true;
      });

  return (
    <section id="work" className="container-page py-24 md:py-36 border-b border-[var(--border-hairline)]">
      
      {/* Section Header */}
      <div className="grid gap-8 md:grid-cols-12 md:gap-10">
        
        {/* Step / Number Indicator */}
        <div className="md:col-span-3">
          <p className="eyebrow flex items-center gap-3 text-[var(--text-muted)]">
            <span className="text-[var(--accent-clay)] font-bold">01</span>
            <span className="h-px w-8 bg-[var(--border-strong)]" aria-hidden="true" />
            Selected work
          </p>
        </div>

        {/* Narrative Headline */}
        <div className="md:col-span-9">
          <h2 className="font-serif text-[2.6rem] leading-[0.98] text-[var(--text-primary)] xs:text-5xl md:text-6xl lg:text-7xl">
            Web applications that are <em className="text-[var(--accent-clay)] italic">planned</em>, coded, and polished end to end.
          </h2>

          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-2xl text-base leading-relaxed md:text-lg text-[var(--text-secondary)]">
              A selection of front-end applications, student hubs, and algorithm visualizers—engineered with semantic HTML5, utility-first Tailwind CSS, and scalable React & Next.js architectures.
            </p>

            <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest whitespace-nowrap">
              {filteredProjects.length} Projects Displayed
            </span>
          </div>
        </div>

      </div>

      {/* Filter Tabs */}
      <div className="mt-12 flex flex-wrap items-center gap-2 border-b border-[var(--border-hairline)] pb-5">
        <div className="flex items-center gap-1.5 mr-2 text-xs font-mono text-[var(--text-muted)] uppercase">
          <Filter size={13} className="text-[var(--accent-clay)]" />
          <span>Filter:</span>
        </div>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-1.5 font-mono text-xs transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-[var(--accent-clay)] text-white shadow-sm font-semibold'
                : 'border border-[var(--border-hairline)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-muted)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="mt-16 grid gap-x-10 gap-y-16 md:mt-20 lg:grid-cols-12 lg:gap-y-24">
        {filteredProjects.map((project, idx) => {
          // Alternating architectural asymmetric grid sizing
          const isLarge = idx % 3 === 0;
          const colSpan = isLarge ? 'lg:col-span-7' : 'lg:col-span-5';
          const delayStyle = idx % 2 === 1 ? 'lg:mt-16' : '';

          return (
            <div
              key={project.id}
              className={`${colSpan} ${delayStyle}`}
            >
              <div
                onClick={() => onSelectProject(project)}
                className="group block cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectProject(project);
                  }
                }}
                aria-label={`${project.title}: view project details`}
              >
                {/* Visual Card Frame */}
                <div className={`relative overflow-hidden rounded-[4px] bg-[var(--bg-secondary)] border border-[var(--border-hairline)] ${isLarge ? 'aspect-[4/3]' : 'aspect-[4/5]'} transition-all duration-500 group-hover:border-[var(--accent-clay)]/40 group-hover:shadow-2xl`}>
                  
                  {/* Decorative Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.mockupColor} opacity-70 transition-transform duration-[1200ms] group-hover:scale-105`} />

                  {/* Blueprint Grid Lines on Card */}
                  <div className="absolute inset-0 bg-blueprint opacity-30" />

                  {/* Card Content Mockup */}
                  <div className="relative h-full flex flex-col justify-between p-6 sm:p-8">
                    
                    {/* Top Row: Index Badge & Status */}
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-[var(--bg-card)]/90 px-3 py-1 font-mono text-[0.6875rem] tracking-[0.14em] text-[var(--text-primary)] shadow-sm backdrop-blur">
                        0{idx + 1}
                      </span>
                      <span className="font-mono text-xs text-[var(--accent-clay)] font-semibold bg-[var(--bg-card)]/80 px-2.5 py-0.5 rounded-full backdrop-blur">
                        {project.badge}
                      </span>
                    </div>

                    {/* Middle Graphic Elements: Mockup Wireframe Elements */}
                    <div className="rounded-lg border border-black/10 dark:border-white/10 bg-[var(--bg-card)]/90 p-5 shadow-lg backdrop-blur-md space-y-3 transition-transform duration-500 group-hover:-translate-y-1">
                      <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-2 text-[0.7rem] font-mono text-[var(--text-muted)]">
                        <span>{project.category}</span>
                        <span className="text-emerald-500 font-semibold">Live Project</span>
                      </div>
                      <h4 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                        {project.title}
                      </h4>
                      <p className="text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    {/* Bottom Action Pill */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[0.625rem] px-2 py-0.5 rounded bg-[var(--bg-card)]/90 text-[var(--text-muted)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--bg-card)] px-3.5 py-1.5 text-xs font-semibold text-[var(--text-primary)] shadow-sm transition-all duration-300 group-hover:bg-[var(--accent-clay)] group-hover:text-white">
                        <span>Details</span>
                        <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>

                  </div>

                </div>

                {/* Text Metadata Below Card */}
                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <p className="eyebrow text-[var(--text-muted)]">
                      {project.category} · {project.year}
                    </p>
                    <h3 className="mt-2 font-serif text-[1.85rem] leading-[1.08] text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--accent-clay)] md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-2.5 max-w-md text-[0.95rem] leading-relaxed text-[var(--text-secondary)]">
                      {project.summary}
                    </p>
                  </div>

                  <span className="mt-1 grid size-10 shrink-0 place-items-center rounded-full border border-[var(--border-strong)] text-[var(--text-primary)] transition-all duration-300 group-hover:border-[var(--accent-clay)] group-hover:bg-[var(--accent-clay)] group-hover:text-white">
                    <ArrowUpRight size={17} />
                  </span>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
