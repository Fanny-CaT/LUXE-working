# LUXE Deployment Guide

## Quick Start

### 1. Environment Setup
```bash
# Copy environment template
cp .env.example .env.local

# Configure Shopify credentials
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-access-token
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Development
```bash
npm run dev
```

### 4. Production Build
```bash
npm run build
npm start
```

## Deployment Options

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Docker
```bash
# Build and run with Docker Compose
docker-compose up -d
```

### Self-hosted
1. Build the application: `npm run build`
2. Start production server: `npm start`
3. Configure reverse proxy (Nginx/Apache)

## Configuration

### Required Environment Variables
- `SHOPIFY_STORE_DOMAIN`: Your Shopify store domain
- `SHOPIFY_STOREFRONT_ACCESS_TOKEN`: Storefront API access token
- `NEXT_PUBLIC_SITE_URL`: Your site URL

### Optional Variables
- `SHOPIFY_WEBHOOK_SECRET`: For webhook processing
- `REDIS_URL`: For caching (recommended for production)
- `SENTRY_DSN`: For error monitoring

## Monitoring

### Performance
- Core Web Vitals tracking
- Real User Monitoring (RUM)
- Performance budgets

### Error Tracking
- Sentry integration
- Real-time error alerts
- Performance monitoring

### Analytics
- Google Analytics 4
- Enhanced eCommerce tracking
- Custom events and conversions

## Security Checklist

- [ ] Environment variables configured
- [ ] Shopify tokens secured (server-side only)
- [ ] CSP headers enabled
- [ ] Rate limiting configured
- [ ] Input validation implemented
- [ ] HTTPS enabled
- [ ] Security headers configured

## Performance Checklist

- [ ] Image optimization enabled
- [ ] Code splitting configured
- [ ] Caching strategy implemented
- [ ] CDN configured for static assets
- [ ] Compression enabled
- [ ] Core Web Vitals optimized

## Support

For deployment support:
1. Check the comprehensive README.md
2. Review environment configuration
3. Check build logs for errors
4. Verify Shopify API credentials
5. Test in development first