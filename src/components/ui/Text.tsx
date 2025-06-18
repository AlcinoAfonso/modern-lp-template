import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { animations } from '@/config/animations';

interface TextProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  muted?: boolean;
  animate?: boolean;
}

export function Text({ 
  children, 
  className, 
  size = 'base',
  muted = false,
  animate = false
}: TextProps) {
  const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base md:text-lg',
    lg: 'text-lg md:text-xl',
    xl: 'text-xl md:text-2xl'
  };

  const content = (
    <p
      className={cn(
        sizeClasses[size],
        muted && 'text-muted',
        'leading-relaxed',
        className
      )}
    >
      {children}
    </p>
  );

  if (!animate) return content;

  return (
    <motion.div {...animations.fadeIn}>
      {content}
    </motion.div>
  );
}
