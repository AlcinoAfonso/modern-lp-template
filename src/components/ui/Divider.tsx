import { cn } from '@/lib/utils';

interface DividerProps {
  className?: string;
  variant?: 'solid' | 'dashed' | 'dotted';
}

export function Divider({ 
  className,
  variant = 'solid' 
}: DividerProps) {
  return (
    <hr
      className={cn(
        'border-t border-gray-200',
        {
          'border-dashed': variant === 'dashed',
          'border-dotted': variant === 'dotted'
        },
        className
      )}
    />
  );
}
