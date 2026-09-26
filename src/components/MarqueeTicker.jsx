'use client';

import React from 'react';
import { MARQUEE_ITEMS } from '../data/portfolioData';

export default function MarqueeTicker() {
  return (
    <div className="relative flex overflow-hidden select-none border-y border-[var(--border-hairline)] bg-[var(--bg-secondary)]/60 py-6 text-[var(--text-primary)] md:py-7">
      <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
        
        {/* First track */}
        <div className="flex shrink-0 items-center">
          {MARQUEE_ITEMS.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="px-6 font-serif text-2xl italic md:px-9 md:text-4xl text-[var(--text-primary)]">
                {item}
              </span>
              <svg
                viewBox="0 0 24 24"
                className="size-4 shrink-0 text-[var(--accent-clay)] md:size-5"
                aria-hidden="true"
              >
                <path
                  d="M12 0c.6 6.6 5.4 11.4 12 12-6.6.6-11.4 5.4-12 12-.6-6.6-5.4-11.4-12-12C6.6 11.4 11.4 6.6 12 0Z"
                  fill="currentColor"
                />
              </svg>
            </React.Fragment>
          ))}
        </div>

        {/* Duplicate track for seamless infinite loop */}
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {MARQUEE_ITEMS.map((item, idx) => (
            <React.Fragment key={`dup-${idx}`}>
              <span className="px-6 font-serif text-2xl italic md:px-9 md:text-4xl text-[var(--text-primary)]">
                {item}
              </span>
              <svg
                viewBox="0 0 24 24"
                className="size-4 shrink-0 text-[var(--accent-clay)] md:size-5"
                aria-hidden="true"
              >
                <path
                  d="M12 0c.6 6.6 5.4 11.4 12 12-6.6.6-11.4 5.4-12 12-.6-6.6-5.4-11.4-12-12C6.6 11.4 11.4 6.6 12 0Z"
                  fill="currentColor"
                />
              </svg>
            </React.Fragment>
          ))}
        </div>

      </div>
    </div>
  );
}
