'use client';

import React from 'react';
import { Cpu, CheckCircle2, Terminal, Code, Wrench, Layers } from 'lucide-react';
import { TOOLKIT_CATEGORIES } from '../data/portfolioData';

export default function ToolkitSection() {
  return (
    <section id="toolkit" className="container-page py-24 md:py-36 border-b border-[var(--border-hairline)] bg-[var(--bg-secondary)]/30">
      
      {/* Section Header */}
      <div className="grid gap-8 md:grid-cols-12 md:gap-10">
        
        <div className="md:col-span-3">
          <p className="eyebrow flex items-center gap-3 text-[var(--text-muted)]">
            <span className="text-[var(--accent-clay)] font-bold">03</span>
            <span className="h-px w-8 bg-[var(--border-strong)]" aria-hidden="true" />
            Technical Arsenal
          </p>
        </div>

        <div className="md:col-span-9">
          <h2 className="font-serif text-[2.6rem] leading-[0.98] text-[var(--text-primary)] xs:text-5xl md:text-6xl lg:text-7xl">
            A focused stack for <em className="text-[var(--accent-clay)] italic">speed</em>, clarity, and rock-solid reliability.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed md:text-lg text-[var(--text-secondary)]">
            I don’t chase every passing trend. I master the fundamental tools that deliver high-impact, maintainable digital products: semantic HTML, utility-first CSS, reactive component trees, and low-level C++ foundations.
          </p>
        </div>

      </div>

      {/* Categories Grid */}
      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {TOOLKIT_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-card)] p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-[var(--accent-clay)]/40 hover:shadow-lg"
          >
            {/* Header */}
            <div className="flex items-center gap-2.5 text-[var(--accent-clay)] font-mono text-xs font-semibold uppercase mb-2">
              {idx === 0 && <Layers size={16} />}
              {idx === 1 && <Code size={16} />}
              {idx === 2 && <Wrench size={16} />}
              <span>Stack Group 0{idx + 1}</span>
            </div>

            <h3 className="font-serif text-2xl font-semibold text-[var(--text-primary)]">
              {cat.name}
            </h3>

            <p className="mt-2 text-xs text-[var(--text-muted)] leading-relaxed">
              {cat.description}
            </p>

            {/* Skills List */}
            <div className="mt-6 space-y-4 border-t border-[var(--border-hairline)] pt-5">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx} className="rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-secondary)]/60 p-3.5">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-base font-semibold text-[var(--text-primary)]">
                      {skill.name}
                    </span>
                    <span className="font-mono text-[0.625rem] px-2 py-0.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-hairline)] text-[var(--accent-clay)] font-semibold">
                      {skill.level}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* FAST Lahore C++ Foundation Callout Banner */}
      <div className="mt-12 rounded-xl border border-[var(--border-strong)] bg-blueprint p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="size-12 rounded-xl bg-[var(--accent-clay)] text-white flex items-center justify-center shrink-0">
            <Terminal size={24} />
          </div>
          <div>
            <h4 className="font-serif text-xl font-semibold text-[var(--text-primary)]">
              Computer Science Logic & C++ Foundation
            </h4>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5 max-w-xl">
              Currently coursework at FAST University Lahore deepens understanding of data memory allocation, loops, pointers, and time-complexity trade-offs.
            </p>
          </div>
        </div>

        <span className="font-mono text-xs font-semibold px-4 py-2 rounded-full border border-[var(--accent-clay)] text-[var(--accent-clay)] bg-[var(--bg-card)] whitespace-nowrap">
          FAST-NUCES BSCS Curriculum
        </span>
      </div>

    </section>
  );
}
