# LUXE - Headless Shopify Storefront

A luxury, high-performance headless Shopify storefront built with modern web technologies, featuring a sophisticated design system, advanced commerce functionality, and enterprise-grade architecture.

## 🌟 Features

### Commerce Functionality
- ✅ **Full Product Catalog** with advanced filtering and search
- ✅ **Shopping Cart** with real-time synchronization and persistence
- ✅ **Customer Accounts** with secure authentication
- ✅ **Checkout Flow** integrated with Shopify's secure payment system
- ✅ **Order Management** and customer dashboard
- ✅ **Webhook Processing** for real-time updates

### Technical Excellence
- ✅ **Next.js 14** with App Router and React Server Components
- ✅ **TypeScript** for type safety and developer experience
- ✅ **GraphQL** integration with Shopify Storefront API
- ✅ **Zustand** for efficient state management
- ✅ **Tailwind CSS** for utility-first styling
- ✅ **Server-Side Rendering (SSR)** and **Static Site Generation (SSG)**
- ✅ **Edge Runtime** for optimal performance

### Design & UX
- ✅ **Luxury Aesthetic** with Playfair Display + Inter typography
- ✅ **Responsive Design** optimized for all devices
- ✅ **Micro-interactions** using Anime.js and Framer Motion
- ✅ **Accessibility** compliant with WCAG 2.1 AA standards
- ✅ **Performance** optimized with Core Web Vitals in mind

### Security & Monitoring
- ✅ **Environment Variables** for secure configuration
- ✅ **Server-side Proxy** to protect sensitive tokens
- ✅ **CSP Headers** for XSS protection
- ✅ **Rate Limiting** on API routes
- ✅ **Error Monitoring** with Sentry integration
- ✅ **Analytics** with Google Analytics 4

## 🏗️ Architecture

```
luxe-headless-shopify/
├── src/
│   ├── app/                    # Next.js App Router
│   ├── components/             # React components
│   ├── lib/                    # Core libraries
│   ├── types/                  # TypeScript types
│   └── styles/                 # Global styles
├── public/                     # Static assets
├── cypress/                    # E2E tests
├── .github/                    # GitHub workflows
└── docs/                       # Documentation
```

### Key Technologies
- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **State Management**: Zustand with persistence
- **API**: Shopify Storefront GraphQL API
- **Testing**: Cypress for E2E testing
- **Deployment**: Vercel with CI/CD pipeline

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Shopify store with Storefront API access

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/luxe-headless-shopify.git
   cd luxe-headless-shopify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update the environment variables in `.env.local`:
   ```env
   SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
   SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-access-token
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript types
npm run format       # Format code with Prettier

# Testing
npm run test         # Run Cypress E2E tests
npm run test:open    # Open Cypress Test Runner
npm run test:e2e     # Run E2E tests in headless mode
```

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── (home)/            # Homepage and main routes
│   ├── api/               # API routes and webhooks
│   ├── products/          # Product catalog
│   └── checkout/          # Checkout flow
├── components/            # React components
│   ├── ui/                # Base UI components
│   ├── layout/            # Layout components
│   ├── product/           # Product-specific components
│   └── forms/             # Form components
├── lib/                   # Core libraries
│   ├── shopify/           # Shopify API client
│   ├── stores/            # Zustand stores
│   └── utils/             # Utility functions
└── types/                 # TypeScript type definitions
```

## 🎨 Design System

The design system is built around luxury aesthetics with careful attention to typography, spacing, and visual hierarchy.

### Typography
- **Display Font**: Playfair Display (serif) - for headings and brand elements
- **Body Font**: Inter (sans-serif) - for body text and UI elements

### Color Palette
- **Charcoal**: Primary color for text and UI elements
- **Amber**: Accent color for interactive elements and highlights
- **Off-White**: Background and neutral tones

### Components
All components are built with:
- TypeScript for type safety
- Tailwind CSS for styling
- Accessibility features (ARIA labels, keyboard navigation)
- Responsive design patterns

## 🔐 Security

### Environment Variables
Sensitive configuration is stored in environment variables:

```env
# Shopify API (Server-side only)
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-token
SHOPIFY_WEBHOOK_SECRET=your-secret

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Security Headers
The application includes security headers:
- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- Referrer Policy

### API Security
- Shopify tokens never exposed to client
- Server-side proxy for all API calls
- Rate limiting on API routes
- Input validation and sanitization

## 📊 Performance

### Optimization Strategies
- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Code Splitting**: Automatic code splitting by route
- **Caching**: Strategic caching with Redis
- **CDN**: Static assets served from CDN
- **Compression**: Brotli/Gzip compression

### Core Web Vitals
Target metrics:
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## 🧪 Testing

### E2E Testing with Cypress
```bash
# Run tests
npm run test:e2e

# Open test runner
npm run test:open
```

### Test Coverage
- Homepage functionality
- Product catalog browsing
- Shopping cart operations
- Checkout flow
- Mobile responsiveness
- Accessibility compliance

## 🚀 Deployment

### Vercel Deployment
The project is optimized for Vercel deployment:

1. **Connect Repository**: Connect your GitHub repository to Vercel
2. **Environment Variables**: Add environment variables in Vercel dashboard
3. **Deploy**: Automatic deployment on push to main branch

### Environment Variables on Vercel
```env
SHOPIFY_STORE_DOMAIN
SHOPIFY_STOREFRONT_ACCESS_TOKEN
SHOPIFY_WEBHOOK_SECRET
NEXT_PUBLIC_SITE_URL
```

### CI/CD Pipeline
The project includes GitHub Actions workflows for:
- **Linting and Type Checking**
- **Unit and E2E Testing**
- **Security Scanning**
- **Automated Deployment**

## 📈 Monitoring

### Analytics
- **Google Analytics 4**: User behavior tracking
- **Performance Monitoring**: Core Web Vitals tracking

### Error Tracking
- **Sentry**: Error monitoring and alerting
- **Performance Monitoring**: Real User Monitoring (RUM)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Check the documentation in the `/docs` folder
- Review the example environment configuration

## 🙏 Acknowledgments

- Shopify for the excellent Storefront API
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- The open-source community for inspiration and support

---

**Built with ❤️ for luxury commerce**