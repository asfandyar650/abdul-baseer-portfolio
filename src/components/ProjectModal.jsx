'use client';

import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Compass } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] shadow-2xl p-6 sm:p-8 md:p-10">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 grid size-10 place-items-center rounded-full border border-[var(--border-hairline)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:border-[var(--accent-clay)] hover:text-[var(--accent-clay)] transition-colors"
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="pr-10">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="eyebrow text-[var(--accent-clay)]">{project.category}</span>
            <span className="h-1 w-1 rounded-full bg-[var(--border-strong)]" />
            <span className="font-mono text-[var(--text-muted)]">{project.year}</span>
            <span className="h-1 w-1 rounded-full bg-[var(--border-strong)]" />
            <span className="rounded-full bg-[var(--accent-clay-subtle)] px-2.5 py-0.5 font-mono text-[0.6875rem] text-[var(--accent-clay)]">
              {project.badge}
            </span>
          </div>

          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
            {project.title}
          </h2>
          <p className="mt-2 text-base text-[var(--text-secondary)] sm:text-lg">
            {project.summary}
          </p>
        </div>

        {/* Mockup Preview Visual Banner */}
        <div className={`mt-8 relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-[var(--border-hairline)] bg-gradient-to-br ${project.mockupColor} p-6 flex flex-col justify-between`}>
          <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-rose-500/80" />
              <span className="size-3 rounded-full bg-amber-500/80" />
              <span className="size-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="font-mono text-xs text-[var(--text-muted)]">
              {project.id}.abdulbaseer.dev
            </span>
          </div>

          <div className="my-auto text-center py-6">
            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              {project.title}
            </h4>
            <p className="mt-2 max-w-lg mx-auto text-sm text-[var(--text-secondary)]">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-black/10 dark:border-white/10 pt-3">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="font-mono text-[0.625rem] px-2 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border-hairline)]">
                  {tag}
                </span>
              ))}
            </div>
            <span className="font-mono text-xs text-emerald-600 font-semibold">● Production Ready</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <span>Live Demonstration</span>
            <ExternalLink size={15} />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <GithubIcon size={16} />
            <span>Inspect GitHub Repository</span>
          </a>
        </div>

        {/* Performance & Metrics Row */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 border-y border-[var(--border-hairline)] py-5">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="border-l-2 border-[var(--accent-clay)] pl-3">
              <span className="font-mono text-xs text-[var(--text-muted)] uppercase block">
                {m.label}
              </span>
              <span className="font-serif text-xl font-semibold text-[var(--text-primary)] mt-0.5 block">
                {m.value}
              </span>
            </div>
          ))}
        </div>

        {/* Problem & Architectural Solution */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-secondary)]/50 p-5">
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-mono text-xs font-semibold uppercase">
              <Compass size={14} />
              <span>Challenge & Context</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              {project.problem}
            </p>
          </div>

          <div className="rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-secondary)]/50 p-5">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold uppercase">
              <Cpu size={14} />
              <span>Architectural Solution</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features List */}
        <div className="mt-8">
          <h4 className="font-serif text-xl font-semibold text-[var(--text-primary)] flex items-center gap-2">
            <Layers size={18} className="text-[var(--accent-clay)]" />
            Key Engineering Features
          </h4>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                <CheckCircle2 size={16} className="text-[var(--accent-clay)] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Note */}
        <div className="mt-8 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-secondary)]/70 p-4 font-mono text-xs text-[var(--text-muted)]">
          <span className="font-semibold text-[var(--text-primary)]">Architecture Pattern: </span>
          {project.architecture}
        </div>

      </div>
    </div>
  );
}
