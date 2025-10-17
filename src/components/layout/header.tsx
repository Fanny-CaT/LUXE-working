'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo';
import { Navigation } from './navigation';
import { SearchButton } from '@/components/search/search-button';
import { CartButton } from '@/components/cart/cart-button';
import { MobileMenuButton } from './mobile-menu-button';
import { useUIStore } from '@/lib/stores/ui';
import { useCartStore } from '@/lib/stores/cart';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { openSearch } = useUIStore();
  const { cart } = useCartStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartItemCount = cart?.totalQuantity || 0;

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm border-b border-charcoal-100' 
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <MobileMenuButton />
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Logo className="h-8 lg:h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            <Navigation />
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <SearchButton onClick={openSearch} />
            <CartButton itemCount={cartItemCount} />
          </div>
        </div>
      </div>
    </header>
  );
}