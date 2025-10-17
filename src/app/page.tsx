import { Suspense } from 'react';
import { Header } from '@/components/layout/header';
import { HeroSection } from '@/components/sections/hero-section';
import { FeaturedProducts } from '@/components/sections/featured-products';
import { ProductCarousel } from '@/components/product/product-carousel';
import { NewsletterSection } from '@/components/sections/newsletter-section';
import { Footer } from '@/components/layout/footer';
import { CartSidebar } from '@/components/cart/cart-sidebar';
import { MobileMenu } from '@/components/layout/mobile-menu';
import { SearchOverlay } from '@/components/search/search-overlay';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection />
        
        <Suspense fallback={<div className="h-96 shimmer" />}>
          <FeaturedProducts />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 shimmer" />}>
          <ProductCarousel 
            title="New Arrivals"
            query="tag:new-arrivals"
          />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 shimmer" />}>
          <ProductCarousel 
            title="Best Sellers"
            query="tag:best-seller"
          />
        </Suspense>
        
        <NewsletterSection />
      </main>
      
      <Footer />
      
      <CartSidebar />
      <MobileMenu />
      <SearchOverlay />
    </div>
  );
}