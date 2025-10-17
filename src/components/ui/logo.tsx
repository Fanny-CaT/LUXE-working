import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn('font-display font-bold text-2xl', className)}>
      <span className="text-charcoal-900">LUXE</span>
      <span className="text-amber-600">.</span>
    </div>
  );
}