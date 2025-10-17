import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'LUXE - Luxury Fashion & Lifestyle',
    template: '%s | LUXE',
  },
  description: 'Discover luxury fashion and lifestyle products from the world\'s finest designers.',
  keywords: ['luxury', 'fashion', 'designer', 'premium', 'lifestyle'],
  authors: [{ name: 'LUXE' }],
  creator: 'LUXE',
  publisher: 'LUXE',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://luxe-fashion.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'LUXE - Luxury Fashion & Lifestyle',
    description: 'Discover luxury fashion and lifestyle products from the world\'s finest designers.',
    url: 'https://luxe-fashion.com',
    siteName: 'LUXE',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LUXE - Luxury Fashion & Lifestyle',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUXE - Luxury Fashion & Lifestyle',
    description: 'Discover luxury fashion and lifestyle products from the world\'s finest designers.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body bg-white text-charcoal-900 antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}