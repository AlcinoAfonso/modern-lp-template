import { cn } from '@/lib/utils';
import Image from 'next/image';

interface AvatarProps {
  src?: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Avatar({ 
  src, 
  alt, 
  size = 'md',
  className 
}: AvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  if (!src) {
    return (
      <div
        className={cn(
          sizeClasses[size],
          'rounded-full bg-primary-100 flex items-center justify-center',
          className
        )}
      >
        <span className="text-primary-600 font-semibold">
          {alt.charAt(0).toUpperCase()}
        </span>
      </div>
    );
  }

  return (
    <div className={cn('relative', sizeClasses[size], className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="rounded-full object-cover"
      />
    </div>
  );
}
