import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

function Mark({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

export function ProjectsMark() {
  return (
    <Mark>
      <path d="M4.5 8.4 12 4.2l7.5 4.2L12 12.6 4.5 8.4Z" />
      <path d="M4.5 12.3 12 16.5l7.5-4.2" />
      <path d="M4.5 16.2 12 20.4l7.5-4.2" />
    </Mark>
  );
}

export function PostsMark() {
  return (
    <Mark>
      <rect x="6" y="3.75" width="12" height="16.5" rx="1.6" />
      <path d="M9 9h6M9 12.25h6M9 15.5h3.5" />
    </Mark>
  );
}

export function PhotosMark() {
  return (
    <Mark>
      <path d="M8 7h1.85l1.15-1.6h2l1.15 1.6H16a2.1 2.1 0 0 1 2.1 2.1v7.3A2.1 2.1 0 0 1 16 18.5H8a2.1 2.1 0 0 1-2.1-2.1V9.1A2.1 2.1 0 0 1 8 7Z" />
      <circle cx="12" cy="13" r="2.55" />
    </Mark>
  );
}

export function ComingSoon({ label, icon }: { label: string; icon: ReactNode }) {
  return (
    <main id="top" className="coming-page">
      <SiteHeader />
      <section className="coming-soon" aria-label={label}>
        {icon}
        <p>Coming soon</p>
      </section>
      <SiteFooter />
    </main>
  );
}
