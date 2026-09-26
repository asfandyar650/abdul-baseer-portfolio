'use client';

import React from 'react';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export default function ProcessSection() {
  return (
    <section id="process" className="container-page py-24 md:py-36 border-b border-[var(--border-hairline)]">
      
      {/* Section Header */}
      <div className="grid gap-8 md:grid-cols-12 md:gap-10">
        
        <div className="md:col-span-3">
          <p className="eyebrow flex items-center gap-3 text-[var(--text-muted)]">
            <span className="text-[var(--accent-clay)] font-bold">04</span>
            <span className="h-px w-8 bg-[var(--border-strong)]" aria-hidden="true" />
            Engineering Process
          </p>
        </div>

        <div className="md:col-span-9">
          <h2 className="font-serif text-[2.6rem] leading-[0.98] text-[var(--text-primary)] xs:text-5xl md:text-6xl lg:text-7xl">
            A disciplined method from <em className="text-[var(--accent-clay)] italic">concept sketch</em> to live production.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed md:text-lg text-[var(--text-secondary)]">
            High-quality front-end engineering isn’t accidental. Every interface I build moves through an intentional 4-stage pipeline that guarantees accessible structure, responsive fluidity, and fast performance.
          </p>
        </div>

      </div>

      {/* 4 Process Step Cards */}
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS_STEPS.map((step) => (
          <div
            key={step.number}
            className="flex flex-col justify-between rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-card)] p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-[var(--accent-clay)] hover:shadow-lg"
          >
            <div>
              {/* Step Number Badge */}
              <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-4 mb-5">
                <span className="font-serif text-4xl font-bold text-[var(--accent-clay)]">
                  {step.number}
                </span>
                <span className="eyebrow text-[var(--text-muted)]">
                  {step.category}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-semibold text-[var(--text-primary)]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                {step.summary}
              </p>
            </div>

            {/* Checklist items */}
            <div className="mt-6 border-t border-[var(--border-hairline)] pt-5 space-y-2">
              {step.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                  <span className="size-1 rounded-full bg-[var(--accent-clay)] mt-1.5 shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
