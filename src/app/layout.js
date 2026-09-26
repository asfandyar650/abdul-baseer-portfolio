import "./globals.css";

export const metadata = {
  title: "Abdul Baseer Khan — Front-End Developer | FAST University Lahore",
  description: "Portfolio of Abdul Baseer Khan, front-end developer and BS Computer Science undergraduate at FAST-NUCES Lahore. Engineering responsive, high-performance web applications with React, Next.js, Tailwind CSS, and C++ algorithmic logic.",
  keywords: [
    "Abdul Baseer Khan",
    "Front-End Developer",
    "FAST University Lahore",
    "FAST-NUCES",
    "React Developer",
    "Next.js Developer",
    "Tailwind CSS",
    "Portfolio",
    "BS Computer Science Lahore"
  ],
  authors: [{ name: "Abdul Baseer Khan" }],
  creator: "Abdul Baseer Khan",
  openGraph: {
    title: "Abdul Baseer Khan — Front-End Developer | FAST University Lahore",
    description: "Engineering responsive, high-performance web applications with React, Next.js & Tailwind CSS.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="atelier" className="scroll-smooth">
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:rounded-full focus:bg-[var(--text-primary)] focus:px-5 focus:py-3 focus:text-sm focus:text-[var(--bg-primary)] focus:shadow-xl"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
