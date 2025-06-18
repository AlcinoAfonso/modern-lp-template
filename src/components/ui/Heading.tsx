import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { animations } from '@/config/animations';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  gradient?: boolean;
  animate?: boolean;
}

export function Heading({ 
  children, 
  className, 
  level = 2,
  gradient = false,
  animate = true
}: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const sizeClasses = {
    1: 'text-4xl md:text-5xl lg:text-6xl font-bold',
    2: 'text-3xl md:text-4xl lg:text-5xl font-bold',
    3: 'text-2xl md:text-3xl lg:text-4xl font-semibold',
    4: 'text-xl md:text-2xl lg:text-3xl font-semibold',
    5: 'text-lg md:text-xl lg:text-2xl font-medium',
    6: 'text-base md:text-lg lg:text-xl font-medium'
  };

  const content = (
    <Tag
      className={cn(
        sizeClasses[level],
        gradient && 'text-gradient',
        'leading-tight',
        className
      )}
    >
      {children}
    </Tag>
  );

  if (!animate) return content;

  return (
    <motion.div {...animations.fadeInUp}>
      {content}
    </motion.div>
  );
}
