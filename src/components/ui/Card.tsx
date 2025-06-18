import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
}

export function Card({ children, className, glass = false }: CardProps) {
  return (
    <div
      className={cn(
        glass ? 'glass' : 'card-modern',
        className
      )}
    >
      {children}
    </div>
  );
}
