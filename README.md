# Aaron Huffman — Personal Portfolio

Premium editorial portfolio site built with Next.js, TypeScript, Tailwind CSS v4, and Framer Motion.

## Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (config-in-CSS)
- **Animation**: Framer Motion
- **Fonts**: Playfair Display (serif) + DM Sans (sans)
- **Color Palette**: Option A — Bone and Ink

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Customization

### Swap your name
Update `components/Footer.tsx` and `app/layout.tsx` metadata.

### Add real photography / video
In `components/Work.tsx`, each project has a visual card area with a monogram placeholder.
Replace the placeholder `<span>` with:
```tsx
<img src="/images/kraken-narratives.jpg" alt="..." className="w-full h-full object-cover" />
// or for video:
<video autoPlay muted loop playsInline className="w-full h-full object-cover">
  <source src="/video/project.mp4" type="video/mp4" />
</video>
```

### Update contact details
Replace `aaron@example.com` and social links in `components/Footer.tsx`.

### Update LinkedIn / Instagram
Search `components/Footer.tsx` for placeholder URLs.

## Structure

```
components/
  Nav.tsx              — Sticky nav, mobile menu
  Hero.tsx             — Full-viewport entry with name reveal
  Posture.tsx          — Dark "I build brands from the inside out" section
  Strategy.tsx         — Four-Box Audit, Position to System, Three C's
  CreativePhilosophy.tsx — Interstitial philosophy statement
  Work.tsx             — 4-project case study gallery
  Leadership.tsx       — Dark section with principles + testimonials
  Honors.tsx           — Award recognition
  Footer.tsx           — Contact + close
  FadeIn.tsx           — Reusable scroll-triggered animation wrapper
```

## Design Tokens (globals.css)

All colors defined as CSS custom properties via `@theme`:
- `--color-bone` `#F5F2ED` — background
- `--color-ink` `#0E0E0E` — primary text
- `--color-ink-secondary` `#6B6860`
- `--color-navy` `#1B3A6B` — accent
- `--color-border` `#D8D4CC`
