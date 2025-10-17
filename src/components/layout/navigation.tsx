'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const navigationItems = [
  { name: 'New Arrivals', href: '/collections/new-arrivals' },
  { name: 'Women', href: '/collections/women' },
  { name: 'Men', href: '/collections/men' },
  { name: 'Accessories', href: '/collections/accessories' },
  { name: 'Sale', href: '/collections/sale' },
];

export function Navigation() {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    const currentItem = navigationItems.find(item => pathname.startsWith(item.href));
    setActiveItem(currentItem?.href || null);
  }, [pathname]);

  return (
    <ul className="flex items-center space-x-8">
      {navigationItems.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            className={cn(
              'relative text-sm font-medium transition-colors duration-200',
              'hover:text-amber-600',
              activeItem === item.href
                ? 'text-amber-600'
                : 'text-charcoal-700'
            )}
          >
            {item.name}
            {activeItem === item.href && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-600 rounded-full" />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}