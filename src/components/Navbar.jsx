'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sun, Moon, Terminal } from 'lucide-react';
import { DEVELOPER_INFO } from '../data/portfolioData';

export default function Navbar({ activeTheme, onThemeChange, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Code Lab', href: '#code-lab' },
    { name: 'Design vs Code', href: '#comparison' },
    { name: 'About', href: '#about' },
    { name: 'Arsenal', href: '#toolkit' },
    { name: 'Process', href: '#process' }
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--bg-glass)] backdrop-blur-md border-b border-[var(--border-hairline)] shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-6">
        
        {/* Brand Monogram & Name */}
        <a
          href="#top"
          className="group flex items-center gap-3.5 text-[var(--text-primary)] no-underline"
          aria-label="Abdul Baseer Khan, Home"
        >
          {/* Architectural Arch Monogram Logo */}
          <div className="relative flex items-center justify-center">
            <svg viewBox="0 0 40 48" className="h-10 w-auto transition-colors duration-300 text-[var(--text-primary)] group-hover:text-[var(--accent-clay)]" aria-hidden="true">
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
          </div>

          <div className="leading-tight">
            <span className="block font-serif text-xl font-medium tracking-tight text-[var(--text-primary)]">
              {DEVELOPER_INFO.name}
            </span>
            <span className="eyebrow block text-[0.625rem] text-[var(--text-muted)]">
              {DEVELOPER_INFO.role} · FAST-NU
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[0.8125rem] font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[var(--accent-clay)] after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {link.name}
            </a>
          ))}

          {/* Theme Switcher Controls */}
          <div className="flex items-center gap-1 p-1 rounded-full border border-[var(--border-hairline)] bg-[var(--bg-card)]">
            <button
              type="button"
              onClick={() => onThemeChange('atelier')}
              title="Atelier (Warm Paper)"
              className={`p-1.5 rounded-full transition-colors ${
                activeTheme === 'atelier'
                  ? 'bg-[var(--accent-clay)] text-white'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Sun size={14} />
            </button>
            <button
              type="button"
              onClick={() => onThemeChange('nocturne')}
              title="Nocturne (Dark Mode)"
              className={`p-1.5 rounded-full transition-colors ${
                activeTheme === 'nocturne'
                  ? 'bg-[var(--accent-clay)] text-white'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Moon size={14} />
            </button>
            <button
              type="button"
              onClick={() => onThemeChange('terminal')}
              title="Terminal (Matrix Emerald)"
              className={`p-1.5 rounded-full transition-colors ${
                activeTheme === 'terminal'
                  ? 'bg-[var(--accent-clay)] text-white'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Terminal size={14} />
            </button>
          </div>

          {/* Contact Action Button */}
          <a
            href="#contact"
            onClick={onOpenContact}
            className="group inline-flex h-10 items-center gap-2 rounded-full bg-[var(--text-primary)] px-5 text-[0.8125rem] font-semibold text-[var(--bg-primary)] transition-all duration-300 hover:bg-[var(--accent-clay)] hover:text-white"
          >
            <span>Let’s talk</span>
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </nav>

        {/* Mobile Navigation Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Quick theme cycle on mobile */}
          <button
            type="button"
            onClick={() => {
              const next = activeTheme === 'atelier' ? 'nocturne' : activeTheme === 'nocturne' ? 'terminal' : 'atelier';
              onThemeChange(next);
            }}
            className="p-2 rounded-full border border-[var(--border-hairline)] bg-[var(--bg-card)] text-[var(--text-primary)]"
            aria-label="Toggle theme"
          >
            {activeTheme === 'atelier' && <Sun size={16} />}
            {activeTheme === 'nocturne' && <Moon size={16} />}
            {activeTheme === 'terminal' && <Terminal size={16} />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="grid size-11 place-items-center rounded-full border border-[var(--border-hairline)] bg-[var(--bg-card)] text-[var(--text-primary)]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[var(--border-hairline)] bg-[var(--bg-card)] px-6 py-6 shadow-xl backdrop-blur-xl transition-all">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[var(--text-primary)] hover:text-[var(--accent-clay)] transition-colors py-1 border-b border-[var(--border-hairline)]/50"
              >
                {link.name}
              </a>
            ))}

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-[var(--text-muted)] font-mono uppercase">Theme</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onThemeChange('atelier')}
                  className={`px-3 py-1 rounded-full text-xs font-mono ${
                    activeTheme === 'atelier' ? 'bg-[var(--accent-clay)] text-white' : 'border border-[var(--border-hairline)]'
                  }`}
                >
                  Paper
                </button>
                <button
                  type="button"
                  onClick={() => onThemeChange('nocturne')}
                  className={`px-3 py-1 rounded-full text-xs font-mono ${
                    activeTheme === 'nocturne' ? 'bg-[var(--accent-clay)] text-white' : 'border border-[var(--border-hairline)]'
                  }`}
                >
                  Dark
                </button>
                <button
                  type="button"
                  onClick={() => onThemeChange('terminal')}
                  className={`px-3 py-1 rounded-full text-xs font-mono ${
                    activeTheme === 'terminal' ? 'bg-[var(--accent-clay)] text-white' : 'border border-[var(--border-hairline)]'
                  }`}
                >
                  Terminal
                </button>
              </div>
            </div>

            <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenContact) onOpenContact();
              }}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-[var(--text-primary)] py-3 text-sm font-semibold text-[var(--bg-primary)]"
            >
              <span>Get in touch</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
