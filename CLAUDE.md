# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Next.js website for comparing AI coding assistant subscriptions (Coding Plans). The site compares pricing, features, limits, and performance of major AI coding platforms including Claude Pro, ChatGPT Plus, GitHub Copilot, Cursor, and more.

The website includes affiliate links to earn commission from referrals.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.4
- **UI Components**: Lucide React (icons)
- **Build Output**: Static export (`dist/`)

## Common Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server (localhost:3000) |
| `npm run build` | Build static site for production |
| `npm start` | Serve production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
.
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx   # Root layout with metadata
│   │   ├── page.tsx     # Home page
│   │   └── globals.css  # Global styles
│   ├── components/       # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── PlanCard.tsx
│   │   └── ComparisonTable.tsx
│   ├── data/
│   │   └── plans.ts     # Coding plan data
│   └── types/
│       └── index.ts     # TypeScript interfaces
├── dist/                # Build output (generated)
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── CLAUDE.md            # This file
```

## Data Structure

The coding plan data is stored in `src/data/plans.ts`. Each plan includes:

- Basic info (name, provider, pricing)
- Usage limits (requests, tokens, context length)
- Features list
- Supported models
- Affiliate link and commission info

## Adding a New Coding Plan

1. Add the plan data to `src/data/plans.ts`:

```typescript
{
  id: 'unique-id',
  name: 'Plan Name',
  provider: 'Company',
  pricing: {
    monthly: 20,
    yearly: 200,
    currency: 'USD',
  },
  limits: {
    requestsPerMonth: -1, // -1 for unlimited
    tokensPerMonth: -1,
    maxContextLength: 128000,
  },
  features: ['Feature 1', 'Feature 2'],
  models: ['model-1', 'model-2'],
  affiliateLink: 'https://referral-link.com',
  affiliateCommission: 'Description',
}
```

2. The plan will automatically appear in both the card grid and comparison table.

## Styling Guidelines

- Use Tailwind utility classes
- Color scheme: Blue as primary (`blue-600`), gray for text
- Responsive design: mobile-first approach
- Cards have subtle shadows and rounded corners (`rounded-xl`)
- Interactive elements have hover states

## SEO

- Meta tags are configured in `src/app/layout.tsx`
- Semantic HTML structure for better accessibility

## Deployment

The site is configured for static export (`output: 'export'` in `next.config.js`).

To deploy:
1. Run `npm run build`
2. Deploy the `dist/` folder to your hosting platform (Vercel, Netlify, Cloudflare Pages, etc.)

## Environment Variables

Create a `.env.local` file if you need environment variables:

```
ANALYTICS_ID=your_analytics_id
```

Note: Environment variables are only used at build time for static export.
