// Abdul Baseer Khan — Front-End Developer & CS Student Portfolio Data
// FAST University Lahore (FAST-NUCES) — 1st Semester BSCS

export const DEVELOPER_INFO = {
  name: "Abdul Baseer Khan",
  shortName: "Baseer",
  initials: "ABK",
  role: "Front-End Developer",
  subRole: "BS Computer Science Undergraduate",
  tagline: "Engineering responsive, high-performance web experiences with React, Next.js & Tailwind CSS.",
  status: "Open to Front-End Roles & Internships",
  city: "Lahore",
  country: "Pakistan",
  university: "FAST-NUCES Lahore",
  universityFull: "National University of Computer & Emerging Sciences (FAST-NUCES)",
  degree: "BS Computer Science",
  semester: "1st Semester",
  campus: "Lahore Campus (Faisal Town)",
  email: "abdulbaseerkhan.dev@gmail.com",
  github: "https://github.com/abdulbaseer-khan",
  linkedin: "https://linkedin.com/in/abdulbaseer-khan",
  whatsapp: "+92 300 0000000",
  bio: "I'm a front-end developer and 1st-semester BS Computer Science student at FAST University Lahore. I combine academic computer science rigor—logic, algorithms, and C++ memory foundations—with modern front-end craft. I turn design blueprints into lightning-fast, accessible web applications using React, Next.js, and Tailwind CSS.",
  stats: [
    { value: "06+", label: "Web Applications" },
    { value: "1st", label: "Semester · FAST Lahore" },
    { value: "100%", label: "Responsive & Accessible" },
    { value: "99+", label: "Lighthouse Performance" }
  ]
};

export const CORE_SKILLS = [
  { name: "React.js", category: "Framework", level: "Advanced", icon: "react" },
  { name: "Next.js (App Router)", category: "Framework", level: "Proficient", icon: "next" },
  { name: "Tailwind CSS", category: "Styling", level: "Expert", icon: "tailwind" },
  { name: "JavaScript (ES6+)", category: "Language", level: "Advanced", icon: "js" },
  { name: "HTML5 & Semantic DOM", category: "Core Web", level: "Expert", icon: "html" },
  { name: "CSS3 & Modern Layouts", category: "Core Web", level: "Advanced", icon: "css" },
  { name: "C++ (Programming Fund.)", category: "Language", level: "Academic Core", icon: "cpp" },
  { name: "Git & GitHub", category: "Tooling", level: "Proficient", icon: "git" }
];

export const MARQUEE_ITEMS = [
  "React.js Engineering",
  "Next.js App Router",
  "Tailwind CSS Architecture",
  "JavaScript ES6+",
  "HTML5 Semantic Layouts",
  "FAST-NUCES Lahore",
  "C++ Algorithms & Memory",
  "Mobile-First Responsive Design",
  "Performance & SEO Optimization",
  "UI/UX Component Systems",
  "Git & GitHub Workflows"
];

export const PROJECTS = [
  {
    id: "burger-craft",
    title: "BurgerCraft — Interactive Food Customizer",
    category: "React & State Management",
    year: "2024",
    badge: "Interactive UI",
    featured: true,
    summary: "A dynamic visual burger builder with real-time SVG layer rendering, ingredient calculation, and animated order flow.",
    description: "BurgerCraft is a visual, interactive food customization app built with React and Tailwind CSS. Users can customize their order layer by layer in real time, observing ingredients animate onto the canvas while nutritional metrics and pricing recalculate dynamically with zero latency.",
    problem: "Food delivery apps often feature static dropdowns that fail to give customers visual reassurance of their custom orders.",
    solution: "Engineered a reactive canvas where each ingredient is treated as a component layer with entry animations, dynamic stacking order, and real-time cost calculation.",
    tags: ["React 19", "Tailwind CSS", "State Management", "Lucide Icons", "LocalStorage"],
    metrics: [
      { label: "Rendering Latency", value: "< 16ms (60fps)" },
      { label: "Custom Combinations", value: "1,000+ Permutations" },
      { label: "Responsive Support", value: "Mobile, Tablet, Desktop" }
    ],
    features: [
      "Real-time visual ingredient stacking with smooth spring animations",
      "Dynamic pricing engine calculating add-on costs instantly",
      "Interactive dietary filters (Gluten-Free, Vegan, High-Protein)",
      "Persistent cart drawer with checkout state management",
      "One-click order receipt generator and simulation"
    ],
    mockupColor: "from-amber-600/20 via-orange-500/10 to-transparent",
    accentColor: "#D97706",
    demoUrl: "https://burgercraft-demo.vercel.app",
    githubUrl: "https://github.com/abdulbaseer-khan/burger-builder",
    architecture: "Container-Presenter pattern with pure functional state reducers and decoupled pricing lookup tables."
  },
  {
    id: "fast-portal",
    title: "FAST-NUCES Academic & Classroom Hub",
    category: "Next.js & University Tools",
    year: "2024",
    badge: "Next.js App Router",
    featured: true,
    summary: "A modern, high-speed university portal for FAST Lahore students featuring timetable scheduling, GPA forecasting, and assignment tracking.",
    description: "Designed specifically around the academic rhythm of FAST University Lahore students. Built with Next.js App Router and Tailwind CSS, this student dashboard brings course schedules, attendance percentage trackers, and grade projections into an elegant, distraction-free interface.",
    problem: "Traditional university portals are notoriously slow, cluttered, and cumbersome on mobile screens during fast-paced campus days.",
    solution: "Constructed an ultra-fast Next.js web application with optimistic UI updates, local storage backup, and instant GPA projection sliders.",
    tags: ["Next.js", "React Server Components", "Tailwind CSS", "FAST Lahore", "Chart.js"],
    metrics: [
      { label: "Initial Page Load", value: "0.4s Fast Load" },
      { label: "Lighthouse Score", value: "100 Performance" },
      { label: "Dark/Light Modes", value: "Atelier & Nocturne" }
    ],
    features: [
      "Interactive weekly schedule grid with room numbers & instructor details",
      "Real-time attendance buffer calculator (showing how many classes can be safely missed)",
      "Dynamic FAST GPA / CGPA predictor with weighted credit hour algorithms",
      "Assignment deadline countdown with priority color-coding",
      "Downloadable semester schedule in ICS and PDF formats"
    ],
    mockupColor: "from-blue-600/20 via-indigo-500/10 to-transparent",
    accentColor: "#2563EB",
    demoUrl: "https://fast-classroom-hub.vercel.app",
    githubUrl: "https://github.com/abdulbaseer-khan/classroom_app",
    architecture: "Next.js App Router with modular layout components, client-side state caching, and responsive CSS Grid matrix."
  },
  {
    id: "luxe-commerce",
    title: "LuxeStore — Minimalist Headless E-Commerce",
    category: "Next.js & Tailwind CSS",
    year: "2024",
    badge: "Headless E-Commerce",
    featured: true,
    summary: "An editorial e-commerce experience focusing on fluid typography, instant faceted search, and slide-over cart drawer.",
    description: "An editorial storefront crafted for high-end lifestyle products. Emphasizes clean whitespace, instant client-side filtering, animated slide-out bag, and friction-free multi-step checkout simulation.",
    problem: "Many retail interfaces overwhelm shoppers with aggressive pop-ups, slow image reflows, and cluttered navigation.",
    solution: "Delivered a calm, luxury shopping environment modeled after Swiss editorial design, powered by Next.js and utility-first Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS", "React", "Headless UI", "Lucide Icons"],
    metrics: [
      { label: "Search Latency", value: "Instant (0ms)" },
      { label: "Cumulative Layout Shift", value: "0.00 CLS" },
      { label: "Mobile Usability", value: "Touch-Optimized" }
    ],
    features: [
      "Faceted filter system by category, material, price range, and availability",
      "Slide-over mini-cart drawer with item quantity controls and coupon codes",
      "Interactive product zoom gallery with thumbnail switcher",
      "Optimistic item removal and undo notifications",
      "Responsive layout scaling seamlessly from 320px to 4K displays"
    ],
    mockupColor: "from-stone-700/20 via-stone-500/10 to-transparent",
    accentColor: "#78716C",
    demoUrl: "https://luxestore-demo.vercel.app",
    githubUrl: "https://github.com/abdulbaseer-khan/luxe-commerce",
    architecture: "State driven by custom React hooks with persistent session storage and memoized catalog filtering."
  },
  {
    id: "algovista",
    title: "AlgoVista — C++ & Web Sorting Visualizer",
    category: "CS Foundations & Algorithms",
    year: "2024",
    badge: "Algorithms & C++",
    featured: false,
    summary: "Step-by-step sorting algorithm visualizer connecting FAST Lahore C++ programming concepts with animated web graphics.",
    description: "Bridging the academic coursework of FAST-NUCES (Programming Fundamentals in C++) with browser-based interactive engineering. Demonstrates Bubble Sort, Selection Sort, and Insertion Sort step-by-step with real-time comparison counters and side-by-side C++ code tracking.",
    problem: "Understanding pointer shifts, nested loops, and memory swap operations from textbook code alone can be abstract for freshman CS students.",
    solution: "Created an interactive visual lab where students can slow down sorting routines, inspect swap states, and read the equivalent C++ implementation line-by-line.",
    tags: ["JavaScript", "HTML5 Canvas", "Tailwind CSS", "C++", "FAST-NUCES"],
    metrics: [
      { label: "Algorithms Visualized", value: "5 Core Sorts" },
      { label: "Step Accuracy", value: "1:1 with C++ Code" },
      { label: "Animation Control", value: "Play / Pause / Step" }
    ],
    features: [
      "Bar graph visualization with active comparison and sorted color indicators",
      "Interactive speed slider (10ms to 500ms per step) and custom array generator",
      "Side-by-side synchronized C++ code editor highlighting active loop lines",
      "Time complexity badges (Best, Average, Worst case Big-O notation)",
      "Detailed swap and comparison counters updating on every tick"
    ],
    mockupColor: "from-emerald-600/20 via-teal-500/10 to-transparent",
    accentColor: "#059669",
    demoUrl: "https://algovista-demo.vercel.app",
    githubUrl: "https://github.com/abdulbaseer-khan/algovista",
    architecture: "Asynchronous generator loops orchestrating Canvas re-renders with time-sliced event loops."
  },
  {
    id: "devpulse",
    title: "DevPulse — Editorial Portfolio & Tech Journal",
    category: "Next.js & Editorial Systems",
    year: "2024",
    badge: "Design System",
    featured: false,
    summary: "Luxury architectural design system featuring triple theme modes, component playground, and precision layout engineering.",
    description: "A bespoke portfolio and engineering showcase designed with an editorial aesthetic inspired by architectural publications. Features multiple curated color palettes, custom typography hierarchy, and an embedded code laboratory.",
    problem: "Most developer portfolios use generic developer templates with clashing neon colors and boilerplate cards.",
    solution: "Engineered an elevated, calming editorial atmosphere featuring warm paper textures, serif typography, and rich interactive micro-interactions.",
    tags: ["Next.js", "Tailwind CSS", "Design Tokens", "CSS Variables", "Accessible UI"],
    metrics: [
      { label: "Theme Switching", value: "Zero Flash / Instant" },
      { label: "Accessibility Score", value: "100 / 100 A11y" },
      { label: "SEO Optimized", value: "OpenGraph & JSON-LD" }
    ],
    features: [
      "Triple theme switcher (Atelier Warm Paper, Nocturne Obsidian, Terminal Emerald)",
      "Interactive comparison slider for Wireframe vs Live Production Code",
      "Component sandbox with live preview and one-click copyable JSX/Tailwind code",
      "Monogram SVG branding with architectural arches and rotating badges",
      "Accessible modal dialogs with focus trapping and ESC key triggers"
    ],
    mockupColor: "from-amber-700/20 via-yellow-600/10 to-transparent",
    accentColor: "#B85D3B",
    demoUrl: "https://abdulbaseer-portfolio.web.app",
    githubUrl: "https://github.com/abdulbaseer-khan/portfolio",
    architecture: "Next.js App Router with theme provider, modular UI components, and accessible dialogs."
  },
  {
    id: "matias-ui",
    title: "Matias — Responsive UI Component Arsenal",
    category: "Tailwind CSS & Component Architecture",
    year: "2024",
    badge: "Component Arsenal",
    featured: false,
    summary: "Production-ready front-end component library built with Tailwind CSS, focused on accessible, fluid micro-interactions.",
    description: "A curated collection of polished front-end components built with React and Tailwind CSS. Contains navigation systems, animated buttons, glassmorphic metric cards, and responsive pricing tables ready for drop-in usage.",
    problem: "Re-building common interactive patterns from scratch on every project wastes development time and risks introducing accessibility defects.",
    solution: "Crafted a reusable, accessible component catalog with consistent design tokens, keyboard navigation, and responsive scaling.",
    tags: ["React", "Tailwind CSS", "Accessibility (a11y)", "Micro-Interactions"],
    metrics: [
      { label: "Reusable Components", value: "24+ Blocks" },
      { label: "Bundle Overhead", value: "0 External CSS" },
      { label: "WAI-ARIA Compliant", value: "Fully Verified" }
    ],
    features: [
      "Glassmorphic cards with responsive borders and backdrop blur",
      "Magnetic CTA buttons with spring hover physics",
      "Animated accordion and FAQ blocks with smooth height transitions",
      "Accessible modal dialogs and slide-out navigation panels",
      "Full documentation with copy-paste Tailwind code snippets"
    ],
    mockupColor: "from-violet-600/20 via-purple-500/10 to-transparent",
    accentColor: "#7C3AED",
    demoUrl: "https://matias-ui.vercel.app",
    githubUrl: "https://github.com/abdulbaseer-khan/matias-portfolio",
    architecture: "Composable React components with variant props, accessible aria attributes, and strict class encapsulation."
  }
];

export const CODE_LAB_COMPONENTS = [
  {
    id: "magnetic-button",
    title: "Editorial Action Pill",
    category: "Buttons & CTAs",
    badge: "Interactive UI",
    description: "A luxury tactile pill button featuring subtle hover elevation, directional arrow translation, and an architectural clay accent.",
    previewType: "button",
    tailwindSnippet: `<button className="group inline-flex items-center gap-3 rounded-full bg-[#191817] px-6 py-3.5 text-sm font-semibold tracking-wide text-[#FAF7F2] transition-all duration-300 hover:bg-[#B85D3B] hover:shadow-lg hover:shadow-[#B85D3B]/20 active:scale-95">
  <span>Explore Selected Work</span>
  <svg className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
</button>`,
    specs: ["Padding: px-6 py-3.5", "Radius: rounded-full", "Transition: 300ms ease-out", "Active state: scale-95"]
  },
  {
    id: "stat-card",
    title: "Glassmorphic Metric Card",
    category: "Data Display",
    badge: "Dashboard UI",
    description: "A refined metric card with hairline borders, subtle paper glow, and serif typography for key performance statistics.",
    previewType: "card",
    tailwindSnippet: `<div className="relative overflow-hidden rounded-xl border border-black/10 bg-white/70 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#B85D3B]/40 hover:shadow-xl">
  <div className="flex items-center justify-between">
    <span className="font-mono text-xs uppercase tracking-widest text-[#8E877F]">Core Metric</span>
    <span className="inline-flex size-2 rounded-full bg-emerald-500 animate-pulse" />
  </div>
  <div className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#191817]">100%</div>
  <p className="mt-1 text-sm text-[#57534E]">Performance score across all device viewports.</p>
</div>`,
    specs: ["Backdrop Blur: 12px", "Border: hairline (0.08 alpha)", "Typography: Serif 4xl", "Pulse Indicator: Emerald"]
  },
  {
    id: "terminal-snippet",
    title: "FAST-NUCES C++ Terminal",
    category: "Developer Tools",
    badge: "C++ & CLI",
    description: "A live simulated terminal block with syntax coloring, copyable code, and instant compile/run feedback.",
    previewType: "terminal",
    tailwindSnippet: `<div className="rounded-lg border border-black/15 bg-[#141312] p-4 font-mono text-xs text-[#E6E1D8] shadow-2xl">
  <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-3">
    <div className="flex gap-1.5">
      <span className="size-2.5 rounded-full bg-rose-500/80" />
      <span className="size-2.5 rounded-full bg-amber-500/80" />
      <span className="size-2.5 rounded-full bg-emerald-500/80" />
    </div>
    <span className="text-white/40 ml-2">bash ~ fast-nu/main.cpp</span>
  </div>
  <p className="text-emerald-400">$ clang++ -std=c++17 main.cpp -o main && ./main</p>
  <p className="text-white/80 mt-1">[FAST-NUCES] Algorithm executed successfully in 0.002s</p>
</div>`,
    specs: ["Font: JetBrains / Mono", "Contrast: AAA Compliant", "macOS Traffic Lights", "Shell prompt: Emerald"]
  },
  {
    id: "status-pill",
    title: "Pulsing Availability Tag",
    category: "Micro-Components",
    badge: "Status Indicator",
    description: "A glowing badge showing current availability for internships and freelance front-end opportunities.",
    previewType: "pill",
    tailwindSnippet: `<div className="inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-white/80 px-3.5 py-1.5 shadow-sm backdrop-blur">
  <span className="relative flex size-2">
    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
  </span>
  <span className="font-mono text-xs font-semibold text-[#57534E]">Open to Front-End Roles & Internships</span>
</div>`,
    specs: ["Animation: Ping + Static Dot", "Radius: Full Pill", "Border: 10% black hairline", "Text: Mono 12px"]
  }
];

export const TOOLKIT_CATEGORIES = [
  {
    name: "Modern Front-End Frameworks",
    description: "Component-driven libraries and modern meta-frameworks for fast, scalable web apps.",
    skills: [
      { name: "React.js (18 / 19)", level: "Advanced", desc: "Hooks, custom state architecture, component reusability, memoization." },
      { name: "Next.js (App Router)", level: "Proficient", desc: "Server/Client Components, dynamic routing, metadata, fast image loading." },
      { name: "Tailwind CSS", level: "Expert", desc: "JIT compiler, responsive layouts, design tokens, custom themes, micro-interactions." }
    ]
  },
  {
    name: "Languages & Foundational Web",
    description: "Core programming languages and web standards learned through self-study and university coursework.",
    skills: [
      { name: "JavaScript (ES6+)", level: "Advanced", desc: "Async/await, Promises, closures, array methods, DOM manipulation, APIs." },
      { name: "HTML5 Semantic Architecture", level: "Expert", desc: "Clean semantic markup, WAI-ARIA accessibility, SEO tags, structured data." },
      { name: "CSS3 & Modern Layouts", level: "Advanced", desc: "Flexbox, CSS Grid, custom properties, animations, media queries." },
      { name: "C++ (FAST-NUCES Core)", level: "Academic Rigor", desc: "Loops, arrays, pointers, functions, memory layout, algorithmic thinking." }
    ]
  },
  {
    name: "Developer Tools & Workflow",
    description: "Modern development ecosystem ensuring code quality and seamless team collaboration.",
    skills: [
      { name: "Git & GitHub", level: "Proficient", desc: "Branching, commit conventions, pull requests, repository management." },
      { name: "VS Code & Terminal (Zsh)", level: "Advanced", desc: "Custom build tasks, clang++ compilation, debugging, shortcut mastery." },
      { name: "Vite & npm Ecosystem", level: "Proficient", desc: "Modern bundlers, package management, dependency resolution, dev scripts." },
      { name: "Responsive & Cross-Browser", level: "Expert", desc: "Pixel-perfect mobile, tablet, and widescreen testing across Safari and Chrome." }
    ]
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Blueprint & Architecture",
    category: "Planning & Wireframing",
    summary: "Deconstructing user requirements into modular component trees, responsive wireframes, and accessible layout hierarchies.",
    details: [
      "Analyze UI requirements and responsive breakpoints",
      "Sketch component trees and determine state ownership",
      "Define semantic HTML structure and ARIA landmark roles"
    ]
  },
  {
    number: "02",
    title: "Semantic & Responsive DOM",
    category: "Core Structure",
    summary: "Crafting bulletproof, accessible HTML foundations that look great on any screen from mobile to ultra-wide monitors.",
    details: [
      "Implement mobile-first CSS Grid and Flexbox containers",
      "Ensure keyboard tab navigation and screen-reader accessibility",
      "Configure dynamic viewport scaling and typographic clamps"
    ]
  },
  {
    number: "03",
    title: "Tailwind & Reactive State",
    category: "Interactive Engineering",
    summary: "Styling with clean utility tokens, designing tactile micro-interactions, and binding resilient React state logic.",
    details: [
      "Build with custom Tailwind design tokens and CSS variables",
      "Write clean, decoupled React hooks for UI interactions",
      "Integrate smooth hover physics, spring transitions, and modals"
    ]
  },
  {
    number: "04",
    title: "Optimization & Deployment",
    category: "Performance & Launch",
    summary: "Auditing Lighthouse scores, eliminating cumulative layout shifts (CLS), and deploying to high-speed CDN infrastructure.",
    details: [
      "Achieve 95+ Google Lighthouse scores across all metrics",
      "Minify bundles and optimize SVG / WebP media assets",
      "Continuous deployment via Vercel / GitHub Actions"
    ]
  }
];

export const EDUCATION_INFO = {
  institution: "FAST-NUCES (National University of Computer & Emerging Sciences)",
  campus: "Lahore Campus, Faisal Town",
  degree: "Bachelor of Science in Computer Science (BSCS)",
  term: "1st Semester (2024 – 2028)",
  currentCourses: [
    "Programming Fundamentals (C++)",
    "Applied Physics / Basic Electronics",
    "Calculus & Analytical Geometry",
    "English Composition & Comprehension",
    "Introduction to Computing"
  ],
  academicHighlights: [
    "Rigorous curriculum focusing on algorithmic efficiency, memory management, and computational logic",
    "Hands-on coding in C++ translating into deeper understanding of JavaScript runtimes and browser performance",
    "Active participant in university tech and coding community circles"
  ]
};

export const COMPARISON_DATA = {
  title: "From Design Blueprint to Living Production Code",
  subtitle: "Drag the slider to inspect how a wireframe spec translates into pixel-perfect React & Tailwind CSS.",
  wireframeLabel: "01 · Schematic Wireframe (Blueprint)",
  wireframeSpecs: ["Semantic DOM outline", "Grid & Flex bounds (gap-6)", "Monochrome spatial layout"],
  codeLabel: "02 · Live Production UI (React + Tailwind)",
  codeSpecs: ["Polished micro-shadows", "Active hover states & icons", "Curated luxury typography"]
};
