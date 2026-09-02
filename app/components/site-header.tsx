import Link from "next/link";

const navigation = [["项目", "/work"], ["文章", "/writing"], ["摄影", "/photography"]] as const;
const signaturePath = "M8 36C13 27 18 12 22 4C21 14 18 28 15 37C23 26 33 14 43 7C36 17 27 25 18 29C27 28 34 33 41 36C46 38 50 31 53 24C51 30 52 34 56 34C61 34 64 27 67 25C62 24 59 28 60 31C61 35 67 35 72 31C76 28 77 24 80 24C77 29 77 34 81 34C85 34 87 26 92 25C96 24 98 28 95 31C92 35 88 34 89 30C90 26 95 25 99 28C102 31 102 34 106 34C110 34 112 27 115 24C113 29 113 34 117 34C121 34 124 25 129 25C133 25 134 29 132 32C131 35 136 35 141 31C145 28 150 27 154 29";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="signature" href="/" aria-label="Kieran Wang 首页">
        <svg viewBox="0 0 160 42" role="img" aria-labelledby="signature-title">
          <title id="signature-title">Kieran Wang signature</title>
          <mask id="signature-mask" maskUnits="userSpaceOnUse" x="2" y="2" width="156" height="38" style={{ maskType: "alpha" }}>
            <path className="signature-ink" d={signaturePath} />
          </mask>
          <g mask="url(#signature-mask)">
            <path className="signature-guide" pathLength="1" d={signaturePath} />
          </g>
        </svg>
      </Link>

      <div className="header-actions">
        <nav aria-label="主导航">{navigation.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav>
        <div className="social-actions" aria-label="社交媒体">
          <a className="icon-button" href="https://github.com/kieranwv" rel="noreferrer" target="_blank" aria-label="GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.4a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.6-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.2 9.2 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.5 1 2.6 0 3.8-2.3 4.6-4.6 4.9.4.3.7.9.7 1.8V21c0 .4.2.6.7.5A9.8 9.8 0 0 0 12 2.4Z" /></svg>
          </a>
          <a className="icon-button" href="https://x.com/kieranwdev" rel="noreferrer" target="_blank" aria-label="X">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.6 4h4.5l3.7 5.2L17.3 4h2.1l-5.7 6.7L20 20h-4.5l-4.1-5.8L6.5 20H4.4l6-7.3L4.6 4Zm3.3 1.5 8.4 13h1.9l-8.4-13H7.9Z" /></svg>
          </a>
        </div>
      </div>
    </header>
  );
}
