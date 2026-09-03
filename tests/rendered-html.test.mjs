import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("keeps the multi-page portfolio, SEO, and build configuration aligned", async () => {
  const [page, slogan, header, footer, projects, posts, postPage, postsLib, markdownLib, juejinPost, talks, photos, gallery, uses, usesContent, comingSoon, projectCard, entryList, layout, styles, icon, manifest, robots, sitemap, packageJson, netlify, license] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/SloganTypewriter.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/SiteHeader.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/SiteFooter.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/projects/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/posts/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/posts/[slug]/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../lib/posts.ts", import.meta.url), "utf8"),
    readFile(new URL("../lib/markdown.ts", import.meta.url), "utf8"),
    readFile(new URL("../content/posts/git-common-operations.md", import.meta.url), "utf8"),
    readFile(new URL("../app/talks/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/photos/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/PhotoGallery.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/use/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../content/use.md", import.meta.url), "utf8"),
    readFile(new URL("../app/components/ComingSoon.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/ProjectCard.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/EntryList.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/icon.svg", import.meta.url), "utf8"),
    readFile(new URL("../app/manifest.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/robots.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../netlify.toml", import.meta.url), "utf8"),
    readFile(new URL("../LICENSE", import.meta.url), "utf8"),
  ]);

  assert.match(page, /SloganTypewriter/);
  assert.match(slogan, /The design is not just what it looks like and feels like.*The design is how it works/s);
  assert.match(slogan, /function QuoteMark/);
  assert.match(slogan, /<svg className=.*slogan-quote/);
  assert.match(slogan, /slogan-copy/);
  assert.match(slogan, /slogan-caret/);
  assert.match(slogan, /<QuoteMark closing/);
  assert.match(styles, /\.slogan-copy::after[\s\S]*width: 2\.5rem[\s\S]*background: var\(--line\)/);
  assert.match(styles, /blink-caret/);
  assert.match(styles, /\.slogan-ch\.is-pending/);
  assert.doesNotMatch(page, /少一点，但要更好/);
  assert.doesNotMatch(page, /每一个看得见的决定/);
  assert.match(page, /home-flow/);
  assert.match(page, /prose prose-stone home-prose/);
  assert.match(page, /compact-rail/);
  assert.match(page, /Hey! I&apos;m Kieran/);
  assert.match(page, /web and native app developer/);
  assert.match(page, /One Step/);
  assert.match(page, /technology-list/);
  assert.match(page, /SiReact/);
  assert.match(page, /SiVuedotjs/);
  assert.match(page, /SiTypescript/);
  assert.match(page, /FaJava/);
  assert.match(page, /SiPython/);
  assert.match(page, /SiFigma/);
  assert.match(page, /href="https:\/\/react\.dev\/"/);
  assert.match(page, /href="https:\/\/vuejs\.org\/"/);
  assert.match(page, /href="https:\/\/reactnative\.dev\/"/);
  assert.match(page, /href="https:\/\/www\.typescriptlang\.org\/"/);
  assert.match(page, /href="https:\/\/dev\.java\/"/);
  assert.match(page, /href="https:\/\/www\.python\.org\/"/);
  assert.match(page, /href="https:\/\/www\.figma\.com\/"/);
  assert.match(page, /photography and fitness/);
  assert.doesNotMatch(page, /你好，我是 Kieran/);
  assert.match(page, /href="\/photos"/);
  assert.match(page, /uses-line/);
  assert.match(page, /complete list/);
  assert.match(page, /href="\/use"/);
  assert.match(page, /Find me on/);
  assert.match(page, /SiGithub/);
  assert.match(page, /SiX/);
  assert.match(page, /SiJuejin/);
  assert.match(page, />掘金</);
  assert.match(page, /SiBilibili/);
  assert.match(page, /哔哩哔哩/);
  assert.match(page, /href="https:\/\/space\.bilibili\.com\/190014206"/);
  assert.doesNotMatch(page, /SiXiaohongshu/);
  assert.doesNotMatch(page, /小红书/);
  assert.match(page, /mailto:kieranwme@gmail\.com/);
  assert.doesNotMatch(page, /href="\/about"/);
  assert.doesNotMatch(page, /codex-preview|SkeletonPreview/);
  assert.match(header, /signature-mask/);
  assert.match(header, /signature-guide/);
  assert.match(header, /const signaturePath/);
  assert.match(header, /pathLength="1"/);
  const signaturePath = header.match(/const signaturePath = "([^"]+)"/)?.[1] ?? "";
  assert.equal((signaturePath.match(/M/g) ?? []).length, 1);
  assert.match(header, /aria-label="GitHub"/);
  assert.match(header, /aria-label="X"/);
  assert.match(header, /aria-label="掘金"/);
  assert.match(header, /SiJuejin/);
  assert.match(header, /\["Projects", "\/projects"\].*\["Blog", "\/posts"\].*\["Talks", "\/talks"\].*\["Photos", "\/photos"\].*\["Use", "\/use"\]/s);
  assert.match(footer, /CC BY-NC-SA 4\.0/);
  assert.match(footer, /2023–PRESENT © Kieran Wang/);
  assert.match(page, /project\.tag/);
  assert.match(page, /variant="tile"/);
  assert.match(page, /getAllProjects/);
  assert.match(page, /getPhotos/);
  assert.match(projects, /getAllProjects/);
  assert.match(projects, /project-grid/);
  assert.match(projects, /ProjectCard/);
  assert.match(projects, /<h1 id="projects-title">Projects<\/h1>/);
  assert.match(projects, /is-empty/);
  assert.match(projects, /Nothing here yet\./);
  assert.doesNotMatch(projects, /ComingSoon/);
  assert.doesNotMatch(projects, /EntryList/);
  assert.doesNotMatch(projects, /isEmptyEntryList/);
  assert.match(projectCard, /project-card/);
  assert.match(projectCard, /project-card-canvas/);
  assert.match(projectCard, /project-card-orb/);
  assert.match(talks, /getAllTalks/);
  assert.match(talks, /isEmptyEntryList/);
  assert.match(talks, /<h1 id="talks-title">Talks<\/h1>/);
  assert.doesNotMatch(talks, /ComingSoon/);
  assert.doesNotMatch(talks, /No talks yet/);
  assert.match(comingSoon, /TalksMark/);
  assert.match(posts, /tag: post\.tag/);
  assert.match(posts, /redirect: Boolean\(post\.redirect\)/);
  assert.match(posts, /getAllPosts/);
  assert.match(posts, /groupPostsByYear/);
  assert.match(entryList, /post-list/);
  assert.match(entryList, /post-meta/);
  assert.match(entryList, /post-tag/);
  assert.match(entryList, /post-external/);
  assert.match(entryList, /item.redirect/);
  assert.match(entryList, /post-year/);
  assert.match(entryList, /Nothing here yet\./);
  assert.match(entryList, /isEmptyEntryList/);
  assert.match(posts, /isEmptyEntryList/);
  assert.match(posts, /isEmptyEntryList/);
  assert.match(posts, /<h1 id="posts-title">Blog<\/h1>/);
  assert.match(posts, /className="posts-intro">\s*<h1 id="posts-title">Blog<\/h1>\s*<\/header>/);
  assert.doesNotMatch(posts, /getJuejinPosts/);
  assert.doesNotMatch(posts, /post-arrow/);
  assert.doesNotMatch(posts, /className="liquid-glass"/);
  assert.match(postPage, /generateStaticParams/);
  assert.match(postPage, /renderPost/);
  assert.match(postPage, /MarkdownArticle/);
  assert.match(postsLib, /readMarkdownCollection\("posts"\)/);
  assert.match(markdownLib, /gray-matter/);
  assert.match(markdownLib, /marked/);
  assert.match(markdownLib, /redirect/);
  assert.match(markdownLib, /optionalString\(data\.tag\)/);
  assert.doesNotMatch(markdownLib, /SOURCE_LABELS/);
  assert.doesNotMatch(markdownLib, /sourceFromRedirect/);
  assert.match(juejinPost, /tag: 掘金/);
  assert.match(juejinPost, /redirect: https:\/\/juejin\.cn\/post\/7529430220152406042/);
  assert.match(juejinPost, /实用优先！六年前端开发常用的 Git 操作/);
  assert.match(styles, /\.liquid-glass/);
  assert.match(styles, /\.post-year/);
  assert.match(styles, /\.post-prose/);
  assert.match(styles, /\.post-article/);
  assert.match(styles, /\.photo-grid/);
  assert.match(styles, /\.project-grid/);
  assert.match(styles, /\.project-grid \{[\s\S]*grid-template-columns: 1fr/);
  assert.match(styles, /@media \(min-width: 640px\)[\s\S]*\.project-grid \{ grid-template-columns: repeat\(2/);
  assert.match(styles, /@media \(min-width: 980px\)[\s\S]*\.project-grid \{ grid-template-columns: repeat\(3/);
  assert.match(styles, /\.project-card/);
  assert.match(styles, /\.posts-content\.is-empty[\s\S]*place-content: center/);
  assert.match(styles, /\.photos-content\.is-empty[\s\S]*place-content: center/);
  assert.match(styles, /\.projects-content\.is-empty[\s\S]*place-content: center/);
  assert.match(styles, /\.archive-empty/);
  assert.match(photos, /getPhotos/);
  assert.match(photos, /PhotoGallery/);
  assert.match(photos, /photos-page/);
  assert.match(photos, /is-empty/);
  assert.match(photos, /Nothing here yet\./);
  assert.doesNotMatch(photos, /<h1/);
  assert.doesNotMatch(photos, /ComingSoon/);
  assert.match(gallery, /photo-grid/);
  assert.match(gallery, /photo-lightbox/);
  assert.doesNotMatch(gallery, /target="_blank"/);
  assert.match(styles, /\.photo-lightbox/);
  assert.match(uses, /getUses/);
  assert.match(uses, /uses-page/);
  assert.match(uses, /uses-title/);
  assert.doesNotMatch(uses, /This list is kept/);
  assert.doesNotMatch(uses, /className="text-link"/);
  assert.match(usesContent, /https:\/\/github\.com\/kieranwv\/use/);
  assert.match(usesContent, /https:\/\/antfu\.me\/use/);
  assert.match(usesContent, /MacBook Air M1 16GB/);
  assert.match(usesContent, /NuPhy Node 75/);
  assert.match(usesContent, /Nikon Z fc/);
  assert.match(usesContent, /https:\/\/cursor\.com/);
  assert.match(usesContent, /cursor-config\/settings\.json/);
  assert.match(usesContent, /One Dark Pro/);
  assert.match(usesContent, /Monaspace Argon/);
  assert.match(usesContent, /scrcpy/);
  assert.doesNotMatch(uses, /ComingSoon/);
  assert.doesNotMatch(uses, /UsesMark/);
  assert.match(comingSoon, /Coming soon/);
  assert.match(comingSoon, /<h1>\{label\}<\/h1>/);
  assert.match(comingSoon, /coming-soon/);
  assert.match(layout, /Kieran Wang — Design is how it works/);
  assert.match(layout, /https:\/\/kieran\.wang/);
  assert.match(layout, /application\/ld\+json/);
  assert.match(layout, /canonical/);
  assert.match(layout, /summary_large_image/);
  assert.match(styles, /--night: #0c1725/);
  assert.match(styles, /--display-title-size/);
  assert.match(styles, /@plugin "@tailwindcss\/typography"/);
  assert.match(styles, /\.site-header[\s\S]*background: transparent/);
  assert.match(styles, /prefers-reduced-transparency/);
  assert.match(styles, /signature-draw/);
  assert.match(styles, /animation: signature-draw 1\.8s[^;]*forwards/);
  assert.doesNotMatch(styles, /signature-draw[^;]*infinite/);
  assert.match(styles, /signature-ink[^}]*stroke-width: 2\.8/);
  assert.doesNotMatch(styles, /transition:\s*all/);
  assert.match(icon, /stroke="#696d6b"/);
  assert.doesNotMatch(icon, /<rect/);
  assert.match(manifest, /manifest\(\): MetadataRoute\.Manifest/);
  assert.match(robots, /sitemap\.xml/);
  assert.match(sitemap, /changeFrequency: "monthly"/);
  assert.match(sitemap, /\/talks/);
  assert.match(sitemap, /\/photos/);
  assert.match(sitemap, /\/use/);
  assert.doesNotMatch(sitemap, /\/about/);
  assert.match(packageJson, /"build": "next build"/);
  assert.match(packageJson, /"build:vinext": "vinext build"/);
  assert.match(packageJson, /"vinext": "1\.0\.0-beta\.9"/);
  assert.match(packageJson, /"@tailwindcss\/typography"/);
  assert.match(packageJson, /"gray-matter"/);
  assert.match(packageJson, /"marked"/);
  assert.match(sitemap, /getRenderablePosts/);
  assert.match(sitemap, /getRenderableTalks/);
  assert.match(sitemap, /\/posts\/\$\{post\.slug\}/);
  assert.match(netlify, /command = "pnpm build"/);
  assert.match(netlify, /publish = "out"/);
  assert.match(license, /Attribution-NonCommercial-ShareAlike 4\.0 International/);
});
