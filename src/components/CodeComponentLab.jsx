'use client';

import React, { useState } from 'react';
import { Code2, Copy, Check, Sparkles, Terminal, Layers, ArrowUpRight, Cpu } from 'lucide-react';
import { CODE_LAB_COMPONENTS } from '../data/portfolioData';

export default function CodeComponentLab() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  const current = CODE_LAB_COMPONENTS[selectedIdx];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.tailwindSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code-lab" className="py-24 md:py-32 border-b border-[var(--border-hairline)] bg-[var(--bg-secondary)]/50 relative">
      <div className="container-page">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow inline-flex items-center gap-2 text-[var(--accent-clay)] border border-[var(--accent-clay)]/30 bg-[var(--bg-card)] px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
            <Code2 size={13} />
            <span>Interactive Component Lab</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
            Tailwind CSS & React <em className="text-[var(--accent-clay)] italic">Component Workshop</em>.
          </h2>

          <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed">
            Test and inspect interactive UI building blocks crafted with modern Tailwind utility tokens, accessible semantic markup, and responsive micro-interactions.
          </p>
        </div>

        {/* Tab Buttons for selecting components */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CODE_LAB_COMPONENTS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs transition-all duration-300 ${
                selectedIdx === idx
                  ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] shadow-md font-semibold'
                  : 'bg-[var(--bg-card)] border border-[var(--border-hairline)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-muted)]'
              }`}
            >
              <span>{item.title}</span>
              <span className="text-[0.625rem] opacity-75">· {item.category}</span>
            </button>
          ))}
        </div>

        {/* Two-Column Lab Workspace */}
        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: Live Interactive Preview */}
          <div className="lg:col-span-6 flex flex-col rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-card)] p-6 sm:p-8 shadow-sm">
            
            <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-4 mb-6">
              <div>
                <span className="eyebrow text-[var(--accent-clay)]">{current.category}</span>
                <h3 className="font-serif text-2xl font-semibold text-[var(--text-primary)] mt-1">
                  {current.title}
                </h3>
              </div>
              <span className="font-mono text-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20">
                Live Interactive Preview
              </span>
            </div>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8">
              {current.description}
            </p>

            {/* Interactive Preview Canvas */}
            <div className="my-auto py-12 px-6 rounded-lg border border-dashed border-[var(--border-strong)] bg-[var(--bg-secondary)]/70 flex items-center justify-center min-h-[220px]">
              
              {current.previewType === 'button' && (
                <button
                  type="button"
                  onClick={() => alert("Interactive Button Clicked! Engineered by Abdul Baseer Khan.")}
                  className="group inline-flex items-center gap-3 rounded-full bg-[var(--text-primary)] px-6 py-3.5 text-sm font-semibold tracking-wide text-[var(--bg-primary)] transition-all duration-300 hover:bg-[var(--accent-clay)] hover:text-white hover:shadow-xl hover:shadow-[var(--accent-clay)]/20 active:scale-95 cursor-pointer"
                >
                  <span>Explore Selected Work</span>
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              )}

              {current.previewType === 'card' && (
                <div className="relative w-full max-w-xs overflow-hidden rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)]/90 p-6 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
                      Lighthouse Performance
                    </span>
                    <span className="inline-flex size-2 rounded-full bg-emerald-500 animate-ping" />
                  </div>
                  <div className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
                    100%
                  </div>
                  <p className="mt-1 text-xs text-[var(--text-secondary)]">
                    Zero layout shifts (0.00 CLS) & fast first contentful paint.
                  </p>
                </div>
              )}

              {current.previewType === 'terminal' && (
                <div className="w-full max-w-sm rounded-lg border border-[var(--border-strong)] bg-[#141312] p-4 font-mono text-xs text-[#E6E1D8] shadow-2xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                    <div className="flex gap-1.5">
                      <span className="size-2 rounded-full bg-rose-500/80" />
                      <span className="size-2 rounded-full bg-amber-500/80" />
                      <span className="size-2 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-white/40 text-[0.65rem]">fast-nu/loop.cpp</span>
                  </div>
                  <p className="text-emerald-400">$ clang++ -std=c++17 loop.cpp -o loop && ./loop</p>
                  <p className="text-white/80 mt-1">[FAST Lahore] Pattern compiled & executed: 5 levels</p>
                </div>
              )}

              {current.previewType === 'pill' && (
                <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--border-strong)] bg-[var(--bg-card)] px-4 py-2 shadow-sm backdrop-blur">
                  <span className="relative flex size-2.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
                  </span>
                  <span className="font-mono text-xs font-semibold text-[var(--text-primary)]">
                    Available for Front-End Roles & Internships
                  </span>
                </div>
              )}

            </div>

            {/* Architectural Specs List */}
            <div className="mt-8 pt-5 border-t border-[var(--border-hairline)]">
              <span className="eyebrow text-[var(--text-muted)] block mb-3">Technical Specifications:</span>
              <div className="flex flex-wrap gap-2">
                {current.specs.map((spec, i) => (
                  <span
                    key={i}
                    className="font-mono text-[0.6875rem] px-2.5 py-1 rounded bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-hairline)]"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Code Syntax & Copy */}
          <div className="lg:col-span-6 flex flex-col rounded-xl border border-[var(--border-hairline)] bg-[#121110] text-[#EDE8DF] p-6 sm:p-8 shadow-sm font-mono text-xs">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-[var(--accent-clay)]" />
                <span className="text-xs text-white/70">React & Tailwind Code Snippet</span>
              </div>

              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-white/80 hover:bg-[var(--accent-clay)] hover:text-white transition-colors cursor-pointer text-xs"
              >
                {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Code'}</span>
              </button>
            </div>

            {/* Code Body */}
            <div className="my-auto overflow-x-auto py-2">
              <pre className="text-[0.75rem] leading-relaxed text-amber-200/90 whitespace-pre font-mono">
                {current.tailwindSnippet}
              </pre>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[0.7rem] text-white/40">
              <span>Compatible with Tailwind CSS v3 & v4</span>
              <span>Fully WAI-ARIA Accessible</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
