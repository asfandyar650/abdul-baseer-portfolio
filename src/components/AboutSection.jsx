'use client';

import React from 'react';
import { GraduationCap, Code2, BookOpen, Sparkles, CheckCircle2, Terminal } from 'lucide-react';
import { DEVELOPER_INFO, EDUCATION_INFO } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="container-page py-24 md:py-36 border-b border-[var(--border-hairline)]">
      
      {/* Section Header */}
      <div className="grid gap-8 md:grid-cols-12 md:gap-10">
        
        {/* Step / Number Indicator */}
        <div className="md:col-span-3">
          <p className="eyebrow flex items-center gap-3 text-[var(--text-muted)]">
            <span className="text-[var(--accent-clay)] font-bold">02</span>
            <span className="h-px w-8 bg-[var(--border-strong)]" aria-hidden="true" />
            About & Journey
          </p>
        </div>

        {/* Narrative Headline */}
        <div className="md:col-span-9">
          <h2 className="font-serif text-[2.6rem] leading-[0.98] text-[var(--text-primary)] xs:text-5xl md:text-6xl lg:text-7xl">
            Where computer science rigor meets <em className="text-[var(--accent-clay)] italic">front-end craftsmanship</em>.
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-12">
            
            {/* Story & Biography */}
            <div className="lg:col-span-7 space-y-5 text-base leading-relaxed text-[var(--text-secondary)] md:text-[1.05rem]">
              <p>
                My name is <strong className="font-semibold text-[var(--text-primary)]">Abdul Baseer Khan</strong>, a front-end developer based in Lahore, Pakistan, and currently a 1st-semester BS Computer Science student at <strong className="font-semibold text-[var(--text-primary)]">FAST-NUCES Lahore</strong>.
              </p>
              <p>
                My journey into web development began with a fascination for interactive systems—how lines of code can create visual, tactile environments that people interact with every day. Over the past several years, I have honed my skills across semantic HTML5, modern CSS3 layouts, JavaScript (ES6+), utility-first styling with Tailwind CSS, and reactive frameworks like React and Next.js.
              </p>
              <p>
                At FAST Lahore, I am immersing myself in foundational computer science: memory architecture, pointers, nested algorithms, and object-oriented thinking in C++. This academic foundation gives me an unfair advantage in front-end development: I don't just assemble components—I understand render cycles, state complexity, memory footprints, and computational efficiency.
              </p>
            </div>

            {/* FAST University Lahore Academic Focus Card */}
            <div className="lg:col-span-5 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-secondary)] p-6 sm:p-7 shadow-sm flex flex-col justify-between">
              
              <div>
                <div className="flex items-center gap-2 text-[var(--accent-clay)] font-mono text-xs font-semibold uppercase mb-3">
                  <GraduationCap size={16} />
                  <span>Academic Center</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">
                  {EDUCATION_INFO.institution}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mt-1 font-mono">
                  {EDUCATION_INFO.campus} · {EDUCATION_INFO.degree}
                </p>

                <div className="mt-5 border-t border-[var(--border-hairline)] pt-4">
                  <span className="eyebrow text-[var(--text-muted)] block mb-2.5">
                    1st Semester Coursework:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                    {EDUCATION_INFO.currentCourses.map((c, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="size-1 rounded-full bg-[var(--accent-clay)]" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border-hairline)] text-xs text-[var(--text-muted)] flex items-center justify-between">
                <span>Class of 2028</span>
                <span className="text-[var(--accent-clay)] font-semibold">Active Full-Time</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Dual Strength Pillars */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        
        <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-card)] p-6 sm:p-8 transition-all duration-300 hover:border-[var(--accent-clay)] hover:shadow-lg">
          <div className="size-11 rounded-lg bg-[var(--accent-clay)]/10 text-[var(--accent-clay)] flex items-center justify-center mb-5">
            <Code2 size={22} />
          </div>
          <h4 className="font-serif text-2xl font-semibold text-[var(--text-primary)]">
            Modern Front-End Craft
          </h4>
          <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">
            Deep expertise in React 19, Next.js App Router, and Tailwind CSS. Building scalable component hierarchies with zero layout shift and tactile micro-animations.
          </p>
        </div>

        <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-card)] p-6 sm:p-8 transition-all duration-300 hover:border-[var(--accent-clay)] hover:shadow-lg">
          <div className="size-11 rounded-lg bg-[var(--accent-clay)]/10 text-[var(--accent-clay)] flex items-center justify-center mb-5">
            <Terminal size={22} />
          </div>
          <h4 className="font-serif text-2xl font-semibold text-[var(--text-primary)]">
            Algorithmic Rigor & C++
          </h4>
          <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">
            Trained at FAST-NUCES in low-level memory concepts, data structures, and algorithmic logic. Ensuring efficient client-side data handling and clean architectural separation.
          </p>
        </div>

        <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-card)] p-6 sm:p-8 transition-all duration-300 hover:border-[var(--accent-clay)] hover:shadow-lg sm:col-span-2 lg:col-span-1">
          <div className="size-11 rounded-lg bg-[var(--accent-clay)]/10 text-[var(--accent-clay)] flex items-center justify-center mb-5">
            <Sparkles size={22} />
          </div>
          <h4 className="font-serif text-2xl font-semibold text-[var(--text-primary)]">
            Pixel-Perfect Accessibility
          </h4>
          <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">
            Dedicated to semantic HTML5, fluid typography, keyboard accessibility, and top-tier Google Lighthouse performance across mobile and desktop.
          </p>
        </div>

      </div>

    </section>
  );
}
