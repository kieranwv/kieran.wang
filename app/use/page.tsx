import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Uses",
  description: "The hardware and software Kieran Wang uses for design and development.",
};

export const dynamic = "force-static";

const SOURCE_REPO = "https://github.com/kieranwv/use";
const SETTINGS_URL = `${SOURCE_REPO}/blob/main/cursor-config/settings.json`;
const EXTENSIONS_URL = `${SOURCE_REPO}/blob/main/cursor-config/extensions.json`;

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} rel="noreferrer" target="_blank">
      {children}
    </a>
  );
}

function UseList({ items }: { items: { label: string; value: ReactNode }[] }) {
  return (
    <dl className="uses-list">
      {items.map((item) => (
        <div className="uses-row" key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function UsesPage() {
  return (
    <main id="top" className="uses-page">
      <SiteHeader />

      <article className="uses-content" aria-labelledby="uses-title">
        <header className="uses-intro">
          <h1 id="uses-title">Uses</h1>
        </header>
        <p className="uses-lead">
          Things I am using — hardware, software, and the stack I build with every day.
          Inspired by <Ext href="https://antfu.me/use">Anthony Fu</Ext>.
        </p>

        <section className="uses-group" aria-labelledby="uses-hardware">
          <h2 id="uses-hardware">Hardware</h2>
          <UseList
            items={[
              { label: "Laptop", value: "MacBook Air M1 16GB / MacBook Pro M2 Pro 32GB" },
              { label: "Keyboard", value: "NuPhy Node 75" },
              { label: "Camera", value: "Nikon Z fc / NIKKOR Z DX 16-50mm f/3.5-6.3 VR / DJI Osmo Action 4" },
            ]}
          />
        </section>

        <section className="uses-group" aria-labelledby="uses-development">
          <h2 id="uses-development">Development</h2>

          <div className="uses-subgroup">
            <h3>Editor</h3>
            <UseList
              items={[
                {
                  label: "Editor",
                  value: (
                    <>
                      <Ext href="https://cursor.com">Cursor</Ext>
                      {" ("}
                      <Ext href={SETTINGS_URL}>settings.json</Ext>
                      {" / "}
                      <Ext href={EXTENSIONS_URL}>extensions.json</Ext>
                      {")"}
                    </>
                  ),
                },
                {
                  label: "Theme",
                  value: <Ext href="https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme">One Dark Pro</Ext>,
                },
                {
                  label: "Font",
                  value: (
                    <>
                      <Ext href="https://monaspace.githubnext.com/">Monaspace Argon</Ext>
                      {" with ligatures ("}
                      <code>ss01</code> <code>ss02</code> <code>ss06</code>
                      {")"}
                    </>
                  ),
                },
                {
                  label: "File Icons",
                  value: <Ext href="https://marketplace.visualstudio.com/items?itemName=file-icons.file-icons">File Icons</Ext>,
                },
                {
                  label: "Product Icons",
                  value: <Ext href="https://marketplace.visualstudio.com/items?itemName=antfu.icons-carbon">Carbon Icons</Ext>,
                },
                { label: "Other IDEs", value: "Xcode / Android Studio / HBuilderX" },
              ]}
            />
          </div>

          <div className="uses-subgroup">
            <h3>Stack</h3>
            <UseList
              items={[
                { label: "Language", value: "JavaScript / TypeScript / Java / Kotlin / Swift / Python" },
                { label: "Framework", value: "React Native / React / Vue / Vite / Nuxt / Next / Astro / uni-app / Spring Boot / Prisma / FastAPI" },
                { label: "Runtime", value: "JDK 17 / Node / Python 3" },
                { label: "Database", value: "MySQL / MongoDB / Navicat Premium" },
                { label: "Design", value: "Figma" },
                { label: "Shell", value: "zsh" },
                { label: "Package", value: "pnpm / npm / pip" },
              ]}
            />
          </div>

          <div className="uses-subgroup">
            <h3>Tools</h3>
            <UseList
              items={[
                {
                  label: "Android mirroring and control",
                  value: <Ext href="https://github.com/Genymobile/scrcpy">scrcpy</Ext>,
                },
              ]}
            />
          </div>
        </section>
      </article>

      <SiteFooter />
    </main>
  );
}
