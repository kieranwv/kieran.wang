# kieran.wang

The personal website of Kieran Wang — developer, product builder, and photographer.

> 做软件和产品，也拍蓝调时刻。

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
- `public/og.png` — social sharing card

Built with Next-compatible React, vinext, and Cloudflare Workers.
