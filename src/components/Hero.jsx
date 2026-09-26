'use client';

import React from 'react';
import { ArrowDownRight, ArrowUpRight, MapPin, Sliders, GraduationCap, Code2, Sparkles } from 'lucide-react';
import { DEVELOPER_INFO } from '../data/portfolioData';

export default function Hero({ onOpenComparison, onOpenContact }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 border-b border-[var(--border-hairline)] bg-blueprint"
    >
      {/* Blueprint grid overlay backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[45%] opacity-40 [mask-image:linear-gradient(to_left,black,transparent)] lg:block bg-blueprint"
      />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
        
        {/* Left Column: Typography, Story & Actions */}
        <div className="lg:col-span-7">
          
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--border-hairline)] bg-[var(--bg-card)] px-4 py-1.5 text-xs font-semibold text-[var(--text-secondary)] shadow-sm backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span>{DEVELOPER_INFO.status}</span>
          </div>

          {/* Eyebrow Details */}
          <p className="eyebrow mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[var(--text-muted)]">
            <span className="text-[var(--accent-clay)] font-bold">Front-End Developer</span>
            <span className="h-px w-6 bg-[var(--border-strong)]" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
              <MapPin size={13} className="text-[var(--accent-clay)]" />
              {DEVELOPER_INFO.city}, {DEVELOPER_INFO.country}
            </span>
            <span className="h-px w-6 bg-[var(--border-strong)]" aria-hidden="true" />
            <span className="text-[var(--text-secondary)]">FAST-NUCES Lahore</span>
          </p>

          {/* Monumental Hero Name Headline */}
          <h1 className="mt-4 font-serif text-[3.8rem] leading-[0.88] tracking-[-0.035em] text-[var(--text-primary)] xs:text-[4.8rem] sm:text-7xl xl:text-[8.5rem]">
            <span className="block font-semibold">Abdul Baseer</span>
            <span className="block italic font-normal">
              Khan<span className="text-[var(--accent-clay)]">.</span>
            </span>
          </h1>

          {/* Subheading Manifesto */}
          <p className="mt-7 max-w-xl font-serif text-[1.55rem] leading-[1.2] text-[var(--text-primary)] md:text-[1.95rem]">
            Engineering <em className="text-[var(--accent-clay)] italic">responsive, pixel-perfect</em> web experiences with React, Next.js & Tailwind CSS.
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] md:text-[1.05rem]">
            1st-semester BS Computer Science student at <strong className="font-semibold text-[var(--text-primary)]">FAST University Lahore</strong>. I combine rigorous algorithmic logic and C++ foundations with modern front-end craft, delivering fast, accessible, and elegant user interfaces.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <a href="#work" className="btn-primary">
              <span>View Selected Work</span>
              <ArrowDownRight size={16} />
            </a>

            <a
              href="#comparison"
              onClick={onOpenComparison}
              className="btn-secondary"
            >
              <Sliders size={15} className="text-[var(--accent-clay)]" />
              <span>Design vs Code</span>
            </a>

            <a
              href="#contact"
              onClick={onOpenContact}
              className="btn-secondary"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Metrics Grid Row */}
          <dl className="mt-12 grid max-w-xl grid-cols-2 gap-y-6 border-t border-[var(--border-hairline)] pt-7 sm:grid-cols-4">
            {DEVELOPER_INFO.stats.map((stat, i) => (
              <div
                key={i}
                className="sm:border-l sm:border-[var(--border-hairline)] sm:pl-5 sm:first:border-l-0 sm:first:pl-0"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-3xl font-semibold leading-none text-[var(--text-primary)] md:text-4xl">
                  {stat.value}
                </dd>
                <dd className="eyebrow mt-2 text-[0.625rem] text-[var(--text-muted)]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>

        </div>

        {/* Right Column: Architectural Arched Showcase & Credential Card */}
        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div className="relative">
            
            {/* Arched Card Container */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[4px] bg-[var(--bg-secondary)] border border-[var(--border-hairline)] shadow-[0_30px_70px_-25px_rgba(25,24,23,0.2)] flex flex-col justify-between p-7">
              
              {/* Top Arch Element: Monogram Emblem & Tech Pulse */}
              <div className="flex flex-col items-center pt-8 text-center">
                <div className="size-16 rounded-full border border-[var(--accent-clay)]/30 bg-[var(--bg-card)] flex items-center justify-center shadow-md">
                  <Code2 size={26} className="text-[var(--accent-clay)]" />
                </div>
                <span className="eyebrow mt-4 text-[var(--accent-clay)]">
                  Front-End Engineering
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[var(--text-primary)] mt-1">
                  Modern Web Craft
                </h3>
              </div>

              {/* Center Arch Interactive Visual: Code Matrix */}
              <div className="my-auto rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-card)] p-4 shadow-sm font-mono text-[0.7rem] text-[var(--text-secondary)] space-y-1.5">
                <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-2 mb-2 text-[var(--text-muted)] text-[0.65rem]">
                  <span>abdulbaseer.tsx</span>
                  <span className="text-emerald-500 font-semibold">● React 19 / Next.js</span>
                </div>
                <p><span className="text-[var(--accent-clay)]">const</span> developer = &#123;</p>
                <p className="pl-3">name: <span className="text-amber-700 dark:text-amber-300">"Abdul Baseer Khan"</span>,</p>
                <p className="pl-3">university: <span className="text-amber-700 dark:text-amber-300">"FAST-NUCES Lahore"</span>,</p>
                <p className="pl-3">semester: <span className="text-emerald-600 font-medium">1</span>,</p>
                <p className="pl-3">stack: [<span className="text-blue-600">"React"</span>, <span className="text-blue-600">"Next.js"</span>, <span className="text-sky-600">"Tailwind"</span>],</p>
                <p className="pl-3">mindset: <span className="text-amber-700 dark:text-amber-300">"Algorithms + Clean UI"</span></p>
                <p>&#125;;</p>
              </div>

              {/* Bottom Arch Footer: Tech tags */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {['HTML5', 'CSS3', 'JavaScript', 'Tailwind', 'React', 'Next.js', 'C++'].map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[0.625rem] px-2.5 py-1 rounded-full border border-[var(--border-hairline)] bg-[var(--bg-card)]/90 text-[var(--text-secondary)]"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>

            {/* Architectural Outline Offset Border */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 translate-x-3.5 translate-y-3.5 rounded-t-full rounded-b-[4px] border border-[var(--accent-clay)]/40 pointer-events-none"
            />

            {/* Rotating Circular Stamp Badge */}
            <div
              className="absolute -bottom-8 -left-5 size-28 rounded-full bg-[var(--bg-card)] text-[var(--text-primary)] shadow-xl sm:-left-7 sm:size-32 md:-left-9 md:size-36 border border-[var(--border-hairline)]"
              aria-hidden="true"
            >
              <svg viewBox="0 0 200 200" className="animate-spin-slow size-full">
                <defs>
                  <path
                    id="badge-circle"
                    d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
                  />
                </defs>
                <text fill="currentColor" className="font-mono" fontSize="12">
                  <textPath href="#badge-circle" textLength="488" lengthAdjust="spacing">
                    FRONT-END · REACT · NEXT.JS · TAILWIND · FAST-NUCES · 
                  </textPath>
                </text>
              </svg>
              {/* Center Decorative 4-point Star Emblem */}
              <div className="absolute inset-0 m-auto size-[26%] flex items-center justify-center text-[var(--accent-clay)]">
                <Sparkles size={20} />
              </div>
            </div>

            {/* Floating Academic Credential Card (FAST-NUCES Lahore) */}
            <div className="absolute -right-3 -bottom-7 max-w-[15.5rem] rounded-[4px] border border-[var(--border-hairline)] bg-[var(--bg-card)]/95 p-4 shadow-lg backdrop-blur md:-right-6">
              <div className="flex items-center gap-1.5 text-[var(--accent-clay)]">
                <GraduationCap size={15} />
                <p className="eyebrow text-[0.625rem] text-[var(--text-muted)]">Education</p>
              </div>
              <p className="mt-1 font-serif text-lg font-semibold leading-tight text-[var(--text-primary)]">
                BS Computer Science
              </p>
              <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                FAST University Lahore
              </p>
              <p className="eyebrow mt-2 text-[0.5625rem] text-[var(--accent-clay)]">
                1st semester · Faisal Town
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
