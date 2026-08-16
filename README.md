# kieran.wang

The personal website of Kieran Wang — developer and product builder.

> 一个简洁的个人索引，记录软件、产品、设计与其他正在发生的事。

## Development

Requires Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

- `npm run dev` — start the local development server
- `npm run build` — create a production build
- `npm test` — build and verify the rendered homepage

## Structure

- `app/page.tsx` — homepage content
- `app/globals.css` — visual system and responsive styles
- `app/layout.tsx` — metadata and social preview configuration
- `public/og-v2.png` — social sharing card
- `netlify.toml` — Netlify build and local development settings

Built with Next.js and deployed on Netlify. Netlify applies its current OpenNext
adapter automatically during deployment, so no adapter package is pinned here.
