import { cn } from '@/lib/utils';
import NextLink from 'next/link';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function Link({ 
  href, 
  children, 
  className,
  external = false 
}: LinkProps) {
  const isExternal = external || href.startsWith('http');
  
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'text-primary-600 hover:text-primary-700 underline-offset-4 hover:underline transition-colors',
          className
        )}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink
      href={href}
      className={cn(
        'text-primary-600 hover:text-primary-700 underline-offset-4 hover:underline transition-colors',
        className
      )}
    >
      {children}
    </NextLink>
  );
}
