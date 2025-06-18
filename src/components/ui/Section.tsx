import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  fullWidth?: boolean;
  pattern?: boolean;
}

export function Section({ 
  children, 
  className, 
  containerClassName,
  id,
  fullWidth = false,
  pattern = false
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative py-16 md:py-24 lg:py-32',
        pattern && 'overflow-hidden',
        className
      )}
    >
      {pattern && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent" />
      )}
      {fullWidth ? (
        <div className={cn('relative z-10', containerClassName)}>
          {children}
        </div>
      ) : (
        <Container className={cn('relative z-10', containerClassName)}>
          {children}
        </Container>
      )}
    </section>
  );
}
