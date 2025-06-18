import { cn } from '@/lib/utils';
import { Card } from './Card';
import { LucideIcon } from 'lucide-react';

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
}

export function IconCard({ 
  icon: Icon, 
  title, 
  description, 
  className,
  iconClassName 
}: IconCardProps) {
  return (
    <Card className={cn('p-6 md:p-8 group', className)}>
      <div className={cn(
        'w-14 h-14 rounded-xl bg-primary-100 text-primary-600',
        'flex items-center justify-center mb-4',
        'group-hover:scale-110 transition-transform duration-300',
        iconClassName
      )}>
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted">{description}</p>
    </Card>
  );
}
