'use client';

import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { DEVELOPER_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--bg-secondary)] py-16 text-[var(--text-secondary)]">
      <div className="container-page">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-b border-[var(--border-hairline)] pb-12">
          
          {/* Logo & Statement */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 40 48" className="h-8 w-auto text-[var(--accent-clay)]" aria-hidden="true">
                <path
                  d="M2 47V20C2 10.06 10.06 2 20 2s18 8.06 18 18v27"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                />
                <text
                  x="20"
                  y="33"
                  textAnchor="middle"
                  className="font-serif font-semibold"
                  fontSize="14.5"
                  fill="currentColor"
                  letterSpacing="-0.5"
                >
                  {DEVELOPER_INFO.initials}
                </text>
              </svg>
              <div>
                <span className="font-serif text-xl font-bold text-[var(--text-primary)]">
                  {DEVELOPER_INFO.name}
                </span>
                <span className="eyebrow block text-[0.625rem] text-[var(--text-muted)]">
                  Front-End Developer · FAST-NUCES Lahore
                </span>
              </div>
            </div>

            <p className="max-w-md text-xs leading-relaxed text-[var(--text-secondary)]">
              Crafted with Next.js App Router, Tailwind CSS, and computer science foundations. Architectural precision meets responsive front-end engineering.
            </p>
          </div>

          {/* Quick Nav Links & Back to Top */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8">
            <div className="flex flex-wrap gap-5 text-xs font-mono">
              <a href="#work" className="hover:text-[var(--accent-clay)] transition-colors">Work</a>
              <a href="#code-lab" className="hover:text-[var(--accent-clay)] transition-colors">Code Lab</a>
              <a href="#comparison" className="hover:text-[var(--accent-clay)] transition-colors">Design vs Code</a>
              <a href="#about" className="hover:text-[var(--accent-clay)] transition-colors">About</a>
              <a href="#toolkit" className="hover:text-[var(--accent-clay)] transition-colors">Arsenal</a>
              <a href="#contact" className="hover:text-[var(--accent-clay)] transition-colors">Contact</a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="group flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--bg-card)] px-4 py-2 text-xs font-mono text-[var(--text-primary)] hover:border-[var(--accent-clay)] hover:text-[var(--accent-clay)] transition-colors cursor-pointer shadow-sm"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Location */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
          <p>
            © {new Date().getFullYear()} {DEVELOPER_INFO.name}. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5">
            <span>FAST University Lahore (1st Semester BSCS)</span>
            <span>·</span>
            <span>Lahore, Pakistan</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
