# LUXE Project Structure

## Architecture Overview

```
luxe-headless-shopify/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Authentication routes
│   │   ├── (home)/            # Homepage and main routes
│   │   ├── api/               # API routes and webhooks
│   │   ├── products/          # Product catalog
│   │   ├── cart/              # Shopping cart
│   │   └── checkout/          # Checkout flow
│   ├── components/            # React components
│   │   ├── ui/                # Base UI components
│   │   ├── layout/            # Layout components
│   │   ├── product/           # Product-specific components
│   │   └── forms/             # Form components
│   ├── lib/                   # Core libraries and utilities
│   │   ├── shopify/           # Shopify API client
│   │   ├── stores/            # Zustand stores
│   │   └── utils/             # Utility functions
│   ├── hooks/                 # Custom React hooks
│   ├── types/                 # TypeScript type definitions
│   └── styles/                # Global styles and themes
├── public/                    # Static assets
├── cypress/                   # E2E tests
├── .github/                   # GitHub workflows
├── scripts/                   # Build and deployment scripts
├── docs/                      # Documentation
└── config/                    # Configuration files
```

## Key Components

### 1. Shopify Integration
- **Server-side proxy** for secure API calls
- **GraphQL client** with type-safe queries
- **Webhook handlers** for real-time updates
- **Cart synchronization** across sessions

### 2. State Management
- **Zustand stores** for cart, user, and UI state
- **Persistent storage** with IndexedDB fallback
- **Real-time updates** from Shopify webhooks
- **Optimistic updates** for smooth UX

### 3. UI Components
- **Design system** with luxury aesthetic
- **Micro-interactions** using Anime.js
- **Responsive design** with Tailwind CSS
- **Accessibility** with ARIA labels and keyboard nav

### 4. Performance & SEO
- **SSR/ISR** for fast loading and SEO
- **Image optimization** with Next.js Image
- **Lazy loading** for components and images
- **Meta tags** and structured data

## Security Features
- **Environment variables** for sensitive data
- **Server-side only** Shopify tokens
- **CSP headers** for XSS protection
- **Rate limiting** on API routes
- **Input validation** and sanitization