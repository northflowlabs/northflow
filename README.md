# Northflow Technologies

Sovereign digital infrastructure for European institutions. Resilient digital infrastructure designed for government entities and mission-critical operations.

## Welcome

Northflow is built by people who care deeply about systems that last.

This repository is public by design. We believe that showing how we build is part of earning trust—especially when working in complex and regulated environments.

You're welcome to explore the code, structure, and decisions reflected here. This is not a demo or a prototype, but part of a living system that we intend to grow and maintain over time.

## Overview

Northflow Technologies provides auditable systems engineered for operational continuity and regulatory compliance across Europe. Our platform supports institutional stakeholders requiring sovereign infrastructure solutions.

## Quick Start

```bash
git clone <repository-url>
cd northflow_technologies
npm install
cp .env.example .env.local
# Edit .env.local with your configuration
npm run dev
```

Visit `http://localhost:4028` to view the application.

## Environment Variables

Required variables:
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key

Optional variables:
- `RESEND_API_KEY` - Email service API key
- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` - Analytics tracking ID

See `.env.example` for complete configuration options.

## Available Scripts

- `npm run dev` - Start development server (port 4028)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Deployment

### Vercel

Connect your repository to Vercel and configure environment variables. Deployment occurs automatically on push to main branch.

### Manual

```bash
npm run build
npm run start
```

## Technology Stack

- **Framework**: Next.js 15.5.12 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Deployment**: Vercel

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # Reusable UI components
├── lib/             # Utility functions and configurations
└── types/           # TypeScript type definitions
```

## Contributing

Fork the repository, create a feature branch, and submit a pull request. Ensure all tests pass before submission.

## License

This project is proprietary software. All rights reserved.
