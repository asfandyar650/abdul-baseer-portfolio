'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Send, Check, Copy, ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { DEVELOPER_INFO } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Discuss a project',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const topics = [
    'Discuss a project',
    'Hire for Internship',
    'Freelance Front-End',
    'FAST-NUCES Collaboration',
    'Say Hello'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', topic: 'Discuss a project', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="container-page py-24 md:py-36 border-b border-[var(--border-hairline)]">
      
      {/* Section Header */}
      <div className="grid gap-8 md:grid-cols-12 md:gap-10">
        
        <div className="md:col-span-3">
          <p className="eyebrow flex items-center gap-3 text-[var(--text-muted)]">
            <span className="text-[var(--accent-clay)] font-bold">05</span>
            <span className="h-px w-8 bg-[var(--border-strong)]" aria-hidden="true" />
            Get in touch
          </p>
        </div>

        <div className="md:col-span-9">
          <h2 className="font-serif text-[2.6rem] leading-[0.98] text-[var(--text-primary)] xs:text-5xl md:text-6xl lg:text-7xl">
            Let’s start a <em className="text-[var(--accent-clay)] italic">conversation</em>.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed md:text-lg text-[var(--text-secondary)]">
            Whether you have a front-end project to build, an internship opportunity, or want to discuss React, Next.js, and C++ algorithms at FAST University—my inbox is always open.
          </p>
        </div>

      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-12">
        
        {/* Left Column: Direct Contacts & FAST University Location */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Email Card with Copy Trigger */}
          <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-card)] p-6 shadow-sm">
            <span className="eyebrow text-[var(--text-muted)] block mb-1">Direct Inquiries</span>
            <div className="flex items-center justify-between mt-2">
              <a
                href={`mailto:${DEVELOPER_INFO.email}`}
                className="font-serif text-xl font-semibold text-[var(--text-primary)] hover:text-[var(--accent-clay)] transition-colors truncate"
              >
                {DEVELOPER_INFO.email}
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-full border border-[var(--border-hairline)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:text-[var(--accent-clay)] transition-colors cursor-pointer shrink-0 ml-2"
                title="Copy Email"
              >
                {copiedEmail ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
              </button>
            </div>
            {copiedEmail && (
              <p className="text-xs text-emerald-600 mt-2 font-mono">Email address copied to clipboard!</p>
            )}
          </div>

          {/* Academic Base & Campus */}
          <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-card)] p-6 shadow-sm">
            <div className="flex items-center gap-2 text-[var(--accent-clay)] font-mono text-xs font-semibold uppercase mb-1">
              <MapPin size={14} />
              <span>Campus & Location</span>
            </div>
            <h4 className="font-serif text-xl font-semibold text-[var(--text-primary)] mt-1">
              {DEVELOPER_INFO.city}, {DEVELOPER_INFO.country}
            </h4>
            <p className="text-xs text-[var(--text-secondary)] mt-1">
              FAST-NUCES Lahore Campus · Faisal Town
            </p>
            <p className="text-xs text-[var(--text-muted)] mt-2 font-mono">
              Timezone: PKT (UTC+5) · Open to remote & local roles
            </p>
          </div>

          {/* Social Profiles */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href={DEVELOPER_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--accent-clay)] hover:text-[var(--accent-clay)] transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <GithubIcon size={18} />
                <span className="font-mono text-xs font-semibold">GitHub</span>
              </div>
              <ArrowUpRight size={14} />
            </a>

            <a
              href={DEVELOPER_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--accent-clay)] hover:text-[var(--accent-clay)] transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <LinkedinIcon size={18} />
                <span className="font-mono text-xs font-semibold">LinkedIn</span>
              </div>
              <ArrowUpRight size={14} />
            </a>
          </div>

        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-card)] p-6 sm:p-8 md:p-10 shadow-sm space-y-6"
          >
            {/* Topic Chips */}
            <div>
              <label className="eyebrow text-[var(--text-muted)] block mb-3">
                What are you looking to discuss?
              </label>
              <div className="flex flex-wrap gap-2">
                {topics.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setFormData({ ...formData, topic: t })}
                    className={`rounded-full px-3.5 py-1.5 font-mono text-xs transition-colors ${
                      formData.topic === t
                        ? 'bg-[var(--accent-clay)] text-white shadow-sm font-semibold'
                        : 'border border-[var(--border-hairline)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Name & Email inputs */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="eyebrow text-[var(--text-muted)] block mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-secondary)] px-4 py-3 text-sm text-[var(--text-primary)] focus:border-[var(--accent-clay)] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="eyebrow text-[var(--text-muted)] block mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. sarah@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-secondary)] px-4 py-3 text-sm text-[var(--text-primary)] focus:border-[var(--accent-clay)] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Message input */}
            <div>
              <label className="eyebrow text-[var(--text-muted)] block mb-2">
                Message / Project Overview *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Describe your project, timeline, or position details..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-secondary)] px-4 py-3 text-sm text-[var(--text-primary)] focus:border-[var(--accent-clay)] focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit Action */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                className="btn-primary w-full sm:w-auto"
              >
                <span>Transmit Message</span>
                <Send size={15} />
              </button>

              {submitted && (
                <div className="flex items-center gap-2 text-emerald-600 font-mono text-xs font-semibold">
                  <Check size={16} />
                  <span>Message delivered! I will respond promptly.</span>
                </div>
              )}
            </div>

          </form>
        </div>

      </div>

    </section>
  );
}
