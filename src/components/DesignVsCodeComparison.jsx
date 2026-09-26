'use client';

import React, { useState, useRef, useCallback } from 'react';
import { Sliders, MoveHorizontal, CheckCircle2, Compass, Sparkles, Code2, Layers } from 'lucide-react';
import { COMPARISON_DATA } from '../data/portfolioData';

export default function DesignVsCodeComparison() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPos(percent);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section
      id="comparison"
      className="py-24 md:py-36 border-b border-[var(--border-hairline)] bg-[var(--bg-primary)] relative"
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="container-page">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow inline-flex items-center gap-2 text-[var(--accent-clay)] border border-[var(--accent-clay)]/30 bg-[var(--bg-card)] px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
            <Compass size={13} />
            <span>Interactive Craft Analysis</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
            From Wireframe Spec to <em className="text-[var(--accent-clay)] italic">Living Production Code</em>.
          </h2>

          <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed">
            Drag the interactive divider to inspect how architectural UX schematics transform into responsive, pixel-perfect React & Tailwind applications.
          </p>
        </div>

        {/* Comparison Container */}
        <div className="relative max-w-4xl mx-auto overflow-hidden rounded-xl border border-[var(--border-strong)] shadow-2xl bg-[var(--bg-card)]">
          
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onClick={(e) => handleMove(e.clientX)}
            className="relative aspect-[16/10] sm:aspect-[16/9] w-full select-none cursor-ew-resize overflow-hidden"
          >
            
            {/* Right Pane (Background Layer): Full Production React UI */}
            <div className="absolute inset-0 bg-[var(--bg-card)] p-6 sm:p-10 flex flex-col justify-between">
              
              {/* Top Bar */}
              <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-4">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-[var(--accent-clay)] text-white flex items-center justify-center font-serif font-bold text-xs">
                    ABK
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-[var(--text-primary)]">
                      LuxeStore Checkout Experience
                    </h4>
                    <span className="font-mono text-[0.625rem] text-emerald-600 font-semibold">
                      ● Live React 19 + Tailwind CSS
                    </span>
                  </div>
                </div>

                <span className="rounded-full bg-[var(--accent-clay)]/10 px-3 py-1 font-mono text-xs text-[var(--accent-clay)] font-semibold">
                  {COMPARISON_DATA.codeLabel}
                </span>
              </div>

              {/* Middle UI Cards */}
              <div className="grid grid-cols-2 gap-4 my-auto">
                <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-secondary)] p-5 shadow-sm">
                  <span className="font-mono text-[0.65rem] text-[var(--text-muted)] uppercase">Cart Summary</span>
                  <div className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-1">$240.00</div>
                  <div className="mt-3 flex items-center justify-between text-xs text-[var(--text-secondary)]">
                    <span>2 Items in Bag</span>
                    <span className="text-emerald-600 font-medium">Free Shipping</span>
                  </div>
                </div>

                <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-secondary)] p-5 shadow-sm flex flex-col justify-between">
                  <span className="font-mono text-[0.65rem] text-[var(--text-muted)] uppercase">Order Action</span>
                  <button
                    type="button"
                    className="w-full rounded-lg bg-[var(--text-primary)] py-2 text-xs font-semibold text-[var(--bg-primary)] hover:bg-[var(--accent-clay)] transition-colors"
                  >
                    Confirm Order
                  </button>
                </div>
              </div>

              {/* Bottom Specs */}
              <div className="flex items-center justify-between border-t border-[var(--border-hairline)] pt-3 text-xs font-mono text-[var(--text-muted)]">
                <span>Tailwind Utility Tokens: px-6 py-3 rounded-xl shadow-md</span>
                <span className="text-emerald-500 font-semibold">100% Responsive</span>
              </div>

            </div>

            {/* Left Pane (Clipped Overlay Layer): Schematic Wireframe Blueprint */}
            <div
              className="absolute inset-0 bg-[#0E1513] text-[#A6C4B8] p-6 sm:p-10 flex flex-col justify-between border-r-2 border-[var(--accent-clay)]"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              
              {/* Top Bar Wireframe */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full border border-dashed border-emerald-400 text-emerald-400 flex items-center justify-center font-mono text-xs">
                    &lt;svg&gt;
                  </div>
                  <div>
                    <h4 className="font-mono text-sm font-semibold text-emerald-300">
                      &lt;Header className="flex items-center"&gt;
                    </h4>
                    <span className="font-mono text-[0.625rem] text-emerald-400/70">
                      Blueprint Schema (1:1 Ratio)
                    </span>
                  </div>
                </div>

                <span className="rounded-full border border-emerald-400/40 bg-emerald-950/40 px-3 py-1 font-mono text-xs text-emerald-300">
                  {COMPARISON_DATA.wireframeLabel}
                </span>
              </div>

              {/* Middle Wireframe Cards */}
              <div className="grid grid-cols-2 gap-4 my-auto font-mono text-xs">
                <div className="rounded-xl border border-dashed border-white/20 bg-white/5 p-5">
                  <span className="text-white/40 text-[0.65rem]">&lt;div id="summary"&gt;</span>
                  <div className="text-xl text-emerald-400 font-mono mt-1">$[PRICE_TOTAL]</div>
                  <div className="mt-3 text-[0.7rem] text-white/50">
                    display: flex; gap: 12px;
                  </div>
                </div>

                <div className="rounded-xl border border-dashed border-white/20 bg-white/5 p-5 flex flex-col justify-between">
                  <span className="text-white/40 text-[0.65rem]">&lt;button role="submit"&gt;</span>
                  <div className="w-full rounded border border-dashed border-emerald-400 py-1.5 text-center text-emerald-300 text-[0.7rem]">
                    Action Trigger
                  </div>
                </div>
              </div>

              {/* Bottom Specs */}
              <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[0.65rem] font-mono text-white/50">
                <span>Semantic Outline: &lt;main&gt; &gt; &lt;section&gt; &gt; &lt;article&gt;</span>
                <span className="text-emerald-400">Flexbox Matrix</span>
              </div>

            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 z-30 flex items-center justify-center -translate-x-1/2 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="h-full w-0.5 bg-[var(--accent-clay)] shadow-lg" />
              <div
                onMouseDown={handleMouseDown}
                className="absolute size-9 rounded-full bg-[var(--accent-clay)] text-white shadow-xl flex items-center justify-center pointer-events-auto cursor-ew-resize border-2 border-white"
              >
                <MoveHorizontal size={16} />
              </div>
            </div>

          </div>

          {/* Bottom Info Strip */}
          <div className="p-4 bg-[var(--bg-secondary)] border-t border-[var(--border-hairline)] flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--text-secondary)]">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-[var(--accent-clay)]" />
              <span>Drag slider left or right to inspect the transition from layout wireframe to live code.</span>
            </div>
            <span className="font-mono text-[var(--accent-clay)] font-semibold">
              Split Position: {Math.round(sliderPos)}%
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
